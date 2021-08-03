package question

import (
	"errors"
	"fmt"

	"freelancer/portfolio/go/api/presenter"
	"freelancer/portfolio/go/entity"
	"freelancer/portfolio/go/usecase/user"
)

type Service struct {
	questionRepository QuestionRepository
	userRepository     user.UserRepository
}

func NewService(questionRepository QuestionRepository, userRepository user.UserRepository) *Service {
	return &Service{
		questionRepository: questionRepository,
		userRepository:     userRepository,
	}
}

func (s *Service) GetQuestions(username string, filters presenter.QuestionFilters) ([]entity.Question, *int, error) {

	user, err := s.userRepository.GetUserByUsername(username)
	if err != nil {
		return nil, nil, fmt.Errorf("GetUserByUsername: %w", err)
	}

	queries, total, err := s.questionRepository.GetQuestionsByUserID(user.ID, filters)
	if err != nil {
		return nil, nil, fmt.Errorf("GetQuestionsByUserID: %w", err)
	}

	return queries, total, nil
}

func (s *Service) CreateQuestion(question entity.QuestionPayload) error {

	user, err := s.userRepository.GetUserByUsername(question.Username)
	if err != nil {
		return fmt.Errorf("GetUserByUsername: %w", err)
	}
	question.UserID = user.ID

	err = s.questionRepository.CreateQuestion(question)
	if err != nil {
		return fmt.Errorf("CreateQuestion: %w", err)
	}
	return nil
}

func (s *Service) UpdateReaction(questionID, reactionID string) error {

	validReaction := false
	for _, r := range presenter.Reactions {
		if r == reactionID {
			validReaction = true
		}
	}
	if !validReaction {
		return errors.New("not a valid reaction")
	}

	question, err := s.questionRepository.GetQuestionByID(questionID)
	if err != nil {
		return fmt.Errorf("GetQuestionByID: %w", err)
	}

	switch reactionID {
	case "happy":
		question.Reaction.Happy += 1
	case "cool":
		question.Reaction.Cool += 1
	case "sad":
		question.Reaction.Sad += 1
	case "mad":
		question.Reaction.Mad += 1
	}

	err = s.questionRepository.UpdateQuestion(*question)
	if err != nil {
		return fmt.Errorf("UpdateQuestion: %w", err)
	}

	return nil

}

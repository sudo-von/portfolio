package question

import (
	"fmt"

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

func (s *Service) GetQuestions(username string) ([]entity.Question, *int, error) {

	user, err := s.userRepository.GetUserByUsername(username)
	if err != nil {
		return nil, nil, fmt.Errorf("GetUserByUsername: %w", err)
	}

	queries, total, err := s.questionRepository.GetQuestionsByUserID(user.ID)
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

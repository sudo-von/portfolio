package question

import (
	"log"

	"github.com/mongo-experiments/go/entity"
)

type Service struct {
	repository Repository
}

func NewService(r Repository) *Service {
	return &Service{
		repository: r,
	}
}

func (s Service) GetQuestions() ([]entity.Question, int, error) {
	queries, total, err := s.repository.GetQuestions()
	if err != nil {
		log.Println(err)
		return nil, 0, err
	}
	return queries, total, nil
}

func (s Service) CreateQuestion(question entity.QuestionPayload) error {
	err := s.repository.CreateQuestion(question)
	if err != nil {
		log.Println(err)
		return err
	}
	return nil
}

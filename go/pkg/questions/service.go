package questions

import (
	"log"

	"github.com/mongo-experiments/go/pkg/api"
)

type storage interface {
	GetQuestions() ([]api.Question, error)
	CreateQuestion(api.Question) error
}

type Service struct {
	storage storage
}

func NewService(storage storage) *Service {
	return &Service{
		storage: storage,
	}
}

func (s Service) GetQuestions() ([]api.Question, error) {
	queries, err := s.storage.GetQuestions()
	if err != nil {
		log.Println(err)
		return nil, err
	}
	return queries, nil
}

func (s Service) CreateQuestion(question api.Question) error {
	err := s.storage.CreateQuestion(question)
	if err != nil {
		log.Println(err)
		return err
	}
	return nil
}

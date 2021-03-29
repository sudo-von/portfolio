package queries

import (
	"log"

	"github.com/mongo-experiments/go/pkg/api"
)

type storage interface {
	GetQueries() ([]api.Query, error)
}

type Service struct {
	storage storage
}

func NewService(storage storage) *Service {
	return &Service{
		storage: storage,
	}
}

func (s Service) GetQueries() ([]api.Query, error) {
	queries, err := s.storage.GetQueries()
	if err != nil {
		log.Println(err)
		return nil, err
	}
	return queries, nil
}

package projects

import (
	"log"

	"github.com/mongo-experiments/go/pkg/api"
)

type storage interface {
	GetProjects() ([]api.Project, error)
}

type Service struct {
	storage storage
}

func NewService(storage storage) *Service {
	return &Service{
		storage: storage,
	}
}

func (s Service) GetProjects() ([]api.Project, error) {
	projects, err := s.storage.GetProjects()
	if err != nil {
		log.Println(err)
		return nil, err
	}
	return projects, nil
}

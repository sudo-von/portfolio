package project

import (
	"log"

	"freelancer/portfolio/go/entity"
)

type Service struct {
	repository Repository
}

func NewService(r Repository) *Service {
	return &Service{
		repository: r,
	}
}

func (s *Service) GetProjects() ([]entity.Project, int, error) {
	projects, total, err := s.repository.GetProjects()
	if err != nil {
		log.Println(err)
		return nil, 0, err
	}
	return projects, total, nil
}

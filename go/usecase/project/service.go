package project

import (
	"fmt"
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

func (s *Service) GetProjects() ([]entity.Project, *int, error) {
	projects, total, err := s.repository.GetProjects()
	if err != nil {
		return nil, nil, fmt.Errorf("GetProjects: %w", err)
	}
	return projects, total, nil
}

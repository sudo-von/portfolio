package project

import (
	"fmt"
	"freelancer/portfolio/go/entity"
)

type Service struct {
	projectRepository ProjectRepository
}

func NewService(r ProjectRepository) *Service {
	return &Service{
		projectRepository: r,
	}
}

func (s *Service) GetProjects() ([]entity.Project, *int, error) {
	projects, total, err := s.projectRepository.GetProjects()
	if err != nil {
		return nil, nil, fmt.Errorf("GetProjects: %w", err)
	}
	return projects, total, nil
}

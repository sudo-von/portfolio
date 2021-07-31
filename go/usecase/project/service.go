package project

import (
	"fmt"
	"freelancer/portfolio/go/api/presenter"
	"freelancer/portfolio/go/entity"
	"freelancer/portfolio/go/usecase/user"
)

type Service struct {
	projectRepository ProjectRepository
	userRepository    user.UserRepository
}

func NewService(projectRepository ProjectRepository, userRepository user.UserRepository) *Service {
	return &Service{
		projectRepository: projectRepository,
		userRepository:    userRepository,
	}
}

func (s *Service) GetProjects(username string, filters presenter.ProjectFilters) ([]entity.Project, *int, error) {

	user, err := s.userRepository.GetUserByUsername(username)
	if err != nil {
		return nil, nil, fmt.Errorf("GetUserByUsername: %w", err)
	}

	projects, total, err := s.projectRepository.GetProjects(user.ID, filters)
	if err != nil {
		return nil, nil, fmt.Errorf("GetProjects: %w", err)
	}

	return projects, total, nil
}

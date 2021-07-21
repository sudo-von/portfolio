package user

import (
	"fmt"
	"freelancer/portfolio/go/entity"
)

type Service struct {
	userRepository UserRepository
}

func NewService(userRepository UserRepository) *Service {
	return &Service{
		userRepository: userRepository,
	}
}

func (s *Service) GetUserByID(id string) (*entity.TinyUser, error) {
	user, err := s.userRepository.GetUserByID(id)
	if err != nil {
		return nil, fmt.Errorf("GetUserByID: %w", err)
	}
	return user, nil
}

func (s *Service) GetUserByUsername(username string) (*entity.TinyUser, error) {
	user, err := s.userRepository.GetUserByUsername(username)
	if err != nil {
		return nil, fmt.Errorf("GetUserByUsername: %w", err)
	}
	return user, nil
}

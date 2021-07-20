package user

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

func (s *Service) GetUserByID(id string) (*entity.TinyUser, error) {
	user, err := s.repository.GetUserByID(id)
	if err != nil {
		return nil, fmt.Errorf("GetUserByID: %w", err)
	}
	return user, nil
}

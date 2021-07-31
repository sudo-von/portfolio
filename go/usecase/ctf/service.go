package ctf

import (
	"fmt"

	"freelancer/portfolio/go/api/presenter"
	"freelancer/portfolio/go/entity"
	"freelancer/portfolio/go/usecase/user"
)

type Service struct {
	ctfRepository  CTFRepository
	userRepository user.UserRepository
}

func NewService(ctfRepository CTFRepository, userRepository user.UserRepository) *Service {
	return &Service{
		ctfRepository:  ctfRepository,
		userRepository: userRepository,
	}
}

func (s *Service) GetCTFS(username string, filters presenter.CTFFilters) ([]entity.CTF, *int, error) {

	user, err := s.userRepository.GetUserByUsername(username)
	if err != nil {
		return nil, nil, fmt.Errorf("GetUserByUsername: %w", err)
	}

	ctfs, total, err := s.ctfRepository.GetCTFS(user.ID, filters)
	if err != nil {
		return nil, nil, fmt.Errorf("GetCTFS: %w", err)
	}

	return ctfs, total, nil
}

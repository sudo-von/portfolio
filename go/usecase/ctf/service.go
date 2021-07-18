package ctf

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

func (s *Service) GetCTFS() ([]entity.CTF, int, error) {
	ctfs, total, err := s.repository.GetCTFS()
	if err != nil {
		log.Println(err)
		return nil, 0, err
	}
	return ctfs, total, nil
}

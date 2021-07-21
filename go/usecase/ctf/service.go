package ctf

import (
	"log"

	"freelancer/portfolio/go/entity"
)

type Service struct {
	ctfRepository CTFRepository
}

func NewService(r CTFRepository) *Service {
	return &Service{
		ctfRepository: r,
	}
}

func (s *Service) GetCTFS() ([]entity.CTF, int, error) {
	ctfs, total, err := s.ctfRepository.GetCTFS()
	if err != nil {
		log.Println(err)
		return nil, 0, err
	}
	return ctfs, total, nil
}

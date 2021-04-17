package ctfs

import (
	"log"

	"github.com/mongo-experiments/go/pkg/api"
)

type storage interface {
	GetCTFS() ([]api.CTF, int, error)
}

type Service struct {
	storage storage
}

func NewService(storage storage) *Service {
	return &Service{
		storage: storage,
	}
}

func (s Service) GetCTFS() ([]api.CTF, int, error) {
	ctfs, total, err := s.storage.GetCTFS()
	if err != nil {
		log.Println(err)
		return nil, 0, err
	}
	return ctfs, total, nil
}

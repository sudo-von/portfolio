package users

import (
	"log"

	"github.com/mongo-experiments/go/pkg/api"
)

type storage interface {
	GetUserByID(id string) (*api.User, error)
}

type Service struct {
	storage storage
}

func NewService(storage storage) *Service {
	return &Service{
		storage: storage,
	}
}

func (s Service) GetUserByID(id string) (*api.User, error) {
	user, err := s.storage.GetUserByID(id)
	if err != nil {
		log.Println(err)
		return nil, err
	}
	return user, nil
}

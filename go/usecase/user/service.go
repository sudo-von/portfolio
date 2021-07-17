package user

import (
	"log"

	"github.com/mongo-experiments/go/entity"
)

type Service struct {
	repository Repository
}

func NewService(r Repository) *Service {
	return &Service{
		repository: r,
	}
}

func (s Service) GetUserByID(id string) (*entity.User, error) {
	user, err := s.repository.GetUserByID(id)
	if err != nil {
		log.Println(err)
		return nil, err
	}
	return user, nil
}

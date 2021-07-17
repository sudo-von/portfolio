package user

import "github.com/mongo-experiments/go/entity"

type Reader interface {
	GetUserByID(id string) (*entity.User, error)
}

type Repository interface {
	Reader
}

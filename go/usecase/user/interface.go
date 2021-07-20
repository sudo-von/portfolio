package user

import "freelancer/portfolio/go/entity"

type Reader interface {
	GetUserByID(id string) (*entity.TinyUser, error)
}

type Repository interface {
	Reader
}

type UseCase interface {
	GetUserByID(id string) (*entity.TinyUser, error)
}

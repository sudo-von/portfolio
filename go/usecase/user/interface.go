package user

import "freelancer/portfolio/go/entity"

type Reader interface {
	GetUserByID(id string) (*entity.TinyUser, error)
	GetUserByUsername(username string) (*entity.TinyUser, error)
}

type UserRepository interface {
	Reader
}

type UseCase interface {
	GetUserByID(id string) (*entity.TinyUser, error)
	GetUserByUsername(username string) (*entity.TinyUser, error)
}

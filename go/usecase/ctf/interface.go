package ctf

import "freelancer/portfolio/go/entity"

type Reader interface {
	GetCTFS() ([]entity.CTF, int, error)
}

type Repository interface {
	Reader
}

type UseCase interface {
	GetCTFS() ([]entity.CTF, int, error)
}
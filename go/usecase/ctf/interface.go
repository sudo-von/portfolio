package ctf

import "github.com/mongo-experiments/go/entity"

type Reader interface {
	GetCTFS() ([]entity.CTF, int, error)
}

type Repository interface {
	Reader
}

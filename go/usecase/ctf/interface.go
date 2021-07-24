package ctf

import "freelancer/portfolio/go/entity"

type Reader interface {
	GetCTFS(userID string) ([]entity.CTF, *int, error)
}

type CTFRepository interface {
	Reader
}

type UseCase interface {
	GetCTFS(username string) ([]entity.CTF, *int, error)
}

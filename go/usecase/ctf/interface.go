package ctf

import (
	"freelancer/portfolio/go/api/presenter"
	"freelancer/portfolio/go/entity"
)

type Reader interface {
	GetCTFS(userID string, filters presenter.CTFFilters) ([]entity.CTF, *int, error)
}

type CTFRepository interface {
	Reader
}

type UseCase interface {
	GetCTFS(username string, filters presenter.CTFFilters) ([]entity.CTF, *int, error)
}

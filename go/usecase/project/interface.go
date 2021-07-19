package project

import (
	"freelancer/portfolio/go/entity"
)

type Reader interface {
	GetProjects() ([]entity.Project, *int, error)
}

type Repository interface {
	Reader
}

type UseCase interface {
	GetProjects() ([]entity.Project, *int, error)
}

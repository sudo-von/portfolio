package project

import (
	"freelancer/portfolio/go/entity"
)

type Reader interface {
	GetProjects() ([]entity.Project, *int, error)
}

type ProjectRepository interface {
	Reader
}

type UseCase interface {
	GetProjects() ([]entity.Project, *int, error)
}

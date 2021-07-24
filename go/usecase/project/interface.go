package project

import (
	"freelancer/portfolio/go/entity"
)

type Reader interface {
	GetProjects(userID string) ([]entity.Project, *int, error)
}

type ProjectRepository interface {
	Reader
}

type UseCase interface {
	GetProjects(username string) ([]entity.Project, *int, error)
}

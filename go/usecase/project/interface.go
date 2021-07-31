package project

import (
	"freelancer/portfolio/go/api/presenter"
	"freelancer/portfolio/go/entity"
)

type Reader interface {
	GetProjects(userID string, filters presenter.ProjectFilters) ([]entity.Project, *int, error)
}

type ProjectRepository interface {
	Reader
}

type UseCase interface {
	GetProjects(username string, filters presenter.ProjectFilters) ([]entity.Project, *int, error)
}

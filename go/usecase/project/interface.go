package project

import (
	"github.com/mongo-experiments/go/entity"
)

type Reader interface {
	GetProjects() ([]entity.Project, int, error)
}

type Repository interface {
	Reader
}

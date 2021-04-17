package models

import (
	"net/http"

	"github.com/mongo-experiments/go/pkg/api"
)

type ProjectList struct {
	Total    int               `json:"total"`
	Projects []ProjectResponse `bson:"results" json:"results"`
}

func (mt *ProjectList) Render(w http.ResponseWriter, r *http.Request) error {
	return nil
}

type ProjectResponse struct {
	ID          string `json:"id"`
	Title       string `json:"title"`
	Description string `json:"description"`
	Image       string `json:"image"`
	Repository  string `json:"repository"`
}

func (ur *ProjectResponse) Render(w http.ResponseWriter, r *http.Request) error {
	return nil
}

func ToResponseProject(project *api.Project) *ProjectResponse {
	return &ProjectResponse{
		ID:          project.ID,
		Title:       project.Title,
		Description: project.Description,
		Image:       project.Image,
		Repository:  project.Repository,
	}
}

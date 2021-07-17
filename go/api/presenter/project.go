package presenter

import (
	"net/http"

	"github.com/mongo-experiments/go/entity"
)

type ProjectList struct {
	Total    int               `json:"total"`
	Projects []ProjectResponse `bson:"results" json:"results"`
}

type ProjectResponse struct {
	ID          string `json:"id"`
	Title       string `json:"title"`
	Description string `json:"description"`
	Image       string `json:"image"`
	Repository  string `json:"repository"`
}

func (pl *ProjectList) Render(w http.ResponseWriter, r *http.Request) error {
	return nil
}

func (pr *ProjectResponse) Render(w http.ResponseWriter, r *http.Request) error {
	return nil
}

func ToResponseProject(project *entity.Project) *ProjectResponse {
	return &ProjectResponse{
		ID:          project.ID,
		Title:       project.Title,
		Description: project.Description,
		Image:       project.Image,
		Repository:  project.Repository,
	}
}

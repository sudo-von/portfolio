package presenter

import (
	"net/http"

	"freelancer/portfolio/go/entity"
)

type ProjectList struct {
	Total    int               `json:"total"`
	Projects []ProjectResponse `bson:"results" json:"results"`
}

type ProjectResponse struct {
	ID        string   `json:"id"`
	Title     string   `json:"title"`
	ImageURL  string   `json:"image_url"`
	TechStack []string `json:"tech_stack"`
}

func (pl *ProjectList) Render(w http.ResponseWriter, r *http.Request) error {
	return nil
}

func (pr *ProjectResponse) Render(w http.ResponseWriter, r *http.Request) error {
	return nil
}

func ToResponseProject(project *entity.Project) *ProjectResponse {
	return &ProjectResponse{
		ID:        project.ID,
		Title:     project.Title,
		ImageURL:  project.ImageURL,
		TechStack: project.TechStack,
	}
}

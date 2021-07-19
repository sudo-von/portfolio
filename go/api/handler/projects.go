package handler

import (
	"net/http"

	"freelancer/portfolio/go/api/presenter"
	"freelancer/portfolio/go/usecase/project"

	"github.com/go-chi/chi"
	"github.com/go-chi/render"
)

type ProjectController struct {
	ProjectService project.Service
}

func NewProjectController(project project.Service) *ProjectController {
	return &ProjectController{
		ProjectService: project,
	}
}

// Routes for project.
func (c *ProjectController) Routes() chi.Router {
	r := chi.NewRouter()
	r.Get("/", c.List)
	return r
}

// List renders all the projects.
func (c *ProjectController) List(w http.ResponseWriter, r *http.Request) {

	list, total, err := c.ProjectService.GetProjects()
	if err != nil {
		CheckError(err, w, r)
	}

	res := &presenter.ProjectList{
		Total:    *total,
		Projects: make([]presenter.ProjectResponse, 0, len(list)),
	}
	for _, project := range list {
		res.Projects = append(res.Projects, *presenter.ToResponseProject(&project))
	}

	w.Header().Set("Content-Type", "application/json")
	render.Status(r, http.StatusOK)
	render.Render(w, r, res)
}

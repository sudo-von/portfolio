package http

import (
	"net/http"

	"github.com/go-chi/chi"
	"github.com/go-chi/render"
	"github.com/mongo-experiments/go/pkg/api"
	"github.com/mongo-experiments/go/pkg/models"
)

type ProjectService interface {
	GetProjects() ([]api.Project, int, error)
}

type ProjectController struct {
	ProjectService ProjectService
}

func NewProjectController(project ProjectService) *ProjectController {
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
	res := &models.ProjectList{
		Total:    total,
		Projects: make([]models.ProjectResponse, 0, len(list)),
	}
	for _, project := range list {
		res.Projects = append(res.Projects, *models.ToResponseProject(&project))
	}

	w.Header().Set("Content-Type", "application/json")
	render.Status(r, http.StatusOK)
	render.Render(w, r, res)
	return
}

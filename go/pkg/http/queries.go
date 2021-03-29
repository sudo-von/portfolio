package http

import (
	"net/http"

	"github.com/go-chi/chi"
	"github.com/go-chi/render"
	"github.com/mongo-experiments/go/pkg/api"
	"github.com/mongo-experiments/go/pkg/models"
)

type QueryService interface {
	GetQueries() ([]api.Query, error)
}

type QueryController struct {
	QueryService QueryService
}

func NewQueryController(query QueryService) *QueryController {
	return &QueryController{
		QueryService: query,
	}
}

// Routes for query.
func (c *QueryController) Routes() chi.Router {
	r := chi.NewRouter()
	r.Get("/", c.List)
	return r
}

// List renders all the querys.
func (c *QueryController) List(w http.ResponseWriter, r *http.Request) {

	list, err := c.QueryService.GetQueries()
	if err != nil {
		CheckError(err, w, r)
	}
	res := &models.QueryList{}
	for _, query := range list {
		res.Queries = append(res.Queries, models.ToResponseQuery(&query))
	}
	render.Status(r, http.StatusOK)
	render.Render(w, r, res)
	return
}

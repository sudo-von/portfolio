package http

import (
	"net/http"

	"github.com/go-chi/chi"
	"github.com/go-chi/render"
	"github.com/mongo-experiments/go/pkg/api"
	"github.com/mongo-experiments/go/pkg/models"
)

type CTFService interface {
	GetCTFS() ([]api.CTF, error)
}

type CTFController struct {
	CTFService CTFService
}

func NewCTFController(ctf CTFService) *CTFController {
	return &CTFController{
		CTFService: ctf,
	}
}

// Routes for ctf.
func (c *CTFController) Routes() chi.Router {
	r := chi.NewRouter()
	r.Get("/", c.List)
	return r
}

// List renders all the ctfs.
func (c *CTFController) List(w http.ResponseWriter, r *http.Request) {

	list, err := c.CTFService.GetCTFS()
	if err != nil {
		CheckError(err, w, r)
	}
	res := &models.CTFList{}
	for _, ctf := range list {
		res.CTFS = append(res.CTFS, models.ToResponseCTF(&ctf))
	}
	render.Status(r, http.StatusOK)
	render.Render(w, r, res)
	return
}

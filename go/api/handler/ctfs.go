package handler

import (
	"freelancer/portfolio/go/api/presenter"
	"freelancer/portfolio/go/usecase/ctf"
	"net/http"

	"github.com/go-chi/chi"
	"github.com/go-chi/render"
)

type CTFHandler struct {
	CTFService ctf.Service
}

func NewCTFController(ctf ctf.Service) *CTFHandler {
	return &CTFHandler{
		CTFService: ctf,
	}
}

func (c *CTFHandler) Routes() chi.Router {
	r := chi.NewRouter()
	r.Get("/", c.List)
	return r
}

func (c *CTFHandler) List(w http.ResponseWriter, r *http.Request) {

	list, total, err := c.CTFService.GetCTFS()
	if err != nil {
		CheckError(err, w, r)
	}
	res := &presenter.CTFList{
		Total: total,
		CTFS:  make([]presenter.CTFResponse, 0, len(list)),
	}
	for _, ctf := range list {
		res.CTFS = append(res.CTFS, *presenter.ToResponseCTF(&ctf))
	}
	w.Header().Set("Content-Type", "application/json")
	render.Status(r, http.StatusOK)
	render.Render(w, r, res)
	return
}

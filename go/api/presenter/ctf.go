package presenter

import (
	"net/http"

	"github.com/mongo-experiments/go/entity"
)

type CTFList struct {
	Total int           `json:"total"`
	CTFS  []CTFResponse `json:"results"`
}

type CTFResponse struct {
	ID          string `json:"id"`
	Title       string `json:"title"`
	Description string `json:"description"`
	Image       string `json:"image"`
	Repository  string `json:"repository"`
}

func (cl *CTFList) Render(w http.ResponseWriter, r *http.Request) error {
	return nil
}

func (cr *CTFResponse) Render(w http.ResponseWriter, r *http.Request) error {
	return nil
}

func ToResponseCTF(ctf *entity.CTF) *CTFResponse {
	return &CTFResponse{
		ID:          ctf.ID,
		Title:       ctf.Title,
		Description: ctf.Description,
		Image:       ctf.Image,
		Repository:  ctf.Repository,
	}
}

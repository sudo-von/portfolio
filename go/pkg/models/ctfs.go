package models

import (
	"net/http"

	"github.com/mongo-experiments/go/pkg/api"
)

type CTFList struct {
	CTFS []*CTFResponse `json:"results"`
}

type CTF struct {
	ID          string `json:"id"`
	Title       string `json:"title"`
	Description string `json:"description"`
	Image       string `json:"image"`
	Repository  string `json:"repository"`
}

func (mt *CTFList) Render(w http.ResponseWriter, r *http.Request) error {
	return nil
}

type CTFResponse struct {
	ID          string `json:"id"`
	Title       string `json:"title"`
	Description string `json:"description"`
	Image       string `json:"image"`
	Repository  string `json:"repository"`
}

func (ur *CTFResponse) Render(w http.ResponseWriter, r *http.Request) error {
	return nil
}

func ToResponseCTF(ctf *api.CTF) *CTFResponse {
	return &CTFResponse{
		ID:          ctf.ID,
		Title:       ctf.Title,
		Description: ctf.Description,
		Image:       ctf.Image,
		Repository:  ctf.Repository,
	}
}

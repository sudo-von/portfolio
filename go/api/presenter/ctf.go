package presenter

import (
	"net/http"

	"freelancer/portfolio/go/entity"
)

type CTFFilters struct {
	Limit  int
	Offset int
}

type CTFList struct {
	Total int           `json:"total"`
	CTFS  []CTFResponse `json:"results"`
}

type CTFResponse struct {
	ID            string   `json:"id"`
	UserID        string   `json:"user_id"`
	Title         string   `json:"title"`
	Categories    []string `json:"categories"`
	ImageURL      string   `json:"image_url"`
	RepositoryURL string   `json:"repository_url"`
	CreationDate  string   `json:"creation_date"`
}

func (cl *CTFList) Render(w http.ResponseWriter, r *http.Request) error {
	return nil
}

func (cr *CTFResponse) Render(w http.ResponseWriter, r *http.Request) error {
	return nil
}

func ToResponseCTF(ctf *entity.CTF) *CTFResponse {
	return &CTFResponse{
		ID:            ctf.ID,
		UserID:        ctf.UserID,
		Title:         ctf.Title,
		Categories:    ctf.Categories,
		ImageURL:      ctf.ImageURL,
		RepositoryURL: ctf.RepositoryURL,
		CreationDate:  ctf.CreationDate.Format("2006-01-02 15:04:05"),
	}
}

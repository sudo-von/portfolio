package models

import (
	"net/http"

	"github.com/mongo-experiments/go/pkg/api"
)

type QueryList struct {
	Queries []*QueryResponse `json:"results"`
}

type Query struct {
	ID       string    `json:"id"`
	Initial  string    `json:"initial"`
	Question *Question `json:"question"`
	Answer   *Answer   `json:"answer"`
}

type Question struct {
	Title string `json:"title"`
	Date  string `json:"date"`
}

type Answer struct {
	Response string `json:"response"`
	Date     string `json:"date"`
}

func (mt *QueryList) Render(w http.ResponseWriter, r *http.Request) error {
	return nil
}

type QueryResponse struct {
	ID       string   `json:"id"`
	Initial  string   `json:"initial"`
	Question Question `json:"question"`
	Answer   Answer   `json:"answer"`
}

func (ur *QueryResponse) Render(w http.ResponseWriter, r *http.Request) error {
	return nil
}

func ToResponseQuery(query *api.Query) *QueryResponse {

	question := Question{Title: query.Question.Title, Date: query.Question.Date}
	answer := Answer{Response: query.Answer.Response, Date: query.Answer.Date}

	return &QueryResponse{
		ID:       query.ID,
		Initial:  query.Initial,
		Question: question,
		Answer:   answer,
	}
}

package models

import (
	"errors"
	"net/http"

	"github.com/mongo-experiments/go/pkg/api"
)

type QuestionList struct {
	Total     int                 `json:"total"`
	Questions []*QuestionResponse `json:"results"`
}

type Question struct {
	ID      string  `json:"id"`
	Initial string  `json:"initial"`
	Title   string  `json:"title"`
	Date    string  `json:"date"`
	Answer  *Answer `json:"answer"`
}

type Answer struct {
	Title string `json:"title"`
	Date  string `json:"date"`
}

func (mt *QuestionList) Render(w http.ResponseWriter, r *http.Request) error {
	return nil
}

type QuestionResponse struct {
	ID      string `json:"id"`
	Initial string `json:"initial"`
	Title   string `json:"title"`
	Date    string `json:"date"`
	Answer  Answer `json:"answer"`
}

func (ur *QuestionResponse) Render(w http.ResponseWriter, r *http.Request) error {
	return nil
}

type QuestionPayload struct {
	Initial string `json:"initial"`
	Title   string `json:"title"`
}

func (qp *QuestionPayload) validate() (err error) {
	if qp.Initial == "" {
		err = mergeErrors(err, errors.New("missing field initial"))
	}
	if len(qp.Initial) > 1 {
		err = mergeErrors(err, errors.New("initial's length can't be bigger than 1"))
	}
	if qp.Title == "" {
		err = mergeErrors(err, errors.New("missing field title"))
	}
	if len(qp.Title) > 300 {
		err = mergeErrors(err, errors.New("question's length can't be bigger than 300"))
	}
	return
}

func (up *QuestionPayload) Bind(r *http.Request) error {
	if err := up.validate(); err != nil {
		return err
	}
	return nil
}

func ToResponseQuestion(question *api.Question) *QuestionResponse {

	answer := Answer{Title: question.Answer.Title, Date: question.Answer.Date.Format("2006-01-02 15:04:05")}

	return &QuestionResponse{
		ID:      question.ID,
		Initial: question.Initial,
		Title:   question.Title,
		Date:    question.Date.Format("2006-01-02 15:04:05"),
		Answer:  answer,
	}

}

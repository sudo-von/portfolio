package presenter

import (
	"errors"
	"net/http"

	"freelancer/portfolio/go/entity"
)

type QuestionFilters struct {
	Limit  int
	Offset int
}

type QuestionList struct {
	Total     int                `json:"total"`
	Questions []QuestionResponse `json:"results"`
}

type QuestionResponse struct {
	ID           string   `json:"id"`
	UserID       string   `json:"user_id"`
	Question     string   `json:"question"`
	CreationDate string   `json:"creation_date"`
	Answer       Answer   `json:"answer"`
	Reaction     Reaction `json:"reactions"`
}

type QuestionPayload struct {
	Question string `json:"question"`
}

func (ql *QuestionList) Render(w http.ResponseWriter, r *http.Request) error {
	return nil
}

func (qr *QuestionResponse) Render(w http.ResponseWriter, r *http.Request) error {
	return nil
}

func (qp *QuestionPayload) validate() (err error) {
	if qp.Question == "" {
		err = mergeErrors(err, errors.New("missing field question"))
	}
	if len(qp.Question) > 300 {
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

func ToResponseQuestion(question *entity.Question) *QuestionResponse {
	answer := Answer{
		Answer:       question.Answer.Answer,
		CreationDate: question.Answer.CreationDate.Format("2006-01-02 15:04:05"),
	}
	reaction := Reaction{
		Happy: question.Reaction.Happy,
		Cool:  question.Reaction.Cool,
		Sad:   question.Reaction.Sad,
		Mad:   question.Reaction.Mad,
	}
	return &QuestionResponse{
		ID:           question.ID,
		UserID:       question.UserID,
		Question:     question.Question,
		CreationDate: question.CreationDate.Format("2006-01-02 15:04:05"),
		Answer:       answer,
		Reaction:     reaction,
	}
}

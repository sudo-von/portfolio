package presenter

import (
	"errors"
	"net/http"

	"freelancer/portfolio/go/entity"
)

type QuestionList struct {
	Total     int                `json:"total"`
	Questions []QuestionResponse `json:"results"`
}

type QuestionResponse struct {
	ID           string  `json:"id"`
	UserID       string  `json:"user_id"`
	Initial      string  `json:"initial"`
	Message      string  `json:"message"`
	QuestionDate string  `json:"question_date"`
	Answer       *Answer `json:"answer"`
}

type QuestionPayload struct {
	Username string `json:"username"`
	Initial  string `json:"initial"`
	Message  string `json:"message"`
}

func (ql *QuestionList) Render(w http.ResponseWriter, r *http.Request) error {
	return nil
}

func (qr *QuestionResponse) Render(w http.ResponseWriter, r *http.Request) error {
	return nil
}

func (qp *QuestionPayload) validate() (err error) {
	if qp.Username == "" {
		err = mergeErrors(err, errors.New("missing field username"))
	}
	if qp.Initial == "" {
		err = mergeErrors(err, errors.New("missing field initial"))
	}
	if len(qp.Initial) > 1 {
		err = mergeErrors(err, errors.New("initial's length can't be bigger than 1"))
	}
	if qp.Message == "" {
		err = mergeErrors(err, errors.New("missing field message"))
	}
	if len(qp.Message) > 300 {
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
		Message:    question.Answer.Message,
		AnswerDate: question.Answer.AnswerDate.Format("2006-01-02 15:04:05"),
	}
	return &QuestionResponse{
		ID:           question.ID,
		UserID:       question.UserID,
		Initial:      question.Initial,
		Message:      question.Message,
		QuestionDate: question.QuestionDate.Format("2006-01-02 15:04:05"),
		Answer:       &answer,
	}
}

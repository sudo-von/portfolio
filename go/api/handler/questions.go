package handler

import (
	"net/http"
	"time"

	"freelancer/portfolio/go/api/presenter"
	"freelancer/portfolio/go/entity"
	"freelancer/portfolio/go/usecase/question"

	"github.com/go-chi/chi"
	"github.com/go-chi/render"
)

type QuestionController struct {
	QuestionService question.Service
}

func NewQuestionController(Question question.Service) *QuestionController {
	return &QuestionController{
		QuestionService: Question,
	}
}

func (c *QuestionController) Routes() chi.Router {
	r := chi.NewRouter()
	r.Get("/{username}", c.List)
	r.Post("/{username}", c.Create)
	return r
}

// List renders all the questions given a username.
func (c *QuestionController) List(w http.ResponseWriter, r *http.Request) {

	username := chi.URLParam(r, "username")
	list, total, err := c.QuestionService.GetQuestions(username)
	if err != nil {
		CheckError(err, w, r)
	}

	res := &presenter.QuestionList{
		Total:     *total,
		Questions: make([]presenter.QuestionResponse, 0, len(list)),
	}
	for _, Question := range list {
		res.Questions = append(res.Questions, *presenter.ToResponseQuestion(&Question))
	}
	render.Status(r, http.StatusOK)
	render.Render(w, r, res)
}

// Create stores a new question.
func (c *QuestionController) Create(w http.ResponseWriter, r *http.Request) {

	var data presenter.QuestionPayload
	if err := render.Bind(r, &data); err != nil {
		render.Render(w, r, presenter.ErrInvalidRequest(err))
		return
	}

	loc, err := time.LoadLocation("America/Mexico_City")
	if err != nil {
		CheckError(err, w, r)
	}

	newQuestion := entity.QuestionPayload{
		Username:     chi.URLParam(r, "username"),
		Initial:      data.Initial,
		Message:      data.Message,
		QuestionDate: time.Now().In(loc),
	}

	err = c.QuestionService.CreateQuestion(newQuestion)
	if err != nil {
		CheckError(err, w, r)
	}

	w.Header().Set("Content-Type", "application/json")
	render.Status(r, http.StatusOK)
}

package http

import (
	"net/http"
	"time"

	"github.com/go-chi/chi"
	"github.com/go-chi/render"
	"github.com/mongo-experiments/go/pkg/api"
	"github.com/mongo-experiments/go/pkg/models"
)

type QuestionService interface {
	GetQuestions() ([]api.Question, int, error)
	CreateQuestion(api.QuestionPayload) error
}

type QuestionController struct {
	QuestionService QuestionService
}

func NewQuestionController(Question QuestionService) *QuestionController {
	return &QuestionController{
		QuestionService: Question,
	}
}

// Routes for Question.
func (c *QuestionController) Routes() chi.Router {
	r := chi.NewRouter()
	r.Get("/", c.List)
	r.Post("/", c.Create)
	return r
}

// List renders all the questions.
func (c *QuestionController) List(w http.ResponseWriter, r *http.Request) {

	list, total, err := c.QuestionService.GetQuestions()
	if err != nil {
		CheckError(err, w, r)
	}
	res := &models.QuestionList{
		Total:     total,
		Questions: make([]models.QuestionResponse, 0, len(list)),
	}
	for _, Question := range list {
		res.Questions = append(res.Questions, *models.ToResponseQuestion(&Question))
	}
	render.Status(r, http.StatusOK)
	render.Render(w, r, res)
	return
}

// Create stores a question.
func (c *QuestionController) Create(w http.ResponseWriter, r *http.Request) {

	data := &models.QuestionPayload{}
	if err := render.Bind(r, data); err != nil {
		render.Render(w, r, models.ErrInvalidRequest(err))
		return
	}

	loc, err := time.LoadLocation("America/Mexico_City")
	if err != nil {
		CheckError(err, w, r)
	}
	newQuestion := api.QuestionPayload{
		Initial: data.Initial,
		Title:   data.Title,
		Date:    time.Now().In(loc),
	}

	err = c.QuestionService.CreateQuestion(newQuestion)
	if err != nil {
		CheckError(err, w, r)
	}

	w.Header().Set("Content-Type", "application/json")
	render.Status(r, http.StatusOK)
	return
}

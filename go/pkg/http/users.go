package http

import (
	"net/http"

	"github.com/go-chi/chi"
	"github.com/go-chi/render"
	"github.com/mongo-experiments/go/pkg/api"
	"github.com/mongo-experiments/go/pkg/models"
)

type UserService interface {
	GetUserByID(id string) (*api.User, error)
}

type UserController struct {
	UserService UserService
}

func NewUserController(user UserService) *UserController {
	return &UserController{
		UserService: user,
	}
}

// Routes for users.
func (c *UserController) Routes() chi.Router {
	r := chi.NewRouter()
	r.Get("/{id}", c.ShowUser)
	return r
}

// ShowUser renders a user by its id.
func (c *UserController) ShowUser(w http.ResponseWriter, r *http.Request) {

	requestedUser := chi.URLParam(r, "id")
	user, err := c.UserService.GetUserByID(requestedUser)
	if err != nil {
		CheckError(err, w, r)
		return
	}

	render.Status(r, http.StatusOK)
	render.Render(w, r, models.ToResponseUser(user))
	return
}

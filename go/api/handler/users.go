package handler

import (
	"net/http"

	"freelancer/portfolio/go/api/presenter"
	"freelancer/portfolio/go/usecase/user"

	"github.com/go-chi/chi"
	"github.com/go-chi/render"
)

type UserController struct {
	UserService user.Service
}

func NewUserController(user user.Service) *UserController {
	return &UserController{
		UserService: user,
	}
}

// Routes for users.
func (c *UserController) Routes() chi.Router {
	r := chi.NewRouter()
	r.Get("/{id}", c.GetUserByID)
	r.Get("/{username}", c.GetUserByUsername)
	return r
}

// GetUserByID render a user given its id.
func (c *UserController) GetUserByID(w http.ResponseWriter, r *http.Request) {

	requestedUser := chi.URLParam(r, "id")
	user, err := c.UserService.GetUserByID(requestedUser)
	if err != nil {
		CheckError(err, w, r)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	render.Status(r, http.StatusOK)
	render.Render(w, r, presenter.ToResponseUser(user))
}

// GetUserByUsername render a user given its username.
func (c *UserController) GetUserByUsername(w http.ResponseWriter, r *http.Request) {

	requestedUser := chi.URLParam(r, "username")
	user, err := c.UserService.GetUserByUsername(requestedUser)
	if err != nil {
		CheckError(err, w, r)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	render.Status(r, http.StatusOK)
	render.Render(w, r, presenter.ToResponseUser(user))
}

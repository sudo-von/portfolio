package api

import (
	"freelancer/portfolio/go/api/handler"
	"freelancer/portfolio/go/api/middleware"
	"freelancer/portfolio/go/usecase/ctf"
	"freelancer/portfolio/go/usecase/project"
	"freelancer/portfolio/go/usecase/question"
	"freelancer/portfolio/go/usecase/user"
	"log"
	"net/http"

	"github.com/go-chi/chi"
	chimiddleware "github.com/go-chi/chi/middleware"
	"github.com/go-chi/render"
)

type Services struct {
	ProjectService  project.Service
	CTFService      ctf.Service
	UserService     user.Service
	QuestionService question.Service
}

func ListenAndServe(services Services) {
	// Router.
	r := chi.NewRouter()
	// Middleware configuration.
	r.Use(chimiddleware.Logger)
	r.Use(chimiddleware.Recoverer)
	r.Use(chimiddleware.URLFormat)
	r.Use(render.SetContentType(render.ContentTypeJSON))
	// CORS configuration.
	cors := middleware.Cors()
	r.Use(cors.Handler)

	// Http hanlders.
	r.Mount("/projects", handler.NewProjectController(services.ProjectService).Routes())
	r.Mount("/ctfs", handler.NewCTFController(services.CTFService).Routes())
	r.Mount("/users", handler.NewUserController(services.UserService).Routes())
	r.Mount("/questions", handler.NewQuestionController(services.QuestionService).Routes())

	// Start http server.
	if err := http.ListenAndServe(":3000", r); err != nil {
		log.Printf("[routes] error: %s", err.Error())
	}
}

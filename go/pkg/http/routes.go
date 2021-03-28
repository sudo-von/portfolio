package http

import (
	"log"
	"net/http"

	"github.com/go-chi/chi"
	chimiddleware "github.com/go-chi/chi/middleware"
	"github.com/go-chi/cors"
	"github.com/go-chi/render"
	"github.com/mongo-experiments/go/pkg/ctfs"
	"github.com/mongo-experiments/go/pkg/projects"
	"github.com/mongo-experiments/go/pkg/users"
)

type Controller struct {
	ProjectService projects.Service
	CTFService     ctfs.Service
	UserService    users.Service
}

// ListenAndServe starts the http server.
func ListenAndServe(controller Controller) {

	r := chi.NewRouter()
	// Middleware configuration.
	r.Use(chimiddleware.Logger)
	r.Use(chimiddleware.Recoverer)
	r.Use(chimiddleware.URLFormat)
	r.Use(render.SetContentType(render.ContentTypeJSON))
	// CORS configuration.
	cors := cors.New(cors.Options{
		AllowedOrigins:   []string{"*"},
		AllowedMethods:   []string{"GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"Accept", "Authorization", "Content-Type", "X-CSRF-Token", "File-Name"},
		ExposedHeaders:   []string{"Link", "File-Name", "Authorization"},
		AllowCredentials: true,
		MaxAge:           300,
	})
	r.Use(cors.Handler)

	// Controllers.
	r.Mount("/projects", NewProjectController(controller.ProjectService).Routes())
	r.Mount("/ctfs", NewCTFController(controller.CTFService).Routes())

	// Start service
	if err := http.ListenAndServe(":80", r); err != nil {
		log.Printf("[routes] error: %s", err.Error())
	}
}

package main

import (
	"log"
	"net/http"

	"freelancer/portfolio/go/api/handler"
	"freelancer/portfolio/go/api/middleware"
	"freelancer/portfolio/go/config"
	"freelancer/portfolio/go/infrastructure/repository/mongo"
	"freelancer/portfolio/go/usecase/ctf"
	"freelancer/portfolio/go/usecase/project"
	"freelancer/portfolio/go/usecase/question"
	"freelancer/portfolio/go/usecase/user"

	"github.com/go-chi/chi"
	chimiddleware "github.com/go-chi/chi/middleware"
	"github.com/go-chi/render"
)

func main() {

	// Handles MongoDB connection.
	log.Println("[main]: Starting a new connection to MongoDB...")
	db, err := mongo.NewStorage(config.DB_URL, config.DB_NAME, config.DB_USER, config.DB_PASSWORD)
	if err != nil {
		log.Println("[main] error:", err)
		return
	}
	log.Println("[main]: MongoDB connection established")

	// Repositories.
	projectMongo := mongo.NewProjectMongo(db)
	ctftMongo := mongo.NewCTFMongo(db)
	userMongo := mongo.NewUserMongo(db)
	questionMongo := mongo.NewQuestionMongo(db)

	// Services.
	projectService := project.NewService(projectMongo)
	ctfService := ctf.NewService(ctftMongo)
	userService := user.NewService(userMongo)
	questionService := question.NewService(questionMongo)

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
	r.Mount("/projects", handler.NewProjectController(*projectService).Routes())
	r.Mount("/ctfs", handler.NewCTFController(*ctfService).Routes())
	r.Mount("/users", handler.NewUserController(*userService).Routes())
	r.Mount("/questions", handler.NewQuestionController(*questionService).Routes())

	// Start service.
	if err := http.ListenAndServe(":3000", r); err != nil {
		log.Printf("[routes] error: %s", err.Error())
	}

}

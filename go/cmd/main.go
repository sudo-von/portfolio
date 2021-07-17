package main

import (
	"log"

	"github.com/mongo-experiments/go/config"
	"github.com/mongo-experiments/go/pkg/ctfs"
	"github.com/mongo-experiments/go/pkg/http"
	"github.com/mongo-experiments/go/pkg/mongo"
	"github.com/mongo-experiments/go/pkg/projects"
	"github.com/mongo-experiments/go/pkg/questions"
	"github.com/mongo-experiments/go/pkg/users"
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

	// Services.
	projectService := projects.NewService(db)
	ctfService := ctfs.NewService(db)
	userService := users.NewService(db)
	questionService := questions.NewService(db)

	// Controllers.
	controllers := http.Controller{ProjectService: *projectService, CTFService: *ctfService, UserService: *userService, QuestionService: *questionService}
	// Http server.
	http.ListenAndServe(controllers)
}

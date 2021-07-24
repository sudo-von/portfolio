package main

import (
	"log"

	"freelancer/portfolio/go/api"
	"freelancer/portfolio/go/config"
	"freelancer/portfolio/go/infrastructure/repository/mongo"
	"freelancer/portfolio/go/usecase/ctf"
	"freelancer/portfolio/go/usecase/project"
	"freelancer/portfolio/go/usecase/question"
	"freelancer/portfolio/go/usecase/user"
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
	projectService := project.NewService(projectMongo, userMongo)
	ctfService := ctf.NewService(ctftMongo, userMongo)
	userService := user.NewService(userMongo)
	questionService := question.NewService(questionMongo, userMongo)
	services := api.Services{ProjectService: *projectService, CTFService: *ctfService, UserService: *userService, QuestionService: *questionService}

	// Start http server.
	api.ListenAndServe(services)
}

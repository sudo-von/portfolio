package question

import "github.com/mongo-experiments/go/entity"

type Reader interface {
	GetQuestions() ([]entity.Question, int, error)
}

type Writer interface {
	CreateQuestion(entity.QuestionPayload) error
}

type Repository interface {
	Reader
	Writer
}

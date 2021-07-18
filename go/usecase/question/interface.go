package question

import "freelancer/portfolio/go/entity"

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

type UseCase interface {
	GetQuestions() ([]entity.Question, int, error)
	CreateQuestion(question entity.QuestionPayload) error
}

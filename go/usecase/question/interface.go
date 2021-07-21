package question

import "freelancer/portfolio/go/entity"

type Reader interface {
	GetQuestionsByUserID(userID string) ([]entity.Question, *int, error)
}

type Writer interface {
	CreateQuestion(entity.QuestionPayload) error
}

type QuestionRepository interface {
	Reader
	Writer
}

type UseCase interface {
	GetQuestions() ([]entity.Question, int, error)
	CreateQuestion(question entity.QuestionPayload) error
}

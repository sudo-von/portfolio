package question

import (
	"freelancer/portfolio/go/api/presenter"
	"freelancer/portfolio/go/entity"
)

type Reader interface {
	GetQuestionByID(questionID string) (*entity.Question, error)
	GetQuestionsByUserID(userID string, filters presenter.QuestionFilters) ([]entity.Question, *int, error)
}

type Writer interface {
	CreateQuestion(entity.QuestionPayload) error
	UpdateQuestion(entity.Question) error
}

type QuestionRepository interface {
	Reader
	Writer
}

type UseCase interface {
	GetQuestions(username string, filters presenter.QuestionFilters) ([]entity.Question, int, error)
	CreateQuestion(question entity.QuestionPayload) error
}

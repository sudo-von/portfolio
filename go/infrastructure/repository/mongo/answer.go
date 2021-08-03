package mongo

import "time"

type answerModel struct {
	Message    string    `bson:"message"`
	AnswerDate time.Time `bson:"answer_date"`
}

package entity

import "time"

type Question struct {
	ID           string
	UserID       string
	Initial      string
	Message      string
	QuestionDate time.Time
	Answer       *Answer
}

type QuestionPayload struct {
	ID           string
	UserID       string
	Username     string
	Initial      string
	Message      string
	QuestionDate time.Time
}

package entity

import "time"

type Question struct {
	ID           string
	UserID       string
	Message      string
	Answer       *Answer
	Reactions    Reactions
	QuestionDate time.Time
}

type QuestionPayload struct {
	ID           string
	UserID       string
	Username     string
	Message      string
	Reactions    Reactions
	QuestionDate time.Time
}

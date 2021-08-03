package entity

import "time"

type Question struct {
	ID           string
	UserID       string
	Question     string
	Answer       Answer
	Reaction     Reaction
	CreationDate time.Time
}

type QuestionPayload struct {
	ID           string
	UserID       string
	Username     string
	Question     string
	Reaction     Reaction
	CreationDate time.Time
}

package api

import "time"

type Question struct {
	ID      string
	Initial string
	Title   string
	Date    time.Time
	Answer  Answer
}

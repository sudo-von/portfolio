package api

type Question struct {
	ID      string
	Initial string
	Title   string
	Date    string
	Answer  Answer
}

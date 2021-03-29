package api

type Query struct {
	ID       string
	Initial  string
	Question Question
	Answer   Answer
}

type Question struct {
	Title string
	Date  string
}

type Answer struct {
	Response string
	Date     string
}

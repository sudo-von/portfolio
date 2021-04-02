package mongo

import (
	"github.com/mongo-experiments/go/pkg/api"
	"gopkg.in/mgo.v2/bson"
)

type questionModel struct {
	ID      bson.ObjectId `bson:"_id" json:"id"`
	Initial string        `bson:"initial" json:"initial"`
	Title   string        `bson:"title" json:"title"`
	Date    string        `bson:"date" json:"date"`
	Answer  answer        `bson:"answer" json:"answer"`
}

type answer struct {
	Title string `bson:"title" json:"title"`
	Date  string `bson:"date" json:"date"`
}

func toQuestionModel(question api.Question) questionModel {

	var questionID bson.ObjectId
	if question.ID != "" {
		questionID = bson.ObjectIdHex(question.ID)
	} else {
		questionID = bson.NewObjectId()
	}

	answer := answer{Title: question.Answer.Title, Date: question.Answer.Date}

	return questionModel{
		ID:      questionID,
		Initial: question.Initial,
		Title:   question.Title,
		Date:    question.Date,
		Answer:  answer,
	}
}

func toApiQuestion(question questionModel) api.Question {

	answer := api.Answer{Title: question.Answer.Title, Date: question.Answer.Date}

	return api.Question{
		ID:      question.ID.Hex(),
		Initial: question.Initial,
		Title:   question.Title,
		Date:    question.Date,
		Answer:  answer,
	}
}

func (r *Repository) GetQuestions() ([]api.Question, int, error) {

	session := r.Session.Copy()
	defer session.Close()
	con := session.DB(r.DatabaseName).C("questions")

	var questionsM []questionModel
	err := con.Find(bson.M{}).All(&questionsM)
	if err != nil {
		return nil, 0, err
	}

	total, err := con.Find(bson.M{}).Count()
	if err != nil {
		return nil, 0, err
	}

	queries := make([]api.Question, 0)
	for _, m := range questionsM {
		queries = append(queries, toApiQuestion(m))
	}
	return queries, total, nil

}

func (r *Repository) CreateQuestion(question api.Question) error {

	session := r.Session.Copy()
	defer session.Close()
	con := session.DB(r.DatabaseName).C("questions")

	questionM := toQuestionModel(question)
	err := con.Insert(&questionM)
	if err != nil {
		return err
	}

	return nil
}

package mongo

import (
	"errors"
	"time"

	"freelancer/portfolio/go/entity"

	mgo "gopkg.in/mgo.v2"
	"gopkg.in/mgo.v2/bson"
)

type questionModel struct {
	ID           bson.ObjectId `bson:"_id"`
	UserID       bson.ObjectId `bson:"user_id"`
	Initial      string        `bson:"initial"`
	Message      string        `bson:"message"`
	QuestionDate time.Time     `bson:"question_date"`
	Answer       answerModel   `bson:"answer"`
}

type answerModel struct {
	Message    string    `bson:"message"`
	AnswerDate time.Time `bson:"answer_date"`
}

type questioPayloadModel struct {
	ID           bson.ObjectId `bson:"_id" json:"id"`
	UserID       bson.ObjectId `bson:"user_id" json:"user_id"`
	Initial      string        `bson:"initial" json:"initial"`
	Message      string        `bson:"message" json:"message"`
	QuestionDate time.Time     `bson:"question_date" json:"question_date"`
}

func toQuestionPayloadModel(question entity.QuestionPayload) questioPayloadModel {

	var questionID bson.ObjectId
	if question.ID != "" {
		questionID = bson.ObjectIdHex(question.ID)
	} else {
		questionID = bson.NewObjectId()
	}

	var userID bson.ObjectId
	if question.UserID != "" {
		userID = bson.ObjectIdHex(question.UserID)
	} else {
		userID = bson.NewObjectId()
	}

	return questioPayloadModel{
		ID:           questionID,
		UserID:       userID,
		Initial:      question.Initial,
		Message:      question.Message,
		QuestionDate: question.QuestionDate,
	}
}

func toEntityQuestion(question questionModel) entity.Question {
	answer := entity.Answer{Message: question.Answer.Message, AnswerDate: question.Answer.AnswerDate}
	return entity.Question{
		ID:           question.ID.Hex(),
		UserID:       question.UserID.Hex(),
		Initial:      question.Initial,
		Message:      question.Message,
		QuestionDate: question.QuestionDate,
		Answer:       &answer,
	}
}

type QuestionMongo struct {
	Session      *mgo.Session
	DatabaseName string
}

func NewQuestionMongo(repository *Repository) *QuestionMongo {
	return &QuestionMongo{
		Session:      repository.Session,
		DatabaseName: repository.DatabaseName,
	}
}

func (r *QuestionMongo) GetQuestionsByUserID(userID string) ([]entity.Question, *int, error) {

	if !bson.IsObjectIdHex(userID) {
		return nil, nil, errors.New("given user_id is not a valid hex")
	}

	session := r.Session.Copy()
	defer session.Close()
	con := session.DB(r.DatabaseName).C("questions")

	var questionsM []questionModel
	err := con.Find(bson.M{"answer": bson.M{"$exists": true}, "user_id": bson.ObjectIdHex(userID)}).Sort("-answer.question_date").All(&questionsM)
	if err != nil {
		return nil, nil, err
	}

	total, err := con.Find(bson.M{"answer": bson.M{"$exists": true}}).Count()
	if err != nil {
		return nil, nil, err
	}

	queries := make([]entity.Question, 0)
	for _, m := range questionsM {
		queries = append(queries, toEntityQuestion(m))
	}
	return queries, &total, nil

}

func (r *QuestionMongo) CreateQuestion(question entity.QuestionPayload) error {

	session := r.Session.Copy()
	defer session.Close()
	con := session.DB(r.DatabaseName).C("questions")

	questionM := toQuestionPayloadModel(question)
	err := con.Insert(&questionM)
	if err != nil {
		return err
	}

	return nil
}

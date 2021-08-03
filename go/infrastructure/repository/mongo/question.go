package mongo

import (
	"errors"
	"time"

	"freelancer/portfolio/go/entity"

	mgo "gopkg.in/mgo.v2"
	"gopkg.in/mgo.v2/bson"
)

type questionModel struct {
	ID           bson.ObjectId  `bson:"_id"`
	UserID       bson.ObjectId  `bson:"user_id"`
	Message      string         `bson:"message"`
	QuestionDate time.Time      `bson:"question_date"`
	Answer       answerModel    `bson:"answer"`
	Reactions    reactionsModel `bson:"reactions"`
}

type questionPayloadModel struct {
	ID           bson.ObjectId         `bson:"_id"`
	UserID       bson.ObjectId         `bson:"user_id"`
	Message      string                `bson:"message"`
	QuestionDate time.Time             `bson:"question_date"`
	Reactions    reactionsPayloadModel `bson:"reactions"`
}

func toQuestionPayloadModel(question entity.QuestionPayload) questionPayloadModel {

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

	reactions := reactionsPayloadModel{
		Happy: question.Reactions.Happy,
		Cool:  question.Reactions.Cool,
		Sad:   question.Reactions.Sad,
		Mad:   question.Reactions.Mad,
	}

	return questionPayloadModel{
		ID:           questionID,
		UserID:       userID,
		Message:      question.Message,
		QuestionDate: question.QuestionDate,
		Reactions:    reactions,
	}
}

func toEntityQuestion(question questionModel) entity.Question {
	answer := entity.Answer{
		Message:    question.Answer.Message,
		AnswerDate: question.Answer.AnswerDate,
	}
	reactions := entity.Reactions{
		Happy: question.Reactions.Happy,
		Cool:  question.Reactions.Cool,
		Sad:   question.Reactions.Sad,
		Mad:   question.Reactions.Mad,
	}
	return entity.Question{
		ID:           question.ID.Hex(),
		UserID:       question.UserID.Hex(),
		Message:      question.Message,
		QuestionDate: question.QuestionDate,
		Answer:       &answer,
		Reactions:    reactions,
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
	err := con.Find(bson.M{"answer": bson.M{"$exists": true}, "user_id": bson.ObjectIdHex(userID)}).Sort("-answer.answer_date").All(&questionsM)
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

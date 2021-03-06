package mongo

import (
	"errors"
	"time"

	"freelancer/portfolio/go/api/presenter"
	"freelancer/portfolio/go/entity"

	mgo "gopkg.in/mgo.v2"
	"gopkg.in/mgo.v2/bson"
)

type questionModel struct {
	ID           bson.ObjectId `bson:"_id"`
	UserID       bson.ObjectId `bson:"user_id"`
	Question     string        `bson:"question"`
	CreationDate time.Time     `bson:"creation_date"`
	Answer       answerModel   `bson:"answer"`
	Reaction     reactionModel `bson:"reactions"`
}

type questionPayloadModel struct {
	ID           bson.ObjectId        `bson:"_id"`
	UserID       bson.ObjectId        `bson:"user_id"`
	Question     string               `bson:"question"`
	CreationDate time.Time            `bson:"creation_date"`
	Reaction     reactionPayloadModel `bson:"reactions"`
}

func toQuestionModel(question entity.Question) questionModel {

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

	answer := answerModel{
		Answer:       question.Answer.Answer,
		CreationDate: question.Answer.CreationDate,
	}

	reaction := reactionModel{
		Happy: question.Reaction.Happy,
		Cool:  question.Reaction.Cool,
		Sad:   question.Reaction.Sad,
		Mad:   question.Reaction.Mad,
	}

	return questionModel{
		ID:           questionID,
		UserID:       userID,
		Question:     question.Question,
		CreationDate: question.CreationDate,
		Answer:       answer,
		Reaction:     reaction,
	}
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

	reaction := reactionPayloadModel{
		Happy: question.Reaction.Happy,
		Cool:  question.Reaction.Cool,
		Sad:   question.Reaction.Sad,
		Mad:   question.Reaction.Mad,
	}

	return questionPayloadModel{
		ID:           questionID,
		UserID:       userID,
		Question:     question.Question,
		CreationDate: question.CreationDate,
		Reaction:     reaction,
	}
}

func toEntityQuestion(question questionModel) entity.Question {
	answer := entity.Answer{
		Answer:       question.Answer.Answer,
		CreationDate: question.Answer.CreationDate,
	}
	reaction := entity.Reaction{
		Happy: question.Reaction.Happy,
		Cool:  question.Reaction.Cool,
		Sad:   question.Reaction.Sad,
		Mad:   question.Reaction.Mad,
	}
	return entity.Question{
		ID:           question.ID.Hex(),
		UserID:       question.UserID.Hex(),
		Question:     question.Question,
		CreationDate: question.CreationDate,
		Answer:       answer,
		Reaction:     reaction,
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

func (r *QuestionMongo) GetQuestionByID(questionID string) (*entity.Question, error) {

	if !bson.IsObjectIdHex(questionID) {
		return nil, errors.New("given question_id is not a valid hex")
	}

	session := r.Session.Copy()
	defer session.Close()
	con := session.DB(r.DatabaseName).C("questions")

	var questionM questionModel
	searchQuery := bson.M{
		"answer": bson.M{"$exists": true},
		"_id":    bson.ObjectIdHex(questionID),
	}

	err := con.Find(searchQuery).One(&questionM)
	if err != nil {
		return nil, err
	}
	question := toEntityQuestion(questionM)

	return &question, nil

}

func (r *QuestionMongo) GetQuestionsByUserID(userID string, filters presenter.QuestionFilters) ([]entity.Question, *int, error) {

	if !bson.IsObjectIdHex(userID) {
		return nil, nil, errors.New("given user_id is not a valid hex")
	}

	session := r.Session.Copy()
	defer session.Close()
	con := session.DB(r.DatabaseName).C("questions")

	var questionsM []questionModel
	searchQuery := bson.M{
		"answer":  bson.M{"$exists": true},
		"user_id": bson.ObjectIdHex(userID),
	}

	err := con.Find(searchQuery).Limit(filters.Limit).Skip(filters.Offset).Sort("-answer.creation_date").All(&questionsM)
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

func (r *QuestionMongo) UpdateQuestion(question entity.Question) (*entity.Question, error) {

	session := r.Session.Copy()
	defer session.Close()
	con := session.DB(r.DatabaseName).C("questions")

	questionM := toQuestionModel(question)
	searchQuery := bson.M{
		"_id": questionM.ID,
	}

	err := con.Update(searchQuery, &questionM)
	if err != nil {
		return nil, err
	}

	updatedQuestion := toEntityQuestion(questionM)
	return &updatedQuestion, nil
}

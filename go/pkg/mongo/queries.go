package mongo

import (
	"github.com/mongo-experiments/go/pkg/api"
	"gopkg.in/mgo.v2/bson"
)

type queryModel struct {
	ID       bson.ObjectId `bson:"_id" json:"id"`
	Initial  string        `bson:"initial" json:"initial"`
	Question question      `bson:"question" json:"question"`
	Answer   answer        `bson:"answer" json:"answer"`
}

type question struct {
	Title string `bson:"title" json:"title"`
	Date  string `bson:"date" json:"date"`
}

type answer struct {
	Response string `bson:"response" json:"response"`
	Date     string `bson:"date" json:"date"`
}

func toQueryModel(query api.Query) queryModel {

	var queryID bson.ObjectId
	if query.ID != "" {
		queryID = bson.ObjectIdHex(query.ID)
	} else {
		queryID = bson.NewObjectId()
	}

	question := question{Title: query.Question.Title, Date: query.Question.Date}
	answer := answer{Response: query.Answer.Response, Date: query.Answer.Date}

	return queryModel{
		ID:       queryID,
		Initial:  query.Initial,
		Question: question,
		Answer:   answer,
	}
}

func toApiQuery(query queryModel) api.Query {

	question := api.Question{Title: query.Question.Title, Date: query.Question.Date}
	answer := api.Answer{Response: query.Answer.Response, Date: query.Answer.Date}

	return api.Query{
		ID:       query.ID.Hex(),
		Initial:  query.Initial,
		Question: question,
		Answer:   answer,
	}
}

func (r *Repository) GetQueries() ([]api.Query, error) {

	session := r.Session.Copy()
	defer session.Close()
	com := session.DB(r.DatabaseName).C("queries")

	var queriesM []queryModel
	err := com.Find(bson.M{}).All(&queriesM)
	if err != nil {
		return nil, err
	}

	queries := make([]api.Query, 0)
	for _, m := range queriesM {
		queries = append(queries, toApiQuery(m))
	}
	return queries, nil
}

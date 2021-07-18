package mongo

import (
	"fmt"

	mgo "gopkg.in/mgo.v2"
)

type Repository struct {
	*mgo.Session
	DatabaseName string
}

func NewStorage(dbURL string, databaseName string, username string, password string) (*Repository, error) {
	session, err := mgo.Dial(fmt.Sprintf("mongodb://%s:%s@%s:27017/%s?authSource=admin", username, password, dbURL, databaseName))
	if err != nil {
		return nil, err
	}
	repository := &Repository{
		Session:      session,
		DatabaseName: databaseName,
	}
	return repository, nil
}

func (r *Repository) Close() error {
	r.Session.Close()
	return nil
}

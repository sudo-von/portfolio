package mongo

import "time"

type answerModel struct {
	Answer       string    `bson:"answer"`
	CreationDate time.Time `bson:"creation_date"`
}

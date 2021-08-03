package mongo

type reactionsModel struct {
	Happy int `bson:"happy"`
	Cool  int `bson:"cool"`
	Sad   int `bson:"sad"`
	Mad   int `bson:"mad"`
}

type reactionsPayloadModel struct {
	Happy int `bson:"happy"`
	Cool  int `bson:"cool"`
	Sad   int `bson:"sad"`
	Mad   int `bson:"mad"`
}

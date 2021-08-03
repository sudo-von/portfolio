package mongo

type reactionModel struct {
	Happy int `bson:"happy"`
	Cool  int `bson:"cool"`
	Sad   int `bson:"sad"`
	Mad   int `bson:"mad"`
}

type reactionPayloadModel struct {
	Happy int `bson:"happy"`
	Cool  int `bson:"cool"`
	Sad   int `bson:"sad"`
	Mad   int `bson:"mad"`
}

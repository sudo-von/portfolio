package presenter

var Reactions = []string{"happy", "cool", "sad", "mad"}

type Reaction struct {
	Happy int `json:"happy"`
	Cool  int `json:"cool"`
	Sad   int `json:"sad"`
	Mad   int `json:"mad"`
}

package repository

import (
	"github.com/mongo-experiments/go/pkg/api"
	"gopkg.in/mgo.v2/bson"
)

type ctfModel struct {
	ID          bson.ObjectId `bson:"_id" json:"id"`
	Title       string        `bson:"title" json:"title"`
	Description string        `bson:"description" json:"description"`
	Image       string        `bson:"image" json:"image"`
	Repository  string        `bson:"repository" json:"repository"`
}

func toProjectCTF(ctf api.CTF) ctfModel {

	var ctfID bson.ObjectId
	if ctf.ID != "" {
		ctfID = bson.ObjectIdHex(ctf.ID)
	} else {
		ctfID = bson.NewObjectId()
	}

	return ctfModel{
		ID:          ctfID,
		Title:       ctf.Title,
		Description: ctf.Description,
		Image:       ctf.Image,
		Repository:  ctf.Repository,
	}
}

func toApiCTF(ctf ctfModel) api.CTF {
	return api.CTF{
		ID:          ctf.ID.Hex(),
		Title:       ctf.Title,
		Description: ctf.Description,
		Image:       ctf.Image,
		Repository:  ctf.Repository,
	}
}

func (r *Repository) GetCTFS() ([]api.CTF, int, error) {

	session := r.Session.Copy()
	defer session.Close()
	con := session.DB(r.DatabaseName).C("ctfs")

	var ctfsM []ctfModel
	err := con.Find(bson.M{}).All(&ctfsM)
	if err != nil {
		return nil, 0, err
	}

	total, err := con.Find(bson.M{}).Count()
	if err != nil {
		return nil, 0, err
	}

	ctfs := make([]api.CTF, 0)
	for _, m := range ctfsM {
		ctfs = append(ctfs, toApiCTF(m))
	}
	return ctfs, total, nil
}

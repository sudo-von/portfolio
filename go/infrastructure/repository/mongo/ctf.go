package mongo

import (
	"freelancer/portfolio/go/entity"

	mgo "gopkg.in/mgo.v2"
	"gopkg.in/mgo.v2/bson"
)

type ctfModel struct {
	ID          bson.ObjectId `bson:"_id" json:"id"`
	Title       string        `bson:"title" json:"title"`
	Description string        `bson:"description" json:"description"`
	Image       string        `bson:"image" json:"image"`
	Repository  string        `bson:"repository" json:"repository"`
}

func toApiCTF(ctf ctfModel) entity.CTF {
	return entity.CTF{
		ID:          ctf.ID.Hex(),
		Title:       ctf.Title,
		Description: ctf.Description,
		Image:       ctf.Image,
		Repository:  ctf.Repository,
	}
}

type CTFMongo struct {
	Session      *mgo.Session
	DatabaseName string
}

func NewCTFMongo(repository *Repository) *CTFMongo {
	return &CTFMongo{
		Session:      repository.Session,
		DatabaseName: repository.DatabaseName,
	}
}

func (r *CTFMongo) GetCTFS() ([]entity.CTF, int, error) {

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

	ctfs := make([]entity.CTF, 0)
	for _, m := range ctfsM {
		ctfs = append(ctfs, toApiCTF(m))
	}
	return ctfs, total, nil
}

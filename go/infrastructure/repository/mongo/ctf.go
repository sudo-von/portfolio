package mongo

import (
	"errors"
	"freelancer/portfolio/go/entity"
	"time"

	mgo "gopkg.in/mgo.v2"
	"gopkg.in/mgo.v2/bson"
)

type ctfModel struct {
	ID            bson.ObjectId `bson:"_id"`
	UserID        bson.ObjectId `bson:"user_id"`
	Title         string        `bson:"title"`
	Description   string        `bson:"description"`
	ImageURL      string        `bson:"image_url"`
	RepositoryURL string        `bson:"repository_url"`
	CreationDate  time.Time     `bson:"creation_date"`
}

func toEntityCTF(ctf ctfModel) entity.CTF {
	return entity.CTF{
		ID:            ctf.ID.Hex(),
		UserID:        ctf.UserID.Hex(),
		Title:         ctf.Title,
		Description:   ctf.Description,
		ImageURL:      ctf.ImageURL,
		RepositoryURL: ctf.RepositoryURL,
		CreationDate:  ctf.CreationDate,
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

func (r *CTFMongo) GetCTFS(userID string) ([]entity.CTF, *int, error) {

	if !bson.IsObjectIdHex(userID) {
		return nil, nil, errors.New("given user_id is not a valid hex")
	}

	session := r.Session.Copy()
	defer session.Close()
	con := session.DB(r.DatabaseName).C("ctfs")
	searchQuery := bson.M{"user_id": bson.ObjectIdHex(userID)}

	var ctfsM []ctfModel
	err := con.Find(searchQuery).Sort("-creation_date").All(&ctfsM)
	if err != nil {
		return nil, nil, err
	}

	total, err := con.Find(searchQuery).Count()
	if err != nil {
		return nil, nil, err
	}

	ctfs := make([]entity.CTF, 0)
	for _, m := range ctfsM {
		ctfs = append(ctfs, toEntityCTF(m))
	}

	return ctfs, &total, nil
}

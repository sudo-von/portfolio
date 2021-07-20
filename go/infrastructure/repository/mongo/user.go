package mongo

import (
	"errors"

	"freelancer/portfolio/go/entity"

	mgo "gopkg.in/mgo.v2"
	"gopkg.in/mgo.v2/bson"
)

type tinyUserModel struct {
	ID                bson.ObjectId `bson:"_id"`
	Username          string        `bson:"username"`
	Name              string        `bson:"name"`
	ProfilePictureURL string        `bson:"profile_picture_url"`
	Email             string        `bson:"email"`
	Description       string        `bson:"description"`
	Achievements      []string      `bson:"achievements"`
}

func toEntityTinyUser(tinyUser tinyUserModel) entity.TinyUser {
	return entity.TinyUser{
		ID:                tinyUser.ID.Hex(),
		Username:          tinyUser.Username,
		Name:              tinyUser.Name,
		Email:             tinyUser.Email,
		ProfilePictureURL: tinyUser.ProfilePictureURL,
		Description:       tinyUser.Description,
		Achievements:      tinyUser.Achievements,
	}
}

type UserMongo struct {
	Session      *mgo.Session
	DatabaseName string
}

func NewUserMongo(repository *Repository) *UserMongo {
	return &UserMongo{
		Session:      repository.Session,
		DatabaseName: repository.DatabaseName,
	}
}

func (r *UserMongo) GetUserByID(id string) (*entity.TinyUser, error) {

	if !bson.IsObjectIdHex(id) {
		return nil, errors.New("given id is not a valid hex")
	}

	session := r.Session.Copy()
	defer session.Close()
	com := session.DB(r.DatabaseName).C("users")

	var tinyUserM tinyUserModel
	err := com.FindId(bson.ObjectIdHex(id)).One(&tinyUserM)
	if err != nil {
		return nil, err
	}

	userApi := toEntityTinyUser(tinyUserM)
	return &userApi, nil
}

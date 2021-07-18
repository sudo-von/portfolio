package mongo

import (
	"errors"

	"freelancer/portfolio/go/entity"

	mgo "gopkg.in/mgo.v2"
	"gopkg.in/mgo.v2/bson"
)

type userModel struct {
	ID             bson.ObjectId `bson:"_id" json:"id"`
	Username       string        `bson:"username" json:"username"`
	Name           string        `bson:"name" json:"name"`
	ProfilePicture string        `bson:"profile_picture" json:"profile_picture"`
	Email          string        `bson:"email" json:"email"`
	Description    []string      `bson:"description" json:"description"`
}

func toApiUser(user userModel) entity.User {
	return entity.User{
		ID:             user.ID.Hex(),
		Username:       user.Username,
		Name:           user.Name,
		ProfilePicture: user.ProfilePicture,
		Email:          user.Email,
		Description:    user.Description,
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

func (r *UserMongo) GetUserByID(id string) (*entity.User, error) {

	session := r.Session.Copy()
	defer session.Close()
	com := session.DB(r.DatabaseName).C("users")

	if !bson.IsObjectIdHex(id) {
		return nil, errors.New("id is not a valid hex")
	}

	userM := userModel{}
	err := com.Find(bson.M{"_id": bson.ObjectIdHex(id)}).One(&userM)
	if err != nil {
		return nil, err
	}

	userApi := toApiUser(userM)
	return &userApi, nil
}

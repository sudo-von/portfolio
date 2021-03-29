package mongo

import (
	"errors"

	"github.com/mongo-experiments/go/pkg/api"
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

func toUserModel(user api.User) userModel {

	var userID bson.ObjectId
	if user.ID != "" {
		userID = bson.ObjectIdHex(user.ID)
	} else {
		userID = bson.NewObjectId()
	}

	return userModel{
		ID:             userID,
		Username:       user.Username,
		Name:           user.Name,
		ProfilePicture: user.ProfilePicture,
		Email:          user.Email,
		Description:    user.Description,
	}
}

func toApiUser(user userModel) api.User {
	return api.User{
		ID:             user.ID.Hex(),
		Username:       user.Username,
		Name:           user.Name,
		ProfilePicture: user.ProfilePicture,
		Email:          user.Email,
		Description:    user.Description,
	}
}

func (r *Repository) GetUserByID(id string) (*api.User, error) {

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

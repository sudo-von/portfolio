package models

import (
	"net/http"

	"github.com/mongo-experiments/go/pkg/api"
)

type UserList struct {
	Users []*UserResponse `json:"results"`
}

type User struct {
	ID             string `json:"id"`
	Username       string `json:"username"`
	Name           string `json:"name"`
	ProfilePicture string `json:"profile_picture"`
	Email          string `json:"email"`
}

func (mt *UserList) Render(w http.ResponseWriter, r *http.Request) error {
	return nil
}

type UserResponse struct {
	ID             string `json:"id"`
	Username       string `json:"username"`
	Name           string `json:"name"`
	ProfilePicture string `json:"profile_picture"`
	Email          string `json:"email"`
}

func (ur *UserResponse) Render(w http.ResponseWriter, r *http.Request) error {
	return nil
}

func ToResponseUser(user *api.User) *UserResponse {
	return &UserResponse{
		ID:             user.ID,
		Username:       user.Username,
		Name:           user.Name,
		ProfilePicture: user.ProfilePicture,
		Email:          user.Email,
	}
}

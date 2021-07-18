package presenter

import (
	"net/http"

	"freelancer/portfolio/go/entity"
)

type UserList struct {
	Total int            `json:"total"`
	Users []UserResponse `json:"results"`
}

type UserResponse struct {
	ID             string   `json:"id"`
	Username       string   `json:"username"`
	Name           string   `json:"name"`
	ProfilePicture string   `json:"profile_picture"`
	Email          string   `json:"email"`
	Description    []string `json:"description"`
}

func (ul *UserList) Render(w http.ResponseWriter, r *http.Request) error {
	return nil
}

func (ur *UserResponse) Render(w http.ResponseWriter, r *http.Request) error {
	return nil
}

func ToResponseUser(user *entity.User) *UserResponse {
	return &UserResponse{
		ID:             user.ID,
		Username:       user.Username,
		Name:           user.Name,
		ProfilePicture: user.ProfilePicture,
		Email:          user.Email,
		Description:    user.Description,
	}
}

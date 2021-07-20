package presenter

import (
	"net/http"

	"freelancer/portfolio/go/entity"
)

type TinyUserList struct {
	Total     int                `json:"total"`
	TinyUsers []TinyUserResponse `json:"results"`
}

type TinyUserResponse struct {
	ID                string   `json:"id"`
	Username          string   `json:"username"`
	Name              string   `json:"name"`
	Email             string   `json:"email"`
	ProfilePictureURL string   `json:"profile_picture_url"`
	Description       string   `json:"description"`
	Achievements      []string `json:"achievements"`
}

func (ul *TinyUserList) Render(w http.ResponseWriter, r *http.Request) error {
	return nil
}

func (ur *TinyUserResponse) Render(w http.ResponseWriter, r *http.Request) error {
	return nil
}

func ToResponseUser(user *entity.TinyUser) *TinyUserResponse {
	return &TinyUserResponse{
		ID:                user.ID,
		Username:          user.Username,
		Name:              user.Name,
		Email:             user.Email,
		ProfilePictureURL: user.ProfilePictureURL,
		Description:       user.Description,
		Achievements:      user.Achievements,
	}
}

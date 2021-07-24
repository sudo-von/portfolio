package entity

import "time"

type CTF struct {
	ID            string
	UserID        string
	Title         string
	Description   string
	ImageURL      string
	RepositoryURL string
	CreationDate  time.Time
}

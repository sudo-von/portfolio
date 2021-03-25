package mongo

import (
	"github.com/mongo-experiments/go/pkg/api"
	"gopkg.in/mgo.v2/bson"
)

type projectModel struct {
	ID          bson.ObjectId `bson:"_id" json:"id"`
	Title       string        `bson:"title" json:"title"`
	Description string        `bson:"description" json:"description"`
	Image       string        `bson:"image" json:"image"`
	Repository  string        `bson:"repository" json:"repository"`
}

func toProjectModel(project api.Project) projectModel {

	var projectID bson.ObjectId
	if project.ID != "" {
		projectID = bson.ObjectIdHex(project.ID)
	} else {
		projectID = bson.NewObjectId()
	}

	return projectModel{
		ID:          projectID,
		Title:       project.Title,
		Description: project.Description,
		Image:       project.Image,
		Repository:  project.Repository,
	}
}

func toApiProject(project projectModel) api.Project {
	return api.Project{
		ID:          project.ID.Hex(),
		Title:       project.Title,
		Description: project.Description,
		Image:       project.Image,
		Repository:  project.Repository,
	}
}

func (r *Repository) GetProjects() ([]api.Project, error) {

	session := r.Session.Copy()
	defer session.Close()
	com := session.DB(r.DatabaseName).C("projects")

	var projectsM []projectModel
	err := com.Find(bson.M{}).All(&projectsM)
	if err != nil {
		return nil, err
	}

	projects := make([]api.Project, 0)
	for _, m := range projectsM {
		projects = append(projects, toApiProject(m))
	}
	return projects, nil
}

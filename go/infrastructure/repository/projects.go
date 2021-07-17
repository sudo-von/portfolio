package repository

import (
	"fmt"

	"github.com/mongo-experiments/go/pkg/api"
	mgo "gopkg.in/mgo.v2"
	"gopkg.in/mgo.v2/bson"
)

type ProjectMongo struct {
	session *mgo.Session
}

func NewProjectMongo(dburl string, database string, username string, password string) (*ProjectMongo, error) {
	session, err := mgo.Dial(fmt.Sprintf("mongodb://%s:%s@%s:27017/%s?authSource=admin", username, password, dburl, database))
	if err != nil {
		return nil, err
	}
	projectMongo := ProjectMongo{
		session: session,
	}
	return &projectMongo, nil
}

func (pm *ProjectMongo) Close() error {
	pm.session.Close()
	return nil
}

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

func (r *ProjectMongo) GetProjects() ([]api.Project, int, error) {

	session := r.Session.Copy()
	defer session.Close()
	con := session.DB(r.DatabaseName).C("projects")

	var projectsM []projectModel
	err := con.Find(bson.M{}).All(&projectsM)
	if err != nil {
		return nil, 0, err
	}

	total, err := con.Find(bson.M{}).Count()
	if err != nil {
		return nil, 0, err
	}

	projects := make([]api.Project, 0)
	for _, m := range projectsM {
		projects = append(projects, toApiProject(m))
	}
	return projects, total, nil
}

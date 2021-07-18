package mongo

import (
	"freelancer/portfolio/go/entity"

	mgo "gopkg.in/mgo.v2"
	"gopkg.in/mgo.v2/bson"
)

type ProjectMongo struct {
	Session      *mgo.Session
	DatabaseName string
}

func NewProjectMongo(repository *Repository) *ProjectMongo {
	return &ProjectMongo{
		Session:      repository.Session,
		DatabaseName: repository.DatabaseName,
	}
}

type projectModel struct {
	ID          bson.ObjectId `bson:"_id" json:"id"`
	Title       string        `bson:"title" json:"title"`
	Description string        `bson:"description" json:"description"`
	Image       string        `bson:"image" json:"image"`
	Repository  string        `bson:"repository" json:"repository"`
}

func toApiProject(project projectModel) entity.Project {
	return entity.Project{
		ID:          project.ID.Hex(),
		Title:       project.Title,
		Description: project.Description,
		Image:       project.Image,
		Repository:  project.Repository,
	}
}

func (r *ProjectMongo) GetProjects() ([]entity.Project, int, error) {

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

	projects := make([]entity.Project, 0)
	for _, m := range projectsM {
		projects = append(projects, toApiProject(m))
	}
	return projects, total, nil
}

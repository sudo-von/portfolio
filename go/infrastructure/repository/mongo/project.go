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
	ID        bson.ObjectId `bson:"_id"`
	Title     string        `bson:"title"`
	ImageURL  string        `bson:"image_url"`
	TechStack []string      `bson:"tech_stack"`
}

func toApiProject(project projectModel) entity.Project {
	return entity.Project{
		ID:        project.ID.Hex(),
		Title:     project.Title,
		ImageURL:  project.ImageURL,
		TechStack: project.TechStack,
	}
}

func (r *ProjectMongo) GetProjects() ([]entity.Project, *int, error) {

	session := r.Session.Copy()
	defer session.Close()
	con := session.DB(r.DatabaseName).C("projects")

	var projectsM []projectModel
	var searchQuery bson.M

	err := con.Find(searchQuery).All(&projectsM)
	if err != nil {
		return nil, nil, err
	}

	total, err := con.Find(searchQuery).Count()
	if err != nil {
		return nil, nil, err
	}

	projects := make([]entity.Project, 0)
	for _, m := range projectsM {
		projects = append(projects, toApiProject(m))
	}
	return projects, &total, nil
}

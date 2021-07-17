package config

import "os"

var (
	DB_URL      = os.Getenv("MONGO_URL")
	DB_NAME     = os.Getenv("ME_CONFIG_MONGODB_AUTH_DATABASE")
	DB_USER     = os.Getenv("MONGO_INITDB_ROOT_USERNAME")
	DB_PASSWORD = os.Getenv("MONGO_INITDB_ROOT_PASSWORD")
)

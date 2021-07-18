package middleware

import "github.com/go-chi/cors"

func Cors() *cors.Cors {
	return cors.New(cors.Options{
		AllowedOrigins:   []string{"*"},
		AllowedMethods:   []string{"GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"Accept", "Authorization", "Content-Type", "X-CSRF-Token", "File-Name"},
		ExposedHeaders:   []string{"Link", "File-Name", "Authorization"},
		AllowCredentials: true,
		MaxAge:           300,
	})
}

package handler

import (
	"freelancer/portfolio/go/api/presenter"
	"freelancer/portfolio/go/pkg/newerror"
	"net/http"
	"net/url"
	"strconv"

	"github.com/go-chi/render"
)

// Converts string to int.
func ParamToInt(param string, val url.Values) *int {
	if s := val.Get(param); s != "" {
		i, err := strconv.Atoi(s)
		if err != nil {
			return nil
		}
		return &i
	}
	return nil
}

// CheckError handles all the http error status response.
func CheckError(err error, w http.ResponseWriter, r *http.Request) {
	if _, ok := err.(*newerror.ErrNotFound); ok {
		render.Render(w, r, presenter.ErrNotFound(err))

	} else if _, ok := err.(*newerror.ErrBadRequest); ok {
		render.Render(w, r, presenter.ErrInvalidRequest(err))

	} else if _, ok := err.(*newerror.ErrUnauthorized); ok {
		render.Render(w, r, presenter.ErrUnauthorized(err))

	} else if _, ok := err.(*newerror.ErrForbidden); ok {
		render.Render(w, r, presenter.ErrForbidden(err))
	} else if _, ok := err.(*newerror.ErrConflict); ok {
		render.Render(w, r, presenter.ErrConflict(err))

	} else {
		render.Render(w, r, presenter.ErrInternalServer(err))
	}
}

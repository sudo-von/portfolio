package handler

import (
	"fmt"
	"freelancer/portfolio/go/api/presenter"
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

func CheckError(err error, w http.ResponseWriter, r *http.Request) {
	fmt.Println(err)
	render.Render(w, r, presenter.ErrInternalServer(err))
}

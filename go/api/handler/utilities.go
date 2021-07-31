package handler

import (
	"fmt"
	"freelancer/portfolio/go/api/presenter"
	"net/http"
	"net/url"
	"strconv"

	"github.com/go-chi/render"
)

func ParamToInt(param string, url url.Values) int {
	var value int
	if s := url.Get(param); s != "" {
		value, err := strconv.Atoi(s)
		if err != nil {
			return value
		}
		return value
	}
	return value
}

func CheckError(err error, w http.ResponseWriter, r *http.Request) {
	fmt.Println(err)
	render.Render(w, r, presenter.ErrInternalServer(err))
}

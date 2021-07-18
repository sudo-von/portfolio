FROM golang:1.15
ENV TZ=America/Mexico_City
COPY . /github.com/sudo-von/
WORKDIR /github.com/sudo-von/cmd/
RUN go build -o $pwd main
CMD ./main
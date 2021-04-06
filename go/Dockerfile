FROM golang:1.15

ENV TZ=America/Mexico_City
# Copy files.
COPY . /sudo-von/
WORKDIR /sudo-von/cmd/
# Make binary.
RUN go build -o $pwd main
# Run binary.
CMD ./main
# Expose port.
EXPOSE 80
# docker-test-app

A simple Express.js server example for Docker demonstration.

## Features
- Node.js server using Express
- Responds with a JSON message at the root endpoint
- Ready to be containerized with Docker

## Files
- `server.js`: Main server file
- `package.json`: Project metadata and dependencies

## Usage

### Install dependencies
```
npm install
```

### Run locally
```
node server.js
```

### API Endpoint
- `GET /` — Returns a JSON greeting message

## Example Response
```
{
  "status": "success",
  "message": "Hello from Docker🐳"
}
```

## Docker Commands

### Build the Docker image
```
docker build -t snackoverflowasad/01-docker .
```

### Run the Docker container
```
docker run -p 8800:8800 snackoverflowasad/01-docker
```

<!-- ### Push the image to Docker Hub
```
docker push snackoverflowasad/01-docker -->
---

## License
[MIT License](LICENSE)

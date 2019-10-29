# Docker

1. Install docker in your machine
2. Build the docker image `docker build -t upwork-test:dev .`
3. Run the docker image for development `docker run --name upwork-test -v ${PWD}:/opt/app -v /opt/app/node_modules -p 3000:3000 --rm upwork-test:dev`
4. Open your browser and visit `http://localhost:3000`
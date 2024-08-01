## Setup Guide
**Be aware that** putting **DB_SYNC** to true in your production may result in irreversible data lost.
**DB_SYNC**  should only be put to true in development to skip the necessity of doing migrations.
### Without Docker

- Create .env file with command `cp .env.example .env` and replace with your own env variable
- `yarn install`
- `yarn start` (Your API will be exposed through port 3000)

### With Docker
Run the following scripts for UNIX (Mac,Linux)
```bash
$ cp .env.example .env
$ docker-compose build
$ docker-compose up -d
```
DOS(Windows)
```bash
$ copy .env.example .env
$ docker-compose up -d
```
## Available Services with Docker Container
Once you managed to run the docker container, the following service will be available:
- Nginx will serve as a reverse proxy and will be exposed through port 80 (http://localhost)
- Swagger API Docs (http://localhost/api/docs/)
- Database (Postgres 12) (http://localhost:5432)
- Redis Store (Only Available in internal docker network) (http://0.0.0.0:6379)
- NestJs Server (Only Available in internal docker network) (http://0.0.0.0:3000)
## Generate fixtures
```bash
$ docker exec -it mini_social_media-nest-1 yarn fixture:generate 
## Features
- User can register and login with jwt and google oauth2
- User can post and Comment
- Users can perform CRUD on this own posts
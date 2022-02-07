## Development set up

1. create a _.env_ file with the following fields filled
```
# AWS
AWS_ID=
AWS_SECRET=
AWS_BUCKET_NAME=

# JWT
JWT_KEY=

# DATABASE
DB_DIALECT=postgres
DB_HOST=pgsql
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_DATABASE=postgres
DB_PORT=5432

# APP
APP_PORT=3000
BCRYPT_SALT_ROUNDS=10
```
2. start docker compose

    docker-compose up

3. if you want to re-create the database schema on application launch you can set `sync({ force: true })` for _sequelize_ in the root's _index.js_ file

4. connect to the docker container

    docker exec -ti -u node koombea_nodejs bash

5. install dependencies

    npm install

5. start the development environment

    npm run dev


## Endpoints

### signup
registers a new user

    POST /signup
    

request body

    http code: 201
    {
        "username": "admin",
        "password": "secret"
    }

response
    {
        "id": 1,
        "username": "admin"
    }

### login
get access token

    POST /login

request body

    // http code: 200
    {
        "username": "admin",
        "password": "secret"
    }

response

    {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsImlhdCI6MTY0NDI0NDM5OH0.2sulGFbfIO7d71l8_Qkv9b19fM4vgWs5z2lQRab9mm8"
    }


### upload contact file
uploads a new contact file for the user

    curl --location --request POST 'localhost:3000/contact-files' \
    --header 'Authorization:: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsImlhdCI6MTY0NDI0NDM5OH0.2sulGFbfIO7d71l8_Qkv9b19fM4vgWs5z2lQRab9mm8' \
    --form 'contacts.csv=@"/Users/user/test_files/mock_data_01.csv"'

response

    // http code: 201
    {
        "message": "QUEUED"
    }

### process a contact file
process a previously uploaded file

    Authorization: Bearer <token>
    POST /contact-files/<contact_file_id>/process

response

    // http code: 200
    {
        "message": "OK"
    }

### list contact files
list the contact files the user has uploaded

    Authorization: Bearer <token>
    GET /contact-files?page=0&size=10

response

    {
        "totalItems": 1,
        "contact_files": [
            {
                "id": 1,
                "userId": 1,
                "originalFilename": "contacts.csv",
                "location": "https://koombeas3nodetest.s3.amazonaws.com/contacts_1_1644244754358",
                "key": "contacts_1_1644244754358",
                "state": "on hold",
                "created_at": "2022-02-07T14:39:14.358Z",
                "updated_at": "2022-02-07T14:39:15.030Z",
                "user_id": 1
            }
        ],
        "totalPages": 1,
        "currentPage": 0
    }

### list contacts
list the contacts a user has registered

    Authorization: Bearer <token>
    GET /contacts?page=0&size=2

response

    {
        "totalItems": 92,
        "contacts": [
            {
                "id": 1,
                "userId": 1,
                "contactFileId": null,
                "name": "Nicol",
                "dob": "1999-09-29T00:00:00.000Z",
                "phone": "(+87) 781-956-67-00",
                "address": "02 Forster Terrace",
                "creditCard": "9391",
                "franchise": "mastercard",
                "email": "nabrashkov1@ucoz.ru",
                "created_at": "2022-02-07T14:44:36.395Z",
                "updated_at": "2022-02-07T14:44:36.395Z",
                "user_id": 1,
                "contact_file_id": null
            },
            {
                "id": 2,
                "userId": 1,
                "contactFileId": null,
                "name": "Darla",
                "dob": "1999-02-02T00:00:00.000Z",
                "phone": "(+36) 910-770-08-81",
                "address": "3 Arapahoe Trail",
                "creditCard": "2992",
                "franchise": "visa",
                "email": "dcuppitt2@altervista.org",
                "created_at": "2022-02-07T14:44:36.395Z",
                "updated_at": "2022-02-07T14:44:36.395Z",
                "user_id": 1,
                "contact_file_id": null
            }
        ],
        "totalPages": 46,
        "currentPage": 0
    }

## Run tests
To run all tests use

    npm run test

To run a single test file

    npm run test-single <path-to-test-file>
    example:
    npm run test-single ./test/middleware/authTestMiddleware

# Travel Buddies

## website
https://travel-buddies.netlify.app/ 

## usage
- start the backend processes
    - `docker compose build` (you will need to run this if you make changes to Dockerfiles or want to install new modules)
    - `docker compose up`
        - starts pg database called myDb, interact with `bash _scripts/psql`
        - starts API at `localhost:5000`
        - starts Socket server at `localhost:3000`
    - run `docker exec -it travel-buddies_api_1 sh` to start an interactive shell for API
        - run `flask db init`
        - run `flask db migrate`
        - run `flask db upgrade`

- start client server
    - `npm run dev`
        - access at `localhost:8080` 

- end docker processes with `docker compose down` or `ctrl-c` or `bash _scripts/teardown.sh` 



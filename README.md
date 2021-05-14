# Travel Buddies

## usage
- start the backend processes
    - `docker compose build` (you will need to run this if you make changes to Dockerfiles or want to install new modules)
    - `docker compose run`
        - starts pg database called myDb, interact with `bash _scripts/psql`
        - starts API at `localhost:5000`
        - starts Socket server at `localhost:3000`
- end processes with `docker compose down` or `ctrl-c` or `bash _scripts/teardown` 

- start client server
    - `npm run dev`
        - access at `localhost:8080` 
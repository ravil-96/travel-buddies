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


## troubleshooting
If you are getting error messages about `wait-for-it.sh` file, particulalrly Mac users you'll need to check the file has the right permissioins (it should have an x at the end).
- `cd api` and run `ls -lah`, if there is no x at the end 
- run `chmod +x "./wait-for-it.sh"` 
- check your file by running `ls -lah` again.
<img src="https://i.imgur.com/KvFHW2R.png">

## Get inspired about travelling with your friends again
https://holiday-hub.netlify.app/

## Client

Dear User,

Welcome to a travel app that has been created at a time when borders are still largely shut and global travel is increasingly more difficult to undertake. Despite the many obstacles we might face in order to reach distant places now (it can't be as bad as our ancestors' journeys though) our imaginations are always free and good times with friends are to be enjoyed anyways. This is the central idea of our app: a portal for live map collaboration among friends and like-minded people to get inspired, to discover places without limits. So, without further ado, our precious visitor, fasten your seatbelt and take on a journey with us! 

## Aim
Create an app with mapping functionality that would allow users to interact in real life using chat and to add and delete markers as well as to see updates made by their friends and companions.

# Installation and usage of the website

### Using our deployed website link
[![Netlify Status](https://api.netlify.com/api/v1/badges/cf436e4b-832d-47f0-9f30-ccab694ba52c/deploy-status)](https://app.netlify.com/sites/holiday-hub/deploys)


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

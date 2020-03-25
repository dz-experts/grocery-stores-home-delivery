<p align="center">
    <img height="150px" width="150px" src="https://image.flaticon.com/icons/svg/662/662325.svg" />
    <h1 align="center">Mendarkom - أقضي من داركم</h1>
</p>

<p align="center">
    <a href="https://github.com/psf/black"><img src="https://img.shields.io/badge/code%20style-black-000000.svg"></a>
    <a href="https://dependabot.com"><img src="https://api.dependabot.com/badges/status?host=github&repo=dz-experts/grocery-stores-home-delivery" alt="Dependabot Status"></a>
    <a href="LICENSE.md"><img src="https://badgen.net/github/license/micromatch/micromatch" /></a>
</p>

<p align="center">A website/app for showing grocery stores that offer home delivery service on a map. <br> 
  ~ Specific to Algeria in light of COVID-19 outbreak ~</p>

#

The codebase is split into backend and frontend folder. 

- The `backend/`: is a Restful API built with Python, using [FastAPI](https://github.com/tiangolo/fastapi), SQLAlchemy ..etc
- The `frontend/`: is a React frontend app, completely separated from the backend.

# Setup & Development 
We have a docker-based dev environment with a `Makefile` ready for use, it'll take care of firing up PostgreSQL database and installing all frontend and backend requirements.

- First rename `.env-example` to `.env`, change the values there accordingly, you probably won't need to change anything.
- Run `make shell` in your terminal (assuming you have `make` installed). 

This will use the `docker-compose.dev.yml` file to spin up a DB instance, and drop you in a shell. 

Once in a shell you can:
- `cd` into the `frontend` folder, fire up the frontend app with `yarn install` then `yarn start`.
- Run the `mendarkom start` which uses a backend CLI already installed for you to run the backend/Restful api. You can `cd` into the `backend` folder and start hacking from there if you're contributing to the backend.
- You'll probably need to issue `mendarkom create-db` to create the initial database the backend will need to work with. Further enhancements to this command will introduce basic fixtures and complete setup. 

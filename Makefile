SHELL := /bin/bash

all:

fixwindows:
	# If you are on Windows cmd or powershell, make sure you run these commands first
	# set COMPOSE_CONVERT_WINDOWS_PATHS=1
	# chcp 850

test:
	python -W ignore -m pytest -x --pdb

dev-build:
	docker-compose -f docker-compose.dev.yml build

run-backend:
	docker-compose -f docker-compose.dev.yml run --rm --service-ports app

shell:
	docker-compose -f docker-compose.dev.yml run --rm --service-ports app bash

deploy:
	docker image prune -a --force
	docker-compose -f docker-compose.prod.yml up -d --build

SHELL := /bin/bash

all:

fixwindows:
	# If you are on Windows cmd or powershell, make sure you run these commands first
	# set COMPOSE_CONVERT_WINDOWS_PATHS=1
	# chcp 850

test:
	python -W ignore -m pytest -x --pdb

shell:
	docker-compose run --rm --service-ports backend bash

deploy:
	docker image prune -a --force
	docker-compose up -d --build

clean:
	docker-compose down -v
	find . -type d -iname '__pycache__' -exec rm -rf '{}' \;
	find . -type d -iname '.cache' -exec rm -rf '{}' \;

FROM node:13-buster

RUN apt-get update && apt-get install --yes --no-install-recommends \
    software-properties-common python3-dev python3-setuptools python3-pip

WORKDIR /app

COPY . .

RUN cd backend; pip3 install --upgrade pip && pip install -e .[dev]

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "5000"]

EXPOSE 3000 5000

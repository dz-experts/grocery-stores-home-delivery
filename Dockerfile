FROM python:3.8-buster

WORKDIR /app

COPY ./backend .

RUN pip install --upgrade pip && pip install .

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "5000"]

EXPOSE 5000
# syntax=docker/dockerfile:1
FROM python:3.9.5-alpine3.13
WORKDIR /code
ENV FLASK_APP=app.py
ENV FLASK_ENV=development
ENV FLASK_RUN_HOST=0.0.0.0
RUN apk add bash g++ libffi-dev postgresql-dev --no-cache gcc musl-dev linux-headers
COPY requirements.txt requirements.txt
COPY wait-for-it.sh wait-for-it.sh
RUN pip install -r requirements.txt
EXPOSE 5000
COPY . .
CMD ["./wait-for-it.sh", "db:5432", "--", "flask", "run"]
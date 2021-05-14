# syntax=docker/dockerfile:1
FROM python:3.9.5-alpine3.13
WORKDIR /code
ENV FLASK_APP=app.py
ENV FLASK_ENV=development
ENV FLASK_RUN_HOST=0.0.0.0
ENV FLASK_RUN_PORT=3000
RUN apk add g++ --no-cache gcc musl-dev linux-headers
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt
EXPOSE 3000
COPY . .
CMD ["python", "app.py"]
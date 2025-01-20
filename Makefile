build:
	docker build -t driveon .

run:
	docker run -p 8000:8000 driveon

migrate:
	reflex db migrate && reflex db makemigrations
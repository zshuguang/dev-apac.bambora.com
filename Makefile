NAME=dev-apac.bambora.com
VERSION=0.0.1

build:
	docker build -t $(NAME):$(VERSION) --rm .

run:
	docker run -p 4567:4567 $(NAME):$(VERSION)

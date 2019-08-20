.PHONY: wipe_and_seed_messagedb
wipe_and_seed_messagedb:
	docker-compose rm  -f -s messagedb
	docker volume rm $(shell basename $(CURDIR) | sed 's/[^a-zA-Z0-9]//g')_mysql_data
	docker-compose build  --no-cache messagedb
	docker-compose up messagedb

.PHONY: test_client
test_client:
	docker-compose run client npm test

.PHONY: test_server
test_server:
	docker-compose up -d messagedb && docker-compose run server npm test
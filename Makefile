.PHONY: wipe_and_seed_messagedb
wipe_and_seed_messagedb:
	docker-compose rm  -f -s messagedb
	docker volume rm $(shell basename $(CURDIR) | sed 's/[^a-zA-Z0-9]//g')_mysql_data
	docker-compose build  --no-cache messagedb
	docker-compose up messagedb
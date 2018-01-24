FROM mongo

COPY /mongo/seed-dataset.json /init.json

CMD mongoimport --host mongo --db yoga-service --collection positions --drop --type json --file /init.json --jsonArray

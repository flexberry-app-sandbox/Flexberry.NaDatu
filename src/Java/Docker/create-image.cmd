docker build --no-cache -f SQL\Dockerfile.PostgreSql -t na_datu-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t na_datu-java/app ../../..

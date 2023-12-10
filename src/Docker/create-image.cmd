docker build --no-cache -f SQL\Dockerfile.PostgreSql -t na_datu/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t na_datu/app ../..

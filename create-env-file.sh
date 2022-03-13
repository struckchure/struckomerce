touch .env

echo DEBUG= ${secrets.DEBUG} > .env
echo SECRET_KEY= ${secrets.SECRET_KEY} > .env

echo ALLOWED_HOSTS= ${secrets.ALLOWED_HOSTS} > .env
echo CORS_ALLOWED_ORIGINS= ${secrets.CORS_ALLOWED_ORIGINS} > .env

echo SQL_ENGINE= ${secrets.SQL_ENGINE} > .env
echo SQL_DATABASE= ${secrets.SQL_DATABASE} > .env
echo SQL_USER= ${secrets.SQL_USER} > .env
echo SQL_PASSWORD= ${secrets.SQL_PASSWORD} > .env
echo SQL_HOST= ${secrets.SQL_HOST} > .env
echo SQL_PORT= ${secrets.SQL_PORT} > .env

cat .env

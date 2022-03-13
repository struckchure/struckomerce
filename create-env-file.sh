#!/bin/bash

touch .env

echo DEBUG=$DEBUG > .env
echo SECRET_KEY=$SECRET_KEY > .env

echo ALLOWED_HOSTS=$ALLOWED_HOSTS > .env
echo CORS_ALLOWED_ORIGINS=$CORS_ALLOWED_ORIGINS > .env

echo SQL_ENGINE=$SQL_ENGINE > .env
echo SQL_DATABASE=$SQL_DATABASE > .env
echo SQL_USER=$SQL_USER > .env
echo SQL_PASSWORD=$SQL_PASSWORD > .env
echo SQL_HOST=$SQL_HOST > .env
echo SQL_PORT=$SQL_PORT > .env

cat .env

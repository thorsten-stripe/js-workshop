#!/bin/bash

check() {
  if [ -x "$(command -v redis-server)" ];
  then
    echo 'Redis is already installed!' >&2
    start_server
  else
    run brew install redis
    start_server
  fi
}

start_server() {
  echo "Starting Redis server" >&2
  run redis-server /usr/local/etc/redis.conf
}

run() {
  echo >&2 "+ $*"
  "$@"
}

check

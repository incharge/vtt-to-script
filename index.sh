#!/bin/sh
basedir=$(dirname "$(echo "$0" | sed -e 's,\\,/,g')")
exec "node" "$basedir/index.mjs" "$@"

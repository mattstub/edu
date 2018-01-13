#!/bin/bash

source './env/db.conf'

echo "Configuring database: $MONDB"

dropdb -U $MONUSER $MONDB
createdb -U $MONUSER $MONDB
psql -U $MONUSER $MONDB < ./bin/sql/$MONDIR.sql

echo "$MONDB configured"
echo 
echo
echo "Clearing environment..."

source './env/dbcls.conf'

echo
echo
echo "Environment has been reset!"
echo "Get back to work!"
echo


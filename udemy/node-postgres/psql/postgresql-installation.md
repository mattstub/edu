## Let's install PostgreSQL onto your operating system.
As an open source object-relational database management system, PostgreSQL available for MacOS, Linux, and Windows.
  
## Goal for each Operating System
The goal will be to run the following command successfully from the command line (regardless of the OS):

```psql -U postgres```

This should open the psql interactive shell and print a prompt that looks like:

```postgres=# ```

## Installation per OS:

### MacOS:
Let's walk through installing PostgreSQL with the postgresapp on Mac.
- Visit [PostgreSQL](http://postgresapp.com/) Website
- Download the most recent version --> Click "Download"
- Open the application, and click "initialize" to create a new PostgreSQL server
- Ensure that the Postgres.app bin folder has been added to your $PATH;
  - In the command line, enter: `echo "$PATH"`
  - Search through the output and make sure Postgres.app/Contents/Version/latest/bin is there in order to ensure that this directory's executables are callable from any directory in bash.
- In the command line, enter: `lsof -i tcp:5432`, and ensure that the postgres `COMMAND` appears.
  - This checks if the Postgres server is now running on port 5432 under the name `localhost:postgresql`
   
### Linux:
- Acquire the source code: 
```wget ftp://ftp.postgresql.org/pub/source/v9.3.2/postgresql-9.3.2.tar.bz2```
- Install the packages needed for building Postgres:
```sudo apt-get install build-essential libreadline-dev zlib1g-dev flex bison libxml2-dev libxslt-dev libssl-dev```

### Windows:
- Download the installer specified by EnterpriseDB for all supported PostgreSQL versions. 
  - Installer is available [here](https://www.postgresql.org/download/windows/)

## Options
- Locate the `pg_hba.conf` file in your system and change the database connections at the bottom of the file to **md5** as opposed to **trust** to require passwords when making connections.
- You can then set up a environment variable to handle the password in a config script with `export PGPASSWORD=<password>`

FROM postgres:10.1
LABEL maintainer="matt@mattstub.com"
EXPOSE 5432

COPY seed.sql /docker-entrypoint-initdb.d/
VOLUME /var/lib/postgresql/data

# Node App Encapsulated in Container

To launch an instance one the repo has been cloned to local machine 
```docker container run --name node-db -p 9000:5432 --rm -v *path/to/local/dir*:/var/lib/postgresql/data node-db:latest```

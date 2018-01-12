# RESTful Routing
- Representational State Transfer
- REST is just a pattern for defining routes
- Mapping system between HTTP routes and CRUD

## BLOG EXAMPLE
- Below is an example of a CRUD route, not utilizing REST  

Name      | Path               | HTTP Verb  | Purpose  
----------|--------------------|------------|------------------------  
CREATE    | /createBlog        | POST       | Create a new blog post  
READ      | /allBlogs          | GET        | Show a blog post  
UPDATE    | /updateBlog/:id    | GET        | Update a blog's content  
DESTROY   | /destroyBlog/:id   | DELETE     | Delete blog post  

- Here is an example of RESTful route mapping

Type    | Name       | Path              | HTTP VERB  | Purpose                                             | Mongoose Method  
--------|------------|-------------------|------------|-----------------------------------------------------|------------------  
MAIN    | Index      | /dogs             | GET        | List all dogs                                       | Dog.find()  
CREATE  | New        | /dogs/new         | GET        | Show new dog form                                   | N/A  
CREATE  | Create     | /dogs             | POST       | Create a new dog, then redirect somewhere           | Dog.create()  
READ    | Show       | /dogs/:id         | GET        | Show info about one specific dog                    | Dog.findById()  
UPDATE  | Edit       | /dogs/:id/edit    | GET        | Show edit form for one dog                          | Dog.findById()  
UPDATE  | Update     | /dogs/:id         | PUT        | Update a particular dog, then redirect somewhere    | Dog.findByIdAndUpdate()  
DELETE  | Destroy    | /dogs/:id         | DELETE     | Delete a particular dog, then redirect somewhere    | Dog.findByIdAndRemove()  

## Things to Remember
- HTML forms can not handle PUT requests, they will default as a get request if specifying put
- Must utilize a method override
  - Tack `?_method=PUT` on the backside of the action; PUT can be whatever you want it to be.
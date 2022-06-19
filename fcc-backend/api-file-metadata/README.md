# freeCodeCamp Request Header Parser API

**[Main API Page](https://fcc-ms-api.herokuapp.com)**  
**[Heroku API - File Metadata Microservice](https://fcc-ms-api.herokuapp.com/api/fileanalyse/landing)**  
**[Repl](https://boilerplate-project-filemetadata.mattstub.repl.co/)**  

### File Metadata Microservice Conditions

**[Instructions For Project](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/file-metadata-microservice)**  
**[Example Project](https://file-metadata-microservice.freecodecamp.rocks/)**  

**HINT:** You can use the `multer` npm package to handle file uploading.

- [x] You should provide your own project, not the example URL.
- [x] You can submit a form that includes a file upload.
- [x] The form file input field has the `name` attribute set to `upfile`.
- [x] When you submit a file, you receive the file `name`, `type`, and `size` in bytes within the JSON response.[^1]

[^1]: With Heroku, will only pass conditions 1&2 at the same time, or just 3 by itself, but never all three at the same time. Pushed to Repl and all conditions work properly. Could be a routing conflict causing the errors with Heroku? *06/06/2022*

#### Customization & Cleanup
- [x] Optimize code and remove testing console logs, deprecate file but keep copy for reference later
- [x] Document operations of code

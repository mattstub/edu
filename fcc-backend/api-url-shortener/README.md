# freeCodeCamp Request Header Parser API

**[Main API Page](https://fcc-ms-api.herokuapp.com)**  
**[Heroku API - URL Shortener](https://fcc-ms-api.herokuapp.com/api/shorturl/landing)**  

### Timestamp Microservice Conditions

**[Instructions For Project](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/url-shortener-microservice)**  
**[Example Project](https://url-shortener-microservice.freecodecamp.rocks/)**  

**HINT:** Do not forget to use a body parsing middleware to handle the POST requests. Also, you can use the function `dns.lookup(host, cb)` from the `dns` core module to verify a submitted URL.

- [x] You should provide your own project, not the example URL.
- [x] You can `POST` a `URL` to `/api/shorturl` and get a JSON response with `original_url` and `short_url` properties. Here's an example: { original_url : 'https://freeCodeCamp.org', short_url : 1}
- [x] When you visit `/api/shorturl/<short_url>`, you will be redirected to the `original URL`.
- [x] If you pass an `invalid URL` that doesn't follow the valid http://www.example.com format, the JSON response will contain { error: 'invalid url' }

#### Customization & Cleanup
- [x] Optimize code and remove testing console logs
- [x] Document operations of code
- [ ] Add dual database functionality

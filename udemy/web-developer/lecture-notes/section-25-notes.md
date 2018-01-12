# Introduction to APIs
Connecting with other applications

## API - Application Programming Interface
APIs are interfaces for code/computers to talk to one another
- Tinder is a popular app that utilizes the Facebook API to bring down data to the app
  - shows favorite movies, books, music, etc.
  - doesn't come from facebook stalking
  - behind the scenes tinder's code connects to facebook api and pulls down data to implement into its own database
- An application programming interface is a set of routines, protocols, and tools for building software and applications. 
- Doesn't necessarily have to be web based.

## Web API's
- Generally communicate via HTTP. 
- a subset of APIs
- Twitter API: give me all the tweets that mention 'ice cream'
- Facebook API: send me the current user's profile picture
- Weather API: what is the weather in Missoula Montana?
- Reddit API: what is the current top post?
- GooglePlaces API: what gas stations are near the user?
- Yelp API: give me 10 restaurants in the zip code 94110
- [IFTTT](https://ifttt.com) -- If This Than That
  - a way to chain a bunch of APIs together very easily
- [ProgrammableWeb](https://www.programmableweb.com) -- A massive directory of APIs

## JSON and XML
- An endpoint to an API is a link much like ` https://itunes.apple/com/search?term=beyonce&entity=album ` 
- The endpoint will respond with a json file
- APIs dont respond with HTML. HTML contains information abotu the structure of a page
- APIs resond with data, not structure. They simply use formats like XML or JSON
  - XML: Extended Markup Language is syntacticaly similar to HTML, but it does not describe presentation like HTML does.
  ```xml
  <person>
      <age>21</age>
      <name>Travis</name>
      <city>Los Angeles</city>
  </person>
  ```
  - JSON: Javascript Object Notation, looks exactly like JavaScript objects, but everything is a string
  ```json
  {
      "person": {
          "age": "21",
          "name": "Travis",
          "city": "Los Angeles"
      }
  }
  ```
- Old APIs utilize XML
- Some APIs utilize both
- Most new APIs utilize JSON

## Requests from Other Interfaces
- CURL is a way to make a request from the terminal, using ` curl <url> `

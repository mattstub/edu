# Angular Routing
**11 February 2018** -- Patrick Heartley

Multiple Page Application - multiple loads from the server for each request and page
Single Page Application - bring all of the dependencies in at the beginning to eliminate a lot of server requests

## Sample App
Game of Thrones 411

### The Setup
- set `base href` in index.html
  - set to root `/`
- import `router` in app.module.ts
  - in angular, router is a single instance
- define path in app.module.ts
  - ` { path: ''. component: WelcomeComponent } `
- define a catch all wildcard route for 404
  - ` { path: '**', component: NotFoundComponent } `
  - wildcard route at bottom, order of routes matters
  - first come first serve basis
- Routes with paramters, passing small amounts of data between views/components
  - ` { path: 'people/:id', component: PeopleDetailComponent } `



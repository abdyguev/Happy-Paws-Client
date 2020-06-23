# Happy Paws

## Description

Web app that pairs Animal shelters to the ideal owner and owners to their ideal pet.

## User Stories `
-  **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
-  **Signup/Shelter:** As an anon I can sign up as a shelter to post pets that are up for adoption
-  **Signup/User:** As an anon I can sign up as a user to adopt pets
-  **Login/shelter:** As a shelter I can login to the platform so that I can start adding the list of pets we have available
-  **Login/User:** As a user I can login to the platform so that I can start looking for pets that would match with me 
-  **Logout:** As a user pr shelter I can logout from the platform 

## Backlog

- create a social media type platform where people can post how their pets are growing, any tips on how to adopt new pets for new users.
- add a third party trasporter option for easy transportation of pets from shelter to new home
-Paypal to donate

# Client/Frontend

## Routes
| Path                      | Component                      | Permissions | Behavior                                                     |
| ------------------------- | --------------------           | ----------- | ------------------------------------------------------------ |
| `/`                       | SplashPage                     | public `<Route>`            | Home page                                        |
| `/signup-shelter`                 | SignupPage/log in  for shelters                    | anon only  `<AnonRoute>`    | Signup form, link to login/signup, navigate to profilepage after signup |
| `/signup-user`                  | LoginPage/signup for users                      | anon only `<AnonRoute>`     | Login form, link link to login/signup, navigate to profile after login, navigate to application after button signup  |
| `/application-user`                 | Application for users                    | anon only  `<AnonRoute>`    | link to application, navigate to profile after signup |
| `/logout`                 | n/a                            | user only `<PrivateRoute>`  | Navigate to homepage after logout, expire session
| `/find-user`                  | App to find animals for users                      | anon only `<AnonRoute>`     | link to app, find animals that you like. like them or skip them.  |
| `/backlog/series`         | NavBar, ElementList, FooterBar | user only `<PrivateRoute>`  | Shows all tv series on backlog                                |
| `/backlog/films`          | NavBar, ElementList, FooterBar | user only `<PrivateRoute>`  | Shows all films on backlog                                    |
| `/backlog/games`          | NavBar, ElementList, FooterBar | user only `<PrivateRoute>`  | Shows all games on backlog                                    |
| `/search/series`          | SearchForm, SearchResults      | user only  `<PrivateRoute>` | Search a tv series to be added                                |
| `/search/films`           | SearchForm, SearchResults      | user only `<PrivateRoute>`  | Search a film to be added                                     |
| `/search/games`           | SearchForm, SearchResults      | user only `<PrivateRoute>`  | Search a game to be added                                     |
| `/add/:id`                | ElementInfo                    | user only `<PrivateRoute>`  | Add an element to the backlog                                 |
| `/profile`                | Profile, Stats                 | user only  `<PrivateRoute>` | Check profile with stat information                           |
| `/done/series`            | Done list for Series           | user only  `<PrivateRoute>` | Shows all tv series finished                                  |
| `/done/films`             | Done list for films            | user only `<PrivateRoute>`  | Shows all films finished                                      |
| `/done/games`             | Done list for games            | user only `<PrivateRoute>`  | Shows all videogames finished                                 |
          


## Pages

## Components
- LandingPage 

- LoginPage

- SignupPage

- NavBar

- FooterBar

- Application

- PetsProfile

- UserProfile

- Favorites 

- Donate

- SheltersMap


## IO


## Services
- Auth Service / Shelters
  - auth.login(shelter)
  - auth.signup(shelter)
  - auth.logout()
  - auth.me()
  
 - Auth Service /User
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me() 
  
- External API
  - API for pets
  - API for shelters


<br>


## Learn More

# Server / Backend

## Models

```javascript
{
  username: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  platform: [platforms]
  elements: [{type: Schema.Types.ObjectId,ref:'Media'}]
}
```



Media model

```javascript
 {
   title: {type: String, required: true},
   type: {type: String, required: true},
   done: {type: Boolean, required: true},
   platform: {type: String, required: true},
   image: {type: String, required: true}
   description: {type, String, required: true}
   user: {type: Schema.Types.ObjectId,ref:'User'},
 }
```


<br>

### Deployment

## API Endpoints/Backend Routes

- GET /auth/me
- POST /auth/signup
  - body:
    - username
    - email
    - password
- POST /auth/login
  - body:
    - username
    - password
- POST /auth/logout
  - body: (empty)
- POST 
  - body:
- DELETE 
  - body: (empty)
- GET 
- POST 
  - body:
- GET 

  

## Links

### Trello/Kanban

https://trello.com/b/HawL7mgm/tails-of-life

### Git


[Client repository Link](https://github.com/abdyguev/Happy-Paws-Client)
[Server repository Link](http://github.com)

[Deploy Link](http://heroku.com)

### Slides




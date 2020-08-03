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
| `/`                       | SplashPage                     | public `<Route>`            | Home page     
| `/logout`                 | n/a                            | user only `<PrivateRoute>`  | Navigate to homepage after logout, expire session
| `/signup-user`                  | LoginPage/signup for users                      | anon only `<AnonRoute>`     | Login form, link link to login/signup, navigate to profile after login, navigate to application after button signup  |
| `/application-user`                 | Application form for users                    | anon only  `<AnonRoute>`    | link to application, navigate to profile after signup |
| `/find-user`                  | Navbar, App to find animals for users                      | anon only `<AnonRoute>`     | link to App, navbar, find animals that you like. like them or skip them.  |
| `/profile-user`         | NavBar, info | user only `<PrivateRoute>`  | edit some of your profile info                              |
| `/Favorite-user`          | NavBar, All favorited animals, 2buttons- deleting, and going to adoption | user only `<PrivateRoute>`  | Shows all animals with details and 2buttons                                   |
| `/favorite/:id`          | NavBar, form to fill in for adoption | user only `<PrivateRoute>`  | Show form for adoption of the chosen animal                                   |
| `/backlog/donate`          | Map      | user only  `<PrivateRoute>` | All animal shelters in the world                               |
| `/backlog/map`           | Navbar, map, Info of chosen shelter      | public `<Route>`  | See shelter detailes on the same page as the map with dropout window                                  |
| `/backlog/map/:id`           | Paypal section      | public `<Route>`  | Donate to selected shelter                                    |
| `/signup-shelter`                 | SignupPage/log in  for shelters                    | anon only  `<AnonRoute>`    | Signup form, link to login/signup, navigate to profilepage after signup |
| `/profile-shelter`                | Navbar, Form                  | user only `<PrivateRoute>`  | Form to update or see info of your data                                |
| `/animals-shelter`                | Animal collection                | user only  `<PrivateRoute>` | All animals that shelter added and can add more                           |
| `/animals-shelter/:id/edit`            | Navbar, form           | user only  `<PrivateRoute>` | Shows form to edit your collection
| `/animals-shelter/:id/add`            | Navbar, form           | user only  `<PrivateRoute>` | Shows form to add to your collection
| `/applications-shelter`             | Navbar, collection of applications            | user only `<PrivateRoute>`  | See all applications from users who want to adopt shelter's animals                                     |
| `/application-shelter/:id`             | Navbar, details of application, 2 buttons           | user only `<PrivateRoute>`  | See all details of chosen application and 3 buttons-aprove, declaine                                |
          


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
  
 - Auth Service / User
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

User model
```javascript
{
  full-name: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  location: {type: String, required: true},
  password: {type: String, required: true},
  phone : {type: String, required: true, unique: true},
  job: {enum: [full-time, part-time, no job, remote]}
  living-place: {enum: [house with garden, apartment with garden, rented apartment, rented house, owned apartment, owned house]},
  have: {enum: [dogs, cats, children, other]},
  availability: {type: Number, required: true},
  favorites: [ObjectID <puppiest>],
}
```

Shelter model
```javascript
{
  full-name: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  shelter_name: {type: String, required: true},
  location:{type: String, required: true}, 
  description: {type: String, required: true},
  url: {tyoe: String, required: true}
}
```

Pets model

```javascript
 {
   name: {type: String, required: true},
   breed: {type: String, required: true},
   color: {type: String, required: true}, 
   age: {type: String, required: true},
   age: {type: Number, required: true},
   height: {type: Number, required: true},
   weight: {type: Number, required: true},
   image: {type: String, required: true},
   description: {type: String, required: true},
   funfact: {type: String, required: true},
   location: {type: String, required: true},
   organisation: [{
      type: mongoose.Schema.Types.ObjectId, ref: 'Shelter'
    }]
 }
```

Transaction model

```javascript
 {
   shelter: [{
      type: mongoose.Schema.Types.ObjectId, ref: 'Shelter'
    }]
       pets: [{
      type: mongoose.Schema.Types.ObjectId, ref: 'Pets'
    }]
       user: [{
      type: mongoose.Schema.Types.ObjectId, ref: 'User'
    }]
 }

<br>

### Deployment

## API Endpoints/Backend Routes

- GET /auth/me
- POST auth/signup-user
  - body:
    - username
    - email
    - password
- POST /application-user
  - body:
    - username
    - email
    - password
    - full-name
    - location
    - phone
    - job
    - living-place
    - have
    - hours
    
- POST /auth/signup-shelter
  - body:
    - username
    - email
    - password
    - shelter_name
    - location
    - description  
- GET /find-user
  - body:
    - image
    - name
    - color
    - breed
    - description
    - location   
- GET /applications-shelter
  - body:
    - username
    - full-name
    - location
    - phone
    - job
    - living-place
    - have
    - hours
- GET /animals-shelter
  - body:
    - full-name
    - email
    - color
    - breed
    - description
    - location     
- POST /animals-shelter/add
  - body:
    - image
    - name
    - color
    - breed
    - description
    - location  
- PATCH /animals-shelter/:id/edit    
  - body:
    - image
    - name
    - color
    - breed
    - description
    - location 
- GET /favorite/:id 
  - body:
    - _id
    - image
    - name
    - color
    - breed
    - description
    - location 
- DELETE /animals-shelter 
  - body:
    - image
    - name
    - color
    - breed
    - description
    - location

  

## Links

### Trello/Kanban

https://trello.com/b/HawL7mgm/happy-paws

### Git


[Client repository Link](https://github.com/abdyguev/Happy-Paws-Client)
[Server repository Link](https://github.com/AruneM/Happy-paws-backend)

Deployed app:

https://happy-paws.herokuapp.com/

### Slides




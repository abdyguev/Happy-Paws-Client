import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import {Switch, Route} from 'react-router-dom' 
import AnimalList from './components/Animallist';
import AddAnimals from './components/Addanimals';
import Nav from './components/Nav'
import axios from 'axios'
import AnimalDetail from './components/Animaldetails'
import EditAnimals from './components/Editanimals'
import {withRouter} from 'react-router-dom'
import SignIn from './components/Login';
import SignupUser from './components/SignupUser';
import config from './config';
import './App.css';
import LandingPage from './components/LandingPage'
import SignupShelter from './components/SignupShelter';

class App extends React.Component {

  state = {
    todos: [],
    loggedInUser: null
  }

  getTodos = () => {
    axios.get(`${config.API_URL}/todos`)
      .then((res) => {
        this.setState({
          todos: res.data
        })
      })
      .catch((err) => {
        if(err.response.status === 401) {
          this.props.history.push('/sign-in')
        }
      })  
  }

  getUser(){
    axios.get(`${config.API_URL}/user`, {withCredentials: true})
    .then((res) => {
      this.setState({
        loggedInUser: res.data
      })
    })
    .catch((err) => {
      if(err.response.status === 401) {
        this.props.history.push('/sign-in')
      }
    })  
  }

  componentDidMount(){
    this.getTodos();
    // if (!this.state.loggedInUser) {
    //   this.getUser();
    // }
  }


  handleAddTodo = (e) => {
      e.preventDefault()
      let name = e.target.name.value
      let description = e.target.description.value

      let myImage = e.target.image.files[0]
      let uploadData = new FormData();
      uploadData.append('imageUrl', myImage)

      axios.post(`${config.API_URL}/create`, {
        name: name,
        description: description,
        image: uploadData
      }, {withCredentials: true})
      .then((res) => {
        this.setState({
          todos: [...this.state.todos, res.data]
        }, () => {
          this.props.history.push('/')
        })
        // this.setState({} , function)
      })
      .catch((err) => {''
        if(err.response.status === 401) {
          this.props.history.push('/sign-in')
        }
      })
  }

  handleDelete = (id) => {
      //filter todos
      let newTodos = this.state.todos.filter((todo) => {
          return todo._id !== id
      })

      this.setState({
        todos: newTodos
      }, () => {
        this.props.history.push('/')
      })
      console.log(this.state.todos)
  }

  handleLogout = () => {
    console.log(document.cookie)
    axios.post(`${config.API_URL}/logout`, {}, { withCredentials: true})
    .then((res) => {
      console.log(res)
      this.setState({
        loggedInUser: null
      }, () => {
        this.props.history.push('/')
      })
    })
  }

  handleSignIn = (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value
    
    axios.post(`${config.API_URL}/signin`, {
      email: email,
      password: password
    })
    .then((res) => {
      this.setState({
        loggedInUser: res.data
      }, () => {
        this.props.history.push('/')
      })
    })
  }

  handleSignUp = (e) => {
    e.preventDefault()
    let email = e.target.email.value;
    let username = e.target.username.value
    let password = e.target.password.value
    axios.post(`${config.API_URL}/signup`, {
      email: email,
      username: username,
      password: password
    }, { withCredentials: true})
    .then((res) => {
        this.setState({
          loggedInUser: res.data
        }, () => {
          this.props.history.push('/')
        })
    })
  }

  render(){
    const {loggedInUser} = this.state
    return (
      <>
      {/* <Nav loggedInUser={this.state.loggedInUser} onLogout={this.handleLogout}/> */}
              
        
        <Switch>
        <Route exact path="/"  render={() => {
              return <LandingPage 
                />
              }}/>
            <Route exact path="/shelter/animals"  render={() => {
              return <AnimalList 
                  todos={this.state.todos} 
                />
            }}/>
            <Route exact path="/add-form" render={(routeProps) => {
              return <AddAnimals 
                  loggedInUser={loggedInUser} 
                  onAdd={this.handleAddTodo} 
                  {...routeProps} 
              />
            }}/>
           <Route exact path="/animal/:id" render={(routeProps) => {
              return <AnimalDetail 
                loggedInUser={loggedInUser} 
                afterDelete={this.handleDelete} 
                {...routeProps} 
              />
            }}/>
            <Route path="/animal/:id/edit" render={(routeProps) => {
              return <EditAnimals 
                loggedInUser={loggedInUser} 
                {...routeProps} 
              />
            }}/>
            <Route exact path="/sign-in" render={(routeProps) => {
              return <SignIn 
                onSignIn={this.handleSignIn} 
                {...routeProps} 
              />
            }}/>
            <Route exact path="/signup-shelter" render={(routeProps) => {
              return <SignupShelter onSignUp={this.handleSignUp} {...routeProps} />
            }}/>
            <Route exact path="/signup-user" render={(routeProps) => {
              return <SignupUser onSignUp={this.handleSignUp} {...routeProps} />
            }}/>
        </Switch>
      </> 
    )
  }
};


export default withRouter(App)



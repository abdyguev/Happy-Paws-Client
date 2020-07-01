import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import HomeNav from './HomeNav'

export default class LandingPage extends Component {
    render() {
        return (<>

            <div className="landing">

                <div className="content-wrapper">
                    <HomeNav />
                    <video autoPlay loop muted>
                        <source src="images/sundog.mp4" type="video/mp4"></source>
                        
                    </video>
                    
                    
                </div>
                
                
                
            </div>
            <div className="landing-2">
                <div className="user-1">

                    {/* <div className="box"> */}
                    <div className="content-wrapper-1">
                        <img src="/images/pup2.jpg" alt="cute puppy" />
                        <p className="onep">Looking to <span>Adopt?</span></p>
                    </div>
                    {/* </div> */}
                </div>
                <div className="user-2">
                    
                    <h1>USER</h1>
                    <p>It has never been easier to get matched<br></br>with your perfect puppy. All you need to <br></br>do is fill out a few questions and we will<br></br>automatically match you with the dogs<br></br>youd be the most compatible with!<br></br>Log-In or Sign-Up to meet your new<br></br> Best Friend!</p> 
                    <button type="button" className="btn btn-light" ><Link to={'/user/signup'}>User</Link></button>
                    
                </div>
                
            </div>
            
            <div className="landing-3">
                <div className="shelter-1">
                    <h1>SHELTER</h1>
                    <button type="button" className="btn btn-light" ><Link to={'/shelter/signup'}>Shelter</Link></button>
                    
  
                </div>
                <div className="shelter-2">

                    <div className="content-wrapper-2">
                        <img src="/images/pug.jpg" alt="cute puppy" />
                    </div>
                </div>


            </div>
            <div className="landing-4">
                <h1>Help become an Animal defender</h1>
                <Link type="button" className="btn btn-outline-secondary" to="/donate" target="_blank">Donate</Link>
            </div>
        </>)
    }
}

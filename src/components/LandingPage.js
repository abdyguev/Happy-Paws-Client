import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import HomeNav from './HomeNav'

export default class LandingPage extends Component {
    render() {
        return (<>

            <div class="landing">

                <div className="content-wrapper">
                    <HomeNav />
                    <img src="/images/pup.jpg" alt="cute puppy" />
                    </div>
                    <div className="text-wrapper">
                        <h1>HAPPY PAWS</h1>
                        <p>some text about how amazingthis app is</p> 
                    </div>
                    <div className="content-wrapper" id="icons">

                    
                </div>

            </div>
            <div class="landing-2">
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
                    <button type="button" class="btn btn-light" ><Link to={'/user/signup'}>User</Link></button>
                </div>
            </div>
            <div class="landing-3">
                <div className="shelter-1">
                    <h1>SHELTER</h1>
                    <button type="button" class="btn btn-light" ><Link to={'/shelter/signup'}>Shelter</Link></button>


                </div>
                <div className="shelter-2">

                    <div className="content-wrapper-2">
                        <img src="/images/pups2.jpg" alt="cute puppy" />
                    </div>
                </div>


            </div>
        </>)
    }
}

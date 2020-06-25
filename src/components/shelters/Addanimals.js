import React from 'react';
import { Redirect } from 'react-router-dom';

export default function AddAnimals(props){

    if (!props.loggedInUser) {
        return <Redirect to='/' />
    }
    return (
        <>
            <form onSubmit={props.onAdd}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" name="name" id="name" />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" className="form-control" name="description" id="description" />
                </div>
                <div className="form-group">
                    <label htmlFor="breed">Breed</label>
                    <input type="text" className="form-control" name="breed" id="breed" />
                </div>
                <div className="form-group">
                    <label htmlFor="color">Color</label>
                    <input type="text" className="form-control" name="color" id="color" />
                </div>
                <div className="form-group">
                    <label htmlFor="age">Age</label>
                    <input type="number" className="form-control" name="age" id="age" />
                </div>
                <div className="form-group">
                    <label htmlFor="height">Heigh</label>
                    <input type="number" className="form-control" name="height" id="height" />
                </div>
                <div className="form-group">
                    <label htmlFor="weight">Weight</label>
                    <input type="number" className="form-control" name="weight" id="weight" />
                </div>
                <div className="form-group">
                    <label htmlFor="funfact">Funfact</label>
                    <input type="text" className="form-control" name="funfact" id="funfact" />
                </div>
                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input type="text" className="form-control" name="location" id="location" />
                </div>
                <div className="form-group">
                    <label htmlFor="hair_length">Hair length</label>
                    <input type="text" className="form-control" name="hair_length" id="hair_length" />
                </div>
                <div className="form-group">
                    <label htmlFor="available_housing">Available for housing in</label>
                    <input type="text" className="form-control" name="available_housing" id="available_housing" />
                </div>
                <div className="form-group">
                    <label htmlFor="good_with">Good with:</label>
                    <input type="text" className="form-control" name="good_with" id="good_with" />
                </div>
                <div className="form-group">
                    <label htmlFor="bad_with">Bad with:</label>
                    <input type="text" className="form-control" name="bad_with" id="bad_with" />
                </div>
                <div className="form-group">
                    <label htmlFor="needs_time">Need time with the owner</label>
                    <input type="number" className="form-control" name="needs_time" id="needs_time" />
                </div>
                {/* <div className="form-group">
                    <label htmlFor="image">Image</label>
                    <input type="file" className="form-control" name="image" id="image" />
                </div> */}
                <button type="submit" className="btn btn-primary">Create</button>
            </form>
        </>
    )
}
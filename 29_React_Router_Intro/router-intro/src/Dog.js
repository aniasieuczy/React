import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';


class Dog extends Component {
    render() {
        return (
            <div className='Dog'>
                <h1>Dog!</h1>
                <h3>This dot is name: {this.props.name}</h3>
                <img src="../public/dog.jpg" alt="Here should be picture displayed"/>
            
            </div>
        )
    }
}

export default Dog;
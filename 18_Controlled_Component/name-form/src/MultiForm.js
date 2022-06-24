import React, { Component } from 'react';

class MultiForm extends Component {
    constructor(props) {
        super(props);
        this.state = { username: "", email: "", password: "" };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange (evt) {
        this.setState ( {[evt.target.name]: evt.target.value});
    }

    handleSubmit (evt) {
        evt.preventDefault();
        alert(`You typed: ${this.state.username}`);
        this.setState({username: ""});
    }
    render() {
        return (
            <div>
                <h1>Form w/MultipleInputs</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username"></label>
                    <input 
                    type="text"
                    name="username"
                    id="username"
                    value={this.state.username}
                    onChange={this.handleChange} 
                    />

                    <input
                    type="email" 
                    name="email"
                    placeholder="email" 
                    value = {this.state.email}
                    onChange={this.handleChange}
                    />
                    <input  
                    type="password" 
                    name="password"
                    placeholder='password' 
                    value={this.state.password} 
                    onChange={this.handleChange}
                    />
                
                </form>
                <button>Submit!</button>

            </div>
        )
    }
}

export default MultiForm;












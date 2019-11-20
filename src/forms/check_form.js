import React, { Component } from 'react';

class CheckForm extends Component {
    constructor() {
        super();
        this.state = {
            formControls: {
                email: {
                    value: ''
                },
                name: {
                    value: ''
                },
                password: {
                    value: ''
                }
            }
        }
    }
    changeHandler = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            formControls: {
                ...this.state.formControls,
                [name]: {
                    ...this.state.formControls[name],
                    value
                }
            }
        });
    }
    submitFormHandler = event => {
        event.preventDefault();
        console.log(this.state.formControls.email.value)
    }
    render() {
        return (
            <form onSubmit={this.submitFormHandler}>
                <label htmlFor="email">email</label>
                <input type="email"
                    name="email"
                    value={this.state.formControls.email.value}
                    onChange={this.changeHandler}
                />
                <br />
                <label htmlFor='name'>name</label>
                <input type="text"
                    name="name"
                    value={this.state.formControls.name.value}
                    onChange={this.changeHandler}
                />
                <br />
                <label htmlFor="password">password</label>
                <input type="password"
                    name="password"
                    value={this.state.formControls.password.value}
                    onChange={this.changeHandler}
                />
                <br />
                <input type="submit" />
            </form>
        );
    }

}

export default CheckForm;
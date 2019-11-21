import React, { Component } from 'react';

class CheckForm extends Component {
    constructor() {
        super();
        this.state = {
            formControls: {
                name: {
                    value: ""
                },
                surname: {
                    value: ""
                },
                id: {
                    value: ""
                },
                id_checkout: {
                    value: ""
                },
                attendance: {
                    value: ""
                }
            }
        };
    }
    changeHandler = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState(prevState => ({
            formControls: {
                ...prevState.formControls,
                [name]: {
                    ...prevState.formControls[name],
                    value
                }
            }
        }));
    };
    changeRadioHandler = event => {
        const change = event.target.id;
        this.setState(prevState => ({
            formControls: {
                ...prevState.formControls,
                attendance: {
                    ...prevState.formControls.attendance,
                    value: change,
                }
            }
        }));
    };
    submitFormHandler = event => {
        event.preventDefault();
        console.log(this.state.formControls.name.value);
        console.log(this.state.formControls.surname.value);
        console.log(this.state.formControls.id.value);
        console.log(this.state.formControls.attendance.value);
        console.log(this.state.formControls.id_checkout.value);
    };
    render() {
        return (
            <form onSubmit={
                this.submitFormHandler
            }>
                <label htmlFor="name">Imię</label>
                <input type="text" name="name"
                    value={
                        this.state.formControls.name.value
                    }
                    onChange={
                        this.changeHandler
                    } />
                <br />
                <label htmlFor="surname">Nazwisko</label>
                <input type="text" name="surname"
                    value={
                        this.state.formControls.surname.value
                    }
                    onChange={
                        this.changeHandler
                    } />
                <br />
                <label htmlFor="id">ID</label>
                <input type="text" id="id" name="id"
                    value={
                        this.state.formControls.id.value
                    }
                    onChange={
                        this.changeHandler
                    } />
                <br />
                <p>TO BĘDZIE GDZIEŚ INDZIEJ</p>
                <label htmlFor="id_checkout">ID</label>
                <input type="text" name="id_checkout" id="id_checkout"
                    value={
                        this.state.formControls.id_checkout.value
                    }
                    onChange={
                        this.changeHandler
                    }></input>
                <label htmlFor="check_in">Wejście</label>
                <input type="radio" id="check_in" name="attendance"
                    value={
                        this.state.formControls.attendance.value
                    }
                    onChange={
                        this.changeRadioHandler
                    } />
                <label htmlFor="check_out">Wyjście</label>
                <input type="radio" id="check_out" name="attendance"
                    value={
                        this.state.formControls.attendance.value
                    }
                    onChange={
                        this.changeRadioHandler
                    } />
                <br />
                <input type="submit" />
            </form>
        );
    }
}

export default CheckForm;

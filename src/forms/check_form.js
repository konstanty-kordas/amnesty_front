import React, { Component } from 'react';

class CheckForm extends Component {
  /*  constructor(props) {
        super(props);
        this.state = {
            zsk_id: 0,
            check_in_or_out: 'check_in',
            time: new Date().getTime()
        };

        this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        this.setState({
            {name}: value
        });
    }

    handleOptionChange(event) {
        this.setState({
            check_in_or_out: event.target.value,
            zsk_id: event.target.value
        });
    };

    handleSubmit(event) {
        console.log("You have submitted:", this.state.check_in_or_out, ", ID=", this.state.zsk_id);
};
    */
    render () {
        return (
           <form name="get_list" method="POST" encType="multipart/form-data" onSubmit={this.handleSubmit}>
                <input type="radio" className="check_in" name="check_in_or_out" value="ckeck_in" checked={this.state.check_in_or_out} onChange={this.handleOptionChange}/>
                <label htmlFor="check_in">Zameldowanie</label> <br/>

                <input type="radio" className="check_out" name="check_in_or_out" value="check_out" checked={this.state.check_in_or_out} onChange={this.handleOptionChange}/>
                <label htmlFor="check_out">Wymeldowanie</label><br/>

                <label htmlFor="zsk_id"> Wprowadź ID ucznia </label>
                <input type="text" name="zsk_id" onChange={this.handleOptionChange}/>
                <input type="submit" value="OK" onSubmit={this.handleSubmit}/>
            </form>
        );
    }
}

export default CheckForm;
import React, { Component } from 'react';

class GenForm extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      phone: "",
      final: {
        name: "",
        email: "",
        phone: "",
      }
    }
  }

  nameHandleChange = (e) => {
    this.setState({
      name: e.target.value,
    })
  }

  emailHandleChange = (e) => {
    this.setState({
      email: e.target.value,
    })
  }

  phoneHandleChange = (e) => {
    this.setState({
        phone: e.target.value,
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
        final: {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
        }
    })
  }

  /* A section to add general information like name, email, phone number */
  render() {
    const { name, email, phone } = this.state;

    return (
      <div className="outer">
        
        <form>
            <div className="description">
                General
            </div>
            <div className="cols">
                <label htmlFor="nameInput">Name</label>
                <input type="text" id="nameInput" value={name.text} onChange={this.nameHandleChange}/>
                <label htmlFor="emailInput">Email</label>
                <input type="text" id="emailInput" value={email.text} onChange={this.emailHandleChange}/>
                <label htmlFor="phoneInput">Phone Number</label>
                <input type="text" id="phoneInput" value={phone.text} onChange={this.phoneHandleChange}/>
            </div>
          <button type="submit" onClick={this.onSubmit}>
            Save General Information
          </button>
        </form>
      </div>
    )
  }
}

export default GenForm;
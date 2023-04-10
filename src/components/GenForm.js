import React, { Component } from 'react';

class GenForm extends Component {
  constructor(props) {
    super(props);

    this.userNameHandleChange = this.userNameHandleChange.bind(this);
    this.emailHandleChange = this.emailHandleChange.bind(this);
    this.phoneHandleChange = this.phoneHandleChange.bind(this);
  }

  userNameHandleChange = (e) => {
    this.props.onUserNameChange(e.target.value);
  }

  emailHandleChange = (e) => {
    this.props.onEmailChange(e.target.value);
  }

  phoneHandleChange = (e) => {
    this.props.onPhoneChange(e.target.value);
  }

  componentDidUpdate(prevProps) {
    console.log("this.props.userName", this.props.reverseName);
    console.log("this ", this.props);
    console.log("prevprops ", prevProps);
    // Typical usage (don't forget to compare props):
    if (this.props.userName !== prevProps.userName || this.props.email !== prevProps.email || this.props.phone !== prevProps.phone) {
      console.log("Something changed!")
      /* this.setState({
        userName: "",
        email: "",
        phone: "",
      }) */
    }
  }

  render() {
    const userName = this.props.userName;
    const email = this.props.email;
    const phone = this.props.phone;

    return (
      <div className="outer">
        
        <form>
            <div className="description">
                General
            </div>
            <div className="cols">
                <label htmlFor="nameInput">Name</label>
                <input type="text" id="nameInput" value={userName} onChange={this.userNameHandleChange}/>
                <label htmlFor="emailInput">Email</label>
                <input type="text" id="emailInput" value={email} onChange={this.emailHandleChange}/>
                <label htmlFor="phoneInput">Phone Number</label>
                <input type="text" id="phoneInput" value={phone} onChange={this.phoneHandleChange}/>
            </div>
        </form>
      </div>
    )
  }
}

export default GenForm;
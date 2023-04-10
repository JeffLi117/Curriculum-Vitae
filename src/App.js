import './App.css';
import DisplayName from './components/DisplayName';
import DisplayEmail from './components/DisplayEmail';
import DisplayPhone from './components/DisplayPhone';
import GenForm from './components/GenForm';
import Schooling from './components/Schooling';
import React, { Component } from 'react';
import uniqid from "uniqid";

class App extends Component {
  constructor(props) {
    super(props)

    this.getUserNameInfo = this.getUserNameInfo.bind(this);
    this.getEmailInfo = this.getEmailInfo.bind(this);
    this.getPhoneInfo = this.getPhoneInfo.bind(this);
    this.onGenSubmit = this.onGenSubmit.bind(this);
    this.schoolChangeHandler = this.schoolChangeHandler.bind(this);
    this.studyChangeHandler = this.studyChangeHandler.bind(this);
    this.schoolStartHandler = this.schoolStartHandler.bind(this);
    this.schoolEndHandler = this.schoolEndHandler.bind(this);
    this.onEduSubmit = this.onEduSubmit.bind(this);
  
    this.state = {
      userName: "",
      email: "",
      phone: "",
      final: {
        userName: "",
        email: "",
        phone: "",
      },
      school: "",
      study: "",
      startSchool: "",
      endSchool: "",
      finalEdu: [],
    }
  }

  getUserNameInfo(userName) {
    this.setState({userName})
  }
  getEmailInfo(email) {
    this.setState({email})
  }
  getPhoneInfo(phone) {
    this.setState({phone})
  }
  onGenSubmit = (e) => {
    let firstVar = this.state.userName;
    let secondVar = this.state.email;
    let thirdVar = this.state.phone;
    e.preventDefault();
    this.setState({
      /* userName: "",
      email: "",
      phone: "", */
      final: {
        userName: firstVar,
        email: secondVar,
        phone: thirdVar,
      },
    }, () => {console.log("original", this.state.userName, this.state.email, this.state.phone, "Final", this.state.final)})
  }

  schoolChangeHandler(school) {
    this.setState({school})
  }
  studyChangeHandler(study) {
    this.setState({study})
  }
  schoolStartHandler(startSchool) {
    this.setState({startSchool})
  }
  schoolEndHandler(endSchool) {
    this.setState({endSchool})
  }

  onEduSubmit = (e) => {
    e.preventDefault();
    let startStrSplit = this.state.startSchool.toString().split(" ");
    let endStrSplit = this.state.endSchool.toString().split(" ");
    let startStr = startStrSplit.slice(1,4);
    let startStrHolder = "";
    startStr.forEach(el => {
        let str = el.toString();
        if (typeof str === "number") {
            str = Number(str);/* elim leading zero */
        }
        startStrHolder = startStrHolder + str + " ";
    })
    let endStr = endStrSplit.slice(1,4);
    let endStrHolder = "";
    endStr.forEach(el => {
        let str = el.toString();
        if (typeof str === "number") {
            str = Number(str);/* elim leading zero */
        }
        endStrHolder = endStrHolder + str + " ";
    })

    this.setState({
        school: "",
        study: "",
        startSchool: "",
        endSchool: "",
        finalEdu: this.state.finalEdu.concat({
            school: this.state.school,
            study: this.state.study,
            startSchool: startStrHolder,
            endSchool: endStrHolder,
            id: uniqid(),
        })
    }, () => {console.log(this.state.finalEdu)})
  }

  render() {

    return (
      <div className="overall">
        <div className="top">
          <div className="formHolder">
            <GenForm onUserNameChange={this.getUserNameInfo} onEmailChange={this.getEmailInfo} onPhoneChange={this.getPhoneInfo} /> 
            <button type="submit" onClick={this.onGenSubmit}>
                Save General Information
            </button>
          </div>
          <div className="formHolder">
            <Schooling onSchoolChange={this.schoolChangeHandler} onStudyChange={this.studyChangeHandler} onSchoolStartChange={this.schoolStartHandler} onSchoolEndChange={this.schoolEndHandler}/>
            <button type="submit" onClick={this.onEduSubmit}>
              Add Education
            </button>
          </div>
        </div>
        <div className="displayCV">
          <div className="spaceCV">
            <div className="description">General Information</div>
            <DisplayName info={this.state.final}/>
            <DisplayEmail info={this.state.final}/>
            <DisplayPhone info={this.state.final}/>
          </div>
          <div className="spaceCV">
            <div className="description">Education</div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;

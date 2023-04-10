import './App.css';
import DisplayName from './components/DisplayName';
import DisplayEmail from './components/DisplayEmail';
import DisplayPhone from './components/DisplayPhone';
import DisplayEdu from './components/DisplayEdu';
import DisplayJobs from './components/DisplayJobs';
import GenForm from './components/GenForm';
import Schooling from './components/Schooling';
import WorkForm from './components/WorkForm';
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
    this.companyHandler = this.companyHandler.bind(this);
    this.positionHandler = this.positionHandler.bind(this);
    this.mainTasksHandler = this.mainTasksHandler.bind(this);
    this.startWorkHandler = this.startWorkHandler.bind(this);
    this.endWorkHandler = this.endWorkHandler.bind(this);
    this.onWorkSubmit = this.onWorkSubmit.bind(this);
  
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
      company: "",
      position: "",
      mainTasks: "",
      startWork: "",
      endWork: "",
      finalJobs: [],
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
      userName: "",
      email: "",
      phone: "",
      final: {
        userName: firstVar,
        email: secondVar,
        phone: thirdVar,
      },
    })
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
    for (let i = 0; i < 3; i++) {
      let str = startStr[i].toString();
      if (typeof str === "number") {
        str = Number(str);
      }
      if (i === 2) {
        startStrHolder = startStrHolder + str;
      } else {
        startStrHolder = startStrHolder + str + " ";
      }
    }
    let endStr = endStrSplit.slice(1,4);
    let endStrHolder = "";
    for (let i = 0; i < 3; i++) {
      let str = endStr[i].toString();
      if (typeof str === "number") {
        str = Number(str);
      }
      if (i === 2) {
        endStrHolder = endStrHolder + str;
      } else {
        endStrHolder = endStrHolder + str + " ";
      }
    }
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

  companyHandler(company) {
    this.setState({company})
  }
  positionHandler(position) {
    this.setState({position})
  }
  mainTasksHandler(mainTasks) {
    this.setState({mainTasks})
  }
  startWorkHandler(startWork) {
    this.setState({startWork})
  }
  endWorkHandler(endWork) {
    this.setState({endWork})
  }
  onWorkSubmit = (e) => {
    e.preventDefault();
    let startStrSplit = this.state.startWork.toString().split(" ");
    let endStrSplit = this.state.endWork.toString().split(" ");
    let startStr = startStrSplit.slice(1,4);
    let startStrHolder = "";
    for (let i = 0; i < 3; i++) {
      let str = startStr[i].toString();
      if (typeof str === "number") {
        str = Number(str);
      }
      if (i === 2) {
        startStrHolder = startStrHolder + str;
      } else {
        startStrHolder = startStrHolder + str + " ";
      }
    }
    let endStr = endStrSplit.slice(1,4);
    let endStrHolder = "";
    for (let i = 0; i < 3; i++) {
      let str = endStr[i].toString();
      if (typeof str === "number") {
        str = Number(str);
      }
      if (i === 2) {
        endStrHolder = endStrHolder + str;
      } else {
        endStrHolder = endStrHolder + str + " ";
      }
    }
    this.setState({
      company: "",
      position: "",
      mainTasks: "",
      startWork: "",
      endWork: "",
      finalJobs: this.state.finalJobs.concat({
        company: this.state.company,
        position: this.state.position,
        mainTasks: this.state.mainTasks,
        startWork: startStrHolder,
        endWork: endStrHolder,
        id: uniqid(),
      })
  }, () => {console.log(this.state.finalJobs)})
  }

  render() {

    return (
      <div className="overall">
        <div className="top">
          <div className="formHolder">
            <GenForm onUserNameChange={this.getUserNameInfo} onEmailChange={this.getEmailInfo} onPhoneChange={this.getPhoneInfo} userName={this.state.userName}  email={this.state.email} phone={this.state.phone} /> 
            <button type="submit" onClick={this.onGenSubmit}>
                Save General Information
            </button>
          </div>
          <div className="formHolder">
            <Schooling onSchoolChange={this.schoolChangeHandler} onStudyChange={this.studyChangeHandler} onSchoolStartChange={this.schoolStartHandler} onSchoolEndChange={this.schoolEndHandler} school={this.state.school}  study={this.state.study} startSchool={this.state.startSchool} endSchool={this.state.endSchool}/>
            <button type="submit" onClick={this.onEduSubmit}>
              Add Education
            </button>
          </div>
          <div className="formHolder">
            <WorkForm onCompanyChange={this.companyHandler} onPositionChange={this.positionHandler} onMainTasksChange={this.mainTasksHandler} onStartWorkChange={this.startWorkHandler} onEndWorkChange={this.endWorkHandler} company={this.state.company} position={this.state.position} mainTasks={this.state.mainTasks} startWork={this.state.startWork} endWork={this.state.endWork}/>
            <button type="submit" onClick={this.onWorkSubmit}>
              Add Work Experience
            </button>
          </div>
        </div>
        <div className="middleToCV">Your beautiful CV</div>
        <div className="displayCV">
          <div className="spaceCV">
            <div className="description">General Information</div>
            <DisplayName info={this.state.final}/>
            <DisplayEmail info={this.state.final}/>
            <DisplayPhone info={this.state.final}/>
          </div>
          <div className="spaceCV">
            <div className="description">Education</div>
            <DisplayEdu finalEdu={this.state.finalEdu} />
          </div>
          <div className="spaceCV">
            <div className="description">Work Experience</div>
            <DisplayJobs finalJobs={this.state.finalJobs} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;

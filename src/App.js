import './App.css';
import DisplayName from './components/DisplayName';
import DisplayEmail from './components/DisplayEmail';
import DisplayPhone from './components/DisplayPhone';
import DisplayEdu from './components/DisplayEdu';
import DisplayJobs from './components/DisplayJobs';
import EditEdu from './components/EditEdu';
import EditJob from './components/EditJob';
import GenForm from './components/GenForm';
import Schooling from './components/Schooling';
import WorkForm from './components/WorkForm';
import Question from './components/Question';
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

    this.schoolEditChangeHandler = this.schoolEditChangeHandler.bind(this);
    this.studyEditChangeHandler = this.studyEditChangeHandler.bind(this);
    this.schoolEditStartHandler = this.schoolEditStartHandler.bind(this);
    this.schoolEditEndHandler = this.schoolEditEndHandler.bind(this);
    this.outerClick = this.outerClick.bind(this);

    this.compEditChangeHandler = this.compEditChangeHandler.bind(this);
    this.positEditChangeHandler = this.positEditChangeHandler.bind(this);
    this.mainTaskEditChangeHandler = this.mainTaskEditChangeHandler.bind(this);
    this.jobEditStartHandler = this.jobEditStartHandler.bind(this);
    this.jobEditEndHandler = this.jobEditEndHandler.bind(this);
    this.outerJobClick = this.outerJobClick.bind(this);
  
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
      editEduSchool: "",
      editEduStudy: "",
      editEduStartSchool: "",
      editEduEndSchool: "",
      editEduID: "",
      editEduDatePickerStart: "",
      editEduDatePickerEnd: "",
      editJobComp: "",
      editJobPosit: "",
      editJobMainTasks: "",
      editJobStart: "",
      editJobEnd: "",
      editJobID: "",
      editJobDatePickerStart: "",
      editJobDatePickerEnd: "",
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
    if (this.state.startSchool === "" || this.state.endSchool === "") {
      alert("Please enter a start and end date for your education!");
      return;
    }
    let startStrSplit;
    let endStrSplit;
    let startStrHolder = "";
    let endStrHolder = "";
    if (this.state.startSchool !== "") {
      startStrSplit = this.state.startSchool.toString().split(" ");
      let startStr = startStrSplit.slice(1,4);
      for (let i = 0; i < 3; i++) {
        let str = startStr[i].toString();
        if (typeof str === "number") {
          str = Number(str);
        }
        if (i === 2) {
          startStrHolder = startStrHolder + str;
        } else if (i === 1) {
          startStrHolder = startStrHolder + str + ", ";
        } else {
          startStrHolder = startStrHolder + str + " ";
        }
      }
    }
    if (this.state.endSchool !== "") {
      endStrSplit = this.state.endSchool.toString().split(" ");
      let endStr = endStrSplit.slice(1,4);
      for (let i = 0; i < 3; i++) {
        let str = endStr[i].toString();
        if (typeof str === "number") {
          str = Number(str);
        }
        if (i === 2) {
          endStrHolder = endStrHolder + str;
        } else if (i === 1) {
          endStrHolder = endStrHolder + str + ", ";
        } else {
          endStrHolder = endStrHolder + str + " ";
        }
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
            datePickerStart: this.state.startSchool,
            datePickerEnd: this.state.endSchool,
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
    if (this.state.startWork === "" || this.state.endWork === "") {
      alert("Please enter a start and end date for your work experience!");
      return;
    }
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
      } else if (i === 1) {
        startStrHolder = startStrHolder + str + ", ";
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
      } else if (i === 1) {
        endStrHolder = endStrHolder + str + ", ";
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
        datePickerStart: this.state.startWork,
        datePickerEnd: this.state.endWork,
      })
    }, () => {console.log(this.state.finalJobs)})
  }


  schoolEditChangeHandler(editEduSchool) {
    this.setState({editEduSchool})
  }
  studyEditChangeHandler(editEduStudy) {
    this.setState({editEduStudy})
  }
  schoolEditStartHandler(editEduDatePickerStart) {
    this.setState({editEduDatePickerStart})
  }
  schoolEditEndHandler(editEduDatePickerEnd) {
    this.setState({editEduDatePickerEnd})
  }
  changeEdu = () => {
    console.log(this.state.finalEdu); /*an array of obj's */
    let finalEdu = [...this.state.finalEdu];
    console.log(finalEdu);
    /* let found = finalEdu.find(element => element.id === child.id);
    console.log(found); */
    let foundIndex = finalEdu.findIndex(element => element.id === this.state.editEduID);
    //console.log("editEduID is ", this.state.editEduID);
    let foundSchoolInfo = {...finalEdu[foundIndex]};
    console.log(foundSchoolInfo);
    foundSchoolInfo.school = this.state.editEduSchool;
    foundSchoolInfo.study = this.state.editEduStudy;
    foundSchoolInfo.startSchool = this.state.editEduStartSchool;
    foundSchoolInfo.endSchool = this.state.editEduEndSchool;
    /* FIX THE DATES FOR START/END
    CAN ALSO: consider changing reference to child -- is it necessary or should I just use this.state stuff??? */
    finalEdu[foundIndex] = foundSchoolInfo;
    this.setState({ 
      finalEdu,
      editEduSchool: "",
      editEduStudy: "",
      editEduStartSchool: "",
      editEduEndSchool: "",
      editEduID: "",
      editEduDatePickerStart: "",
      editEduDatePickerEnd: "",
    }, () => {console.log(this.state.finalEdu)})
  }
  cancelEdu = () => {
    this.setState({
      editEduSchool: "",
      editEduStudy: "",
      editEduStartSchool: "",
      editEduEndSchool: "",
      editEduID: "",
      editEduDatePickerStart: "",
      editEduDatePickerEnd: "",
    })  
  }
  outerClick = (child) => {
    this.setState({
      editEduSchool: child.school,
      editEduStudy: child.study,
      editEduStartSchool: child.startSchool,
      editEduEndSchool: child.endSchool,
      editEduID: child.id,
      editEduDatePickerStart: child.datePickerStart,
      editEduDatePickerEnd: child.datePickerEnd,
    })
  }

  compEditChangeHandler(editJobComp) {
    this.setState({editJobComp})
  }
  positEditChangeHandler(editJobPosit) {
    this.setState({editJobPosit})
  }
  mainTaskEditChangeHandler(editJobMainTasks) {
    this.setState({editJobMainTasks})
  }
  jobEditStartHandler(editJobDatePickerStart) {
    this.setState({editJobDatePickerStart})
  }
  jobEditEndHandler(editJobDatePickerEnd) {
    this.setState({editJobDatePickerEnd})
  }
  changeJob = () => {
    console.log(this.state.finalJobs); /*an array of obj's */
    let finalJobs = [...this.state.finalJobs];
    console.log(finalJobs);
    let foundIndex = finalJobs.findIndex(element => element.id === this.state.editJobID);
    //console.log("editJobID is ", this.state.editEduID);
    let foundJobInfo = {...finalJobs[foundIndex]};
    console.log(foundJobInfo);
    foundJobInfo.company = this.state.editJobComp;
    foundJobInfo.position = this.state.editJobPosit;
    foundJobInfo.mainTasks = this.state.editJobMainTasks;
    foundJobInfo.startWork = this.state.editJobStart;
    foundJobInfo.endWork = this.state.editJobEnd;
    finalJobs[foundIndex] = foundJobInfo;
    this.setState({ 
      finalJobs,
      editJobComp: "",
      editJobPosit: "",
      editJobMainTasks: "",
      editJobStart: "",
      editJobEnd: "",
      editJobID: "",
      editJobDatePickerStart: "",
      editJobDatePickerEnd: "",
    }, () => {console.log(this.state.finalJobs)})
  }
  cancelJob = () => {
    this.setState({
      editJobComp: "",
      editJobPosit: "",
      editJobMainTasks: "",
      editJobStart: "",
      editJobEnd: "",
      editJobID: "",
      editJobDatePickerStart: "",
      editJobDatePickerEnd: "",
    })  
  }
  outerJobClick = (child) => {
    this.setState({
      editJobComp: child.company,
      editJobPosit: child.position,
      editJobMainTasks: child.mainTasks,
      editJobStart: child.startWork,
      editJobEnd: child.endWork,
      editJobID: child.id,
      editJobDatePickerStart: child.datePickerStart,
      editJobDatePickerEnd: child.datePickerEnd,
    }, () => {console.log(this.state)})
  }

  render() {

    return (
      <div className="overall">
        <div className="header">Create Your CV!</div>
        <Question />
        <EditEdu onSchoolEditChange={this.schoolEditChangeHandler} onStudyEditChange={this.studyEditChangeHandler} onSchoolEditStartChange={this.schoolEditStartHandler} onSchoolEditEndChange={this.schoolEditEndHandler} school={this.state.editEduSchool}  study={this.state.editEduStudy} startSchool={this.state.editEduStartSchool} endSchool={this.state.editEduEndSchool} editEduDatePickerStart={this.state.editEduDatePickerStart} editEduDatePickerEnd={this.state.editEduDatePickerEnd} id={this.state.editEduID} changeAnEdu={this.changeEdu} cancelEdu={this.cancelEdu} />        
        <EditJob compEditChangeHandler={this.compEditChangeHandler} positEditChangeHandler={this.positEditChangeHandler} mainTaskEditChangeHandler={this.mainTaskEditChangeHandler} jobEditStartHandler={this.jobEditStartHandler} jobEditEndHandler={this.jobEditEndHandler} editJobComp={this.state.editJobComp}  editJobPosit={this.state.editJobPosit} editJobMainTasks={this.state.editJobMainTasks} editJobStart={this.state.editJobStart} editJobEnd={this.state.editJobEnd} editJobDatePickerStart={this.state.editJobDatePickerStart} editJobDatePickerEnd={this.state.editJobDatePickerEnd} id={this.state.editJobID} changeJob={this.changeJob} cancelJob={this.cancelJob} />
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
        <div className="line"></div>
        <div className="displayCV">
          <div className="spaceCV firstGen">
            <div className="description">General Information</div>
              <DisplayName info={this.state.final}/>
              <DisplayEmail info={this.state.final}/>
              <DisplayPhone info={this.state.final}/>
          </div>
          <div className="spaceCV">
            <div className="description">Education</div>
            <div className="underDescription">
              <DisplayEdu finalEdu={this.state.finalEdu} outerClick={this.outerClick}/>
            </div>
          </div>
          <div className="spaceCV">
            <div className="description">Work Experience</div>
            <div className="underDescription">
              <DisplayJobs finalJobs={this.state.finalJobs} outerJobClick={this.outerJobClick} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;

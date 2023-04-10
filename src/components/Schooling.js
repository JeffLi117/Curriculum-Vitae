import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Display from './DisplayName';
import uniqid from "uniqid";

class Schooling extends Component {
  constructor(props) {
    super(props);

    this.state = {
      schoolStartDate: "",
      schoolEndDate: "",
    }
    
    this.schoolHandleChange = this.schoolHandleChange.bind(this);
    this.studyHandleChange = this.studyHandleChange.bind(this);
    this.schoolStartHandleChange = this.schoolStartHandleChange.bind(this);
    this.schoolEndHandleChange = this.schoolEndHandleChange.bind(this);
  }

  schoolHandleChange = (e) => {
    this.props.onSchoolChange(e.target.value);
  }

  studyHandleChange = (e) => {
    this.props.onStudyChange(e.target.value);
  }

  schoolStartHandleChange = (e) => {
    this.props.onSchoolStartChange(e);
    this.setState({
      schoolStartDate: e,
    }, () => {console.log(this.state.schoolStartDate)});
  }

  schoolEndHandleChange = (e) => {
    this.props.onSchoolEndChange(e);
    this.setState({
      schoolEndDate: e,
    }, () => {console.log(this.state.schoolEndDate)});
  }

  render() {
    const school = this.props.school;
    const study = this.props.study;

    return (
      <div  className="outer">
        <form>
            <div className="description">
                Education
            </div>
            <div>
                <div className="cols">
                    <label htmlFor="schoolInput">School Name</label>
                    <input type="text" id="schoolInput" value={school} onChange={this.schoolHandleChange}/>
                    <label htmlFor="studyInput">Title of Study</label>
                    <input type="text" id="studyInput" value={study} onChange={this.studyHandleChange}/>
                    <label htmlFor="startInput">Start Date</label>
                    <DatePicker showIcon selected={this.state.schoolStartDate} onChange={this.schoolStartHandleChange} />
                    <label htmlFor="endInput">End Date</label>
                    <DatePicker showIcon selected={this.state.schoolEndDate} onChange={this.schoolEndHandleChange} />
                </div>
            </div>
        </form>
      </div>
    )
  }
}

export default Schooling;
import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Display from './Display';
import uniqid from "uniqid";

class Schooling extends Component {
  constructor() {
    super();

    /* A section to add your educational experience (school name, title of study, date of study) */

    this.state = {
      school: "",
      study: "",
      start: "",
      end: "",
      final: [],
    }
  }

  schoolHandleChange = (e) => {
    this.setState({
        school: e.target.value,
    })
  }

  studyHandleChange = (e) => {
    this.setState({
        study: e.target.value,
    })
  }

  startHandleChange = (e) => {
    this.setState({
        start: e,
    })
  }

  endHandleChange = (e) => {
    this.setState({
        end: e,
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    let startStrSplit = this.state.start.toString().split(" ");
    let endStrSplit = this.state.end.toString().split(" ");
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
        start: "",
        end: "",
        final: this.state.final.concat({
            school: this.state.school,
            study: this.state.study,
            start: startStrHolder,
            end: endStrHolder,
            id: uniqid(),
        })
    })
  }

  render() {
    const { school, study, start, end, final } = this.state;

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
                    <DatePicker showIcon selected={start} onChange={this.startHandleChange} />
                    <label htmlFor="endInput">End Date</label>
                    <DatePicker showIcon selected={end} onChange={this.endHandleChange} />
                </div>
            </div>
            
          <button type="submit" onClick={this.onSubmit}>
            Add Education
          </button>
        </form>

        <div className="displayArea">
          <Display tasks={final}/>
        </div>
      </div>
    )
  }
}

export default Schooling;
import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class WorkForm extends Component {
    constructor(props) {
        super(props)
        
        this.companyHandleChange = this.companyHandleChange.bind(this);
        this.positionHandleChange = this.positionHandleChange.bind(this);
        this.mainTasksHandleChange = this.mainTasksHandleChange.bind(this);
        this.workStartHandleChange = this.workStartHandleChange.bind(this);
        this.workEndHandleChange = this.workEndHandleChange.bind(this);
    }

    companyHandleChange = (e) => {
        this.props.onCompanyChange(e.target.value);
    }
    positionHandleChange = (e) => {
        this.props.onPositionChange(e.target.value);
    }
    mainTasksHandleChange = (e) => {
        this.props.onMainTasksChange(e.target.value);
    }
    workStartHandleChange = (e) => {
        this.props.onStartWorkChange(e);
    }
    workEndHandleChange = (e) => {
        this.props.onEndWorkChange(e);
    }

    render() {
        const company = this.props.company;
        const position = this.props.position;
        const mainTasks = this.props.mainTasks;
        const startWork = this.props.startWork;
        const endWork = this.props.endWork;

        return (
            <div  className="outer">
                <form>
                    <div className="description topForms">
                        Work Experience
                    </div>
                    <div>
                        <div className="cols">
                            <label htmlFor="companyInput">Company Name</label>
                            <input type="text" id="companyInput" value={company} onChange={this.companyHandleChange}/>
                            <label htmlFor="positionInput">Position Title</label>
                            <input type="text" id="positionInput" value={position} onChange={this.positionHandleChange}/>
                            <label htmlFor="mainTasksInput">Main Tasks</label>
                            <textarea name="main_task" id="mainTasksInput" cols="22" rows="8" value={mainTasks} onChange={this.mainTasksHandleChange}></textarea>
                            <label htmlFor="startInput">Start Date</label>
                            <DatePicker showIcon selected={startWork} onChange={this.workStartHandleChange} />
                            <label htmlFor="endInput">End Date</label>
                            <DatePicker showIcon selected={endWork} onChange={this.workEndHandleChange} />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default WorkForm
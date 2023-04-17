import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class EditJob extends Component {
    constructor(props) {
        super(props)
        
        this.compEditHandleChange = this.compEditHandleChange.bind(this);
        this.positionEditHandleChange = this.positionEditHandleChange.bind(this);
        this.mainTasksEditHandleChange = this.mainTasksEditHandleChange.bind(this);
        this.workEditStartHandleChange = this.workEditStartHandleChange.bind(this);
        this.workEditEndHandleChange = this.workEditEndHandleChange.bind(this);
        this.confirmJobEditChange = this.confirmJobEditChange.bind(this);
        this.cancelJobEditChange = this.cancelJobEditChange.bind(this);
    }

    compEditHandleChange = (e) => {
        this.props.compEditChangeHandler(e.target.value);
    }

    positionEditHandleChange = (e) => {
        this.props.positEditChangeHandler(e.target.value);
    }

    mainTasksEditHandleChange = (e) => {
        this.props.mainTaskEditChangeHandler(e.target.value);
    }

    workEditStartHandleChange = (e) => {
        this.props.jobEditStartHandler(e);
    }

    workEditEndHandleChange = (e) => {
        this.props.jobEditEndHandler(e);
    }

    confirmJobEditChange = () => {
        this.props.changeJob();
    }

    cancelJobEditChange = () => {
        this.props.cancelJob();
    }

  render() {
    const { editJobComp, editJobPosit, editJobMainTasks, id} = this.props;
    const datePickerStart = this.props.editJobDatePickerStart;
    const datePickerEnd = this.props.editJobDatePickerEnd;
    if (editJobComp === "" && editJobPosit === "" && datePickerStart === "" && datePickerEnd === "" && id === "" && editJobMainTasks === "") {
    } else {
        return (
            <div key={id} className="editEduHolder">
                <div className="cols">
                    <label htmlFor="companyInput">Company Name</label>
                    <input type="text" id="companyInput" value={editJobComp} onChange={this.compEditHandleChange}/>
                    <label htmlFor="positionInput">Position Title</label>
                    <input type="text" id="positionInput" value={editJobPosit} onChange={this.positionEditHandleChange}/>
                    <label htmlFor="mainTasksInput">Main Tasks</label>
                    <textarea name="main_task" id="mainTasksInput" cols="24" rows="10" value={editJobMainTasks} onChange={this.mainTasksEditHandleChange}></textarea>
                    <label htmlFor="startInput">Start Date</label>
                    <DatePicker showIcon selected={datePickerStart} onChange={this.workEditStartHandleChange} />
                    <label htmlFor="endInput">End Date</label>
                    <DatePicker showIcon selected={datePickerEnd} onChange={this.workEditEndHandleChange} />
                    <div className="editBtnHolder">
                        <button type="button" onClick={this.confirmJobEditChange}>Save Changes</button>
                        <button type="button" onClick={this.cancelJobEditChange}>Cancel</button>
                    </div>
                </div>
            </div>
        )
    }
  }
}

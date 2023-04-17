import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class EditEdu extends Component {
    constructor(props) {
      super(props)
    
      this.schoolEditHandleChange = this.schoolEditHandleChange.bind(this);
      this.studyEditHandleChange = this.studyEditHandleChange.bind(this);
      this.schoolEditStartHandleChange = this.schoolEditStartHandleChange.bind(this);
      this.schoolEditEndHandleChange = this.schoolEditEndHandleChange.bind(this);
      this.confirmSchoolEditChange = this.confirmSchoolEditChange.bind(this);
      this.cancelSchoolEditChange = this.cancelSchoolEditChange.bind(this);
    }

    schoolEditHandleChange = (e) => {
        this.props.onSchoolEditChange(e.target.value);
    }

    studyEditHandleChange = (e) => {
        this.props.onStudyEditChange(e.target.value);
    }

    schoolEditStartHandleChange = (e) => {
        this.props.onSchoolEditStartChange(e);
    }

    schoolEditEndHandleChange = (e) => {
        this.props.onSchoolEditEndChange(e);
    }

    confirmSchoolEditChange = () => {
        this.props.changeAnEdu();
    }

    cancelSchoolEditChange = () => {
        this.props.cancelEdu();
    }

  render() {
    const { school, study, id} = this.props;
    const datePickerStart = this.props.editEduDatePickerStart;
    const datePickerEnd = this.props.editEduDatePickerEnd;

    if (school === "" && study === "" && datePickerStart === "" && datePickerEnd === "" && id === "") {
    } else {
        return (
            <div key={id} className="editEduHolder">
                <div className="cols">
                    <label htmlFor="schoolInputEdit">School Name</label>
                    <input type="text" id="schoolInputEdit" value={school} onChange={this.schoolEditHandleChange}/>
                    <label htmlFor="studyInputEdit">Title of Study</label>
                    <input type="text" id="studyInputEdit" value={study} onChange={this.studyEditHandleChange}/>
                    <label htmlFor="startInputEdit">Start Date</label>
                    <DatePicker showIcon selected={datePickerStart} onChange={this.schoolEditStartHandleChange} />
                    <label htmlFor="endInputEdit">End Date</label>
                    <DatePicker showIcon selected={datePickerEnd} onChange={this.schoolEditEndHandleChange} />
                    <div className="editBtnHolder">
                        <button type="button" onClick={this.confirmSchoolEditChange}>Save Changes</button>
                        <button type="button" onClick={this.cancelSchoolEditChange}>Cancel</button>
                    </div>
                </div>                    
            </div>
        )
    }
  }
}

/* const EditEdu = (props) => {
    const { editEdu } = props;

    if (editEdu.school === "" && editEdu.study === "" && editEdu.startSchool === "" && editEdu.endSchool === "" && editEdu.id === "") {

    } else {
        return (
            <div key={editEdu.id} className="editEduHolder">
                <div className="cols">
                    <label htmlFor="schoolInputEdit">School Name</label>
                    <input type="text" id="schoolInputEdit" value={editEdu.school} onChange={this.schoolHandleChange}/>
                    <label htmlFor="studyInputEdit">Title of Study</label>
                    <input type="text" id="studyInputEdit" value={editEdu.study} onChange={this.studyHandleChange}/>
                    <label htmlFor="startInputEdit">Start Date</label>
                    <DatePicker showIcon selected={editEdu.datePickerStart} onChange={this.schoolStartHandleChange} />
                    <label htmlFor="endInputEdit">End Date</label>
                    <DatePicker showIcon selected={editEdu.datePickerEnd} onChange={this.schoolEndHandleChange} />
                    <button type="button">Save Changes</button>
                </div>
                    {<li className="eduList editingEdu">{editEdu.school}<br></br>
                    {editEdu.study}<br></br>
                    From {editEdu.startSchool} to {editEdu.endSchool}</li>}
                    
            </div>
        )
    }
} */

export default EditEdu
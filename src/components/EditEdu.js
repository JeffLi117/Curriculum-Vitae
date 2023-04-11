import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const EditEdu = (props) => {
    const { editEdu } = props;

    if (editEdu.school === "" && editEdu.study === "" && editEdu.startSchool === "" && editEdu.endSchool === "" && editEdu.id === "") {

    } else {
        return (
            <div key={editEdu.id} className="editEduHolder">
                <div className="cols">
                    <label htmlFor="schoolInputEdit">School Name</label>
                    <input type="text" id="schoolInputEdit" value={editEdu.school} /* onChange={this.schoolHandleChange} *//>
                    <label htmlFor="studyInputEdit">Title of Study</label>
                    <input type="text" id="studyInputEdit" value={editEdu.study} /* onChange={this.studyHandleChange} *//>
                    <label htmlFor="startInputEdit">Start Date</label>
                    <DatePicker showIcon selected={editEdu.datePickerStart} /* onChange={this.schoolStartHandleChange} */ />
                    <label htmlFor="endInputEdit">End Date</label>
                    <DatePicker showIcon selected={editEdu.datePickerEnd} /* onChange={this.schoolEndHandleChange} */ />
                </div>
                    {/* <li className="eduList editingEdu">{editEdu.school}<br></br>
                    {editEdu.study}<br></br>
                    From {editEdu.startSchool} to {editEdu.endSchool}</li> */}
                    <button type="button">Save Changes</button>
            </div>
        )
    }
}

export default EditEdu
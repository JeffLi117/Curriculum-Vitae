import React from 'react';

const DisplayEdu = (props) => {
    const { finalEdu } = props;

    return (
        <ul>
            {finalEdu.map((schoo) => {
                return (
                    <div key={schoo.id} className="eachEduHolder">
                        <div className="eduLeft">
                            <li className="eduList">{schoo.school}<br></br>
                            {schoo.study}<br></br>
                            From {schoo.startSchool} to {schoo.endSchool}</li>
                        </div>
                        <div className="eduRight">
                            <button type="button">Edit</button>
                        </div>
                        
                    </div>
                )
            })}
        </ul>
    )
}

export default DisplayEdu
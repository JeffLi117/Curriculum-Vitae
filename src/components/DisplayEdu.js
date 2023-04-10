import React from 'react';

const DisplayEdu = (props) => {
    const { finalEdu } = props;

    return (
        <ul>
            {finalEdu.map((schoo) => {
                return (
                <li key={schoo.id} className="eduList">{schoo.school}<br></br>
                {schoo.study}<br></br>
                From {schoo.startSchool} to {schoo.endSchool}</li>
                )
            })}
        </ul>
    )
}

export default DisplayEdu
import React from 'react'

/* class DisplayEdu extends Component {

    render() {
        const { finalEdu } = this.props;
        const { outerClick } = this.props.outerClick;

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
                                <button type="button" onClick={outerClick} specialval={"spesh"+schoo.id}>Edit</button>
                            </div>
                            
                        </div>
                    )
                })}
            </ul>
        )
    }
} */

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
                            <button type="button" onClick={() => {props.outerClick(schoo)}}>Edit</button>
                        </div>
                        
                    </div>
                )
            })}
        </ul>
    )
}

export default DisplayEdu
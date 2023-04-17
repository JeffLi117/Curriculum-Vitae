import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import ReactIcon from './ReactIcon.png';

export class Question extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      isItHidden: true,
    }

    this.hideComponent = this.hideComponent.bind(this);
  }

  hideComponent() {
    if (this.state.isItHidden) {
      this.setState({
        isItHidden: false,
      }, () => {console.log("setState changed ", this.state.isItHidden)})
    } else {
      this.setState({
        isItHidden: true,
      }, () => {console.log("setState changed ", this.state.isItHidden)})
    }
  }

  render() {
    if (this.state.isItHidden) {
      return (
        <div>
          <div className="questionHolder">
            <FontAwesomeIcon icon={faQuestionCircle} onClick={this.hideComponent}/>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <div className="editEduHolder">
            <div className="questionHidden">
              <div className="questionHolder withX">
                <FontAwesomeIcon icon={faXmarkCircle} onClick={this.hideComponent} />
              </div>
              <div className="questionLines ask">What is this?
              </div>
              <div className="imgContainer">
                <div className="questionLines">My first app made with React! 
                </div>
                <img src={ReactIcon} alt="React icon"/>
              </div>
              <div className="questionLines ask">What's the point of this?
              </div>
              <div className="questionLines">For me, practice! For you... fun? Practice? Who knows.<br></br>I apologize if this gives you Workday job application vibes ¯\_(ツ)_/¯
              </div>
              <div className="questionLines ask">
                <a href="https://www.youtube.com/watch?v=alP-rXCQFfg">Who am I?</a>
              </div>
              <div className="questionLines">
                A self-taught programmer with a sense of humor + aspirations to make something entertaining/useful for others. <br></br>Head <a href="https://github.com/JeffLi117">here</a> to check out my other projects!
              </div>
            </div>
          </div>
        </div>
      )
    }
    
  }
}

export default Question

/* export default function Question() {
  return (
    <div>
      <div className="questionHolder">
        <FontAwesomeIcon icon={faQuestionCircle} onClick={} />
      </div>
      <div className="questionHidden">What is this?
      <br></br>My first app made with React!<br></br>
      What's the point of this?<br></br>
      For me, practice! For you... fun? Practice? Who knows. This may give you Workday job application vibes, so YMMV   ¯\_(ツ)_/¯<br></br>
      <a href="https://www.youtube.com/watch?v=alP-rXCQFfg">Who am I?</a><br></br>
      A self-taught programmer with a sense of humor and aspirations to make something entertaining/useful for others. Head <a href="https://github.com/JeffLi117">here</a> to check out my other projects!
      </div>
    </div>
  )
} */

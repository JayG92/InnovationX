import React from 'react';
import { FaCode } from 'react-icons/fa';
import {
  Card, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';
import "./style.css"

class Search_profileCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isFollowing: false,
 
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

    
  render () {
    const TopSkill1 = this.props.skills.length > 0 ? <p><FaCode /> {this.props.skills[0]}</p> : <p className="text-center">User hasnt added any skills yet!</p>
    const TopSkill2 = this.props.skills.length > 1 ? <p><FaCode /> {this.props.skills[1]}</p> : <p></p>
    const TopSkill3 = this.props.skills.length > 2 ? <p><FaCode /> {this.props.skills[2]}</p> : <p></p>
    const TopSkill4 = this.props.skills.length > 3 ? <p><FaCode /> {this.props.skills[3]}</p> : <p></p>
    const TopSkill5 = this.props.skills.length > 4 ? <p><FaCode /> {this.props.skills[4]}</p> : <p></p>

    if (window.location.pathname === "/userprofile/"+this.props.id) {
    return (
    <div className="pCard">
      <Card>
        <CardBody>
        <div className="border-bottom" id="pBgColor"></div>
        <div className="text-center">
        <div>{this.props.profilepic.length >= 1 ? <img id="pImage" src={this.props.profilepic} alt="Profile"></img> : <img id="pImage" src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png" alt="Profile"></img>}</div>
          <CardTitle id="pUsername">@{this.props.email}</CardTitle>
          </div>

          <CardText>{this.props.bio}</CardText>
          <hr></hr>
            <h5 className="text-center">Top Skills</h5>
            <p className="topSkill1">{TopSkill1}</p>
            <p className="topSkill2">{TopSkill2}</p>
            <p className="topSkill3">{TopSkill3}</p>
            <p className="topSkill4">{TopSkill4}</p>
            <p className="topSkill5">{TopSkill5}</p>
            <hr></hr>
            <h5 className="text-center">Github</h5>
            <a href={"https://github.com/"+this.props.repoLink}><h6>https://github.com/{this.props.repoLink}</h6></a>
            <hr></hr>
          <div className="text-center">
          <Button onClick={() => this.setState({ isFollowing: !this.state.isFollowing })} className="modal-button memberUnfollow"><span id="searchFollow">{this.state.isFollowing ? <t>Unfollow</t> : <t>Follow</t>}</span>{this.state.isFollowing ? <i class="fas fa-user-minus"></i> : <i class="fas fa-user-plus"></i>}</Button>
          </div>
        </CardBody>
      </Card>
    </div>

)
    } else {
      return null
    }
};
}

export default Search_profileCard;

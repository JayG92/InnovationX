import React from "react";
import API from "../utils/API";
import Footer from "../components/footer/index";
import PostForm from "../components/postform/index";
import Feed from "../components/feed/index";
import EventCard from "../components/eventcard/index";
import ThisNavbar from "../components/navbar/index";
import ProfileCard from "../components/profileCard/index"
import { Row, Col, Container } from 'reactstrap';

class Profile extends React.Component {
  state = {
    posts: [
    ],
    events: [
    ]
  }

  componentDidMount() {
    this.loadPosts();
    this.loadEvents();
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  loadPosts = () => {
    API.getPosts()
      .then(res =>
        this.setState({ posts: res.data })
      )
      .catch(err => console.log(err));
  };
  loadEvents = () => {
    API.getEvents()
      .then(res =>
        this.setState({ events: res.data })
      )
      .catch(err => console.log(err));
  };

  handleEventSubmit = event => {
    event.preventDefault();
    if (this.state.eventTitle || this.state.eventBody || this.state.date || this.state.time) {
      API.saveEvent({
        eventTitle: this.state.eventTitle,
        eventBody: this.state.eventBody,
        date: this.state.date,
        time: this.state.time,


      })
        .then(res => this.loadEvents())
        .catch(err => console.log(err));
    }
  };


  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title || this.state.body || this.state.date || this.state.time ||this.state.projectLink) {
      API.savePost({
        title: this.state.title,
        body: this.state.body,

      })
        .then(res => this.loadPosts())
        .catch(err => console.log(err));
    }
  };


  render() {
    return (
      <div>
        <ThisNavbar />
        <Container>
          <div className="topContainer"></div>
          <Row>
            <Col xs="3"><ProfileCard /><Footer /></Col>
            <Col xs="6">
              <PostForm
                loadPosts={this.loadPosts}
                loadEvents={this.loadEvents} />
              <Feed posts={this.state.posts} />
            </Col>
            <Col xs="3">
              <EventCard events={this.state.events} />
            </Col>
          </Row>
        </Container>
      </div>

    );
  }
}

export default Profile;

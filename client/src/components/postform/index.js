import React from 'react';
import API from "../../utils/API";
import "./style.css"

import { Jumbotron, FormGroup, Label, Input, TabContent, TabPane, Nav, NavItem, NavLink, Button, Row, Col } from 'reactstrap';
import classnames from 'classnames';


class PostForm extends React.Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1',
            title: "",
            body: "",
            date: "",
            time: "",
            eventTitle:"",
            eventBody:"",


        };
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        if (this.state.title || this.state.body || this.state.date || this.state.time||this.state.eventTitle||this.state.eventBody) {
            API.savePost({
                title: this.state.title,
                body: this.state.body,
                date: this.state.date,
                time: this.state.time,
                eventTitle:this.state.eventTitle,
                eventBody:this.state.eventBody
            })
                .then(res => this.props.loadPosts())
                .catch(err => console.log(err));
        }
    };

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    render() {
        return (
            <Jumbotron className="postcard" fluid>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => { this.toggle('1'); }}
                        >
                            <i class="far fa-share-square"></i>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggle('2'); }}
                        >
                            <i className="fas fa-calendar-day"></i>
                        </NavLink>

                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '3' })}
                            onClick={() => { this.toggle('3'); }}
                        >
                            <i className="far fa-clipboard"></i>
                        </NavLink>
                    </NavItem>

                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <Col sm="12">
                                <FormGroup>
                                    <Label for="exampleText"></Label>
                                    <Input
                                        value={this.state.body}
                                        onChange={this.handleInputChange}
                                        type="textarea"
                                        name="body"
                                        id="exampleText"
                                        placeholder="Post.."
                                    />
                                </FormGroup>
                                <Button onClick={this.handleFormSubmit}

                                >Post</Button>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>

                        </Row>
                        <Input
                            value={this.state.eventTitle}
                            onChange={this.handleInputChange}
                            name="eventTitle"
                            placeholder="Event Name..."
                            bsSize="sm" />
                        <FormGroup className="timeform">
                            <Label for="exampleDate"></Label>
                            <Input
                                value={this.state.date}
                                onChange={this.handleInputChange}
                                type="date"
                                name="date"
                                id="exampleDate"
                                placeholder="date placeholder"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleTime"></Label>
                            <Input
                                value={this.state.time}
                                onChange={this.handleInputChange}
                                type="time"
                                name="time"
                                id="exampleTime"
                                placeholder="time placeholder"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleText"></Label>
                            <Input
                                value={this.state.eventBody}
                                onChange={this.handleInputChange}
                                type="textarea"
                                name="eventBody"
                                id="exampleText"
                                placeholder="Post..."
                            />
                        </FormGroup>
                        <Button
                            onClick={this.handleFormSubmit}
                        >Post</Button>
                    </TabPane>
                    <TabPane tabId="3">
                        <Row>
                            <Col sm="12">
                                <Input
                                    value={this.state.title}
                                    onChange={this.handleInputChange}
                                    name="title"
                                    placeholder="Project Name..."
                                    bsSize="sm"
                                />

                                <FormGroup>
                                    <Label for="exampleText"></Label>
                                    <Input
                                        value={this.state.body}
                                        onChange={this.handleInputChange}

                                        placeholder="Post..."
                                        type="textarea"
                                        name="body"
                                        id="exampleText"
                                    />
                                </FormGroup>
                                <Button onClick={this.handleFormSubmit}>Post</Button>

                            </Col>
                        </Row>
                    </TabPane>

                </TabContent>
            </Jumbotron>

        );

    }

}

export default PostForm
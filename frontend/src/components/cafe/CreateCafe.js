import React, { Component } from 'react'
import {Button, Card, Col, Container, Form, FormGroup, Row} from 'react-bootstrap';
import {CardBody} from 'reactstrap';

import CafeService from '../../services/CafeService'

export default class CreateCafe extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: '',
            city: '',
            email: ''
        }

        this.changeHandler = this.changeHandler.bind(this);
        this.saveCafe = this.saveCafe.bind(this);
    }

    saveCafe = (e) => {
        e.preventDefault();
        let cafe = {name: this.state.name, city: this.state.city, email: this.state.email};
        console.log('cafe = '+JSON.stringify(cafe));

        CafeService.createCafe(cafe).then(res => {
            this.props.history.push('/cafe');
        });

    }

    changeHandler = (event)=>{
        this.setState({ [event.target.name]: event.target.value });
    }

    cancel()
    {
        this.props.history.push('/cafe')
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Card>
                            <Col>
                                <h3>Add Cafe</h3>
                                <CardBody>
                                    <Form>
                                        <FormGroup style={{padding:"1em"}}>
                                            <label>Name:</label>
                                            <input name="name" className='form-control' value={this.state.name} onChange={this.changeHandler}></input>
                                        </FormGroup>
                                        <FormGroup style={{padding:"1em"}}>
                                            <label>Last Name:</label>
                                            <input name="city" className='form-control' value={this.state.city} onChange={this.changeHandler}></input>
                                        </FormGroup>
                                        <FormGroup style={{padding:"1em"}}>
                                            <label>Email:</label>
                                            <input name="email" className='form-control' value={this.state.email} onChange={this.changeHandler}></input>
                                        </FormGroup>
                                        <Button color="success" onClick={this.saveCafe}>Save</Button>
                                        <Button color="danger"onClick={this.cancel.bind(this)}>Cancel</Button>
                                    </Form>
                                </CardBody>
                            </Col>
                        </Card>
                    </Row>
                </Container>
            </div>
        )
    }
}

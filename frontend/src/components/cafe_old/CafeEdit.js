import React, { Component } from 'react';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import MyAppBar from '../Appbar';
import { Link, withRouter } from 'react-router-dom';
import { Paper } from '@mui/material';
import Cafe from './Cafe';

const paperStyle={padding:'50px 20px', width:'600', margin:'20px auto'}

class CafeEdit extends Component {

    emptyItem = {
        name: '',
        email: ''
    };

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
    }

    async componentDidMount() {
        if (this.props.match.params.id !== 'add') {
            const client = await (await fetch(`/cafe/${this.props.match.params.id}`)).json();
            this.setState({item: client});
        }
    }

    async handleSubmit(event) {
        event.preventDefault();
        const {item} = this.state;
    
        await fetch('/cafe' + (item.id ? '/' + item.id : ''), {
            method: (item.id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        this.props.history.push('/cafe');
    }

    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    render() {
        const {item} = this.state;
        const title = <h2>{item.id ? 'Edit cafe' : 'Add cafe'}</h2>;
    
        return <div>
            <MyAppBar/>

            <Cafe/>

            <Paper elevation={3} style={paperStyle}>

            <Container>
                {title}
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="text" name="name" id="name" value={item.name || ''}
                               onChange={this.handleChange} autoComplete="name"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="text" name="email" id="email" value={item.email || ''}
                               onChange={this.handleChange} autoComplete="email"/>
                    </FormGroup>
                    <FormGroup>
                        <Button color="primary" type="submit">Save</Button>{' '}
                        <Button color="secondary" >Cancel</Button>
                    </FormGroup>
                </Form>
            </Container>
            </Paper>
        </div>
    }


}
export default withRouter(CafeEdit);
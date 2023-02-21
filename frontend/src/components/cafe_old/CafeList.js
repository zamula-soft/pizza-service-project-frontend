import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import MyAppBar from '../Appbar';
import {Link} from 'react-router-dom';
import { Paper } from '@mui/material';

const paperStyle={padding:'50px 20px', width:'600', margin:'20px auto'}


class CafeList extends Component {

    constructor(props) {
        super(props);
        this.state = {cafes: []};
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        fetch('http://localhost:8080/cafe')
            .then(response => response.json())
            .then(data => this.setState({cafes: data}));
    }


    async remove(id) {
        await fetch(`http://localhost:8080/cafe/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedCafes = [...this.state.cafes].filter(i => i.id !== id);
            this.setState({cafes: updatedCafes});
        });
    }


    async edit(id) {
        await fetch(`http://localhost:8080/cafe/${id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedCafes = [...this.state.cafes];
            this.setState({cafes: updatedCafes});
        });
    }
    
    render() {
        const {cafes, isLoading} = this.state;
    
        if (isLoading) {
            return <p>Loading...</p>;
        }
    
        const cafeList = cafes.map(cafe => {
            return <tr key={cafe.id}>
                <td style={{whiteSpace: 'nowrap'}}>{cafe.name}</td>
                <td>{cafe.email}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" onClick={() => this.edit(cafe.id)}>Edit</Button>
                        <Button size="sm" color="danger" onClick={() => this.remove(cafe.id)}>Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });
    
        return (
            <div>
                <MyAppBar/>
                <Paper elevation={3} style={paperStyle}>

                <Container fluid>
                <div className="float-right">
                    <Button color="success" tag={Link} to="/cafe/add">Add cafe</Button>
                </div>
                    <h3>List of cafe</h3>
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="30%">Name</th>
                            <th width="30%">Email</th>
                            <th width="40%">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {cafeList}
                        </tbody>
                    </Table>
                </Container>
                </Paper>
            </div>
        );
    }
    
    
}
export default CafeList;
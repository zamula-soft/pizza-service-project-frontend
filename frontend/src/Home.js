import React, { Component } from 'react';
import './App.css';


import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import MyAppBar from './components/Appbar';
import MyAppBarCopy from './components/Appbar';
import { Paper } from '@mui/material';

const paperStyle={padding:'50px 20px', width:'600', margin:'20px auto'}


class Home extends Component {


    render() {
        return (
            <div>
                <MyAppBar/>

                <Paper elevation={3} style={paperStyle}>

                <Container fluid>
                    <Button color="link"><Link to="/cafe">List of cafe</Link></Button>
                </Container>

                </Paper>
            </div>
        );
    }
}
export default Home;
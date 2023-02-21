import React, { Component } from 'react'
import { Button, Row, Table } from 'react-bootstrap';
import CafeService from '../../services/CafeService'

import plus from '../../static/img/plus-circle-dotted.svg';
import pen from '../../static/img/pen.svg';
import trash from '../../static/img/trash3.svg';




export default class ListCafe extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cafes: []
        }

        this.addCafe = this.addCafe.bind(this);
        this.editCafe = this.editCafe.bind(this);
        this.deleteCafe = this.deleteCafe.bind(this);
    }

    componentDidMount(){
        CafeService.getCafes().then((res) => {
            this.setState({
                cafes: res.data
            });
            
        });

    }

    addCafe()
    {
        this.props.history.push('/add-cafe/');
    }

    editCafe(id)
    {
        this.props.history.push(`/update-cafe/${id}`);
    }
    
    deleteCafe(id)
    {
        CafeService.deleteCafe(id).then( res=> {
            this.setState({cafes: this.state.cafes.filter(cafe => cafe.id !== id)});
        });
    }

    

    render() {
        return (
            <div class="card mb-3 mb-lg-5">
                <div class="card-header bg-light">
                    <h2 class="card-title">Cafe list</h2>
                </div>

                <div class="card-body d-flex justify-content-end">
                <form class="d-flex" role="search" action="/cafe/search" method="get">
                   {name}<input id="name" name="name" class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-primary btn-sm" onChange={this.handleChange}>Search</button>

                </form>
                <span>&nbsp;&nbsp;</span>
                    <button class="btn btn-primary btn-sm" onClick={this.addCafe} color="secondary"><img src={plus}/>  Add Cafe</button>
                </div>



                <Row>
                    
                    <Table striped bordered responsive hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table dataTable no-footer>
                        <thead class="thead-light">
                            <tr role="row">
                                <th>Rating</th>
                                <th>Cafe</th>
                                <th>Country</th>
                                <th>City</th>
                                <th>Address</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Description</th>
                                <th>Open</th>
                                <th>Close</th>
                                <th align='center'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.cafes.map(
                                    cafe => 
                                    <tr key = {cafe.id}>
                                        <td> {cafe.rating} </td>
                                        <td> {cafe.name} </td>
                                        <td> {cafe.country} </td>
                                        <td> {cafe.city} </td>
                                        <td> {cafe.address} </td>
                                        <td> {cafe.phone} </td>
                                        <td> {cafe.email} </td>
                                        <td> {cafe.description} </td>
                                        <td> {cafe.open_at} </td>
                                        <td> {cafe.close_at} </td>


                                        <td align='right'>

                                        <div class="d-flex">
                                            <button class="btn btn-white btn-sm" onClick={()=> this.editCafe(cafe.id) } color="primary">
                                                <img src={pen}/> Update</button>
                                        </div>
                                        <div class="d-flex">        
                                            <button class="btn btn-white btn-sm"  onClick={ ()=> this.deleteCafe(cafe.id) } color="danger">
                                            <img src={trash} class="bi-trash me-1"/> Delete</button>
                                        </div>        
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </Table>
                </Row>

            </div>
        )
    }
}

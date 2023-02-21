import React, { Component } from 'react'
import { Button, Row, Table } from 'react-bootstrap';
import PizzaService from '../../services/PizzaService'

import plus from '../../static/img/plus-circle-dotted.svg';
import pen from '../../static/img/pen.svg';
import trash from '../../static/img/trash3.svg';




export default class ListPizza extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pizzas: []
        }

        this.addPizza = this.addPizza.bind(this);
        this.editPizza = this.editPizza.bind(this);
        this.deletePizza = this.deletePizza.bind(this);
    }

    componentDidMount(){
        PizzaService.getPizzas().then((res) => {
            this.setState({
                pizzas: res.data
            });
            
        });

    }

    addPizza()
    {
        this.props.history.push('/add-pizza/');
    }

    editPizza(id)
    {
        this.props.history.push(`/update-pizza/${id}`);
    }
    
    deletePizza(id)
    {
        PizzaService.deletePizza(id).then( res=> {
            this.setState({pizzas: this.state.pizzas.filter(pizza => pizza.id !== id)});
        });
    }

    

    render() {
        return (
            <div class="card mb-3 mb-lg-5">
                <div class="card-header bg-light">
                    <h2 class="card-title">Pizza list</h2>
                </div>

                <div class="card-body d-flex justify-content-end">
                <form class="d-flex" role="search" action="/pizza/search" method="get">
                   {name}<input id="name" name="name" class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-primary btn-sm" onChange={this.handleChange}>Search</button>
                </form>
                <span>&nbsp;&nbsp;</span>
                    <button class="btn btn-primary btn-sm" onClick={this.addPizza} color="secondary"><img src={plus}/>  Add Pizza</button>
                </div>



                <Row>
                    
                    <Table striped bordered responsive hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table dataTable no-footer>
                        <thead class="thead-light">
                            <tr role="row">
                                <th>Pizza</th>
                                <th>Size</th>
                                <th>Description</th>
                                <th>Spicy</th>
                                <th align='center'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.pizzas.map(
                                    pizza => 
                                    <tr key = {pizza.id}>
                                        <td> {pizza.name} </td>
                                        <td> {pizza.size} </td>
                                        <td> {pizza.description} </td>
                                        <td> {pizza.spicy} </td>
                                        
                                        <td align='right'>

                                        <div class="d-flex">
                                            <button class="btn btn-white btn-sm" onClick={()=> this.editPizza(pizza.id) } color="primary">
                                                <img src={pen}/> Update</button>
                                        </div>
                                        <div class="d-flex">        
                                            <button class="btn btn-white btn-sm"  onClick={ ()=> this.deletePizza(pizza.id) } color="danger">
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

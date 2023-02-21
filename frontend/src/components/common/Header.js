import React, { Component } from 'react'
import { Container, Nav } from 'reactstrap';
import Navbar from 'react-bootstrap/Navbar';

import cafe from '../../static/img/cafe28color.png';
import pizza from '../../static/img/pizza28color.png';
import menu from '../../static/img/menu28color.png';
import login from '../../static/img/user28.png';



export default class HeaderComponent extends Component {
    render() {
        return (
        <header id="header" class="navbar navbar-expand-lg navbar-bordered bg-white  ">
            <nav class="js-mega-menu navbar-nav-wrap hs-menu-initialized hs-menu-horizontal">
                <div class="container mb-4 mb-lg-3">
                    <div class="navbar d-flex justify-content-begin">
                        <a class="navbar-brand" href="#">
                        <span>Pizza Service Spring Boot and React Appplication</span>
                        </a>
                        <div class="btn-group role='group'">
                            <a class="btn btn-outline-primary" href="/cafe" color="secondary"><img src={cafe}/>  Cafe</a>
                            <a class="btn btn-outline-primary" href="/pizza" color="secondary"><img src={pizza}/>  Pizza</a>
                            <a class="btn btn-outline-primary" href="/menu" color="secondary"><img src={menu}/>  Menu</a>
                            <button class="btn btn-outline-primary" onClick={this.addCafe} color="secondary"><img src={login}/>  Login</button>
                        </div>    
                    </div>
                </div>
        
            </nav>  
            <br/>  
        </header>        
        )
    };
}
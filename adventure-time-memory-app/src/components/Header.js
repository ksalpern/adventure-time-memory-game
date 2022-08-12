import React, { Component } from 'react'
import './Header.css';

export class Header extends Component {
  render() {
    return (

    
      <header class = "header">

        <a class = "header-logo">
            <img width="80px" height = "86px">
            </img>
        </a>

        <nav class = "header-navigation">
            <a class = "header-navItem">
                Home                
            </a>
            <a class = "header-navItem">
                Train               
            </a>
            <a class = "header-navItem">
                My progress
            </a>
        </nav>

        <button class ="header-button_singUp" >
            Sing Up
        </button>

        <button class ="header-button">
            Log In
        </button>

      </header>
    )
  }
}

export default Header
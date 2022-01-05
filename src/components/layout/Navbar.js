import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from "react-router-dom";
import styled from "styled-components"
import {Add } from "@styled-icons/fluentui-system-filled/Add"

const Navbar = () => {
    return (

     <StyledNav>
            <Link to='/' className= "logo">NOTES</Link>
                <ul className= "nav">

                    <NavLink to="/new"><Add color="white" width="25px"></Add></NavLink>
                    <NavLink to="/favorites">Favorites</NavLink>

                </ul>
                </StyledNav>
     

             
    )
}

const StyledNav = styled.nav`
background-color: #4caf50;
display: flex;
justify-content: space-between;
.logo{
    font-size: 2em;
    padding-left: 20px;
}
.nav{
    display: flex;
}






`;

export default Navbar

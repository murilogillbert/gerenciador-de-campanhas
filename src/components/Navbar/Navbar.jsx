import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: antiquewhite;
color: black;
`;

const Logo = styled.div`
  img {
    width: 50px;
  }
`;

const Menu = styled.div`
  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    
    li {
      margin: 0 15px;
      
      a {
        color: black;
        text-decoration: none;
        font-size: 1.1em;
        
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

const Account = styled.div`
  button {
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    margin-left: 10px;
    cursor: pointer;
    font-size: 1em;
    
    &:hover {
      background-color: #0056b3;
    }
  }
`;

export default function Navbar({ imgPath }) {
  return (
    <>
      <NavbarContainer>
        <Logo>
          <img src={imgPath} alt="Logo" />
        </Logo>
        <Menu>
          <ul>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#plan">Planos</a></li>
            <li><a href="#feeds">Opiniões</a></li>
          </ul>
        </Menu>
        <Account>


          <button>Login</button>
          <button>Cadastro</button>
        </Account>
      </NavbarContainer>
    </>
  );
}

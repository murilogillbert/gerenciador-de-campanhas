import { Outlet } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components';

import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: Arial, sans-serif;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
  }
`;

const Nav = styled.nav`
  width: 100vw;
  border-bottom : 10px solid gray
  margin-bottom: 5vh;
`;

const Main = styled.main`
  display: contents;
  padding: 20px;
`;

const FooterContainer = styled.footer`
  width: 100%;
  color: white;
  text-align: center;
  padding: 10px 0;
`;


function App() {


  return (
    <>
      <GlobalStyle />
      <Nav>
        <Navbar />
      </Nav>
      <Main>
        <Outlet />
      </Main>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </>
  )
}

export default App

import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import About from '../components/About/About';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import Plan from '../components/Plan/Plan';

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
  width: 97vw;
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

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Nav>
        <Navbar />
      </Nav>
      <Main>
        <section id="about">
          <About
            title="O Melhor gerenciador de campanhas do mundo"
            subtitle="Preços menores que o de concorrentes e taxa de conversão acima da média"
            description="Com o myCampaing você consegue gerenciar e criar suas campanhas em um só lugar!! Deixe de lado todo o enrolo do facebook ou google ads, e faça do seu jeito conosco!"
          />
        </section>
        <section id="plan">
          <Plan />
        </section>
      </Main>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </>
  );
}

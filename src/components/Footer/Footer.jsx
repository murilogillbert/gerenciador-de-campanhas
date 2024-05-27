import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`

  color: black;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid gray;
`;

const FooterContent = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const FooterSection = styled.div`
  margin: 10px;
  text-align: center;
`;

const FooterTitle = styled.h4`
  margin-bottom: 10px;
`;

const FooterList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    margin-bottom: 5px;
    
    a {
      color: black;
      text-decoration: none;
      
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const SocialLinks = styled.div`
  a {
    display:flexbox;
    margin: 0 10px;
    color: black;
    font-size: 1.5em;
    
    &:hover {
      color: #007bff;
    }
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>Sobre Nós</FooterTitle>
          <FooterList>
            <li><a href="#about">Quem Somos</a></li>
            <li><a href="#contact">Contato</a></li>
          </FooterList>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Informações</FooterTitle>
          <FooterList>
            <li><a href="#privacy">Política de Privacidade</a></li>
            <li><a href="#terms">Termos de Uso</a></li>
          </FooterList>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Siga-nos</FooterTitle>
          <SocialLinks>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </SocialLinks>
        </FooterSection>
      </FooterContent>
      <FooterSection>
        <p>&copy; 2024 myCampaing. Todos os direitos reservados.</p>
      </FooterSection>
    </FooterContainer>
  );
}

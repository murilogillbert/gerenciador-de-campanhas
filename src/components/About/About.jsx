// About.js
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';



const Container = styled.div`
  margin: 20px;
  padding: 20px;
  text-align: center;
`;

const Title = styled.h1`
  color: #333;
  font-size: 2.5em;
  margin-bottom: 10px;
`;

const Subtitle = styled.h3`
  color: #555;
  font-size: 1.5em;
  margin-bottom: 20px;
`;

const Description = styled.p`
  color: #777;
  font-size: 1.2em;
  line-height: 1.6;
`;

export default function About({ title, subtitle, description }) {
  return (
    <>
      <Container>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Description>{description}</Description>
      </Container>
    </>
  );
}

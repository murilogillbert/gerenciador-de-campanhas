import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import About from '../components/About/About';
import Plan from '../components/Plan/Plan';

export default function Home() {
  return (
    <>

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
    </>
  );
}

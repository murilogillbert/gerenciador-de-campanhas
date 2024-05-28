// Plan.js
import React from 'react';
import styled from 'styled-components';

const Name = styled.div`
display: flex;
justify-content: center;
align-items: center;`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
  flex-wrap: wrap;
`;

const PlanItem = styled.div`
  background-color: rgb(255, 247, 237);
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  padding: 20px;
  text-align: center;
  transition: transform 0.3s;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const PlanTitle = styled.h1`
  color: #333;
  font-size: 2em;
  margin-bottom: 10px;
`;

const PlanList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0;
  text-align: left;
`;

const PlanItemFeature = styled.li`
  color: #555;
  font-size: 1.1em;
  margin-bottom: 10px;
`;

const SelectButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #0056b3;
  }
`;

export default function Plan() {
  return (
    <>
        <Name>
        Planos
        </Name>
      <Container>
        <PlanItem>
          <PlanTitle>Grátis</PlanTitle>
          <PlanList>
            <PlanItemFeature>20 emails diários</PlanItemFeature>
            <PlanItemFeature>1000 caracteres no anúncio</PlanItemFeature>
            <PlanItemFeature>Suporte das 8:00 - 18:00 GTM -4</PlanItemFeature>
          </PlanList>
          <SelectButton>Selecionar</SelectButton>
        </PlanItem>
        
        <PlanItem>
          <PlanTitle>Básico</PlanTitle>
          <PlanList>
            <PlanItemFeature>100 emails diários</PlanItemFeature>
            <PlanItemFeature>2000 caracteres no anúncio</PlanItemFeature>
            <PlanItemFeature>Suporte 24 horas</PlanItemFeature>
          </PlanList>
          <SelectButton>Selecionar</SelectButton>
        </PlanItem>
        
        <PlanItem>
          <PlanTitle>Premium</PlanTitle>
          <PlanList>
            <PlanItemFeature>300 emails diários</PlanItemFeature>
            <PlanItemFeature>5000 caracteres no anúncio</PlanItemFeature>
            <PlanItemFeature>Suporte prioritário</PlanItemFeature>
          </PlanList>
          <SelectButton>Selecionar</SelectButton>
        </PlanItem>
      </Container>
    </>
  );
}

// src/components/Domains/index.js
import React from "react";
import styled from "styled-components";
import { domains } from "../../data/constants";

const Container = styled.div`
  padding: 50px 20px;
  max-width: 1200px;
  margin: auto;
`;

const Title = styled.h2`
  font-size: 32px;
  text-align: center;
  margin-bottom: 40px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const Card = styled.div`
  background: ${({ theme }) => theme.card};
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 4px 20px rgba(0,0,0,0.1);
  text-align: center;
`;

const Icon = styled.div`
  font-size: 40px;
  margin-bottom: 15px;
`;

const DomainTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
`;

const Domains = () => {
  return (
    <Container>
      <Title>Domains I Have Worked In</Title>
      <Grid>
        {domains.map((domain, index) => (
          <Card key={index}>
            <Icon>{domain.icon}</Icon>
            <DomainTitle>{domain.title}</DomainTitle>
            <Description>{domain.description}</Description>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

export default Domains;

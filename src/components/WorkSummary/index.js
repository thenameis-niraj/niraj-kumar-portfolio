import React from 'react';
import styled from 'styled-components';
import { experiences } from '../../data/constants';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  background: ${({ theme }) => theme.card};
  border-radius: 10px;
  margin: 20px auto;
  width: 80%;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 12px;
`;

const StatBox = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.text_primary};

  h3 {
    font-size: 2rem;
    margin-bottom: 5px;
    color: ${({ theme }) => theme.primary};
  }
  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.text_secondary};
  }
`;

function parseDate(str) {
  if (!str) return null;
  str = str.trim();
  if (str.toLowerCase() === 'present') return new Date();
  const monthsMap = {
    jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
    jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11
  };
  const [mon, yr] = str.split(' ');
  const mKey = mon.slice(0, 3).toLowerCase();
  if (monthsMap[mKey] === undefined) return new Date(str);
  return new Date(parseInt(yr), monthsMap[mKey]);
}

const WorkSummary = () => {
  let totalMonths = 0;
  experiences.forEach(exp => {
    if (!exp.date) return;
    const [startStr, endStr] = exp.date.split('-').map(s => s.trim());
    const start = parseDate(startStr);
    const end = parseDate(endStr) || new Date();
    if (start && end) {
      totalMonths += (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
    }
  });

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  return (
    <Container>
      <StatBox>
        <h3>{years}+ Years</h3>
        <p>Total professional experience ({months} months extra)</p>
      </StatBox>
    </Container>
  );
};

export default WorkSummary;

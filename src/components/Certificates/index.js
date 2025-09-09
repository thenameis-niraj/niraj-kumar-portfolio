import React, { useState } from "react";
import styled from "styled-components";
import { certificates } from "../../data/constants";

const Container = styled.div`
  padding: 50px 0;
  max-width: 1100px;
  margin: auto;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 40px;
  text-align: center;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
`;

const Card = styled.div`
  background: ${({ theme }) => theme.card};
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  color: ${({ theme }) => theme.text_primary};
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: transform 0.2s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  padding: 15px;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalContent = styled.div`
  background: ${({ theme }) => theme.card};
  padding: 20px;
  border-radius: 12px;
  max-width: 800px;
  width: 90%;
  color: ${({ theme }) => theme.text_primary};
`;

const ModalImage = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const ModalTitle = styled.h2`
  margin: 15px 0;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 15px;
`;

const Button = styled.button`
  background: ${({ theme }) => theme.primary};
  color: white;
  padding: 8px 16px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  const handleViewCertificate = () => {
    if (selectedCert?.link) {
      window.open(selectedCert.link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <Container id="certificates">
      <Title>Certificates</Title>
      <CardGrid>
        {certificates.map((cert, index) => (
          <Card key={index} onClick={() => setSelectedCert(cert)}>
            <Image src={cert.image} alt={cert.title} />
            <CardTitle>{cert.title}</CardTitle>
          </Card>
        ))}
      </CardGrid>

      {selectedCert && (
        <ModalOverlay onClick={() => setSelectedCert(null)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalImage src={selectedCert.image} alt={selectedCert.title} />
            <ModalTitle>{selectedCert.title}</ModalTitle>
            <ButtonRow>
              <Button onClick={handleViewCertificate}>View Certificate</Button>
            </ButtonRow>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
}

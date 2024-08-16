import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #282c34;
`;

const Title = styled.h1`
  color: white;
  font-size: 3rem;
`;

function App() {
  return (
    <Container>
      <Title>Tic-Tac-Toe Multiplayer</Title>
    </Container>
  );
}

export default App;

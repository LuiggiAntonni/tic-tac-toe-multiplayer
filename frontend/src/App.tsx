import React, { useEffect } from 'react';
import styled from 'styled-components';
import socket from './socket';

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
  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to the server');
    });

    socket.on('welcome', (message) => {
      console.log(message); 
  });

    return () => {
      socket.off('connect');
    };
  }, []);

  return (
    <Container>
      <Title>Tic-Tac-Toe Multiplayer</Title>
    </Container>
  );
}

export default App;

import React from 'react';
import Navbar from './components/Navbar';
import styled from 'styled-components';

const AppContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(15, 15, 15, 1);
  color: #fff;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em;
`;

const Content = styled.h2`
  color: #fff;
`;

function App() {
  return (
    <AppContainer>
      <Navbar />
      <InnerContainer>
        <Content>ANIMTED NAVBAR!</Content>
      </InnerContainer>
    </AppContainer>
  );
}

export default App;
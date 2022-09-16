
import './App.css';
import styled from 'styled-components';
import Head from './components/header';
import About from './components/about/about';
import Skills from './components/skills/skills';
import Portfolio from './components/portfolio/portfolio';
import Message from './components/message/message';
import Footer from './components/footer/footer';
import React from 'react';
import Experience from './components/experience/experience';


const Container = styled.div`
display: flex;
flex-direction: column;
height: 100%;
align-items: center;
justify-content: space-between;
`

function App() {
  return (
    <Container>
      <Head />
      <About />
      <Experience />
      <Skills />
      <Portfolio />
      <Message />
      <Footer />
    </Container>

  );
}

export default App;

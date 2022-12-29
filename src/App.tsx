import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import ProfileTab from './Components/ProfileTab';
import { Container } from '@chakra-ui/react'
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App ">
      <Navbar></Navbar>
      {/* <Container maxW='1280px' bg='purple.600' color='white'> */}
      <Container maxW='1280px'>
        <ProfileTab></ProfileTab>
      </Container>
      <Footer></Footer>
    </div>
  );
}

export default App;

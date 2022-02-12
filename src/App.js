import React from 'react';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Footer from './components/Footer';
import HomePage from './pages/HomePage'
import LinksPage from './pages/LinksPage';
import AboutPage from './pages/AboutPage';

import './App.css';

class App extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {
      title: 'Kieran McAuliffe',
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'About', path: '/about'},
        {title: 'Links', path: '/links'}
      ],
      home: {title: "title here", subtitle: "subtitle here", text: "checkout my projects brah"},
      about: {title: "about", subtitle: "subtitle here", text: "checkout my projects brah"},
      links: {title: "find out more", subtitle: "subtitle here", text: "checkout my projects brah"}
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Kieran McAuliffe</Navbar.Brand>

            <Navbar.Toggle aria-controls='navbar-toggle' className="border-0"/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className='ms-auto'>
                <Link className='nav-link' to='/'>Home</Link>
                <Link className='nav-link' to='/about'>About</Link>
                <Link className='nav-link' to='/links'>Links</Link>

                
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Routes>
            <Route path="/" exact element ={<HomePage title={this.state.home.title} subTitle={this.state.home.subtitle} test={this.state.home.text}/>}/>  
            <Route path="/about" element ={<AboutPage title={this.state.about.title} />}/>
            <Route path="/links" element ={<LinksPage title={this.state.links.title} />}/> 
          </Routes>
          <Footer />
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;

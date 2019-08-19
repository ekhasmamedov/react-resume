import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavigationComponent from '../Navigation/navigation';
import HomeComponent from '../Home/home';
import { Container } from 'react-bootstrap';

import * as ROUTES from '../../constants/routes';
import ProfileComponent from '../Home/profile';

export default class App extends React.Component {
  
  render() { 
    return (
      <Container>  
        <ProfileComponent />
        <NavigationComponent />
      </Container>
    );
  }
}
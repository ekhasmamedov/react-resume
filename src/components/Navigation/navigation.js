import React from 'react';
import {
  Container,
  Nav,
  NavItem,
  Navbar 
} from 'react-bootstrap';

import * as ROUTES from '../../constants/routes';

export default class NavigationComponent extends React.Component {
  render() {
    return (  
         <Navbar bg="light" expand="lg">
          <Nav className="mr-auto" navbar>
                <NavItem>
                   <Nav.Link href="/components/">Summary</Nav.Link> 
                </NavItem>
                <NavItem> 
                  <Nav.Link href="/components/">Skills</Nav.Link>  
                </NavItem>
                <NavItem> 
                  <Nav.Link href="/components/">Education</Nav.Link>  
                </NavItem>
                <NavItem> 
                  <Nav.Link href="/components/">Portfolio</Nav.Link>  
                </NavItem>
          </Nav>      
        </Navbar>   
    );
  }
}
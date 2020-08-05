import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect  } from 'react-router-dom';

import SummaryComponent from '../Home/summary';
import EducationComponent from '../Home/education';
import SkillsComponent from '../Home/skills';
import PortfolioComponent from '../Home/portfolio';

import * as ROUTES from '../../constants/routes';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import { Container } from '@material-ui/core';

function NavBar() {
  const [value, setValue] = React.useState(0);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar position="static">
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label='Summary' component={Link} to={ROUTES.SUMMARY} />
        <Tab label='Skills' component={Link} to={ROUTES.SKILLS} />
        <Tab label='Education' component={Link} to={ROUTES.EDUCATION} />
        <Tab label='Portfolio' component={Link} to={ROUTES.PORTFOLIO} />
      </Tabs>
    </AppBar>
  )
}

export default function App() {  
  return (
    <Container>
      <Router>
        <NavBar/>

        <hr />

        <Switch>
          <Route exact path='/' render={() => <Redirect to={ROUTES.SUMMARY} />}/>
          <Route path={ROUTES.SUMMARY} component={SummaryComponent} />
          <Route path={ROUTES.SKILLS} component={SkillsComponent} />
          <Route path={ROUTES.EDUCATION} component={EducationComponent} />
          <Route path={ROUTES.PORTFOLIO} component={PortfolioComponent} />
        </Switch>
  
      </Router>
    </Container>
  );
 }


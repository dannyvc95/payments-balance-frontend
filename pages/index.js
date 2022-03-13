import React from 'react';
import {
  Column,
  Row,
  Grid,
} from 'carbon-components-react';
import Navigation from '../components/Navigation';
import Home from './Home/Home';

const Index = () => {
  return <Grid>
    <Navigation />
    <Row>
      <Column>
        <Home />
      </Column>
    </Row>
  </Grid>;
};

export default Index;

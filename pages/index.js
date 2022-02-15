import React from 'react';
import {
  Column,
  Grid,
  Row,
} from 'carbon-components-react';
import {SimpleBarChart} from '@carbon/charts-react';

const Home = () => {
  const chartConfig = {
    data: [
      {
        group: 'Daniel',
        value: 1000,
      },
    ],
    options: {
      title: 'Payments balance',
      axes: {
        left: {
          mapsTo: 'value',
          title: 'Pesos',
        },
        bottom: {
          mapsTo: 'group',
          title: 'Person',
          scaleType: 'labels',
        },
      },
      height: '400px',
      width: '500px',
      bars: {
        width: 150,
      },
    },
  };

  return <Grid>
    <Row>
      <Column>
        <SimpleBarChart data={chartConfig.data} options={chartConfig.options} />
      </Column>
    </Row>
  </Grid>;
};

export default Home;

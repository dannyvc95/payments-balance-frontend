import React, {useState} from 'react';
import {SimpleBarChart} from '@carbon/charts-react';
import {
  FormLabel,
  Button,
} from 'carbon-components-react';
import AddPayment from '../../components/AddPayment';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const who = 'Daniel Valle';
  const debt = 1000;

  const chartConfig = {
    data: [
      {
        group: who,
        value: debt,
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
      height: '500px',
      width: '400px',
      bars: {
        width: 150,
      },
    },
  };

  return <>
    <AddPayment isOpen={isOpen} setIsOpen={setIsOpen} />
    <h1>{who}</h1>
    <FormLabel>Must pay</FormLabel>
    <h1>${debt}</h1>
    <FormLabel>MXN</FormLabel>
    <SimpleBarChart data={chartConfig.data} options={chartConfig.options} />
    <br />
    <Button onClick={() => setIsOpen(true)}>Add payment</Button>
  </>;
};

export default Home;

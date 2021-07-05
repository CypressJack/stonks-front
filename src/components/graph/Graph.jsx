import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import "./Graph.scss";
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
} from '@devexpress/dx-react-chart-material-ui';

const data = [
  { argument: 1, value: 10 },
  { argument: 3, value: 15 },
  { argument: 4, value: 30 },
  { argument: 5, value: 15 },
  { argument: 7, value: 30 },
  { argument: 8, value: 30 },
  { argument: 30, value: 30 },
];

export default function Graph() {

  return (
    <Chart
      data={data}
      height={200}
    >
      <ArgumentAxis
      f />
      <ValueAxis 
      showGrid={false}
      />
      <LineSeries 
      className='graph-chart'
      valueField="value"
      argumentField="argument"
      color='#25A55F' />
    </Chart>

  )
};

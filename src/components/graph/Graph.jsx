import * as React from 'react';
import Button from "../Button";
import "./Graph.scss";
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
} from '@devexpress/dx-react-chart-material-ui';

export default function Graph(props) {

  return (
    <div className='chart-container'>
      <Chart
      data={props.data}
      height={200}
    >
      <ArgumentAxis
      showLabels={false}
      showLine={false}
      showTicks={false} />
      <ValueAxis 
      showLabels={false}
      showGrid={false}
      />
      <LineSeries 
      className='graph-chart'
      valueField="value"
      argumentField="argument"
      color='#25A55F' />
      </Chart>
      <div className='button-container'>
        <Button>
          live
        </Button>
        <Button>
          1D
        </Button>
        <Button>
          1W
        </Button>
        <Button>
          1M
        </Button>
        <Button>
          3M
        </Button>
        <Button>
          1Y
        </Button>
        <Button>
          ALL
        </Button>
      </div>
    </div>
  )
};

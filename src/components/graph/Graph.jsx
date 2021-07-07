import React, { useState } from 'react';
import Button from "../Button";
import MuiButton from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import "./Graph.scss";
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
  Tooltip
} from '@devexpress/dx-react-chart-material-ui';
import { EventTracker, HoverState } from '@devexpress/dx-react-chart';
import { Animation } from '@devexpress/dx-react-chart';

export default function Graph(props) {


  const [selected, setSelected] = useState('Month');
  const [selectedColor, setSelectedColor] = useState('green-selected');
  const [unSelectedColor, setUnSelectedColor] = useState('green-unselected');
  const [selectedPoint, setSelectedPoint] = useState(false);

  const LIVE = 'Live';
  const ONED = 'Day';
  const ONEW = 'Week';
  const ONEM = 'Month';
  const ONEY = 'Year';
  const ALL = 'All Time';

  const select = function(button) {
    setSelected(button);
  };

  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(-1)
    }
  }));

  const classes = useStyles();

  if (props.color === '#C47777' && unSelectedColor !== 'red-unselected' && selectedColor !== 'red-selected') {
    setUnSelectedColor('red-unselected');
    setSelectedColor('red-selected');
  };

  if (props.color === '#25A55F' && unSelectedColor !== 'green-unselected' && selectedColor !== 'green-selected') {
    setUnSelectedColor('green-unselected');
    setSelectedColor('green-selected');
  };


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
      name='line'
      className='graph-chart'
      valueField="value"
      argumentField="argument"
      color={props.color} />
      <Animation/>
      <EventTracker
      onClick={targetData => {setSelectedPoint(targetData.targets[0] ? {series: 'line', point: targetData.targets[0].point} : false)}}
      />
      <Tooltip
      targetItem={selectedPoint}
      />
      </Chart>
      <div className='graph-button-container'>
        <MuiButton onClick={()=> {select(LIVE); props.setTimeLine(LIVE); setSelectedPoint(false)}} className={`MuiButton-graph ${classes.margin} ${selected === LIVE && selectedColor || unSelectedColor}`}>
          live
        </MuiButton>
        <MuiButton onClick={()=> {select(ONED); props.setTimeLine(ONED); setSelectedPoint(false)}} className={`MuiButton-graph ${classes.margin} ${selected === ONED && selectedColor || unSelectedColor}`}>
          1D
        </MuiButton>
        <MuiButton onClick={()=> {select(ONEW); props.setTimeLine(ONEW); setSelectedPoint(false)}} className={`MuiButton-graph ${classes.margin} ${selected === ONEW && selectedColor || unSelectedColor}`}>
          1W
        </MuiButton>
        <MuiButton onClick={()=> {select(ONEM); props.setTimeLine(ONEM); setSelectedPoint(false)}} className={`MuiButton-graph ${classes.margin} ${selected === ONEM && selectedColor || unSelectedColor}`}>
          1M
        </MuiButton>
        <MuiButton onClick={()=> {select(ONEY); props.setTimeLine(ONEY); setSelectedPoint(false)}} className={`MuiButton-graph ${classes.margin} ${selected === ONEY && selectedColor || unSelectedColor}`}>
          1y
        </MuiButton>
        <MuiButton onClick={()=> {select(ALL); props.setTimeLine(ALL); setSelectedPoint(false)}} className={`MuiButton-graph ${classes.margin} ${selected === ALL && selectedColor || unSelectedColor}`}> 
          ALL
        </MuiButton>
      </div>
    </div>
  )
};

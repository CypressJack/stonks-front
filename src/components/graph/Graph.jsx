import React, { useState, useEffect } from 'react';
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
import { EventTracker } from '@devexpress/dx-react-chart';
import { Animation } from '@devexpress/dx-react-chart';
import { HoverState } from '@devexpress/dx-react-chart';
import { SelectionState } from '@devexpress/dx-react-chart';
import { ValueScale } from '@devexpress/dx-react-chart';
import { format } from 'd3-format';
import { scaleLinear } from 'd3-scale';


export default function Graph(props) {

  const [selected, setSelected] = useState(props.selected ? props.selected : 'Month');
  const [selectedColor, setSelectedColor] = useState('green-selected');
  const [unSelectedColor, setUnSelectedColor] = useState('green-unselected');
  const [selectedPoint, setSelectedPoint] = useState();
  const [selectedPointValue, setSelectedPointValue] = useState();
  const [selectedPointMoney, setSelectedPointMoney] = useState();

  console.log(selectedPoint);

  const LIVE = 'Live';
  const ONED = 'Day';
  const ONEW = 'Week';
  const ONEM = 'Month';
  const ONEY = 'Year';
  const ALL = 'All Time';

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

  const formatTooltip = format("($.2f")(-3.5);
  const TooltipContent = ({
    data, text, style, ...props
  }) => {
    const alignStyle = {
      ...style,
      paddingLeft: '10px',
    };
    return (
      <div>{selectedPointMoney}</div>
    );
  };

  useEffect(()=>{
    setSelectedPointValue(selectedPoint ? props.data[selectedPoint.point].value : null);
  },[selectedPoint])

  useEffect(()=>{
    const profileValue = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(selectedPointValue)
    setSelectedPointMoney(profileValue);
  },[selectedPointValue])


  return (
    <div className='chart-container' >
      <Chart
      className="graph-page"
      data={props.data}
      height={200}
      onClick={props.onClick}
      >
      <ValueScale
      factory={scaleLinear}
      />
      <ArgumentAxis
      showLabels={false}
      showLine={false}
      showTicks={false} />
      <ValueAxis 
      showLabels={selectedPoint ? true : false}
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
        onClick={targetData => {
          setSelectedPoint(targetData.targets[0] ? {series: 'line', point: targetData.targets[0].point} : false);
          console.log(selectedPoint)
        }}
      />
      <Tooltip
      targetItem={selectedPoint}
      contentComponent={TooltipContent}
      />
      </Chart>
      <div className='graph-button-container' >
        <MuiButton onClick={()=> {setSelected(LIVE); props.setTimeLine(LIVE); setSelectedPoint(false)}} className={`MuiButton-graph ${classes.margin} ${selected === LIVE ?  selectedColor : unSelectedColor}`}>
          live
        </MuiButton>
        <MuiButton onClick={()=> {setSelected(ONED); props.setTimeLine(ONED); setSelectedPoint(false)}} className={`MuiButton-graph ${classes.margin} ${selected === ONED ?  selectedColor : unSelectedColor}`}>
          1D
        </MuiButton>
        <MuiButton onClick={()=> {setSelected(ONEW); props.setTimeLine(ONEW); setSelectedPoint(false)}} className={`MuiButton-graph ${classes.margin} ${selected === ONEW ?  selectedColor : unSelectedColor}`}>
          1W
        </MuiButton>
        <MuiButton onClick={()=> {setSelected(ONEM); props.setTimeLine(ONEM); setSelectedPoint(false)}} className={`MuiButton-graph ${classes.margin} ${selected === ONEM ?  selectedColor : unSelectedColor}`}>
          1M
        </MuiButton>
        <MuiButton onClick={()=> {setSelected(ONEY); props.setTimeLine(ONEY); setSelectedPoint(false)}} className={`MuiButton-graph ${classes.margin} ${selected === ONEY ?  selectedColor : unSelectedColor}`}>
          1y
        </MuiButton>
        <MuiButton onClick={()=> {setSelected(ALL); props.setTimeLine(ALL); setSelectedPoint(false)}} className={`MuiButton-graph ${classes.margin} ${selected === ALL ?  selectedColor : unSelectedColor}`}> 
          ALL
        </MuiButton>
      </div>
    </div>
  )
};

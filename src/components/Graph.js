import React from 'react';
import { drawCurve, drawLines, drawPoints, drawBars, drawPie, getCurvePoints, calculateCoords, flatten } from '../utilities/graphUtils';

const Graph = ({
  width = 400,
  height = 300,
  type = 'curve',
  data
}) => {
  let canvasRef = React.createRef();
  
  React.useEffect(() => {
    let canvas = canvasRef.current;
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = '#2C8CF1';
    ctx.strokeStyle = '#07327E';
    let minValue = 0;
    let maxValue = Math.max(...data);
    let coords = flatten(data.map((val, i) => calculateCoords(val, i, width, height, maxValue, minValue, data.length)));
    if(type === 'scatter') 
      drawPoints(ctx, coords);
    if(type === 'curve')
      drawCurve(ctx, coords, 0.5, false, 16, true);
    if(type === 'line')
      drawLines(ctx, coords, true);
    if(type === 'bar')
      drawBars(ctx, coords, width, height);
    if(type === 'pie')
      drawPie(ctx, data, width, height);
  });
  
  return (
    <canvas ref={canvasRef} width={width} height={height}>
    </canvas>
  );
}

export default Graph;
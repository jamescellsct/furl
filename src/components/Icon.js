import React from "react";
const feather = require('feather-icons');

const Icon = ({ 
  name, 
  width = 24,
  height = 24,
  viewBox = '0 0 24 24',
  fill = 'none',
  stroke = 'currentColor',
  strokeWidth = 2,
  strokeLinecap = 'round',
  strokeLinejoin = 'round',
  id, 
  className
}) => (
  <span 
    id={id !== undefined ? id : false} 
    className={[ className, 'icon'].join(' ').trim()}
    dangerouslySetInnerHTML={{ __html: feather.icons[name].toSvg({
      width: width,
      height: height,
      viewBox: viewBox,
      fill: fill,
      stroke: stroke,
      strokeWidth: strokeWidth,
      strokeLinecap: strokeLinecap,
      strokeLinejoin: strokeLinejoin
    })}}   
  />
);

export default Icon;
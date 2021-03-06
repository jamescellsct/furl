import React from 'react';
import { combineClassNames, omitProps, combineStyles } from '../utilities/utils';

const FormLegend = ({ className, children, ...rest }) => (
  <legend 
    className={className}
    style={combineStyles(rest, rest.style)}
    {...omitProps(rest)}
  >
    {children}
  </legend>
);

const FormLabel = ({ className, htmlFor, children, ...rest }) => (
  <label 
    htmlFor={htmlFor} 
    className={className}
    style={combineStyles(rest, rest.style)}
    {...omitProps(rest)}
  >
    {children}
  </label>
);

const Form = ({
  fill = 'flat',
  size = 'normal',
  color = 'normal',
  name,
  autocomplete,
  openIn = 'self',
  className,
  children,
  ...rest }) => {
  let classNames = [className, fill];
  if (size !== 'normal') classNames.push(size);
  if (color !== 'normal') classNames.push(color);
  return (
    <form
      target={['blank', '_blank'].includes(openIn) ? '_blank' : '_self'}
      autoComplete={autocomplete ? 'on' : 'off'} 
      name={name}
      className={combineClassNames(classNames)}
      style={combineStyles(rest, rest.style)}
      {...omitProps(rest)}
    >
      {children}
    </form>
  );
};

export { Form, FormLegend, FormLabel };

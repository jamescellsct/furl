import React from 'react';
import { normalizeChildren } from '../utilities/utils';
import Button from './Button';

const PaginationItem = ({
  fill = 'flat',
  size = 'normal',
  shape = 'normal',
  id,
  className,
  children,
  ...rest }) => (
  <span // eslint-disable-line semistandard-react/jsx-indent
    id={id}
    className={['pagination-item', fill, size !== 'normal' ? size : '', shape !== 'normal' ? shape : '', className].join(' ').trim()}
    {...rest}>
    {children}
  </span>
);

const Pagination = ({
  size = 'normal',
  shape = 'normal',
  id,
  className,
  children,
  ...rest
}) => {
  const buttons = normalizeChildren(children).filter(item => Button.name === item.type.name || PaginationItem.name === item.type.name)
    .map(b => {
      let _b = Object.assign({}, b);
      _b.props = Object.assign({
        fill: 'flat',
        size: size,
        shape: shape
      }, b.props);
      return _b;
    });
  let classNames = [className, 'pagination'];
  if (size !== 'normal') classNames.push(size);
  if (shape !== 'normal') classNames.push(shape);
  return (
    <div id={id} className={classNames.join(' ').trim()} {...rest} role='group'>
      {buttons}
    </div>
  );
};

export {Pagination, PaginationItem};

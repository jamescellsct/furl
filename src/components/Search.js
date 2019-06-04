import React from 'react';
import { InputBase } from './Input';
import { normalizeChildren } from '../utilities/utils';
import Icon from './Icon';

const Search = ({
  size = 'normal',
  disabled = false,
  required = false,
  placeholder,
  name,
  onChange,
  id,
  className,
  withIcon,
  children,
  ...rest
}) =>
  withIcon ? (
    <>
      <InputBase
        type='search' id={id} placeholder={placeholder}
        className={['with-search-icon', className].join(' ').trim()} size={size} disabled={disabled}
        required={required} name={name} onChange={onChange} 
        title={name ? name : id ? id : rest.title ? rest.title : 'Search'}
        {...rest}
      />
      <span>
        <Icon name='search' width={16} height={16} />&zwnj;
      </span>
      {normalizeChildren(children).length ? <div className='search-result-box'>{children}</div> : ''}
    </>
  ) : (
    <>
      <InputBase
        type='search' id={id} placeholder={placeholder}
        className={className} size={size} disabled={disabled}
        required={required} name={name} onChange={onChange} 
        title={name ? name : id ? id : rest.title ? rest.title : 'Search'}
        {...rest}
      />
      {normalizeChildren(children).length ? <div className='search-result-box'>{children}</div> : ''}
    </>
  );

export default Search;

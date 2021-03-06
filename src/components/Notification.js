import React from 'react';
import { normalizeChildren, combineClassNames, omitProps, combineStyles } from '../utilities/utils';
import useTimeout from '../utilities/useTimeout';

const Notification = ({
  color = 'plain',
  size = 'normal',
  textAlign = 'center',
  active = true,
  duration = 3000,
  className,
  children,
  ...rest
}) => {
  duration = duration >= 500 ? duration : 500;
  const [isActive, setIsActive] = React.useState(active);
  const [isAlmostInactive, setIsAlmostInactive] = React.useState(false);
  const [isInactive, setIsInactive] = React.useState(false);
  let classNames = [className, `text-${textAlign}`];
  if (size !== 'normal') classNames.push(size);
  if (color !== 'plain') classNames.push(color);
  /* istanbul ignore next */
  useTimeout(() => {
    setIsActive(false);
  }, duration);
  /* istanbul ignore next */
  useTimeout(() => {
    setIsAlmostInactive(true);
  }, duration - 300);
  /* istanbul ignore next */
  useTimeout(() => {
    setIsAlmostInactive(false);
    setIsInactive(true);
  }, duration - 50);
  return (
    isActive
      ? <div
          className={combineClassNames(['notification', ...classNames, isAlmostInactive ? 'almost-inactive' : '', isInactive ? 'inactive' : ''])}
          role='alert'
          style={combineStyles(rest, rest.style)}
          {...omitProps(rest)}
        >
          {children}
        </div>
      : null
  );
};

const NotificationCenter = React.forwardRef(
  ({
    verticalPosition = 'top',
    horizontalPosition = 'right',
    className,
    children,
    ...rest
  }, ref) => {
    const notifications = normalizeChildren(children).filter(item => item.type && item.type.name && Notification.name === item.type.name);
    let [__content, __setContent] = React.useState(notifications);
    /* istanbul ignore next */
    React.useImperativeHandle(ref, () => ({
      addNotification: (content) => {
        const notifications = normalizeChildren(content).filter(item => item.type && item.type.name && Notification.name === item.type.name);
        __setContent([...__content, notifications]);
      }
    }));
    /* istanbul ignore next */
    React.useEffect(() => {
      __setContent(__content.filter(v => v !== null));
    });
    return (
      <div 
        className={combineClassNames(['notification-center', verticalPosition, horizontalPosition, className])}
        style={combineStyles(rest, rest.style)}
        {...omitProps(rest)} 
      >
        {__content.filter(v => v !== null)}
      </div>
    );
  }
);

export {NotificationCenter, Notification};

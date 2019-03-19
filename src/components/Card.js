import React from "react";
import CardSection from "./CardSection";

const Card = ({
  width = 'auto',
  id,
  className,
  children,
}) => {
  if (!Array.isArray(children)) children = [children];
  const sections = children.filter(item => CardSection.name == item.type.name);
  return (<div className={[className, "card"].join(' ').trim()}
    id={id !== undefined ? id : false} style={{width: width}}>
    {sections}
  </div>)
}

export { Card, CardSection };
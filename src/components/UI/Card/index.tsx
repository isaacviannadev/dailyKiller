import React from 'react';
import { CardContentSC, CardSC, CardTitleSC } from './style';

export type CardProps = {
  children: React.ReactNode;
  title?: string;
};
const Card = ({ children, title }: CardProps) => {
  return (
    <CardSC>
      {title && (
        <CardTitleSC>
          <h2>{title}</h2>
        </CardTitleSC>
      )}
      <CardContentSC>{children}</CardContentSC>
    </CardSC>
  );
};

export default Card;

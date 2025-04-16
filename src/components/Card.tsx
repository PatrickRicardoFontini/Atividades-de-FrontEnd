import React from 'react';
import './Card.css';

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return <div className="responsive-card">{children}</div>;
};

export default Card;
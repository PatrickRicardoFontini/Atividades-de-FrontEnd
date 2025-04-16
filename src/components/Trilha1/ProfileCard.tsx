import React from 'react';
import styles from './ProfileCard.css'; // Importando o CSS do componente

interface ProfileCardProps {
  image: string;
  name: string;
  description: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ image, name, description }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.image} />
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
};
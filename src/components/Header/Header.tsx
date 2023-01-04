import React from 'react';
import Button from '../Button/Button';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <h1 className={styles.logo}>Админка фильмотеки</h1>
        <Button onClick={() => {window.open('https://github.com/artef00kt', '_blank', 'noopener,noreferrer')}}>Иванов Артем 6307</Button>
      </div>
      
    </header>
  );
};

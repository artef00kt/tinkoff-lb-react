import React from 'react';
import { useCallback } from 'react';
import Button from '../Button/Button';
import styles from './Header.module.scss';

export const Header = () => {
  const myNameButton = useCallback( 
    () => {
      window.open('https://github.com/artef00kt', '_blank', 'noopener,noreferrer')
    }, []);

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <h1 className={styles.logo}>Админка фильмотеки</h1>
        <Button onClick={myNameButton}>Иванов Артем 6307</Button>
      </div>
    </header>
  );
};

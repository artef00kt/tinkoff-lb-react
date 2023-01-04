import React from 'react';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <h1 className={styles.logo}>Админка фильмотеки</h1>
      </div>
    </header>
  );
};

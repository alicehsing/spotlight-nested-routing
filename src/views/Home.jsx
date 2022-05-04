import React from 'react';
import styles from '../App.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        {/* <h1>Rick and Morty Character Wiki</h1> */}
        <Link to="/">
          <h3>Home</h3>
        </Link>
        <Link to="/characters">
          <h3>View Characters</h3>
        </Link>
        <hr />
      </header>
    </>
  );
}

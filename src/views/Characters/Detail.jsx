import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from '../../App.css';

export default function CharacterDetail() {
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchEachCharacter = async () => {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      const characterData = await res.json();
      setCharacter(characterData);
      setLoading(false);
    };
    fetchEachCharacter();
  }, []);

  return (
    <>
      <Link to="/">
        <input
          type="button"
          value="Back to list of characters"
          className={styles.back}
        />
      </Link>
      <hr />
      {loading ? (
        <p>Loading character...</p>
      ) : (
        <>
          <div className={styles.detail}>
            <section>
              <h2>{character.name}</h2>
              <span>Species: {character.species}</span>
              <p>Status: {character.status}</p>
              <p>Location: {character.location.name}</p>
              <p>Gender: {character.gender}</p>
              <img alt={`${character.name}`} src={character.image} />
            </section>
          </div>
        </>
      )}
    </>
  );
}

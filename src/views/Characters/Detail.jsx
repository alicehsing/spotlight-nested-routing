import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../../App.css';

export default function CharacterDetail({ characters = [] }) {
  const [character, setCharacter] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const clickedCharacter = characters.find((character) => {
      // id from url will be a string but character.id is a number => wrap "id" with Number()
      return character.id === Number(id);
    });
    setCharacter(clickedCharacter);
  }, [id]);

  return (
    <>
      <div className={styles.detail}>
        <section>
          <h2>{character.name}</h2>
          <span>Species: {character.species}</span>
          <img alt={`${character.name}`} src={character.image} />
        </section>
      </div>
    </>
  );
}

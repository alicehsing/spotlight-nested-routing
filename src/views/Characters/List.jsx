import React, { useEffect, useState } from 'react';
import { Link, Route, useRouteMatch } from 'react-router-dom';
import styles from '../../App.css';
import CharacterDetail from './Detail';

export default function CharacterList() {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const { url, path } = useRouteMatch();
  // path = '/characters/:id/episodes/:episodeId'
  // url = '/characters/1/episodes/3'

  useEffect(() => {
    const fetchCharacters = async () => {
      const res = await fetch('https://rickandmortyapi.com/api/character');
      const { results } = await res.json();
      setCharacters(results);
      setLoading(false);
    };
    fetchCharacters();
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading characters...</p>
      ) : (
        <>
          <div className={styles.list}>
            <h2>Character List</h2>
            {characters.map((character) => (
              <section key={character.id}>
                <Link to={`${url}/${character.id}`}>
                  <h3>{character.name}</h3>
                </Link>
              </section>
            ))}
          </div>
        </>
      )}
      <Route path={`${path}/:id`}>
        <CharacterDetail characters={characters} />
      </Route>
    </>
  );
}

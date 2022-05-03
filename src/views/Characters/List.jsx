import React, { useEffect, useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import styles from '../../App.css';

export default function CharacterList() {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const status = new URLSearchParams(location.search).get('status') ?? 'all';
  const history = useHistory();

  const handleStatusChange = (e) => {
    history.push(`/?status=${e.target.value}`);
  };

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      const statusParam = new URLSearchParams(location.search).get('status');

      const url =
        // || means 'or'
        // Condition 1: if statusParam === 'all' and !statusParam (is statusParam blank?) is falsey (not blank) => 'https://rickandmortyapi.com/api/character'
        // Condition 2: if statusParam !== 'all' and !statusParam is falsey (not blank) => https://rickandmortyapi.com/api/character?status=${statusParam}`;
        // Condition 3: if statusParam !== 'all' and !statusParam is truthy (is blank) => https://rickandmortyapi.com/api/character'
        // COndition 4: if statusParam === 'all, and !statusParam  is truthy (is blank) => 'https://rickandmortyapi.com/api/character'
        statusParam === 'all' || !statusParam
          ? 'https://rickandmortyapi.com/api/character'
          : `https://rickandmortyapi.com/api/character?status=${statusParam}`;
      const res = await fetch(url);
      // const res = await fetch('https://rickandmortyapi.com/api/character');
      const { results } = await res.json();
      setCharacters(results);
      setLoading(false);
    };
    fetchCharacters();
  }, [location.search]);

  return (
    <>
      {loading ? (
        <p>Loading characters...</p>
      ) : (
        <>
          <section>
            <div>
              <h3>Sort characters by status: </h3>
              <select id="status" value={status} onChange={handleStatusChange}>
                <option value="all">All</option>
                <option value="alive">Alive</option>
                <option value="dead">Dead</option>
                <option value="unknown">Unknown</option>
              </select>
            </div>
          </section>
          <div className={styles.list}>
            {characters.map((character) => {
              return (
                <section key={character.id}>
                  <Link to={`/characters/${character.id}`}>
                    <h3>{character.name}</h3>
                  </Link>
                  <span>Species: {character.species}</span>
                  <p>Status: {character.status}</p>
                </section>
              );
            })}
          </div>
        </>
      )}
    </>
  );
}

import { Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import CharacterList from './views/Characters/List';
import styles from './App.css';

export default function App() {
  return (
    <>
      <header className={styles.header}>
        <h1>Rick and Morty Character Wiki</h1>
        <Home />
      </header>
      <main className={styles.container}>
        <Switch>
          <Route path="/characters">
            {/* <Home /> */}
            <CharacterList />
          </Route>
          <Route exact path="/">
            {/* <Home /> */}
          </Route>
        </Switch>
      </main>
    </>
  );
}

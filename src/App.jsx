import { Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import CharacterList from './views/Characters/List';
import './App.css';

export default function App() {
  return (
    <>
      <Switch>
        <Route path="/characters">
          <Home />
          <CharacterList />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

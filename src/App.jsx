import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import CharacterList from './views/Characters/List';
import './App.css';
import CharacterDetail from './views/Characters/Detail';

export default function App() {
  return (
    <>
      <Switch>
        <Route path="/characters/:id">
          <CharacterDetail />
        </Route>
        <Route path="/">
          <Header />
          <CharacterList />
        </Route>
      </Switch>
    </>
  );
}

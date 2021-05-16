import { FC } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import MainPage from './components/MainPage';

export const Router: FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact>
        <MainPage/>
      </Route>

      {/* <Route path='/' exact>
          <PokemonCard/>
        </Route> */}

      {/* <Route path='/' exact>
          <MyCollection/>
        </Route> */}

      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
);

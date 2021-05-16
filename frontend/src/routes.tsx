import { FC } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import MainPage from './components/MainPage';
import MyPokemons from './components/MyPokemons';
import Header from './components/Header';
import Footer from './components/Footer';

export const Router: FC = () => (
  <BrowserRouter>
    <Header/>
    <Switch>
      <Route path='/' exact>
        <MainPage/>
      </Route>

      <Route path='/myPokemons' exact>
        <MyPokemons/>
      </Route>

      <Redirect to="/" />
    </Switch>
    <Footer/>
  </BrowserRouter>
);

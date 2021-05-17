import React, { FC } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import MainPage from './components/MainPage';
import MyPokemons from './components/MyPokemons';
import Header from './components/Header';
import Footer from './components/Footer';
import CurrPokemon from './components/CurrPokemon';

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

      <Route
        path='/pokemon/:id'
        component={CurrPokemon}
        exact
        // render={props => <PokemonCard {...props} />}
      >
        <CurrPokemon/>
      </Route>

      <Redirect to="/" />
    </Switch>
    <Footer/>
  </BrowserRouter>
);

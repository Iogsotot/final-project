import { FC } from 'react';
import Promo from '../Promo';
import AppDescription from '../AppDescription';
import Gallery from '../Gallery';
import MyPokemons from '../MyPokemons.tsx';

const MainPage: FC = () => (
  <main>
    <Promo />
    <AppDescription />
    <Gallery />
    <MyPokemons/>
  </main>
);

export default MainPage;

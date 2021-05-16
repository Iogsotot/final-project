import { FC } from 'react';
import Promo from '../Promo';
import AppDescription from '../AppDescription';
import Gallery from '../Gallery';

const MainPage: FC = () => (
  <main>
    <Promo />
    <AppDescription />
    <Gallery />
  </main>
);

export default MainPage;

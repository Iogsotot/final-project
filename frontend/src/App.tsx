import { FC } from 'react';
// import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Router } from './routes';

const App: FC = () => {
  const any = 1;
  return (
    <div className="App">
      <Header />
      <Router />
      <Footer />
    </div>
  );
};

export default App;

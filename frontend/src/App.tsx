import { FC } from 'react';
// import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Router } from './routes';

const App: FC = () => (
  <Provider store={store}>
    <div className="App">
      <Header />
      <Router />
      <Footer />
    </div>
  </Provider>
);

export default App;

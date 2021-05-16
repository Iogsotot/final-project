import { FC } from 'react';
// import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Router } from './routes';

const App: FC = () => (
  <Provider store={store}>
    <Router>
      <Header />
      <div className="App">
        <Router />
      </div>
      <Footer />
    </Router>
  </Provider>
);

export default App;

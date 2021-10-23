import './App.css';
import { Route } from 'react-router-dom';
import Signup from './components/Signup';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Route exact path='/signup' component={Signup} />
      <Route exact path='/Footer' component={Footer} />
    </div >
  );
}

export default App;
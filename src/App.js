import './App.css';
import { Route } from 'react-router-dom';
import Signup from './components/Signup';
import Home from './components/Home'


function App() {
  return (
    <div className="App">
      <Route exact path='/signup' component={Signup} />
      <Route exact path='/' component={Home} />

    </div >
  );
}

export default App;
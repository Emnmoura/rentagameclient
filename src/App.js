import './App.css';
import { Route } from 'react-router-dom';
import Signup from './components/Signup';


function App() {
  return (
    <div className="App">
      <Route exact path='/signup' component={Signup} />

    </div >
  );
}

export default App;
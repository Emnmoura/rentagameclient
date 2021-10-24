import './App.css';
import { Route } from 'react-router-dom';
import Signup from './components/Signup';
import NavbarComp from './components/navbar/NavbarComp';
import Footer from './components/footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavbarComp/>
      <Route exact path='/signup' component={Signup} />
      <Footer/>
      
    </div >

  );
}

export default App;
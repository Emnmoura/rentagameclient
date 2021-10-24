import './App.css';
import { Route, Switch } from 'react-router-dom';
import Signup from './components/Signup';
import NavbarComp from './components/navbar/NavbarComp';
import Footer from './components/footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home'


function App() {
  return (
    <div className="App">

      <NavbarComp />
      <Switch>
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/' component={Home} />

      </Switch>



      <Footer />

    </div >

  );
}

export default App;
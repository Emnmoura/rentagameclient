import './App.css';
import { Switch, Route } from "react-router-dom";
import Signup from './components/Signup';
import NavbarComp from './components/navbar/NavbarComp';
import Footer from './components/footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import ClientesList from './components/clientes/ClientesList';
import Login from './components/Login';
import Logout from './components/Logout';



function App() {
  return (
    <div className="App">

      <NavbarComp />
      <Switch>
        
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/logout' component={Logout} />
          <Route exact path='/' component={Home} />
          <Route exact path='/cliente/all' component={ClientesList} />
          
      </Switch>



      <Footer />

    </div >

  );
}

export default App;
import './App.css';
import { Switch,Route} from "react-router-dom";
import Signup from './components/Signup';
import NavbarComp from './components/navbar/NavbarComp';
import Footer from './components/footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import ClientesList from './components/clientes/ClientesList';
import ClienteNovo from './components/clientes/ClienteNovo';


function App() {
  return (
    <div className="App">

      <NavbarComp />
      <Switch>
        
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/' component={Home} />
          <Route exact path='/clientes' component={ClientesList} />
          <Route exact path='/cliente/new' component={ClienteNovo} />
          
      </Switch>



      <Footer />

    </div >

  );
}

export default App;
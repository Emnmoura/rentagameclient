import './App.css';
import { Switch,Route} from "react-router-dom";
import Signup from './components/Signup';
import NavbarComp from './components/navbar/NavbarComp';
import Footer from './components/footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home'
import Clientes from './components/Clientes'


function App() {
  return (
    <div className="App">

      <NavbarComp />
      <Switch>
        
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/' component={Home} />
          <Route exact path='/clientes' component={Clientes} />
          
      </Switch>



      <Footer />

    </div >

  );
}

export default App;
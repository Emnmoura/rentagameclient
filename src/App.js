import './App.css';
import { Switch, Route } from "react-router-dom";
import Signup from './components/Signup';
import NavbarComp from './components/navbar/NavbarComp';
import Footer from './components/footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import ClientesList from './components/clientes/ClientesList';
import ClienteNovo from './components/clientes/ClienteNovo';
import Login from './components/Login';
import Logout from './components/Logout';
import clienteCard from './components/clientes/ClientesCard';
import ClienteView from './components/clientes/ClienteView';
import ViewGame from './components/games/ViewGame';
import NewGame from './components/games/NewGame';
import { useState } from 'react';
import OurGames from './components/games/OurGames';

function App() {

  const [user, setUser] = useState()

  return (
    <div className="App">

      <NavbarComp user={user} />
      <Switch>
        
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/' render={(props) => <Login {...props} setUser = {setUser}/>} />
          <Route exact path='/logout' component={Logout} />
          {/*<Route exact path='/' component={Home} />*/}
          
          <Route exact path='/cliente/all' component={ClientesList} />
          {/*<Route exact path='/cliente' component={} />*/}

          <Route exact path='/main' component={Home} />
          {/*<Route exact path='/clientes' component={ClientesList} />*/}
          <Route exact path='/cliente/new' component={ClienteNovo} />
          <Route exact path='/cliente/:clientId' component={ClienteView} />

          <Route exact path='/jogos/all' component={OurGames} />
          


          <Route exact path='/jogo/:id' component={ViewGame} />
          <Route exact path='/jogos/new' component={NewGame} />
          
      </Switch>
      <Footer />

    </div >

  );
}

export default App;
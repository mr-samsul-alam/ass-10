import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home'; 
import About from './components/About/About';
import Services from './components/Services/Services';
import NotFound from './components/NotFound/NotFound';
import Equipments from './components/Equipments/Equipments';

 
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
      <Header></Header>
      <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route exact path="/home">
        <Home></Home>
      </Route>
      <Route exact path="/services">
        <Services></Services>
      </Route>
      <Route exact path="/equipment">
        <Equipments></Equipments>
      </Route>
      <Route exact path="/about">
        <About></About>
      </Route>
      <Route exact path="*">
        <NotFound></NotFound>
      </Route>
      </Switch> 
      <Footer></Footer>
      </Router>

    </div>
  );
}

export default App;

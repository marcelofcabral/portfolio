import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path="/portfolio" component={About} />
        <Route path="/portfolio/projects" component={Projects} />
        <Route path="/portfolio/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

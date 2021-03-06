import './App.css';
import Home from './views/Home';
import SignUp from './views/SignUp';
import Technicien from './views/Technicien';
import User from './views/User';
import Admin from './views/Admin';
import {Route ,BrowserRouter as Router, Switch } from 'react-router-dom'



function App() {
  return (
  <Router>
      <div className="App">
    <Switch>
    <Route exact path='/' component={SignUp}/>
     <Route  path='/Login' component={Home} />
    <Route  path='/Technicien' component={Technicien}/>
    <Route  path='/User' component={User}/>
    <Route  path='/Admin' component={Admin}/>
    </Switch>
    </div>
  </Router>
  );
}

export default App;

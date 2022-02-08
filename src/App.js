import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './screens/Login'
import Signup from './screens/Signup'
import Home from './screens/Home'


function App() {
  return (
    <Router>
      <div className="app">
        
        <Switch>
          

          <Route path="/signup">
            <Signup />
          </Route>

          <Route path="/home">
            <Home />
          </Route>
          
          <Route path="/">
            <Login />
          </Route>

          

        </Switch>
      </div>
    </Router>
  );
}

export default App;
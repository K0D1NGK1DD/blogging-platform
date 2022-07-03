import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import MakePost from './components/MakePost';
import AllPost from './components/AllPost';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
        <Redirect from='/MakePost' to='/Register' />
          <Route exact path='/' component={Home}>
            <Home />
          </Route>

          <Route exact path='/Register' component={Register}>
            <Register /> 
          </Route>

          <Route exact path='/Login' component={Login}>
            <Login />
          </Route>

          <Route exact path='/MakePost' component={MakePost}>
            <MakePost />
          </Route>

          <Route exact path='/AllPost' component={AllPost}>
            <AllPost />
          </Route>

          <Route component=
            {NotFound}>

          </Route>

          

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

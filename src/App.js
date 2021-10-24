
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/HomeIs/Home';
import Services from './components/Services/Services';
import Doctors from './components/Doctors/Doctors';
import About from './components/About/About';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Singleservice from './components/Singleservice/Singleservice';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">

      <AuthProvider>
      <BrowserRouter>
      <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/services">
            <Services></Services>
          </Route>
          <PrivateRoute path="/services/:serviceId">
           <Singleservice></Singleservice>
          </PrivateRoute>
          <Route path="/doctors">
            <Doctors></Doctors>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;

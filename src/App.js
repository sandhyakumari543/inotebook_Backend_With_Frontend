import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import About from './components/About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
import UserDetail from './components/UserDetail';
// import UserForm from './components/UserForm';

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <NoteState>
        <Router>
          <div className="App">
            <Navbar />
            <Alert alert={alert} />
            <div className="container">
              <Switch>
                <Route exact path="/">
                  <Home showAlert={showAlert} />
                </Route>
                <Route exact path="/about">
                  <About />
                </Route>
                <Route exact path="/login">
                  <Login showAlert={showAlert} />
                </Route>
                <Route exact path="/signup">
                  <Signup showAlert={showAlert} />
                </Route>
                <Route exact path="/userdetails">
                  <UserDetail showAlert={showAlert} />
                </Route>
                {/* <Route exact path="/userform">
                  <UserForm  />
                </Route> */}
              </Switch>
            </div>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;

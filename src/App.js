import React from 'react';
import MainLayout from "./components/layout/MainLayout/MainLayout";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from "./components/views/Dashboard/Dashboard";
import Login from "./components/views/Login/Login";
import Waiter from "./components/views/Waiter/Waiter";
import Tables from "./components/views/Tables/Tables";
import Kitchen from "./components/views/Kitchen/Kitchen";

function App() {
  return (
    <BrowserRouter basename={'/panel'}>
    <MainLayout>
      <Switch>
      <Route exact path={`${process.env.PUBLIC_URL}/`} component={Dashboard} />
      <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login} />
      <Route exact path={`${process.env.PUBLIC_URL}/tables`} component={Tables} />
      <Route exact path={`${process.env.PUBLIC_URL}/waiter`} component={Waiter} />
      <Route exact path={`${process.env.PUBLIC_URL}/kitchen`} component={Kitchen} />
          <div className="App">
            <header className="App-header">
              <p>Edit <code>src/App.js</code> and save to reload.</p>
              <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                  </a>
                  </header>
            </div>
        </Switch>
      </MainLayout>
    </BrowserRouter>

  );
}

export default App;

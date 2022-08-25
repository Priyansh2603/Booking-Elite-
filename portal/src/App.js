import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomePage } from './pages/Home';
import { PageTwo } from './pages/Page2';
import  Login  from './components/login';
import Nav from './pages/page3';
import Search from './pages/Home/Search';
import Hello from './pages/Hello'

const App = () => (<>
  
  
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/login" exact component={Login} />
      <Route path="/page2" exact component={PageTwo} />
      <Route path="/nav" exact component={Nav}/>
      <Route path="/search" exact component={Search}/>
      <Route path="/searchplaces/:value" exact component={Hello}/>
    </Switch>
  </BrowserRouter>
  </>
);

export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Quiz from './Quiz';
import Result from './components/Result';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/quiz" component={Quiz} />
        <Route path="/result" component={Result} />
      </Switch>
    </Router>
  );
}

export default App;

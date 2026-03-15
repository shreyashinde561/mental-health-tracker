import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import Auth from './components/Auth';
import MoodTracker from './components/MoodTracker';
import ResourceList from './components/ResourceList';

const App = () => {
  const { token } = useContext(AuthContext);

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login" component={Auth} />
          <Route path="/register" component={Auth} />
          <Route path="/mood-tracker" component={MoodTracker} />
          <Route path="/resources" component={ResourceList} />
          <Route exact path="/" render={() => (token ? <MoodTracker /> : <Auth />)} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
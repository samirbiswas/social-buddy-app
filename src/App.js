import React from 'react';
import Header from './components/Header/Header';
import ErrorPage from './components/ErrorPage/ErrorPage';
import PostDetail from './components/PostDetail/PostDetail';
import Home from './components/Home/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";






function App() {
  
  return (

      <div>
        <Router>
        <Header></Header>
          <Switch >
          
          <Route path="/home">
              <Home></Home>
            </Route>

            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/post/:postId">
            <PostDetail></PostDetail>
            </Route> 

            <Route path="*">
              <ErrorPage>

              </ErrorPage>
            </Route>

          </Switch>
        </Router>

      </div>
  );
}

export default App;

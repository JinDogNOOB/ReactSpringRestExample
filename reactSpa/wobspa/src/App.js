import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {
  MainPage,
  PostDetailPage,
  UserPage,
  BoardPage,
  UserMyInfoPage,
  SpecificBoardPage
  } from './pages';

function App() {
  return (
    <div>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/user" component={UserPage} />

      <Route exact path="/user/myinfo" component={UserMyInfoPage} />

      <Route exact path="/board" component={BoardPage} />
      <Route exact path="/board/:boardNo" component={SpecificBoardPage} />
      <Route exact path="/board/:boardNo/post/:postNo" component={PostDetailPage} />

    </div>
  );
}

export default App;

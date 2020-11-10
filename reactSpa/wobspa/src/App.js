import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {
  MainPage,
  PostDetailPage,
  UserPage,
  BoardPage,
  UserMyInfoPage,
  SpecificBoardPage,
  AdminPage,
  PostWritingFormPage
  } from './pages';

function App() {
  return (
    <div>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/user" component={UserPage} />

      <Route exact path="/user/myinfo" component={UserMyInfoPage} />

      <Route exact path="/board" component={BoardPage} />
      <Route exact path="/board/:boardNo" component={SpecificBoardPage} />
      <Switch>
        <Route exact path="/board/:boardNo/post/form/:postNo" component={PostWritingFormPage} />
        <Route exact path="/board/:boardNo/post/form" component={PostWritingFormPage} />
        <Route exact path="/board/:boardNo/post/:postNo" component={PostDetailPage} />
      </Switch>
      <Route exact path="/admin" component={AdminPage} />
    </div>
  );
}

export default App;

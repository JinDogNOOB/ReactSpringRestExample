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
  PostWritingFormPage,
  PostModifingFormPage
  } from './pages';

function App() {
  //  <Route path="/" component={MainPage} /> 윗부분만 잘라내서 재활용 할수있는데 마지막에 하자
  return (
    <div>
     
      <Route exact path="/" component={MainPage} />
      <Route exact path="/user" component={UserPage} />

      <Route exact path="/user/myinfo" component={UserMyInfoPage} />

      <Route exact path="/board" component={BoardPage} />
      <Route exact path="/board/:boardNo" component={SpecificBoardPage} />
      <Switch>
        <Route exact path="/board/:boardNo/post/modform/:postNo" component={PostModifingFormPage} />
        <Route exact path="/board/:boardNo/post/addform" component={PostWritingFormPage} />
        <Route exact path="/board/:boardNo/post/:postNo" component={PostDetailPage} />
      </Switch>
      <Route exact path="/admin" component={AdminPage} />
    </div>
  );
}

export default App;

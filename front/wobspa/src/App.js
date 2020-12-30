import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  MainPage,
  PostDetailPage,
  UserPage,
  BoardPage,
  MyInfoPage,
  SpecificBoardPage,
  AdminPage,
  PostWritingFormPage,
  PostModifyingFormPage,

  Banner,
  Navigation,
  Footer,
  SignupPage,
  SigninPage,

  BUserStatus,
  BLogoNNav
} from './pages';

function App() {

  return (
    <div>
      <Route path="/" component={BUserStatus} />
      <Route path="/" component={BLogoNNav} />
      <div className="blank_line"/>

      <div className="content_container">
        <Route exact path="/" component={MainPage} />
        <Route exact path="/user" component={UserPage} />
        <Route exact path="/user/signup" component={SignupPage} />
        <Route exact path="/user/signin" component={SigninPage} />

        <Route exact path="/user/myinfo" component={MyInfoPage} />

        <Route exact path="/board" component={BoardPage} />
        <Route exact path="/board/:boardNo" component={SpecificBoardPage} />
        <Switch>
          <Route exact path="/board/:boardNo/post/modform/:postNo" component={PostModifyingFormPage} />
          <Route exact path="/board/:boardNo/post/addform" component={PostWritingFormPage} />
          <Route exact path="/board/:boardNo/post/:postNo" component={PostDetailPage} />
        </Switch>
      </div>

      <Route exact path="/admin" component={AdminPage} />

      <Route path="/" component={Footer} />
    </div>
  );
}


export default App;

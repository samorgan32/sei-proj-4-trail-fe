import './App.css';
import React, { useState } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import {
  Nav,
  ViewWalkthrough,
  Walkthrough,
  NewWalkthrough,
  WalkthroughEdit,
  LoginForm,
  SignUpForm,
  SlideEdit,
  NewSlide
} from './components'

function App() {
  const [walkthroughs, setWalkthroughs] = useState([])
  const [activeWalkthrough, setActiveWalkthrough] = useState({})
  const [view, setView] = useState({})
  const [user, setUser] = useState({ email: '', password: '', re_password: '', username: '' })
  const [activeUser, setActiveUser] = useState('')

  return (
    <main className="container">


      <Nav />
      <Switch>

        <Route
          path='/signup'
          render={(routerProps) => <SignUpForm user={user} setUser={setUser} />}
        />

        <Route exact path='/'>
          <Redirect to='/login' />
        </Route>


        <Route
          path='/login'
          render={(routerProps) => (
            <LoginForm
              user={user}
              setUser={setUser}
              setActiveUser={setActiveUser}
              activeUser={activeUser}
            />
          )}
        />

        <Route exact path='/walkthroughs'>
          <Walkthrough walkthroughs={walkthroughs} setWalkthroughs={setWalkthroughs} activeWalkthrough={activeWalkthrough} setActiveWalkthrough={setActiveWalkthrough} />
        </Route>

        <Route path='/walkthroughs/new'>
          <NewWalkthrough />
        </Route>

        <Route path='/walkthroughs/edit/:id'>
          <WalkthroughEdit walkthroughs={walkthroughs} />
        </Route>

        <Route exact path='/walkthroughs/view'>
          <ViewWalkthrough activeWalkthrough={activeWalkthrough} view={view} setView={setView} />
        </Route>

        {/* <Route exact path='/newslide'>
          <NewSlide />
        </Route> */}

      </Switch>




    </main>
  );
}

export default App;

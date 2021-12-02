import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import './App.css';
import allActions from './actions'

const App = () => {
  const counterReducer = useSelector((state) => state.counterReducer)
  console.log("**************" + counterReducer);
  const currentUserReducer = ((state) => state.currentUserReducer)
  const numberReducer = (useSelector((state) => state.multidiviReducer))

  const dispatch = useDispatch()

  const user = { name: "Abhishek..." }

  useEffect(() => {
    console.log('useEffect called...');
    dispatch(allActions.userActions.setUser(user))
  }, [])

  const handleIncrease = () => {
    console.log('handleIncrease() called...');
    dispatch(allActions.counterActions.increment())
  }

  const handleDecrease = () => {
    console.log('handleDecrease() called...');
    dispatch(allActions.counterActions.decrement())
  }

  const handleLogout = () => {
    console.log('handleLogout() called...');
    dispatch(allActions.userActions.logOut())
  }

  const handleLogin = () => {
    console.log('handleLogout() called...');
    dispatch(allActions.userActions.setUser(user))
  }

  const handleDivi = () => {
    console.log('handleDivi() called...');
    dispatch(allActions.counterActions.divide())
  }

  const handleMult = () => {
    console.log('handleLogout() called...');
    dispatch(allActions.counterActions.multiplication())
  }

  return (
    <div className="App">
      {
        currentUserReducer.loggedIn ?
          <>
            <h1>Hello { currentUserReducer.user.name }</h1>
            <button onClick={ handleLogout }>Logout</button>
          </>
          :
          <>
            <h1>Login</h1>
            <button onClick={ handleLogin }>Login</button>
          </>
      }
      <h1>Counter: { counterReducer }</h1>
      <button onClick={ handleIncrease }>
        Increase Counter
        </button> &nbsp;
      <button onClick={ handleDecrease }>
        Decrease Counter
        </button>

      <h1>Counter: { numberReducer }</h1>
      <button onClick={ handleMult }>
        Multiplication
        </button> &nbsp;
      <button onClick={ handleDivi }>
        Divide
      </button>
    </div>
  );
}

export default App;
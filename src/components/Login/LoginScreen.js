import React from 'react';

export const LoginScreen = ( {history} ) => {

  const handleLogin = () => {
    // history.push('/');  // goes back to login page
    history.replace('/');  // without url memory
  }

  return (
    <div className="container mt-5">
      <h1>  Login</h1>
        {/* <hr/> */}
        <button
          className="btn kaleBtn"
          onClick={ handleLogin }
        >
          Login
        </button>
    </div>
  )
}




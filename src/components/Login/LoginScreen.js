import React from 'react';

export const LoginScreen = ( {history} ) => {

  const handleLogin = () => {
    // history.push('/');  // goes back to login page
    history.replace('/');  // without url memory
  }

  return (
    <div className="container mt-5">

        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Login</h5>
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p className="card-text">A Reboot is the perfect way to power up your system with fresh, clean, plant-based weight. When you juice, your system is flooded with an abun-dance of vitamins, minerals and phytonutrients—plant compounds that help your body stay strong, look beautiful and fight disease. </p>
            <button
          className="btn kaleBtn"
          onClick={ handleLogin }
        >
          Login
        </button> 
          </div>
        </div>
            <blockquote className="blockquote text-center">
              <p className="mb-0">Wherever the art of medicine is loved, there is also love of humanity.</p>
            </blockquote>
              <footer className="blockquote-footer text-center"> Hippokrates </footer>

    </div>
  )
}




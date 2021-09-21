import React from 'react';
import { Link } from 'react-router-dom';

export const JuiceCard = ( {
    id,
    day,
    weight,
    category,
    juice,
    amount,
    detox,
    sleep,
    notes
}) => {

  return (

    <div className="card m-3" style={ {maxWidth: 540} }>
      <div className="row no-gutters">
        <div className="">
          <img src={`./assets/juices/${juice}.jpg`} className="card-img" alt={ juice }/>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title"> { day }</h5>
              <p className="card-text">{ juice } </p>
              <p className="card-text"> Weight: { weight } </p>

              <Link to={`./juice/${ id }`}>
                More...
              </Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

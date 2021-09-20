import React from 'react';

export const JuiceCard = ( {
    id,
    day,
    energy,
    category,
    juice2,
    amount,
    detox,
    sleep,
    notes
}) => {

  return (

    <div className="card m-3" style={ {maxWidth: 540} }>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={`./assets/juices/${juice2}.jpg`} className="card-img" alt={ juice2 }/>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title"> { juice2 }</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

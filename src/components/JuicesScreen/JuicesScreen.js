import React, { useMemo } from 'react';
import { useParams } from 'react-router';
import { Redirect } from 'react-router-dom';

import { getJuiceById } from '../../selectors/getJuiceById';

export const JuicesScreen = ( { history } ) => {

  const { dayId }= useParams();
  
  const juiceResponse = useMemo( () => getJuiceById(dayId), [dayId] );

  if (!juiceResponse) {
    return <Redirect to="/" /> 
  }

  const handleReturn = () => {

    if( history.length <= 2 ) {
      history.push('/');
    } else {
      history.goBack();
    }
  }

  const {
    id,
    day,
    weight,
    category,
    juice,
    amount,
    detox,
    sleep,
    notes
  } = juiceResponse;

  return (
    <div className="row mt-5">
      <div className="">
         <h3> { juice } </h3>
        <img 
          src={`../assets/juices/${juice}.jpg`}
          alt= {juice }
          className="img-thumbnail animate__animated animate__fadeIn"
        />
      </div>

      <div className="animate__animated animate__fadeIn">

        <ul className="list-group list-group-flush">
            <li className="list-group-item"> <b> Weight: </b> { weight } </li>
            <li className="list-group-item"> <b> Quantity: </b> { amount } </li>
            <li className="list-group-item"> <b> Detox Symptoms: </b> { detox } </li>
            <li className="list-group-item"> <b> Hours of Sleep: </b> { sleep } </li>
            <li className="list-group-item"> <b> Notes: </b> { notes } </li>
        </ul>

        <button 
          className="btn btn-outline kaleBtn mt-5"
          onClick={handleReturn}
          >
          Return
        </button>

      </div>
    </div>
  )
}

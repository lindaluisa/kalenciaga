import React from 'react';
import { useParams } from 'react-router';
import { Redirect } from 'react-router-dom';

import { getJuiceById } from '../../selectors/getJuiceById';

export const JuicesScreen = () => {

  const { dayId }= useParams();
  const juiceResponse = getJuiceById(dayId);

  if (!juiceResponse) {
    return <Redirect to="/" /> 
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
    <div>
      <h1>Juice Protcol</h1>
    </div>
  )
}

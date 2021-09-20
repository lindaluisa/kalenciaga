import React from 'react';
import { getJuicesByCategory } from '../../selectors/getJuicesByCategory';

export const JuiceList = ({ category }) => {

  const juices = getJuicesByCategory( category );

  return (
    <ul>
      {
        juices.map( juice => (
          <li key={juice.id}>
              { juice.juice2 }
          </li>
        ))
      }
    </ul>
  )
}
 
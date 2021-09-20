import React from 'react';
import { getJuicesByCategory } from '../../selectors/getJuicesByCategory';
import { JuiceCard } from './JuiceCard';

export const JuiceList = ({ category }) => {

  const juices = getJuicesByCategory( category );

  return (
    <div className="card-columns">
      {
        juices.map( juice => (
          <JuiceCard 
              key={juice.id}
              { ...juice} >
          </JuiceCard>
        ))
      }
    </div>
  )
}
 
import React, { useMemo } from 'react';
import { getJuicesByCategory } from '../../selectors/getJuicesByCategory';
import { JuiceCard } from './JuiceCard';

export const JuiceList = ({ category }) => {
  // useMemo only recomputes memoized value when one of the dependencies has changed
  const juices = useMemo( () => getJuicesByCategory(category), [category] );
  // const juices = getJuicesByCategory( category );

  return (
    <div className="card-columns animate__animated animate__fadeIn">
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
 
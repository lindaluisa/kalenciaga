import { juices } from '../data/juices';

export const getJuicesByCategory = ( category ) => {
  
  const validCategory = ['Reboot', 'Fast'];
  
  if (!validCategory.includes ( category ) ) {

    throw new Error(`Category "${ category }" is incorrect`);
  } 

  return juices.filter( juice => juice.category === category);
}


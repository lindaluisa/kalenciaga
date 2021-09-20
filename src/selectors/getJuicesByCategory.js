import { juices } from '../data/juices';

export const getJuicesByCategory = ( category ) => {
  
  const validCategory = ['Fruit Juice', 'Green Juice'];
  
  if (!validCategory.includes ( category ) ) {

    throw new Error(`Juice "${ category }" is incorrect`);
  } 

  return juices.filter( juice => juice.category === category);
}


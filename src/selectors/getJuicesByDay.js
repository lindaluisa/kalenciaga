import { juices } from '../data/juices';

export const getJuicesByDay = ( weight ) => {
  
  const validweight = ['Yes', 'No'];
  
  if (!validweight.includes ( weight ) ) {

    throw new Error(`Juice "${ weight }" is incorrect`);
  } 

  return juices.filter( juice => juice.weight === weight);
}


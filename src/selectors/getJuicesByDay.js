import { juices } from '../data/juices';

export const getJuicesByDay = ( energy ) => {
  
  const validEnergy = ['Yes', 'No'];
  
  if (!validEnergy.includes ( energy ) ) {

    throw new Error(`Juice "${ energy }" is incorrect`);
  } 

  return juices.filter( juice => juice.energy === energy);
}


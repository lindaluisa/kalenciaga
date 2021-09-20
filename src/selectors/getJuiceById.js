import { juices } from '../data/juices';

export const getJuiceById = ( id ) => {

  return juices.find( juice => juice.id === id);
} 
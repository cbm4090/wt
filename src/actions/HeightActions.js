import { HEIGHT_UPDATE } from './types';

export const heightUpdate = ({ prop, value }) => {
  return {
    type: HEIGHT_UPDATE,
    payload: { prop, value }
  };
};

export const onAdd = 

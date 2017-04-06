import { WALL_HEIGHT} from './types';

export const wallHeight = ({ prop, value }) => {
  return {
    type: WALL_HEIGHT,
    payload: { prop, value }
  };
};

export const onAdd = {{ onAdd }} => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
        dispatch({ type: WALL_UPDATE });
        Actions.mainPage({ type: 'reset' });
      });
  };
}

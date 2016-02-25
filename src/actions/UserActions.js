import dispatcher from '../dispatcher';

export function updateUser(user) {
  dispatcher.dispatch({
    type: 'UPDATE_USER',
    user
  });
}

export function deleteUser(email) {
  dispatcher.dispatch({
    type: 'DELETE_USER',
    email
  });
}

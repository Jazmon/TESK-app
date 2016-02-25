import { EventEmitter } from 'events';

import dispatcher from '../dispatcher';

class UserStore extends EventEmitter {
  constructor() {
    super();
    this.user = {
      firstName: 'Test',
      lastName: 'User',
      email: 'foo@bar.com',
      id: 1
    };
  }

  getUser() {
    return this.user;
  }

  updateUser(user) {
    this.user = user;
  }

  deleteUser(email) {
    // TODO delete
  }

  handleActions(action) {
    switch (action.type) {
      case 'UPDATE_USER':
        this.updateUser(action.user);
        break;
      case 'DELETE_USER':
        this.deleteUser(action.email);
        break;
      default:
        break;
    }
  }

}

const userStore = new UserStore;
dispatcher.register(userstore.handleActions.bind(userStore));

export default UserStore;

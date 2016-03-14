import { EventEmitter } from 'events';

class EventStore extends EventEmitter {
  constructor() {
    super();
    this.event = [
      {},
      {},
    ];
  }
}

const eventStore = new EventStore;
export default eventStore;

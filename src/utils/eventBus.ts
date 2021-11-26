interface IEvents extends Object {
  [PropName: string]: any;
}

export default class EventBus {
  events: IEvents;
  constructor() {
    this.events = {};
  }

  on(eventName: string, fn: any) {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(fn);
  }

  emit(eventName: string, data: any) {
    if (this.events.hasOwnProperty(eventName)) {
      this.events[eventName].forEach((fn: any) => {
        fn(data);
      });
    }
  }

  off(eventName: string, fn: any) {
    if (this.events.hasOwnProperty(eventName)) {
      for (let [key, value] of this.events[eventName].entries()) {
        if (this.events[eventName][key] === fn) {
          this.events[eventName].splice(key, 1);
          break;
        }
      }
    }
  }
}

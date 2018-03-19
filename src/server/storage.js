const update = require('immutability-helper');

const initial = require('./initial-state');

module.exports = class {
  constructor() {
    this.state = initial;
  }

  use(reducer) {
    const { state } = this;
    const apply = reducer(state);

    return {
      with: (...params) => (this.state = update(state, apply(...params))),
    };
  }

  get() {
    return this.state;
  }
};

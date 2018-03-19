import update from 'immutability-helper';

export const init = state => ({ id, users, boards }) =>
  update(state, {
    id: { $set: id },
    users: { $set: users },
    boards: { $set: boards },
  });

export const identify = state => details =>
  update(state, {
    users: {
      [state.id]: {
        $set: {
          id: state.id,
          scoreboard: { win: 0, draw: 0, loss: 0 },
          hosting: null,
          ...details,
        },
      },
    },
    ready: { $set: true },
  });

export const join = state => ({ id, details }) =>
  update(state, {
    users: {
      [id]: {
        $set: {
          scoreboard: { win: 0, draw: 0, loss: 0 },
          hosting: null,
          ...details,
          id,
        },
      },
    },
  });

export const create = state => ({ uuid, host, size, slots }) =>
  update(state, {
    users: {
      [host]: {
        hosting: { $set: uuid },
      },
    },
    boards: {
      [uuid]: {
        $set: {
          uuid,
          slots,
          host,
          size,
        },
      },
    },
  });

export const open = state => ({ board: { uuid, host, size, slots } }) =>
  update(state, {
    users: {
      [host]: {
        hosting: { $set: uuid },
      },
    },
    boards: {
      [uuid]: {
        $set: {
          uuid,
          slots,
          host,
          size,
        },
      },
    },
  });

export const quit = state => ({ id }) =>
  update(state, {
    users: { $unset: [id] },
    boards: {
      $unset: [state.users[id].hosting],
    },
  });

export const setSize = state => value =>
  update(state, {
    settings: {
      size: {
        current: { $set: value },
      },
    },
  });

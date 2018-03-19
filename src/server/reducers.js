const register = state => id => ({
  users: {
    [id]: { $set: { id } },
  },
});

const identify = state => ({ id, details }) => ({
  users: {
    [id]: {
      $set: {
        scoreboard: { win: 0, draw: 0, loss: 0 },
        hosting: null,
        id,
        ...details,
      },
    },
  },
});

const create = state => ({ uuid, host, size, slots }) => ({
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

const deregister = state => id => ({
  users: { $unset: [id] },
  boards: {
    $unset: [state.users[id].hosting],
  },
});

module.exports = {
  register,
  identify,
  create,
  deregister,
};

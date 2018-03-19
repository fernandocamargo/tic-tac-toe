import is from 'helpers/number/is';
import * as socket from 'helpers/socket';
import * as game from 'helpers/game';

export default {
  submit: ({
    settings: { size: { current: size } },
    id,
    create,
    history,
  }) => event => {
    const uuid = new Date().getTime();
    const board = { host: id, slots: game.create(size), uuid, size };

    return [
      event.preventDefault(),
      create(board),
      socket.get().emit('create', board),
      history.push(`/board/${uuid}`),
    ];
  },
  changeSize: ({ setSize, settings: { size: { min, max } } }) => ({
    target: { value },
  }) =>
    !value || isNaN(value) || !is(value).between(min, max) || setSize(+value),
};

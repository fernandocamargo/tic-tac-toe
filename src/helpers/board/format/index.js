import * as routes from 'routes';

export default users => board => {
  const { uuid, host, guest } = board;

  return { ...board, url: routes.board(uuid) };
};

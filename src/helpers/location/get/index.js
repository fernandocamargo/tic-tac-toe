export default ({ location: { pathname }, match: { params: { uuid } } }) => {
  switch (true) {
    case !!uuid:
      return 'board';
    case pathname === '/scoreboard':
      return 'scoreboard';
    case pathname === '/boards':
      return 'boards';
    default:
      return 'home';
  }
};

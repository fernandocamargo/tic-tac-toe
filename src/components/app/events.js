import * as socket from 'helpers/socket';
import * as profile from 'helpers/profile';

export default {
  componentDidMount() {
    const { props: { init, identify, join, open, quit } } = this;

    return Promise.all([
      socket
        .get()
        .on('init', init)
        .on('join', join)
        .on('open', open)
        .on('quit', quit),
      profile.create(),
    ]).then(
      ([client, details]) =>
        identify(details) || client.emit('identify', details),
    );
  },
  componentWillReceiveProps(props) {
    const { match: { params: { uuid } }, boards, history } = props;

    return !!uuid && !boards.hasOwnProperty(uuid) && history.push('/');
  },
};

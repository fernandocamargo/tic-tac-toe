import axios from 'axios';

import format from 'helpers/profile/format';

export default () =>
  axios.get('https://randomuser.me/api/?noinfo').then(format);

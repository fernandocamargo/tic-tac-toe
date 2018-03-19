import socket from 'socket.io-client';

import pkg from '../../../../package.json';

export const client = socket(pkg.proxy);

export default () => client;

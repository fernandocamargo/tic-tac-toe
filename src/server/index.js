const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');

const Storage = require('./storage');
const {
  register,
  identify,
  create,
  destroy,
  deregister,
} = require('./reducers');

const port = process.env.PORT || 1337;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const storage = new Storage();

server.listen(port, () => console.log(`Server listening at port ${port}`));

io.on('connection', client => {
  const { id } = client;
  const state = storage.use(register).with(id);

  return client
    .on('identify', details => {
      storage.use(identify).with({ id, details });
      client.broadcast.emit('join', { id, details });
    })
    .on('create', board => {
      storage.use(create).with(board);
      client.broadcast.emit('open', { board });
    })
    .on('disconnect', () => {
      storage.use(deregister).with(id);
      client.broadcast.emit('quit', { id });
      client.emit('destroy', { id });
    })
    .emit('init', { id, ...state });
});

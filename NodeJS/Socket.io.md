## Socket
- 
- Connection Remains open for all requests
- 




#### Socket Client
- Connect to Server from Client `const socketClient = io('serverAddress', { OPTION linke Auth })`
- `io.emit('eventName', data)` -- Emits Data to All connected Sockets
**Emit OR Broadcast event**
- `socket.broadcast.emit('eventName', data)`
**Recieve event**
- `socket.on('eventName', socket => { ... });`
- `socket.to('eventName').emit('eventName', msg);`
- Forgets about the messages sent whole socket disconnected `socket.volatile.emit('eventName', msg);`





#### Socket Server
- `const socket = require('socket')(PORT, { OPTIONS, cors: { origin: [] } });`
- `io.emit('eventName', data)` -- Emits Data to All connected Sockets
**Emit OR Broadcast event**
- `socket.broadcast.emit('eventName', data)`

**Recieve event**
- `socket.on('eventName', socket => { ... });`



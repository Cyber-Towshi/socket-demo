import express from 'express';
import minimist from 'minimist';
import debug from 'debug';

const log = debug('app');
const args = minimist(process.argv.slice(2));
const app = express();

app.get('/', (req, res) => res.send('Hello from socket-demo'));

app.listen(args.port || 3000, () => log('server started'));

// A tiny web server, used only to demo Socket.
// Each import below loads a package someone else wrote.

import express from 'express';      // web server: handles page requests
import cors from 'cors';            // lets other websites call our API
import dotenv from 'dotenv';        // loads passwords and keys from a .env file
import { format } from 'date-fns';  // formats dates and times
import { v4 as uuid } from 'uuid';  // creates unique IDs
import minimist from 'minimist';    // reads command-line options (old version with a known vulnerability)
import debug from 'debug';          // prints debug messages (4.4.2 was hijacked in Sept 2025)

dotenv.config();
const log = debug('app');
const args = minimist(process.argv.slice(2));
const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.json({ id: uuid(), time: format(new Date(), 'PPpp') });
});

app.listen(args.port || 3000, () => log('server started'));

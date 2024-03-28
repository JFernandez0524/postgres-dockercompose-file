import 'dotenv/config';
import express, { json } from 'express';
import { client } from './db.js';
const app = express();

app.use(express.json());

const PORT = process.env.EXPRESS_PORT;

app.get('/', (req, resi) => {
  client.connect().then(() => {
    client.query('SELECT NOW()', (err, res) => {
      console.log(res.rows[0]);
      resi.json(res.rows[0]);
      client.end();
    });
  });
});

app.listen(PORT, () => {
  console.log(`Express server listening on port: ${PORT}`);
});

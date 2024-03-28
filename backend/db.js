import pg from 'pg';
const { Client } = pg;

export const client = new Client({
  user: 'jose',
  host: 'localhost',
  database: 'leads',
  password: 'password',
  port: 5432,
});

const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'rews',
  password: '123456',
  port: 55432,
});

module.exports = pool;

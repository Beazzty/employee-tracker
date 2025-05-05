import dotenv from 'dotenv';
dotenv.config();

//import and require pool (node-postgres)
// we will be creating a Connection Pool. Read up on it here: https://node-postgres.com/features/pooling

import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: 5432,
  database: process.env.DB_NAME,
})

const connectToDB = async () => {
    try {
        await pool.connect();
        console.log('Connected to the database successfully');
    } catch (error) {
        console.error('Error connecting to the database:', error);
        throw error; // rethrow the error for further handling if needed
    }
    };

    export { pool, connectToDB };
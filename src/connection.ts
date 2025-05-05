import dotenv from 'dotenv';
dotenv.config();

//import and require pool (node-postgres)

import { Pool } from 'pg';

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
       console.log("Connected to the database successfully.");
    } catch (error) {
       console.error("Error connecting to the database:", error);
    }
};

    export { pool, connectToDB };
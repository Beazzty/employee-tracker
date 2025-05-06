import { Pool } from 'pg';

export const pool = new Pool({
    user: 'your_username',
    host: 'localhost',
    database: 'your_database',
    password: 'your_password',
    port: 5432,
});

export const connectToDb = async () => {
    try {
        await pool.connect();
        console.log('Connected to the database');
    } catch (err) {
        console.error('Failed to connect to the database', err);
    }
};
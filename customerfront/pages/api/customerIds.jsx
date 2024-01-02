// pages/api/customerIds.js
import pgPromise from 'pg-promise';
import dotenv from 'dotenv';

dotenv.config();

const pgp = pgPromise();

// Create a database connection
const dbConnection = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  autoLoadEntities: true,
  synchronize: true,
};

const db = pgp(dbConnection);

export default async (req, res) => {
  try {
    // Fetch customer IDs from the PostgreSQL database
    const customers = await db.any('SELECT id FROM customer'); // Adjust the query as per your database schema

    // Extract customer IDs from the fetched data
    const customerIds = customers.map((customer) => customer.id);

    res.status(200).json(customerIds);
  } catch (error) {
    console.error('Error fetching customer IDs:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



/* 
photo upload er system ta hbe ekdom CustomerProducts er moto, 
ei api theke id call hbe, shei id onujai photo upload hbe...
sokal e uthe eta age krbo, then from validation ar tailwind css krbo
5:30 te uthe

*/
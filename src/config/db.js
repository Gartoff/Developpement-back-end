import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

export const sequelize = new Sequelize(
  process.env.MARIADB_DATABASE,
  process.env.MARIADB_USER,
  process.env.MARIADB_PASSWORD,
  {
    host: process.env.MARIADB_HOST || 'localhost',
    dialect: 'mariadb',
    logging: false,
  }
);

export async function connectDB() {
  try {
    await sequelize.authenticate();
    console.log('MariaDB is connected');
  } catch (error) {
    console.error('Error: Unable to connect to MariaDB:', error);
    throw error;
  }
}
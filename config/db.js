import Sequelize from 'sequelize';
import dotenv from 'dotenv/config';
const { DB_HOST , DB_PORT , DB_NAME , DB_USER , DB_PASS } = process.env;

const db = new Sequelize(DB_NAME , DB_USER , DB_PASS , {
  host: DB_HOST,
  port: DB_PORT,
  dialect: 'mysql',
  define:{
    timestamps: false,
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  operatorAliases: false
});

export default db;
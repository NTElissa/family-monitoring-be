import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import { SwaggerTheme } from 'swagger-themes';
import session from 'express-session';
// import passport from 'passport';
import { sequelize } from './database/models/index';
import db from './database/models/index';
import router from './routes';
import combinedDocs from '../docs/index';
import cookieParser from 'cookie-parser';

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

dotenv.config();
app.get('/', (req, res) => {
    res
      .status(200)
      .send(
        `<h1 style='text-align: center; color: #CCD6F6; margin-top: 20vh; background: #F8B205; padding: 150px;'>Welcome to  Online Family Expenses Monitoring System Proj apis</h1>`,
      );
  });
  
//database connection
export const connectDB = async () => {
    try {
      // await sequelize.sync({ force: true });
      await sequelize.sync();
      console.log('🟢 Database connection established successfully');
    } catch (err) {
      console.log(`Database connection failed: ${err}`);
      process.exit(1);
    }
  };

// Swagger Docs Dark-Mode setup
const theme = new SwaggerTheme('v3');

const options = {
  explorer: true,
  customCss: theme.getBuffer('dark'),
};

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(combinedDocs, options));

app.use('/api/v1', router);

export default app;



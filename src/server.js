// Import the necessary modules
import app from './app';
import dotenv from 'dotenv';
import { connectDB } from './app';
dotenv.config();
// Start the server
const PORT = process.env.PORT ;
// app.listen(PORT, () => {
//   console.log(`📡 Server is running on: http://localhost:${PORT} ... 📡`);
// });

(async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`📡Server is running on: http://localhost:${PORT} ... 📡`);
  });
})();
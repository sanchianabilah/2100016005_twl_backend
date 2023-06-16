import express from 'express';
import mongoose from 'mongoose';
import userRouter from '../src/routes/userRouter';
import productRouter from '../src/routes/productRouter';

const app = express();
const port = 3001; // Ganti dengan port yang ingin Anda gunakan
app.use(express.json());
app.use('/users', userRouter);
app.use('/products', productRouter);

const dbUrl = 'mongodb://127.0.0.1/users';
mongoose
  .connect(dbUrl)
  .then(() => {
    console.log('Terhubung ke database MongoDB');
    app.listen(port, () => {
      console.log(`Server berjalan di http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log('Kesalahan saat terhubung ke database:', error);
  });

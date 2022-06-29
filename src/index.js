import express from 'express';
import ProductRoutes from './routes/Product.routes.js';

import cors from 'cors';

import dotenv from 'dotenv';

import fileUpload from "express-fileupload";

dotenv.config();

const app = express();


//midlewares
app.use(express.json());
app.use(cors())

app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: 'src/temp'
  }))


//rutas de la app
app.use("/api/products", ProductRoutes);
//base de datos
import './database.js'


app.listen(process.env.port, () => {
    console.log('Server started on port', process.env.PORT);
})



export default app;
import express from 'express';
import ProductRoutes from './routes/Product.routes';

import cors from 'cors';

import dotenv from 'dotenv';



dotenv.config();

const app = express();


//midlewares
app.use(express.json());
app.use(cors())


//rutas de la app
app.use("/api/products", ProductRoutes);
//base de datos
import './database.js'


app.listen(process.env.port, () => {
    console.log('Server started on port', process.env.PORT);
})



export default app;
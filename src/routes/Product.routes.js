import {Router} from 'express';

import {getProducts, createProduct, editProduct, deleteProduct, getProduct} from '../controllers/Product.controller';
import fileUpload from "express-fileupload";

const router = Router()

//rutas de la aplicacion
router.get('/', getProducts)
router.post('/newproduct', fileUpload({
    useTempFiles: true,
    tempFileDir: 'src/temp'
}), createProduct)
router.delete('/deleteproduct/:id', deleteProduct)
router.put('/editproduct/:id', editProduct)
router.get('/getproduct/:id', getProduct)





export default router;
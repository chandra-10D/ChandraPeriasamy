import express from 'express';
import { ProductController } from '../controller/productController';

let productController: ProductController;

export class ProductRoute {
    constructor() {
        productController = new ProductController();
    }
    productRoutes(app: express.Application) {
        app.post('/create', productController.createProduct);
        app.get('/getall', productController.getAllProducts);
        app.get('/get/:getproductId', productController.getProduct);
        app.put('/update/:getproductId', productController.updateProduct);
        app.delete('/delete/:getproductId', productController.deleteProduct);
    }
    
}
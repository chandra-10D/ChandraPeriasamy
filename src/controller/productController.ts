import { Request, Response } from 'express';
import { ProductService } from '../service/productService';
import { ProductModel } from '../model/ProductModel';

let productService: ProductService;

export class ProductController {
    constructor() {
        productService = new ProductService();
    }
    async createProduct(req: Request, res: Response) {
        try {
            const product: ProductModel = await productService.createProduct(req.body);
            res.status(200).send(product);
        } catch (err) {
            if (err && err._message && err._message === 'Stock validation failed') {
                res.status(400).send(err);
            } else {
                res.status(500).send(err);
            }
        }
    }
    async getProduct(req: Request, res: Response) {
        try{
            const product: ProductModel = await productService.getProduct(req.params.id);
            res.status(200).send(product);
        } catch (err) {
                res.status(400).send(err);
            }
        }

    async getAllProducts(req: Request, res: Response) {
        const product: ProductModel = await productService.getAllProducts();
        res.status(200).send(product);
        console.log ("successfully fetched all product details");
    }

    async updateProduct(req: Request, res: Response) {
        const product: ProductModel = await productService.updateProduct(req.params.id, req.body);
        res.status(200).send(product);
        console.log ("successfully updated all product details");
    }

    async deleteProduct(req: Request, res: Response) {
        await productService.deleteProduct(req.params.id);
        res.status(200).send({
            status: "Succesfully deleted!"
        });
    }
}
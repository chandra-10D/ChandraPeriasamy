import { ProductDao } from "../dao/productDao";
import { ProductModel } from "../model/ProductModel";

let productDao: ProductDao;
export class ProductService {
    constructor() {
        productDao = new ProductDao();
    }
    async createProduct(body: ProductModel) {
        return await productDao.save(body);
    }
    async getProduct(id: String) {
        return await productDao.getProduct(id);
    }
    async getAllProducts() {
        return await productDao.getAllProducts();
    }

    async updateProduct(id: String, body:ProductModel){
        return await productDao.updateProduct(id,body);
    }

    async deleteProduct(id: String) {
        await productDao.deleteProduct(id);
    }
}
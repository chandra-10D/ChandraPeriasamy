import mongoose from 'mongoose';
import { productSchema, ProductModel } from '../model/ProductModel';

const ProductModel = mongoose.model('Product', productSchema);
export class ProductDao {
    async save(body: ProductModel) {
        const product = new ProductModel(body);
        const productDetails = product.save();
        console.log('PRODUCT---->>>', product);
        return productDetails;
    }

    async getProduct(id: String) {
        return ProductModel.findOne(id);
    }

    async getAllProducts() {
        return await ProductModel.find();
    }

    async updateProduct(id: String, body :ProductModel) {
        return await ProductModel.findOneAndUpdate(id,body);
    }  

    async deleteProduct(id: String) {
        console.log("Deleted id",id)
        await ProductModel.findOneAndRemove(id);
     
    }
}
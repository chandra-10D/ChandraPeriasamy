
import mongoose from 'mongoose';

const { Schema } = mongoose;

export interface ProductModel {
    _id: String,
    productName: String,
    productCode: String,
    productDescription: String,
    prodRating: Number,
    createdAt: Date,
    updatedAt: Date,
    __v: Number
}

export const productSchema = new Schema({
    productName: { type: String, required: true }, 
    productCode: { type: String, required: true },
    productDescription: { type: String, required: true },
    prodRating: { type: String, required: true },
    
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});
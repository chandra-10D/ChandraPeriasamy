import mongoose from 'mongoose';

export class MongoConfig {
    constructor() {
        mongoose.connect('mongodb://127.0.0.1:27017:/ProductInfo', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
            console.log('DB Connnected');
        }).catch( () => {
            console.log('Err on connection');
        });
    }
}
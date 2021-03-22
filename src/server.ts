import cors from 'cors';
import express from 'express';
import { MongoConfig } from './config/MongoConfig'
import { ProductRoute } from './routes/productRoute';
import bodyParser from 'body-parser';

const app: express.Application = express();
const product = new ProductRoute();
app.use(cors());
app.use(bodyParser.json());
new MongoConfig();
app.get('/', (req, res) => {
    res.send({status: "Success"});
});
product.productRoutes(app);
app.listen(3000, () => {
    console.log('App is listening on port 3000!');
});
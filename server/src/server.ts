import express from 'express';
import cors from 'cors';
import path from 'path'
import routes from './routes';
import { errors } from 'celebrate';

const app = express();

app.use(cors()); //define quais urls podem acessar a API
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

app.use(errors());

app.listen(3333);
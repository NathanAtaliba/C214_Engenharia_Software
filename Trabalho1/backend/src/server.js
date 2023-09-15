import express from 'express';
import routes from './routes.js';
import connectionDB from '../database/db.js';
import cors from 'cors';

const app = express();
const port = 3000;


app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5500'); 
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
app.use(cors());
app.use(routes);
app.listen(port,()=>{
    try{
    connectionDB();
    console.log(`Server listen at port ${port}`);
    }catch(error){
        console.log('Ocorreu um erro: ', error);
    }
})
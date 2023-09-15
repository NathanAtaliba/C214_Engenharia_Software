import express from 'express';
import routes from './routes.js';
import connectionDB from '../database/db.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use(routes);


app.listen(port,()=>{
    try{
    connectionDB();
    console.log(`Server listen at port ${port}`);
    }catch(error){
        console.log('Ocorreu um erro: ', error);
    }
})
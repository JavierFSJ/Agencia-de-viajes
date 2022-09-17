import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';
import dotenv from 'dotenv';

const app = express();

dotenv.config();
//
db.authenticate()
  .then(()=> console.log('Conectada'))
  .catch(error => console.log(error));

const port = process.env.PORT || 4000;

app.use( (req , res , next)=> {
  const year = new Date();
  res.locals.actualAnio = year.getFullYear();
  res.locals.nombreSitio = "Agencia de viajes";
  return next();
});

//body parser
app.use(express.urlencoded({extended: true}));

//Habilatar pug
app.set('view engine' , 'pug');
//Agregar route
app.use('/' , router);
//definir public
app.use(express.static('public'));

//Obtener el año actual


app.listen(port, () => {
  console.log(`El servidor esta funcionando en el puerto ${port}`);
});

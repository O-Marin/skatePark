import express from 'express';
import router from './router/router.js';
process.loadEnvFile();
import path from 'path';
import {engine} from 'express-handlebars';
import fileUpload from 'express-fileupload'

const __dirname = import.meta.dirname;

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'hbs');
//sete las direcciones de la vista donde se buscara
app.set('views', __dirname + '/views');
app.engine('hbs', engine({
    extname: 'hbs' 
}));

//middleware
app.use(express.static(path.join(__dirname,'assets')));
app.use(express.static(path.join(__dirname,'views')));
app.use('/bootstrap', express.static('node_modules/bootstrap/dist/css'))
app.use(express.json());
app.use('/', router);
app.use(
    fileUpload({
      limits: 5000000,
      abortOnLimit: true,
      responseOnLimit: "El tamaño de la imagen supera el límite permitido",
    })
  );
  app.use(express.urlencoded({ extended: false }));

app.listen(PORT, ()=> console.log(`Servidor conectado a puerto: ${PORT}`));
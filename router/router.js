import express from 'express';

import homeControl from '../controllers/home.js';
import loginControl from '../controllers/login.js';
import {adminControl,adminEditSkaterControl} from '../controllers/admin.js';
import perfilControl from '../controllers/perfil.js';
import registroControl from '../controllers/registro.js';
import { getSkaterControl,addSkaterControl,getLoginControl,verifyTokenControl,deleteSkaterControl, editSkaterControl } from '../controllers/skaters.js';

const router = express.Router();

router.get("/", getSkaterControl);
router.get("/registro", registroControl);

//rutas skaters
router.post("/skaters", addSkaterControl);
router.put('/skaters',editSkaterControl);
router.delete('/skaters/:id', deleteSkaterControl);

//rutas login
router.get("/login", loginControl);
router.post("/login", getLoginControl);


//rutas Perfil
router.get("/Perfil",verifyTokenControl);

//router.get('/skaters',getSkaterControl)

//ruta admin
router.get("/admin",adminControl);
router.put("/skaters/status/:id",adminEditSkaterControl)


export default router
import express from 'express';

import homeControl from '../controllers/home.js';
import loginControl from '../controllers/login.js';
import adminControl from '../controllers/admin.js';
import perfilControl from '../controllers/perfil.js';
import registroControl from '../controllers/registro.js';
import { getSkaterControl,addSkaterControl,getLoginControl,verifyTokenControl,deleteSkaterControl, editSkaterControl } from '../controllers/skaters.js';

const router = express.Router();

router.get("/", getSkaterControl);
router.get("/registro", registroControl);
router.post("/skaters", addSkaterControl);
router.put('/skaters',editSkaterControl);
router.delete('/skaters/:id', deleteSkaterControl);
router.get("/login", loginControl);
router.post("/login", getLoginControl);


//rutas Perfil
router.get("/Perfil",verifyTokenControl);

//router.get('/skaters',getSkaterControl)


export default router
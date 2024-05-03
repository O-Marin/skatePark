import path from "path";
import {
  addSkaterQuery,
  getSkatersQuery,
  getSkaterQuery,
  deleteSkaterQuery,
} from "../queries/consultasSkater.js";
import jwt from "jsonwebtoken";
const __dirname = path.resolve();

const addSkaterControl = async (req, res) => {
  const { email, nombre, password, anos_experiencia, especialidad } = req.body;
  const skater = { email, nombre, password, anos_experiencia, especialidad };
  const { files } = req;
  const { foto } = files;
  const { name } = foto;
  const pathPhoto = `/img/${name}`;
  foto.mv(`${__dirname}/public${pathPhoto}`, async (err) => {
    try {
      if (err) throw err;
      skater.foto = pathPhoto;
      await addSkaterQuery(skater);
      res.status(201).redirect("/login");
    } catch (error) {
      res.status(500).send(error.message);
    }
  });
};

const getSkaterControl = async (req, res) => {
  const skaters = await getSkatersQuery();
  res.render("Home", { skaters });
};

const getLoginControl = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await getSkaterQuery(email, password);
    //token

    const secretKey = process.env.SECRET_KEY;

    const token = jwt.sign(result, secretKey);

    res.status(200).send(token);
  } catch (error) {
    res.status(500).send("algo salio mal " + error.message);
  }
};

const verifyTokenControl = async (req, res) => {
  const token = req.query.token;
  jwt.verify(token, process.env.SECRET_KEY, (err, skater) => {
    if (err) {
      console.log(err);
    }
    res.render("Perfil", { skater });
  });
};

const deleteSkaterControl = async (req, res) => {
  try {
    console.log(req.params);
    const id = req.params.id;

    await deleteSkaterQuery(id);

    res.status(200).send("skater destruido");
  } catch (error) {
    res.status(500).send(error);
  }
};

const editSkaterControl = async (req, res) => {
  try {
    const {skater} = req.body;
    console.log(skater)
  } catch (error) {

  }
};

export {
  addSkaterControl,
  getSkaterControl,
  getLoginControl,
  verifyTokenControl,
  deleteSkaterControl,
  editSkaterControl
};

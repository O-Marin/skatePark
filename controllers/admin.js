import editSkaterStatus from "../queries/consultaAdmin.js";
import { getSkatersQuery } from "../queries/consultasSkater.js";


const adminControl = async (reg, res) => {
  const skaters = await getSkatersQuery();
  console.log(skaters);
  res.render("Admin", { skaters });
};

const adminEditSkaterControl = async (req, res) => {
  try {
    const id = req.params.id;
    const {estado} = req.body
    
    const result = await editSkaterStatus(id,estado);

    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

export { adminControl, adminEditSkaterControl };

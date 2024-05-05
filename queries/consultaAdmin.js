import pool from "../config/db.js";

const editSkaterStatus = async (id,estado) => {
    console.log(`id en queries ${id}`)
    const editarSkater = {
        text:`update skaters set estado = $2 where id = $1 returning *`,
        values:[id,estado],
    }

    
    try {
        const result = await pool.query(editarSkater);
        return result.rows[0]
    } catch (error) {
        console.log(error)
    }
}



export default editSkaterStatus;
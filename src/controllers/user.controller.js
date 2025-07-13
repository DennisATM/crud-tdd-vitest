import { User } from "../models/user.model.js";

export const createUser = async (req, res)=>{
    try {
        const user = await User.create(req.body);
        res.status(201).json({
            message:'Usuario creado con éxito',
            status: 201,
            data:user,
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message:'Error al crear Usuario',
            status:500,
            data:null
        })
    }
}

export const getUserById= async (req, res) =>{

}
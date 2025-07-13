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

export const getUserById = async (req, res) =>{
    try {
        const userId = Number(req.params.id);
        
        const user = await User.findByPk(Number(userId));

        res.status(200).json({
            message: 'Usuario obtenido con éxito',
            status:200,
            data: user
        });

    } catch (error) {
        res.status(500).json({
            message:'Error al obtener el usuario',
            status:500,
            data: null
        })
    }
}

export const updateUser = async (req, res) => {
    try {
        const idUser = Number(req.params.id);

        const updateData = req.body;

        const user = await User.update(updateData, {
            where: { id : idUser}
        })

        res.status(200).json({
            message: "Usuario actualizado con éxito",
            status: 200,
        });

    } catch (error) {

        res.status(404).json({
            message: "Usuario no encontrado",
            status: 404,
            data: null,
        });
    }
}

export const deleteUser = async (req, res) => {
  try {
    const userId = Number(req.params.id);

    const deleted = await User.destroy({
      where: { id: userId }
    });

    if (deleted === 1) {
      return res.status(200).json({
        message: 'Usuario eliminado con éxito',
        status: 200
      });
    }

    res.status(404).json({
      message: 'Usuario no encontrado',
      status: 404
    });

  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      message: 'Error al eliminar Usuario',
      status: 501
    });
  }
};
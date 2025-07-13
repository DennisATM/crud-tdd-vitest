import { config } from "../config/env.config.js";
import { dbConnect } from "./dbConnection.js";

const {port} = config;

export const serverInit =  async (app)=>{
    try {
        console.log('Verificando conexion a la DB');
        await dbConnect();

        app.listen(port, ()=>{
            console.log(`Iniciamos el servidor en el puerto ${port} 😁`);
        })
    } catch (error) {
        console.error('Error al iniciar el servidor', error);
    }
}
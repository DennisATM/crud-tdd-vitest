import { dbConfig } from "../config/db.config.js";
import { Model, DataTypes, UUID } from "sequelize";

export class User extends Model{}

export const initUser = () => {
    User.init ({
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey:true
        },
        firstName : {
            type: DataTypes.STRING(100),
            allowNull: false,
            validate:{
                notEmpty:{msg: 'En dato nombre no puede estar vacío'},
                len:{
                    args:[2,100],
                    msg:['La longitud del nombre debe ser mayo a 1 y menor a 100'],
                },
            }
        },
        lastName:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty: {msg:'Los Apellidos no pueden ser un dato vacío'},
                len:{
                    args:[4,100],
                    msg:['Los apellidos deben contener entre 5 y 100 caracteres']
                },
            }
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:{msg:'El correo electrónico ingresado ya está en uso'},
            validate: {
                notEmpty: {msg:'El email no debe ser un dato vacío'},
                isEmail:{msg:'El correo electrónico ingresado no es válido'}
            }
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false
        }
    },{
        sequelize:dbConfig,
        modelName:'User',
        tableName:'users',
        timestamps:true
    })
}
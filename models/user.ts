import { Schema,model } from "mongoose";
import {Enum_Rol,Enum_EstadoUsuario} from './enums';


interface User{
    correo:string;
    identificacion: string;
    nombre:string;
    apellido:string;
    rol:Enum_Rol;
    estado:Enum_EstadoUsuario;
}
// string con s minuscula es de tp y con S con mongoose

const userSchema = new Schema<User>({
    correo:{
        type:String,
        requied:true,
        validate:{
            validator: async (email)=>{
                if(email.includes("@") && email.includes(".")){
                    return true;
                }else{
                    return false;
                }
            },
            message: "correo no valido ",
        },
    },
    identificacion:{
        type:String,
        require:true,
        unique:true,
    },
    nombre:{
        type:String,
        require:true,
    },
    apellido:{
        type:String,
        require:true,
    },
    rol:{
        type:String,
        require:true,
        enum:Enum_Rol,
    },
    estado:{
        type:String,
        enum:Enum_EstadoUsuario,
        default: Enum_EstadoUsuario.PENDIENTE,
    }
}
);
const userModel = model("user",userSchema);
export {userModel};
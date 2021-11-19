import { Schema,model } from "mongoose";
import {Enum_rol,Enum_estadoUsuario} from './enums';


interface User{
    correo:string;
    identificacion: string;
    nombre:string;
    apellido:string;
    rol:Enum_rol;
    estado:Enum_estadoUsuario;
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
        enum:Enum_rol,
    },
    estado:{
        type:String,
        enum:Enum_estadoUsuario,
        default: Enum_estadoUsuario.pendiente,
    }
}
);
const userModel = model("user",userSchema);
export {userModel};
import { Schema,model, SchemaTypes } from "mongoose";
import {Enum_FaseProyecto,Enum_EstadoProyecto, Enum_EstadoUsuario} from './enums';
import { projectModel } from "./projects";
import {userModel} from "./user";


interface solicitud{
    proyecto : Schema.Types.ObjectId; 
    estudiante : Schema.Types.ObjectId;
    estado : Enum_EstadoUsuario;
}


const solicitudSchema = new Schema <solicitud>({
proyecto:{type:Schema.Types.ObjectId,ref:projectModel},
estudiante : {type : Schema.Types.ObjectId ,ref:userModel},
estado : {type:String ,enum : Enum_EstadoUsuario ,default: Enum_EstadoUsuario.PENDIENTE }
})

const solicitudModel = model("solicitud",solicitudSchema,"solicitudes")
export {solicitudModel}
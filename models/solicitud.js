import mongoose from 'mongoose';
//import {Enum_FaseProyecto,Enum_EstadoProyecto, Enum_EstadoUsuario} from './enums';
import { projectModel } from "./projects.js";
import {userModel} from "./user.js";
const { Schema, model } = mongoose;

//interface solicitud{
    //proyecto : Schema.Types.ObjectId; 
    //estudiante : Schema.Types.ObjectId;
    //estado : Enum_EstadoUsuario;
//}


const solicitudSchema = new mongoose.Schema({
proyecto:{type:Schema.Types.ObjectId,ref:projectModel},
estudiante : {type : Schema.Types.ObjectId ,ref:userModel},
estado : {type:String ,enum : ['ACEPTADA', 'RECHAZADA', 'PENDIENTE'] ,default: 'PENDIENTE' }
})

const solicitudModel = model("solicitud",solicitudSchema,"solicitudes")
export {solicitudModel}
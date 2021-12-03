import mongoose from 'mongoose';
import {userModel} from "./user.js";
import {projectModel} from "./projects.js"
//import {Enum_FaseProyecto,Enum_EstadoProyecto, Enum_EstadoUsuario} from './enums';
const{ Schema, model}= mongoose;
//interface solicitud{
    //proyecto : Schema.Types.ObjectId; 
    //estudiante : Schema.Types.ObjectId;
    //estado : Enum_EstadoUsuario;
//}

const solicitudSchema = new Schema({
    estado: {
      type: String,
      enum: ['ACEPTADA', 'RECHAZADA', 'PENDIENTE'],
      default: 'PENDIENTE',
      required: true,
    },
    fechaIngreso: {
      type: Date,
      required: false,
    },
    fechaEgreso: {
      type: Date,
      required: false,
    },
    proyecto: {
      type: Schema.Types.ObjectId,
      ref: projectModel,
      required: true,
    },
    estudiante: {
      type: Schema.Types.ObjectId,
      ref: userModel,
      required: true,
    },
  });
  
  const solicitudModel = model('solicitud', solicitudSchema);
  
  export { solicitudModel };
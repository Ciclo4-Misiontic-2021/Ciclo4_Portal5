import mongoose from 'mongoose';
const { Schema, model } = mongoose;
//import {Enum_FaseProyecto,Enum_EstadoProyecto} from './enums.js';
import {userModel} from "./user.js";


//interface project{
   // nombre: string;
   // presupuesto: number;
   // fechaInicio : Date;
   // fechaFin : Date;
   // estado : Enum_EstadoProyecto;
   // fase : Enum_FaseProyecto;
   // lider:Schema.Types.ObjectId;
   // objetivosGenerales: string,
   // objetivosEspecificos:string
//}
const projectSchema = new mongoose.Schema({
nombre:{type:String,required:true,unique:true,},
presupuesto:{type:Number,required:true,},
fechaInicio:{type:Date,required:true,},
fechaFin:{type:Date,required:true,},
estado:{type:String,Enum: ['ACTIVO', 'INACTIVO'], default: 'INACTIVO',},
fase:{type:String,Enum:['INICIADO', 'DESARROLLO', 'TERMINADO', 'NULO'],default:'NULO'},
lider:{type: Schema.Types.ObjectId,ref: userModel,},
objetivosGenerales:{type:String ,default : " "},
objetivosEspecificos:{type:String ,default : " "},
apruebaCreacion:{type: Boolean, default: false},
})
const projectModel = model('proyecto',projectSchema)

export {projectModel}
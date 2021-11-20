import { Schema,model } from "mongoose";
import {Enum_FaseProjecto,Enum_EstadoProjecto} from './enums';
import {userModel} from "./user";
interface project{
    nombre: string;
    presupuesto: number;
    fechaInicio : Date;
    fechaFin : Date;
    estado : Enum_EstadoProjecto;
    fase : Enum_FaseProjecto;
    lider:Schema.Types.ObjectId;
    objetivosGenerales: string,
    objetivosEspecificos:string
}
const projectSchema = new Schema<project>({
nombre:{type:String,required:true,unique:true,},
presupuesto:{type:Number,required:true,},
fechaInicio:{type:Date,required:true,},
fechaFin:{type:Date,required:true,},
estado:{type:String,Enum:Enum_EstadoProjecto,default:Enum_EstadoProjecto.inactivo,},
fase:{type:String,Enum:Enum_FaseProjecto,default:Enum_FaseProjecto.nul},
lider:{type: Schema.Types.ObjectId,ref: userModel,},
objetivosGenerales:{type:String ,default : " "},
objetivosEspecificos:{type:String ,default : " "}
})
const projectModel = model('proyecto',projectSchema)

export {projectModel}
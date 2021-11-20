import { Schema,model } from "mongoose";
import {Enum_FaseProyecto,Enum_EstadoProyecto} from './enums';
import {userModel} from "./user";
interface project{
    nombre: string;
    presupuesto: number;
    fechaInicio : Date;
    fechaFin : Date;
    estado : Enum_EstadoProyecto;
    fase : Enum_FaseProyecto;
    lider:Schema.Types.ObjectId;
    objetivosGenerales: string,
    objetivosEspecificos:string
}
const projectSchema = new Schema<project>({
nombre:{type:String,required:true,unique:true,},
presupuesto:{type:Number,required:true,},
fechaInicio:{type:Date,required:true,},
fechaFin:{type:Date,required:true,},
estado:{type:String,Enum:Enum_EstadoProyecto,default:Enum_EstadoProyecto.INACTIVO,},
fase:{type:String,Enum:Enum_FaseProyecto,default:Enum_FaseProyecto.nul},
lider:{type: Schema.Types.ObjectId,ref: userModel,},
objetivosGenerales:{type:String ,default : " "},
objetivosEspecificos:{type:String ,default : " "}
})
const projectModel = model('proyecto',projectSchema)

export {projectModel}
import { Schema,model } from "mongoose";
import {Enum_FaseProjecto,Enum_estadoProjecto} from './enums';
import { objetiveModel } from "./objetive";
import {userModel} from "./user";
interface project{
    nombre: string;
    presupuesto: number;
    fechaInicio : Date;
    fechaFin : Date;
    estado : Enum_estadoProjecto;
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
estado:{type:String,Enum:Enum_estadoProjecto,default:Enum_estadoProjecto.inactivo,},
fase:{type:String,Enum:Enum_FaseProjecto,default:Enum_FaseProjecto.nul},
lider:{type: Schema.Types.ObjectId,ref: userModel,},
objetivosGenerales:{type:String ,default : " "},
objetivosEspecificos:{type:String ,default : " "}
})
const projectModel = model('proyecto',projectSchema)

export {projectModel}
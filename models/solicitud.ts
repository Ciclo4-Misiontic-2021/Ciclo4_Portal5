import { Schema,model, SchemaTypes } from "mongoose";
import { sortAndDeduplicateDiagnostics } from "typescript";
import {Enum_FaseProjecto,Enum_estadoProjecto, Enum_estadoUsuario} from './enums';
import { objetiveModel } from "./objetive";
import { projectModel } from "./projects";
import {userModel} from "./user";


interface solicitud{
    proyecto : Schema.Types.ObjectId; 
    estudiante : Schema.Types.ObjectId;
    estado : Enum_estadoUsuario;
}


const solicitudSchema = new Schema <solicitud>({
proyecto:{type:Schema.Types.ObjectId,ref:projectModel},
estudiante : {type : Schema.Types.ObjectId ,ref:userModel},
estado : {type:String ,enum : Enum_estadoUsuario ,default: Enum_estadoUsuario.pendiente }
})

const solicitudModel = model("solicitud",solicitudSchema,"solicitudes")
export {solicitudModel}
import { model, Schema } from 'mongoose';
import { projectModel } from "./projects";
import {userModel} from "./user";

interface avance{
    proyecto : Schema.Types.ObjectId,
    estudiante : Schema.Types.ObjectId,
    descripcion: string,
    observaciones : string,
    fechaAvance : Date,
    fechaObservacion:Date,
}

const avanceSchema  = new Schema<avance>({
    proyecto :{type:Schema.Types.ObjectId,ref:projectModel},
    estudiante : {type:Schema.Types.ObjectId,ref:userModel},
    descripcion:{type:String , default : " "},
    observaciones:{type:String , default : " "},
    fechaAvance: {type:Date},
    fechaObservacion: {type:Date},
})

const avanceModel = model("avance",avanceSchema)

export {avanceModel}
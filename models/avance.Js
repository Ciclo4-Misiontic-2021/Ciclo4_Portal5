import mongoose from 'mongoose';
import { projectModel } from "./projects.js";
import {userModel} from "./user.js";
const { Schema, model } = mongoose;

//interface avance{
//    proyecto : Schema.Types.ObjectId,
//    estudiante : Schema.Types.ObjectId,
//    descripcion: string,
//    observaciones : string,
//    fechaAvance : Date,
//    fechaObservacion:Date,
//}

const avanceSchema  = new mongoose.Schema({
    proyecto :{type:Schema.Types.ObjectId,ref:projectModel},
    estudiante : {type:Schema.Types.ObjectId,ref:userModel},
    descripcion:{type:String , default : " "},
    observaciones:{type:String , default : " "},
    fechaAvance: {type:Date},
    fechaObservacion: {type:Date},
})

const avanceModel = model("avance",avanceSchema)

export {avanceModel}
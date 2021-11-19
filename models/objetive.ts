import { Schema,model } from "mongoose";
import { Enum_TipoObjetivo } from "./enums";
import { projectModel } from "./projects";
interface objetive{
descripcion : string,
tipo : Enum_TipoObjetivo;
// proyecto : Schema.Types.ObjectId;
}

const objetiveSchema = new Schema<objetive>({
descripcion:{   
    type:String,
    required:true},
tipo:{
    type : String,
    enum : Enum_TipoObjetivo,
    required: true,
},
// proyecto:{
//     type: Schema.Types.ObjectId,
//     ref : projectModel,
// },
})
const objetiveModel = model('objetivo',objetiveSchema);
export {objetiveModel}
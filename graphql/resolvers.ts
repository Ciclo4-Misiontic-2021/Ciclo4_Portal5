import { projectModel } from "../models/projects";
import { userModel } from "../models/user";

const resolvers ={
    Query    :{
    Usuarios: async (parent ,args) => {
        const usuarios = await userModel.find();
        return usuarios;
    },
    Usuario : async (parent,args) =>{
        const usuario = await userModel.findOne({_id: args._id });
        return usuario ;
    },
    Proyectos : async (parent,args) =>{
        const proyectos = await projectModel.find();
        return proyectos;
    },
    Proyecto : async (parent,args) =>{
        const proyecto = await projectModel.findOne({_id: args._id});
        return proyecto;
    },
},
    Mutation : {
        crearUsuario: async (parent,args) => {
            console.log('estoy ejecutando una creación')
            const usuarioCreado = await userModel.create({
                nombre: args.nombre,
                apellido:args.apellido,
                identificacion:args.identificacion,
                correo: args.correo,
                rol : args.rol
            });
            // verifica si se ingreso un estado y modifica el de defecto
            if ( Object.keys(args).includes('estado')){
                usuarioCreado.estado = args.estado;
             }
            return usuarioCreado;
        },
        eliminarUsuario: async (parent,args) =>{
            //elimina con id y correo
            if(Object.keys(args).includes('_id')){
            const usuarioEliminado = await userModel.findOneAndDelete({_id: args._id})
            return usuarioEliminado}
            else if (Object.keys(args).includes('correo')){
            const usuarioEliminado = await userModel.findOneAndDelete({correo: args.correo})
            return usuarioEliminado}
        },
        editarUsuario: async (parent,args) =>{
            const edicionUsuario = await userModel.findByIdAndUpdate(args._id,
            {_id:args._id,
            nombre: args.nombre,
            apellido:args.apellido,
            identificacion:args.identificacion,
            correo: args.correo,
            rol : args.rol }   
        )
        }
    },
};

export {resolvers};
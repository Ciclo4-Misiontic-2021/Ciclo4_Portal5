import { userModel } from "../models/user";

const resolvers ={
    Query    :{
    Usuarios: async (parent ,args) => {
        const usuarios = await userModel.find();
        return usuarios;
    },
},
    Mutation : {
        crearUsuario: async (parent,args) => {
            console.log('estoy ejecutando una creación')
            const usuarioCreado = await userModel.create({
                nombre: args.nombre,
                apellido:args.apellido,
                identificacion:args.estado,
                correo: args.correo,
                estado : args.estado,
                rol : args.rol
            });
            return usuarioCreado;
        },
    },
};

export {resolvers};
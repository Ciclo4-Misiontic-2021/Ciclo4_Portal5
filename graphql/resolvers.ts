import { userModel } from "../models/user";

const resolvers ={
    Query    :{
    Usuarios: async (parent ,args) => {
        const usuarios = await userModel.find();
        return usuarios;
    }
}
}
export {resolvers};
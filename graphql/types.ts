import {gql} from 'apollo-server-express';
import dotenv from 'dotenv'

dotenv.config()

const typeDefs = gql`
    enum Enum_EstadoUsuario {
        PENDIENTE
        AUTORIZADO 
        NO_AUTRIZADO
    }
    enum Enum_Rol{
    ESTUDIANTE
    LIDER
    ADMINISTRADOR 
    }
    type Usuario{
        _id : ID!
        nombre: String!
        apellido:String!
        correo : String!
        estado : Enum_EstadoUsuario!
        rol : Enum_Rol
    }

    type Query {
        Usuarios:[Usuario]
    }
    `;

export{typeDefs};
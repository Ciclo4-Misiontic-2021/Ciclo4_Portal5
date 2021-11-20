import {gql} from 'apollo-server-express';
import { Enum_estadoUsuario } from '../models/enums';
import dotenv from 'dotenv'

dotenv.config()

const typeDefs = gql`
    enum Enum_estadoUsuario {
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
        estado : Enum_estadoUsuario!
        rol : Enum_Rol
    }

    type Query {
        Usarios:[usuario]
    }
    `;

export{typeDefs};
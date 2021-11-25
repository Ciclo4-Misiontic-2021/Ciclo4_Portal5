import {gql} from 'apollo-server-express';
import dotenv from 'dotenv'

dotenv.config()

const typeDefs = gql`
    scalar Date 
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
    enum Enum_FaseProyecto {
        INICIADO
        EN_DESARROLLO 
        TERMINADO
    }
    enum Enum_EstadoProyecto {
        ACTIVO
        INACTIVO
        NULO
    }

    type Usuario{
        _id : ID!
        nombre: String!
        apellido:String!
        identificacion : String
        correo : String!
        estado : Enum_EstadoUsuario!
        rol : Enum_Rol
    }

    type Proyecto {
        _id : ID!
        nombre: String!
        presupuesto: Float!
        fechaInicio : Date!
        fechaFin: Date!
        estado : Enum_EstadoProyecto!
        fase : Enum_FaseProyecto
        lider : String!
        objetivosGenerales:String
        objetivosEspecificos:String
    }

    type Query {
        Usuarios:[Usuario]
        Usuario(_id:String!) :Usuario
        Proyectos : [Proyecto]
        Proyecto(_id:String!): Proyecto
    }
    type Mutation{
    crearUsuario(
        nombre: String!
        apellido:String!
        identificacion : String
        correo : String!
        estado : Enum_EstadoUsuario
        rol : Enum_Rol!
    ):Usuario}
    
    type Mutation{
        eliminarUsuario(_id:String!):Usuario
    }
    type Mutation{
    editarUsuario(
        _id :ID!
        nombre: String
        apellido:String
        identificacion : String
        correo : String
        estado : Enum_EstadoUsuario
        rol : Enum_Rol
    ):Usuario}

    `;

export{typeDefs};
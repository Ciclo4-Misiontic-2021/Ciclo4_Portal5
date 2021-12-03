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

    enum Enum_EstadoSolicitud {
      ACEPTADA
      RECHAZADA 
      PENDIENTE
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

    type Query {
        Usuarios:[Usuario]
        Usuario(_id:String!) :Usuario
        
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

  """
  PROYECTOS
  """
  type Proyecto {
    _id: ID
    nombre: String
    presupuesto: Int
    fechaInicio: Date
    fechaFin: Date
    estado: Enum_EstadoProyecto
    fase: Enum_FaseProyecto
    lider: Usuario
    objetivosGenerales: String
    objetivosEspecificos: String
    apruebaCreacion: Boolean
  }

  input CreaProyectoInput {
    nombre: String!
    idLider: String!
    objetivosGenerales: String!
    objetivosEspecificos: String!
    presupuesto: Int!
  }

  input ActualizaProyectoInput {
    _id: ID!
    nombre: String!
    objetivosGenerales: String
    objetivosEspecificos: String
    presupuesto: Int
  }

  input ActualizaEstadoProyectoInput {
    _id: ID!
    estado: String!
    fechaInicio: Date!
  }

  input ActualizaFaseProyectoInput {
    _id: ID!
    fase: String!
  }

  type Query {
    "Listar los proyectos existentes en la BD"
    listarProyectos: [Proyecto]
    "Consultar un proyecto específico ingresando su id"
    consultarProyecto(id: ID!): Proyecto
    "Consultar los proyectos liderados por una persona"
    consultarProyectosLider(idLider: ID!): [Proyecto]
    "Consultar los proyectos en los que está Autorizado un estudiante"
    consultarProyectosEstudiante(idEstudiante: ID!): [Proyecto]
  }

  type Mutation {
    "Crea un nuevo proyecto a partir de sus datos básicos"
    crearProyecto(input: CreaProyectoInput!): Proyecto
    "Autoriza la creación del proyecto"
    autorizaCreacionProyecto(id: ID!): Proyecto
    "Realiza la actualización de los datos básicos del proyecto"
    actualizarProyecto(input: ActualizaProyectoInput!): Proyecto
    "Realiza la actualización del estado del proyecto"
    actualizarEstadoProyecto(input: ActualizaEstadoProyectoInput!): Proyecto
    "Realiza la actualización de la fase del proyecto"
    actualizarFaseProyecto(input: ActualizaFaseProyectoInput!): Proyecto
  }

  """ AVANCE """

    type Avance {
        _id: ID!
        proyecto: Proyecto!
        estudiante: Usuario!
        descripcion: String!
        observaciones: String
        fechaAvance: Date!
        fechaObservacion: Date
    }

    type Query {  
        "Permite consultar los avances de un Proyecto indicado"
        listarAvancesProyecto(idProyecto: String!): [Avance] 

    }

    type Mutation{
        "Crear Avance Proyecto"
        crearAvanceProyecto (_idProyecto: String!, _idEstudiante: String!, descripcion: String!, fechaAvance: Date!): Avance

        "Actualizar Avance Proyecto"
        actualizarAvanceProyecto (_idAvance: String!, descripcion: String! , fechaAvance: Date!): Avance

        "Actualizar Obervación Proyecto"
        actualizarObservacionProyecto (_idAvance: String!, observaciones: String!, fechaObservacion: Date!): Avance
    }

  """ SOLICITUD"""

    type Solicitud {
      _id: ID!
      estado: Enum_EstadoSolicitud!
      fechaIngreso: Date
      fechaEgreso: Date
      proyecto: Proyecto!
      estudiante: Usuario!    
    }

    type Query {
      Solicitudes: [Solicitud]
    }

    type Mutation{
      "Permite crear una solicitud por parte de un estudiante para pertenecer a un proyecto"
      crearSolicitud(
          proyecto: String!
          estudiante:String!
          estado: Enum_EstadoSolicitud!
      ): Solicitud
      "Permite actualizar el estado de una solicitud generada por un estudiante para pertenecer a un proyecto"  
      actualizarEstadoSolicitud(
          _id: String! 
          estado:String!
          fechaInicio: Date!  
      ):Solicitud
    }

    `;

export{typeDefs};
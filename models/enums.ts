enum Enum_Rol{
    ESTUDIANTE = "ESTUDIANTE",
    LIDER = "LIDER",
    ADMINISTRADOR= "ADMINISTRADOR",
}
enum Enum_EstadoUsuario{
    PENDIENTE="PENDIENTE",
    AUTORIZADO = "AUTORIZADO",
    NO_AUTORIZADO= "NO AUTORIZADO",
}
enum Enum_EstadoProjecto{
    activo="Activo",
    inactivo = "Inactivo",
}
enum Enum_FaseProjecto{
    iniciado = "Iniciado",
    desarrollo = "En Desarrollo",
    terminado = "Terminado",
    nul = " ",

}
enum Enum_TipoObjetivo{
    general = "general",
    especifico = "especifico"
}

export {Enum_Rol,Enum_EstadoUsuario,Enum_EstadoProjecto,Enum_FaseProjecto,Enum_TipoObjetivo};
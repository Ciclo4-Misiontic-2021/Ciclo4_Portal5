enum Enum_rol{
    estudiante = "Estudiante",
    lider = "Lider",
    administrador= "Admimistrador",
}
enum Enum_estadoUsuario{
    pendiente="pendiente",
    autorizado = "Autorizado",
    no_autorizado= "no autorizado",
}
enum Enum_estadoProjecto{
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

export {Enum_rol,Enum_estadoUsuario,Enum_estadoProjecto,Enum_FaseProjecto,Enum_TipoObjetivo};
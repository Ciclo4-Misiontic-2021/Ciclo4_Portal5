import  conectarBD from './db/db';
import {userModel} from './models/user';
import { projectModel } from './models/projects';
import { avanceModel } from './models/avance';
import { solicitudModel } from './models/solicitud';
import { Enum_estadoUsuario } from './models/enums';
solicitudModel
const main = async ()=>{
    await conectarBD(); 

    await solicitudModel.create({
        proyecto : "61933ef92624068a6c651dd4",
        estudiante:"61932bc8ea438642ed930ab7",
        estado: Enum_estadoUsuario.pendiente 
    }).then((u)=> {
        console.log("avance creado",u)
    }).catch(e=>{
        console.error("error creando el avance, verifique el correo",e)
    })

    const avance = await  avanceModel.find({ descripcion : "primer proyecto"});
    console.log(avance[0].observaciones)

}   


main();


// de usuario

//crear Usuario
    // await userModel.create({
    //     nombre:"Edwer",
    //     apellido:"llanos",
    //     correo:"edw@c.com",
    //     identificacion:"1005",
    //     rol:Enum_rol.estudiante,

    // }).then((u)=> {
    //     console.log("usuario creado",u)
    // }).catch(e=>{
    //     console.error("error creando el usuario, verifique el correo",e)
    // })
    //obtener el get
    // await userModel.find().then((u)=>{
    //     console.log("usuarios",u)
    // }).catch( e =>{
    //     console.log("error usuario",e)
    // }
    // )

    //busca el primero por el criterio y el 2 {} es la modificacion
    //then , dado que funciona retorna ejecuta una funcion appenas la promesa termine
    //catch captura el errror
//Editar usuario
    // await userModel.findOneAndUpdate({correo:'dsl@c.com'},{nombre:"juan"}).then((u)=>{
    //     console.log("usuario actualizado",u)
    // }).catch(e => {
    //     console.log("eroor",e)
    // })
//eliminar usuario
    // await userModel.findOneAndDelete({correo:"gg@.com"}).then((u)=>{
    //     console.log("usuario eliminado",u)
    // }).catch(e => {
    //     console.log("eroor",e)
    // })
// // hacer busqueda usuario
//     await userModel.findOne({correo:"gg@.com"}).then((u)=>{
//         console.log("usuario encontrado",u)
//     }).catch(e => {
//         console.log("eroor",e)
//     })

//proyecto 
    // projectModel.create({
    //     nombre:"proyecto2",
    //     presupuesto:124,
    //     fechaInicio: Date.now(),
    //     fechaFin:new Date("2022/11/10"),
    //     lider:'61932bc8ea438642ed930ab7',
    //     objetivos:["61933d2a8a6319eac3f1ade2"],
    // }).then((u)=> {
    //         console.log("proyecto creado",u)
    // }).catch(e=>{
    //         console.error("error creando el usuario, verifique el correo",e)
    //     })
//buscar proyect por nombre
    // const proyecto = await projectModel.find({nombre:'proyecto1'}).populate("lider");
    // // const proyecto = await projectModel.find({nombre:'proyecto1'}).populate({'lider'});
    // console.log ("la info del lider es:",proyecto[0].lider)
    // JSON.stringify(proyecto) lo convierte en texto plano


// crear objetivo
    // const object = await objetiveModel.create({
    //     descripcion: "este es objetivo especifico1",
    //     tipo : Enum_TipoObjetivo.especifico,
    // }).then((u)=> {
    //             console.log("proyecto creado",u)
    //         }).catch(e=>{
    //             console.error("error creando el usuario, verifique el correo",e)
    //         })
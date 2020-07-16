"use strict";
/* TAREA 01*/
//// INSERTAR LIBROS
var libreria = [124, "JavaScript", "Henry Krunt",
    "Santillana", 609];
var libreria2 = [124, "OLXHISTORIA", "Kevin Krunt",
    "Molitalia", 505];
var libreria3 = [59, "Paco Yunque", "Francis Einst",
    "EditoPeru", 152];
/// LISTAR LIBROS
console.log(libreria);
console.log(libreria2);
console.log(libreria3);
//// MODIFICAR LIBROS///////
libreria2.splice(0, 5, 306, "The last Week V.1", "Alejandro Magno", "AMC-Studio", 360);
console.log(libreria2);
console.log(libreria3);
////  BUSCAR LIBRO ///////
var pos = -1;
while ((pos = libreria2.indexOf(1, pos + 1)) !== -1) {
    console.log('Este registro esta en : ${pos}');
}
//// ELIMINAR UN REGISTRO
alert("Se elimino el primer registro" + libreria);
libreria.splice(0, 5);
console.log(libreria);
console.log(libreria2);
console.log(libreria3);
///////// REPORTES ///////// 
libreria2.splice(0, 2);
console.log(libreria2);
libreria3.splice(0, 2);
console.log(libreria3);

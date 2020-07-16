/* TAREA 02*/
 //// INSERTAR PRODUCTO
 let producto = ["E01" , "Carne de Res" ,12.99 , 12 , 
 "AA01" , "Carnes Envasados"];
 let producto2 = ["F02" , "Leche Gloria" ,9.76 , 20 , 
 "BB02" , "Lacteos y Leches"];
 let producto3 = ["G01" , "Inka Cola 1Lt" ,6.99 , 30 , 
 "CC01" , "Gaseosas y Bebidas"];

 /// LISTAR PRODUCTO
  console.log(producto);
  console.log(producto2);
  console.log(producto3);
 //// MODIFICAR PRODUCTO///////
 producto2.splice(0,6 , 'A02' , "Pescados Salmon" ,  10.99 , 60
 , "DD03" , "Pescados y Mariscos");
 console.log(producto2);
 console.log(producto3);

////  BUSCAR PRODUCTO ///////
    
    let posi = -1;
    while ((posi = producto2.indexOf(1 , posi+1)) !== -1) {
        console.log('Este producto esta en : ${pos}');
     
    }

  //// ELIMINAR UN PRODUCTO
  alert("Se elimino el primer producto" + producto)
 producto.splice(0 , 6);
 console.log(producto);
 console.log(producto2);
 console.log(producto3);

 ///////// REPORTES PRODUCTO ///////// 
 producto2.splice(2, 2);
console.log(producto2);
producto3.splice(2,2);
console.log(producto3);
   
    




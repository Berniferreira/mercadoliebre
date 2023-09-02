const { Router } = require("express");

//Definiendo una variable
const controller = {
    //mostrar listado de productos
 
    index: (req,res) =>{
        res.send("index del producto");
    },
    //mostrar detalles de productos
    // show:  
    //enviar datos para agregar productos
    // create: 

}

module.exports = controller;
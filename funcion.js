//Funcion que envia un mensaje
function mensaje()
{
alert("Hola Mundo");
}
//mensaje();
//Funcion que te pide un nombre y te muestra un mensaje
function saludarnombre(){
var nombre = prompt("Ingrese tu nombre  :");
  alert("Hola "+ nombre);
}
//saludarnombre()
function factorial(){
  var num=parseInt(prompt("Ingresa un= numero"));
   var d=1;
  for(var x=1;x<=num;x++){
    d=d*x

  }
    console.log( d);  
}
factorial();

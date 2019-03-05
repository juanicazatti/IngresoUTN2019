/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
    //leo de la caja de texto superior el valor del primer operando
var num1;
var num2;
var resultado;
num1 = document.getElementById("numeroUno").value;
num2 = document.getElementById("numeroDos").value;
//convierto el valor leido que esta como string a number
num1 = parseInt(num1);
num2 = parseInt(num2);
resultado = num1 + num2;
alert ("la suma es: " + resultado);

}

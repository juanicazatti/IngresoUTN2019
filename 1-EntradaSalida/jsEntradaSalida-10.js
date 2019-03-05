/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarDescuento()
{
var importe;
var descuento;
var importeconDescuento;
parseInt(descuento);
parseInt(importeconDescuento);
importe = parseInt(document.getElementById("importe").value);
importeconDescuento = importe - ((importe * 25) / 100);
descuento = importe * 0.25;
document.getElementById("resultado").value = importeconDescuento;
alert ("el descuento es: " +descuento);

}

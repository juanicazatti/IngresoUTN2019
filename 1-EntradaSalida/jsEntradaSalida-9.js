/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
var sueldo;
var aumento;
var nuevoSueldo;
sueldo = document.getElementById("sueldo").value;
aumento = document.getElementById("resultado").value;
sueldo = parseInt(sueldo);
aumento = parseInt(aumento);
aumento = (sueldo * 10) / 100 ;
nuevoSueldo = sueldo + aumento;
alert ("su aumento es: " + aumento);
document.getElementById("resultado").value = nuevoSueldo;
	
}

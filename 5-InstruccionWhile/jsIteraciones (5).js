function Mostrar()
{

var sexo = prompt("ingrese f ó m .").toLocaleLowerCase();

while(      !(sexo == "f"|| sexo == "m")     ){
    sexo = prompt("Error. Reingrese f ó m.").toLocaleLowerCase;

}




document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN
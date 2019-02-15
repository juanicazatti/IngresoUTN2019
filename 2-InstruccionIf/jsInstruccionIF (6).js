function Mostrar() {

//tomo la edad  
var edad;
edad = parseInt(document.getElementById("edad").value);
if (edad >= 75) {
    alert("Anciano");
}
else if (edad>= 18){
    alert("Adulto");
}
else if (edad >= 13){
    alert("Adolescente");
}
else {
    alert("Niño")
}







}//FIN DE LA FUNCIÓN

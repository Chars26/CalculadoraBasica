let boton=document.getElementById("multiplicar");
let respuesta1=document.getElementById("respuesta3");

boton.addEventListener('click',realizarmul);

function realizarmul(){
    let n1=parseFloat(document.getElementById("n1").value);
    let n2=parseFloat(document.getElementById("n2").value);
    let mul=n1*n2;

    respuesta3.innerHTML=mul;
    

    
}
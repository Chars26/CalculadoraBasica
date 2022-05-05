let boton=document.getElementById("dividir");
let respuesta1=document.getElementById("respuesta4");

boton.addEventListener('click',realizardiv);

function realizardiv(){
    let n1=parseFloat(document.getElementById("n1").value);
    let n2=parseFloat(document.getElementById("n2").value);
    let div=n1/n2;

    respuesta4.innerHTML=div;
    

    
}
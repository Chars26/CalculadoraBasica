let boton=document.getElementById("restar");
let respuesta1=document.getElementById("respuesta2");

boton.addEventListener('click',realizarresta);

function realizarresta(){
    let n1=parseFloat(document.getElementById("n1").value);
    let n2=parseFloat(document.getElementById("n2").value);
    let res=n1-n2;

    respuesta2.innerHTML=res;
    

    
}
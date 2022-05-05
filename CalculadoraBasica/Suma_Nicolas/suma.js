let boton=document.getElementById("sumar");
let respuesta1=document.getElementById("respuesta1");

boton.addEventListener('click',realizarsuma);

function realizarsuma(){
    let n1=parseFloat(document.getElementById("n1").value);
    let n2=parseFloat(document.getElementById("n2").value);
    let sum=n1+n2;

    respuesta1.innerHTML=sum;
    

    
}

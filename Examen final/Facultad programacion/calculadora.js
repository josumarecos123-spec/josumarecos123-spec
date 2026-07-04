function valor(){
 let n1 = parseFloat (document.getElementById("numero").value);
 let n2 = parseFloat (document.getElementById("numero2").value);

 return{n1, n2};
}

function sumar(){
    let {n1, n2} = valor();
    document.getElementById("resultado"). value = n1+n2;
}
function restar (){
    let {n1, n2} = valor();
    document.getElementById("resultado"). value = n1-n2;
}
function multi(){
    let {n1,n2} = valor();
    document.getElementById("resultado"). value = n1*n2;

}
function dividir(){
    let {n1,n2} = valor();
    if (n2 == 0){
        alert("no se puede divir entre cero");
          return;
    }
  
    document.getElementById("resultado"). value = n1/n2;

}


import validator from "./validator.js";


//Declarando constantes a utilizar
    const divdeBancaInternet = document.querySelector("#BancaporInternet");
    const main = document.getElementById("main");
    const botonbancaInternet = document.querySelector("#botonbancaInternet");
    const sendBotton = document.getElementById("sendBotton");
    const divdeUltimaPagina = document.getElementById("resultadoBancaporInternet");
    const resultadodeIsValidT= document.getElementById("resultado-verdadero");
    const resultadodeIsValidFNumb= document.getElementById("resultado-falso-numero")
    const resultadodeIsValidF= document.getElementById("resultado-falso");
    const numeroEncriptado = document.getElementById("encriptado");
    const againCard = document.getElementById("again");
    const continuarCuenta = document.getElementById("continuarCuenta");

// Clickear el boton de Banca por Internet
    botonbancaInternet.addEventListener("click", () => {
        main.setAttribute("hidden", true);
        divdeBancaInternet.removeAttribute("hidden");
      })

// Función para enviar el número de tarjeta
    sendBotton.addEventListener("click", () => { getNumber();
     });

// Función para obetener el número de la tarjeta de crédito
    function getNumber() {
       let numberCard = document.getElementById("numCard").value;
       if (numberCard.length < 10) {
            alert("El número de tarjeta tiene que tener 10 caracteres como mínimo");
          } 
       else if (numberCard.length > 16) {
            alert("El número de tarjeta es de 16 caracteres como máximo");
          } 
       else {
            divdeBancaInternet.setAttribute("hidden","")
            divdeUltimaPagina.removeAttribute("hidden");
            
            if (validator.isValid(numberCard)){
                numeroEncriptado.innerHTML= validator.maskify(numberCard);
                resultadodeIsValidT.innerHTML="Número de Tarjeta Válido"
                continuarCuenta.removeAttribute("hidden")
                againCard.setAttribute("hidden", "")
               }
            else{
                resultadodeIsValidFNumb.textContent= numberCard
                resultadodeIsValidF.textContent= "Número de Tarjeta Inválido"
                againCard.removeAttribute("hidden")
                continuarCuenta.setAttribute("hidden", "")
               }        
          }
       return numberCard.value;
    }

// Intentar nuevamente    
   againCard.addEventListener("click", () =>{
      let numberCard = document.getElementById("numCard")
      resultadodeIsValidFNumb.textContent=""
      resultadodeIsValidF.textContent=""
      divdeUltimaPagina.setAttribute("hidden", "")
      divdeBancaInternet.removeAttribute("hidden")
      numberCard.value=""
      });

// clickear CONTINUAR A CUENTA
    continuarCuenta.addEventListener("click", ()=>{
        window.location.reload();
    })




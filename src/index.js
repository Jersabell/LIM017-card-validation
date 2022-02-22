import validator from "./validator.js";


//Declarando constantes a utilizar
    const divdeBancaInternet = document.querySelector("#BancaporInternet");
    const main = document.getElementById("main");
    const botonbancaInternet = document.querySelector("#botonbancaInternet");
    const sendBotton = document.getElementById("sendBotton");
    const divdeUltimaPagina = document.getElementById("resultadoBancaporInternet");
    const resultadodeIsValid= document.getElementById("resultado");
    const numeroEncriptado = document.getElementById("encriptado");
    const againCard = document.getElementById("again");
    const continuarCuenta = document.getElementById("continuarCuenta");
    const inicioHeader= document.getElementById("irInicio")


// Clickear el boton de Banca por Internet
    botonbancaInternet.addEventListener("click", () => {
        main.setAttribute("hidden", true);
        divdeBancaInternet.removeAttribute("hidden");
        inicioHeader.removeAttribute("hidden")
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
            divdeBancaInternet.setAttribute("hidden",true)
            divdeUltimaPagina.removeAttribute("hidden");
            
            if (validator.isValid(numberCard)){
                numeroEncriptado.innerHTML= validator.maskify(numberCard) 
                resultadodeIsValid.innerHTML = "Número de Tarjeta Válido"
                continuarCuenta.removeAttribute("hidden")
                againCard.setAttribute("hidden",false)

               }
            else{
                resultadodeIsValid.innerHTML = (numberCard + "<br>Número de tarjeta Inválido").fontcolor("#f80000")
                againCard.removeAttribute("hidden")
                continuarCuenta.setAttribute("hidden", false)
               }        
          }
       return numberCard.value;
    }

// Intentar nuevamente    
   againCard.addEventListener("click", () =>{
      let numberCard = document.getElementById("numCard")
      divdeUltimaPagina.setAttribute("hidden", true)
      divdeBancaInternet.removeAttribute("hidden")
      numberCard.value=""
      
      });

// clickear CONTINUAR A CUENTA
    continuarCuenta.addEventListener("click", ()=>{
        window.history.back();
    })




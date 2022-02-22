const validator = {
  // ...
 isValid: function (creditCardNumber){
   
     //convirtiendo a un Array
     const convertToArray = Array.from(creditCardNumber);
     console.log(convertToArray);
     
     //colocando numeros en orden inverso
     const invertArray = convertToArray.reverse();
     console.log(invertArray);

     //función para seleccionar impares (pares para Lunh)
     let impar =[]
     let par =[]
     
     function selectImpar (){      
        for (let i=0; i<invertArray.length;i++){
            if(i %2 ==0){
               par.push(Number(invertArray[i]))
            }
            else{
               impar.push(Number(invertArray[i]))
            }
        }
        return impar
      }
     selectImpar();
     console.log(impar);
     console.log(par)
 
     // Multiplicar por 2 y sumar cifras si la multiplicaión es mayor a 10.
     function operacionesDeImpares(){
        let listo1 =[]
        let listo2 = []
        for(let i=0; i<impar.length;i++){
            let multiplicar = impar[i]*2
            if (multiplicar>=10){
               let cifrasSumadas = 1 + (multiplicar%10)
                  listo1.push(cifrasSumadas);
                }
            else{
               let cifrasSinSumar= multiplicar
               listo2.push(cifrasSinSumar)
                }
          }
        let operaciones = listo1.concat(listo2);

        return operaciones
      }
     let operacionesImparesHechas= operacionesDeImpares();
     console.log(operacionesImparesHechas);
     
     // sumar todo el array y dividirlo entre 10. Si su residuo = 10, la tarjeta será valida
     const arrrayUnido = operacionesImparesHechas.concat(par);
     console.log(arrrayUnido);

     function sumaTotaldelArray(){
        let listoParaDividir = 0
        for(let i=0; i<arrrayUnido.length;i++){
            listoParaDividir+=arrrayUnido[i];
              }
        return listoParaDividir
        }
     const dividisionfinal= sumaTotaldelArray();
     console.log(dividisionfinal);

     function division(){
        if(dividisionfinal%10==0){
            return true
        }
        else{
            return false
        }
      }
     const resultado =division();
     console.log(resultado)
     return resultado
  
  },
 

 maskify: function(creditCardNumber){

  function ocultarEnMichis(){
       let numerosOcultos= []
       for (let i=0; i<creditCardNumber.length; i++){
            if (i<creditCardNumber.length-4){
               numerosOcultos.push("#");
               }
           else{
               numerosOcultos.push(creditCardNumber[i])
               }
          }
      return numerosOcultos.join("")
  }
 const verResultado = ocultarEnMichis();
 console.log(verResultado);
 return verResultado
} }  
export default validator;

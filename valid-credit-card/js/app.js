//tarjeta de crédito muestra: 5261923000001764

do{
    var cardNumber = prompt("Por favor, ingrese el número de tarjeta a validar"); // variable solicitando el número de tarjeta a validar

    if(cardNumber.length < 16 || cardNumber.length > 16){
      alert("El número de tarjeta debe contener 16 dígitos"); // condición para verificar si es el número de una tarjeta de crédito
    }
  if(cardNumber == "" ){
      alert("El número de tarjeta no debe contener espacios"); // condición para verificar que el usuario no haya agregada espacios o strings
    }

  }while(cardNumber.length < 16 || cardNumber.length > 16 || cardNumber == " "); // bucle para continuar solicitando un número de tarjeta sin espacios o strings

  function isValidCard(cardNumber){

    var reverseArr = []; // array vacío para poner en orden inverso el número de tarjeta
    var result = [];
    var validation = 0;

    for(i = 0; i < cardNumber.length; i++){ // iteración para recorrer el número de tarjeta
      reverseArr.unshift(cardNumber[i]);// método para agregar al arreglo los números de la tarjeta para que queden en orden inverso
    }

    for(j = 0; j < reverseArr.length; j++){ //iteración para recorrer el array inverso del número de tarjeta

      if(j % 2 !== 0){ // las posiciones impares corresponde a los posiciones pares de un texto normal
        var evenPosition = reverseArr[j]*2; //multiplicando las "posiciones pares" por dos

        if(evenPosition > 9){ // verificando que las "posiciones pares" sean mayores a 10
          var sumEvenPosition = 1 + (evenPosition % 10); // para sumarlas entre sí
          result.push(sumEvenPosition); // se almacenan en el array
        }else{
          result.push(evenPosition); // se almacenan las "posciones pares" que sean menores a 10
        }
      }else{
        result.push(parseInt(reverseArr[j])); // almaceno las "posiciones impares"
      }
    }

    for (k = 0; k < result.length; k++){ //iteración para obtener todos los posiciones a sumar
      validation += result[k]; // suma total del número de tarjeta
    }
    if(validation % 10 === 0){
      document.write("Su tarjeta es válida"); // mensaje impreso en pantalla en caso de que la tarjeta sea válida
    }else{
      document.write("Su tarjeta no es válida"); // mensaje impreso en pantalla en caso de que la tarjeta no sea válida
    }
  }
isValidCard(cardNumber);

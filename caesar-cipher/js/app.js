do{
  var option = prompt("¿Qué desea hacer?\n1.Cifrar\n2.Descrifar");

  if(option === "1"){
    cipher();
  }

  if(option === "2"){
    decipher();
  }

}while(option == "" || (option!="1" && option!="2")); // loop hasta que ingrese una de las dos opciones



function cipher(){

  do{
    var message = prompt("Ingrese el mensaje a cifrar"); // mensaje (string) a cifrar
    var output = ""; // variable de salida donde se almacenará el texto cifrado

    for(i = 0; i < message.length; i++){ // bucle para recorrer todo el string

      var code = message.charCodeAt(i); // variable para obtener el código Ascii a partir del indice del mensaje (string)
      var chipherUpper = ((code - 65 + 33) % 26 + 65) // fórmula propuesta para obtener el "nuevo" código Ascii
      var chipherLow = ((code - 97 + 33) % 26 + 97) // fórmula modificada para obtener minúsculas

      if(code < 65 || code > 90 && code < 97 || code > 122 || code == 32 || message == ""){ // condicional para que el mensaje no contenga números o espacios
        alert("El mensaje no debe contener espacios ni números");
        break;
      }

      if(code >= 65 && code <=90){ // si el código Ascii es de letras mayúsculas se va a aplicar la fórmula propuesta
        output += String.fromCharCode(chipherUpper); // se agrega al mensaje cifrado (que estaba vacío) el codigo Ascii que a su vez se convierte en un nuevo string
      }

      if(code >= 97 && code <=122){ // si el código Ascii es de letras minúsculas se va a aplicar la fórmula modificada
        output += String.fromCharCode(chipherLow); // se agrega al mensaje cifrado (que estaba vacío) el codigo Ascii que a su vez se convierte en un nuevo string
      }
    }
  }while(message === "" || code < 65 || code > 90 && code < 97 || code > 122 || code == 32); //bucle para que continue solicitando un mensaje válido

  return document.write("Su mensaje cifrado es: " + output); // mensaje cifrado impreso en pantalla
}



function decipher(){

  do{
    var message = prompt("Ingrese el mensaje a descifrar"); // mensaje (string) a descifrar
    var output = ""; // variable de salida donde se almacenará el mensaje descifrado

    for(i = 0; i < message.length; i++){ // bucle para recorrer todo el string

      var code = message.charCodeAt(i); // variable para obtener el código Ascii a partir del indice del mensaje (string)
      var chipherUpper = ((code - 65 - 7 + 52) % 26 + 65) // fórmula propuesta para obtener el "nuevo" código Asci
      var chipherLow = ((code - 97 - 7 + 52) % 26 + 97) // fórmula modificada para obtener minúsculas

      if(code < 65 || code > 90 && code < 97 || code > 122 || code == 32 || message == ""){ // condicional para que el mensaje no contenga números o espacios
        alert("El mensaje no debe contener espacios ni números");
        break;
      }

      if(code >= 65 && code <=90){ // si el código Ascii es de letras mayúsculas se va a aplicar la fórmula propuesta
        output += String.fromCharCode(chipherUpper); // se agrega al mensaje cifrado (que estaba vacío) el codigo Ascii que a su vez se convierte en un nuevo string
      }

      if(code >= 97 && code <=122){ // si el código Ascii es de letras minúsculas se va a aplicar la fórmula modificada
        output += String.fromCharCode(chipherLow); // se agrega al mensaje cifrado (que estaba vacío) el codigo Ascii que a su vez se convierte en un nuevo string
      }
    }
  }while(message === "" || code < 65 || code > 90 && code < 97 || code > 122 || code == 32); //bucle para que continue solicitando un mensaje válido

  return document.write("Su mensaje descifrado es: " + output); // mensaje descrifrado impreso en pantalla
}

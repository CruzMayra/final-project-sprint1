#Proyecto final sprint 1

##Caesar cipher

1. Solicitar al usuario por medio de un promt escoga una de las opciones disponibles (cifrar o descifrar mensaje). Esto se haría por medio de un do while que nos permita continuar repitiendo las opciones hasta que el usuario seleccione alguna válida.
2. Si el usuario selecciona la opción 1 se ejecuta la función cipher.
   El usuario debe de ingresar un texto a cifrar sin que este contenga números o espacios (se valida esto mediante código Ascii)para lo cual se crea un bucle con do para que continue repitiendo la petición hasta que ingrese un texto válido.
   Si el usuario ingreso un texto válido (mensaje a cifrar) utilizamos un for para recorrer este string y obtener el indice de cada elemento. Una vez obtenido el indice buscamos el codigo Ascii de este mediante el método charCodeAt y aplicamos la formula (n - 65 + 33) % 26 + 65 si el string esta escrito en mayúsculas o la fórmula (n - 97 + 33) % 26 + 97 si está escrito en minúsculas para obtener el código Ascii de la cadena por la que ese "sustituira" el string original.
   Se aplica el método String.fromCharCode() para convertir el código Ascii de la cadena que "sustituira" el string original en string.
3. Si el usuario selecciona la opción 2 se ejecuta la función decipher.
   El usuario debe de ingresar un texto a cifrar sin que este contenga números o espacios (se valida esto mediante código Ascii)para lo cual se crea un bucle con do para que continue repitiendo la petición hasta que ingrese un texto válido.
   Si el usuario ingreso un texto válido (mensaje a cifrar) utilizamos un for para recorrer este string y obtener el indice de cada elemento. Una vez obtenido el indice buscamos el codigo Ascii de este mediante el método charCodeAt y aplicamos la formula (n - 65 - 7 + 52) % 26 + 65 si el string esta escrito en mayúsculas o la fórmula (n - 97 - 7 + 52) % 26 + 97 si está escrito en minúsculas para obtener el código Ascii de la cadena por la que ese "sustituira" el string original.
   Se aplica el método String.fromCharCode() para convertir el código Ascii de la cadena que "sustituira" el string original en string.

###Diagrama de flujo

[Imagen del diagrama de flujo](https://goo.gl/8dvxTi)

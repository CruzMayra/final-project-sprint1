#Valid Credit Card

##Pseudocódigo

1. Se solicita al usuario ingrese el número de tarjeta por medio de un prompt. Este prompt se encuentra dentro de un bucle do para que este continue solicitando el número de tarjeta en caso de que se ingrese una cadena vacía o exceda el limite de carácteres.

2. Crear una función llamada isValidCard cuyo argumento es el número de tarjeta ingresado por el usuario. Dentro de esta función se ejecuta un for que itera el strig (número de tarjeta) para almacenar cada elemento (índice) en orden inverso dentro de un array vacío que se declaro con anterioridad.

3. Este array (reverseArr) lo vuelvo iterar con un for para identificiar las "posiciones pares" y "posiciones impares". Si son pares, se identifican con el operador %, se multiplican por dos. Este resultado se valida con if para verificar si son mayores a 10, en caso de ser así, se suman entre sí y se almacenan (push) junto con los resultados menores a 10 en un nuevo array (result).
Así mismo se almacenan dentro del array result las "posiciones impares".

4. Declaro una variable con valor cero (validation) donde se almacena la suma de los valores de result por medio de un for y +=

5. Valiso por medio de un if else que el valor de validation sea multiplo de 10, en caso de ser así, se imprime en pantalla el mensaje "Su tarjeta es válida". En caso de que el valor de validation no sea multiplo de 10 se imprime en pantalla el mensaje "Su tarjeta no es válida".

###Diagrama de flujo

[Imagen del diagrama de flujo](https://goo.gl/zuTjiw)

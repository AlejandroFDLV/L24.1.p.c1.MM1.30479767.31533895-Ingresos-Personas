/*ENUNCIADO
Dado el nombre y el ingreso de varias personas. Determinar e imprimir: el monto del ingreso
menor y el ingreso promedio.
Se dispone de los siguientes datos de varias personas: (nombre, ingreso) (Mary, 150),
(José, 135), (Carlos, 160), (Pedro, 75)*/

import Cl_Persona from "./Cl_Persona.js";
import Cl_Ingreso from "./Cl_Ingreso.js"

let per=new Cl_Persona()
let ing=new Cl_Ingreso()
let per1 =new Cl_Persona("Mary", 150)
let per2 =new Cl_Persona("Jose", 135)
let per3 =new Cl_Persona("Carlos", 160)
let per4 =new Cl_Persona("Pedro", 75)

ing.procesarPersona(per1)
ing.procesarPersona(per2)
ing.procesarPersona(per3)
ing.procesarPersona(per4)

let salida=document.getElementById("salida")
salida.innerHTML=`Monto del ingreso menor: ${ing.menIng()}.
<br>Promedio de ingresos: ${ing.promIng()}.`
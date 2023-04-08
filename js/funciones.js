// estrategia : buscar los botones que queremos agregarles un evento 
// los selecciona por clase para evitar tener que ir uno por uno al buscarlo por id
// selecciono los btn de numeros según clase
var botonesNum = document.getElementsByClassName('btn btn-dark');
var tresultado =  document.getElementById('resultado');
function orden(){
    const operadores =botonesOperacion;
    for (let i = 0;i < botonesOperacion.length;i++) {
        const element =botonesOperacion[i];
        if (tresultado.innerText == (element + element)){
            alert("ingrese unsolo operador");
        }
        
    }
}
//recorrer la var btnNum, accediendo a todos números 
for (let i = 0; i < botonesNum.length; i++) {
   //console.log([i]);
   //pasarle a un boton que ejecute una función dado un evento
   // se está modificando un atributo de dicho elemento del DOM 
   const element = botonesNum[i];
   // la funcion a ejecutar será una función anónima, que llama a otra función, que está enviando un valor por innerText
    element.addEventListener('click', function(){putNumber(element.innerText)});
    // se usa función anónima por que no se va a llamar hasta q alguien la ejecute
}
//(innerText es para enviar un valor entre las etiquetas a apertura y cierre)
function putNumber(valor){
    //entregale a tresultado el valor concatenado 
    tresultado.value +=valor;
}
// botones de operadores de color primary
var botonesOperacion = document.getElementsByClassName('btn btn-primary');
for (let i =0;i < botonesOperacion.length ;i++) {
  
        const element = botonesOperacion [i];
        element.addEventListener('click', function(){ putOperador(element.innerText)});
}
function putOperador(op) {
        tresultado.value += op;   
}
//botones de accion: btn de limpiar e igual de color secundary
var botonesAccion = document.getElementsByClassName('btn btn-secondary');

var blimpiar= document.getElementById('bclean');
//dame al elemnto bclae, lo guardo en var blimpiar, agregale un evento cual? click ,la funcion clean
blimpiar.addEventListener('click',clean);

function clean(){
   
    tresultado.value= '';
}
var bequal= document.getElementById('bequal');
bequal.addEventListener('click',function(){calcular()});
function calcular(){
  
        tresultado.value= eval(tresultado.value);

}

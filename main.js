
document.querySelector("#inject-html button").addEventListener('click',function(){
  // TASK #1
  var answerBoxEl = document.querySelector('#inject-html .answer-box')
  answerBoxEl.innerHTML = "<h2>Here is some text for you!!</h2>"
})

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
//traemos el elemento con si id y lo guardamos en una variable
  var answerPTagWithValue = document.querySelector('#compoundInvestment')
//parseInt nos ayuda a saber si es un numero y accedemos a el con .textContent
//y lo igualamos a otra variable
  var number = parseInt(answerPTagWithValue.textContent);
//la nueva variable number la multiplicamos por dos y la agregamos a otra variable
  var newNumber = number * 2
//iner.innerHTML lo ocupamos para ponerlo en el html
  answerPTagWithValue.innerHTML = newNumber

})



document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #3
//se trae el elemento del html con su clase y lo guardamos en una variable circle
  var circle = document.querySelector(".circle-red");
//.offsetHeight sirve para darle una tamaño maximo al circulo
    if (circle.offsetHeight < 320) {
//en circulo entramos a la propiedad para darle estilo y lo igualamos a la condicion que queremos lo multiplicamos por 2 y le concatenamos los pixeles para que funciones
      circle.style.height = circle.offsetHeight * 2 + "px";
//en circulo entramos a la propiedad para darle estilo y lo igualamos a la condicion que queremos lo multiplicamos por 2 y le concatenamos los pixeles para que funcione
      circle.style.width = circle.offsetWidth * 2 + "px";
//en caso contrario lo regresamos al tamaño original
    } else {
//entramos a la propiedad y le ponemos las medidas que tenia no se tiene que concatenar los px por que no estamos realizando ninguna operacion matematica
      circle.style.height = "40px";
      circle.style.width = "40px";
    }
})


//TASK #4
document.querySelector("#remove button").addEventListener('click',function(){
//document.querySelectorAll para seleccionar a todos los elementos que tengan
//la clase .inactive el forEach sirve para que todos los elementos que sean li y
//tengan la misma clase sean removidos con .remove

  document.querySelectorAll(".inactive").forEach(li => li.remove());

  // var eleminateClass = document.querySelectorAll('.inactive')
  // var fatherList = document.querySelector('#user-list')
  // var nodesArray = array.prototype.slice.call(eliminateClass);
  // nodesArray.forEach(function(list)){
  // fhaterList.removeChild(list);
  // })
})

  //TAK #5

document.querySelector("#reverse-squares button").addEventListener('click',function(){
//creamos un array vacio pafra guardar
  var array = []

  var fatherBox = document.querySelector('#squares-box')

  var box = document.querySelectorAll('.square')

  box.forEach(function(square){

    array.push(square)

    square.remove();
  })

  array.reverse().forEach(function(square){

    fatherBox.appendChild(square)
  })
})



document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #6
//creamos una variable vacia para guardar las
  var textReverse= []
  var container = document.querySelector('#tasks')
  var listItems = document.querySelectorAll('#tasks li')
  var template = "";

  listItems.forEach(function(item){

    var word = item.innerHTML;
//word.split para separar las palabras en letras
//.reverse para invertir el orden de las letras
//.join para unir laas letras y formar una nueva palabra
    var wordReverse = word.split("").reverse().join("");
//para quitar el primer arreglo
    textReverse.push(wordReverse);
//.remove para quitar las palabras
    item.remove();
  })

  textReverse.forEach(function (text){
//se crea una nueva lista para poder agregar las  nuevas palabras
  var li = document.createElement('li');

  li.innerHTML = text;
//
  container.appendChild(li);
 })
})

document.querySelector("#cycle-image button").addEventListener('click',function(){
   //TASK #7
})

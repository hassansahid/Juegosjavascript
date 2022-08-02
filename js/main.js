var usuario = localStorage.getItem('usuario')
var pais = localStorage.getItem('pais')


var usuario = prompt("Ingresa tu usuario:")
var pais = prompt("De que país eres?")
let edad = prompt("Cuantos años tienes?");if (edad < 18)
{alert("Necesitar ser mayor para acceder.")}
  else {alert("Eres Mayor")}
alert("Usuario ingresado: " + usuario )
alert("País : " + pais )
alert("Edad : " + edad );

document.getElementById('usuario1').textContent = usuario;
document.getElementById('pais1').textContent = pais;


let randomNumber = Math.floor(Math.random() * 100) + 1;
const suposiciones = document.querySelector('.suposiciones');
const resAnt = document.querySelector('.resAnt');
const lowOrHi = document.querySelector('.lowOrHi');
const enviar = document.querySelector('.enviar');
const adivinaNum = document.querySelector('.adivinaNum');
let guessCount = 1;
let resetButton;


function checkGuess() {
  const userGuess = Number(adivinaNum.value);
  if (guessCount === 1) {
    suposiciones.textContent = 'Valores ingresados : ';
  }

  suposiciones.textContent += userGuess + ' ';

  if (userGuess === randomNumber) {
    resAnt.textContent = 'FELICIDADES! HAS GANADO AMIG@!';
    resAnt.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();
  } else if (guessCount === 10) {
    resAnt.textContent = 'owwww... has pedido!';
    lowOrHi.textContent = '';
    setGameOver();
  } else {
    resAnt.textContent = 'Error!';
    resAnt.style.backgroundColor = 'red';
    if(userGuess < randomNumber) {
      lowOrHi.textContent = 'Tu numero es muy bajo!' ;
    } else if(userGuess > randomNumber) {
      lowOrHi.textContent = 'Tu numero es muy alto!';
    }
  }

  guessCount++;
  adivinaNum.value = '';
  adivinaNum.focus();
}

enviar.addEventListener('click', checkGuess);

function setGameOver() {
  adivinaNum.disabled = true;
  enviar.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Quieres probar de nuevo?';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame );
}

function resetGame() {
  guessCount = 1;
  const resetParas = document.querySelectorAll('.resultados p');
  for (let i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);
  adivinaNum.disabled = false;
  enviar.disabled = false;
  adivinaNum.value = '';
  adivinaNum.focus();
  resAnt.style.backgroundColor = 'white';
  randomNumber = Math.floor(Math.random() * 100) + 1;
  randomNumber2 = Math.floor(Math.random() * 10) + 1;
  mayor.disabled = false;
  menor.disabled = false;
}

const lowOrHi1 = document.querySelector('.lowOrHi1');
const final1 = document.querySelector('.final1');
const mayor = document.querySelector('.mayor');
const menor = document.querySelector('.menor');
let randomNumber2 = Math.floor(Math.random() * 10) + 1;
let randomNumber3 = Math.floor(Math.random() * 10) + 1;

document.getElementById('numRandom2').textContent = randomNumber2;


document.getElementById('mayor').addEventListener('click', function(){
  Swal.fire({
    title: 'Estas seguro?',
    text: "El proximo numero debería ser MAYOR para que ganes",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Confirmar'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Apostado',
        'MAYOR!',
        'success'
      )} 
      lowOrHi1.textContent = 'El siguiente numero es :';
      lowOrHi1.textContent += randomNumber3 + ' ';
      document.getElementById('numRandom3').textContent = randomNumber3;    
       mayor1();  
  })
});

document.getElementById('menor').addEventListener('click', function(){
  Swal.fire({
    title: 'Estas seguro?',
    text: "El proximo numero debería ser MENOR para que ganes",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Confirmar'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Apostado',
        'MENOR!',
        'success'
        ) 
          lowOrHi1.textContent = 'El siguiente numero es :';
          lowOrHi1.textContent += randomNumber3 + ' ';
          document.getElementById('numRandom3').textContent = randomNumber3;
          document.getElementById('final1').textContent = randomNumber3;
        //  if(randomNumber2 >= randomNumber3) {
        //    final.textContent = 'HAS GANADO!!' ;
        //  setGameOver()}
        //  else if(randomNumber2 < randomNumber3) {
        //    final.textContent = 'HAS PERDIDO!';
        //  setGameOver();}
           // {document.getElementById('resultadoFinal').textContent = resultadoFinal;}
        
      }})
    })

//    function mayor1() {
//      if(randomNumber2 <= randomNumber3) {
//        final.textContent = 'HAS GANADO!!';
//      setGameOver();}
//    else if(randomNumber2 > randomNumber3) {
//      final.textContent = 'HAS PERDIDO!';
//      setGameOver();}
//    document.getElementById('final').textContent = final; }
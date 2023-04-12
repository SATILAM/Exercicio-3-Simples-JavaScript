function fatorial(num) {
  let resultado = 1;
  
  for (let i = 2; i <= num; i++) {
    resultado *= i;
  }
  
  return resultado;
}

console.log(fatorial(5)); // Deve retornar 120//



//EXEMPLO 2 - OUTRA FORMA//
function fatorial(num) {
    if (num === 1) {
      return 1;
    } else {
      return num * fatorial(num - 1);
    }
}
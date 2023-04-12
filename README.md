# Exercicio-3-Simples-JavaScript

Function Fatorial.

A função fatorial utiliza um loop for que começa em 2 e vai até o valor do argumento num. Dentro do loop, a variável resultado é atualizada multiplicando-se por cada valor de i. No final do loop, o valor final de resultado é retornado.

Para num igual a 5, o loop começa em 2 e executa as seguintes operações:

resultado é multiplicado por 2, resultando em 2.

resultado é multiplicado por 3, resultando em 6.

resultado é multiplicado por 4, resultando em 24.

resultado é multiplicado por 5, resultando em 120.

Portanto, quando a função é chamada com fatorial(5), ela retorna o valor 120.


Agora no Exemplo 2:

Uma outra forma de implementar a função fatorial é utilizando uma recursão, em que a função chama a si mesma com um argumento decrementado até atingir o caso base. 

O caso base é quando o argumento é igual a 1, pois qualquer número elevado a 1 é igual a ele mesmo.

Quando a função é chamada com um argumento de 5, por exemplo, ela funciona da seguinte maneira:

A função verifica se num é igual a 1. Como num é 5, a condição não é satisfeita e a execução continua.

A função retorna o resultado da expressão num * fatorial(num - 1). Isso significa que a função chama a si mesma com o argumento num - 1, que é 4.
A chamada recursiva da função com num - 1 (4) produz um resultado de 24.

A função retorna o valor num (5) multiplicado pelo resultado da chamada recursiva (24), resultando em 120.

Dessa forma, a função fatorial implementada com recursão produz o mesmo resultado da versão que utiliza o loop for.

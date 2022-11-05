O mediator eh um padrão comportamental que o objetivo dele eh que objetos se comuniquem através de um mediador. Então temos vários objetos 'conversando' com vários objetos através de um mediador/canal.

Podemos utilizar esse padrão quando eh difícil mudar algumias classes porque elas estão fortemente acopladas com varias outras classes. Esse padrão permite extrair todas as relações entre classes para uma classe separada, isolando qualquer mudança de uma classe especifica do restante das outras classes.

O fator principal do mediator eh = desacoplar dependências de objetos para que eles se comuniquem através de um mediador!

Algumas vantagens

- Desacoplamento entre os objetos, pois nenhum objeto se conhece na comunicação;
- O fluxo de comunicação está centralizado, com isso, alterações no mediador não afetam seus ouvintes;
- Mudanças podem ser aplicadas facilmente nos objetos, pois são independentes;

Desvantagem considerável = O mediator dependendo da quantidade de informação pode ser o gargalo da sua aplicação.

---

References: https://refactoring.guru/pt-br/design-patterns/mediator
Example: https://refactoring.guru/pt-br/design-patterns/mediator/typescript/example

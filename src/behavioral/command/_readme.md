O pattern command eh um padrão de comportamento que o objetivo dele eh desacoplar QUEM chama de QUEM eh chamado. Ele transforma um "pedido" (entidade genérica) em um objeto (command) que contem todas as informações do pedido.

O pattern command permite encapsular métodos em objetos (creditCommand), permitindo: parametrizar objetos ou seja compor o command antes de executar o execute em si, enfileirar as execuções, registrar as execuções e implementar cancelamentos/desfazimento de execuções.

1 = Para isso devemos ter um class Command que pode ser uma classe abstrata que ja contem métodos implementados que pode ser utilizados por todos os commands ou podemos ter somente uma interface onde todos as classes concretas dos command podem implementar.

2 = Depois podemos ter as classes concretas dos command, como por exemplo creditCommand, que no seu construtor recebe a conta para realizar o credito e a quantidade. A classe conta nesse caso tem todas as regras de negocio necessária para creditar a conta. O command apenas chama o método da classe que vai ficar responsável pela ação (creditar conta nesse caso).

3 = Podemos ter uma classe Invoker que ficara responsável por receber os comandos e executar esses comandos.

---

Referencia: https://refactoring.guru/pt-br/design-patterns/command
Example: https://refactoring.guru/pt-br/design-patterns/command/typescript/example
YouTube: https://www.youtube.com/watch?v=U-xbZJMsBnU

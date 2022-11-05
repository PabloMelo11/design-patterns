O Strategy eh um pattern comportamental que permite criarmos famílias de algorítimos, coloquemos esses algorítimos em classes separadas e podemos intercambiar essas classes conforme a necessidade.

No nosso caso, beachTicket, shoppingTicket e airportTicket sao nossas classes que possuem os algoritmos e sao intercambiadas na instancia da nossa classe ParkingLot.

Podemos utilizar o Strategy quando queremos usar diferentes variantes de algorítimos dentro de um objeto e ser capaz de trocar de algorítimo para outro em tempo de execução.

Outra situadão para usarmos esse pattern quando nossa classe tem um operador condicional (IF) muito grande que troca entre diferentes variantes do mesmo algorítimo. Então separamos esses algorítimos em classes especificas, como fizemos no nosso exemplo.

E por ultimo podemos usar esse pattern para isolar a logica de negocio de uma classe dos detalhes de implementação de algorítimos que podem nao ser tao importantes no contexto da logica. Assim isolamos os detalhes de implementação de um algorítimo do código que ele usa, sendo intercambiado, como fizemos no nosso exemplo.

---

Referencia: https://refactoring.guru/pt-br/design-patterns/strategy
Example: https://refactoring.guru/pt-br/design-patterns/strategy/typescript/example

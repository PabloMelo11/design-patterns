Abstract Factory eh um design pattern de criação que permite que voce produza famílias / fabricas de OBJETOS relacionados sem ter que especificar suas classes concretas.

Outra definição = Fornece uma interface para criação de famílias de objetos relacionados ou independentes sem especificar suas classes concretas.

O cenário ideal para usarmos abstract factory eh quando precisamos trabalhar com diversas famílias de produtos relacionados mas nao queremos depender de classes concretas, pois talvez geramos um objeto que nao era o esperado. Com isso criamos uma interface (interface fabrica abstrata) para a nossa familia de objetos, essa interface conterá os comportamentos (createButton, createLabel) de criação para todos os produtos. Para os produtos devemos criamos uma nova interface (interface produto abstrato) para todos os tipos de produtos, essa interface conterá comportamentos, características (color, backgroundColor) e todos os produtos devem implementa-las.

---

Referencia: https://refactoring.guru/pt-br/design-patterns/abstract-factory
Example: https://refactoring.guru/pt-br/design-patterns/abstract-factory/typescript/example

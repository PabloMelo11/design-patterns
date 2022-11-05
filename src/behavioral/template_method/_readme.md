O template method eh um pattern comportamental que define o esqueleto de um algorítimo, normalmente com uma classe abstrata ou interface ou uma classe que ja possui certos algorítimos, mas deixa as subclasses extender a superclasse e permite que as subclasses implementem os métodos sem modificar o algoritmo da superclasse.

No nosso cenário o template method eh o tax items, onde definimos um método abstrato e todas as subclasses devem implementar o método.

Dessa forma definimos na nossa super classe um método obrigatório ou um esqueleto de um algorítimo ja pronto, onde nossas subclasses podem sobrescrever, implementar ou apenas reutilizar o código existente.

Podemos usar esse pattern quando temos varias classes que contem algorítimos quase idênticos com algumas poucas diferenças. No nosso caso Beer, Whisky e Water. Tem métodos idênticos e o algorítimo muda pouca coisa.

Outro aplicabilidade eh quando queremos que um algorítimo monolítico se torne vários algorítimos menores que podem ser estendidos pelas subclasses, usados ou substituídos de forma polifórmica.

---

Referencia: https://refactoring.guru/pt-br/design-patterns/template-method
Example: https://refactoring.guru/pt-br/design-patterns/template-method/typescript/example

O adapter eh um design pattern de estrutura que permite objetos com interfaces incompatíveis colaborem entre si. O adaptador eh um objeto especial que converte a interface de um objeto para que outro objeto posso entende-lo.

O adaptador encobre os objetos para esconder suas complexidades de implementação acontecendo nos bastidores.

Quando caímos em um cenário onde temos duas bibliotecas diferentes que resolve o mesmo problema, porem devemos criar um adaptador para cada uma delas. Isso significa que iremos criar uma interface comum entre as duas classes adaptadoras que ira conter os métodos necessários. Essas classes vao implementar essa interface que cada uma vai criar as suas implementações dos métodos. Normalmente trocamos um adapter para outro utilizando o Dependency inversion.

Outro cenário que podemos utilizar esse pattern eh quando queremos usar uma classe existente, mas sua interface não for compatível com o resto do seu código. Então criamos uma classe intermediaria que serve como um tradutor entre o nosso código e classe existente.

---

Referencia: https://refactoring.guru/pt-br/design-patterns/adapter
Example: https://refactoring.guru/pt-br/design-patterns/adapter/typescript/example

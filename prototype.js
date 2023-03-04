/*

    __proto__ é uma propriedade que permite que um objeto herde propriedades 
    e metodos de outro objeto de forma ascendente 

    cada objeto criado tem automaticamente uma propriedade chamada __proto__
    que define as propriedades herdads com base no tipo de dado do 
    objeto criado 

    prototipo é um objeto que serve como modelo que automatcamente tera sua 
    propriedades e metodos herdados por outros objetos criados,

    quando o objeto é criado ele herda todas as propriedades e metodos do seu 
    prototipo




*/

const child1 = {

    a:1,
    b:2,
    // ___proto__ sets the [[prototype]] 
    __proto__:{
        a:1,
        b:2
    }
}

const child2 = {

    __proto__:{
        a:1,
        b:2
    }

}

const animal = {
    tipo: "desconhecido",
    fazerBarulho() {
      console.log("o animal faz um barulho");
    }
  };




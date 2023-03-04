 // como está organizado este documento 

 /*
    * function anonymus
    * function hosting
    * arrow function 
    * callback function
    * function constructor
 
 */



/*--------- function anonymus ---------*/

const sum = function(param1,param2){
    return param1 + param2
}

console.log(sum(10,22))


/* -----------function hosting-----------*/


  /* este tipo de função não sofre o hosting apesar de a 
  declaração da variavel sofrer hostng(a elevação)
  
  */

/* 
APENAS RREMOVENDO O CHAMAMENTO DESSA FUNÇÃO PARA NÃO PARA A A
EXECUÇÃO DO RESTANTE DO CODIGO
 hosting() 
 */
var hosting = function(){
    console.log('mayk')
}

    // esta função sofre o hosting(a elevação)

Hosting2()
function Hosting2(){
    console.log('hosting')
}

/*----------arrow function ---------------*/

const sayMyName = () =>{
    console.log('mayk')
}

/*-------- callback function ------------*/

function callback(name){
    console.log('antes de executar a função callback')

    name()

    

    console.log('depois de executar uma função callback')
}

callback(
    () => {
        console.log('estou em uma callback')
    }
)

 // essa função é a mesma que á de cima 
function callback2(name){
    console.log('antes de executar a funçao callback')

    function name() {
        console.log('estou em uma callback')
} 

    console.log('depos de executar a função callback')
}

callback2()

/*-------- function constructor
    * o operador new é usada para criar uma nova intância junto com o construtor
    * uma intância é uma cópia do objeto criado pela função contrutora 
    * função construtora ´ou contrutor e uma função que é usada para criar 
    * objetos com  propriedades e metodos personalzados 


    * this é uma palavra-chave que ela se refere ao objeto 
      dono do código em exeçucão 
*/

function constructor(parametro1,parametro2){
    this.propriedade1 = parametro1 ;
    this.propriedade2 = parametro2 ;
}

const obj = new constructor('argumento1','argumento2')

console.log(obj)


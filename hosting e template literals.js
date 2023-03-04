
/* por de baixo do pano a javascript faz hosting a elevação
 , é importante para remover bugs */
console.log('> existe x antes do bloco ?',x)
{
    var x = 0
}


const y = 1
 
{
    {
        {
            {
                const y = 0 ;
                console.log(y)
            }
        }
    }
}

console.log(y)


// interpolando valores  e inserir valores de variaveis dentro de uma string
/* 1 forma de fazer isso é usando a sinxtaxe de template liretals cercando a string com
 acento grave e usando ${} para inserir o valor da variavel

*/

let interpolar = 'interpolar' ;
let acento_grave = 'acento grave'

console.log(`para ${interpolar} valores é precisso usar ${acento_grave} `)


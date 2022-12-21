import { pergunta } from "./funcoes"
   



let res = document.querySelector('#res')
let nome = document.querySelector('#txtname')
let section = document.querySelector('section')
let question = document.querySelector('header')
let button = document.createElement('button')
let button1 = document.createElement('button')
let button2 = document.createElement('button')


function começar(){
   if(nome.value.length == 0){
        alert(' Por favor,  Digita seu nome! ')
    }else{
        section.innerHTML = ' '
        question.innerHTML = ' '
        alert(`Olá ${nome.value}, You Ready? Click OK`)
        perguntas()      

    }
}

let count = 0
function perguntas(){
    
    question.style.fontSize = '40px'
    question.innerHTML = `<strong>${pergunta[count].questao}<strong>`
    button.innerHTML =  pergunta[count].alt1
    button1.innerHTML= pergunta[count].alt2
    button2.innerHTML= pergunta[count].alt3
    section.appendChild(button)
    section.appendChild(button1)
    section.appendChild(button2)
    
   
    count ++
}
    button.addEventListener('click', function(){respostas(1)})
    button1.addEventListener('click', function(){respostas(2)})
    button2.addEventListener('click', function(){respostas(3)})

let c = 0
function respostas(escolha){

        if(escolha == 1){
                if(pergunta[c].alt1 == pergunta[c].correto){
                alert('você acertou')
                }
        }else if(escolha == 2){
            if(pergunta[c].correto == pergunta[c].alt2){
                res.innerHTML = 'Você acertou'
            }
            }else if(escolha == 3){
                if(pergunta[c].correto == pergunta[c].alt3){
                    res.innerHTML = 'Você acertou'
                }else{
                    alert('você errou!')
                }
            }
        c++
        if(c < pergunta.length){
            perguntas()
        }else{
            ranking()
        }
        
        
}

function ranking(){
    question.style.fontSize = '40px'
    question.innerHTML = 'Ranking'
    section.innerHTML =' '
    
}
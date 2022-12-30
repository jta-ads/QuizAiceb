
import { pergunta } from "./perguntas.js"



var arrnome = []
var arrpontos = []


let nome = document.querySelector('#txtname')
let section = document.querySelector('section')
let question = document.querySelector('header')
let button = document.createElement('button')
let button1 = document.createElement('button')
let button2 = document.createElement('button')
let btncomeçar = document.createElement('button')
btncomeçar.addEventListener('click', começar)
btncomeçar.innerHTML = '<b>Começar</b>'
section.appendChild(btncomeçar)
let res = document.querySelector('#res')
let btnranking = document.createElement('button')
btnranking.addEventListener('click', ranking)
btnranking.innerHTML = 'Ranking'
section.appendChild(btnranking)



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
var pontos=0
function perguntas(){
    
    question.style.fontSize = '40px'
    question.innerHTML = pergunta[count].questao
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
            pontos += 10
        }
    }else if(escolha == 2){
        pontos += 10
    }else if(escolha == 3){
        if(pergunta[c].correto == pergunta[c].alt3){
            pontos += 10
        }
    }
    c++
    if(c < pergunta.length){
        perguntas()
    }else{
       salvarItem()
        ranking()
    }
    
    
}

let btnvoltar = document.createElement('button')
btnvoltar.addEventListener('click', function(){
    location.reload()
})

function ranking(){
  
    question.style.fontSize = '40px'
    question.innerHTML = 'Ranking'
  
   section.innerHTML = " "
   mostrarItem()
    btnvoltar.innerHTML = 'Voltar'
    section.appendChild(btnvoltar)
   
}
import { abreConexao } from "./db.js"
var db = new abreConexao()
db.abreTabela()
function salvarItem(){
    db.setItem(nome, pontos)
}
function mostrarItem(){
    
    
    if(localStorage.meuarrayName || localStorage.meuarrayPoint){
        arrnome = JSON.parse(localStorage.getItem('meuarrayName'));
        arrpontos = JSON.parse(localStorage.getItem('meuarrayPoint'));
    } 
    for(let i in arrnome){
        res.innerHTML += `<p>Nome: ${arrnome[i]}        Pontos: ${arrpontos[i]}</p> `
        section.appendChild(res)
    }

}
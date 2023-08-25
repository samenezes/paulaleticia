import React from 'react'
import './main.css'


export default function prova() {
    return (
      <>
        <header>
            <p>Prova Final: Framework - 3C1</p>
        </header>

        <main>
            <table id="dados">
                <tr>
                    <td> Questão</td>
                    <td> Dificuldade</td>
                </tr>
            </table>
        </main>

        <footer>
        <p>Paula Leticia - 34</p>
        </footer>
      </>
    )
  }
  
  window.addEventListener('load',function(){

    const valores=fetch('https://opentdb.com/api.php?amount=30&category=18').then(res=>{
        res.json().then(dados=>{
            mostraDados(dados);
        });
    }).catch(erro=>{
        console.log(erro+" erro na requisição")
    });
});

function mostraDados(dados){
    const dadoss=document.querySelector('#dadoss');

        dados.forEach(element => {
            dadoss.innerHTML += `<tr><td>${element.question}</td>
                                     <td>${element.difficulty}</td>
                                </tr> `
        });
}
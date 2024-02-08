const perguntas = [
    {
      pergunta: "Qual é a principal função do JavaScript?",
      respostas: [
        "Manipular o layout da página",
        "Realizar operações matemáticas",
        "Controlar o estilo do site"
      ],
      correta: 0
    },
    {
      pergunta: "O que é o DOM (Document Object Model) em JavaScript?",
      respostas: [
        "Um modelo de objetos para manipulação de documentos HTML e XML",
        "Um tipo de linguagem de programação",
        "Um formato de arquivo para armazenar dados"
      ],
      correta: 0
    },
    {
      pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
      respostas: [
        "var",
        "let",
        "const"
      ],
      correta: 2
    },
    {
      pergunta: "Como você chama uma função em JavaScript?",
      respostas: [
        "executeFunction()",
        "callFunction()",
        "funcao()"
      ],
      correta: 2
    },
    {
      pergunta: "O que é um array em JavaScript?",
      respostas: [
        "Um tipo de dado que armazena apenas números",
        "Um tipo de dado que armazena uma coleção ordenada de elementos",
        "Um tipo de dado que armazena texto"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a diferença entre '==' e '===' em JavaScript?",
      respostas: [
        "Não há diferença, são sinônimos",
        "O '===' compara apenas valores, enquanto '==' compara valores e tipos de dados",
        "O '===' compara apenas tipos de dados, enquanto '==' compara valores e tipos de dados"
      ],
      correta: 1
    },
    {
      pergunta: "O que é o evento 'click' em JavaScript?",
      respostas: [
        "Um evento que ocorre quando a página é carregada",
        "Um evento que ocorre quando um elemento é clicado",
        "Um evento que ocorre quando o mouse é movido sobre um elemento"
      ],
      correta: 1
    },
    {
      pergunta: "Como se escreve um comentário de uma linha em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "/* Este é um comentário */",
        "<!-- Este é um comentário -->"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a finalidade do operador 'typeof' em JavaScript?",
      respostas: [
        "Para verificar se uma variável está definida",
        "Para obter o tipo de dado de uma variável",
        "Para converter uma variável para o tipo de dado desejado"
      ],
      correta: 1
    },
    {
      pergunta: "O que é o JSON em JavaScript?",
      respostas: [
        "Um formato de arquivo para armazenar dados",
        "Uma linguagem de programação",
        "Um método para criar elementos HTML dinamicamente"
      ],
      correta: 0
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // for - loop ou laço de repetição 
  
  // bloco de instrução que mostra as perguntas
  for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    // bloco de instrução que mostra as respostras
    for (let resposta of item.respostas) {
      // copiou a estrutura do html dt dentro de dl (por isso mostrou o Pergunta A)
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
  
      //difere por nome
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      //difere por valor das alternativas
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      //adiciona uma função - apenas ocorre depois de uma mudança (apertar no botão da alternativa)
      // () => {} --> arrow function
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta // V OU F --- '=' comparação sem considerar o tipo
        //se acertar e dps errar ele elimina a quantidade de acertos mudados
        corretas.delete(item)
        //se acertar ele ira contar
        if (estaCorreta) {
          corretas.add(item)
        }
  
          mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
      //append sempre fica no final
      quizItem.querySelector('dl').appendChild(dt)
    }
    // remove o 'resposta A'
    quizItem.querySelector('dl dt').remove()
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }
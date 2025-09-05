const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O transporte público deve ser acessível a todas as pessoas, independentemente de sua condição socioeconômica?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "É um direito fundamental."
            },
            {
                texto: "Não",
                afirmacao: "O transporte deve ser pago integralmente pelos usuários."
            }
        ]
    },
    {
        enunciado: "Deveria existir mais investimento em transporte sustentável, como bicicletas e ônibus elétricos?",
        alternativas: [
            {
                texto: "Sim.",
                afirmacao: "Isso ajuda a reduzir a poluição e promove saúde pública."
            },
            {
                texto: "Não",
                afirmacao: "Isso seria muito caro e ineficiente."
            }
        ]
    },
    {
        enunciado: "A inclusão de pessoas com deficiência deve ser uma prioridade no planejamento dos sistemas de transporte?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "O transporte deve ser acessível para todos."
            },
            {
                texto: "Não.",
                afirmacao: "Isso não deveria ser uma prioridade, pois aumentaria os custos."
            }
        ]
    },
    {
        enunciado: "O uso de transporte público deveria ser mais incentivado em vez do uso de carros particulares?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "O transporte público reduz o trânsito e a emissão de poluentes."
            },
            {
                texto: "Não",
                afirmacao: "As pessoas devem ter liberdade para escolher como se deslocar."
            }
        ]
    },
    {
        enunciado: "Deveriam existir tarifas reduzidas ou isenção de pagamento para estudantes e idosos no transporte público?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Essas pessoas geralmente possuem uma renda limitada."
            },
            {
                texto: "Não",
                afirmacao: "Isso gera desigualdade e pode prejudicar o sistema financeiro do transporte. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
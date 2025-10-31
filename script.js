const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const imagemPergunta = document.getElementById("imagem-pergunta");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
        imagem: "img/img1.jpg", // Substitua pelo caminho da imagem
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "No futuro, você se preocupa com os riscos da IA e decide se dedicar a regulamentar seu uso para proteger a sociedade."
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "No futuro, você se entusiasma com as possibilidades da IA e trabalha em projetos inovadores que integram tecnologia e criatividade."
            }
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial (IA), uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre esta tecnologia. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude você toma?",
        imagem: "img/img2.png", // Substitua pelo caminho da imagem
        alternativas: [
            {
                texto: "Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
                afirmacao: "Você percebe que a IA pode acelerar o aprendizado e decide explorar ferramentas educacionais baseadas em IA."
            },
            {
                texto: "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
                afirmacao: "Você valoriza o esforço humano e colabora com colegas para criar conteúdos originais, fortalecendo o trabalho em equipe."
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
        imagem: "img/img3.png", // Substitua pelo caminho da imagem
        alternativas: [
            {
                texto: "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                afirmacao: "Você se torna um defensor da integração da IA no mercado de trabalho, ajudando a treinar pessoas para novas carreiras tecnológicas."
            },
            {
                texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendo a importância de proteger os trabalhadores.",
                afirmacao: "Você luta por políticas que protejam empregos e promova treinamentos para transições seguras no mercado de trabalho."
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        imagem: "img/img4.jpg", // Substitua pelo caminho da imagem
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "Você desenvolve habilidades manuais e aprecia o processo criativo tradicional, equilibrando tecnologia e arte."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "Você abraça as ferramentas de IA para acelerar a criação artística, explorando novas formas de expressão visual."
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda de uma IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz?",
        imagem: "img/img5.png", // Substitua pelo caminho da imagem
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Você enfrenta desafios éticos com plágio, mas aprende a usar a IA de forma responsável em projetos futuros."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Você se torna um especialista em verificar e aprimorar conteúdos gerados por IA, garantindo qualidade e originalidade."
            }
        ]
    }
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
    imagemPergunta.src = perguntaAtual.imagem;
    imagemPergunta.style.display = "block";
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    imagemPergunta.style.display = "none";
    caixaAlternativas.textContent = "";
}

mostraPergunta();
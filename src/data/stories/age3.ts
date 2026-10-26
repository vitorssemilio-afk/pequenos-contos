import type { Story } from "../../illustrations/types";

const stories: Story[] = [
  {
    id: "a3-soneca-de-nino",
    title: "A Soneca de Nino",
    synopsis:
      "Nino, o coelhinho, não quer dormir, mas a sábia coruja Dadá o ajuda a encontrar um jeito calmo e gostoso de ir para a cama.",
    ageGroup: 3,
    category: "Hora de Dormir",
    cover: {
      background: "quartoNoite",
      characters: [
        { characterId: "coelhoNino", pose: "sonolento", position: "centro" },
        { characterId: "corujaSabia", pose: "feliz", position: "direita" },
      ],
      props: ["lua", "estrelas"],
    },
    scenes: [
      {
        id: "cena-1",
        text:
          "Nino, o coelhinho branco de orelhas longas, adorava brincar o dia inteiro no quintal da casinha onde morava. Ele pulava nas poças de água depois da chuva, corria atrás das borboletas coloridas e rolava na grama fresquinha até ficar com tufos de capim nas orelhas. Mas, quando o sol começava a se esconder detrás das montanhas, pintando o céu de laranja e rosa, chegava a hora que Nino menos gostava: a hora de ir para a cama. — Ainda não estou com sono! — ele dizia toda noite, pulando animado de um lado para o outro, fazendo a coberta fofinha voar pelo ar.",
        illustration: {
          background: "quartoDia",
          characters: [{ characterId: "coelhoNino", pose: "animado", position: "centro" }],
          props: [],
        },
      },
      {
        id: "cena-2",
        text:
          "Naquela noite, bem no meio de um pulo, Nino parou de repente. Pela janela do quarto, ele viu o céu ficando cada vez mais escuro. E então, uma, duas, três luzinhas pequenas começaram a brilhar lá no alto. — Olha! Estrelinhas! — exclamou Nino, encostando o narizinho frio no vidro da janela. Ele ficou tão encantado observando as luzes piscando que, por um instantinho, esqueceu completamente que não queria dormir.",
        illustration: {
          background: "quartoNoite",
          characters: [{ characterId: "coelhoNino", pose: "surpreso", position: "centro" }],
          props: ["estrelas"],
        },
      },
      {
        id: "cena-2c",
        text:
          "Nino colou o narizinho ainda mais no vidro da janela e começou a contar as estrelinhas que apareciam. — Uma, duas, três... — mas, assim que chegava na quinta, mais três luzinhas novas apareciam, e ele perdia a conta toda, rindo da brincadeira impossível. — São tantas que nem dá para contar todas! — disse ele, maravilhado com aquele céu que parecia nunca se cansar de ganhar mais brilho. Quanto mais olhava, mais seu corpinho ia ficando quietinho, encostado contra o vidro fresquinho da janela, hipnotizado pelo espetáculo lá fora.",
        illustration: {
          background: "quartoNoite",
          characters: [{ characterId: "coelhoNino", pose: "animado", position: "centro" }],
          props: ["estrelas", "lua"],
        },
      },
      {
        id: "cena-3",
        text:
          "Tuc, tuc, tuc. Alguém bateu de leve do lado de fora. Era Dadá, a coruja sábia da floresta, pousando com cuidado no galho da árvore perto da janela de Nino. — Boa noite, pequeno coelho — disse Dadá, com a voz tão macia quanto uma pena. — Por que você ainda está de olhinhos bem abertos? Olha, a lua já subiu lá no alto do céu, redonda e brilhante.",
        illustration: {
          background: "quartoNoite",
          characters: [
            { characterId: "corujaSabia", pose: "feliz", position: "direita" },
            { characterId: "coelhoNino", pose: "neutro", position: "centro" },
          ],
          props: ["lua"],
        },
      },
      {
        id: "cena-4",
        text:
          "Nino suspirou e sentou-se na beirada da cama, abraçando o travesseiro fofo. — É que, quando fecho os olhos, começo a pensar em tudo que aconteceu no dia — ele disse, baixinho, com as orelhas caindo um pouquinho para os lados. — Nas brincadeiras, nos amigos, no barulho do vento... e aí fico sem sono nenhum, só pensando e pensando.",
        illustration: {
          background: "quartoNoite",
          characters: [{ characterId: "coelhoNino", pose: "triste", position: "centro" }],
          props: [],
        },
      },
      {
        id: "cena-4b",
        text:
          "— Me conta uma coisa que está na sua cabecinha agora — pediu Dadá, com calma. Nino pensou um pouco e respondeu: — Estou pensando que amanhã vou correr com o Tom até a cerca da fazenda. E também que meu dentinho está mole, bem mole! E tem uma nuvem lá fora que parecia uma cenoura gigante! Dadá riu, baixinho. — São muitos pensamentos juntos, não é? Não é de se espantar que o sono não chegue.",
        illustration: {
          background: "quartoNoite",
          characters: [
            { characterId: "coelhoNino", pose: "surpreso", position: "centro" },
            { characterId: "corujaSabia", pose: "feliz", position: "direita" },
          ],
          props: [],
        },
      },
      {
        id: "cena-4c",
        text:
          "— É normal a cabecinha ficar assim, cheia de pensamentos, depois de um dia tão animado — explicou Dadá. — Mas ela também sabe descansar, do mesmo jeitinho que o corpo descansa. Eu posso te ensinar um truquezinho para ajudar os pensamentos a ficarem mais quietinhos, um por um. Nino se animou, limpando os olhinhos sonolentos.",
        illustration: {
          background: "quartoNoite",
          characters: [
            { characterId: "corujaSabia", pose: "feliz", position: "esquerda" },
            { characterId: "coelhoNino", pose: "neutro", position: "centro" },
          ],
          props: [],
        },
      },
      {
        id: "cena-5",
        text:
          "Dadá sorriu com toda a calma do mundo e acendeu uma pequena lanterna amarela, que deixou o quarto com uma luzinha quentinha. — Então vamos fazer uma coisa juntos — disse ela. — Vamos respirar fundo, como se estivéssemos cheirando a flor mais gostosa do jardim. Inspira pelo nariz... e solta pela boca, bem devagarinho, assim: sooo. Nino tentou, encolhendo a barriguinha e depois soltando todo o ar.",
        illustration: {
          background: "quartoNoite",
          characters: [
            { characterId: "corujaSabia", pose: "feliz", position: "esquerda" },
            { characterId: "coelhoNino", pose: "neutro", position: "centro" },
          ],
          props: ["lanterna"],
        },
      },
      {
        id: "cena-6",
        text:
          "— De novo — pediu Dadá, com a voz suave como um cobertor quentinho num dia frio. Nino respirou outra vez, e mais outra, e mais outra. A cada respiração, seu corpinho ia ficando mais leve, mais molinho, mais pesado de sono. As patinhas relaxaram sobre o lençol, e a cabecinha foi afundando devagar no travesseiro fofo.",
        illustration: {
          background: "quartoNoite",
          characters: [{ characterId: "coelhoNino", pose: "sonolento", position: "centro" }],
          props: [],
        },
      },
      {
        id: "cena-6b",
        text:
          "— Agora vamos fazer de um jeito ainda mais divertido — disse Dadá. — Toda vez que você respirar, dobra um dedinho da pata. Quando dobrar os cinco, seu corpo já vai estar bem molinho. Nino esticou as patinhas e começou: um dedinho, dois dedinhos, três... a cada respiração funda, mais um dedo se dobrava, e mais pesadas ficavam suas pálpebras.",
        illustration: {
          background: "quartoNoite",
          characters: [{ characterId: "coelhoNino", pose: "sonolento", position: "centro" }],
          props: ["lanterna"],
        },
      },
      {
        id: "cena-7",
        text:
          "Enquanto Nino respirava, Dadá contou, em voz baixinha, como era a floresta durante a noite: os grilos cantando suas músicas escondidos na grama, o vento brincando entre as folhas das árvores altas, e a lua, redonda e paciente, cuidando de todo mundo que já estava quietinho, dormindo em suas tocas e ninhos.",
        illustration: {
          background: "florestaNoite",
          characters: [{ characterId: "corujaSabia", pose: "feliz", position: "centro" }],
          props: ["estrelas", "lua"],
        },
      },
      {
        id: "cena-7b",
        text:
          "— Vamos brincar de adivinhar os sons? — propôs Dadá. — Fecha os olhinhos e escuta. Nino fechou os olhos e ficou quietinho. — Ouço... um barulhinho fraco, tri-tri-tri! — Isso são os grilos — disse Dadá, sorrindo. — E agora, esse som mais longo, como um sopro? — perguntou Nino. — É o vento, conversando com as folhas — respondeu ela. Nino sorriu, orgulhoso de ter adivinhado os dois.",
        illustration: {
          background: "florestaNoite",
          characters: [{ characterId: "coelhoNino", pose: "feliz", position: "centro" }],
          props: ["estrelas"],
        },
      },
      {
        id: "cena-8",
        text:
          "— Sabe, Nino, cada bichinho da floresta tem o seu jeitinho de ir dormir — continuou Dadá, ajeitando com cuidado a coberta sobre o coelhinho. — O esquilo se enrosca bem apertadinho na toca. O passarinho se aconchega fundo no ninho, debaixo da asa da mamãe. E o coelhinho... se aconchega bem fundo nas cobertas, desse jeitinho mesmo.",
        illustration: {
          background: "quartoNoite",
          characters: [
            { characterId: "corujaSabia", pose: "feliz", position: "esquerda" },
            { characterId: "coelhoNino", pose: "sonolento", position: "centro" },
          ],
          props: [],
        },
      },
      {
        id: "cena-8b",
        text:
          "— E você, Dadá? Como você dorme, já que fica acordada a noite toda? — perguntou Nino, curioso. Dadá riu, baixinho. — Eu durmo de dia, lá no meu galho, bem escondida entre as folhas, enquanto o sol brilha forte. Cada bichinho tem a sua hora certa de descansar, e não tem nenhuma hora errada, desde que o corpo consiga se sentir seguro.",
        illustration: {
          background: "florestaDia",
          characters: [{ characterId: "corujaSabia", pose: "sonolento", position: "centro" }],
        },
      },
      {
        id: "cena-9",
        text:
          "Nino bocejou, um bocejo enorme e bem redondo. — Eu gosto de pensar nas estrelinhas enquanto durmo — ele disse, com a vozinha já bem fraquinha de sono. — Elas ficam lá no céu, de olho em mim a noite inteira, brilhando bem quietinhas. Dadá assentiu com a cabeça e abaixou ainda mais a luz da lanterna.",
        illustration: {
          background: "quartoNoite",
          characters: [{ characterId: "coelhoNino", pose: "feliz", position: "centro" }],
          props: ["lua"],
        },
      },
      {
        id: "cena-9b",
        text:
          "— Dadá, por que as estrelinhas ficam piscando assim, ligando e desligando? — perguntou Nino, com os olhos já quase fechando. — Ninguém sabe ao certo — respondeu Dadá, com doçura. — Mas eu gosto de pensar que elas estão apenas piscando para dizer boa noite, para cada bichinho que está indo dormir, em cada canto da floresta.",
        illustration: {
          background: "quartoNoite",
          characters: [{ characterId: "coelhoNino", pose: "sonolento", position: "centro" }],
          props: ["estrelas", "lua"],
        },
      },
      {
        id: "cena-10",
        text:
          "— Então pense nas estrelinhas, Nino. E pense em tudo de bom que você fez hoje: as brincadeiras no quintal, as borboletas coloridas, a grama fresquinha. Amanhã, quando o sol voltar a brilhar, vocês vão poder brincar outra vez, bem descansados. Agora é hora de descansar bem gostoso. Nino fechou os olhinhos, um de cada vez, bem devagarzinho.",
        illustration: {
          background: "quartoNoite",
          characters: [
            { characterId: "corujaSabia", pose: "feliz", position: "direita" },
            { characterId: "coelhoNino", pose: "sonolento", position: "centro" },
          ],
          props: [],
        },
      },
      {
        id: "cena-10c",
        text:
          "— Antes de dormir, me conta uma coisa gostosa para eu sonhar — pediu Nino, já de olhos quase fechados. Dadá pensou um instante. — Sonhe com um campo enorme, cheio de trevos fresquinhos, onde você pode pular o quanto quiser, sem nunca ficar cansado, debaixo de um céu sempre cor de entardecer. Nino sorriu, já quase dormindo, imaginando aquele campo lindo se formando atrás das pálpebras pesadas.",
        illustration: {
          background: "quartoNoite",
          characters: [
            { characterId: "corujaSabia", pose: "feliz", position: "esquerda" },
            { characterId: "coelhoNino", pose: "sonolento", position: "centro" },
          ],
          props: ["lua"],
        },
      },
      {
        id: "cena-11",
        text:
          "A respiração de Nino foi ficando cada vez mais lenta e tranquila. Suas orelhas longas, que antes balançavam tanto de um lado para o outro, agora descansavam bem quietinhas sobre o travesseiro fofo. Lá fora, a lua brilhava redonda e forte, e as estrelinhas pareciam sorrir, cuidando do pequeno coelho que finalmente tinha adormecido.",
        illustration: {
          background: "quartoNoite",
          characters: [{ characterId: "coelhoNino", pose: "sonolento", position: "centro" }],
          props: ["lua", "estrelas"],
        },
      },
      {
        id: "cena-12",
        text:
          "Dadá ficou mais um instantinho junto à janela, observando Nino dormir tranquilo e feliz. — Boa noite, pequeno amigo — ela disse, baixinho, quase num sussurro. Depois, abriu suas asas grandes e macias e voou de volta para o seu galho na floresta, deixando o quartinho em paz, cheio de sonhos calmos e bons.",
        illustration: {
          background: "quartoNoite",
          characters: [{ characterId: "corujaSabia", pose: "feliz", position: "esquerda" }],
          props: ["lua"],
        },
      },
    ],
    familyQuestion:
      "O que ajuda você a ficar calminho na hora de dormir? Vamos pensar em um jeitinho especial juntos?",
  },
  {
    id: "a3-tom-aprende-a-nadar",
    title: "Tom Aprende a Nadar",
    synopsis:
      "O patinho Tom tem medo da água da lagoa, até que seu amigo Bolinha o ajuda a descobrir que seus próprios pés já sabem nadar.",
    ageGroup: 3,
    category: "Animais",
    cover: {
      background: "rioLagoa",
      characters: [
        { characterId: "patinhoTom", pose: "animado", position: "centro" },
        { characterId: "cachorrinhoBolinha", pose: "feliz", position: "direita" },
      ],
      props: ["sol"],
    },
    scenes: [
      {
        id: "cena-1",
        text:
          "Tom era um patinho amarelo que vivia na fazenda, cercado pela família toda, cheia de penas e bicos. Todos os outros patos adoravam nadar na lagoa pertinho de casa, mas Tom sempre ficava na beirada, só olhando a água balançar. Ele achava a lagoa bonita, mas também um pouquinho assustadora, com aquela água tão funda e tão fria.",
        illustration: {
          background: "fazenda",
          characters: [{ characterId: "patinhoTom", pose: "neutro", position: "centro" }],
          props: ["sol"],
        },
      },
      {
        id: "cena-1b2",
        text:
          "Sua mãe pata já tinha tentado, de um jeitinho bem gentil, incentivá-lo a entrar na água algumas vezes, mas Tom sempre arranjava uma desculpa: estava com fome, estava com sono, ou simplesmente fingia não ter ouvido o convite. No fundo, ele sabia que tinha medo, mas não gostava nem de admitir isso para si mesmo.",
        illustration: {
          background: "fazenda",
          characters: [{ characterId: "patinhoTom", pose: "triste", position: "centro" }],
        },
      },
      {
        id: "cena-2",
        text:
          "Um dia, Bolinha, o cachorrinho marrom que morava na fazenda vizinha, veio correndo até Tom, com o rabo todo animado. — Tom! Vem nadar comigo na lagoa! A água está uma delícia hoje! Tom deu um passinho para trás, com as patinhas enroladas uma na outra. — Eu... eu acho que não — respondeu, baixinho.",
        illustration: {
          background: "rioLagoa",
          characters: [
            { characterId: "cachorrinhoBolinha", pose: "feliz", position: "direita" },
            { characterId: "patinhoTom", pose: "surpreso", position: "centro" },
          ],
        },
      },
      {
        id: "cena-3",
        text:
          "— É que eu tenho um pouquinho de medo da água — confessou Tom, olhando para os próprios pés. — E se eu afundar? E se a água for muito funda para mim? Suas penas amarelas tremeram de nervoso, e ele se afastou mais um passinho da beira da lagoa.",
        illustration: {
          background: "rioLagoa",
          characters: [{ characterId: "patinhoTom", pose: "triste", position: "centro" }],
        },
      },
      {
        id: "cena-2c",
        text:
          "Enquanto Bolinha esperava uma resposta, os irmãozinhos de Tom passaram nadando felizes pela lagoa, fazendo ondinhas e rindo alto. Tom observou com um misto de vontade e vergonha: queria se divertir daquele jeito também, mas suas patinhas pareciam coladas na terra firme, sem coragem de se mover para a água.",
        illustration: {
          background: "rioLagoa",
          characters: [{ characterId: "patinhoTom", pose: "triste", position: "centro" }],
        },
      },
      {
        id: "cena-3b",
        text:
          "Bolinha se aproximou, bem calmo. — Me conta, Tom, o que te assusta mais? — perguntou ele. Tom pensou um pouco. — Tenho medo de afundar e não conseguir respirar. E também de não saber nadar de volta para a beira, se eu for para muito longe. Bolinha escutou tudo com atenção, sem rir nem apressar o amigo.",
        illustration: {
          background: "rioLagoa",
          characters: [
            { characterId: "cachorrinhoBolinha", pose: "neutro", position: "esquerda" },
            { characterId: "patinhoTom", pose: "triste", position: "centro" },
          ],
        },
      },
      {
        id: "cena-4",
        text:
          "Bolinha sentou-se ao lado de Tom, com calma. — Sabe, Tom, os patinhos são feitos especialmente para a água — disse ele, sorrindo. — Olha só os seus pés. Eles têm uma coisa chamada membrana, que ajuda a nadar, como se fossem remadores naturais. Tom olhou para as próprias patinhas, curioso.",
        illustration: {
          background: "rioLagoa",
          characters: [
            { characterId: "cachorrinhoBolinha", pose: "feliz", position: "esquerda" },
            { characterId: "patinhoTom", pose: "neutro", position: "centro" },
          ],
        },
      },
      {
        id: "cena-5",
        text:
          "Tom esticou uma pata e olhou bem de perto. Era verdade: entre os seus dedinhos havia uma pelezinha fina que os unia, bem diferente das patinhas de Bolinha. — Eu nunca tinha notado isso! — exclamou Tom, surpreso. — Será que isso realmente me ajuda a flutuar?",
        illustration: {
          background: "rioLagoa",
          characters: [{ characterId: "patinhoTom", pose: "surpreso", position: "centro" }],
          props: ["nuvem"],
        },
      },
      {
        id: "cena-5b",
        text:
          "Tom abriu e fechou os dedinhos, observando a pelezinha fina esticar e dobrar. — Os seus são bem diferentes — disse ele, olhando para as patas de Bolinha. — Os meus são para cavar e correr — respondeu Bolinha, rindo. — Os seus são para nadar. Cada um tem o pezinho certo para o que precisa fazer.",
        illustration: {
          background: "rioLagoa",
          characters: [
            { characterId: "patinhoTom", pose: "surpreso", position: "centro" },
            { characterId: "cachorrinhoBolinha", pose: "feliz", position: "direita" },
          ],
        },
      },
      {
        id: "cena-6",
        text:
          "— Vamos descobrir juntos, bem devagarinho — disse Bolinha. — Primeiro, só molha os pezinhos na beira, sem precisar entrar todo. Tom respirou fundo e, com cuidado, encostou as patinhas na água fresquinha. Sentiu um arrepio gostoso subir pelas penas, e não era nada assustador como ele imaginava.",
        illustration: {
          background: "rioLagoa",
          characters: [
            { characterId: "patinhoTom", pose: "neutro", position: "centro" },
            { characterId: "cachorrinhoBolinha", pose: "feliz", position: "direita" },
          ],
        },
      },
      {
        id: "cena-6b",
        text:
          "Um pouco mais longe, uma família de patos de verdade nadava tranquila, deslizando pela água sem nenhum esforço. — Olha, eles fazem parecer tão fácil — disse Tom, observando. — É porque eles também começaram um dia, assim como você está começando agora — respondeu Bolinha, sorrindo com gentileza.",
        illustration: {
          background: "rioLagoa",
          characters: [
            { characterId: "patinhoTom", pose: "neutro", position: "centro" },
            { characterId: "cachorrinhoBolinha", pose: "feliz", position: "direita" },
          ],
        },
      },
      {
        id: "cena-7",
        text:
          "— Está... está até bom! — disse Tom, rindo baixinho e balançando os pés dentro da água. A água fazia cócegas gostosas entre seus dedinhos, e o sol brilhava bonito sobre a lagoa, fazendo tudo parecer ainda mais convidativo. Tom sentiu a coragem crescer dentro do peito, como uma bolha de ar subindo.",
        illustration: {
          background: "rioLagoa",
          characters: [{ characterId: "patinhoTom", pose: "animado", position: "centro" }],
        },
      },
      {
        id: "cena-8",
        text:
          "Com um empurrãozinho de confiança, Tom entrou mais um pouquinho na lagoa, até a água chegar na barriga. Ele bateu as patinhas, meio bambo, meio trêmulo, mas, para sua surpresa, começou a flutuar! — Bolinha, eu estou boiando! — gritou Tom, todo animado, com as penas brilhando ao sol.",
        illustration: {
          background: "rioLagoa",
          characters: [
            { characterId: "patinhoTom", pose: "feliz", position: "centro" },
            { characterId: "cachorrinhoBolinha", pose: "feliz", position: "direita" },
          ],
        },
      },
      {
        id: "cena-7b2",
        text:
          "Um sapinho verde, que estava descansando numa folha de vitória-régia por ali, cumprimentou Tom com um croac animado, como se estivesse dando as boas-vindas à água. Tom riu, sentindo-se cada vez mais parte daquele mundo aquático que antes parecia tão distante e assustador.",
        illustration: {
          background: "rioLagoa",
          characters: [{ characterId: "patinhoTom", pose: "feliz", position: "centro" }],
        },
      },
      {
        id: "cena-8b",
        text:
          "De repente, uma ondinha mais forte passou e salpicou água no rosto de Tom. Ele se assustou e bateu as patinhas rápido demais, ficando por um instante desequilibrado. — Calma, Tom, eu estou aqui — disse Bolinha, se aproximando pela margem. Tom respirou fundo, lembrou que sabia boiar, e se acalmou de novo.",
        illustration: {
          background: "rioLagoa",
          characters: [
            { characterId: "patinhoTom", pose: "surpreso", position: "centro" },
            { characterId: "cachorrinhoBolinha", pose: "neutro", position: "direita" },
          ],
        },
      },
      {
        id: "cena-9",
        text:
          "Tom bateu as patinhas com mais força, e seu corpinho deslizou suavemente pela água, deixando pequenas ondinhas atrás de si. Uma borboleta azul passou voando baixinho, como se também quisesse ver o patinho nadando pela primeira vez. — Eu estou nadando de verdade! — riu Tom, cheio de alegria.",
        illustration: {
          background: "rioLagoa",
          characters: [{ characterId: "patinhoTom", pose: "animado", position: "centro" }],
          props: ["borboleta"],
        },
      },
      {
        id: "cena-9b",
        text:
          "Animado, Tom tentou virar para o outro lado, batendo as patinhas de um jeito diferente. No começo girou rápido demais e ficou tonto, rindo da própria confusão. Tentou de novo, mais devagar, e dessa vez conseguiu virar suavemente, como os patos de verdade faziam. — Estou aprendendo os truques! — exclamou, orgulhoso.",
        illustration: {
          background: "rioLagoa",
          characters: [{ characterId: "patinhoTom", pose: "animado", position: "centro" }],
        },
      },
      {
        id: "cena-9c",
        text:
          "Tom quis tentar mergulhar a cabecinha debaixo d'água, só por um segundinho, para ver os peixinhos que nadavam lá embaixo. Respirou fundo, prendeu o ar e mergulhou rapidinho. — Vi peixinhos coloridos! — exclamou, saindo todo molhado e feliz da vida.",
        illustration: {
          background: "rioLagoa",
          characters: [{ characterId: "patinhoTom", pose: "surpreso", position: "centro" }],
        },
      },
      {
        id: "cena-9d",
        text:
          "Bolinha, que não gostava muito de nadar fundo, ficou torcendo da margem, latindo animado cada vez que Tom tentava um truque novo. — Vai, Tom, você consegue! — gritava ele, abanando o rabo sem parar, contagiado pela alegria do amigo patinho.",
        illustration: {
          background: "rioLagoa",
          characters: [{ characterId: "cachorrinhoBolinha", pose: "animado", position: "centro" }],
        },
      },
      {
        id: "cena-9e",
        text:
          "Tom tentou nadar em linha reta até uma pedra no meio da lagoa, contando as patinhadas enquanto nadava: um, dois, três... chegou à pedra ofegante, mas sorrindo de orelha a orelha. — Consegui chegar até lá! — comemorou, batendo as asinhas na água.",
        illustration: {
          background: "rioLagoa",
          characters: [{ characterId: "patinhoTom", pose: "animado", position: "centro" }],
        },
      },
      {
        id: "cena-9f",
        text:
          "Descansando em cima da pedra, Tom olhou para a margem, para Bolinha, e depois para a lagoa inteira, sentindo-se orgulhoso daquela nova parte de si mesmo que tinha descoberto naquele dia. — Nunca mais vou ter medo de entrar na água — pensou, sorrindo para o céu azul.",
        illustration: {
          background: "rioLagoa",
          characters: [{ characterId: "patinhoTom", pose: "feliz", position: "centro" }],
          props: ["sol"],
        },
      },
      {
        id: "cena-10",
        text:
          "Bolinha latiu feliz da margem, aplaudindo com as patinhas. — Viu, Tom? Você só precisava confiar nos seus próprios pés! Os dois brincaram juntos até o sol começar a descer, Tom nadando em círculos pequenos, cada vez mais seguro, e Bolinha correndo animado pela beirada, torcendo por ele.",
        illustration: {
          background: "rioLagoa",
          characters: [
            { characterId: "patinhoTom", pose: "feliz", position: "centro" },
            { characterId: "cachorrinhoBolinha", pose: "animado", position: "direita" },
          ],
        },
      },
      {
        id: "cena-10b",
        text:
          "— Agora me ensina um truque seu! — disse Tom, saindo da água e se sacudindo todo. Bolinha riu e mostrou como cavava buraquinhos fundos na areia da margem, jogando terra para os dois lados. Tom tentou imitar com o bico, e os dois acabaram cobertos de areia, rindo sem parar.",
        illustration: {
          background: "rioLagoa",
          characters: [
            { characterId: "cachorrinhoBolinha", pose: "animado", position: "centro" },
            { characterId: "patinhoTom", pose: "feliz", position: "direita" },
          ],
        },
      },
      {
        id: "cena-10c",
        text:
          "Antes de ir para casa, os dois ainda brincaram de corrida com folhinhas secas que caíam na água: cada um escolhia uma folha e soprava de leve para fazer ela flutuar mais rápido até a outra margem. Tom venceu duas rodadas, e Bolinha venceu uma, e os dois comemoraram cada vitória como se fosse a maior competição do mundo.",
        illustration: {
          background: "rioLagoa",
          characters: [
            { characterId: "patinhoTom", pose: "animado", position: "centro" },
            { characterId: "cachorrinhoBolinha", pose: "animado", position: "direita" },
          ],
        },
      },
      {
        id: "cena-11",
        text:
          "Quando voltaram para a fazenda, Tom contou para toda a família, com o peito estufado de orgulho: — Eu nadei na lagoa hoje, e não tive medo nenhum! A família toda bateu as patinhas, orgulhosa, e Tom soube que, no dia seguinte, voltaria para nadar outra vez, cada vez com mais coragem.",
        illustration: {
          background: "fazenda",
          characters: [
            { characterId: "patinhoTom", pose: "feliz", position: "centro" },
            { characterId: "cachorrinhoBolinha", pose: "feliz", position: "direita" },
          ],
          props: ["sol"],
        },
      },
    ],
    familyQuestion:
      "Tem alguma coisa nova que você também tem um pouquinho de medo de tentar? Que tal conversarmos sobre isso juntos?",
  },
  {
    id: "a3-caixa-misteriosa",
    title: "O Dia da Caixa Misteriosa",
    synopsis:
      "Luna e Mel encontram uma caixinha escondida no jardim e descobrem, juntas, um tesouro que precisa ser cuidado em dupla.",
    ageGroup: 3,
    category: "Amizade",
    cover: {
      background: "jardim",
      characters: [
        { characterId: "gatinhaLuna", pose: "feliz", position: "centro" },
        { characterId: "raposaMel", pose: "feliz", position: "direita" },
      ],
      props: ["flor", "borboleta"],
    },
    scenes: [
      {
        id: "cena-1",
        text:
          "Luna, a gatinha cinza de laço roxo, estava explorando o jardim quando viu algo estranho escondido debaixo de um arbusto: uma caixinha de madeira, coberta de musgo e flores secas. — O que será isso? — murmurou ela, chegando mais perto, bem curiosa, com o rabo arrepiado de emoção.",
        illustration: {
          background: "jardim",
          characters: [{ characterId: "gatinhaLuna", pose: "neutro", position: "centro" }],
          props: ["flor"],
        },
      },
      {
        id: "cena-1b",
        text:
          "Luna se aproximou mais e passou a patinha pelo topo da caixinha, tirando um pouco do musgo. Por baixo, apareceram desenhos entalhados na madeira: pequenas flores e uma borboleta, bem desgastados pelo tempo. — Alguém fez isso com muito cuidado — pensou ela, intrigada com aquele desenho tão bonito.",
        illustration: {
          background: "jardim",
          characters: [{ characterId: "gatinhaLuna", pose: "surpreso", position: "centro" }],
          props: ["flor"],
        },
      },
      {
        id: "cena-2",
        text:
          "Bem na hora em que Luna ia tocar na caixinha, Mel, a raposinha laranja, apareceu correndo pelo caminho de pedrinhas. — Luna! O que você encontrou? — perguntou Mel, com os olhos brilhando de curiosidade. Luna sorriu e respondeu: — Não sei! Vamos descobrir juntas?",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "gatinhaLuna", pose: "surpreso", position: "centro" },
            { characterId: "raposaMel", pose: "feliz", position: "direita" },
          ],
        },
      },
      {
        id: "cena-3",
        text:
          "As duas amigas se agacharam ao lado da caixinha. Ela tinha uma fechadura pequena, enferrujada, e nenhuma delas tinha a chave. — Como vamos abrir isso? — perguntou Mel, cutucando a fechadura com a patinha. Luna pensou um pouco, girando os bigodes, pensativa.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "gatinhaLuna", pose: "neutro", position: "centro" },
            { characterId: "raposaMel", pose: "neutro", position: "esquerda" },
          ],
        },
      },
      {
        id: "cena-2c",
        text:
          "— O que você acha que tem aí dentro? — perguntou Mel, os olhos brilhando de curiosidade. — Talvez seja um mapa de tesouro! — imaginou Luna. — Ou brinquedos antigos! — sugeriu Mel. As duas ficaram inventando possibilidades cada vez mais fantásticas, rindo juntas enquanto examinavam a caixinha por todos os lados.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "gatinhaLuna", pose: "animado", position: "centro" },
            { characterId: "raposaMel", pose: "animado", position: "direita" },
          ],
        },
      },
      {
        id: "cena-3b",
        text:
          "Antes de pensar na chave, as duas tentaram outros jeitos de abrir a caixinha. Mel sacudiu de leve, ouvindo algo chacoalhar dentro. Luna colocou o olho numa fresta pequena, mas só viu escuridão. — Vamos ter que encontrar a chave mesmo — concluíram as duas, juntas.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "raposaMel", pose: "surpreso", position: "esquerda" },
            { characterId: "gatinhaLuna", pose: "neutro", position: "centro" },
          ],
        },
      },
      {
        id: "cena-4",
        text:
          "— Espera! — disse Luna de repente. — Vi uma chavinha brilhando perto das flores amarelas, perto do portão! Devo ter visto antes sem perceber que era importante. As duas correram juntas, patinhas batendo no chão, até o canteiro de flores amarelas do jardim.",
        illustration: {
          background: "jardim",
          characters: [{ characterId: "gatinhaLuna", pose: "animado", position: "centro" }],
          props: ["flor"],
        },
      },
      {
        id: "cena-5",
        text:
          "Lá estava a pequena chave, escondida entre as pétalas, brilhando fraquinho sob o sol. Mel a pegou com cuidado entre os dentinhos e trouxe correndo de volta. — Encontrei! — gritou ela, toda orgulhosa, agitando o rabo macio de um lado para o outro.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "raposaMel", pose: "feliz", position: "direita" },
            { characterId: "gatinhaLuna", pose: "feliz", position: "centro" },
          ],
        },
      },
      {
        id: "cena-5b",
        text:
          "No caminho de volta, encontraram uma poça grande de água bem no meio da trilha. Luna deu um pulo ágil e passou de um lado só, mas Mel, com a chave na boca, precisava de ajuda. Luna estendeu a patinha, e as duas atravessaram juntas, com cuidado, sem deixar a chave cair na água.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "gatinhaLuna", pose: "animado", position: "centro" },
            { characterId: "raposaMel", pose: "neutro", position: "direita" },
          ],
        },
      },
      {
        id: "cena-6",
        text:
          "De volta à caixinha, as duas amigas colocaram a chave na fechadura, com as patinhas tremendo de ansiedade. Click! A fechadura abriu com um estalinho suave. — Vamos abrir juntas, no três — disse Luna. — Um, dois, três!",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "gatinhaLuna", pose: "animado", position: "centro" },
            { characterId: "raposaMel", pose: "animado", position: "direita" },
          ],
        },
      },
      {
        id: "cena-7",
        text:
          "Dentro da caixinha, havia um bilhete antigo, desenhos de borboletas e flores, e um pequeno pote de sementes coloridas. — São sementes de flores raras! — exclamou Mel, examinando de perto. — Alguém deixou isso há muito tempo, esperando que alguém encontrasse.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "gatinhaLuna", pose: "surpreso", position: "centro" },
            { characterId: "raposaMel", pose: "surpreso", position: "direita" },
          ],
          props: ["borboleta"],
        },
      },
      {
        id: "cena-6c",
        text:
          "Antes de olhar dentro, as duas se encararam por um segundo, cheias de expectativa. — No três, a gente espia junto — sugeriu Luna. Seus coraçõezinhos batiam rápido de ansiedade, e um silêncio gostoso de suspense tomou conta do jardim inteiro, só quebrado pelo som distante dos passarinhos.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "gatinhaLuna", pose: "surpreso", position: "centro" },
            { characterId: "raposaMel", pose: "surpreso", position: "direita" },
          ],
        },
      },
      {
        id: "cena-7b",
        text:
          "— Será que essas sementes vão virar flores roxas, ou amarelas, ou quem sabe azuis? — imaginou Luna, segurando o potinho contra a luz do sol. Mel deu risada. — Só tem um jeito de descobrir: plantando! Fico tão curiosa que quase não consigo esperar para ver o resultado.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "gatinhaLuna", pose: "surpreso", position: "centro" },
            { characterId: "raposaMel", pose: "animado", position: "direita" },
          ],
          props: ["borboleta"],
        },
      },
      {
        id: "cena-8",
        text:
          "O bilhete dizia, com letras desenhadas: 'Para quem encontrar este tesouro: plante estas sementes com um amigo, e verá algo lindo crescer.' Luna e Mel se olharam, sorrindo. — Vamos plantar juntas! — disseram as duas, ao mesmo tempo, rindo da coincidência.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "gatinhaLuna", pose: "feliz", position: "centro" },
            { characterId: "raposaMel", pose: "feliz", position: "direita" },
          ],
        },
      },
      {
        id: "cena-8b",
        text:
          "— Onde vamos plantar? — perguntou Mel. Luna apontou para perto da cerca, onde pegava mais sol de manhã. Mel preferia perto da árvore, mais protegido do vento. As duas conversaram um pouquinho, até decidirem: — Que tal perto da cerca, mas do lado que tem a sombrinha da árvore à tarde? — sugeriu Luna, e as duas concordaram, satisfeitas com a ideia combinada.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "gatinhaLuna", pose: "neutro", position: "centro" },
            { characterId: "raposaMel", pose: "neutro", position: "direita" },
          ],
        },
      },
      {
        id: "cena-9",
        text:
          "As amigas escolheram um pedacinho de terra fofa, perto da cerca do jardim, e cavaram juntas pequenos buraquinhos com as patinhas. Luna colocava as sementes, uma por uma, com cuidado, enquanto Mel cobria cada uma delas com terrinha macia e fresca.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "gatinhaLuna", pose: "animado", position: "centro" },
            { characterId: "raposaMel", pose: "feliz", position: "esquerda" },
          ],
          props: ["flor"],
        },
      },
      {
        id: "cena-9b",
        text:
          "Enquanto cavavam, Mel começou a dar nomes para as sementinhas: — Essa aqui vai se chamar Flor-da-Manhã. E essa, Pétala-Dourada! Luna riu e entrou na brincadeira, inventando nomes engraçados também, até as duas rirem tanto que quase esqueceram quais sementinhas já tinham plantado.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "raposaMel", pose: "animado", position: "centro" },
            { characterId: "gatinhaLuna", pose: "animado", position: "direita" },
          ],
          props: ["flor"],
        },
      },
      {
        id: "cena-9c",
        text:
          "Mel teve uma ideia: — Vamos fazer uma placinha para marcar o lugar! Com um pedacinho de madeira e um pouco de tinta que encontraram no galpão, as duas desenharam uma flor colorida e escreveram, com letras tortinhas, 'Jardim das Amigas', fincando a placa bem ao lado da terrinha plantada.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "raposaMel", pose: "animado", position: "centro" },
            { characterId: "gatinhaLuna", pose: "feliz", position: "direita" },
          ],
        },
      },
      {
        id: "cena-10",
        text:
          "Depois de plantar todas as sementes, elas regaram a terrinha com uma latinha de água que encontraram perto do galinheiro. — Agora é só esperar — disse Mel. — E cuidar, todo dia, juntas. Luna assentiu, feliz, sabendo que tinha ganhado não só um tesouro, mas uma amizade ainda mais forte.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "gatinhaLuna", pose: "feliz", position: "centro" },
            { characterId: "raposaMel", pose: "feliz", position: "direita" },
          ],
          props: ["sol"],
        },
      },
      {
        id: "cena-10c",
        text:
          "Na manhã seguinte, Luna foi a primeira a chegar ao jardim, ainda de olhos sonolentos. A terra continuava igual, mas ela não se desapontou: apenas sorriu, lembrando da conversa sobre paciência, e regou a terrinha com cuidado antes mesmo de ir brincar de outra coisa.",
        illustration: {
          background: "jardim",
          characters: [{ characterId: "gatinhaLuna", pose: "neutro", position: "centro" }],
          props: ["sol"],
        },
      },
      {
        id: "cena-10d",
        text:
          "No segundo dia, Mel trouxe uma pena colorida para decorar a placinha, e Luna trouxe uma pedrinha brilhante para marcar o cantinho especial. — Assim fica ainda mais bonito! — disseram as duas, satisfeitas com os enfeites que tinham escolhido juntas.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "gatinhaLuna", pose: "feliz", position: "centro" },
            { characterId: "raposaMel", pose: "feliz", position: "direita" },
          ],
          props: ["flor"],
        },
      },
      {
        id: "cena-10e",
        text:
          "Mel sugeriu que inventassem uma canção para cantar enquanto regavam a terrinha. Juntas, criaram uma melodia bobinha sobre sementes e amizade, repetindo o refrão toda vez que molhavam o canteiro. A brincadeira deixava a espera muito mais leve e divertida.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "raposaMel", pose: "animado", position: "centro" },
            { characterId: "gatinhaLuna", pose: "animado", position: "direita" },
          ],
        },
      },
      {
        id: "cena-10f",
        text:
          "Depois de alguns dias regando com carinho, surgiu o primeiro broto verdinho, pequeno e tímido, espiando da terra. — Olha, Mel! Está nascendo! — gritou Luna, toda animada, chamando a amiga para ver de perto aquela novidade tão esperada.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "gatinhaLuna", pose: "surpreso", position: "centro" },
            { characterId: "raposaMel", pose: "animado", position: "direita" },
          ],
          props: ["flor"],
        },
      },
      {
        id: "cena-10g",
        text:
          "As duas ficaram agachadas, observando o brotinho por um bom tempo, sem nem piscar, como se pudessem ver ele crescer ali mesmo. — Paciência é mesmo uma parte boa de ter um tesouro assim — disse Mel, sorrindo, lembrando de como a espera tinha valido a pena.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "raposaMel", pose: "feliz", position: "centro" },
            { characterId: "gatinhaLuna", pose: "feliz", position: "direita" },
          ],
        },
      },
      {
        id: "cena-10h",
        text:
          "Luna sugeriu convidar outros amigos para ver o brotinho crescendo, e logo Mel e Pipo também vinham espiar de vez em quando, torcendo juntos pela plantinha. — Quanto mais amigos torcendo, mais especial fica — disse Luna, satisfeita com o pequeno grupinho que se formou ao redor do canteiro.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "gatinhaLuna", pose: "feliz", position: "centro" },
            { characterId: "raposaMel", pose: "feliz", position: "direita" },
          ],
          props: ["flor"],
        },
      },
      {
        id: "cena-11",
        text:
          "Todos os dias, as duas amigas voltavam para regar o canteiro, cantando e contando histórias enquanto esperavam. Elas sabiam que, nas semanas seguintes, flores lindas e coloridas iam brotar daquele pedacinho de terra — um tesouro que as duas tinham encontrado, e cuidado, juntas.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "gatinhaLuna", pose: "animado", position: "centro" },
            { characterId: "raposaMel", pose: "animado", position: "direita" },
          ],
          props: ["flor", "borboleta"],
        },
      },
    ],
    familyQuestion:
      "Você já encontrou algum tesouro especial com um amigo ou alguém da família? Como foi essa descoberta?",
  },
  {
    id: "a3-bento-com-ciumes",
    title: "Bento Está com Ciúmes",
    synopsis:
      "Bento sente ciúmes quando sua amiga Noz faz um novo amigo, até aprender que seu coração tem espaço para gostar de muitas pessoas.",
    ageGroup: 3,
    category: "Sentimentos",
    cover: {
      background: "florestaDia",
      characters: [
        { characterId: "ursoBento", pose: "feliz", position: "centro" },
        { characterId: "esquilaNoz", pose: "feliz", position: "direita" },
        { characterId: "passarinhoPipo", pose: "feliz", position: "esquerda" },
      ],
    },
    scenes: [
      {
        id: "cena-1",
        text:
          "Bento, o urso de suéter vermelho, e Noz, a esquilinha de gorro vermelho, eram amigos de todos os dias. Eles sempre brincavam juntos na floresta, pulando sobre troncos caídos e colhendo frutinhas silvestres nas árvores mais baixas.",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "ursoBento", pose: "feliz", position: "centro" },
            { characterId: "esquilaNoz", pose: "feliz", position: "direita" },
          ],
        },
      },
      {
        id: "cena-1b",
        text:
          "Todos os dias, logo depois do café da manhã, Bento e Noz se encontravam embaixo do grande carvalho para decidir a brincadeira do dia: às vezes era esconde-esconde entre os arbustos, às vezes era inventar histórias sobre as formas das nuvens, deitados na grama, observando o céu por horas.",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "ursoBento", pose: "feliz", position: "centro" },
            { characterId: "esquilaNoz", pose: "feliz", position: "direita" },
          ],
          props: ["nuvem"],
        },
      },
      {
        id: "cena-2",
        text:
          "Um dia, Noz apareceu correndo, toda animada, com um amigo novo ao lado: Pipo, o passarinho azul. — Bento! Olha quem eu encontrei! Pipo sabe fazer os assobios mais incríveis da floresta! Bento sorriu, mas sentiu algo estranho e apertado no peito.",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "ursoBento", pose: "neutro", position: "centro" },
            { characterId: "esquilaNoz", pose: "animado", position: "direita" },
          ],
        },
      },
      {
        id: "cena-2b",
        text:
          "Bento se aproximou um pouquinho, tentando entrar na brincadeira. — Eu também sei fazer assobios! — disse ele, tentando, mas só saiu um sopro sem graça. Noz e Pipo riram, não de maldade, mas Bento sentiu as orelhas esquentarem de vergonha e deu um passo para trás, quietinho.",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "ursoBento", pose: "triste", position: "centro" },
            { characterId: "esquilaNoz", pose: "animado", position: "direita" },
          ],
        },
      },
      {
        id: "cena-2c",
        text:
          "Bento tentou se afastar um pouquinho, fingindo estar ocupado catando frutinhas sozinho, mas seus olhos não paravam de olhar de rabo de olho para Noz e Pipo brincando ali perto. Cada risada dos dois parecia um pouquinho mais alta do que deveria ser.",
        illustration: {
          background: "florestaDia",
          characters: [{ characterId: "ursoBento", pose: "triste", position: "centro" }],
        },
      },
      {
        id: "cena-2d",
        text:
          "— Ora, eu também sei fazer coisas legais — pensou Bento, tentando se animar sozinho. Ele empilhou algumas pedrinhas, tentando fazer uma torre, mas sem graça nenhuma de brincar daquilo sem ter com quem comemorar quando desse certo.",
        illustration: {
          background: "florestaDia",
          characters: [{ characterId: "ursoBento", pose: "neutro", position: "centro" }],
        },
      },
      {
        id: "cena-3",
        text:
          "Durante toda a tarde, Noz e Pipo brincaram juntos, rindo e assobiando melodias divertidas. Bento ficou sentado num tronco, sozinho, vendo os dois se divertirem. — Será que Noz não quer mais brincar comigo? — pensou ele, triste, apertando as patas uma na outra.",
        illustration: {
          background: "florestaDia",
          characters: [{ characterId: "ursoBento", pose: "triste", position: "centro" }],
        },
      },
      {
        id: "cena-3b",
        text:
          "Bento lembrou de todas as tardes em que só ele e Noz colhiam frutinhas juntos, inventando histórias sobre as nuvens. Pareciam coisas tão especiais, só dos dois. Será que agora, com Pipo por perto, essas tardes especiais iam desaparecer para sempre? O pensamento apertou ainda mais o peito de Bento.",
        illustration: {
          background: "florestaDia",
          characters: [{ characterId: "ursoBento", pose: "triste", position: "centro" }],
        },
      },
      {
        id: "cena-4",
        text:
          "Bento foi embora sem dizer nada, caminhando devagar entre as árvores, com a cabeça baixa. Dentro dele, um sentimento estranho crescia: era como um nó apertado na barriga, misturado com vontade de chorar e também um pouquinho de raiva.",
        illustration: {
          background: "florestaDia",
          characters: [{ characterId: "ursoBento", pose: "triste", position: "centro" }],
        },
      },
      {
        id: "cena-5",
        text:
          "No dia seguinte, Noz foi procurar Bento e o encontrou sentado sozinho perto do riacho. — Bento, por que você foi embora ontem sem avisar? — perguntou ela, preocupada, sentando-se ao lado dele. Bento ficou quieto por um momento, olhando para a água.",
        illustration: {
          background: "rioLagoa",
          characters: [
            { characterId: "esquilaNoz", pose: "feliz", position: "esquerda" },
            { characterId: "ursoBento", pose: "neutro", position: "centro" },
          ],
        },
      },
      {
        id: "cena-5b",
        text:
          "— Está tudo bem, eu só queria caminhar um pouco — disse Bento, no começo, tentando esconder o que sentia. Noz ficou quietinha ao lado dele, sem forçar, só esperando. Depois de um tempo, sentindo-se seguro com o silêncio gentil da amiga, Bento finalmente respirou fundo e decidiu contar a verdade.",
        illustration: {
          background: "rioLagoa",
          characters: [
            { characterId: "ursoBento", pose: "neutro", position: "centro" },
            { characterId: "esquilaNoz", pose: "neutro", position: "direita" },
          ],
        },
      },
      {
        id: "cena-6",
        text:
          "— Eu fiquei com ciúmes — admitiu Bento, finalmente, com a voz embargada. — Pensei que você ia preferir brincar só com o Pipo, e esqueceria de mim. Noz ficou surpresa e colocou a patinha pequena sobre a pata grande de Bento, com carinho.",
        illustration: {
          background: "rioLagoa",
          characters: [
            { characterId: "ursoBento", pose: "triste", position: "centro" },
            { characterId: "esquilaNoz", pose: "neutro", position: "direita" },
          ],
        },
      },
      {
        id: "cena-6b",
        text:
          "— Sabe por que isso me assustou tanto? — continuou Bento, baixinho. — Uma vez, meu amigo Caco, o castor, fez um amigo novo e depois quase não brincava mais comigo. Fiquei com medo que isso acontecesse de novo, com você. Noz apertou a pata de Bento com carinho, entendendo agora toda a preocupação dele.",
        illustration: {
          background: "rioLagoa",
          characters: [
            { characterId: "ursoBento", pose: "triste", position: "centro" },
            { characterId: "esquilaNoz", pose: "neutro", position: "direita" },
          ],
        },
      },
      {
        id: "cena-7",
        text:
          "— Bento, eu adoro brincar com você! — disse Noz, com firmeza e doçura. — Ter um amigo novo não significa que eu quero menos os amigos antigos. Meu coração tem espaço para vários amigos, do mesmo jeitinho que a floresta tem espaço para muitas árvores diferentes.",
        illustration: {
          background: "rioLagoa",
          characters: [
            { characterId: "esquilaNoz", pose: "feliz", position: "centro" },
            { characterId: "ursoBento", pose: "neutro", position: "direita" },
          ],
        },
      },
      {
        id: "cena-7b",
        text:
          "— Olha, é como a árvore onde eu moro — explicou Noz. — Ela tem espaço para o meu ninho, para os passarinhos, para os esquilos vizinhos, e ainda cresce mais galhos para caber todo mundo. Meu coração funciona assim também: cresce mais um pouquinho cada vez que ganho um amigo novo, sem perder nenhum espaço dos amigos antigos.",
        illustration: {
          background: "rioLagoa",
          characters: [{ characterId: "esquilaNoz", pose: "feliz", position: "centro" }],
        },
      },
      {
        id: "cena-8",
        text:
          "Bento pensou naquilo por um instante. — Então... você não ia parar de gostar de mim? — perguntou ele, ainda um pouco incerto. Noz riu, um risinho gostoso e tranquilizador. — Nunca! Você é um dos meus melhores amigos da floresta inteira.",
        illustration: {
          background: "rioLagoa",
          characters: [
            { characterId: "ursoBento", pose: "surpreso", position: "centro" },
            { characterId: "esquilaNoz", pose: "feliz", position: "direita" },
          ],
        },
      },
      {
        id: "cena-8b",
        text:
          "— Olha, eu também sou amiga da coruja Dadá desde pequenininha, e isso nunca diminuiu o quanto gosto de você — acrescentou Noz, com um sorriso tranquilo. — Amizades antigas não desaparecem quando chegam amizades novas. Elas só ganham companhia. Bento sentiu o coração se aquecer com aquelas palavras tão sinceras.",
        illustration: {
          background: "rioLagoa",
          characters: [
            { characterId: "esquilaNoz", pose: "feliz", position: "centro" },
            { characterId: "ursoBento", pose: "feliz", position: "direita" },
          ],
        },
      },
      {
        id: "cena-9",
        text:
          "Nesse momento, Pipo chegou voando, pousando num galho próximo. — Bento! Noz me contou sobre você. Quer brincar com a gente? — convidou o passarinho, com um assobio alegre. Bento sentiu o nó na barriga desaparecer, trocado por um sorriso enorme.",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "ursoBento", pose: "feliz", position: "centro" },
            { characterId: "esquilaNoz", pose: "feliz", position: "direita" },
            { characterId: "passarinhoPipo", pose: "feliz", position: "esquerda" },
          ],
        },
      },
      {
        id: "cena-9b",
        text:
          "— Eu quero inventar uma brincadeira nova, dos três juntos — disse Bento, animado agora. — Que tal construirmos uma represinha no riacho, com pedrinhas e gravetos? Noz e Pipo adoraram a ideia, e logo os três estavam escolhendo as melhores pedras, rindo cada vez que a água encontrava um novo caminho.",
        illustration: {
          background: "rioLagoa",
          characters: [
            { characterId: "ursoBento", pose: "animado", position: "centro" },
            { characterId: "esquilaNoz", pose: "feliz", position: "direita" },
            { characterId: "passarinhoPipo", pose: "feliz", position: "esquerda" },
          ],
        },
      },
      {
        id: "cena-9c",
        text:
          "A represinha ficou pronta depois de muito trabalho em equipe, e a água formou uma pequena piscina tranquila atrás das pedras. — Olha só o que a gente construiu! — exclamou Bento, orgulhoso, admirando o resultado junto dos amigos.",
        illustration: {
          background: "rioLagoa",
          characters: [
            { characterId: "ursoBento", pose: "animado", position: "centro" },
            { characterId: "esquilaNoz", pose: "feliz", position: "direita" },
          ],
        },
      },
      {
        id: "cena-9d",
        text:
          "Pipo teve a ideia de fazer barquinhos de folha para navegar na piscininha nova. Os três dobraram folhas grandes com cuidado e ficaram observando os barquinhos flutuarem devagar, empurrados pelo ventinho suave que passava por ali.",
        illustration: {
          background: "rioLagoa",
          characters: [
            { characterId: "passarinhoPipo", pose: "feliz", position: "centro" },
            { characterId: "ursoBento", pose: "feliz", position: "direita" },
          ],
        },
      },
      {
        id: "cena-9e2",
        text:
          "Pipo também fez seu barquinho de folha, decorado com uma pétala pequena na ponta, para ficar mais bonito que os outros dois, brincando de competição amistosa. — O meu tem enfeite! — disse ele, rindo, orgulhoso da decoração caprichada.",
        illustration: {
          background: "rioLagoa",
          characters: [{ characterId: "passarinhoPipo", pose: "animado", position: "centro" }],
        },
      },
      {
        id: "cena-9e",
        text:
          "— O meu barquinho chegou primeiro! — comemorou Noz, batendo palmas. Bento riu, sem nenhum ciúme dessa vez, torcendo pela amiga com o coração leve. Ele percebeu como era bom simplesmente se divertir, sem comparar quem gostava mais de quem.",
        illustration: {
          background: "rioLagoa",
          characters: [
            { characterId: "esquilaNoz", pose: "animado", position: "centro" },
            { characterId: "ursoBento", pose: "feliz", position: "direita" },
          ],
        },
      },
      {
        id: "cena-10",
        text:
          "Os três brincaram juntos a tarde inteira, pulando sobre os troncos, colhendo frutinhas e até aprendendo, com a ajuda de Pipo, a assobiar pequenas melodias. Bento descobriu que ter mais um amigo não significava perder nenhum — significava ganhar ainda mais alegria para compartilhar.",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "ursoBento", pose: "animado", position: "centro" },
            { characterId: "esquilaNoz", pose: "animado", position: "direita" },
            { characterId: "passarinhoPipo", pose: "feliz", position: "esquerda" },
          ],
        },
      },
      {
        id: "cena-11",
        text:
          "No fim do dia, sentados juntos observando o pôr do sol entre as árvores, Bento percebeu que o sentimento de ciúme tinha ido embora completamente. Ele aprendeu que contar o que sentia, em vez de guardar tudo sozinho, foi o que ajudou a resolver tudo, e a fazer sua amizade com Noz ainda mais forte.",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "ursoBento", pose: "feliz", position: "centro" },
            { characterId: "esquilaNoz", pose: "feliz", position: "direita" },
            { characterId: "passarinhoPipo", pose: "feliz", position: "esquerda" },
          ],
          props: ["borboleta"],
        },
      },
      {
        id: "cena-10b",
        text:
          "Antes de ir para casa, Bento abraçou Noz e depois Pipo, agradecendo aos dois por um dia tão divertido. — Que bom que vocês dois são meus amigos — disse ele, sentindo o coração quentinho e sem nenhum resquício daquele ciúme do início do dia.",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "ursoBento", pose: "feliz", position: "centro" },
            { characterId: "esquilaNoz", pose: "feliz", position: "direita" },
          ],
        },
      },
      {
        id: "cena-11b",
        text:
          "Com o passar das semanas, o trio ficou conhecido por toda a floresta: o urso, a esquilinha e o passarinho que sempre brincavam juntos, inventando jogos novos a cada tarde. E sempre que algum outro bichinho da floresta queria se juntar à turma, os três se olhavam e diziam, sorrindo: — Claro, tem espaço de sobra para mais um amigo!",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "ursoBento", pose: "animado", position: "centro" },
            { characterId: "esquilaNoz", pose: "animado", position: "direita" },
            { characterId: "passarinhoPipo", pose: "animado", position: "esquerda" },
          ],
        },
      },
    ],
    familyQuestion:
      "Você já sentiu ciúmes de alguém importante para você? O que ajudou a melhorar esse sentimento?",
  },
  {
    id: "a3-expedicao-de-noz",
    title: "A Grande Expedição de Noz",
    synopsis:
      "Noz e Pipo atravessam a floresta em busca da lendária Árvore das Nozes Douradas, superando obstáculos juntos.",
    ageGroup: 3,
    category: "Aventuras",
    cover: {
      background: "florestaDia",
      characters: [
        { characterId: "esquilaNoz", pose: "animado", position: "centro" },
        { characterId: "passarinhoPipo", pose: "animado", position: "direita" },
      ],
      props: ["sol"],
    },
    scenes: [
      {
        id: "cena-1",
        text:
          "Noz, a esquilinha curiosa, adorava explorar cada cantinho da floresta em busca das melhores nozes e avelãs escondidas. Um dia, ela decidiu ir mais longe do que nunca, até a parte da floresta onde as árvores eram altas e desconhecidas.",
        illustration: {
          background: "florestaDia",
          characters: [{ characterId: "esquilaNoz", pose: "animado", position: "centro" }],
        },
      },
      {
        id: "cena-1b",
        text:
          "Antes de partir, Noz preparou uma pequena trouxinha com folhas grandes: guardou algumas avelãs para o caminho e enrolou uma folha em forma de copinho para carregar um pouco de água do riacho. — Pronta para a maior aventura da minha vida! — disse ela, ajeitando a trouxinha nas costas.",
        illustration: {
          background: "florestaDia",
          characters: [{ characterId: "esquilaNoz", pose: "animado", position: "centro" }],
        },
      },
      {
        id: "cena-2",
        text:
          "Pipo, o passarinho azul, viu Noz se preparando para a expedição e pousou ao lado dela. — Para onde você vai, Noz? — perguntou ele, inclinando a cabecinha, curioso. — Vou procurar a Árvore das Nozes Douradas, que a coruja Dadá me contou — respondeu Noz, cheia de empolgação.",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "esquilaNoz", pose: "neutro", position: "centro" },
            { characterId: "passarinhoPipo", pose: "feliz", position: "direita" },
          ],
        },
      },
      {
        id: "cena-2b2",
        text:
          "— A coruja Dadá me contou que, há muito tempo, uma árvore cresceu tão perto do sol da manhã que suas nozes ficaram cobertas de um brilho dourado — explicou Noz, com os olhos sonhadores. — Ela disse que só quem tiver paciência e coragem de atravessar a floresta antiga consegue encontrá-la.",
        illustration: {
          background: "florestaDia",
          characters: [{ characterId: "esquilaNoz", pose: "animado", position: "centro" }],
          props: ["sol"],
        },
      },
      {
        id: "cena-3",
        text:
          "— Posso ir com você? — pediu Pipo, batendo as asinhas de animação. — Eu posso voar na frente e ver o caminho lá do alto! Noz sorriu, feliz com a companhia. — Seria perfeito! Juntos, com certeza, vamos encontrar o caminho mais rápido.",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "esquilaNoz", pose: "animado", position: "centro" },
            { characterId: "passarinhoPipo", pose: "animado", position: "direita" },
          ],
        },
      },
      {
        id: "cena-3b",
        text:
          "— Vamos combinar um sinal — sugeriu Pipo. — Quando eu vir algo importante lá do alto, eu canto três vezes bem rápido. Noz achou a ideia ótima e praticaram juntos: Pipo cantou três vezes, piu-piu-piu, e Noz bateu palmas com as patinhas, confirmando que tinha entendido o código.",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "passarinhoPipo", pose: "animado", position: "direita" },
            { characterId: "esquilaNoz", pose: "feliz", position: "centro" },
          ],
        },
      },
      {
        id: "cena-4",
        text:
          "Os dois amigos caminharam e voaram por trilhas que Noz nunca tinha visto antes, passando por pedras grandes e riachinhos de água cristalina. Pipo voava em círculos no alto, gritando as direções: — Por aqui! Vi uma trilha que sobe pela montanha!",
        illustration: {
          background: "montanha",
          characters: [
            { characterId: "esquilaNoz", pose: "neutro", position: "centro" },
            { characterId: "passarinhoPipo", pose: "feliz", position: "fundo-direita" },
          ],
          props: ["nuvem"],
        },
      },
      {
        id: "cena-4b",
        text:
          "Logo adiante, um riachinho estreito cruzava a trilha. Noz olhou as pedrinhas espalhadas na água, tentando calcular os saltos. Pipo voou baixinho, guiando: — Pula nessa pedra lisa, depois na redonda, depois na achatada! Noz saltou de pedra em pedra, com o coração acelerado, até chegar seca do outro lado.",
        illustration: {
          background: "rioLagoa",
          characters: [
            { characterId: "esquilaNoz", pose: "surpreso", position: "centro" },
            { characterId: "passarinhoPipo", pose: "feliz", position: "fundo-direita" },
          ],
        },
      },
      {
        id: "cena-5",
        text:
          "No meio do caminho, Noz encontrou um obstáculo: um tronco caído, bem grande, atravessado sobre a trilha. — E agora? — perguntou ela, olhando para os lados, sem saber como passar. O tronco era alto demais para ela escalar sozinha, e muito longo para dar a volta rapidamente.",
        illustration: {
          background: "montanha",
          characters: [{ characterId: "esquilaNoz", pose: "surpreso", position: "centro" }],
        },
      },
      {
        id: "cena-6",
        text:
          "Pipo voou até o topo do tronco e observou com cuidado. — Olha, Noz, tem um buraquinho embaixo, por onde você consegue passar rastejando! — avisou ele. Noz se abaixou, encolheu o corpinho e, com um pouco de esforço, conseguiu atravessar por baixo do tronco.",
        illustration: {
          background: "montanha",
          characters: [
            { characterId: "passarinhoPipo", pose: "feliz", position: "fundo-direita" },
            { characterId: "esquilaNoz", pose: "neutro", position: "centro" },
          ],
        },
      },
      {
        id: "cena-6b",
        text:
          "Depois do susto do tronco, os dois pararam para descansar um pouquinho, sentados numa pedra coberta de musgo. Noz dividiu as avelãs que tinha trazido, e Pipo contou tudo que viu lá do alto: montanhas distantes, um lago brilhante, e pássaros grandes voando em círculos. Noz escutava encantada, mastigando devagar.",
        illustration: {
          background: "montanha",
          characters: [
            { characterId: "esquilaNoz", pose: "feliz", position: "centro" },
            { characterId: "passarinhoPipo", pose: "animado", position: "direita" },
          ],
          props: ["nuvem"],
        },
      },
      {
        id: "cena-6c",
        text:
          "Enquanto descansavam, Noz percebeu que o sol já estava mais baixo no céu do que esperava. — Será que vamos conseguir voltar antes de escurecer? — perguntou, um pouco preocupada. Pipo olhou para o horizonte e calculou: — Acho que ainda temos tempo, se não demorarmos muito mais.",
        illustration: {
          background: "montanha",
          characters: [
            { characterId: "esquilaNoz", pose: "neutro", position: "centro" },
            { characterId: "passarinhoPipo", pose: "neutro", position: "direita" },
          ],
          props: ["sol"],
        },
      },
      {
        id: "cena-6d",
        text:
          "Os dois se levantaram, animados outra vez, e continuaram caminhando com passo mais firme. Pipo voava um pouco à frente, cantando baixinho para manter o ânimo da dupla, enquanto Noz seguia confiante, carregando a trouxinha nas costas.",
        illustration: {
          background: "montanha",
          characters: [
            { characterId: "esquilaNoz", pose: "animado", position: "centro" },
            { characterId: "passarinhoPipo", pose: "feliz", position: "fundo-direita" },
          ],
        },
      },
      {
        id: "cena-7",
        text:
          "Do outro lado, uma trilha de luz dourada guiava entre as árvores altas. — Estamos quase lá, eu sinto! — disse Noz, seguindo o caminho iluminado pelo sol da tarde. Pipo voou na frente, cantando animado, guiando o caminho até uma clareira especial.",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "esquilaNoz", pose: "animado", position: "centro" },
            { characterId: "passarinhoPipo", pose: "feliz", position: "direita" },
          ],
          props: ["sol"],
        },
      },
      {
        id: "cena-7b",
        text:
          "— E se a árvore não existir de verdade? — perguntou Noz, de repente insegura. — E se for só uma história que a Dadá inventou? Pipo pousou no seu ombro, confiante. — Mesmo que não exista, já foi uma aventura incrível só de chegar até aqui, não acha? Noz respirou fundo e sorriu, sentindo a coragem voltar.",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "esquilaNoz", pose: "triste", position: "centro" },
            { characterId: "passarinhoPipo", pose: "neutro", position: "direita" },
          ],
        },
      },
      {
        id: "cena-8",
        text:
          "E então, lá estava: a Árvore das Nozes Douradas, enorme e brilhante, com frutinhos dourados pendendo de seus galhos altos. — Encontramos! — gritou Noz, dando pequenos saltinhos de alegria, quase sem acreditar que a lenda da coruja Dadá era verdadeira.",
        illustration: {
          background: "florestaDia",
          characters: [{ characterId: "esquilaNoz", pose: "surpreso", position: "centro" }],
        },
      },
      {
        id: "cena-9",
        text:
          "Noz subiu com cuidado pelo tronco grosso da árvore, usando suas garrinhas afiadas, enquanto Pipo voava ao redor, apontando os melhores frutinhos. Juntos, eles colheram algumas nozes douradas, guardando-as com cuidado numa bolsinha de folhas que Noz tinha trazido.",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "esquilaNoz", pose: "animado", position: "centro" },
            { characterId: "passarinhoPipo", pose: "animado", position: "direita" },
          ],
        },
      },
      {
        id: "cena-8c",
        text:
          "Antes de partir, Noz quebrou uma das nozes douradas com cuidado e provou um pedacinho. — Tem gosto de mel com um toque de canela! — exclamou, surpresa com o sabor diferente de tudo que já tinha comido. Pipo também provou um pedacinho e concordou, batendo as asinhas de alegria.",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "esquilaNoz", pose: "surpreso", position: "centro" },
            { characterId: "passarinhoPipo", pose: "animado", position: "direita" },
          ],
        },
      },
      {
        id: "cena-9b",
        text:
          "No caminho de volta, Noz virou numa trilha errada por engano, e tudo pareceu diferente de repente. — Será que nos perdemos? — perguntou, preocupada. Pipo voou alto e observou com calma. — Reconheço aquela pedra grande de antes! É por ali, à esquerda. Noz seguiu aliviada, confiando no amigo de olhos atentos.",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "esquilaNoz", pose: "triste", position: "centro" },
            { characterId: "passarinhoPipo", pose: "neutro", position: "fundo-direita" },
          ],
        },
      },
      {
        id: "cena-9c",
        text:
          "Enquanto caminhavam, uma chuvinha fina começou a cair, molhando as folhas ao redor. Noz e Pipo se abrigaram debaixo de uma folha bem grande, esperando a chuva passar, aproveitando para comer mais uma avelã do lanche que tinham guardado.",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "esquilaNoz", pose: "neutro", position: "centro" },
            { characterId: "passarinhoPipo", pose: "neutro", position: "direita" },
          ],
          props: ["nuvem"],
        },
      },
      {
        id: "cena-9c2",
        text:
          "Enquanto esperavam a chuva passar, Pipo contou piadas de passarinho para Noz, fazendo-a rir tanto que quase esqueceu do frio da chuva lá fora. — Você sempre sabe como deixar qualquer espera mais divertida — agradeceu ela, sorrindo para o amigo.",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "esquilaNoz", pose: "animado", position: "centro" },
            { characterId: "passarinhoPipo", pose: "feliz", position: "direita" },
          ],
        },
      },
      {
        id: "cena-9d",
        text:
          "Quando a chuvinha passou, um arco-íris colorido apareceu no céu, surpreendendo os dois amigos. — Que final perfeito para o nosso dia! — exclamou Noz, admirando as cores enquanto retomavam o caminho de volta para casa.",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "esquilaNoz", pose: "animado", position: "centro" },
            { characterId: "passarinhoPipo", pose: "animado", position: "direita" },
          ],
          props: ["arcoIris"],
        },
      },
      {
        id: "cena-10",
        text:
          "No caminho de volta, os dois amigos conversaram sobre toda a aventura: o tronco caído, a trilha iluminada, a árvore maravilhosa. — Essa foi a melhor expedição da minha vida! — disse Noz, sorrindo, com a bolsinha cheia de tesouros dourados.",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "esquilaNoz", pose: "feliz", position: "centro" },
            { characterId: "passarinhoPipo", pose: "feliz", position: "direita" },
          ],
          props: ["borboleta"],
        },
      },
      {
        id: "cena-11",
        text:
          "Quando voltaram para casa, Noz dividiu as nozes douradas com todos os amigos da floresta, contando a história da grande expedição com brilho nos olhos. Ela aprendeu que as melhores aventuras são ainda mais especiais quando compartilhadas com um bom amigo ao lado.",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "esquilaNoz", pose: "feliz", position: "centro" },
            { characterId: "passarinhoPipo", pose: "feliz", position: "direita" },
          ],
        },
      },
      {
        id: "cena-11b",
        text:
          "Noz guardou três nozes douradas especiais numa caixinha de madeira, para lembrar daquele dia sempre que quisesse. — Vou guardar essas para sempre, bem especiais — disse ela, sorrindo, enquanto Pipo assentia, concordando que algumas lembranças merecem ser guardadas com todo cuidado.",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "esquilaNoz", pose: "feliz", position: "centro" },
            { characterId: "passarinhoPipo", pose: "feliz", position: "direita" },
          ],
        },
      },
      {
        id: "cena-11c",
        text:
          "Pipo sugeriu que, da próxima vez, explorassem a parte da floresta perto do lago grande, onde ele tinha visto peixes coloridos lá do alto. Noz já ficou animada com a ideia, guardando aquele destino na cabecinha para a próxima grande expedição dos dois.",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "esquilaNoz", pose: "animado", position: "centro" },
            { characterId: "passarinhoPipo", pose: "animado", position: "direita" },
          ],
        },
      },
      {
        id: "cena-12",
        text:
          "— Qual foi a sua parte favorita? — perguntou Pipo, já se aconchegando para descansar depois do dia cheio. — Acho que foi atravessar o riacho nas pedrinhas! — respondeu Noz, rindo. — E a minha foi ver você provando a noz e fazendo aquela carinha de surpresa — brincou Pipo, e os dois riram juntos, lembrando de cada momento daquele dia inesquecível.",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "esquilaNoz", pose: "animado", position: "centro" },
            { characterId: "passarinhoPipo", pose: "animado", position: "direita" },
          ],
          props: ["estrelas"],
        },
      },
    ],
    familyQuestion:
      "Se você pudesse sair em uma expedição para encontrar um tesouro, quem você convidaria para ir junto?",
  },
  {
    id: "a3-doce-conta-ate-dez",
    title: "Doce Conta até Dez",
    synopsis:
      "O elefantinho Doce transforma uma tarde no jardim em uma divertida brincadeira de aprender a contar até dez com o amigo Tom.",
    ageGroup: 3,
    category: "Aprender Brincando",
    cover: {
      background: "jardim",
      characters: [
        { characterId: "elefantinhoDoce", pose: "animado", position: "centro" },
        { characterId: "patinhoTom", pose: "feliz", position: "direita" },
      ],
      props: ["flor", "bola"],
    },
    scenes: [
      {
        id: "cena-1",
        text:
          "Doce, o elefantinho azul clarinho de chapéu de palha, adorava contar as coisas que encontrava no jardim: as flores, as pedrinhas, as formiguinhas passando em fila. Hoje, ele decidiu que ia aprender a contar até dez, usando tudo que encontrasse pelo caminho.",
        illustration: {
          background: "jardim",
          characters: [{ characterId: "elefantinhoDoce", pose: "feliz", position: "centro" }],
        },
      },
      {
        id: "cena-1b",
        text:
          "Ele adorava contar desde pequeno: já tinha contado os pingos de chuva na janela, os passarinhos na cerca, até os próprios bocejos antes de dormir. — Contar é como um jogo que está escondido em todo lugar — pensava Doce, sorrindo, enquanto caminhava pelo jardim naquela manhã ensolarada.",
        illustration: {
          background: "jardim",
          characters: [{ characterId: "elefantinhoDoce", pose: "feliz", position: "centro" }],
          props: ["sol"],
        },
      },
      {
        id: "cena-2",
        text:
          "Tom, o patinho amarelo, apareceu correndo pelo caminho de pedras. — Doce, o que você está fazendo? — perguntou, curioso. — Estou aprendendo a contar até dez! — respondeu Doce, animado. — Quer brincar comigo?",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "elefantinhoDoce", pose: "neutro", position: "centro" },
            { characterId: "patinhoTom", pose: "feliz", position: "direita" },
          ],
        },
      },
      {
        id: "cena-2b",
        text:
          "— Depois das flores, podemos contar as borboletas que passarem, e os passarinhos no céu! — sugeriu Tom, todo animado, batendo as patinhas. Doce riu, achando a ideia ótima. — Vamos contar tudo que a gente encontrar pelo caminho, até chegar no número dez!",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "patinhoTom", pose: "animado", position: "centro" },
            { characterId: "elefantinhoDoce", pose: "feliz", position: "direita" },
          ],
        },
      },
      {
        id: "cena-3",
        text:
          "— Vamos contar as flores do jardim! — sugeriu Doce. Ele apontou a tromba para o primeiro canteiro. — Um, dois, três... — Doce contou cada flor amarela, devagarinho, usando a trombinha para apontar uma de cada vez, sem pular nenhuma.",
        illustration: {
          background: "jardim",
          characters: [{ characterId: "elefantinhoDoce", pose: "animado", position: "centro" }],
          props: ["flor"],
        },
      },
      {
        id: "cena-4",
        text:
          "— Quatro, cinco, seis! — continuou Doce, chegando até o segundo canteiro, de flores rosa. Tom bateu as patinhas, ajudando a contar junto, repetindo os números em voz alta, cada vez mais animado com a brincadeira.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "elefantinhoDoce", pose: "feliz", position: "centro" },
            { characterId: "patinhoTom", pose: "animado", position: "direita" },
          ],
          props: ["flor"],
        },
      },
      {
        id: "cena-4b",
        text:
          "Nesse momento, um ventinho soprou forte e balançou as flores, fazendo Doce se confundir. — Espera, eu já contei essa ou não? — perguntou, parando. Tom ajudou: — Ainda não, essa é nova! Doce respirou fundo e recomeçou com calma, tocando cada flor com a tromba para não se perder de novo.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "elefantinhoDoce", pose: "surpreso", position: "centro" },
            { characterId: "patinhoTom", pose: "neutro", position: "direita" },
          ],
          props: ["flor"],
        },
      },
      {
        id: "cena-5",
        text:
          "De repente, uma borboleta azul passou voando bem na frente de Doce. — Sete! — gritou ele, apontando para a borboleta, incluindo-a na contagem com um sorriso enorme. Tom riu, achando genial a ideia de contar também os bichinhos que passavam.",
        illustration: {
          background: "jardim",
          characters: [{ characterId: "elefantinhoDoce", pose: "surpreso", position: "centro" }],
          props: ["borboleta"],
        },
      },
      {
        id: "cena-5b",
        text:
          "— Toca em cada coisa enquanto conta, assim você nunca se perde — ensinou Doce, mostrando com a tromba. Tom tentou também, tocando cada pedrinha com o bico enquanto contava baixinho. — Agora entendi o truque! — disse ele, orgulhoso, repetindo o gesto mais uma vez para ter certeza.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "patinhoTom", pose: "animado", position: "centro" },
            { characterId: "elefantinhoDoce", pose: "feliz", position: "direita" },
          ],
        },
      },
      {
        id: "cena-5c",
        text:
          "Animado, Tom tentou contar sozinho as próximas coisas que encontrassem. — Oito... dez! — disse ele, pulando um número sem querer. Doce riu, gentil. — Quase! Depois do oito vem o nove, e só depois o dez. Tom tentou de novo, mais devagar, e dessa vez acertou a sequência certinha.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "patinhoTom", pose: "surpreso", position: "centro" },
            { characterId: "elefantinhoDoce", pose: "feliz", position: "direita" },
          ],
        },
      },
      {
        id: "cena-5d",
        text:
          "Uma formiguinha passou carregando uma folha, e Doce quase incluiu ela na contagem por engano. — Opa, essa já é outra brincadeira, não vale contar bichinhos que estão trabalhando! — riu ele, deixando a formiguinha seguir seu caminho em paz.",
        illustration: {
          background: "jardim",
          characters: [{ characterId: "elefantinhoDoce", pose: "surpreso", position: "centro" }],
        },
      },
      {
        id: "cena-5d2",
        text:
          "Doce também contou as próprias orelhas, bem grandes, e depois as patinhas, fazendo graça com a própria contagem. — Duas orelhas, quatro patas! — anunciou, rindo de si mesmo enquanto Tom aplaudia aquela ideia criativa de brincadeira.",
        illustration: {
          background: "jardim",
          characters: [{ characterId: "elefantinhoDoce", pose: "animado", position: "centro" }],
        },
      },
      {
        id: "cena-5e",
        text:
          "Tom quis saber se conseguiam encontrar algo que já estivesse em grupos de dois, para ir mais rápido. — Minhas patinhas são duas! — disse ele, rindo. Doce achou genial e começou a procurar coisas em pares pelo jardim também, acelerando um pouco a contagem.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "patinhoTom", pose: "animado", position: "centro" },
            { characterId: "elefantinhoDoce", pose: "feliz", position: "direita" },
          ],
        },
      },
      {
        id: "cena-6",
        text:
          "— Oito, nove... — Doce continuou, contando duas pedrinhas redondas que encontrou perto da cerca do jardim. Faltava só um número para completar a contagem até dez, e Doce sentia o coração bater rápido de empolgação.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "elefantinhoDoce", pose: "animado", position: "centro" },
            { characterId: "patinhoTom", pose: "feliz", position: "direita" },
          ],
        },
      },
      {
        id: "cena-7",
        text:
          "Bem nesse momento, uma bolinha vermelha rolou até os pés de Doce, vinda de algum lugar do jardim. — Dez! — gritaram os dois juntos, ao mesmo tempo, apontando para a bola. Doce pulou de alegria, com a tromba balançando animada.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "elefantinhoDoce", pose: "surpreso", position: "centro" },
            { characterId: "patinhoTom", pose: "animado", position: "direita" },
          ],
          props: ["bola"],
        },
      },
      {
        id: "cena-7b",
        text:
          "Os dois bateram as patinhas e a trombinha num alto-cinco animado, celebrando o número dez alcançado. — Nós conseguimos juntos! — disse Tom, batendo palmas com as patinhas, enquanto Doce dava pequenos saltinhos de alegria, sentindo o coração cheio de orgulho pela brincadeira bem-sucedida.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "elefantinhoDoce", pose: "animado", position: "centro" },
            { characterId: "patinhoTom", pose: "animado", position: "direita" },
          ],
          props: ["bola"],
        },
      },
      {
        id: "cena-8",
        text:
          "— Eu consegui contar até dez! — exclamou Doce, orgulhoso. Tom aplaudiu com as patinhas. — Você contou flores, uma borboleta, pedrinhas e até uma bola! Contar pode ser uma brincadeira bem divertida, não é?",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "elefantinhoDoce", pose: "feliz", position: "centro" },
            { characterId: "patinhoTom", pose: "feliz", position: "direita" },
          ],
        },
      },
      {
        id: "cena-8b",
        text:
          "— Vamos juntar tudo numa pilha, para ver os dez juntos de uma vez só? — sugeriu Tom. Eles reuniram as pedrinhas, a bolinha e desenharam as flores numa folha, formando um montinho. — Olha, dez coisas, todas juntinhas! — exclamou Doce, contando de novo, dessa vez olhando o grupo inteiro.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "elefantinhoDoce", pose: "animado", position: "centro" },
            { characterId: "patinhoTom", pose: "feliz", position: "direita" },
          ],
          props: ["bola", "flor"],
        },
      },
      {
        id: "cena-8c",
        text:
          "Doce pegou um gravetinho e desenhou os números na terra, um por um, enquanto Tom observava atento. — Esse redondinho é o oito, parece dois círculos juntos! — explicou Doce. Tom tentou desenhar também, rindo da própria tentativa tortinha, mas feliz por aprender como os números se pareciam.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "elefantinhoDoce", pose: "feliz", position: "centro" },
            { characterId: "patinhoTom", pose: "surpreso", position: "direita" },
          ],
        },
      },
      {
        id: "cena-9",
        text:
          "— Vamos fazer de novo, mas ao contrário agora? — propôs Tom. — Dez, nove, oito... Doce riu e começou a contar de trás para frente, tocando em cada coisa que tinha contado antes, só que na ordem inversa, o que fez tudo ainda mais divertido e desafiador.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "elefantinhoDoce", pose: "animado", position: "centro" },
            { characterId: "patinhoTom", pose: "animado", position: "direita" },
          ],
        },
      },
      {
        id: "cena-9b",
        text:
          "Na segunda tentativa de contar ao contrário, Doce se enrolou todo e disse os números fora de ordem, fazendo os dois rirem até doer a barriga. — Vamos com calma de novo — disse Tom, ainda rindo. — Dez, nove, oito, sete... Dessa vez, Doce conseguiu completar a sequência inteira sem nenhum erro.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "elefantinhoDoce", pose: "surpreso", position: "centro" },
            { characterId: "patinhoTom", pose: "animado", position: "direita" },
          ],
        },
      },
      {
        id: "cena-9c",
        text:
          "Tom quis inventar uma brincadeira nova: contar pulando, um número a cada pulo. — Um! — pulou ele. — Dois! — pulou de novo, cada vez mais alto. Doce riu e tentou também, suas pernonas fazendo pulinhos engraçados e desajeitados pelo gramado.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "patinhoTom", pose: "animado", position: "centro" },
            { characterId: "elefantinhoDoce", pose: "animado", position: "direita" },
          ],
        },
      },
      {
        id: "cena-9d",
        text:
          "Depois de pular até o número dez, os dois caíram sentados na grama, rindo sem parar da brincadeira bagunçada. — Contar pulando cansa bem mais! — disse Doce, ofegante, mas com um sorriso enorme estampado no rosto.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "elefantinhoDoce", pose: "feliz", position: "centro" },
            { characterId: "patinhoTom", pose: "feliz", position: "direita" },
          ],
        },
      },
      {
        id: "cena-9e",
        text:
          "— Agora vamos contar batendo palminhas! — sugeriu Tom, batendo as asinhas uma na outra a cada número. Doce tentou bater a tromba de leve contra as patinhas dianteiras, criando um som engraçado que fez os dois rirem ainda mais daquela nova forma de contar.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "patinhoTom", pose: "animado", position: "centro" },
            { characterId: "elefantinhoDoce", pose: "surpreso", position: "direita" },
          ],
        },
      },
      {
        id: "cena-10",
        text:
          "Quando terminaram, os dois amigos se sentaram na grama, cansados mas felizes. — Contar com um amigo é muito mais divertido do que contar sozinho — disse Doce, sorrindo. Tom assentiu, concordando completamente, abanando as penas da cauda de um lado para o outro.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "elefantinhoDoce", pose: "feliz", position: "centro" },
            { characterId: "patinhoTom", pose: "feliz", position: "direita" },
          ],
          props: ["sol"],
        },
      },
      {
        id: "cena-11",
        text:
          "No dia seguinte, Doce já estava pensando em novos desafios de contagem: contar até vinte, contar as nuvens no céu, contar os passarinhos que cantavam pela manhã. Ele descobriu que, quanto mais praticava, mais fácil e mais divertido ficava aprender algo novo.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "elefantinhoDoce", pose: "animado", position: "centro" },
            { characterId: "patinhoTom", pose: "animado", position: "direita" },
          ],
          props: ["flor", "bola"],
        },
      },
      {
        id: "cena-11b",
        text:
          "Antes de se despedir, Tom pediu para Doce ensinar a contagem para seus irmãozinhos patinhos também. — Claro! — respondeu Doce, animado com a ideia de compartilhar aquela brincadeira tão divertida com mais amigos da fazenda.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "elefantinhoDoce", pose: "feliz", position: "centro" },
            { characterId: "patinhoTom", pose: "feliz", position: "direita" },
          ],
        },
      },
      {
        id: "cena-12",
        text:
          "Naquela noite, antes de dormir, Doce olhou pela janela e viu as primeiras estrelinhas aparecendo. — Um, dois, três estrelinhas! — contou, sorrindo sozinho no escuro do quarto. No dia seguinte, ele já tinha um novo plano: convidar Tom para contar quantas estrelinhas conseguiam ver juntos, antes de o sono chegar.",
        illustration: {
          background: "quartoNoite",
          characters: [{ characterId: "elefantinhoDoce", pose: "sonolento", position: "centro" }],
          props: ["estrelas", "lua"],
        },
      },
    ],
    familyQuestion: "Vamos contar juntos até dez agora? O que podemos contar aqui perto de nós?",
  },
  {
    id: "a3-estrela-de-mimosa",
    title: "A Estrela de Mimosa",
    synopsis:
      "A ursinha Mimosa perde seu cobertor favorito na hora de dormir, mas descobre na luz das estrelas um novo tipo de conforto.",
    ageGroup: 3,
    category: "Hora de Dormir",
    cover: {
      background: "cavernaAconchegante",
      characters: [{ characterId: "ursinhaMimosa", pose: "sonolento", position: "centro" }],
      props: ["lua", "estrelas"],
    },
    scenes: [
      {
        id: "cena-1",
        text:
          "Mimosa, a ursinha polar branca de cachecol rosa, estava prestes a dormir quando percebeu algo terrível: seu cobertor favorito, aquele bem quentinho e suave, tinha desaparecido! — Onde foi que eu deixei meu cobertor? — perguntou ela, procurando por toda a caverna aconchegante onde morava.",
        illustration: {
          background: "cavernaAconchegante",
          characters: [{ characterId: "ursinhaMimosa", pose: "triste", position: "centro" }],
        },
      },
      {
        id: "cena-1b",
        text:
          "Aquele cobertor rosa não era um cobertor qualquer: tinha sido feito pela avó de Mimosa, com muito carinho, ainda antes de ela nascer. Cada vez que se cobria com ele, Mimosa sentia como se um abraço quentinho da avó estivesse ali, mesmo quando ela estava longe.",
        illustration: {
          background: "cavernaAconchegante",
          characters: [{ characterId: "ursinhaMimosa", pose: "triste", position: "centro" }],
        },
      },
      {
        id: "cena-2",
        text:
          "Ela procurou debaixo da cama de gelo macio, atrás das pedras decoradas e até dentro do cesto de brinquedos. Nada. O cobertor simplesmente não estava em lugar nenhum, e sem ele, Mimosa não conseguia imaginar como ia conseguir dormir aquela noite.",
        illustration: {
          background: "cavernaAconchegante",
          characters: [{ characterId: "ursinhaMimosa", pose: "neutro", position: "centro" }],
        },
      },
      {
        id: "cena-2b",
        text:
          "— Onde eu estava a última vez que usei ele? — pensou Mimosa, tentando lembrar. Será que tinha deixado perto das pedras decoradas, ou talvez no cantinho onde brincava de tarde? Ela revirou tudo de novo, cada vez mais preocupada, sem encontrar nenhum sinal do tecido rosa e suave.",
        illustration: {
          background: "cavernaAconchegante",
          characters: [{ characterId: "ursinhaMimosa", pose: "surpreso", position: "centro" }],
        },
      },
      {
        id: "cena-3",
        text:
          "Sem o cobertor, Mimosa se sentiu um pouquinho sozinha e com frio, mesmo estando dentro da caverna quentinha. Ela se sentou no chão, abraçando os próprios joelhos, pensando em como aquele cobertor sempre a fazia sentir segura e protegida na hora de dormir.",
        illustration: {
          background: "cavernaAconchegante",
          characters: [{ characterId: "ursinhaMimosa", pose: "triste", position: "centro" }],
        },
      },
      {
        id: "cena-3b",
        text:
          "Tentando se acalmar, Mimosa cantarolou baixinho uma canção que a avó costumava cantar para ela. A melodia ajudou um pouquinho, mas ainda faltava algo: aquele aconchego quentinho que só o cobertor parecia dar. Ela suspirou e abraçou os próprios bracinhos, esperando o sono chegar de algum jeito.",
        illustration: {
          background: "cavernaAconchegante",
          characters: [{ characterId: "ursinhaMimosa", pose: "triste", position: "centro" }],
        },
      },
      {
        id: "cena-3c",
        text:
          "Ela pensou em chamar alguém para ajudar a procurar, mas todos os vizinhos já estavam dormindo àquela hora da noite. — Vou ter que descobrir um jeito sozinha, pelo menos por enquanto — pensou Mimosa, respirando fundo para se acalmar um pouquinho.",
        illustration: {
          background: "cavernaAconchegante",
          characters: [{ characterId: "ursinhaMimosa", pose: "triste", position: "centro" }],
        },
      },
      {
        id: "cena-4",
        text:
          "De repente, pela pequena abertura no topo da caverna, um raio de luz prateada entrou, iluminando o chão. Mimosa olhou para cima e viu a lua, grande e redonda, brilhando forte no céu escuro da noite.",
        illustration: {
          background: "cavernaAconchegante",
          characters: [{ characterId: "ursinhaMimosa", pose: "neutro", position: "centro" }],
          props: ["lua"],
        },
      },
      {
        id: "cena-4b2",
        text:
          "Ela se levantou, ainda incerta, e caminhou devagar até ficar bem debaixo daquele raio prateado. Era estranho: não sentia nenhum calor de verdade tocando seu pelo, mas havia algo tranquilizador só em estar perto daquela luz tão bonita, como se a escuridão em volta ficasse um pouco menos grande.",
        illustration: {
          background: "cavernaAconchegante",
          characters: [{ characterId: "ursinhaMimosa", pose: "surpreso", position: "centro" }],
          props: ["lua"],
        },
      },
      {
        id: "cena-5",
        text:
          "Junto da lua, pequenas estrelinhas espalhadas pelo céu também brilhavam, piscando suavemente. Mimosa ficou admirando aquela luz por um momento, e notou que, de alguma forma, aquele brilho parecia quentinho, mesmo vindo de tão longe.",
        illustration: {
          background: "cavernaAconchegante",
          characters: [{ characterId: "ursinhaMimosa", pose: "surpreso", position: "centro" }],
          props: ["estrelas"],
        },
      },
      {
        id: "cena-5b",
        text:
          "— Oi, estrelinhas — sussurrou Mimosa, olhando para cima. — Vocês também ficam sozinhas lá no céu tão grande? Claro que as estrelas não responderam com palavras, mas pareciam piscar de um jeito gentil, como se estivessem mandando um recadinho de companhia só para ela.",
        illustration: {
          background: "cavernaAconchegante",
          characters: [{ characterId: "ursinhaMimosa", pose: "neutro", position: "centro" }],
          props: ["estrelas"],
        },
      },
      {
        id: "cena-6",
        text:
          "— Será que a luz das estrelas pode me ajudar a ficar quentinha, do mesmo jeito que meu cobertor fazia? — pensou Mimosa, curiosa. Ela se aproximou do raio de luz e sentiu algo diferente: não era calor de verdade, mas era um conforto calmo, que acalmava seu coraçãozinho.",
        illustration: {
          background: "cavernaAconchegante",
          characters: [{ characterId: "ursinhaMimosa", pose: "neutro", position: "centro" }],
        },
      },
      {
        id: "cena-6b",
        text:
          "Curiosa, Mimosa se afastou um pouquinho do raio de luz, e sentiu o conforto diminuir levemente. Voltou mais para perto, e o aconchego cresceu de novo. — Então funciona mesmo, quanto mais perto, melhor! — descobriu ela, sorrindo pela primeira vez desde que tinha perdido o cobertor.",
        illustration: {
          background: "cavernaAconchegante",
          characters: [{ characterId: "ursinhaMimosa", pose: "surpreso", position: "centro" }],
          props: ["lua"],
        },
      },
      {
        id: "cena-6c",
        text:
          "Mimosa trouxe algumas pedrinhas brancas e as arrumou ao redor do raio de luz, criando uma espécie de ninho brilhante só para ela se deitar. — Agora tenho minha própria caminha de estrelas — disse, satisfeita com a nova ideia.",
        illustration: {
          background: "cavernaAconchegante",
          characters: [{ characterId: "ursinhaMimosa", pose: "feliz", position: "centro" }],
          props: ["lua"],
        },
      },
      {
        id: "cena-6d",
        text:
          "Ela testou deitar de um lado, depois do outro, ajustando as pedrinhas até ficar confortável de verdade. — Está quase perfeito — murmurou, bocejando de leve, sentindo o sono começar a chegar devagarinho, puxando suas pálpebras para baixo.",
        illustration: {
          background: "cavernaAconchegante",
          characters: [{ characterId: "ursinhaMimosa", pose: "sonolento", position: "centro" }],
        },
      },
      {
        id: "cena-7",
        text:
          "Mimosa deitou-se bem debaixo daquele raio de luz prateada, fechando os olhos devagar. Ela imaginou que cada estrelinha no céu era como um pequeno abraço, enviado de longe para ajudá-la a se sentir segura, mesmo sem o cobertor favorito por perto.",
        illustration: {
          background: "cavernaAconchegante",
          characters: [{ characterId: "ursinhaMimosa", pose: "feliz", position: "centro" }],
          props: ["estrelas", "lua"],
        },
      },
      {
        id: "cena-7b",
        text:
          "Deitada ali, Mimosa lembrou de outras noites boas: quando brincou de sombra com a luz da lua, quando contou as estrelas até perder a conta de sono, quando a avó lhe mostrou pela primeira vez como encontrar a estrela mais brilhante do céu. Cada lembrança deixava seu coraçãozinho mais quentinho.",
        illustration: {
          background: "cavernaAconchegante",
          characters: [{ characterId: "ursinhaMimosa", pose: "feliz", position: "centro" }],
          props: ["estrelas"],
        },
      },
      {
        id: "cena-8",
        text:
          "Pouco a pouco, respirando fundo e devagar, Mimosa sentiu o corpo relaxar completamente. A luz da lua parecia abraçá-la suavemente, e ela começou a sentir o mesmo aconchego gostoso que o cobertor costumava dar, só que vindo do céu inteiro.",
        illustration: {
          background: "cavernaAconchegante",
          characters: [{ characterId: "ursinhaMimosa", pose: "sonolento", position: "centro" }],
          props: ["lua"],
        },
      },
      {
        id: "cena-8b2",
        text:
          "Um grilo começou a cantar baixinho do lado de fora da caverna, e o som se misturou gostosamente com o silêncio aconchegante do quarto. Mimosa sorriu com os olhos já fechados, pensando em como a floresta inteira parecia ter seu próprio jeito de ajudar todo mundo a descansar bem.",
        illustration: {
          background: "cavernaAconchegante",
          characters: [{ characterId: "ursinhaMimosa", pose: "sonolento", position: "centro" }],
        },
      },
      {
        id: "cena-9",
        text:
          "Bem quando Mimosa estava quase adormecendo, ela avistou, encostado atrás de uma pedra grande, exatamente o que estava procurando: seu cobertor rosa e quentinho, que tinha caído ali mais cedo, sem que ela percebesse.",
        illustration: {
          background: "cavernaAconchegante",
          characters: [{ characterId: "ursinhaMimosa", pose: "feliz", position: "centro" }],
        },
      },
      {
        id: "cena-9b",
        text:
          "Antes de pegar o cobertor de volta, Mimosa parou um instantinho. — Será que eu ainda preciso tanto dele? — pensou, sorrindo para si mesma. Fechou os olhos e ficou mais um pouquinho só com a luz das estrelas, sentindo que já tinha aprendido algo novo e especial sobre se sentir segura.",
        illustration: {
          background: "cavernaAconchegante",
          characters: [{ characterId: "ursinhaMimosa", pose: "feliz", position: "centro" }],
          props: ["lua", "estrelas"],
        },
      },
      {
        id: "cena-9c",
        text:
          "Mimosa pegou o cobertor com cuidado e cheirou o tecido macio, sentindo o cheirinho familiar da avó. — Senti sua falta — sussurrou para o cobertor, abraçando-o apertado antes de pensar no que fazer a seguir, feliz por tê-lo encontrado.",
        illustration: {
          background: "cavernaAconchegante",
          characters: [{ characterId: "ursinhaMimosa", pose: "feliz", position: "centro" }],
        },
      },
      {
        id: "cena-10",
        text:
          "— Encontrei você! — disse Mimosa, sorrindo, puxando o cobertor macio para perto de si. Mas, ao se cobrir, ela percebeu que não precisava mais tanto dele quanto pensava: a luz das estrelas já tinha ensinado seu coração a se sentir seguro, de qualquer jeito.",
        illustration: {
          background: "cavernaAconchegante",
          characters: [{ characterId: "ursinhaMimosa", pose: "animado", position: "centro" }],
        },
      },
      {
        id: "cena-10b",
        text:
          "Ela colocou o cobertor por cima dos ombros, mas deixou as patinhas de fora, bem debaixo do raio de luz prateada, para sentir os dois tipos de aconchego ao mesmo tempo. — Agora sim, perfeito dos dois jeitos — murmurou, satisfeita com a combinação.",
        illustration: {
          background: "cavernaAconchegante",
          characters: [{ characterId: "ursinhaMimosa", pose: "feliz", position: "centro" }],
          props: ["lua"],
        },
      },
      {
        id: "cena-10c",
        text:
          "Ela bocejou mais uma vez, sentindo as pálpebras ficarem pesadas de verdade agora, com os dois tipos de aconchego juntos fazendo toda a diferença para aquela noite tão cheia de descobertas sobre o que realmente a fazia se sentir segura.",
        illustration: {
          background: "cavernaAconchegante",
          characters: [{ characterId: "ursinhaMimosa", pose: "sonolento", position: "centro" }],
        },
      },
      {
        id: "cena-11",
        text:
          "Mimosa se aconchegou, agora com o cobertor e com a luz das estrelas brilhando suavemente pela abertura da caverna. — Boa noite, estrelinhas. Boa noite, lua — ela sussurrou, antes de finalmente adormecer, tranquila e aquecida por dentro e por fora.",
        illustration: {
          background: "cavernaAconchegante",
          characters: [{ characterId: "ursinhaMimosa", pose: "sonolento", position: "centro" }],
          props: ["lua", "estrelas"],
        },
      },
      {
        id: "cena-11b",
        text:
          "Mimosa sonhou, naquela noite, com um campo cheio de estrelinhas que desciam devagarinho do céu só para brincar com ela, uma brincadeira doce e tranquila que a fez sorrir enquanto dormia, bem aconchegada entre o cobertor e a luz prateada da lua.",
        illustration: {
          background: "cavernaAconchegante",
          characters: [{ characterId: "ursinhaMimosa", pose: "sonolento", position: "centro" }],
          props: ["estrelas"],
        },
      },
      {
        id: "cena-12",
        text:
          "Na manhã seguinte, Mimosa guardou o cobertor com cuidado, mas dessa vez amarrou uma fitinha nele para não perdê-lo de novo. E, à noite, quando foi se preparar para dormir, deixou de propósito uma pequena brechinha na parede da caverna, só para poder ver as estrelinhas antes de fechar os olhos, como uma nova parte gostosa da sua rotina.",
        illustration: {
          background: "cavernaAconchegante",
          characters: [{ characterId: "ursinhaMimosa", pose: "feliz", position: "centro" }],
          props: ["lua"],
        },
      },
    ],
    familyQuestion: "O que faz você se sentir seguro e tranquilo na hora de dormir?",
  },
  {
    id: "a3-coco-encontra-sua-voz",
    title: "Coco Encontra sua Voz",
    synopsis:
      "O sapinho Coco tem vergonha do próprio croac, até descobrir, com a ajuda de Pipo, que sua voz também é especial.",
    ageGroup: 3,
    category: "Animais",
    cover: {
      background: "rioLagoa",
      characters: [
        { characterId: "sapinhoCoco", pose: "animado", position: "centro" },
        { characterId: "passarinhoPipo", pose: "feliz", position: "direita" },
      ],
      props: ["lua", "estrelas"],
    },
    scenes: [
      {
        id: "cena-1",
        text:
          "Coco, o sapinho verde de boné laranja, adorava a lagoa onde morava, mas tinha um segredo: ele não gostava do próprio croac. Achava sua voz estranha, rouca e diferente demais dos outros sons bonitos da floresta.",
        illustration: {
          background: "rioLagoa",
          characters: [{ characterId: "sapinhoCoco", pose: "triste", position: "centro" }],
        },
      },
      {
        id: "cena-1b",
        text:
          "Uma vez, sem querer, Coco soltou um croac bem alto no meio de uma tarde quieta, e alguns bichinhos olharam na sua direção, surpresos. Ninguém disse nada de ruim, mas Coco ficou tão sem jeito que mergulhou debaixo da vitória-régia e não saiu de lá por um bom tempo.",
        illustration: {
          background: "rioLagoa",
          characters: [{ characterId: "sapinhoCoco", pose: "triste", position: "centro" }],
        },
      },
      {
        id: "cena-1c",
        text:
          "Depois daquele dia, Coco passou a falar bem baixinho, quase sussurrando, com medo de soltar um croac alto sem querer de novo. Seus amigos nem percebiam, mas para ele aquilo parecia a coisa mais importante do mundo, um segredo que precisava guardar.",
        illustration: {
          background: "rioLagoa",
          characters: [{ characterId: "sapinhoCoco", pose: "triste", position: "centro" }],
        },
      },
      {
        id: "cena-2",
        text:
          "Todas as tardes, os passarinhos cantavam melodias lindas, e Coco ficava quietinho, escondido entre as folhas de vitória-régia, sem coragem de soltar nem um croac. Pipo, o passarinho azul, notou o amigo tão calado e pousou ao lado dele.",
        illustration: {
          background: "rioLagoa",
          characters: [
            { characterId: "sapinhoCoco", pose: "neutro", position: "centro" },
            { characterId: "passarinhoPipo", pose: "feliz", position: "direita" },
          ],
        },
      },
      {
        id: "cena-2b",
        text:
          "Uma vez, escondido, Coco tentou cantar como os passarinhos, fazendo um tio-tio-tio bem fininho. Mas sua voz não saía daquele jeito de forma alguma — só conseguia o croac grosso de sempre. Ele desistiu, desanimado, achando que sua voz realmente não prestava para cantar.",
        illustration: {
          background: "rioLagoa",
          characters: [{ characterId: "sapinhoCoco", pose: "triste", position: "centro" }],
        },
      },
      {
        id: "cena-3",
        text:
          "— Coco, por que você nunca canta com a gente? — perguntou Pipo, gentilmente. Coco baixou os olhinhos. — Porque minha voz não é bonita como a de vocês. É só um croac, croac, sem nenhuma graça.",
        illustration: {
          background: "rioLagoa",
          characters: [
            { characterId: "sapinhoCoco", pose: "triste", position: "centro" },
            { characterId: "passarinhoPipo", pose: "neutro", position: "direita" },
          ],
        },
      },
      {
        id: "cena-4",
        text:
          "Pipo pensou um pouco e disse: — Mas Coco, você já ouviu com atenção o som que você faz? Cada bichinho da floresta tem um jeito diferente de cantar, e isso é o que torna tudo tão interessante de se ouvir.",
        illustration: {
          background: "rioLagoa",
          characters: [
            { characterId: "passarinhoPipo", pose: "feliz", position: "direita" },
            { characterId: "sapinhoCoco", pose: "neutro", position: "centro" },
          ],
        },
      },
      {
        id: "cena-4b",
        text:
          "— Mas e se todo mundo rir de mim? — perguntou Coco, ainda insegura. Pipo pousou mais perto, com gentileza. — Ninguém riu de mim quando eu estava aprendendo a cantar, Coco. E mesmo que alguém risse, isso não mudaria o fato de que sua voz é sua, e tem valor do jeitinho que é.",
        illustration: {
          background: "rioLagoa",
          characters: [
            { characterId: "sapinhoCoco", pose: "triste", position: "centro" },
            { characterId: "passarinhoPipo", pose: "feliz", position: "direita" },
          ],
        },
      },
      {
        id: "cena-4c",
        text:
          "— E se eu tentar só uma vezinha, bem baixinho, só para mim mesmo escutar? — pensou Coco, considerando a ideia de Pipo. Parecia menos assustador do que cantar na frente de todo mundo logo de cara, um passinho pequeno de cada vez.",
        illustration: {
          background: "rioLagoa",
          characters: [{ characterId: "sapinhoCoco", pose: "neutro", position: "centro" }],
        },
      },
      {
        id: "cena-5",
        text:
          "Coco ficou pensativo. Nunca tinha realmente parado para escutar o próprio croac com atenção, só tinha decidido que não gostava, sem nem dar uma chance de verdade. — Será que... eu deveria tentar escutar melhor? — pensou ele, curioso.",
        illustration: {
          background: "rioLagoa",
          characters: [{ characterId: "sapinhoCoco", pose: "surpreso", position: "centro" }],
        },
      },
      {
        id: "cena-5b",
        text:
          "Naquela tardezinha, a lagoa ficou especialmente quieta. O sol se escondia devagar, pintando a água de laranja, e nem os grilos tinham começado a cantar ainda. Coco escolheu aquele momento calmo, sem ninguém por perto, para fazer sua primeira experiência sozinho, sem medo de ser visto.",
        illustration: {
          background: "rioLagoa",
          characters: [{ characterId: "sapinhoCoco", pose: "neutro", position: "centro" }],
          props: ["sol"],
        },
      },
      {
        id: "cena-6",
        text:
          "Naquela noite, Coco se sentou numa folha grande, sozinho, e soltou um croac bem baixinho, só para experimentar. O som ecoou suavemente pela lagoa tranquila, misturando-se com o barulho da água e o vento nas árvores.",
        illustration: {
          background: "rioLagoa",
          characters: [{ characterId: "sapinhoCoco", pose: "neutro", position: "centro" }],
        },
      },
      {
        id: "cena-7",
        text:
          "Para sua surpresa, o eco do croac, repetido pela lagoa, criava um som gostoso de se ouvir, quase como uma música da natureza. Coco soltou outro croac, um pouco mais alto, e gostou ainda mais do resultado.",
        illustration: {
          background: "rioLagoa",
          characters: [{ characterId: "sapinhoCoco", pose: "surpreso", position: "centro" }],
          props: ["lua"],
        },
      },
      {
        id: "cena-7b",
        text:
          "Coco soltou um croac e esperou o eco voltar, depois soltou outro croac logo em seguida, criando quase uma dupla com o próprio som refletido pela água. — Estou cantando com o meu próprio eco! — riu ele, achando aquilo a coisa mais divertida que já tinha feito na lagoa.",
        illustration: {
          background: "rioLagoa",
          characters: [{ characterId: "sapinhoCoco", pose: "animado", position: "centro" }],
          props: ["lua"],
        },
      },
      {
        id: "cena-8",
        text:
          "Ele experimentou croacs curtos, croacs longos, croacs graves e croacs mais agudos, descobrindo que sua voz tinha muito mais variedade do que ele imaginava. — Eu consigo fazer tantos sons diferentes! — exclamou Coco, impressionado consigo mesmo.",
        illustration: {
          background: "rioLagoa",
          characters: [{ characterId: "sapinhoCoco", pose: "animado", position: "centro" }],
        },
      },
      {
        id: "cena-8b",
        text:
          "Coco até inventou um pequeno ritmo, misturando croacs curtos com croacs longos, criando uma espécie de música só dele. — Isso parece uma canção de verdade! — pensou ele, orgulhoso, repetindo o padrão mais uma vez para ter certeza de que tinha gostado.",
        illustration: {
          background: "rioLagoa",
          characters: [{ characterId: "sapinhoCoco", pose: "animado", position: "centro" }],
          props: ["lua"],
        },
      },
      {
        id: "cena-9",
        text:
          "Pipo, que estava por ali perto, ouviu os croacs animados de Coco e voou para perto, encantado. — Coco, isso ficou lindo! Parece até uma música diferente, com um ritmo todo especial. Você devia cantar assim com a gente!",
        illustration: {
          background: "rioLagoa",
          characters: [
            { characterId: "passarinhoPipo", pose: "feliz", position: "direita" },
            { characterId: "sapinhoCoco", pose: "animado", position: "centro" },
          ],
          props: ["estrelas"],
        },
      },
      {
        id: "cena-9b",
        text:
          "Mesmo animado, quando chegou a hora de cantar com todo mundo reunido, as patinhas de Coco começaram a tremer. — E se eu travar? — sussurrou ele para Pipo. — Você já cantou sozinho e foi incrível. Agora é só fazer a mesma coisa, só que com amigos ouvindo — respondeu Pipo, piscando um olho.",
        illustration: {
          background: "rioLagoa",
          characters: [
            { characterId: "sapinhoCoco", pose: "triste", position: "centro" },
            { characterId: "passarinhoPipo", pose: "feliz", position: "direita" },
          ],
        },
      },
      {
        id: "cena-9c",
        text:
          "Pipo ficou ao lado de Coco a manhã toda, repetindo palavras de incentivo sempre que o amigo parecia duvidar de si mesmo. — Sua voz é única, Coco, e único não significa ruim, significa especial — lembrou ele, pousando gentilmente no ombro do sapinho.",
        illustration: {
          background: "rioLagoa",
          characters: [
            { characterId: "sapinhoCoco", pose: "neutro", position: "centro" },
            { characterId: "passarinhoPipo", pose: "feliz", position: "direita" },
          ],
        },
      },
      {
        id: "cena-9d",
        text:
          "Coco respirou fundo várias vezes, treinando um croac baixinho antes de se juntar ao grupo. Cada tentativa saía um pouquinho mais firme e confiante do que a anterior, e ele começou a sentir um friozinho bom na barriga, de expectativa, não mais de medo.",
        illustration: {
          background: "rioLagoa",
          characters: [{ characterId: "sapinhoCoco", pose: "surpreso", position: "centro" }],
        },
      },
      {
        id: "cena-9d2",
        text:
          "Lembrou também de quando tinha tentado imitar o canto dos passarinhos e não tinha conseguido de jeito nenhum. — Que bom que não desisti de encontrar a minha própria voz — pensou Coco, sorrindo com a lembrança daquele momento de frustração que agora parecia tão distante.",
        illustration: {
          background: "rioLagoa",
          characters: [{ characterId: "sapinhoCoco", pose: "feliz", position: "centro" }],
        },
      },
      {
        id: "cena-9e",
        text:
          "Quando se aproximou do grupo reunido, Coco notou outros bichinhos com vozes bem diferentes entre si: o grilo com seu som agudo, o sapo grandão com um croac bem mais grave que o dele, e cada um cantava sem vergonha nenhuma, do seu próprio jeito.",
        illustration: {
          background: "rioLagoa",
          characters: [{ characterId: "sapinhoCoco", pose: "neutro", position: "centro" }],
        },
      },
      {
        id: "cena-10",
        text:
          "No dia seguinte, quando os outros bichinhos da floresta se reuniram para cantar ao entardecer, Coco, com o coração batendo forte de nervosismo, soltou seu primeiro croac em público. Alto, confiante, e cheio de ritmo.",
        illustration: {
          background: "rioLagoa",
          characters: [
            { characterId: "sapinhoCoco", pose: "feliz", position: "centro" },
            { characterId: "passarinhoPipo", pose: "animado", position: "direita" },
          ],
        },
      },
      {
        id: "cena-10b",
        text:
          "No meio da canção coletiva, Coco sentiu suas patinhas pararem de tremer completamente, substituídas por uma sensação gostosa de pertencimento. Ele fechou os olhinhos e deixou sua voz soar livre, sem mais nenhuma vergonha escondida.",
        illustration: {
          background: "rioLagoa",
          characters: [
            { characterId: "sapinhoCoco", pose: "animado", position: "centro" },
            { characterId: "passarinhoPipo", pose: "animado", position: "direita" },
          ],
          props: ["lua"],
        },
      },
      {
        id: "cena-10c",
        text:
          "Depois da apresentação, outros bichinhos se aproximaram para cumprimentar Coco. — Nunca tinha ouvido um croac tão ritmado assim! — disse um grilo, admirado. Coco sorriu, sentindo pela primeira vez orgulho genuíno da própria voz, sem nenhuma vergonha escondida atrás dela.",
        illustration: {
          background: "rioLagoa",
          characters: [
            { characterId: "sapinhoCoco", pose: "feliz", position: "centro" },
            { characterId: "passarinhoPipo", pose: "feliz", position: "direita" },
          ],
        },
      },
      {
        id: "cena-10c2",
        text:
          "Coco respirou fundo, sentindo o coração ainda acelerado de emoção, mas agora de um jeito bom, diferente do nervosismo de antes. Olhou ao redor para os amigos que o aplaudiam e pensou em como toda aquela vergonha de antes parecia distante agora, quase esquecida.",
        illustration: {
          background: "rioLagoa",
          characters: [{ characterId: "sapinhoCoco", pose: "feliz", position: "centro" }],
        },
      },
      {
        id: "cena-10c3",
        text:
          "A lagoa inteira parecia mais animada naquela noite, com o croac ritmado de Coco se misturando aos outros sons da floresta, formando uma canção completa que nenhum bichinho conseguiria fazer sozinho, só todos juntos, cada um com sua voz única.",
        illustration: {
          background: "rioLagoa",
          characters: [{ characterId: "sapinhoCoco", pose: "animado", position: "centro" }],
          props: ["lua", "estrelas"],
        },
      },
      {
        id: "cena-10d",
        text:
          "Pipo sugeriu que, dali em diante, Coco cantasse uma parte especial em todas as rodas de música da floresta, só com seu estilo único de croac ritmado. — Seria uma honra — respondeu Coco, ainda sem acreditar completamente na mudança que tinha vivido naquele dia.",
        illustration: {
          background: "rioLagoa",
          characters: [
            { characterId: "sapinhoCoco", pose: "animado", position: "centro" },
            { characterId: "passarinhoPipo", pose: "animado", position: "direita" },
          ],
          props: ["estrelas"],
        },
      },
      {
        id: "cena-11",
        text:
          "Todos os bichinhos pararam para escutar, encantados com aquele som diferente e gostoso. Coco sorriu, percebendo que sua voz, do seu próprio jeitinho, também tinha um lugar especial naquela música da floresta inteira.",
        illustration: {
          background: "rioLagoa",
          characters: [
            { characterId: "sapinhoCoco", pose: "animado", position: "centro" },
            { characterId: "passarinhoPipo", pose: "feliz", position: "direita" },
          ],
          props: ["lua", "estrelas"],
        },
      },
    ],
    familyQuestion:
      "Tem alguma coisa sua que você achava diferente, mas que, olhando com mais calma, descobriu que era especial?",
  },
  {
    id: "a3-pipo-e-o-ninho-novo",
    title: "Pipo e o Ninho Novo",
    synopsis:
      "Depois que o vento derruba seu ninho, o passarinho Pipo encontra em Nino a ajuda que precisava para recomeçar.",
    ageGroup: 3,
    category: "Amizade",
    cover: {
      background: "florestaDia",
      characters: [
        { characterId: "passarinhoPipo", pose: "feliz", position: "centro" },
        { characterId: "coelhoNino", pose: "feliz", position: "direita" },
      ],
      props: ["sol"],
    },
    scenes: [
      {
        id: "cena-1",
        text:
          "Pipo, o passarinho azul, voou até seu galho favorito numa manhã de vento forte e encontrou uma surpresa triste: seu ninho tinha caído durante a noite, espalhado em pedacinhos pela base da árvore.",
        illustration: {
          background: "florestaDia",
          characters: [{ characterId: "passarinhoPipo", pose: "triste", position: "centro" }],
        },
      },
      {
        id: "cena-1b",
        text:
          "Ele desceu até o chão e olhou de perto os pedacinhos espalhados: lá estava a penugem fofinha que forrava o fundo do ninho, e também a pedrinha brilhante que ele tinha encontrado e guardado com tanto orgulho. Tudo estava embaralhado entre as folhas secas, longe do lugar onde deveria estar.",
        illustration: {
          background: "florestaDia",
          characters: [{ characterId: "passarinhoPipo", pose: "triste", position: "centro" }],
        },
      },
      {
        id: "cena-2",
        text:
          "— Meu ninho, meu ninho! — chorou Pipo baixinho, olhando os pedacinhos de graveto e folhas espalhados pelo chão. Sem o ninho, ele não tinha onde descansar, nem onde se proteger do vento e da chuva.",
        illustration: {
          background: "florestaDia",
          characters: [{ characterId: "passarinhoPipo", pose: "triste", position: "centro" }],
        },
      },
      {
        id: "cena-2b",
        text:
          "Pipo olhou para o céu, preocupado. — E se chover hoje à noite? Onde eu vou me abrigar? E se o vento voltar a soprar forte de novo? Sem um ninho, cada pergunta parecia maior e mais assustadora, e ele se sentiu pequeno, pousado sozinho num galho vazio.",
        illustration: {
          background: "florestaDia",
          characters: [{ characterId: "passarinhoPipo", pose: "triste", position: "centro" }],
          props: ["nuvem"],
        },
      },
      {
        id: "cena-2c",
        text:
          "Pipo pensou em voar até outra árvore e simplesmente procurar um galho qualquer para passar a noite, sem se preocupar em construir nada direito. Mas, no fundo, ele sabia que um ninho de verdade precisava de cuidado, e isso não ia conseguir fazer sozinho e triste daquele jeito.",
        illustration: {
          background: "florestaDia",
          characters: [{ characterId: "passarinhoPipo", pose: "triste", position: "centro" }],
        },
      },
      {
        id: "cena-3",
        text:
          "Nino, o coelhinho branco, estava passando por ali e viu Pipo tão triste. — O que aconteceu, Pipo? — perguntou, aproximando-se com cuidado. Pipo explicou tudo, com a vozinha embargada de tristeza.",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "coelhoNino", pose: "feliz", position: "direita" },
            { characterId: "passarinhoPipo", pose: "triste", position: "centro" },
          ],
        },
      },
      {
        id: "cena-4",
        text:
          "— Não se preocupe — disse Nino, com firmeza gentil. — Vamos construir um ninho novo juntos. Eu posso ajudar a procurar gravetos e folhinhas pelo chão da floresta, enquanto você escolhe o melhor lugar para construir.",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "coelhoNino", pose: "neutro", position: "direita" },
            { characterId: "passarinhoPipo", pose: "neutro", position: "centro" },
          ],
        },
      },
      {
        id: "cena-4b",
        text:
          "— Eu nunca construí um ninho antes — admitiu Nino. — Mas eu sou bom em encontrar coisas pelo chão da floresta. — E eu sei exatamente como um ninho precisa ser montado — completou Pipo. — Então, cada um faz a parte que sabe melhor! — combinaram os dois, animados com o plano.",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "coelhoNino", pose: "feliz", position: "direita" },
            { characterId: "passarinhoPipo", pose: "animado", position: "centro" },
          ],
        },
      },
      {
        id: "cena-5",
        text:
          "Os dois amigos começaram a trabalhar: Nino corria pela floresta recolhendo pequenos gravetos secos e folhas macias, enquanto Pipo voava de galho em galho, procurando o lugar mais seguro e protegido para o novo ninho.",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "coelhoNino", pose: "animado", position: "direita" },
            { characterId: "passarinhoPipo", pose: "neutro", position: "centro" },
          ],
        },
      },
      {
        id: "cena-5b",
        text:
          "No meio da busca, Nino encontrou algo especial: uma penugem branca e fofinha, perdida por outro passarinho. — Olha o que achei! — disse ele, trazendo correndo. Pipo ficou emocionado. — Isso vai deixar o fundo do ninho ainda mais quentinho, igual o de antes!",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "coelhoNino", pose: "surpreso", position: "direita" },
            { characterId: "passarinhoPipo", pose: "animado", position: "centro" },
          ],
        },
      },
      {
        id: "cena-5c",
        text:
          "Nino também encontrou um pedacinho de casca macia e lisa, perfeita para forrar o chão do ninho. — Isso vai deixar tudo bem confortável! — disse ele, empolgado com a própria descoberta, correndo para mostrar a Pipo o novo achado.",
        illustration: {
          background: "florestaDia",
          characters: [{ characterId: "coelhoNino", pose: "animado", position: "centro" }],
        },
      },
      {
        id: "cena-5d",
        text:
          "Enquanto procurava, Nino quase tropeçou numa raiz escondida na grama, mas se equilibrou a tempo, rindo da própria distração. — Preciso prestar mais atenção por onde ando, ou vou acabar derrubando os materiais que já juntei! — brincou ele, continuando a busca com cuidado redobrado.",
        illustration: {
          background: "florestaDia",
          characters: [{ characterId: "coelhoNino", pose: "surpreso", position: "centro" }],
        },
      },
      {
        id: "cena-6",
        text:
          "— Encontrei o lugar perfeito! — gritou Pipo, pousando num galho mais baixo e protegido por folhas grandes. — Aqui o vento não vai chegar tão forte, e ainda tem uma vista bonita da floresta inteira.",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "passarinhoPipo", pose: "animado", position: "centro" },
            { characterId: "coelhoNino", pose: "feliz", position: "direita" },
          ],
        },
      },
      {
        id: "cena-6b",
        text:
          "Antes de começar a construir, Nino quis ter certeza de que o galho era forte o bastante. Ele se apoiou com cuidado, testando o peso. — Está bem firme! — confirmou, satisfeito. Pipo deu voltinhas no ar, aliviado, sabendo que o novo lar seria seguro de verdade.",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "coelhoNino", pose: "neutro", position: "direita" },
            { characterId: "passarinhoPipo", pose: "feliz", position: "centro" },
          ],
        },
      },
      {
        id: "cena-7",
        text:
          "Juntos, eles começaram a entrelaçar os gravetos, um por um, formando a base redonda do ninho. Nino usava as patinhas para dobrar os gravetos mais flexíveis, enquanto Pipo ajustava cada peça com o biquinho, com muito cuidado e paciência.",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "coelhoNino", pose: "feliz", position: "direita" },
            { characterId: "passarinhoPipo", pose: "animado", position: "centro" },
          ],
        },
      },
      {
        id: "cena-7b",
        text:
          "No meio da trança, um graveto mais fino quebrou de repente, e uma parte do ninho desmontou um pouquinho. — Ah não! — exclamou Pipo. Mas Nino já estava pegando outro graveto, mais firme. — Isso acontece, a gente só ajusta e continua — disse ele, calmo, encaixando a nova peça no lugar.",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "passarinhoPipo", pose: "surpreso", position: "centro" },
            { characterId: "coelhoNino", pose: "neutro", position: "direita" },
          ],
        },
      },
      {
        id: "cena-7c",
        text:
          "Nino percebeu que suas patinhas estavam ficando cansadas de tanto carregar gravetos, mas não quis parar, lembrando do quanto aquilo era importante para o amigo. — Só mais um pouquinho, e terminamos — disse ele a si mesmo, continuando com determinação.",
        illustration: {
          background: "florestaDia",
          characters: [{ characterId: "coelhoNino", pose: "neutro", position: "centro" }],
        },
      },
      {
        id: "cena-8",
        text:
          "Pouco a pouco, o ninho foi tomando forma: primeiro só uma base simples, depois as paredes mais altas, e por fim, uma camada fofinha de folhas e penugem por dentro, para deixar tudo bem quentinho e confortável.",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "passarinhoPipo", pose: "feliz", position: "centro" },
            { characterId: "coelhoNino", pose: "animado", position: "direita" },
          ],
        },
      },
      {
        id: "cena-9",
        text:
          "Quando terminaram, o sol já estava quase se escondendo, pintando o céu de cores quentes. Pipo pulou dentro do ninho novinho e deu voltinhas, testando o conforto. — Está perfeito! Até melhor que o antigo!",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "passarinhoPipo", pose: "animado", position: "centro" },
            { characterId: "coelhoNino", pose: "feliz", position: "direita" },
          ],
          props: ["sol"],
        },
      },
      {
        id: "cena-9b",
        text:
          "— Vem ver a vista daqui de dentro! — convidou Pipo, animado. Nino esticou o pescoço para espiar pela entrada do ninho e viu, lá de dentro, um pedacinho do céu alaranjado emoldurado pelas folhas. — É lindo, Pipo! Você escolheu um lugar incrível mesmo.",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "passarinhoPipo", pose: "feliz", position: "centro" },
            { characterId: "coelhoNino", pose: "surpreso", position: "direita" },
          ],
          props: ["sol"],
        },
      },
      {
        id: "cena-9c",
        text:
          "Nino se sentou num galho próximo, admirando o trabalho concluído, sentindo o peito cheio de orgulho por ter ajudado um amigo de verdade. — Foi bem mais fácil fazer isso com você do que teria sido sozinho — comentou Pipo, sorrindo para o coelhinho.",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "passarinhoPipo", pose: "feliz", position: "centro" },
            { characterId: "coelhoNino", pose: "feliz", position: "direita" },
          ],
          props: ["sol"],
        },
      },
      {
        id: "cena-9d",
        text:
          "— Se um dia a minha casinha também precisar de reparos, posso contar com você? — perguntou Nino, brincando. Pipo riu. — Claro! Embora eu não saiba nada sobre construir casinhas de coelho, prometo ajudar a carregar o que for preciso!",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "coelhoNino", pose: "animado", position: "centro" },
            { characterId: "passarinhoPipo", pose: "animado", position: "direita" },
          ],
        },
      },
      {
        id: "cena-10",
        text:
          "— Obrigado por me ajudar, Nino — disse Pipo, com o coraçãozinho cheio de gratidão. — Eu não teria conseguido construir tudo isso sozinho, e tão rápido, hoje. Nino sorriu, orgulhoso de ter ajudado seu amigo.",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "passarinhoPipo", pose: "feliz", position: "centro" },
            { characterId: "coelhoNino", pose: "animado", position: "direita" },
          ],
        },
      },
      {
        id: "cena-10b",
        text:
          "Antes de se despedir, os dois combinaram de se encontrar na manhã seguinte para brincar perto do riacho, como faziam sempre. — Vai ser bom voltar à rotina normal — disse Pipo, bocejando, cansado mas satisfeito depois de um dia tão cheio de trabalho e amizade.",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "passarinhoPipo", pose: "sonolento", position: "centro" },
            { characterId: "coelhoNino", pose: "feliz", position: "direita" },
          ],
        },
      },
      {
        id: "cena-10c",
        text:
          "Antes de Nino ir embora, Pipo quis lhe dar algo em troca de tanta ajuda: escolheu a pedrinha brilhante que tinha guardado do ninho antigo e entregou ao amigo. — Para você lembrar desse dia também — disse ele, emocionado com o próprio gesto.",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "passarinhoPipo", pose: "feliz", position: "centro" },
            { characterId: "coelhoNino", pose: "surpreso", position: "direita" },
          ],
        },
      },
      {
        id: "cena-10b2",
        text:
          "Pipo deu uma última olhada no ninho novo antes de se despedir de Nino, verificando se tudo estava bem firme para passar a noite com segurança. — Está tudo perfeito — confirmou, satisfeito, antes de acenar para o amigo que já seguia caminho de volta para casa.",
        illustration: {
          background: "florestaDia",
          characters: [{ characterId: "passarinhoPipo", pose: "feliz", position: "centro" }],
        },
      },
      {
        id: "cena-10c2",
        text:
          "Os dois ficaram ainda um tempinho conversando sobre outras aventuras que poderiam viver juntos, agora que tinham descoberto o quanto trabalhavam bem em equipe. — Da próxima vez, quero te ensinar a voar... bem, ou pelo menos a tentar! — brincou Pipo, fazendo Nino rir alto.",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "passarinhoPipo", pose: "animado", position: "centro" },
            { characterId: "coelhoNino", pose: "animado", position: "direita" },
          ],
        },
      },
      {
        id: "cena-10d",
        text:
          "Nino aceitou o presente com um sorriso enorme, guardando a pedrinha com cuidado no bolso de folhas que sempre carregava. — Vou guardar isso para sempre — prometeu, tocado pela generosidade do amigo passarinho depois de um dia tão especial.",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "coelhoNino", pose: "feliz", position: "centro" },
            { characterId: "passarinhoPipo", pose: "feliz", position: "direita" },
          ],
        },
      },
      {
        id: "cena-11",
        text:
          "Naquela noite, enquanto Pipo descansava em seu ninho novo, bem confortável, ele pensou em como os amigos verdadeiros aparecem exatamente quando mais precisamos deles, transformando um dia triste em um dia de muita gratidão e companheirismo.",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "passarinhoPipo", pose: "feliz", position: "centro" },
            { characterId: "coelhoNino", pose: "feliz", position: "direita" },
          ],
          props: ["estrelas"],
        },
      },
    ],
    familyQuestion: "Você já ajudou um amigo que estava triste ou precisando de uma mãozinha? Como foi isso?",
  },
  {
    id: "a3-mel-aprende-a-esperar",
    title: "Mel Aprende a Esperar",
    synopsis:
      "Mel planta uma sementinha especial e, com a ajuda de Luna, descobre que esperar com cuidado pode ser uma parte boa da espera.",
    ageGroup: 3,
    category: "Sentimentos",
    cover: {
      background: "jardim",
      characters: [
        { characterId: "raposaMel", pose: "animado", position: "centro" },
        { characterId: "gatinhaLuna", pose: "animado", position: "direita" },
      ],
      props: ["flor", "borboleta"],
    },
    scenes: [
      {
        id: "cena-1",
        text:
          "Mel, a raposinha laranja de lenço amarelo, plantou uma sementinha especial no jardim, um presente que tinha recebido de sua avó. — Vai nascer uma flor linda e colorida! — disse ela, toda animada, regando a terrinha.",
        illustration: {
          background: "jardim",
          characters: [{ characterId: "raposaMel", pose: "animado", position: "centro" }],
        },
      },
      {
        id: "cena-1b",
        text:
          "— Essa semente veio de uma árvore muito especial da casa da sua avó — tinha dito a avó de Mel, entregando a sementinha dentro de um saquinho de pano. — Cuide bem dela, e um dia ela vai te mostrar algo bonito. Mel guardou aquelas palavras no coração, cheia de expectativa.",
        illustration: {
          background: "jardim",
          characters: [{ characterId: "raposaMel", pose: "feliz", position: "centro" }],
          props: ["flor"],
        },
      },
      {
        id: "cena-2",
        text:
          "No dia seguinte, Mel correu até o jardim, ansiosa para ver a flor já crescida. Mas encontrou apenas terra, do mesmo jeitinho de ontem. — Ainda não cresceu nada? — perguntou, decepcionada, cutucando a terrinha com a patinha.",
        illustration: {
          background: "jardim",
          characters: [{ characterId: "raposaMel", pose: "neutro", position: "centro" }],
        },
      },
      {
        id: "cena-2b",
        text:
          "Mel chegou a cavar um pouquinho a terra, só para espiar se a semente já tinha mudado alguma coisa por dentro. Encontrou a sementinha exatamente como tinha plantado, intacta. Preocupada, cobriu tudo de novo rapidinho, sem saber se tinha feito certo ou errado.",
        illustration: {
          background: "jardim",
          characters: [{ characterId: "raposaMel", pose: "surpreso", position: "centro" }],
        },
      },
      {
        id: "cena-2c",
        text:
          "Mel ficou pensando se deveria regar mais água, ou talvez colocar a sementinha num lugar com mais sol, tentando imaginar algum jeito de fazer tudo crescer mais rápido. — Será que estou fazendo algo errado? — perguntou-se, preocupada com o pouco progresso.",
        illustration: {
          background: "jardim",
          characters: [{ characterId: "raposaMel", pose: "triste", position: "centro" }],
        },
      },
      {
        id: "cena-3",
        text:
          "Luna, a gatinha cinza, passou por ali e viu a amiga olhando tristemente para o canteiro vazio. — O que aconteceu, Mel? — perguntou ela, sentando-se ao lado. Mel suspirou: — Plantei uma sementinha, mas ela não quer crescer rápido.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "gatinhaLuna", pose: "feliz", position: "direita" },
            { characterId: "raposaMel", pose: "triste", position: "centro" },
          ],
        },
      },
      {
        id: "cena-4",
        text:
          "Luna sorriu com gentileza. — Sementinhas não crescem da noite para o dia, Mel. Elas precisam de tempo, de água, de sol, e principalmente, de paciência. É como esperar um bolo assar no forno, sem abrir a porta toda hora.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "gatinhaLuna", pose: "neutro", position: "direita" },
            { characterId: "raposaMel", pose: "neutro", position: "centro" },
          ],
        },
      },
      {
        id: "cena-4b",
        text:
          "— É como esperar a água do banho esquentar, então? — perguntou Mel, lembrando de outra espera que não gostava. — Exatamente esse tipo de sentimento — confirmou Luna, sorrindo. — Só que dessa vez, a espera vai durar uns dias, em vez de uns minutinhos.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "raposaMel", pose: "neutro", position: "centro" },
            { characterId: "gatinhaLuna", pose: "feliz", position: "direita" },
          ],
        },
      },
      {
        id: "cena-5",
        text:
          "Mel cruzou os bracinhos, impaciente. — Mas eu quero ver a flor AGORA! Esperar é tão difícil! — ela disse, batendo o pé de leve no chão, frustrada com a demora que parecia durar uma eternidade.",
        illustration: {
          background: "jardim",
          characters: [{ characterId: "raposaMel", pose: "triste", position: "centro" }],
        },
      },
      {
        id: "cena-5b",
        text:
          "Naquela tarde, Mel se abaixou perto da terrinha e sussurrou: — Vai, sementinha, você consegue, cresce rapidinho para mim! Claro que nada aconteceu na hora, mas, de alguma forma, falar com a semente fez Mel se sentir um pouquinho mais calma e menos sozinha na espera.",
        illustration: {
          background: "jardim",
          characters: [{ characterId: "raposaMel", pose: "neutro", position: "centro" }],
        },
      },
      {
        id: "cena-5c",
        text:
          "Depois de conversar com a sementinha, Mel se sentiu um pouquinho boba, mas também mais leve, como se tivesse dividido sua ansiedade com alguém, mesmo que fosse só uma sementinha enterrada na terra. — Amanhã eu volto para te visitar de novo — prometeu ela, sorrindo.",
        illustration: {
          background: "jardim",
          characters: [{ characterId: "raposaMel", pose: "feliz", position: "centro" }],
        },
      },
      {
        id: "cena-6",
        text:
          "— Que tal a gente fazer um experimento? — sugeriu Luna. — Todos os dias, vamos regar a sementinha juntas, e vamos desenhar um desenho de como imaginamos que ela vai ficar quando crescer. Assim, a espera fica mais divertida.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "gatinhaLuna", pose: "animado", position: "direita" },
            { characterId: "raposaMel", pose: "neutro", position: "centro" },
          ],
          props: ["flor"],
        },
      },
      {
        id: "cena-6b",
        text:
          "No primeiro desenho, Mel usou o lápis amarelo para as pétalas e o verde para as folhinhas. — Devia ter também um pouquinho de rosa, bem no meio — sugeriu Luna. Mel adicionou o rosa, satisfeita com o resultado, e guardou o desenho num caderninho especial para a coleção.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "raposaMel", pose: "animado", position: "centro" },
            { characterId: "gatinhaLuna", pose: "feliz", position: "direita" },
          ],
        },
      },
      {
        id: "cena-6c",
        text:
          "Luna sugeriu fazerem um calendário simples, marcando cada dia que passava com um desenho pequeno de sol ou nuvem. — Assim fica mais fácil ver quanto tempo já esperamos — explicou ela, desenhando o primeiro quadradinho no caderno especial de Mel.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "gatinhaLuna", pose: "neutro", position: "centro" },
            { characterId: "raposaMel", pose: "neutro", position: "direita" },
          ],
        },
      },
      {
        id: "cena-7",
        text:
          "Mel gostou da ideia e, naquele mesmo dia, começou a desenhar flores coloridas, imaginando como a sua sementinha especial poderia ficar. Cada dia, ela regava a terra com cuidado e desenhava um novo desenho, cada vez mais detalhado.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "raposaMel", pose: "animado", position: "centro" },
            { characterId: "gatinhaLuna", pose: "feliz", position: "direita" },
          ],
        },
      },
      {
        id: "cena-7b",
        text:
          "Num dia bem corrido, brincando com outros amigos, Mel quase esqueceu de regar a terrinha. Foi Luna quem lembrou: — Mel, e a sua sementinha? Mel correu na hora, aliviada por ter um amigo cuidando com ela, e prometeu a si mesma prestar mais atenção dali para frente.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "gatinhaLuna", pose: "neutro", position: "direita" },
            { characterId: "raposaMel", pose: "surpreso", position: "centro" },
          ],
        },
      },
      {
        id: "cena-7c",
        text:
          "Naquela tarde, enquanto marcava mais um quadradinho no calendário, Mel percebeu que já tinham se passado seis dias desde o plantio. — Seis dias já! — exclamou, surpresa por não ter percebido o tempo passar tão rápido, distraída com os desenhos e as brincadeiras.",
        illustration: {
          background: "jardim",
          characters: [{ characterId: "raposaMel", pose: "surpreso", position: "centro" }],
        },
      },
      {
        id: "cena-8",
        text:
          "Alguns dias depois, enquanto regava a terrinha como sempre, Mel notou algo diferente: um pequeno brotinho verde, bem fininho, começando a sair da terra. — Luna! Luna! Nasceu uma coisinha verde! — gritou ela, toda emocionada.",
        illustration: {
          background: "jardim",
          characters: [{ characterId: "raposaMel", pose: "surpreso", position: "centro" }],
        },
      },
      {
        id: "cena-9",
        text:
          "Luna correu até lá, e as duas observaram o brotinho crescer um pouquinho mais a cada dia que passava. — Viu, Mel? A espera valeu a pena — disse Luna, sorrindo. Mel assentiu, já sem nenhuma impaciência, só curiosidade boa.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "gatinhaLuna", pose: "animado", position: "direita" },
            { characterId: "raposaMel", pose: "animado", position: "centro" },
          ],
          props: ["flor"],
        },
      },
      {
        id: "cena-9b",
        text:
          "Luna sugeriu medir o brotinho com um gravetinho, marcando até onde ele chegava a cada poucos dias. — Olha, já passou da primeira marquinha! — festejou Mel, comparando o tamanho novo. Ver o crescimento, pouquinho a pouquinho, tornou a espera ainda mais emocionante de acompanhar.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "raposaMel", pose: "animado", position: "centro" },
            { characterId: "gatinhaLuna", pose: "feliz", position: "direita" },
          ],
          props: ["flor"],
        },
      },
      {
        id: "cena-9c",
        text:
          "Mel mostrou o caderninho de desenhos para sua avó, que tinha vindo visitar, contando toda a jornada da sementinha até ali. A avó sorriu, emocionada. — Você cuidou dela tão bem quanto eu esperava, Mel. Estou orgulhosa da sua paciência.",
        illustration: {
          background: "jardim",
          characters: [{ characterId: "raposaMel", pose: "feliz", position: "centro" }],
          props: ["flor"],
        },
      },
      {
        id: "cena-9d",
        text:
          "Luna e Mel continuaram medindo o brotinho a cada poucos dias, registrando cada novo centímetro no caderninho especial. — Está quase do nosso tamanho! — brincou Luna, comparando a plantinha com sua própria altura, rindo da comparação exagerada.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "gatinhaLuna", pose: "animado", position: "centro" },
            { characterId: "raposaMel", pose: "feliz", position: "direita" },
          ],
          props: ["flor"],
        },
      },
      {
        id: "cena-10",
        text:
          "Semana após semana, o brotinho cresceu mais e mais, ganhando folhas novas e um caule mais forte. Mel aprendeu que esperar, quando se cuida de algo com carinho todos os dias, pode até ser uma parte gostosa da espera.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "raposaMel", pose: "feliz", position: "centro" },
            { characterId: "gatinhaLuna", pose: "feliz", position: "direita" },
          ],
          props: ["sol"],
        },
      },
      {
        id: "cena-10b",
        text:
          "Enquanto esperavam o botão desabrochar de vez, Mel e Luna se sentavam todas as tardes perto do canteiro, inventando histórias sobre como seria a flor quando finalmente abrisse suas pétalas completamente. Cada dia parecia trazer um pouquinho mais de cor ao botão fechado.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "raposaMel", pose: "animado", position: "centro" },
            { characterId: "gatinhaLuna", pose: "feliz", position: "direita" },
          ],
          props: ["flor"],
        },
      },
      {
        id: "cena-9d3",
        text:
          "Elas regaram a terrinha juntas mais uma vez, observando como as folhas do brotinho pareciam dançar de leve com a brisa da tarde. — Cada dia ela fica um pouquinho mais bonita — comentou Mel, encantada com os detalhes que antes nem percebia.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "raposaMel", pose: "feliz", position: "centro" },
            { characterId: "gatinhaLuna", pose: "feliz", position: "direita" },
          ],
          props: ["flor"],
        },
      },
      {
        id: "cena-9e",
        text:
          "Luna percebeu que Mel já não falava mais em desistir ou reclamar da demora, e sim em aproveitar cada etapa daquele crescimento devagarinho. — Você mudou bastante desde que começamos — observou Luna, orgulhosa da amiga.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "gatinhaLuna", pose: "feliz", position: "centro" },
            { characterId: "raposaMel", pose: "feliz", position: "direita" },
          ],
        },
      },
      {
        id: "cena-9f",
        text:
          "Mel decidiu escrever um bilhetinho para a avó, contando sobre o brotinho que crescia dia após dia, para enviar na próxima visita. — Ela vai ficar tão feliz em saber que cuidei direitinho do presente dela — pensou, desenhando um coraçãozinho no canto do papel.",
        illustration: {
          background: "jardim",
          characters: [{ characterId: "raposaMel", pose: "animado", position: "centro" }],
          props: ["flor"],
        },
      },
      {
        id: "cena-10c",
        text:
          "Na véspera do grande dia, Mel quase não conseguiu dormir de tanta expectativa, imaginando como seria o momento exato em que a flor finalmente abrisse. — Amanhã, eu sinto que vai ser o dia — sussurrou para si mesma, fechando os olhos com um sorriso.",
        illustration: {
          background: "jardim",
          characters: [{ characterId: "raposaMel", pose: "sonolento", position: "centro" }],
          props: ["lua"],
        },
      },
      {
        id: "cena-11",
        text:
          "Finalmente, numa manhã ensolarada, a flor desabrochou: pétalas coloridas, exatamente como Mel tinha imaginado em seus desenhos. — Conseguimos! — gritaram as duas amigas, abraçadas, celebrando juntas o resultado de tanta paciência e cuidado compartilhado.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "raposaMel", pose: "animado", position: "centro" },
            { characterId: "gatinhaLuna", pose: "animado", position: "direita" },
          ],
          props: ["flor", "borboleta"],
        },
      },
    ],
    familyQuestion: "Tem algo que você está esperando acontecer? O que podemos fazer juntos enquanto esperamos?",
  },
];

export default stories;

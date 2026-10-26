import type { Story } from "../../illustrations/types";

const stories: Story[] = [
  {
    id: "a2-nino-hora-de-dormir",
    title: "Nino e a Hora de Dormir",
    synopsis:
      "Nino, o coelhinho, se prepara para dormir com banho, pijama, uma história e uma linda noite de estrelas.",
    ageGroup: 2,
    category: "Hora de Dormir",
    cover: {
      background: "quartoNoite",
      characters: [{ characterId: "coelhoNino", pose: "feliz", position: "centro" }],
      props: ["lua", "estrelas"],
    },
    scenes: [
      {
        id: "s1",
        text: "Nino é um coelhinho branco e fofinho que mora numa casinha pequena perto da floresta. Ele tem orelhas bem longas e um rabinho fofo como algodão. Hoje o sol está bem quentinho, brilhando forte no céu azul. Nino pula no jardim: pula, pula, pula, bem alto! Suas orelhas longas sacodem para lá e para cá a cada pulinho. Ele corre atrás de uma borboleta colorida que voa bem devagar. A borboleta sobe, desce, sobe, brincando com o vento. Nino ri alto e corre mais um pouquinho, feliz da vida. Que dia tão gostoso para brincar lá fora no jardim!",
        illustration: {
          background: "jardim",
          characters: [{ characterId: "coelhoNino", pose: "animado", position: "centro" }],
          props: ["borboleta"],
        },
      },
      {
        id: "s2",
        text: "De repente, o céu começa a mudar de cor, devagarinho. O sol fica cor de mel, bem alaranjado, pintando as nuvens. As sombras das árvores ficam mais longas no jardim verde. Os passarinhos voam para seus ninhos, cantando baixinho. É hora de ir para casa, Nino! A mamãe coelha chama da porta, com a voz carinhosa: 'Nino, vem para casa, meu amor!' Nino para de pular e olha para o céu colorido. Ele dá um último pulinho, bem alto, e corre para dentro de casa.",
        illustration: {
          background: "jardim",
          characters: [{ characterId: "coelhoNino", pose: "neutro", position: "centro" }],
        },
      },
      {
        id: "s3",
        text: "Dentro de casa está tudo quentinho e aconchegante, cheio de luz amarela. 'Hora do banho, Nino!', diz a mamãe sorrindo, com a toalha nas patinhas. Nino entra na banheira cheia de água morninha, com cuidado. Bolhas de sabão flutuam por todo lado: pluft, pluft, pluft, bem fofinhas! Nino bate as patinhas na água e ri gostoso, salpicando tudo. A água faz redemoinhos pequenos, dando voltinhas e voltinhas. Que banho divertido para terminar o dia de brincadeiras!",
        illustration: {
          background: "quartoDia",
          characters: [{ characterId: "coelhoNino", pose: "feliz", position: "centro" }],
        },
      },
      {
        id: "s4",
        text: "Nino brinca com o barquinho amarelo de banho, flutuando na água. O barquinho navega de um lado para o outro, fazendo ondinhas pequenas. Pluft, pluft, faz a água, enquanto Nino sorri feliz. Nino espirra um pouquinho de água e ri, gostoso e animado. A mamãe lava as orelhinhas de Nino com cuidado, bem devagar. Depois, ela enxágua tudo com água limpinha e fresca. Tudo limpinho e cheiroso agora, pronto para o pijama!",
        illustration: {
          background: "quartoDia",
          characters: [{ characterId: "coelhoNino", pose: "animado", position: "centro" }],
          props: ["balao"],
        },
      },
      {
        id: "s5",
        text: "Depois do banho, a mamãe enxuga Nino com uma toalha fofinha e quentinha. Ela veste nele o pijama azul, estampado com estrelinhas pequenas. É tão quentinho e confortável, perfeito para dormir! A mamãe abotoa os botõezinhos, um, dois, três, com cuidado. Nino gira para mostrar o pijama novo, todo orgulhoso. 'Estou pronto para dormir!', diz Nino com um sorriso grande. A mamãe ri e dá um beijinho na cabeça dele.",
        illustration: {
          background: "quartoDia",
          characters: [{ characterId: "coelhoNino", pose: "feliz", position: "centro" }],
        },
      },
      {
        id: "s6",
        text: "Agora é hora de escovar os dentinhos, antes de dormir. Escova, escova, escova, de um lado para o outro, com cuidado! Nino escova os dentes de cima, bem devagarinho. Depois, ele escova os dentes de baixo, com atenção. Ele faz bochecho com água fresquinha e sorri no espelho. Dentinhos branquinhos e limpos, brilhando de limpos! A mamãe aplaude de leve: 'Muito bem, Nino!'",
        illustration: {
          background: "quartoDia",
          characters: [{ characterId: "coelhoNino", pose: "neutro", position: "centro" }],
        },
      },
      {
        id: "s6b",
        text: "Agora Nino precisa escolher um bichinho de pelúcia para dormir. Na estante, há vários bichinhos fofos esperando por ele. Tem um ursinho marrom, uma coruja de pano e um cachorrinho xadrez. 'Qual deles eu levo hoje?', Nino pensa, olhando cada um. Ele pega o ursinho marrom, o seu preferido de sempre. 'Você vai dormir comigo, ursinho', ele diz sorrindo. Nino aperta o ursinho contra o peito, bem feliz.",
        illustration: {
          background: "quartoDia",
          characters: [{ characterId: "coelhoNino", pose: "feliz", position: "centro" }],
        },
      },
      {
        id: "s7",
        text: "Nino pega seu livro favorito da estante pequena. É a história do coelho e a lua, cheia de desenhos bonitos. A mamãe senta na caminha ao lado de Nino, bem aconchegada. 'Vamos ler juntinhos?', pergunta a mamãe com um sorriso carinhoso. Nino aconchega-se bem perto dela, apertando o livro. Ele adora a hora da história antes de dormir. É o momento mais gostoso do dia inteiro!",
        illustration: {
          background: "quartoNoite",
          characters: [{ characterId: "coelhoNino", pose: "feliz", position: "centro" }],
          props: ["livro"],
        },
      },
      {
        id: "s8",
        text: "A mamãe lê a história com uma voz bem calminha e doce. Nino escuta cada palavrinha com atenção, encostadinho no braço dela. As páginas têm desenhos de uma lua sorridente e estrelas pequenas. Nino aponta para a lua do livro: 'Lua!', ele diz feliz. A mamãe vira a página devagarinho, continuando a história. O coelho do livro também vai dormir, igual a Nino. Que coincidência gostosa para uma história de ninar!",
        illustration: {
          background: "quartoNoite",
          characters: [{ characterId: "coelhoNino", pose: "feliz", position: "centro" }],
          props: ["livro"],
        },
      },
      {
        id: "s9",
        text: "Depois da história, a mamãe fecha o livro com cuidado. 'Hora de deitar, meu coelhinho', ela diz baixinho, com voz suave. Nino deita na caminha fofinha e quentinha, se esparramando todo. O travesseiro é suave como uma nuvem fofa. Nino se aconchega debaixo do cobertor azul, bem agasalhado. A mamãe ajeita o cobertor até o pescocinho dele. Está tudo pronto para uma noite tranquila de sono.",
        illustration: {
          background: "quartoNoite",
          characters: [{ characterId: "coelhoNino", pose: "sonolento", position: "centro" }],
        },
      },
      {
        id: "s9b",
        text: "Antes de fechar os olhos, Nino pede uma coisinha para a mamãe. 'Canta a música da lua, mamãe?', ele pergunta baixinho. A mamãe sorri e começa a cantar, bem suavemente. 'Dorme, dorme, coelhinho, a lua já vai chegar...' Sua voz é doce como mel, calma como o vento. Nino fecha os olhos só de ouvir a canção gostosa. O ursinho de pelúcia também parece sorrir, aconchegado.",
        illustration: {
          background: "quartoNoite",
          characters: [{ characterId: "coelhoNino", pose: "sonolento", position: "centro" }],
        },
      },
      {
        id: "s10",
        text: "Nino olha pela janela do quarto, curioso. Lá no céu escuro, a lua apareceu, bem grande! Ela é redonda, prateada e brilha com uma luz suave. 'Olá, lua!', Nino sussurra bem baixinho, acenando de leve. A lua parece sorrir de volta para ele, lá no alto. Nino sorri também, feliz com a visita da lua. O céu escuro fica mais bonito com ela por lá.",
        illustration: {
          background: "quartoNoite",
          characters: [{ characterId: "coelhoNino", pose: "surpreso", position: "centro" }],
          props: ["lua"],
        },
      },
      {
        id: "s11",
        text: "Uma estrelinha brilha no céu, bem pequenininha. Depois, outra estrelinha aparece, do outro lado. E outra, e outra, e outra, piscando de longe! As estrelinhas brilham uma a uma, enchendo o céu de luz. Nino sorri olhando para o céu cheio de pontinhos brilhantes. Parece que o céu está vestido com um manto de luzes. Que espetáculo lindo para ver antes de dormir!",
        illustration: {
          background: "quartoNoite",
          characters: [{ characterId: "coelhoNino", pose: "feliz", position: "centro" }],
          props: ["estrelas"],
        },
      },
      {
        id: "s12",
        text: "A mamãe senta na beirada da cama, bem pertinho. 'Vamos contar as estrelinhas?', ela pergunta com um sorriso gentil. Nino aponta para o céu: 'Uma, duas, três!', ele conta animado. A mamãe ajuda, continuando: 'Quatro, cinco, seis!' Eles contam juntinhos, bem baixinho, olhando pela janela. A voz da mamãe fica cada vez mais calma e suave. Pouco a pouco, Nino começa a ficar com sono.",
        illustration: {
          background: "quartoNoite",
          characters: [{ characterId: "coelhoNino", pose: "neutro", position: "centro" }],
          props: ["estrelas", "lua"],
        },
      },
      {
        id: "s13",
        text: "Os olhinhos de Nino ficam pesados, pesados, de tanto sono. Ele dá um bocejo bem grande: 'Aaaaah!', esticando as patinhas. A mamãe cobre Nino com cuidado, ajeitando o cobertor. Ela dá um beijinho na testa dele, com muito carinho. 'Durma bem, meu coelhinho querido', ela sussurra sorrindo. Nino aperta o travesseiro, sentindo-se seguro e amado. A luz do quarto fica mais fraquinha a cada minuto.",
        illustration: {
          background: "quartoNoite",
          characters: [{ characterId: "coelhoNino", pose: "sonolento", position: "centro" }],
        },
      },
      {
        id: "s13b",
        text: "Nino olha para o quarto mais uma vez, antes de dormir de vez. Ele vê seus brinquedos guardados na caixinha, quietinhos. 'Boa noite, brinquedos', ele sussurra, acenando de leve. Ele vê também a janela, com a cortina balançando suave. 'Boa noite, jardim', ele diz, pensando nas brincadeiras do dia. Nino se sente grato por um dia tão bonito e divertido. Agora sim, está pronto para dormir profundamente.",
        illustration: {
          background: "quartoNoite",
          characters: [{ characterId: "coelhoNino", pose: "sonolento", position: "centro" }],
        },
      },
      {
        id: "s14",
        text: "Nino abraça seu travesseirinho fofo, bem apertadinho. Lá fora, a noite está quieta e calma, sem nenhum ruído. Só o canto baixinho de um grilo se escuta, longe. A casinha toda descansa, aconchegada e segura, com todos dormindo. As cortinas se movem de leve com o vento suave. Tudo está tranquilo e pronto para uma boa noite de sono. Nino já quase não consegue manter os olhos abertos.",
        illustration: {
          background: "quartoNoite",
          characters: [{ characterId: "coelhoNino", pose: "sonolento", position: "centro" }],
        },
      },
      {
        id: "s15",
        text: "A mamãe apaga a luz, deixando só uma lamparina suave. 'Boa noite, Nino', ela sussurra de mansinho, bem perto do ouvido dele. Nino fecha os olhinhos, bem quietinho, respirando devagar. Ele sonha com borboletas e jardins floridos, cheios de cor. Em seu sonho, ele pula pelo jardim, livre e feliz. A mamãe fica mais um instante olhando ele dormir. Que sono tranquilo e gostoso para o pequeno coelhinho!",
        illustration: {
          background: "quartoNoite",
          characters: [{ characterId: "coelhoNino", pose: "sonolento", position: "centro" }],
        },
      },
      {
        id: "s16",
        text: "E assim, Nino dorme uma noite tranquila e boa, bem aconchegado. Lá fora, a lua e as estrelas cuidam do céu inteiro. Amanhã o sol vai voltar a brilhar, trazendo um novo dia. Mas agora é hora de descansar, bem quietinho na caminha. A casa toda fica silenciosa, só com o som suave da respiração de Nino. Boa noite, pequeno coelhinho, durma com os anjos. Até amanhã, para mais um dia de brincadeiras!",
        illustration: {
          background: "quartoNoite",
          characters: [{ characterId: "coelhoNino", pose: "sonolento", position: "centro" }],
          props: ["lua", "estrelas"],
        },
      },
    ],
    familyQuestion: "Qual é a sua parte favorita da hora de dormir: o banho, a história ou olhar as estrelas?",
  },
  {
    id: "a2-bento-procura-o-mel",
    title: "Bento Procura o Mel",
    synopsis: "O ursinho Bento sai em busca de mel pela floresta e aprende a dividir com seus amigos.",
    ageGroup: 2,
    category: "Animais",
    cover: {
      background: "florestaDia",
      characters: [{ characterId: "ursoBento", pose: "feliz", position: "centro" }],
      props: ["flor"],
    },
    scenes: [
      {
        id: "s1",
        text: "Bento é um ursinho marrom, grandinho e peludo, que adora mel. Hoje ele acorda com muita fome, logo de manhãzinha. Sua barriguinha faz ronco: 'Ronc, ronc!', bem alto. Bento se levanta da caminha de folhas secas, esfregando os olhos. Ele espreguiça os braços e as pernas, bem devagar. 'Hora de procurar mel!', ele diz sorrindo, animado para o dia. Bento sai de sua toca, pronto para a aventura.",
        illustration: {
          background: "florestaDia",
          characters: [{ characterId: "ursoBento", pose: "feliz", position: "centro" }],
        },
      },
      {
        id: "s2",
        text: "Bento caminha pela floresta verde e bonita, entre as árvores altas. Os passarinhos cantam lá no alto das árvores, alegres. Bento cheira o ar com força: 'Sniff, sniff!', bem curioso. Ele sente um cheirinho doce de mel, vindo de longe. 'Por aqui!', ele pensa animado, seguindo o cheiro. Suas patinhas pisam nas folhas secas, fazendo um som crocante. Bento está determinado a encontrar o mel hoje.",
        illustration: {
          background: "florestaDia",
          characters: [{ characterId: "ursoBento", pose: "animado", position: "centro" }],
        },
      },
      {
        id: "s3",
        text: "Bento passa por um campo de florinhas coloridas, cheirosas e bonitas. As abelhas voam de flor em flor: 'Zzzzz, zzzzz!', trabalhando bastante. Bento observa as abelhinhas trabalhando, fascinado com o movimento delas. 'Vocês sabem onde tem mel?', ele pergunta sorrindo, com educação. As abelhas zunem em volta dele, ocupadas com seu trabalho. Uma abelhinha pequena se aproxima, curiosa com o ursinho. Bento espera a resposta, com esperança no coração.",
        illustration: {
          background: "florestaDia",
          characters: [{ characterId: "ursoBento", pose: "neutro", position: "centro" }],
          props: ["flor"],
        },
      },
      {
        id: "s3b",
        text: "Enquanto espera a resposta, Bento vê um esquilinho passando correndo. 'Oi, esquilinho! Você viu mel por aqui?', ele pergunta animado. O esquilinho para, pensando um pouquinho. 'Acho que vi uma colmeia perto da árvore mais alta', ele responde. 'Muito obrigado pela ajuda!', Bento agradece, sorrindo largo. Ele segue na direção que o esquilinho apontou, animado. A floresta parece cheia de amigos dispostos a ajudar.",
        illustration: {
          background: "florestaDia",
          characters: [{ characterId: "ursoBento", pose: "feliz", position: "centro" }],
        },
      },
      {
        id: "s4",
        text: "Uma abelhinha gentil aponta para uma árvore grande, bem ao longe. 'O mel está lá em cima!', ela diz, zunindo animada. Bento olha para o alto da árvore, admirado com a altura. Lá, bem no topo, tem uma colmeia dourada, brilhando ao sol. 'Muito obrigado!', Bento agradece, sorrindo largo. Ele caminha até o pé da árvore, pronto para subir. O desafio parece grande, mas Bento não tem medo.",
        illustration: {
          background: "florestaDia",
          characters: [{ characterId: "ursoBento", pose: "surpreso", position: "centro" }],
        },
      },
      {
        id: "s5",
        text: "Bento abraça o tronco da árvore com força, usando os braços grandes. Ele sobe, sobe, sobe, bem devagarinho, com cuidado. Suas patinhas seguram firme na casca áspera da árvore. 'Quase lá!', Bento resmunga sorrindo, respirando com esforço. O vento sopra gentilmente, balançando as folhas ao redor. Bento continua subindo, sem desistir nem um pouquinho. A colmeia dourada fica cada vez mais próxima.",
        illustration: {
          background: "florestaDia",
          characters: [{ characterId: "ursoBento", pose: "animado", position: "centro" }],
        },
      },
      {
        id: "s6",
        text: "De repente, o galho começa a balançar com força! Bento se assusta um pouquinho: 'Ui!', ele exclama surpreso. Ele segura firme com as duas patas, bem apertado. O vento sacode as folhas ao redor, fazendo um barulho alto. Bento fecha os olhos por um instante, respirando fundo. O galho para de balançar, devagar, devagarinho. Bento abre os olhos, aliviado com a calma que voltou.",
        illustration: {
          background: "florestaDia",
          characters: [{ characterId: "ursoBento", pose: "surpreso", position: "centro" }],
        },
      },
      {
        id: "s7",
        text: "Bento respira fundo e se acalma, bem devagarinho. 'Com calma, Bento, com calma', ele pensa, repetindo para si mesmo. Ele olha para baixo e vê seus amigos, pequenininhos lá no chão. Eles torcem por ele: 'Vai, Bento, vai!', gritando animados. Bento sorri ao escutar o apoio dos amigos. Com mais coragem, ele continua subindo pela árvore. Falta só um pouquinho para chegar à colmeia.",
        illustration: {
          background: "florestaDia",
          characters: [{ characterId: "ursoBento", pose: "neutro", position: "centro" }],
        },
      },
      {
        id: "s7b",
        text: "Por um instante, Bento pensa em desistir, cansado da subida. 'Será que eu consigo mesmo?', ele pensa, duvidando um pouquinho. Mas ele lembra da sua barriguinha com fome, esperando pelo mel. 'Eu já cheguei até aqui, não vou parar agora', ele decide, corajoso. Bento aperta mais firme o tronco da árvore. Com um último esforço, ele sobe mais um pouquinho. A colmeia dourada já está quase ao alcance de suas patas.",
        illustration: {
          background: "florestaDia",
          characters: [{ characterId: "ursoBento", pose: "neutro", position: "centro" }],
        },
      },
      {
        id: "s8",
        text: "Finalmente, Bento alcança a colmeia dourada, no topo da árvore. O mel brilha como ouro ao sol, cheiroso e docinho. Bento sorri de orelha a orelha, muito orgulhoso. 'Encontrei o mel!', ele grita feliz, para todos escutarem. Seus amigos lá embaixo aplaudem e gritam de alegria. Bento olha para a colmeia, pensando em como pegar o mel. Com cuidado, ele se aproxima bem devagarinho.",
        illustration: {
          background: "florestaDia",
          characters: [{ characterId: "ursoBento", pose: "feliz", position: "centro" }],
        },
      },
      {
        id: "s9",
        text: "Mas Bento lembra de uma coisa importante, parando para pensar. 'As abelhinhas também precisam do mel', ele pensa, com cuidado. Ele pega só um pouquinho, delicadamente, sem pressa. 'Obrigado, abelhinhas!', ele agradece sorrindo, com respeito. As abelhas zunem ao redor, parecendo aprovar o gesto gentil. Bento guarda o mel com cuidado, sem desperdiçar nadinha. Ele aprendeu que compartilhar é sempre a melhor escolha.",
        illustration: {
          background: "florestaDia",
          characters: [{ characterId: "ursoBento", pose: "animado", position: "centro" }],
          props: ["flor"],
        },
      },
      {
        id: "s10",
        text: "Bento desce a árvore com cuidado, devagarinho, segurando o mel. Seus amigos esperam por ele lá embaixo, ansiosos e curiosos. 'Trouxe mel para todos!', Bento anuncia feliz, mostrando o potinho. Todos aplaudem e sorriem para Bento, muito contentes. Um coelhinho pula de alegria, batendo palminhas. Um passarinho canta uma música animada de celebração. Que recepção calorosa para o ursinho corajoso!",
        illustration: {
          background: "florestaDia",
          characters: [{ characterId: "ursoBento", pose: "feliz", position: "centro" }],
        },
      },
      {
        id: "s10b",
        text: "Todos os amigos se reúnem ao redor de Bento, curiosos e animados. Um coelhinho pula de alegria, batendo as patinhas. Um passarinho voa em círculos, cantando uma música feliz. 'Como você conseguiu, Bento?', eles perguntam, maravilhados. Bento conta toda a aventura de subir a árvore, com orgulho. Todos escutam atentamente, impressionados com a coragem dele. 'Você é muito valente!', dizem os amigos, sorrindo.",
        illustration: {
          background: "florestaDia",
          characters: [{ characterId: "ursoBento", pose: "animado", position: "centro" }],
        },
      },
      {
        id: "s11",
        text: "Bento senta numa pedra grande e redonda, no meio da clareira. Ele divide o mel docinho com cuidado, dando um pouco para cada um. Cada amigo prova uma colherada gostosa, sorrindo satisfeito. 'Hum, que delícia!', todos dizem sorrindo, lambendo os beicinhos. O mel escorre devagarinho, dourado e brilhante. Bento sente o coração quentinho ao ver os amigos felizes. Compartilhar faz tudo ficar mais gostoso ainda.",
        illustration: {
          background: "florestaDia",
          characters: [{ characterId: "ursoBento", pose: "feliz", position: "centro" }],
        },
      },
      {
        id: "s12",
        text: "Depois do mel, Bento e os amigos brincam um pouco, correndo pela clareira. Eles correm entre as árvores, rindo alto e felizes. Borboletas voam ao redor deles, coloridas e bonitas. Que tarde divertida na floresta, cheia de risadas! Bento pula por cima de troncos caídos, com agilidade. Seus amigos o seguem, rindo da brincadeira animada. O sol brilha forte, iluminando toda a diversão.",
        illustration: {
          background: "florestaDia",
          characters: [{ characterId: "ursoBento", pose: "animado", position: "centro" }],
          props: ["borboleta"],
        },
      },
      {
        id: "s12b",
        text: "Cansados de tanto correr, eles se sentam numa roda, descansando. Um passarinho sugere: 'Vamos cantar uma música?' Todos concordam, animados com a ideia. Eles cantam uma canção sobre a floresta, bem alegre. Bento bate palminhas no ritmo, sorrindo muito. A música ecoa pela clareira, alegrando todos os bichinhos por perto. Que tarde maravilhosa, cheia de música e amizade!",
        illustration: {
          background: "florestaDia",
          characters: [{ characterId: "ursoBento", pose: "feliz", position: "centro" }],
        },
      },
      {
        id: "s13",
        text: "O sol começa a descer no céu, pintando tudo de laranja. Bento sente a barriguinha quentinha e feliz, satisfeito com o dia. 'Hoje foi um dia muito bom', ele pensa sorrindo, cansado mas contente. Hora de voltar para casa descansar, depois de tanta diversão. Seus amigos se despedem, prometendo brincar de novo em breve. Bento caminha de volta, com passos leves e tranquilos. A floresta inteira parece mais calma ao entardecer.",
        illustration: {
          background: "florestaDia",
          characters: [{ characterId: "ursoBento", pose: "feliz", position: "centro" }],
        },
      },
      {
        id: "s14",
        text: "Bento caminha de volta para sua caminha de folhas, bem cansado. A floresta fica quietinha ao anoitecer, com poucos sons. Os grilos começam a cantar baixinho, dando as boas-noites. Bento se aconchega, com a barriguinha cheia de mel docinho. Ele sente o corpo pesado, pedindo por descanso. A toca fica escura, mas aconchegante e segura. Está quase na hora de dormir profundamente.",
        illustration: {
          background: "florestaNoite",
          characters: [{ characterId: "ursoBento", pose: "sonolento", position: "centro" }],
        },
      },
      {
        id: "s15",
        text: "A lua aparece no céu escuro, grande e brilhante. Bento olha para ela antes de dormir, pela entrada da toca. 'Boa noite, floresta', ele sussurra sorrindo, com voz sonolenta. Seus olhinhos ficam pesados, pesados, pedindo para fechar. A luz da lua entra suavemente pela toca de Bento. Tudo fica tranquilo e silencioso ao redor dele. Bento se aconchega mais um pouquinho, confortável.",
        illustration: {
          background: "florestaNoite",
          characters: [{ characterId: "ursoBento", pose: "sonolento", position: "centro" }],
          props: ["lua"],
        },
      },
      {
        id: "s16",
        text: "Bento fecha os olhos, satisfeito e feliz, com a barriga cheia. Ele sonha com mel dourado e amigos queridos, sorrindo no sono. A floresta toda descansa em silêncio, sob o céu estrelado. E assim termina o dia do ursinho Bento, repleto de aventuras. Amanhã outro dia de descobertas vai começar. Mas por agora, só resta dormir tranquilo. Boa noite, pequeno ursinho corajoso e generoso.",
        illustration: {
          background: "florestaNoite",
          characters: [{ characterId: "ursoBento", pose: "sonolento", position: "centro" }],
          props: ["estrelas"],
        },
      },
    ],
    familyQuestion: "Você conhece alguma comida gostosa que as abelhas ajudam a fazer?",
  },
  {
    id: "a2-luna-e-o-novo-amigo",
    title: "Luna e o Novo Amigo",
    synopsis: "A gatinha Luna conhece o cachorrinho Bolinha e descobre como é bom fazer um novo amigo.",
    ageGroup: 2,
    category: "Amizade",
    cover: {
      background: "jardim",
      characters: [
        { characterId: "gatinhaLuna", pose: "feliz", position: "esquerda" },
        { characterId: "cachorrinhoBolinha", pose: "feliz", position: "direita" },
      ],
    },
    scenes: [
      {
        id: "s1",
        text: "Luna é uma gatinha cinza, fofa e curiosa, que mora numa casa com jardim. Hoje ela está brincando sozinha com uma bolinha de lã colorida. A bolinha rola, rola, rola pelo gramado verdinho. Luna corre atrás, pulando animada, com o rabinho em pé. Ela pega a bolinha com as patinhas, toda contente. O sol brilha quentinho, iluminando o jardim inteiro. Que tarde gostosa para brincar sozinha no jardim!",
        illustration: {
          background: "jardim",
          characters: [{ characterId: "gatinhaLuna", pose: "feliz", position: "centro" }],
          props: ["bola"],
        },
      },
      {
        id: "s2",
        text: "De repente, Luna ouve um som diferente: 'Au, au!', vindo de longe. Ela para de brincar e olha para os lados, curiosa. 'Quem está aí?', Luna pergunta, com a orelha em pé. O som vem de perto da cerca do jardim, repetindo de novo. Luna se levanta devagar, segurando a bolinha com cuidado. Seu coraçãozinho bate um pouquinho mais rápido, de curiosidade. Ela decide ir até a cerca para descobrir.",
        illustration: {
          background: "jardim",
          characters: [{ characterId: "gatinhaLuna", pose: "neutro", position: "centro" }],
        },
      },
      {
        id: "s3",
        text: "Luna se aproxima bem devagarinho, pisando com cuidado na grama. Do outro lado da cerca, aparece um cachorrinho marrom, pequeno e peludo. É Bolinha, que mora na casa vizinha, bem pertinho dali! Os dois se olham, um pouco tímidos, sem dizer nada. Luna nunca tinha visto Bolinha antes, e fica curiosa. Bolinha também olha para Luna, com os olhinhos brilhando. Os dois ficam parados, pensando no que fazer.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "gatinhaLuna", pose: "surpreso", position: "esquerda" },
            { characterId: "cachorrinhoBolinha", pose: "surpreso", position: "direita" },
          ],
        },
      },
      {
        id: "s3b",
        text: "Luna pensa um pouquinho antes de falar com o cachorrinho novo. 'Será que ele quer ser meu amigo?', ela se pergunta, tímida. Ela respira fundo e decide ser corajosa, dando um passinho à frente. Bolinha também parece um pouco nervoso, mexendo o rabinho de leve. Os dois se olham mais uma vez, com sorrisos pequenininhos aparecendo. Luna sente que vale a pena tentar conversar. Com coragem, ela se aproxima mais um pouquinho.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "gatinhaLuna", pose: "neutro", position: "esquerda" },
            { characterId: "cachorrinhoBolinha", pose: "neutro", position: "direita" },
          ],
        },
      },
      {
        id: "s4",
        text: "'Oi, eu sou a Luna', diz a gatinha baixinho, com um sorriso pequeno. 'Oi, eu sou o Bolinha', responde o cachorrinho, mexendo o rabinho feliz. Os dois ficam se olhando, agora um pouco mais à vontade. O vento sopra as folhas das árvores, fazendo um som suave. 'Que nome bonito, Bolinha', Luna comenta, sorrindo mais um pouco. 'O seu também, Luna', ele responde, se sentindo mais tranquilo. A conversa começa a fluir mais fácil entre os dois.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "gatinhaLuna", pose: "neutro", position: "esquerda" },
            { characterId: "cachorrinhoBolinha", pose: "neutro", position: "direita" },
          ],
        },
      },
      {
        id: "s4b",
        text: "'Você mora aqui perto?', Luna pergunta, curiosa com o novo amigo. 'Sim, moro na casa ao lado', Bolinha explica, apontando com a patinha. 'Nunca tínhamos nos visto antes', Luna comenta, pensativa. 'É verdade, hoje é a primeira vez', Bolinha concorda, sorrindo largo. 'Que bom que você veio até a cerca', diz Luna, feliz. Os dois riem juntos, sentindo que vão se dar bem. A amizade entre eles começa a crescer, pouquinho a pouquinho.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "gatinhaLuna", pose: "feliz", position: "esquerda" },
            { characterId: "cachorrinhoBolinha", pose: "feliz", position: "direita" },
          ],
        },
      },
      {
        id: "s5",
        text: "Luna mostra sua bolinha de lã para Bolinha, toda animada. 'Quer brincar comigo?', ela pergunta, sorrindo com vontade. Bolinha mexe o rabinho de alegria: 'Sim, sim, sim!', ele responde rápido. Os dois começam a brincar juntos, pulando pela grama. A bolinha de lã rola de um lado para o outro. Luna e Bolinha riem, se divertindo com a brincadeira simples. Que alegria encontrar um amigo para brincar!",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "gatinhaLuna", pose: "feliz", position: "esquerda" },
            { characterId: "cachorrinhoBolinha", pose: "feliz", position: "direita" },
          ],
          props: ["bola"],
        },
      },
      {
        id: "s6",
        text: "Luna joga a bolinha para Bolinha pegar, com força. Bolinha corre rápido e pega no ar, de um salto. 'Uau, você é rápido!', Luna exclama, admirada com a agilidade dele. Os dois riem e continuam brincando, cada vez mais animados. Bolinha devolve a bolinha, jogando de volta para Luna. Ela pega com as patinhas, girando no ar com graça. A brincadeira continua, cheia de risadas e alegria.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "gatinhaLuna", pose: "animado", position: "esquerda" },
            { characterId: "cachorrinhoBolinha", pose: "animado", position: "direita" },
          ],
          props: ["bola"],
        },
      },
      {
        id: "s7",
        text: "Depois, Bolinha ensina um jogo novo para Luna. 'Vamos de esconde-esconde!', ele sugere, animado com a ideia. Luna se esconde atrás de uma florzinha grande, bem quietinha. Bolinha procura, farejando o ar: 'Sniff, sniff!', bem atento. Ele olha debaixo das plantas, procurando com cuidado. Luna tenta não rir, para não ser descoberta cedo demais. A brincadeira fica cada vez mais divertida entre os dois.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "gatinhaLuna", pose: "feliz", position: "esquerda" },
            { characterId: "cachorrinhoBolinha", pose: "feliz", position: "direita" },
          ],
          props: ["flor"],
        },
      },
      {
        id: "s8",
        text: "Bolinha encontra Luna escondida e late feliz: 'Au, achei você!' Luna sai rindo do escondido, toda contente. 'Agora é minha vez de procurar!', ela diz animada, trocando de lugar. Os dois trocam de papel, sorrindo o tempo todo. Bolinha se esconde atrás de uma pedra pequena, quietinho. Luna procura devagar, olhando em cada canto do jardim. Que jogo divertido para dois novos amigos!",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "gatinhaLuna", pose: "animado", position: "esquerda" },
            { characterId: "cachorrinhoBolinha", pose: "surpreso", position: "direita" },
          ],
          props: ["flor"],
        },
      },
      {
        id: "s9",
        text: "O sol está quentinho e o jardim cheio de flores coloridas. Luna e Bolinha correm entre as plantas, rindo o tempo todo. Borboletas voam ao redor dos dois amigos, leves e bonitas. Que tarde gostosa de brincadeiras, cheia de alegria e sol! Luna aponta para uma borboleta azul, encantada com as cores. Bolinha observa também, maravilhado com o voo delicado dela.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "gatinhaLuna", pose: "feliz", position: "esquerda" },
            { characterId: "cachorrinhoBolinha", pose: "neutro", position: "direita" },
          ],
          props: ["borboleta"],
        },
      },
      {
        id: "s9b",
        text: "'Eu adoro borboletas', Luna conta, sorrindo para o amigo. 'Eu também! E adoro perseguir bolinhas', Bolinha responde, animado. Os dois descobrem que gostam de coisas parecidas, rindo juntos. 'Eu também adoro bolinhas', Luna admite, pegando a dela de novo. Eles percebem que têm muito em comum, apesar de serem diferentes. Essa descoberta faz os dois se sentirem ainda mais amigos. A tarde passa rapidinho, cheia de conversas gostosas.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "gatinhaLuna", pose: "feliz", position: "esquerda" },
            { characterId: "cachorrinhoBolinha", pose: "feliz", position: "direita" },
          ],
          props: ["borboleta"],
        },
      },
      {
        id: "s10",
        text: "De repente, Bolinha tropeça numa pedrinha e cai, de leve. 'Ai!', ele faz uma carinha triste, surpreso com o tombo. Luna se aproxima rapidinho, preocupada com o amigo. 'Você está bem, Bolinha?', ela pergunta, com cuidado e carinho. Ela cheira a pata dele, verificando se está tudo bem. Bolinha fica paradinho por um instante, respirando fundo. Luna espera, pronta para ajudar se for preciso.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "gatinhaLuna", pose: "neutro", position: "esquerda" },
            { characterId: "cachorrinhoBolinha", pose: "triste", position: "direita" },
          ],
        },
      },
      {
        id: "s11",
        text: "Bolinha se levanta e sorri: 'Estou bem, só assustei um pouco!' Luna dá uma lambida de carinho na pata dele, gentilmente. 'Que bom que você está bem', ela diz, aliviada de verdade. Os dois se abraçam, bem amigos agora. Bolinha agradece o cuidado de Luna, com a voz suave. 'Você é uma boa amiga', ele diz, sorrindo largo. Luna sente o coração quentinho com o elogio.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "gatinhaLuna", pose: "feliz", position: "esquerda" },
            { characterId: "cachorrinhoBolinha", pose: "feliz", position: "direita" },
          ],
        },
      },
      {
        id: "s12",
        text: "Eles voltam a brincar, agora com mais cuidado com as pedrinhas. A bolinha de lã rola entre as flores coloridas, de novo. Luna e Bolinha riem juntos, felizes da vida. Novos amigos são muito especiais, pensa Luna, sorrindo. Eles brincam mais um pouquinho, aproveitando a tarde bonita. O jardim parece ainda mais colorido com a amizade deles. Que dia maravilhoso para os dois amigos novos!",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "gatinhaLuna", pose: "animado", position: "esquerda" },
            { characterId: "cachorrinhoBolinha", pose: "animado", position: "direita" },
          ],
          props: ["bola", "flor"],
        },
      },
      {
        id: "s12b",
        text: "Antes de ir, os dois decidem fazer um combinado especial. 'Vamos ser amigos para sempre?', Luna pergunta, com esperança no olhar. 'Para sempre!', Bolinha responde, tocando a patinha na dela. Eles selam a promessa com um toquinho de patas, sorrindo. 'Amigos para sempre', eles repetem juntos, felizes com o combinado. O sol parece brilhar ainda mais depois dessa promessa bonita. Luna e Bolinha se sentem muito especiais um para o outro.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "gatinhaLuna", pose: "feliz", position: "esquerda" },
            { characterId: "cachorrinhoBolinha", pose: "feliz", position: "direita" },
          ],
        },
      },
      {
        id: "s13",
        text: "O sol começa a ficar baixinho no céu, pintando tudo de dourado. 'Já é hora de eu voltar para casa', diz Bolinha, um pouco triste. 'Podemos brincar de novo amanhã?', pergunta Luna, com esperança. 'Sim! Prometo!', Bolinha responde animado, sorrindo grande. Os dois se olham, felizes com a promessa de mais brincadeiras. O jardim fica mais quieto com o fim da tarde. Mas o coração dos dois está cheio de alegria.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "gatinhaLuna", pose: "feliz", position: "esquerda" },
            { characterId: "cachorrinhoBolinha", pose: "feliz", position: "direita" },
          ],
        },
      },
      {
        id: "s14",
        text: "Os dois se despedem com um gesto de pata, sorrindo. 'Até amanhã, amigo Bolinha!', diz Luna, com carinho. 'Até amanhã, amiga Luna!', ele responde, feliz da vida. Bolinha volta correndo para sua casa, saltitando animado. Luna fica olhando ele ir, com um sorriso no rosto. Ela sente que ganhou algo muito especial hoje. Um amigo de verdade, para brincar sempre.",
        illustration: {
          background: "vilaAlegre",
          characters: [
            { characterId: "gatinhaLuna", pose: "feliz", position: "esquerda" },
            { characterId: "cachorrinhoBolinha", pose: "feliz", position: "direita" },
          ],
        },
      },
      {
        id: "s15",
        text: "Luna entra em casa, com o coração quentinho e feliz. Ela olha pela janela e vê a lua subir no céu. 'Hoje ganhei um amigo novo', ela pensa, sorrindo bastante. Que dia maravilhoso de amizade, cheio de brincadeiras! Luna guarda a bolinha de lã, pensando em usar de novo amanhã. Ela se sente grata pelo dia tão bom que teve. A casa fica quieta, só com os pensamentos felizes de Luna.",
        illustration: {
          background: "quartoNoite",
          characters: [{ characterId: "gatinhaLuna", pose: "feliz", position: "centro" }],
          props: ["lua"],
        },
      },
      {
        id: "s16",
        text: "Luna se aconchega na sua caminha fofinha, bem sonolenta. Ela pensa em todas as brincadeiras do dia, sorrindo no sono. Amanhã ela vai brincar com Bolinha de novo, como prometido. Luna fecha os olhinhos, feliz e tranquila, com o coração cheio. A noite chega quietinha, cuidando do sono de Luna. Boa noite, pequena gatinha, e seu novo amigo especial.",
        illustration: {
          background: "quartoNoite",
          characters: [{ characterId: "gatinhaLuna", pose: "sonolento", position: "centro" }],
        },
      },
    ],
    familyQuestion: "Como você conheceu um amigo ou amiga especial?",
  },
  {
    id: "a2-tom-tem-medo-da-chuva",
    title: "Tom Tem Medo da Chuva",
    synopsis: "O patinho Tom se assusta com uma tempestade, mas aprende com a mamãe que a chuva pode ser gentil.",
    ageGroup: 2,
    category: "Sentimentos",
    cover: {
      background: "fazenda",
      characters: [{ characterId: "patinhoTom", pose: "triste", position: "centro" }],
      props: ["nuvem"],
    },
    scenes: [
      {
        id: "s1",
        text: "Tom é um patinho amarelo, fofo e brincalhão, que vive numa fazenda bonita. Hoje ele brinca perto do lago, nadando feliz de um lado para o outro. 'Quá, quá, quá!', ele faz, batendo as patinhas na água. O sol brilha bem forte no céu azul, sem nenhuma nuvem. Tom mergulha a cabecinha na água, procurando peixinhos. Ele sacode as penas, espirrando gotinhas para todo lado. Que manhã gostosa para nadar no lago!",
        illustration: {
          background: "fazenda",
          characters: [{ characterId: "patinhoTom", pose: "feliz", position: "centro" }],
        },
      },
      {
        id: "s2",
        text: "De repente, uma nuvem cinza aparece no céu, bem grande. Outra nuvem chega, e mais outra, cobrindo o sol. O céu fica escuro, escurinho, diferente de antes. Tom olha para cima, um pouco preocupado com a mudança. 'Para onde foi o sol?', ele se pergunta, confuso. O vento começa a soprar mais forte, balançando as plantas. Tom sente que algo diferente está para acontecer.",
        illustration: {
          background: "fazenda",
          characters: [{ characterId: "patinhoTom", pose: "neutro", position: "centro" }],
          props: ["nuvem"],
        },
      },
      {
        id: "s3",
        text: "Plec! Uma gotinha de chuva cai na cabeça de Tom, fria e molhada. Depois outra, e outra, e outra, caindo mais rápido! A chuva começa a cair mais forte, fazendo barulho no chão. 'Ai, o que é isso?', Tom se assusta, saindo da água correndo. As gotas batem nas folhas, fazendo um som alto e novo. Tom nunca tinha visto uma chuva tão forte antes. Ele fica sem saber o que fazer.",
        illustration: {
          background: "fazenda",
          characters: [{ characterId: "patinhoTom", pose: "surpreso", position: "centro" }],
          props: ["nuvem"],
        },
      },
      {
        id: "s4",
        text: "O trovão faz um barulho longe: 'Bum!', bem alto e assustador. Tom treme um pouquinho, com medo do som estranho. Ele corre procurando um lugar seguro, olhando para todos os lados. 'Mamãe, cadê você?', ele chama baixinho, com a voz tremendo. O vento sopra mais forte, balançando as árvores da fazenda. Tom sente o coraçãozinho batendo rápido, de medo e confusão. Ele precisa encontrar um abrigo rapidinho.",
        illustration: {
          background: "fazenda",
          characters: [{ characterId: "patinhoTom", pose: "triste", position: "centro" }],
          props: ["nuvem"],
        },
      },
      {
        id: "s5",
        text: "Tom se esconde debaixo de uma folha grande, tremendo de frio e medo. A chuva bate forte na folha: 'Toc, toc, toc!', sem parar. Ele se encolhe, assustado e sozinho, abraçando as próprias patinhas. Seu coraçãozinho bate rápido, rápido, cada vez mais nervoso. Tom fecha os olhinhos, torcendo para a chuva passar. Ele sente muita falta da mamãe nesse momento. 'Por favor, venha me buscar', ele pensa, com os olhos molhados.",
        illustration: {
          background: "fazenda",
          characters: [{ characterId: "patinhoTom", pose: "triste", position: "centro" }],
        },
      },
      {
        id: "s6",
        text: "De longe, ele escuta uma voz conhecida: 'Tom! Tom, onde você está?' É a mamãe pata, procurando por ele, bem preocupada! Tom sente um alívio no coração, ao ouvir a voz dela. Ele junta toda a coragem e grita o mais alto que pode. A chuva continua caindo, mas agora ele não se sente tão sozinho. A voz da mamãe parece cada vez mais perto. Tom espera, ansioso para ser encontrado.",
        illustration: {
          background: "fazenda",
          characters: [{ characterId: "patinhoTom", pose: "feliz", position: "centro" }],
        },
      },
      {
        id: "s7",
        text: "'Estou aqui, mamãe!', Tom grita o mais alto que pode, com força. A mamãe o encontra debaixo da folha grande, rapidinho. Ela abre as alas e abraça Tom com carinho, bem apertado. 'Calma, meu filhote, estou aqui', ela diz, com a voz doce. Tom se aconchega no abraço quentinho da mamãe, aliviado. O medo começa a diminuir, pouquinho a pouquinho. Estar com a mamãe faz tudo parecer mais seguro.",
        illustration: {
          background: "fazenda",
          characters: [{ characterId: "patinhoTom", pose: "feliz", position: "centro" }],
        },
      },
      {
        id: "s8",
        text: "A mamãe leva Tom para debaixo de um guarda-chuva colorido, bem protegido. 'A chuva não vai te machucar', ela explica com calma, acariciando-o. 'Ela só rega as plantinhas e enche os lagos.' Tom escuta com atenção, ainda um pouco assustado. 'Mas o barulho é tão alto', ele comenta, baixinho. 'Eu sei, mas logo vai passar', a mamãe tranquiliza, sorrindo. Tom respira mais calmo, sentindo-se protegido pelo guarda-chuva.",
        illustration: {
          background: "fazenda",
          characters: [{ characterId: "patinhoTom", pose: "neutro", position: "centro" }],
          props: ["guardaChuva"],
        },
      },
      {
        id: "s9",
        text: "Juntos, eles observam a chuva caindo, com calma agora. Plec, plec, plec, nas folhas verdes do jardim. 'Olha como é bonito', diz a mamãe, sorrindo para Tom. Tom começa a se sentir mais calminho, observando as gotinhas. Ele percebe que a chuva brilha quando pega a pouca luz. 'É bonito mesmo', Tom admite, surpreendido com a própria calma. O medo vai ficando cada vez menor dentro dele.",
        illustration: {
          background: "fazenda",
          characters: [{ characterId: "patinhoTom", pose: "neutro", position: "centro" }],
          props: ["nuvem"],
        },
      },
      {
        id: "s9b",
        text: "'Por que o trovão faz aquele barulho, mamãe?', Tom pergunta, curioso agora. 'É só o céu conversando, bem alto', ela explica, sorrindo gentil. 'Ele não vai machucar ninguém, só assusta um pouquinho.' Tom pensa sobre isso, sentindo-se mais tranquilo com a explicação. 'Então não precisa ter medo?', ele pergunta, com esperança. 'Não precisa, meu filhote, eu estou aqui', a mamãe garante. Tom sorri, sentindo o medo ir embora de verdade.",
        illustration: {
          background: "fazenda",
          characters: [{ characterId: "patinhoTom", pose: "neutro", position: "centro" }],
        },
      },
      {
        id: "s10",
        text: "Pouco a pouco, a chuva vai diminuindo, bem devagarinho. O céu começa a clarear de novo, deixando entrar a luz. E então, aparece um arco-íris colorido, enorme no céu! 'Uau, que lindo!', Tom exclama, maravilhado com as cores. Vermelho, amarelo, verde e azul, tudo junto no céu. A mamãe sorri, feliz ao ver o filho tão encantado. O arco-íris parece um presente depois da tempestade.",
        illustration: {
          background: "fazenda",
          characters: [{ characterId: "patinhoTom", pose: "surpreso", position: "centro" }],
          props: ["arcoIris"],
        },
      },
      {
        id: "s11",
        text: "Tom sai de debaixo do guarda-chuva, curioso com as poças de água. Ele pula em uma poça de água: 'Splash!', fazendo um barulho gostoso. A água espirra para todo lado, fazendo Tom rir bastante. 'A chuva pode ser divertida também!', ele descobre, surpreso e feliz. Ele pula em outra poça, rindo cada vez mais. As penas ficam molhadinhas, mas Tom não se importa nem um pouco.",
        illustration: {
          background: "fazenda",
          characters: [{ characterId: "patinhoTom", pose: "animado", position: "centro" }],
          props: ["arcoIris"],
        },
      },
      {
        id: "s12",
        text: "Mamãe pata ri vendo Tom se divertir, tão animado. Eles pulam juntos nas poças de água, rindo alto. 'Quá, quá, quá!', eles cantam felizes, batendo as patinhas. A fazenda toda brilha depois da chuva, com tudo mais verde. As folhas parecem mais bonitas, lavadinhas pela água. Tom sente que a chuva trouxe algo bom para a fazenda. Que alegria aproveitar as poças de água com a mamãe!",
        illustration: {
          background: "fazenda",
          characters: [{ characterId: "patinhoTom", pose: "animado", position: "centro" }],
        },
      },
      {
        id: "s13",
        text: "O sol volta a aparecer, quentinho e brilhante, no céu limpo. As gotinhas de chuva brilham como diamantes nas folhas verdes. Tom já não tem mais medo da chuva, sentindo-se corajoso. Agora ele sabe que ela é só água gentil, que ajuda as plantas. 'Eu entendi, mamãe, a chuva não é assustadora', ele diz, orgulhoso. A mamãe sorri, feliz com o quanto Tom aprendeu hoje. O dia termina de um jeito muito bonito.",
        illustration: {
          background: "fazenda",
          characters: [{ characterId: "patinhoTom", pose: "feliz", position: "centro" }],
        },
      },
      {
        id: "s13b",
        text: "No caminho, Tom encontra seus amigos patinhos, todos curiosos. 'Você não teve medo da chuva?', um deles pergunta, admirado. 'No começo tive, mas a mamãe me explicou tudo', Tom conta, orgulhoso. Ele explica que a chuva é só água gentil, que ajuda as plantas. Os amigos escutam com atenção, aprendendo com a experiência de Tom. 'Agora eu também não vou ter tanto medo', um amigo diz, aliviado. Tom sorri, feliz por poder ajudar seus amigos com o que aprendeu.",
        illustration: {
          background: "fazenda",
          characters: [{ characterId: "patinhoTom", pose: "animado", position: "centro" }],
        },
      },
      {
        id: "s14",
        text: "Tom e a mamãe caminham de volta para o celeiro, satisfeitos. 'Obrigado por me encontrar, mamãe', diz Tom, com muito carinho. 'Eu sempre vou te encontrar', ela responde, sorrindo com amor. Eles se abraçam fortinho, sentindo-se muito gratos um pelo outro. Tom sente que pode contar com a mamãe sempre, em qualquer momento. Essa certeza faz seu coraçãozinho ficar bem quentinho. Que sorte ter uma mamãe tão cuidadosa!",
        illustration: {
          background: "fazenda",
          characters: [{ characterId: "patinhoTom", pose: "feliz", position: "centro" }],
        },
      },
      {
        id: "s15",
        text: "A noite chega e o céu fica estrelado, limpo e bonito. Tom se aconchega perto da mamãe, satisfeito com o dia inteiro. 'Hoje aprendi algo novo sobre a chuva', ele pensa, sorrindo. O medo foi embora, e ficou só a calma e a gratidão. As estrelas brilham lá no alto, como se celebrassem o dia. Tom sente que foi um dia de muito aprendizado e carinho. Ele já não tem medo do que pode vir.",
        illustration: {
          background: "fazenda",
          characters: [{ characterId: "patinhoTom", pose: "sonolento", position: "centro" }],
          props: ["estrelas"],
        },
      },
      {
        id: "s16",
        text: "Tom fecha os olhinhos, sentindo-se seguro e amado, bem quentinho. A fazenda descansa quietinha sob as estrelas, em paz. Amanhã, se chover de novo, ele não vai ter medo. Ele sabe que pode contar com a mamãe, sempre que precisar. Boa noite, pequeno Tom, durma tranquilo e feliz. A lua cuida de toda a fazenda essa noite. Até amanhã, para mais um dia cheio de descobertas.",
        illustration: {
          background: "fazenda",
          characters: [{ characterId: "patinhoTom", pose: "sonolento", position: "centro" }],
          props: ["estrelas", "lua"],
        },
      },
    ],
    familyQuestion: "O que você faz quando fica com medo de alguma coisa?",
  },
  {
    id: "a2-mel-explora-a-floresta",
    title: "Mel Explora a Floresta",
    synopsis: "A raposinha Mel sobe uma colina alta, descobre uma vista linda e ajuda um gatinho perdido.",
    ageGroup: 2,
    category: "Aventuras",
    cover: {
      background: "montanha",
      characters: [{ characterId: "raposaMel", pose: "animado", position: "centro" }],
      props: ["borboleta"],
    },
    scenes: [
      {
        id: "s1",
        text: "Mel é uma raposinha laranja, muito curiosa e cheia de energia. Hoje ela decide explorar a floresta inteira, bem animada. 'Vou descobrir coisas novas!', ela diz, pulando de alegria. Mel sai saltitando pelo caminho de terra, cheia de vontade. O sol brilha quentinho, iluminando o caminho da floresta. Os passarinhos cantam lá no alto, dando boas-vindas ao dia. Que aventura maravilhosa está por vir!",
        illustration: {
          background: "florestaDia",
          characters: [{ characterId: "raposaMel", pose: "animado", position: "centro" }],
        },
      },
      {
        id: "s2",
        text: "No caminho, Mel encontra um campo de flores coloridas, bem bonito. Ela para para cheirar cada florzinha: 'Hum, que perfume gostoso!' As flores balançam suavemente com o vento, dançando de leve. Mel toca as pétalas macias com cuidado, admirando as cores. Vermelhas, amarelas e roxas, cada uma mais bonita que a outra. Ela respira fundo, sentindo o cheirinho doce no ar. Que lugar encantador para começar a aventura!",
        illustration: {
          background: "florestaDia",
          characters: [{ characterId: "raposaMel", pose: "feliz", position: "centro" }],
          props: ["flor"],
        },
      },
      {
        id: "s3",
        text: "De repente, uma borboleta azul passa voando bem perto dela. Mel fica encantada e a segue com os olhos, curiosa. 'Que linda você é!', ela diz, sorrindo para a borboleta. A borboleta voa em círculos ao redor dela, como se dançasse. Mel tenta seguir o voo, rindo da brincadeira gostosa. A borboleta sobe mais alto, depois desce suavemente. Mel se diverte com esse momento mágico da manhã.",
        illustration: {
          background: "florestaDia",
          characters: [{ characterId: "raposaMel", pose: "surpreso", position: "centro" }],
          props: ["borboleta"],
        },
      },
      {
        id: "s4",
        text: "Mel continua sua caminhada, pulando sobre pedrinhas no caminho. Ela chega a um riacho pequeno e cristalino, bem fresquinho. A água faz um som gostoso: 'Blub, blub, blub!', suave e calmo. Mel observa os peixinhos nadando, rápidos e brilhantes. Ela toca a água fresca com a patinha, sentindo o frio gostoso. 'Que lugar tão bonito', ela pensa, sorrindo encantada. O riacho brilha com a luz do sol.",
        illustration: {
          background: "rioLagoa",
          characters: [{ characterId: "raposaMel", pose: "animado", position: "centro" }],
        },
      },
      {
        id: "s5",
        text: "Mais adiante, Mel encontra uma colina bem alta, cheia de pedras. 'Será que lá do topo eu vejo tudo?', ela pensa, curiosa com a altura. Com cuidado, ela começa a subir a colina, firme e decidida. Suas patinhas pisam firme no caminho de terra. O vento sopra mais forte, bagunçando o pelo laranja dela. Mel sente a emoção de uma nova descoberta pela frente. A subida parece desafiadora, mas ela não desiste.",
        illustration: {
          background: "montanha",
          characters: [{ characterId: "raposaMel", pose: "feliz", position: "centro" }],
        },
      },
      {
        id: "s6",
        text: "Subindo, subindo, Mel sente o vento mais forte lá em cima. Ela para um pouquinho para descansar, respirando fundo. 'Já estou quase lá', ela diz, animada com o progresso. O topo da colina parece cada vez mais perto, a cada passo. Suas patinhas já estão um pouco cansadas, mas ela continua firme. Mel olha para trás e vê o quanto já subiu. Com mais um esforço, ela continua a caminhada.",
        illustration: {
          background: "montanha",
          characters: [{ characterId: "raposaMel", pose: "animado", position: "centro" }],
        },
      },
      {
        id: "s7",
        text: "Finalmente, Mel chega ao topo da colina! A vista é maravilhosa, cheia de árvores verdes por todo lado. Ela vê o riacho brilhando como uma fita de prata, lá embaixo. 'Uau, que lindo!', Mel exclama, maravilhada com a paisagem. O vento sopra suave em seu rosto, trazendo um cheiro fresco. Ela se senta num pedregulho, só para admirar a vista. Que recompensa incrível depois de tanto subir!",
        illustration: {
          background: "montanha",
          characters: [{ characterId: "raposaMel", pose: "surpreso", position: "centro" }],
        },
      },
      {
        id: "s8",
        text: "De lá de cima, ela também vê sua casinha pequena, distante. 'Consigo ver minha casa de tão longe!', ela diz, sorrindo encantada. O vento sopra suave em sua pelagem laranja, refrescando. Mel se sente muito feliz e livre, lá no alto da colina. Ela estica os braços, sentindo a brisa gostosa. Esse momento parece mágico, só para ela aproveitar. Mel pensa em como a floresta é grande e bonita.",
        illustration: {
          background: "montanha",
          characters: [{ characterId: "raposaMel", pose: "feliz", position: "centro" }],
        },
      },
      {
        id: "s8b",
        text: "Ela fica um tempinho sentada, só observando as nuvens passarem. Uma nuvem parece um coelho, outra parece uma estrela. Mel sorri com a brincadeira de imaginar formas no céu. 'Esse é o melhor passeio que já fiz', ela pensa, feliz. O silêncio da montanha é calmo e tranquilo, diferente da floresta. Mel aproveita cada segundo desse momento especial. Logo, é hora de continuar explorando mais um pouco.",
        illustration: {
          background: "montanha",
          characters: [{ characterId: "raposaMel", pose: "feliz", position: "centro" }],
          props: ["nuvem"],
        },
      },
      {
        id: "s9",
        text: "Enquanto observa a paisagem, Mel escuta um som estranho, baixinho. 'Miau?', parece vir de perto de uma pedra grande. Mel se aproxima curiosa, com cuidado e atenção. O som se repete, mais fraquinho, parecendo assustado. 'Quem está aí?', ela pergunta gentilmente, se abaixando um pouco. Ela sente que alguém pode estar precisando de ajuda. Mel decide investigar com cuidado e gentileza.",
        illustration: {
          background: "montanha",
          characters: [{ characterId: "raposaMel", pose: "neutro", position: "centro" }],
        },
      },
      {
        id: "s10",
        text: "Atrás da pedra, ela encontra um gatinho perdido e assustado, pequenino. 'Olá, pequeno, você está sozinho?', Mel pergunta, com muita gentileza. O gatinho mia baixinho, com medo, encolhido num canto. Seus olhinhos estão molhados, como se tivesse chorado um pouco. Mel se aproxima devagarinho, para não assustar mais o gatinho. 'Não precisa ter medo, eu quero te ajudar', ela diz, calma. O gatinho olha para ela, com um pouco de esperança.",
        illustration: {
          background: "montanha",
          characters: [{ characterId: "raposaMel", pose: "surpreso", position: "centro" }],
        },
      },
      {
        id: "s11",
        text: "'Não se preocupe, eu vou te ajudar', diz Mel, com muito carinho. Ela deixa o gatinho subir em suas costas macias, com cuidado. Juntos, eles começam a descer a colina com cuidado. O gatinho se agarra bem firme no pelo laranja de Mel. 'Segura bem gostoso', ela diz, sorrindo para tranquilizá-lo. Eles descem devagar, passo a passo, com atenção. O gatinho começa a se sentir mais seguro.",
        illustration: {
          background: "montanha",
          characters: [{ characterId: "raposaMel", pose: "feliz", position: "centro" }],
        },
      },
      {
        id: "s12",
        text: "No caminho de volta, eles passam pelo riacho e pelas flores coloridas. O gatinho observa tudo com os olhinhos curiosos, maravilhado. 'A floresta é cheia de coisas bonitas', Mel explica, sorrindo gentil. O gatinho começa a relaxar, confiando mais em Mel. Eles param um pouquinho para o gatinho beber água do riacho. 'Está com fome também?', Mel pergunta, cuidadosa com o pequeno amigo. O gatinho faz que sim com a cabecinha.",
        illustration: {
          background: "florestaDia",
          characters: [{ characterId: "raposaMel", pose: "animado", position: "centro" }],
          props: ["flor"],
        },
      },
      {
        id: "s12b",
        text: "No caminho, o gatinho começa a conversar mais, já mais à vontade. 'Como você sabe tanto sobre a floresta?', ele pergunta, curioso sobre Mel. 'Eu exploro bastante, sempre que posso', Mel responde, sorrindo com orgulho. Ela mostra para ele uma trilha de formigas, bem organizadinhas. O gatinho observa fascinado, nunca tinha visto algo assim antes. Mel aponta também para um ninho de passarinhos, lá no alto. O gatinho agradece por aprender tantas coisas novas no caminho.",
        illustration: {
          background: "florestaDia",
          characters: [{ characterId: "raposaMel", pose: "feliz", position: "centro" }],
        },
      },
      {
        id: "s13",
        text: "Eles chegam a uma vila pequena e alegre, cheia de casinhas. Uma senhora gentil reconhece o gatinho: 'Ele é meu, estava procurando por ele!' Ela agradece Mel com um sorriso grande, aliviada e feliz. 'Muito obrigada por trazê-lo de volta', ela diz, com os olhos brilhando. O gatinho se aconchega nos braços da senhora, finalmente seguro. Mel sorri, feliz por ter ajudado a reunir os dois. Que sensação boa é ajudar alguém!",
        illustration: {
          background: "vilaAlegre",
          characters: [{ characterId: "raposaMel", pose: "feliz", position: "centro" }],
        },
      },
      {
        id: "s14",
        text: "Mel se despede do gatinho com carinho, acenando devagar. 'Cuide-se bem, pequeno amigo!', ela diz, sorrindo com ternura. Ela caminha de volta para casa, com o coração quentinho. Que aventura incrível ela viveu hoje, cheia de descobertas! Mel pensa em tudo que viu: a colina, o riacho, o gatinho. Foi um dia perfeito para uma pequena exploradora como ela. O caminho de volta parece mais curto, de tão feliz que está.",
        illustration: {
          background: "florestaDia",
          characters: [{ characterId: "raposaMel", pose: "feliz", position: "centro" }],
        },
      },
      {
        id: "s15",
        text: "Quando Mel chega em casa, o céu já está escuro, cheio de estrelas. Ela se deita na sua caminha confortável, bem cansada. 'Hoje explorei a floresta toda e ainda ajudei um amigo', ela pensa, feliz. A lua brilha pela janela, iluminando o quartinho de Mel. Ela sorri, lembrando de cada momento da aventura. O dia foi cheio de coisas boas, do início ao fim. Mel se sente grata por tudo que viveu.",
        illustration: {
          background: "florestaNoite",
          characters: [{ characterId: "raposaMel", pose: "sonolento", position: "centro" }],
          props: ["lua"],
        },
      },
      {
        id: "s16",
        text: "Mel fecha os olhinhos, cansada e satisfeita, com um sorriso no rosto. Amanhã ela quer explorar ainda mais longe, com a mesma vontade. Mas agora, é hora de descansar bem, bem quietinha. Boa noite, pequena raposa aventureira, durma com sonhos bonitos. A floresta toda descansa também, sob o céu estrelado. Até amanhã, para mais uma aventura cheia de descobertas.",
        illustration: {
          background: "florestaNoite",
          characters: [{ characterId: "raposaMel", pose: "sonolento", position: "centro" }],
        },
      },
    ],
    familyQuestion: "Que lugar novo você gostaria de explorar com a família?",
  },
  {
    id: "a2-doce-aprende-as-cores",
    title: "Doce Aprende as Cores",
    synopsis: "O elefantinho Doce descobre as cores do jardim brincando e faz um presente colorido para uma amiga.",
    ageGroup: 2,
    category: "Aprender Brincando",
    cover: {
      background: "jardim",
      characters: [{ characterId: "elefantinhoDoce", pose: "feliz", position: "centro" }],
      props: ["bola", "flor"],
    },
    scenes: [
      {
        id: "s1",
        text: "Doce é um elefantinho azul clarinho, bem fofo e gentil, muito curioso. Hoje ele vai brincar no jardim cheio de cores diferentes. 'Vou aprender sobre as cores!', ele diz, animado com a ideia. O sol ilumina tudo ao redor, deixando o jardim bem bonito. Doce caminha devagar, suas orelhas grandes balançando de leve. Ele observa tudo com atenção, pronto para descobrir coisas novas. Que manhã cheia de aprendizado e diversão!",
        illustration: {
          background: "jardim",
          characters: [{ characterId: "elefantinhoDoce", pose: "feliz", position: "centro" }],
        },
      },
      {
        id: "s2",
        text: "Doce encontra uma flor vermelha bem bonita, perto do caminho. 'Essa é vermelha, que linda!', ele diz, tocando as pétalas com cuidado. Vermelho, vermelho, vermelho, ele repete, sorrindo bastante. A flor balança suavemente no vento, como se dançasse para ele. Doce cheira a flor, sentindo um perfume gostoso. 'Vou lembrar dessa cor', ele pensa, satisfeito com a descoberta. Essa é a primeira cor que ele aprende hoje.",
        illustration: {
          background: "jardim",
          characters: [{ characterId: "elefantinhoDoce", pose: "animado", position: "centro" }],
          props: ["flor"],
        },
      },
      {
        id: "s3",
        text: "Perto dali, ele vê uma flor amarela brilhante, parecendo um sol pequeno. 'Olha, essa é amarela, como o sol!', Doce exclama, maravilhado. Amarelo, amarelo, amarelo, ele canta baixinho, pulando de alegria. As abelhinhas zunem ao redor da flor, ocupadas com o trabalho. Doce observa com cuidado, sem se aproximar demais das abelhas. Ele aprende mais uma cor nova, todo contente. O jardim está ensinando muitas coisas bonitas para ele.",
        illustration: {
          background: "jardim",
          characters: [{ characterId: "elefantinhoDoce", pose: "feliz", position: "centro" }],
          props: ["flor"],
        },
      },
      {
        id: "s4",
        text: "Doce encontra uma bolinha azul no chão do jardim, brilhante. 'Azul, igual ao céu!', ele diz, pegando a bola com a tromba. Azul, azul, azul, ele repete, rindo da brincadeira. Ele joga a bolinha para o alto, com cuidado. A bola sobe e desce, fazendo Doce rir ainda mais. 'Essa cor está em todo lugar', ele percebe, olhando para o céu. O azul do céu combina com a bolinha, pensa ele.",
        illustration: {
          background: "jardim",
          characters: [{ characterId: "elefantinhoDoce", pose: "animado", position: "centro" }],
          props: ["bola"],
        },
      },
      {
        id: "s5",
        text: "Mais adiante, há um arbusto cheio de flores roxas, bem perfumadas. 'Que cor bonita, é roxo!', Doce comenta, encantado com a novidade. Roxo, roxo, roxo, ele diz, tocando as pétalas suaves. As flores roxas perfumam o ar, deixando tudo mais gostoso. Doce respira fundo, sentindo o cheiro doce das flores. Ele já aprendeu quatro cores diferentes até agora. Que dia produtivo e divertido no jardim!",
        illustration: {
          background: "jardim",
          characters: [{ characterId: "elefantinhoDoce", pose: "feliz", position: "centro" }],
          props: ["flor"],
        },
      },
      {
        id: "s6",
        text: "Doce olha para a grama verde embaixo de seus pés, fresquinha. 'Essa é verde, como as folhas!', ele percebe, sorrindo largo. Verde, verde, verde, ele repete, pulando na grama macia. Tudo ao redor parece mais colorido agora, pensa ele, feliz. As árvores também têm folhas verdes, espalhadas por todo lado. Doce começa a notar as cores em tudo que vê. Aprender as cores está sendo muito divertido para ele.",
        illustration: {
          background: "jardim",
          characters: [{ characterId: "elefantinhoDoce", pose: "animado", position: "centro" }],
        },
      },
      {
        id: "s6b",
        text: "Doce olha para a terra marrom, embaixo das flores e da grama. 'E essa cor, qual é?', ele se pergunta, pensando um pouquinho. 'Essa é marrom, como o tronco das árvores', ele percebe, sorrindo. Marrom, marrom, marrom, ele repete, tocando a terrinha com a tromba. Ele olha para cima e vê uma nuvem bem branquinha passando. 'E essa nuvem é branca, como o leite', ele descobre, encantado. Doce já aprendeu tantas cores novas nesse passeio pelo jardim!",
        illustration: {
          background: "jardim",
          characters: [{ characterId: "elefantinhoDoce", pose: "feliz", position: "centro" }],
        },
      },
      {
        id: "s7",
        text: "Ele olha para o céu azul e o sol amarelo, admirado. 'O céu é azul e o sol é amarelo!', Doce diz, feliz com a descoberta. Ele aponta para cada coisa, aprendendo com alegria e curiosidade. O vento sopra suave em suas orelhas grandes, refrescando. Doce sorri, sentindo-se orgulhoso de aprender tantas coisas novas. Ele decide contar as cores novamente, só para ter certeza. Vermelho, amarelo, azul, roxo e verde, ele lembra tudo.",
        illustration: {
          background: "ceuNuvens",
          characters: [{ characterId: "elefantinhoDoce", pose: "feliz", position: "centro" }],
          props: ["sol"],
        },
      },
      {
        id: "s8",
        text: "De repente, uma borboleta colorida passa voando, bem perto dele. Ela tem listras de laranja, preto e branco, lindas de ver! 'Quantas cores numa borboleta só!', Doce se admira, encantado. Ele a observa voar entre as flores, com atenção. A borboleta parece dançar no ar, mostrando suas cores. 'Você é a borboleta mais colorida que já vi', Doce comenta, sorrindo. Ela continua voando, levando um pouco de magia pelo jardim.",
        illustration: {
          background: "jardim",
          characters: [{ characterId: "elefantinhoDoce", pose: "surpreso", position: "centro" }],
          props: ["borboleta"],
        },
      },
      {
        id: "s8b",
        text: "Doce decide experimentar fechar os olhos e adivinhar as cores. 'Vou ver se aprendi mesmo', ele pensa, se divertindo com o jogo. Ele toca uma flor e tenta adivinhar: 'Essa deve ser a vermelha!' Ele abre os olhos e confere, rindo da própria brincadeira. Acertou! Ele tenta de novo com outra flor, animado. Esse jogo o ajuda a lembrar ainda melhor de cada cor aprendida. Aprender brincando é a parte mais divertida do dia.",
        illustration: {
          background: "jardim",
          characters: [{ characterId: "elefantinhoDoce", pose: "animado", position: "centro" }],
          props: ["flor"],
        },
      },
      {
        id: "s9",
        text: "Doce decide juntar flores de cada cor que encontrou, com cuidado. Vermelha, amarela, azul, roxa e verde, todas juntinhas. 'Um arco-íris de flores!', ele diz, orgulhoso da própria ideia. Ele organiza tudo com cuidado no chão, formando um desenho bonito. Cada flor fica do lado da outra, mostrando as cores. Doce sorri, satisfeito com o resultado do seu trabalho. Esse arranjo de flores ficou muito bonito mesmo.",
        illustration: {
          background: "jardim",
          characters: [{ characterId: "elefantinhoDoce", pose: "animado", position: "centro" }],
          props: ["flor"],
        },
      },
      {
        id: "s10",
        text: "Doce decide fazer um presente colorido para sua amiga esquilinha. Ele amarra as flores com um laço bonito, com cuidado. 'Ela vai adorar todas essas cores!', ele pensa, sorrindo bastante. O buquê fica lindo e cheio de vida, perfumado e colorido. Doce segura o presente com a tromba, com cuidado para não derrubar. Ele caminha animado, pensando na reação da amiga. Que ideia carinhosa para compartilhar o que aprendeu!",
        illustration: {
          background: "jardim",
          characters: [{ characterId: "elefantinhoDoce", pose: "feliz", position: "centro" }],
          props: ["presente"],
        },
      },
      {
        id: "s11",
        text: "Ele caminha até a casa da amiga esquilinha, animado com a surpresa. 'Trouxe um presente colorido para você!', Doce anuncia, todo sorridente. A amiga abre um sorriso enorme ao ver o buquê bonito. 'Que lindo, Doce! Muito obrigada!', ela diz, pegando as flores com cuidado. Ela cheira as flores, encantada com o perfume e as cores. Doce fica feliz ao ver a amiga tão contente. Compartilhar o que aprendeu ficou ainda melhor assim.",
        illustration: {
          background: "vilaAlegre",
          characters: [
            { characterId: "elefantinhoDoce", pose: "feliz", position: "esquerda" },
            { characterId: "esquilaNoz", pose: "surpreso", position: "direita" },
          ],
          props: ["presente"],
        },
      },
      {
        id: "s12",
        text: "Juntos, eles nomeiam cada cor das flores novamente, rindo bastante. 'Vermelho, amarelo, azul, roxo e verde!', dizem os dois, animados. Aprender as cores brincando é muito mais divertido, eles concordam. O dia fica ainda mais especial com um amigo para compartilhar. A esquilinha mostra a Doce uma noz marrom que encontrou. 'Marrom também é uma cor bonita', ela diz, sorrindo. Os dois continuam aprendendo juntos, cada vez mais animados.",
        illustration: {
          background: "vilaAlegre",
          characters: [
            { characterId: "elefantinhoDoce", pose: "animado", position: "esquerda" },
            { characterId: "esquilaNoz", pose: "animado", position: "direita" },
          ],
        },
      },
      {
        id: "s13",
        text: "No caminho de volta, Doce vê algo incrível no céu, colorido. Depois de uma leve garoa, aparece um arco-íris enorme! 'Olha, têm todas as cores juntas!', ele grita, maravilhado com a visão. Vermelho, laranja, amarelo, verde, azul e roxo, tudo junto no céu. Doce para para admirar, encantado com tantas cores de uma vez. 'Esse é o melhor dia para aprender cores', ele pensa, feliz. O arco-íris parece um resumo perfeito de tudo que aprendeu.",
        illustration: {
          background: "jardim",
          characters: [{ characterId: "elefantinhoDoce", pose: "feliz", position: "centro" }],
          props: ["arcoIris"],
        },
      },
      {
        id: "s14",
        text: "Doce sorri, pensando em tudo que aprendeu hoje, satisfeito. As cores estão em todo lugar: no céu, nas flores, nos animais. 'O mundo é mesmo muito colorido!', ele pensa, feliz com a descoberta. Que dia maravilhoso de descobertas, cheio de cores e amizade. Doce caminha de volta para casa, com o coração cheio de alegria. Ele já pensa em quais cores vai descobrir amanhã. Aprender brincando é a melhor forma de aprender.",
        illustration: {
          background: "jardim",
          characters: [{ characterId: "elefantinhoDoce", pose: "feliz", position: "centro" }],
        },
      },
      {
        id: "s15",
        text: "Em casa, Doce se prepara para dormir, bem satisfeito. Pela janela, ele vê a lua prateada e as estrelas douradas. 'Branco e dourado', ele murmura, sonolento e sorrindo. Suas pálpebras ficam pesadas, pesadinhas, pedindo para descansar. Doce pensa em todas as cores que aprendeu durante o dia. Vermelho, amarelo, azul, roxo, verde e muito mais. Que dia incrível para um pequeno elefantinho curioso!",
        illustration: {
          background: "quartoNoite",
          characters: [{ characterId: "elefantinhoDoce", pose: "sonolento", position: "centro" }],
          props: ["lua", "estrelas"],
        },
      },
      {
        id: "s16",
        text: "Doce se aconchega na caminha, satisfeito com seu dia tão colorido. Ele sonha com flores coloridas e arco-íris brilhantes, sorrindo no sono. Amanhã ele vai descobrir ainda mais cores, com a mesma curiosidade. Boa noite, pequeno elefantinho curioso, durma com sonhos bonitos. A casa fica quietinha, só com a respiração calma de Doce. Até amanhã, para mais um dia de aprendizado e brincadeiras.",
        illustration: {
          background: "quartoNoite",
          characters: [{ characterId: "elefantinhoDoce", pose: "sonolento", position: "centro" }],
        },
      },
    ],
    familyQuestion: "Qual é a sua cor favorita, e por quê?",
  },
  {
    id: "a2-pipo-e-a-primeira-estrela",
    title: "Pipo e a Primeira Estrela",
    synopsis: "O passarinho Pipo voa entre as nuvens, brinca com os amigos e aprende sobre a chegada da noite.",
    ageGroup: 2,
    category: "Hora de Dormir",
    cover: {
      background: "ceuNuvens",
      characters: [{ characterId: "passarinhoPipo", pose: "feliz", position: "centro" }],
      props: ["sol"],
    },
    scenes: [
      {
        id: "s1",
        text: "Pipo é um passarinho azul, pequenino, que ama voar bem alto. Hoje ele voa entre as nuvens fofinhas do céu, animado. 'Vruuum!', ele canta, enquanto bate as asinhas com força. O sol brilha quentinho sobre suas penas, deixando-as brilhantes. Pipo sobe cada vez mais alto, sentindo o vento no rosto. Ele adora essa sensação de liberdade, voando sem parar. Que manhã perfeita para voar pelo céu azul!",
        illustration: {
          background: "ceuNuvens",
          characters: [{ characterId: "passarinhoPipo", pose: "animado", position: "centro" }],
        },
      },
      {
        id: "s2",
        text: "Pipo pousa numa nuvem grande e macia, só de brincadeira. Ele imagina que está pulando em algodão doce, rindo sozinho. 'As nuvens parecem tão fofas!', ele canta, feliz com a brincadeira. O vento sopra suave ao seu redor, bagunçando as penas. Pipo rola de um lado para o outro na nuvem fofinha. Ele fica ali um tempinho, só se divertindo com a brincadeira. Que lugar tão gostoso para descansar um pouquinho!",
        illustration: {
          background: "ceuNuvens",
          characters: [{ characterId: "passarinhoPipo", pose: "feliz", position: "centro" }],
          props: ["nuvem"],
        },
      },
      {
        id: "s3",
        text: "Depois de brincar nas nuvens, Pipo desce até a floresta, animado. Ele pousa num galho alto de uma árvore, com cuidado. 'Pi, pi, pi!', ele canta para os amigos pássaros, chamando todos. Os outros passarinhos respondem cantando também, formando um coro bonito. Pipo sorri, feliz por ter tantos amigos para cantar junto. A floresta fica cheia de música, com cada passarinho cantando sua parte. Que coral animado para começar o dia!",
        illustration: {
          background: "florestaDia",
          characters: [{ characterId: "passarinhoPipo", pose: "animado", position: "centro" }],
        },
      },
      {
        id: "s3b",
        text: "Durante a brincadeira, Pipo encontra um amiguinho novo, um passarinho vermelho. 'Oi, eu sou o Pipo!', ele se apresenta, animado com a novidade. 'Oi, eu sou o Rubi', responde o outro passarinho, sorrindo. Os dois decidem voar juntos por um tempinho, conhecendo um ao outro. Rubi mostra um lugar secreto, com uma vista muito bonita. Pipo fica encantado com o novo amigo e o novo lugar. Fazer amigos voando é uma das coisas que ele mais gosta.",
        illustration: {
          background: "florestaDia",
          characters: [{ characterId: "passarinhoPipo", pose: "feliz", position: "centro" }],
        },
      },
      {
        id: "s4",
        text: "Pipo voa de árvore em árvore, brincando de pega-pega com os amigos. Eles voam em círculos, rindo e cantando juntos, animados. 'Esse foi um dia e tanto!', Pipo pensa, sorrindo com satisfação. As asinhas dele já estão um pouco cansadas, de tanto voar. Ele para para descansar num galho, observando os amigos brincarem. O sol ainda brilha forte, mas já começa a esquentar menos. Pipo sente que o dia está ficando mais tranquilo.",
        illustration: {
          background: "florestaDia",
          characters: [{ characterId: "passarinhoPipo", pose: "feliz", position: "centro" }],
        },
      },
      {
        id: "s5",
        text: "O sol começa a descer lentamente no céu, mudando de cor. Ele fica cor de laranja e rosa, bem bonito de ver. 'O dia está acabando', Pipo percebe, olhando ao redor com calma. É hora de voltar para o ninho, ele pensa, se preparando. Os outros passarinhos também começam a voar de volta para suas casas. Pipo se despede dos amigos, prometendo brincar de novo amanhã. O céu colorido anuncia que a noite está chegando.",
        illustration: {
          background: "ceuNuvens",
          characters: [{ characterId: "passarinhoPipo", pose: "neutro", position: "centro" }],
          props: ["sol"],
        },
      },
      {
        id: "s6",
        text: "Pipo voa de volta para seu ninho confortável, feito de gravetos e penas. Sua mamãe passarinha espera por ele, sorrindo com carinho. 'Como foi seu dia, Pipo?', ela pergunta, curiosa e feliz. 'Foi maravilhoso, mamãe!', ele responde, animado para contar tudo. Ele pousa no ninho, aconchegando-se perto dela. O ninho é quentinho e macio, perfeito para descansar. Pipo se sente em casa, seguro e amado.",
        illustration: {
          background: "florestaNoite",
          characters: [{ characterId: "passarinhoPipo", pose: "feliz", position: "centro" }],
        },
      },
      {
        id: "s7",
        text: "Ele conta tudo sobre as nuvens fofinhas e as brincadeiras com os amigos. A mamãe escuta atentamente, encantada com a aventura do filho. 'Você voou bem alto hoje', ela diz, orgulhosa de Pipo. Pipo se aconchega perto dela, satisfeito com o dia inteiro. Ele conta também sobre o coral de passarinhos que cantou junto. A mamãe sorri, feliz ao ver o filho tão animado. Que dia cheio de histórias para contar!",
        illustration: {
          background: "florestaNoite",
          characters: [{ characterId: "passarinhoPipo", pose: "feliz", position: "centro" }],
        },
      },
      {
        id: "s7b",
        text: "'Mamãe, por que o céu fica escuro de noite?', Pipo pergunta, curioso. 'É porque o sol vai dormir do outro lado do mundo', ela explica, gentil. 'E ele volta amanhã?', Pipo pergunta, um pouco preocupado. 'Sempre volta, bem cedinho, trazendo um novo dia', a mamãe garante, sorrindo. Pipo sente-se mais tranquilo com a explicação da mamãe. Ele adora aprender coisas novas sobre o céu e a natureza. A noite já não parece tão misteriosa agora.",
        illustration: {
          background: "florestaNoite",
          characters: [{ characterId: "passarinhoPipo", pose: "neutro", position: "centro" }],
        },
      },
      {
        id: "s8",
        text: "O céu começa a escurecer, escurecer, bem devagarinho. As primeiras sombras cobrem a floresta inteira, trazendo silêncio. Pipo se acomoda dentro do ninho quentinho, bem aconchegado. Suas penas se fecham suavemente ao redor do corpo pequeno. Ele sente o sono chegando, pouquinho a pouquinho. A floresta fica mais quieta, com os outros animais também descansando. Está quase na hora de dormir profundamente.",
        illustration: {
          background: "florestaNoite",
          characters: [{ characterId: "passarinhoPipo", pose: "sonolento", position: "centro" }],
        },
      },
      {
        id: "s9",
        text: "De repente, Pipo olha para o céu através dos galhos, curioso. Uma luzinha pequena aparece, brilhando sozinha lá no alto. 'Olha, mamãe, a primeira estrela!', ele diz, encantado com a descoberta. A estrela brilha como um diamante distante, bem bonita. Pipo observa fascinado, sem conseguir parar de olhar. É a primeira vez que ele presta tanta atenção numa estrela. Que momento especial para terminar o dia!",
        illustration: {
          background: "florestaNoite",
          characters: [{ characterId: "passarinhoPipo", pose: "surpreso", position: "centro" }],
          props: ["estrelas"],
        },
      },
      {
        id: "s10",
        text: "'Essa é a estrela da noite', explica a mamãe, sorrindo gentil. 'Ela avisa que é hora de descansar', ela continua, com calma. Pipo observa a estrelinha brilhar, fascinado com a luz suave. Pouco a pouco, mais estrelas começam a aparecer também, uma por uma. O céu fica cada vez mais bonito, cheio de pontinhos de luz. Pipo sorri, feliz por ter visto a primeira estrela do dia. A noite parece mais acolhedora agora, com tanta luz no céu.",
        illustration: {
          background: "florestaNoite",
          characters: [{ characterId: "passarinhoPipo", pose: "feliz", position: "centro" }],
          props: ["estrelas"],
        },
      },
      {
        id: "s11",
        text: "Uma, duas, três estrelinhas piscam no céu escuro, uma a uma. Pipo conta cada uma com seus olhinhos pequenos, animado. 'Elas parecem estar brincando de pisca-pisca', ele diz, rindo baixinho. A mamãe concorda, sorrindo gentilmente para o filho curioso. Juntos, eles observam o céu se enchendo de estrelas, maravilhados. Pipo nunca tinha prestado tanta atenção na hora de dormir. Esse se torna um momento muito especial entre os dois.",
        illustration: {
          background: "florestaNoite",
          characters: [{ characterId: "passarinhoPipo", pose: "feliz", position: "centro" }],
          props: ["estrelas"],
        },
      },
      {
        id: "s12",
        text: "A lua redonda aparece entre as nuvens escuras, grande e brilhante. Ela ilumina toda a floresta com uma luz suave e calma. 'Boa noite, lua. Boa noite, estrelas', Pipo sussurra, bem sonolento. Seus olhinhos começam a ficar pesados, pedindo para fechar. A mamãe sorri, vendo o filho ficando cada vez mais sonolento. Ela se aproxima mais, cuidando dele com muito amor. A noite parece perfeita para um sono tranquilo.",
        illustration: {
          background: "florestaNoite",
          characters: [{ characterId: "passarinhoPipo", pose: "sonolento", position: "centro" }],
          props: ["lua"],
        },
      },
      {
        id: "s13",
        text: "A mamãe aconchega as penas ao redor de Pipo, com muito cuidado. 'Durma bem, meu pequeno voador', ela sussurra, com amor e carinho. Pipo sente-se seguro e quentinho no ninho, bem protegido. O vento da noite sopra bem de mansinho, suave e calmo. Ele se aconchega mais um pouquinho, sentindo-se completamente tranquilo. A mamãe fica mais um instante, observando o filho adormecer. Que noite calma e cheia de amor!",
        illustration: {
          background: "florestaNoite",
          characters: [{ characterId: "passarinhoPipo", pose: "sonolento", position: "centro" }],
        },
      },
      {
        id: "s14",
        text: "Lá fora, a floresta toda já está quietinha, em paz. Só o som suave do vento nas folhas se escuta, de longe. Pipo bosteja gostoso: 'Aaaaah!', esticando as asinhas pequenas. Seus olhos vão se fechando, bem devagarinho, pedindo descanso. Ele pensa na primeira estrela que viu hoje, sorrindo no sono. Esse foi um dia muito especial, cheio de descobertas bonitas. A floresta inteira parece abraçar Pipo com seu silêncio.",
        illustration: {
          background: "florestaNoite",
          characters: [{ characterId: "passarinhoPipo", pose: "sonolento", position: "centro" }],
        },
      },
      {
        id: "s15",
        text: "O céu está agora cheio de estrelinhas brilhantes, uma mais bonita que a outra. A lua cuida de todos que dormem essa noite, com sua luz suave. Pipo sonha que está voando entre as estrelas, livre e feliz. Que sonho lindo e tranquilo para um passarinho pequenino! A mamãe também adormece ao lado dele, cuidando de seu sono. O ninho fica quietinho, embalado pela brisa da noite. Tudo na floresta descansa em paz essa noite.",
        illustration: {
          background: "florestaNoite",
          characters: [{ characterId: "passarinhoPipo", pose: "sonolento", position: "centro" }],
          props: ["estrelas", "lua"],
        },
      },
      {
        id: "s16",
        text: "E assim, Pipo dorme uma noite calma e boa, bem aconchegado. Amanhã o sol vai trazer um novo dia de voos, como a mamãe disse. Mas agora, debaixo das estrelas, ele descansa feliz e tranquilo. Boa noite, pequeno Pipo, durma com sonhos de céu. A primeira estrela continua brilhando, cuidando do seu sono. Até amanhã, para mais um dia de aventuras no céu azul.",
        illustration: {
          background: "florestaNoite",
          characters: [{ characterId: "passarinhoPipo", pose: "sonolento", position: "centro" }],
          props: ["lua"],
        },
      },
    ],
    familyQuestion: "Você já viu a primeira estrela aparecer no céu? Como ela era?",
  },
  {
    id: "a2-noz-e-o-amigo-esquecido",
    title: "Noz e o Amigo Esquecido",
    synopsis: "A esquilinha Noz perde uma noz especial e, com a ajuda da coruja Dadá, aprende sobre amizade.",
    ageGroup: 2,
    category: "Amizade",
    cover: {
      background: "florestaDia",
      characters: [
        { characterId: "esquilaNoz", pose: "feliz", position: "esquerda" },
        { characterId: "corujaSabia", pose: "feliz", position: "direita" },
      ],
    },
    scenes: [
      {
        id: "s1",
        text: "Noz é uma esquilinha marrom-avermelhada, muito esperta e cuidadosa. Ela adora guardar nozes para o inverno, sempre com cuidado. Hoje ela encontra uma noz enorme e brilhante, debaixo de uma árvore. 'Que noz linda!', ela diz, toda animada com a descoberta. Noz gira a noz nas patinhas, admirando o tamanho dela. Nunca tinha visto uma noz tão especial assim antes. Que achado maravilhoso para começar o dia!",
        illustration: {
          background: "florestaDia",
          characters: [{ characterId: "esquilaNoz", pose: "animado", position: "centro" }],
        },
      },
      {
        id: "s2",
        text: "Noz decide guardar essa noz especial num lugar seguro, com cuidado. Ela corre pela floresta procurando o esconderijo perfeito, animada. 'Vou guardar debaixo daquela árvore grande', ela pensa, decidida. Suas patinhas correm rapidinho pelo chão, cheias de energia. Ela passa por pedras e flores, sempre de olho na árvore grande. Chegando lá, ela examina o local com atenção. Parece um ótimo lugar para esconder o tesouro.",
        illustration: {
          background: "florestaDia",
          characters: [{ characterId: "esquilaNoz", pose: "feliz", position: "centro" }],
        },
      },
      {
        id: "s3",
        text: "Ela cava um buraquinho fundo com cuidado, usando as patinhas. Com jeitinho, ela coloca a noz lá dentro, com cuidado. 'Pronto, bem escondidinha!', Noz diz, satisfeita com o trabalho. Ela cobre o buraco com folhas secas, para disfarçar bem. Noz dá uma última olhada, verificando se ficou bem escondido. 'Ninguém vai encontrar aqui', ela pensa, orgulhosa do esconderijo. Satisfeita, ela decide continuar seu passeio pela floresta.",
        illustration: {
          background: "florestaDia",
          characters: [{ characterId: "esquilaNoz", pose: "neutro", position: "centro" }],
        },
      },
      {
        id: "s3b",
        text: "Antes de continuar o passeio, Noz decide contar as nozes que já guardou. 'Uma, duas, três... já tenho bastante!', ela diz, satisfeita. Ela organiza suas nozes em filinhas, bem arrumadinhas. 'Essa noz nova é a mais bonita de todas', ela pensa, orgulhosa. Noz sorri, pensando em como vai ficar bem preparada para o inverno. Guardar comida é uma tarefa importante para uma esquilinha cuidadosa. Satisfeita com a organização, ela decide continuar brincando pela floresta.",
        illustration: {
          background: "florestaDia",
          characters: [{ characterId: "esquilaNoz", pose: "feliz", position: "centro" }],
        },
      },
      {
        id: "s4",
        text: "Noz continua seu dia, brincando e explorando a floresta toda. Ela pula de galho em galho, curiosa e alegre, sem parar. O tempo passa rapidinho enquanto ela se diverte bastante. O sol começa a descer no céu, pintando tudo de laranja. Noz brinca com outros esquilinhos, correndo pelas árvores altas. Ela se diverte tanto que esquece completamente da hora. A tarde passa voando, cheia de brincadeiras e risadas.",
        illustration: {
          background: "florestaDia",
          characters: [{ characterId: "esquilaNoz", pose: "animado", position: "centro" }],
        },
      },
      {
        id: "s5",
        text: "Quando a tarde chega, Noz se lembra da noz especial, de repente. 'Onde eu guardei ela mesmo?', ela pensa, confusa com a pressa. Ela corre até a árvore grande, procurando o buraquinho, ansiosa. Mas há folhas secas por todo lado agora, iguaizinhas umas às outras. Noz não consegue identificar qual é o lugar exato. Ela começa a ficar preocupada, procurando em vários cantos. O esconderijo perfeito virou um grande mistério.",
        illustration: {
          background: "florestaDia",
          characters: [{ characterId: "esquilaNoz", pose: "neutro", position: "centro" }],
        },
      },
      {
        id: "s6",
        text: "Noz procura e procura, mas não encontra a noz em lugar nenhum. 'Ai, não! Eu esqueci onde escondi!', ela diz, preocupada e nervosa. Seus olhinhos ficam tristes, e suas orelhas baixam um pouco, desanimadas. Ela se senta numa pedra, pensativa e cabisbaixa. 'Como pude ser tão descuidada?', ela se pergunta, triste com a situação. O sol continua descendo, deixando Noz ainda mais preocupada com o tempo. Ela não sabe mais o que fazer para encontrar a noz.",
        illustration: {
          background: "florestaDia",
          characters: [{ characterId: "esquilaNoz", pose: "triste", position: "centro" }],
        },
      },
      {
        id: "s7",
        text: "'O que eu vou fazer agora?', Noz pergunta para si mesma, aflita. Ela não quer perder a noz tão especial, de jeito nenhum. De repente, ela escuta um som suave vindo de cima, calmo. 'Quem-quem?', faz a voz, gentil e tranquila. Noz olha para cima, curiosa com o som novo. Talvez alguém possa ajudá-la a resolver esse problema. Ela espera, com um pouquinho de esperança no coração.",
        illustration: {
          background: "florestaDia",
          characters: [{ characterId: "esquilaNoz", pose: "triste", position: "centro" }],
        },
      },
      {
        id: "s8",
        text: "Noz olha para cima e vê a coruja Dadá numa árvore, de óculos. 'Olá, pequena Noz. Por que essa carinha triste?', pergunta Dadá, gentilmente. Noz conta toda a história da noz perdida, com a voz tremendo. Ela explica como escondeu a noz e depois esqueceu o lugar. Dadá escuta com atenção, pensando em como poderia ajudar. 'Entendo sua preocupação', ela diz, com sabedoria e calma. Noz sente um pouquinho de alívio só por contar o problema.",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "esquilaNoz", pose: "surpreso", position: "esquerda" },
            { characterId: "corujaSabia", pose: "feliz", position: "direita" },
          ],
        },
      },
      {
        id: "s9",
        text: "'Não se preocupe', diz Dadá, com sabedoria calma e segura. 'Eu vejo tudo lá de cima. Vamos procurar juntas!', ela propõe, animada. Noz sente um alívio grande no coração, agradecida pela ajuda. 'Obrigada, Dadá!', ela diz, sorrindo pela primeira vez em um tempo. Dadá voa um pouquinho para ver melhor o chão da floresta. Juntas, elas começam o plano de busca pela noz perdida. A esperança de Noz começa a voltar, pouquinho a pouquinho.",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "esquilaNoz", pose: "feliz", position: "esquerda" },
            { characterId: "corujaSabia", pose: "feliz", position: "direita" },
          ],
        },
      },
      {
        id: "s10",
        text: "Dadá voa baixinho, observando o chão com atenção redobrada. Noz caminha embaixo, olhando cada folha seca, com cuidado. 'Vamos ver perto das raízes grandes', sugere Dadá, apontando um caminho. Os dois procuram com cuidado, lado a lado, sem desistir. Eles passam perto de pedras, arbustos e troncos caídos. Noz sente que, com a ajuda de Dadá, tudo fica mais fácil. A busca continua, cheia de esperança e determinação.",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "esquilaNoz", pose: "animado", position: "esquerda" },
            { characterId: "corujaSabia", pose: "feliz", position: "direita" },
          ],
        },
      },
      {
        id: "s11",
        text: "Eles passam por várias árvores, sem sucesso ainda, procurando sem parar. Noz começa a ficar um pouco cansada de procurar tanto. 'Será que nunca vamos achar?', ela pergunta, preocupada de novo. Dadá sorri com calma: 'Não desista, pequena amiga', ela encoraja. 'A gente vai encontrar, tenho certeza', Dadá continua, confiante. Noz respira fundo, ganhando um pouco mais de coragem. Juntas, elas continuam a busca, sem perder a esperança.",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "esquilaNoz", pose: "neutro", position: "esquerda" },
            { characterId: "corujaSabia", pose: "neutro", position: "direita" },
          ],
        },
      },
      {
        id: "s12",
        text: "De repente, Dadá avista algo brilhante entre as folhas, de longe. 'Olha para ali, perto da árvore torta!', ela aponta, animada e esperançosa. Noz corre rapidinho até o lugar indicado, com o coração acelerado. Lá, enterrada nas folhas, está a noz, brilhando suavemente! Noz não acredita no que vê, cheia de alegria. O momento de alívio é enorme, depois de tanta procura. Finalmente, o mistério da noz perdida foi resolvido.",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "esquilaNoz", pose: "surpreso", position: "esquerda" },
            { characterId: "corujaSabia", pose: "animado", position: "direita" },
          ],
        },
      },
      {
        id: "s13",
        text: "'Encontrei! Encontrei!', Noz grita de alegria, pulando animada pela floresta. Ela abraça a noz com carinho, bem apertadinho, não querendo soltar. 'Muito obrigada por me ajudar, Dadá', ela diz, agradecida de verdade. Dadá sorri, feliz por ter ajudado a amiga em um momento difícil. 'Foi um prazer te ajudar', ela responde, gentil e calorosa. Noz sente que ganhou não só a noz, mas também uma amiga. Esse dia terminou de um jeito muito especial.",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "esquilaNoz", pose: "feliz", position: "esquerda" },
            { characterId: "corujaSabia", pose: "feliz", position: "direita" },
          ],
        },
      },
      {
        id: "s14",
        text: "Juntas, elas decidem guardar a noz num lugar mais fácil de lembrar, dessa vez. 'Vamos marcar o lugar com uma pedrinha colorida', sugere Noz, aprendendo com a experiência. Dadá ajuda a escolher a pedrinha perfeita, bem vermelha e chamativa. Elas colocam a pedrinha bem em cima do novo esconderijo. 'Agora nunca mais vou esquecer', Noz diz, sorrindo aliviada. As duas se sentem orgulhosas de terem resolvido o problema juntas. Que lição valiosa sobre organização e amizade!",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "esquilaNoz", pose: "animado", position: "esquerda" },
            { characterId: "corujaSabia", pose: "feliz", position: "direita" },
          ],
        },
      },
      {
        id: "s15",
        text: "Com a noz guardada em segurança, Noz se sente aliviada e feliz. O céu começa a escurecer, trazendo a primeira estrela da noite. 'Hoje aprendi a cuidar melhor das minhas coisas', ela pensa, sorrindo satisfeita. E também fez uma amiga muito especial, pensa ela, agradecida. Dadá se despede, prometendo ajudar sempre que for preciso. Noz caminha para casa, com o coração cheio de gratidão. Que dia tão cheio de aprendizado e amizade!",
        illustration: {
          background: "florestaNoite",
          characters: [{ characterId: "esquilaNoz", pose: "feliz", position: "centro" }],
          props: ["estrelas"],
        },
      },
      {
        id: "s16",
        text: "Noz se aconchega em seu ninho macio nas alturas, bem sonolenta. Ela pensa em Dadá e em como foi gentil ajudá-la hoje. 'Amigos ajudam amigos', ela murmura, sonolenta e feliz. A noite chega quietinha, cuidando do sono da pequena esquilinha. Boa noite, pequena esquilinha cuidadosa, durma com sonhos bonitos. A noz especial está bem guardada, perto da pedrinha vermelha. Até amanhã, para mais um dia na floresta.",
        illustration: {
          background: "florestaNoite",
          characters: [{ characterId: "esquilaNoz", pose: "sonolento", position: "centro" }],
        },
      },
    ],
    familyQuestion: "Você já perdeu algo e um amigo te ajudou a encontrar?",
  },
  {
    id: "a2-mimosa-e-a-amiga-triste",
    title: "Mimosa e a Amiga Triste",
    synopsis: "A ursinha polar Mimosa encontra o sapinho Coco perdido e triste, e o ajuda a reencontrar os amigos.",
    ageGroup: 2,
    category: "Sentimentos",
    cover: {
      background: "montanha",
      characters: [
        { characterId: "ursinhaMimosa", pose: "feliz", position: "esquerda" },
        { characterId: "sapinhoCoco", pose: "triste", position: "direita" },
      ],
    },
    scenes: [
      {
        id: "s1",
        text: "Mimosa é uma ursinha polar branca, muito gentil e cuidadosa com todos. Ela vive numa montanha fria e bonita, cheia de neve. Hoje ela sai para passear pela neve, bem animada. 'Que dia tranquilo para caminhar', ela pensa, sorrindo com o frio gostoso. A neve brilha com a luz do sol, parecendo diamantes. Mimosa caminha com cuidado, deixando pegadas na neve fofinha. Que manhã calma para um passeio tranquilo!",
        illustration: {
          background: "montanha",
          characters: [{ characterId: "ursinhaMimosa", pose: "feliz", position: "centro" }],
        },
      },
      {
        id: "s2",
        text: "Enquanto caminha, Mimosa escuta um som baixinho e triste, distante. Parece um choro pequeno vindo de uma caverna próxima, baixinho. 'Quem será que está chorando?', ela pensa, preocupada com o som. Ela caminha devagarinho em direção ao som, com cuidado. Seu coração fica atento, querendo entender o que está acontecendo. O choro continua, baixinho e triste, chamando atenção de Mimosa. Ela decide se aproximar para descobrir quem precisa de ajuda.",
        illustration: {
          background: "montanha",
          characters: [{ characterId: "ursinhaMimosa", pose: "neutro", position: "centro" }],
        },
      },
      {
        id: "s3",
        text: "Dentro da caverna, Mimosa encontra um sapinho verde, sentado e triste, encolhido. É Coco, que mora perto dali, sozinho naquele momento. 'Oi, Coco. Por que você está chorando?', Mimosa pergunta, com gentileza. Coco olha para ela, surpreso com a visita inesperada. Seus olhinhos estão molhados de lágrimas, mostrando sua tristeza. Mimosa se aproxima com cuidado, sem querer assustá-lo mais. Ela quer entender o que está acontecendo com o pequeno sapinho.",
        illustration: {
          background: "cavernaAconchegante",
          characters: [
            { characterId: "ursinhaMimosa", pose: "surpreso", position: "esquerda" },
            { characterId: "sapinhoCoco", pose: "triste", position: "direita" },
          ],
        },
      },
      {
        id: "s3b",
        text: "Mimosa olha ao redor da caverna, notando como está fria e escura. 'Há quanto tempo você está aqui, sozinho?', ela pergunta, preocupada. 'Desde de manhã', Coco responde, com a voz tremendo um pouquinho. Mimosa sente o coração apertado ao imaginar o sapinho sozinho por tanto tempo. Ela se aproxima mais, querendo que ele sinta um pouco de conforto. 'Você deve estar com frio também', ela comenta, gentil. Coco assente, grato por alguém ter notado como ele estava se sentindo.",
        illustration: {
          background: "cavernaAconchegante",
          characters: [
            { characterId: "ursinhaMimosa", pose: "neutro", position: "esquerda" },
            { characterId: "sapinhoCoco", pose: "triste", position: "direita" },
          ],
        },
      },
      {
        id: "s4",
        text: "Coco limpa uma lagrimazinha e responde baixinho: 'Eu me perdi dos meus amigos.' Ele conta que saiu para explorar e não encontrou o caminho de volta, triste. Seus olhinhos ficam molhados de tristeza, lembrando do susto que teve. 'Fiquei andando e andando, mas não sabia mais onde estava', ele explica. Coco se sente sozinho e com medo, sem saber o que fazer. Mimosa escuta com atenção, sentindo compaixão pelo pequeno sapinho. Ela decide que precisa ajudá-lo de alguma forma.",
        illustration: {
          background: "cavernaAconchegante",
          characters: [
            { characterId: "ursinhaMimosa", pose: "neutro", position: "esquerda" },
            { characterId: "sapinhoCoco", pose: "triste", position: "direita" },
          ],
        },
      },
      {
        id: "s5",
        text: "Mimosa se aproxima e senta ao lado de Coco, com cuidado. 'Eu entendo como você se sente', ela diz, com muito carinho. 'Ficar perdido é bem assustador mesmo', ela reconhece, com compreensão. Ela coloca a pata gentilmente perto dele, oferecendo conforto. Coco sente que não está mais tão sozinho com Mimosa ali. 'Você também já se perdeu alguma vez?', ele pergunta, curioso. 'Já, e sei como é difícil', Mimosa responde, com sinceridade.",
        illustration: {
          background: "cavernaAconchegante",
          characters: [
            { characterId: "ursinhaMimosa", pose: "feliz", position: "esquerda" },
            { characterId: "sapinhoCoco", pose: "triste", position: "direita" },
          ],
        },
      },
      {
        id: "s6",
        text: "'Mas você não está mais sozinho agora', Mimosa continua, sorrindo com confiança. 'Eu vou te ajudar a encontrar seus amigos', ela promete, decidida. Coco sente um pouquinho de alívio no coração, com a promessa. 'Você faria isso por mim?', ele pergunta, surpreso com a gentileza. 'Claro, é isso que amigos fazem', ela responde, com carinho. Coco sente que talvez tudo vá ficar bem agora. Ele começa a se sentir um pouco mais calmo.",
        illustration: {
          background: "cavernaAconchegante",
          characters: [
            { characterId: "ursinhaMimosa", pose: "feliz", position: "esquerda" },
            { characterId: "sapinhoCoco", pose: "neutro", position: "direita" },
          ],
        },
      },
      {
        id: "s7",
        text: "'Claro que sim! É isso que amigos fazem', responde Mimosa, gentilmente e com firmeza. Coco sorri pela primeira vez, um sorriso pequeno mas verdadeiro. 'Obrigado, Mimosa', ele diz, com a voz mais calma agora. Ele se sente muito grato por ter encontrado alguém tão gentil. Mimosa sorri de volta, feliz por poder ajudar o pequeno sapinho. Os dois ficam ali um instante, se conhecendo melhor. É hora de começar a busca pelos amigos de Coco.",
        illustration: {
          background: "cavernaAconchegante",
          characters: [
            { characterId: "ursinhaMimosa", pose: "feliz", position: "esquerda" },
            { characterId: "sapinhoCoco", pose: "feliz", position: "direita" },
          ],
        },
      },
      {
        id: "s8",
        text: "Os dois saem da caverna juntos, lado a lado, prontos para a busca. 'Para onde você ia quando se perdeu?', Mimosa pergunta, curiosa. Coco aponta para um caminho entre as pedras, pensando com cuidado. 'Acho que foi por ali', ele diz, um pouco incerto ainda. Mimosa caminha ao lado dele, oferecendo apoio e companhia. Juntos, eles seguem o caminho apontado, com esperança. A neve crocante faz um som gostoso sob suas patas.",
        illustration: {
          background: "montanha",
          characters: [
            { characterId: "ursinhaMimosa", pose: "animado", position: "esquerda" },
            { characterId: "sapinhoCoco", pose: "neutro", position: "direita" },
          ],
        },
      },
      {
        id: "s9",
        text: "Eles caminham juntos pela neve, conversando com calma e carinho. Mimosa conta histórias divertidas para distrair Coco, sorrindo o tempo todo. Pouco a pouco, o sapinho começa a sorrir mais, se animando. A tristeza dele vai ficando mais leve, a cada passo que dão. Coco ri de uma das histórias de Mimosa, se sentindo melhor. 'Você conta histórias muito bem', ele comenta, feliz. A caminhada se torna mais leve com a boa companhia.",
        illustration: {
          background: "montanha",
          characters: [
            { characterId: "ursinhaMimosa", pose: "feliz", position: "esquerda" },
            { characterId: "sapinhoCoco", pose: "feliz", position: "direita" },
          ],
        },
      },
      {
        id: "s10",
        text: "Perto de um lago congelado, Coco reconhece o lugar, de repente animado. 'É aqui! Meus amigos brincavam perto dessa pedra!', ele diz, muito animado. Os dois se aproximam com esperança no coração, acelerando o passo. Coco sente o coraçãozinho bater mais rápido, de ansiedade e alegria. Mimosa sorri, feliz por ver o amigo ficando mais confiante. 'Estamos quase lá', ela diz, encorajando-o a continuar. A esperança de reencontrar os amigos cresce a cada passo.",
        illustration: {
          background: "rioLagoa",
          characters: [
            { characterId: "ursinhaMimosa", pose: "surpreso", position: "esquerda" },
            { characterId: "sapinhoCoco", pose: "animado", position: "direita" },
          ],
        },
      },
      {
        id: "s11",
        text: "De repente, aparecem outros sapinhos saltando entre as pedras, animados. 'Coco! Você está bem!', eles gritam, alegres e aliviados. Coco pula de felicidade, correndo para abraçar seus amigos verdadeiros. Os sapinhos se juntam em um grande abraço de grupo, felizes. 'Estávamos tão preocupados com você', um deles diz, emocionado. Coco sente o coração cheio de alegria, por estar de volta. Que momento emocionante de reencontro entre amigos!",
        illustration: {
          background: "rioLagoa",
          characters: [
            { characterId: "ursinhaMimosa", pose: "feliz", position: "esquerda" },
            { characterId: "sapinhoCoco", pose: "animado", position: "direita" },
          ],
        },
      },
      {
        id: "s12",
        text: "Os sapinhos agradecem Mimosa por ter cuidado de Coco, com gratidão. 'Ela foi muito gentil comigo', Coco explica, sorrindo com carinho. Mimosa fica com o coração quentinho, feliz por ter ajudado. 'Foi um prazer conhecer vocês todos', ela diz, educada e gentil. Os sapinhos convidam Mimosa para brincar um pouquinho com eles. Ela aceita, feliz por fazer novos amigos também. Que tarde especial, cheia de gratidão e nova amizade!",
        illustration: {
          background: "rioLagoa",
          characters: [
            { characterId: "ursinhaMimosa", pose: "feliz", position: "esquerda" },
            { characterId: "sapinhoCoco", pose: "feliz", position: "direita" },
          ],
        },
      },
      {
        id: "s13",
        text: "Coco se despede de Mimosa com um abraço apertado, agradecido. 'Nunca vou esquecer sua gentileza', ele diz, com os olhos brilhando. 'Você também pode contar comigo, sempre', responde Mimosa, sorrindo. Os dois prometem se visitar outras vezes, para brincar juntos. 'Você é uma amiga muito especial', Coco comenta, sincero. Mimosa se sente honrada com as palavras gentis do sapinho. Essa amizade promete durar por muito tempo.",
        illustration: {
          background: "montanha",
          characters: [
            { characterId: "ursinhaMimosa", pose: "feliz", position: "esquerda" },
            { characterId: "sapinhoCoco", pose: "feliz", position: "direita" },
          ],
        },
      },
      {
        id: "s14",
        text: "Mimosa caminha de volta para casa, satisfeita com seu dia, bem feliz. Ajudar alguém triste fez seu coração ficar mais leve e feliz. 'Pequenos gestos podem fazer uma grande diferença', ela pensa, sorrindo. Ela se sente orgulhosa de ter sido gentil e paciente hoje. O caminho de volta parece mais curto, de tão boa que está. Mimosa pensa em como foi bom conhecer Coco e seus amigos. Que dia tão repleto de bons sentimentos!",
        illustration: {
          background: "montanha",
          characters: [{ characterId: "ursinhaMimosa", pose: "feliz", position: "centro" }],
        },
      },
      {
        id: "s15",
        text: "Em casa, Mimosa se aconchega para dormir, tranquila e satisfeita. Pela entrada da caverna, ela vê a lua brilhando lá fora, suave. 'Espero que Coco esteja feliz com os amigos dele agora', ela pensa, com carinho. Ela sorri, lembrando do dia cheio de bons momentos. Mimosa sente gratidão por ter podido ajudar alguém hoje. A neve brilha com a luz da lua, linda de ver. Que noite tranquila para encerrar um dia tão bonito!",
        illustration: {
          background: "cavernaAconchegante",
          characters: [{ characterId: "ursinhaMimosa", pose: "sonolento", position: "centro" }],
          props: ["lua"],
        },
      },
      {
        id: "s16",
        text: "Mimosa fecha os olhinhos, com o coração calmo e satisfeito, bem tranquila. Cuidar de alguém triste trouxe muita alegria para o seu dia inteiro. Boa noite, pequena ursinha gentil e generosa, durma com sonhos bonitos. A montanha fica em silêncio, protegida pela neve e pela lua. Mimosa sonha com novos amigos e aventuras gentis. Até amanhã, para mais um dia cheio de bondade. A noite cuida de todos que dormem na montanha.",
        illustration: {
          background: "cavernaAconchegante",
          characters: [{ characterId: "ursinhaMimosa", pose: "sonolento", position: "centro" }],
        },
      },
    ],
    familyQuestion: "O que podemos fazer quando um amigo está triste?",
  },
  {
    id: "a2-coco-vai-a-praia",
    title: "Coco Vai à Praia",
    synopsis: "O sapinho Coco conhece o mar pela primeira vez e descobre quantas coisas divertidas existem na praia.",
    ageGroup: 2,
    category: "Animais",
    cover: {
      background: "praia",
      characters: [{ characterId: "sapinhoCoco", pose: "animado", position: "centro" }],
      props: ["bola"],
    },
    scenes: [
      {
        id: "s1",
        text: "Coco, o sapinho verde, nunca tinha visto o mar antes, animado. Hoje seus amigos o levam para conhecer a praia, finalmente. 'Vou ver a água grande!', ele diz, todo animado com a novidade. O sol brilha forte sobre a areia dourada, aquecendo tudo. Coco pula de alegria no caminho, ansioso para chegar. Ele nunca imaginou que esse dia fosse chegar tão rápido. Que aventura emocionante está por começar!",
        illustration: {
          background: "praia",
          characters: [{ characterId: "sapinhoCoco", pose: "animado", position: "centro" }],
        },
      },
      {
        id: "s2",
        text: "Quando chegam, Coco fica boquiaberto com o tamanho do mar, enorme. 'Nunca vi tanta água junta!', ele exclama, maravilhado com a visão. As ondas fazem um som suave: 'Xiii, xiii, xiii!', indo e vindo. Coco observa fascinado, sem conseguir parar de olhar para a água. O horizonte parece não ter fim, misturando-se com o céu azul. Ele sente um misto de surpresa e encantamento com tudo isso. Que lugar incrível para conhecer pela primeira vez!",
        illustration: {
          background: "praia",
          characters: [{ characterId: "sapinhoCoco", pose: "surpreso", position: "centro" }],
        },
      },
      {
        id: "s3",
        text: "Ele corre até a beira da água, com cuidado e curiosidade. Uma onda pequena toca seus pés verdinhos, fazendo-o pular. 'Está fresquinha!', ele ri, pulando para trás, surpreso. A água brilha como prata ao sol, reluzente e bonita. Coco se aproxima de novo, curioso para sentir a água outra vez. Ele ri ao perceber que a água vai e volta sem parar. Essa brincadeira das ondas já o diverte bastante.",
        illustration: {
          background: "praia",
          characters: [{ characterId: "sapinhoCoco", pose: "animado", position: "centro" }],
        },
      },
      {
        id: "s3b",
        text: "Olhando para o horizonte, Coco se pergunta onde o mar termina. 'Será que a água não acaba nunca?', ele pergunta para um amigo. 'Ela vai muito, muito longe, até outras terras', o amigo explica. Coco fica impressionado, tentando imaginar o quão grande é o mundo. Ele olha para os barquinhos distantes, pequenininhos no horizonte. 'Um dia eu quero viajar nesse mar', ele pensa, sonhador. Por agora, ele está feliz só em estar na praia.",
        illustration: {
          background: "praia",
          characters: [{ characterId: "sapinhoCoco", pose: "surpreso", position: "centro" }],
        },
      },
      {
        id: "s4",
        text: "Coco decide entrar um pouquinho mais na água, com coragem. Ele sente a areia molhada entre os dedinhos, gostosa e fresca. 'Isso é tão divertido!', ele diz, saltando nas ondinhas pequenas. A brisa do mar bagunça suas costinhas, deixando-o ainda mais animado. Ele mergulha de leve, sentindo a água fresquinha em todo o corpo. Coco sorri, pensando em como é bom estar na água. Que descoberta maravilhosa para um sapinho curioso!",
        illustration: {
          background: "praia",
          characters: [{ characterId: "sapinhoCoco", pose: "feliz", position: "centro" }],
        },
      },
      {
        id: "s5",
        text: "Seus amigos trazem uma bolinha colorida para brincar, animados. 'Vamos jogar na areia!', eles chamam Coco, cheios de energia. A bola pula de um lado para o outro, divertida. Coco pula também, tentando pegá-la no ar, rindo bastante. Ele erra algumas vezes, mas continua tentando com alegria. Finalmente, ele consegue pegar a bola, orgulhoso de si mesmo. Todos aplaudem e riem, se divertindo juntos na praia.",
        illustration: {
          background: "praia",
          characters: [{ characterId: "sapinhoCoco", pose: "animado", position: "centro" }],
          props: ["bola"],
        },
      },
      {
        id: "s6",
        text: "Depois de brincar bastante, Coco decide explorar a areia, curioso. Ele encontra uma concha bonita, bem rosinha, meio enterrada. 'Que achado especial!', ele diz, guardando com cuidado a concha. A concha brilha suavemente na palma de sua mão, delicada. Coco a observa de todos os ângulos, admirando os detalhes. Ele decide guardar essa concha como uma lembrança especial do dia. Que tesouro bonito ele encontrou na praia!",
        illustration: {
          background: "praia",
          characters: [{ characterId: "sapinhoCoco", pose: "feliz", position: "centro" }],
        },
      },
      {
        id: "s7",
        text: "Mais adiante, Coco vê um caranguejinho andando de lado, engraçado. 'Olá, amigo caranguejo!', ele diz, curioso com o novo bichinho. O caranguejo faz um som engraçado: 'Clique, clique!', movendo as pinças. Coco ri da forma divertida de andar dele, de lado sempre. 'Por que você anda assim?', Coco pergunta, curioso com o jeito dele. O caranguejo apenas continua andando, fazendo Coco rir ainda mais. Os dois logo começam a brincar juntos na areia.",
        illustration: {
          background: "praia",
          characters: [{ characterId: "sapinhoCoco", pose: "surpreso", position: "centro" }],
        },
      },
      {
        id: "s8",
        text: "Coco e o caranguejo brincam de corrida na areia, animados. Um vai para frente, outro vai de lado, cada um do seu jeito. Os dois riem muito com a brincadeira divertida, sem parar. A tarde passa rapidinho entre risadas e brincadeiras na areia. Coco descobre que fazer novos amigos na praia é muito divertido. O caranguejo também parece estar se divertindo com a companhia nova. Que tarde cheia de novas amizades e brincadeiras!",
        illustration: {
          background: "praia",
          characters: [{ characterId: "sapinhoCoco", pose: "animado", position: "centro" }],
        },
      },
      {
        id: "s9",
        text: "Na hora do almoço, os amigos fazem um piquenique na areia, animados. Eles comem frutinhas frescas e gostosas, sentados em círculo. 'Que delícia almoçar perto do mar!', Coco comenta, satisfeito com a vista. O vento traz um cheirinho salgado do oceano, misturado com as frutinhas. Todos conversam e riem enquanto comem, aproveitando o momento juntos. Coco sente que esse é um dos melhores piqueniques que já teve. A vista do mar faz tudo ficar ainda mais especial.",
        illustration: {
          background: "praia",
          characters: [{ characterId: "sapinhoCoco", pose: "feliz", position: "centro" }],
          props: ["cestaPiquenique"],
        },
      },
      {
        id: "s10",
        text: "Depois de comer, eles constroem um castelo de areia juntos, animados. Coco ajuda a empilhar a areia molhada, com cuidado e atenção. 'Nosso castelo está ficando enorme!', ele diz, orgulhoso do trabalho. As paredes ficam altas e bem redondinhas, com torres bonitas. Eles decoram o castelo com conchinhas e pedrinhas coloridas. Todos trabalham juntos, cada um ajudando com uma parte diferente. Que construção incrível eles fizeram juntos na praia!",
        illustration: {
          background: "praia",
          characters: [{ characterId: "sapinhoCoco", pose: "animado", position: "centro" }],
        },
      },
      {
        id: "s11",
        text: "Uma onda maior se aproxima do castelo de areia, de repente. 'Cuidado, vai molhar o castelo!', Coco avisa os amigos, preocupado. Todos riem vendo a onda levar um pedacinho da construção, divertidos. 'O mar também quer brincar!', eles dizem, rindo da situação toda. Coco percebe que não precisa ficar triste com isso, só rir também. 'Vamos construir outro, ainda maior!', ele sugere, animado de novo. A brincadeira continua, cheia de risadas e boa vontade.",
        illustration: {
          background: "praia",
          characters: [{ characterId: "sapinhoCoco", pose: "surpreso", position: "centro" }],
        },
      },
      {
        id: "s12",
        text: "Coco observa o sol começar a descer no horizonte, encantado. O céu fica cor de laranja, rosa e dourado, muito bonito. 'Que lindo pôr do sol', ele diz, encantado com as cores no céu. As cores se refletem na água calma do mar, brilhantes. Coco fica paradinho por um momento, só admirando a paisagem linda. Seus amigos também param para apreciar esse momento especial juntos. Que final de tarde maravilhoso na praia!",
        illustration: {
          background: "praia",
          characters: [{ characterId: "sapinhoCoco", pose: "feliz", position: "centro" }],
        },
      },
      {
        id: "s13",
        text: "Os amigos juntam as coisinhas para voltar para casa, aos poucos. Coco guarda sua concha especial com muito cuidado, protegendo-a bem. 'Hoje foi o melhor dia da minha vida', ele diz, sorrindo bastante. Todos caminham felizes pela areia morna, conversando sobre o dia. Coco olha para trás, para dar um último olhar ao mar. Ele promete a si mesmo que vai voltar outra vez. Que dia inesquecível para um pequeno sapinho explorador!",
        illustration: {
          background: "praia",
          characters: [{ characterId: "sapinhoCoco", pose: "feliz", position: "centro" }],
        },
      },
      {
        id: "s14",
        text: "No caminho de volta, Coco conta tudo sobre o mar, animado. 'A água é enorme e as ondas cantam!', ele explica, animado para quem encontra. Seus olhinhos brilham ainda lembrando da aventura na praia, feliz. Ele conta sobre o caranguejo, o castelo de areia e a concha especial. Todos que escutam ficam encantados com as histórias de Coco. Ele se sente orgulhoso de ter vivido um dia tão especial. Que história maravilhosa para contar aos amigos!",
        illustration: {
          background: "florestaDia",
          characters: [{ characterId: "sapinhoCoco", pose: "animado", position: "centro" }],
        },
      },
      {
        id: "s15",
        text: "Em casa, Coco coloca a concha perto de sua caminha, com cuidado. Ele olha para ela antes de fechar os olhos, sonolento. 'Vou lembrar desse dia para sempre', ele pensa, satisfeito e feliz. A lua brilha suavemente pela entrada da caverna, iluminando tudo. Coco sente o corpo cansado, mas o coração muito feliz. Foi um dia cheio de descobertas e novas amizades na praia. Que sorte ele teve de conhecer o mar hoje!",
        illustration: {
          background: "cavernaAconchegante",
          characters: [{ characterId: "sapinhoCoco", pose: "sonolento", position: "centro" }],
          props: ["lua"],
        },
      },
      {
        id: "s16",
        text: "Coco se aconchega, cansado e muito feliz, fechando os olhinhos. Ele sonha com ondas, conchas e um pôr do sol dourado, lindo. Que dia incrível ele teve na praia, cheio de novidades! Boa noite, pequeno sapinho explorador, durma com sonhos de mar. A concha especial fica guardada, lembrando desse dia para sempre. Amanhã Coco vai contar essa aventura para mais amigos ainda. Até a próxima aventura, pequeno sapinho curioso!",
        illustration: {
          background: "cavernaAconchegante",
          characters: [{ characterId: "sapinhoCoco", pose: "sonolento", position: "centro" }],
        },
      },
    ],
    familyQuestion: "Você já foi à praia ou a um rio? O que você mais gostou de ver?",
  },
];

export default stories;

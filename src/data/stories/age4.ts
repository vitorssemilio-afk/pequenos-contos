import type { Story } from "../../illustrations/types";

const stories: Story[] = [
  {
    id: "a4-nino-soneca-teimosa",
    title: "Nino e a Soneca Teimosa",
    synopsis: "Nino não quer dormir e sai para passear sob a lua, até encontrar a coruja Dadá, que o ajuda a se acalmar para a noite.",
    ageGroup: 4,
    category: "Hora de Dormir",
    cover: {
      background: "quartoNoite",
      characters: [{ characterId: "coelhoNino", pose: "feliz", position: "centro" }],
      props: ["lua", "estrelas"],
    },
    scenes: [
      {
        id: "s1",
        text: "Na casinha no meio da floresta, chegou a hora de dormir. Só que o coelhinho Nino não estava nem um pouquinho com sono. Ele pulava na cama de um lado para o outro, fazendo a cama ranger: cric, cric, cric. 'Ainda quero brincar mais um pouquinho!', disse ele, girando as orelhas compridas como se fossem hélices de brinquedo, enquanto o travesseiro voava de um canto a outro do quarto.\n\nPela janela aberta, a lua cheia brilhava enorme e prateada, pintando listras claras no chão de madeira, como se também quisesse convidar Nino para mais uma aventura antes de dormir. Ele parou de pular, encostou o nariz no vidro frio da janela e olhou bem para aquela luz redonda. Teve, então, uma ideia traquina: se ninguém estava vendo, ele podia dar só uma espiadinha lá fora, rapidinho, antes de finalmente se aconchegar nos lençóis. Com um pulo bem silencioso, quase na ponta das patinhas, desceu da cama devagar, tomando cuidado para não fazer barulho nenhum pela casa adormecida. Lá fora, o vento balançava as cortinas de leve, como se estivesse chamando o coelhinho para uma última travessura antes do sono chegar de verdade, e o cheirinho de grama fresca entrava pela fresta da janela.",
        illustration: {
          background: "quartoNoite",
          characters: [{ characterId: "coelhoNino", pose: "animado", position: "centro" }],
          props: ["lua"],
        },
      },
      {
        id: "s2",
        text: "Nino abriu a janela com cuidado, sentindo o metal da fechadura frio contra as patinhas, e pulou direto para o jardim molhado de orvalho. O ar da noite estava fresquinho e cheio de sons curiosos: o canto baixinho dos grilos escondidos na grama, o farfalhar das folhas lá no alto, o sussurro gostoso do vento passando entre as árvores. Ele deu alguns pulinhos pela grama úmida, sentindo as gotículas de orvalho fazerem cócegas nas patas, e pensou que a noite parecia um mundo todo diferente do dia, mais quieto e mais misterioso.\n\nFoi quando avistou, bem no alto de uma árvore grande e torta, duas luzinhas redondas e amarelas que brilhavam no meio da escuridão, piscando de vez em quando. Será um bichinho? Será uma lanterna esquecida? Curioso, e um pouquinho receoso, Nino se aproximou devagarzinho, pulando de galho em galho com o coração batendo rápido, pronto para descobrir o que eram aquelas luzes brilhantes espiando por entre os galhos mais altos.",
        illustration: {
          background: "florestaNoite",
          characters: [{ characterId: "coelhoNino", pose: "surpreso", position: "centro" }],
          props: ["lua", "estrelas"],
        },
      },
      {
        id: "s3",
        text: "As luzinhas eram os olhos grandes e gentis da coruja Dadá, que vivia naquela árvore havia muitos anos e adorava observar a floresta durante a noite, quando todos os outros bichos dormiam. 'Boa noite, pequeno Nino', disse ela, inclinando a cabeça com um jeito sábio e piscando lentamente. 'Por que um coelhinho está passeando a esta hora, quando devia estar dormindo no seu ninho quentinho, debaixo das cobertas?'\n\nNino explicou, meio sem jeito, arrastando a patinha na terra, que simplesmente não conseguia parar de se sentir animado para dormir, mesmo já estando bem cansado. Dadá sorriu com calma, abriu as asas e desceu um pouco mais pelo galho onde estava pousada, até ficar bem na altura de Nino. 'Eu entendo direitinho. Às vezes o corpo quer dormir, mas a cabeça ainda está cheia de pulinhos, de ideias e de vontade de brincar. Que acha de eu te ensinar um jeitinho de deixar essa cabecinha mais tranquila, para você poder descansar de verdade?'",
        illustration: {
          background: "florestaNoite",
          characters: [
            { characterId: "coelhoNino", pose: "neutro", position: "esquerda" },
            { characterId: "corujaSabia", pose: "feliz", position: "direita" },
          ],
          props: ["lua"],
        },
      },
      {
        id: "s4",
        text: "Dadá convidou Nino a se sentar numa pedra redonda coberta de musgo fofinho, bem debaixo da árvore grande. 'Primeiro', disse ela, 'vamos respirar fundo, como se fôssemos cheirar uma flor bem gostosa, dessas que enchem o nariz de perfume.' Nino respirou fundo pelo nariz, enchendo a barriga de ar fresco, e soltou tudo bem devagar pela boca, sentindo os ombros ficarem mais leves e as orelhas descerem um pouquinho, relaxadas.\n\n'Agora', continuou a coruja, piscando os olhos grandes, 'vamos olhar para o céu e contar as estrelas, uma de cada vez, sem pressa nenhuma, só prestando atenção em cada pontinho.' Nino achou a ideia ótima e levantou os olhos para o céu enorme, salpicado de pontinhos brilhantes que pareciam piscar de volta para ele, como se estivessem combinando um segredo só deles dois.",
        illustration: {
          background: "florestaNoite",
          characters: [
            { characterId: "coelhoNino", pose: "neutro", position: "esquerda" },
            { characterId: "corujaSabia", pose: "neutro", position: "direita" },
          ],
          props: ["estrelas"],
        },
      },
      {
        id: "s4b",
        text: "No meio da contagem, um vaga-lume passou bem perto, piscando sua luzinha amarela de um jeito convidativo, e Nino não resistiu: saltou atrás dele, rindo baixinho, esquecendo por um instante as estrelas. 'Pera, pera, volta aqui!', disse ele, tentando alcançar a luzinha que dançava de um lado para o outro entre os arbustos.\n\nDadá observou com paciência, sem repreender a distração. 'Brincar um pouquinho antes de descansar também é gostoso', disse ela, balançando a cabeça. 'Mas que tal guardarmos esse amigo brilhante para outra noite e voltarmos para nossas estrelas?' Nino concordou, ainda sorrindo, e voltou a se sentar ao lado da coruja, o coração batendo um pouco mais rápido de tanto correr.",
        illustration: {
          background: "florestaNoite",
          characters: [
            { characterId: "coelhoNino", pose: "animado", position: "esquerda" },
            { characterId: "corujaSabia", pose: "feliz", position: "direita" },
          ],
          props: ["estrelas"],
        },
      },
      {
        id: "s4c",
        text: "'Dadá, por que você fica acordada quando todo mundo dorme?', perguntou Nino, curioso, deitando a cabecinha no colo de musgo macio. A coruja sorriu, piscando devagar. 'Eu nasci assim, pequeno Nino. Enquanto vocês sonham, eu cuido da floresta, escuto os barulhinhos e aviso se algo precisar de ajuda.'\n\n'Isso parece um trabalho importante', disse Nino, impressionado, esfregando os olhos sonolentos. 'É um trabalho que eu amo fazer', respondeu Dadá, com orgulho tranquilo na voz. 'E hoje, meu trabalho favorito é ajudar um coelhinho teimoso a encontrar o sono.' Nino riu baixinho com aquilo, sentindo-se especial por ter a atenção toda da coruja sábia.",
        illustration: {
          background: "florestaNoite",
          characters: [
            { characterId: "coelhoNino", pose: "sonolento", position: "esquerda" },
            { characterId: "corujaSabia", pose: "neutro", position: "direita" },
          ],
          props: ["lua"],
        },
      },
      {
        id: "s5",
        text: "'Uma, duas, três...', começou Nino, apontando para cada estrelinha com a pata, bem concentrado. A cada número, sua voz ficava um pouquinho mais calma, mais baixinha, quase um sussurro. Dadá contava junto, num ritmo gostoso, suave como uma canção de ninar sem palavras, balançando a cabeça de um lado para o outro.\n\nQuando chegaram à estrela de número doze, Nino já tinha dado um bocejo bem grande. 'Hoo-aaah', ele bocejou, cobrindo a boca com a patinha e rindo da própria soneca que começava a aparecer, surpreendido com a rapidez. As estrelas pareciam brilhar um pouquinho mais fraco, como se também estivessem ficando sonolentas junto com ele, fechando os olhinhos de luz lá no alto do céu escuro.",
        illustration: {
          background: "florestaNoite",
          characters: [
            { characterId: "coelhoNino", pose: "sonolento", position: "esquerda" },
            { characterId: "corujaSabia", pose: "feliz", position: "direita" },
          ],
          props: ["estrelas", "lua"],
        },
      },
      {
        id: "s6",
        text: "'Sabe, Nino', disse Dadá com gentileza, ajeitando as penas do peito, 'a noite é o momento em que a floresta inteira descansa para acordar com mais energia no dia seguinte. Até as flores fecham as pétalas para dormir, e os passarinhos escondem a cabecinha debaixo da ala.' Nino pensou nisso, olhando para as flores fechadas do jardim ao redor, e percebeu que, de verdade, seu corpinho já estava pesado e gostoso, pedindo para voltar para a cama quentinha.\n\nEle se espreguiçou todo, esticando as patinhas e as orelhas compridas para os dois lados, e sentiu um calorzinho confortável tomar conta dele por dentro. 'Acho que agora eu já estou com um pouquinho de sono', admitiu, sorrindo timidamente para a coruja, as pálpebras já pesando de verdade.",
        illustration: {
          background: "florestaNoite",
          characters: [
            { characterId: "coelhoNino", pose: "sonolento", position: "centro" },
            { characterId: "corujaSabia", pose: "feliz", position: "direita" },
          ],
          props: [],
        },
      },
      {
        id: "s7",
        text: "Dadá abriu as asas largas e voou baixinho, acompanhando Nino de volta pelo caminho entre as árvores escuras. Ela cantarolava uma melodia suave, quase um sussurro, enquanto o coelhinho caminhava devagar pela grama molhada, já bocejando outra vez e arrastando um pouquinho as patinhas de sono.\n\nQuando chegaram à janela da casinha, Dadá disse, com a voz baixinha: 'Pronto, chegamos. Durma bem, pequeno amigo, e sonhe com estrelas bonitas, bem quietinhas no céu.' Nino agradeceu com um abraço apertado nas penas quentinhas da coruja, sentindo-se seguro e grato por aquele passeio tão gostoso, que tinha terminado exatamente como ele precisava: calmo, leve e cheio de carinho.",
        illustration: {
          background: "florestaNoite",
          characters: [
            { characterId: "coelhoNino", pose: "sonolento", position: "esquerda" },
            { characterId: "corujaSabia", pose: "feliz", position: "direita" },
          ],
          props: ["lua"],
        },
      },
      {
        id: "s8",
        text: "Nino pulou de volta para dentro do quarto, bem de mansinho, e se enrolou todinho sob o cobertor fofinho, sentindo o travesseiro macio debaixo da cabeça e o cheirinho conhecido da sua caminha. Pela janela, ele ainda podia ver Dadá pousada num galho próximo, vigiando a noite com seus olhos grandes e gentis, como uma guardiã silenciosa da floresta.\n\n'Boa noite, Dadá', murmurou Nino, já de olhos quase fechados, a voz saindo bem fraquinha. A coruja respondeu com um suave piado de despedida, baixinho como um beijo de boa-noite, e logo o coelhinho mergulhou num sono tranquilo e gostoso, sonhando com estrelas que dançavam devagarinho no céu escuro, uma a uma, até a manhã chegar.",
        illustration: {
          background: "quartoNoite",
          characters: [{ characterId: "coelhoNino", pose: "sonolento", position: "centro" }],
          props: ["lua", "estrelas"],
        },
      },
    ],
    familyQuestion: "O que ajuda você a se sentir calminho e pronto para dormir à noite?",
  },

  {
    id: "a4-mimosa-noite-estrelada",
    title: "A Noite Estrelada de Mimosa",
    synopsis: "Mimosa, a ursinha polar, tem dificuldade para dormir numa noite sem neve e descobre, com a ajuda do passarinho Pipo, uma nova forma de se sentir em casa.",
    ageGroup: 4,
    category: "Hora de Dormir",
    cover: {
      background: "montanha",
      characters: [{ characterId: "ursinhaMimosa", pose: "feliz", position: "centro" }],
      props: ["estrelas", "lua"],
    },
    scenes: [
      {
        id: "s1",
        text: "No topo de uma montanha gelada, onde o vento sempre soprava fresquinho entre as pedras, a ursinha Mimosa se preparava para dormir, mas algo estava diferente naquela noite. A neve que sempre cobria tudo à sua volta tinha derretido um pouquinho mais do que o normal, deixando pedaços de pedra escura à mostra, e sem aquele branquinho fofo ao redor, Mimosa não conseguia se sentir confortável dentro da própria toca.\n\n'Sem neve direitinho, tudo parece estranho', pensou ela, dando voltas e voltas dentro da sua toca de gelo, arrumando e desarrumando o cantinho onde costumava dormir. Ela tentou fechar os olhos várias vezes, apertando bem as pálpebras, mas a inquietação não ia embora de dentro do peito, e o silêncio da montanha parecia, pela primeira vez, um pouquinho grande demais e esquisito demais para ela sozinha.",
        illustration: {
          background: "montanha",
          characters: [{ characterId: "ursinhaMimosa", pose: "triste", position: "centro" }],
          props: ["lua"],
        },
      },
      {
        id: "s2",
        text: "Decidida a esfriar a cabeça de outro jeito, Mimosa saiu da toca com as patas afundando levemente na neve rala e foi até uma pedra lisa onde gostava de observar o céu nas noites claras. Foi ali que encontrou o passarinho Pipo, que também estava desperto, descansando as penas num cantinho protegido do vento depois de um dia inteiro de voos compridos pela montanha.\n\n'Oi, Mimosa! Por que você está de olhos tão abertos a esta hora, com essa carinha preocupada?', perguntou Pipo, pousando gentilmente ao lado dela, a cabecinha inclinada de curiosidade. A ursinha suspirou e contou sobre a neve que faltava e como aquilo fazia a noite parecer diferente, meio sem jeito de casa, como se alguém tivesse trocado as paredes do seu quarto sem avisar.",
        illustration: {
          background: "montanha",
          characters: [
            { characterId: "ursinhaMimosa", pose: "triste", position: "esquerda" },
            { characterId: "passarinhoPipo", pose: "neutro", position: "direita" },
          ],
          props: ["estrelas"],
        },
      },
      {
        id: "s3",
        text: "Pipo pensou um pouco, inclinando a cabecinha de um lado para o outro, do jeito que os passarinhos fazem quando estão com uma ideia chegando devagarinho. 'Sabe, Mimosa, eu também não tenho uma casa fixa, bem pensando bem. Eu durmo em árvores diferentes quase toda noite, dependendo de onde o dia me levar. No começo, isso me deixava com uma sensação esquisita na barriga, tipo um frio que não é de temperatura.'\n\n'E o que você faz quando sente isso?', perguntou Mimosa, curiosa, virando-se de frente para o amigo. 'Eu aprendi a procurar uma coisa que é sempre igual, onde quer que eu esteja, em qualquer árvore, em qualquer noite', respondeu Pipo, apontando para cima com a asa, quase tocando o céu. 'As estrelas. Elas estão lá todas as noites, sempre as mesmas, não importa onde eu durma ou quão longe eu tenha voado.'",
        illustration: {
          background: "montanha",
          characters: [
            { characterId: "ursinhaMimosa", pose: "neutro", position: "esquerda" },
            { characterId: "passarinhoPipo", pose: "feliz", position: "direita" },
          ],
          props: ["estrelas"],
        },
      },
      {
        id: "s3b",
        text: "Mimosa pensou um pouco mais, olhando para as próprias patas na neve rala. 'Mas e quando você chega numa árvore nova e tudo parece tão diferente e assustador?', perguntou ela, ainda com um resquício de insegurança na voz. Pipo inclinou a cabeça, pensativo, antes de responder.\n\n'No começo, eu sinto um friozinho também', confessou ele. 'Mas aí eu procuro um galho confortável, escuto os sons ao redor até eles ficarem familiares, e lembro que o céu acima de mim é sempre o mesmo céu. Isso me ajuda a sentir que, mesmo em lugar novo, uma parte de casa viaja comigo.' Mimosa escutava com atenção, guardando cada palavra como um tesouro.",
        illustration: {
          background: "montanha",
          characters: [
            { characterId: "ursinhaMimosa", pose: "neutro", position: "esquerda" },
            { characterId: "passarinhoPipo", pose: "neutro", position: "direita" },
          ],
          props: ["lua"],
        },
      },
      {
        id: "s3c",
        text: "Um vento frio passou entre as pedras, fazendo Mimosa se encolher um pouquinho, e Pipo se aproximou mais, aninhando-se perto da pata quentinha da ursinha. 'Enquanto conversamos, que tal prestarmos atenção nos sons da montanha também?', sugeriu ele. 'Às vezes o silêncio parece grande demais, mas na verdade está cheio de coisas gentis: o vento nas pedras, a neve se assentando, o rio lá embaixo.'\n\nMimosa fechou os olhos e escutou, surpresa ao perceber quantos sons suaves preenchiam aquela noite que antes parecia vazia e solitária. Aos poucos, sua respiração foi ficando mais calma, acompanhando o ritmo tranquilo da montanha ao redor.",
        illustration: {
          background: "montanha",
          characters: [
            { characterId: "ursinhaMimosa", pose: "neutro", position: "centro" },
            { characterId: "passarinhoPipo", pose: "neutro", position: "fundo-direita" },
          ],
          props: [],
        },
      },
      {
        id: "s4",
        text: "Mimosa levantou os olhos para o céu escuro, e lá estavam elas: milhares de estrelinhas brilhando, formando desenhos no céu como se fossem conectar pontinhos invisíveis. Ela nunca tinha prestado tanta atenção naquilo antes, sempre ocupada olhando para a neve ao redor e cuidando da sua tocaia gelada.\n\n'Aquele grupinho ali parece uma colher!', disse ela, apontando com a patinha, animada com a própria descoberta. Pipo riu, satisfeito, batendo as asas de leve. 'E aquele conjunto ali parece um peixinho nadando, olha só a cauda comprida!', completou ele, apontando para outro canto do céu. Juntos, eles ficaram inventando formas e nomes engraçados para as estrelas, rindo cada vez que encontravam uma nova figura, esquecendo pouco a pouco da preocupação com a neve que faltava.",
        illustration: {
          background: "montanha",
          characters: [
            { characterId: "ursinhaMimosa", pose: "feliz", position: "esquerda" },
            { characterId: "passarinhoPipo", pose: "animado", position: "direita" },
          ],
          props: ["estrelas"],
        },
      },
      {
        id: "s5",
        text: "'Entendi o que você quis dizer', disse Mimosa depois de um tempo, ainda olhando para o céu com um sorriso pequeno nos lábios. 'Mesmo que a neve mude, as coisas ao redor mudem, tem sempre algo igual para eu me agarrar, como as estrelas, ou como a sensação gostosa de estar perto de um amigo que entende o que eu sinto.'\n\nPipo assentiu, feliz por ver Mimosa mais tranquila e com os ombros menos tensos. 'Exatamente isso. Casa não é só um lugar com a mesma aparência todo dia, com a mesma quantidade de neve. Casa também pode ser um sentimento de conforto que a gente carrega para onde for, mesmo quando tudo ao redor parece diferente.'",
        illustration: {
          background: "montanha",
          characters: [
            { characterId: "ursinhaMimosa", pose: "feliz", position: "centro" },
            { characterId: "passarinhoPipo", pose: "feliz", position: "direita" },
          ],
          props: ["estrelas", "lua"],
        },
      },
      {
        id: "s6",
        text: "Para deixar a toca mais acolhedora mesmo sem muita neve, Mimosa teve uma ideia: ela arrumou pedrinhas brancas e pedacinhos de gelo em formato de estrelinhas pela entrada da toca, formando um pequeno céu só dela, bem na parede de pedra. Pipo ajudou, carregando os pedacinhos mais leves com o bico, voando de um lado para o outro com cuidado para não deixar cair nenhum.\n\nQuando terminaram, a entrada da toca brilhava suavemente, refletindo a luz da lua em cada pedacinho de gelo, parecendo um pedacinho do céu trazido para perto de casa. Mimosa deu um passo atrás para admirar o trabalho e sorriu, satisfeita com a nova decoração que os dois tinham criado juntos, com tanto cuidado e carinho.",
        illustration: {
          background: "montanha",
          characters: [
            { characterId: "ursinhaMimosa", pose: "animado", position: "esquerda" },
            { characterId: "passarinhoPipo", pose: "feliz", position: "direita" },
          ],
          props: ["estrelas"],
        },
      },
      {
        id: "s6b",
        text: "Antes de se aconchegar para dormir, Mimosa e Pipo ficaram em silêncio por um momento, admirando a pequena obra que tinham construído juntos. 'Vou lembrar dessa noite sempre que sentir que algo mudou demais ao meu redor', disse Mimosa, tocando de leve um dos pedacinhos de gelo brilhante com a pata.\n\nPipo assentiu, satisfeito. 'E eu vou lembrar que, mesmo voando de árvore em árvore, posso ajudar um amigo a se sentir em casa em qualquer lugar.' Os dois se olharam, sorrindo, sentindo aquela amizade nova ficar ainda mais forte depois de uma noite cheia de descobertas compartilhadas.",
        illustration: {
          background: "montanha",
          characters: [
            { characterId: "ursinhaMimosa", pose: "feliz", position: "esquerda" },
            { characterId: "passarinhoPipo", pose: "feliz", position: "direita" },
          ],
          props: ["estrelas"],
        },
      },
      {
        id: "s7",
        text: "'Agora sim, parece com a minha casa de verdade', disse Mimosa, bocejando enquanto se aconchegava dentro da toca brilhante, sentindo o gelo fresquinho nas costas e as estrelinhas de pedra brilhando acima dela. Pipo pousou num galho próximo, as penas já pesando de sono, pronto para também descansar depois daquela noite cheia de descobertas e boas conversas.\n\n'Boa noite, Mimosa. Durma bem, debaixo do seu próprio céu de estrelinhas', disse ele suavemente, quase num sussurro. A ursinha fechou os olhos, sentindo o coração quentinho e tranquilo, muito diferente de como estava no começo da noite, quando tudo parecia estranho demais para adormecer.",
        illustration: {
          background: "montanha",
          characters: [
            { characterId: "ursinhaMimosa", pose: "sonolento", position: "centro" },
            { characterId: "passarinhoPipo", pose: "sonolento", position: "fundo-direita" },
          ],
          props: ["lua", "estrelas"],
        },
      },
      {
        id: "s8",
        text: "Enquanto dormia, Mimosa sonhou com estrelas dançando devagarinho pelo céu, formando desenhos novos a cada momento, como se estivessem brincando só para ela. No sonho, não importava se havia muita ou pouca neve ao redor da toca: o importante era aquele sentimento de aconchego que ela tinha aprendido a levar consigo, guardadinho no peito.\n\nLá fora, as estrelas de verdade continuavam brilhando fielmente no céu escuro, como sempre fizeram, prometendo estar ali na próxima noite, e na seguinte, e em todas as outras que viessem depois daquela, sempre as mesmas, sempre companheiras de quem precisasse olhar para cima.",
        illustration: {
          background: "montanha",
          characters: [{ characterId: "ursinhaMimosa", pose: "sonolento", position: "centro" }],
          props: ["estrelas", "lua"],
        },
      },
    ],
    familyQuestion: "Que coisas fazem você se sentir em casa, mesmo quando está em um lugar diferente?",
  },

  {
    id: "a4-doce-aprende-nadar",
    title: "Doce Aprende a Nadar",
    synopsis: "O elefantinho Doce tem medo de entrar na água, mas com a paciência e as dicas do patinho Tom, descobre que pode enfrentar seus medos devagarinho.",
    ageGroup: 4,
    category: "Animais",
    cover: {
      background: "rioLagoa",
      characters: [
        { characterId: "elefantinhoDoce", pose: "feliz", position: "esquerda" },
        { characterId: "patinhoTom", pose: "feliz", position: "direita" },
      ],
      props: ["sol"],
    },
    scenes: [
      {
        id: "s1",
        text: "Era um dia quente de sol, com o céu bem azul e sem nenhuma nuvem, e todos os bichos da fazenda tinham ido até a lagoa para se refrescar das horas mais quentes da tarde. Todos, menos o elefantinho Doce, que ficava parado na beirinha da água, olhando para o lago com os olhos arregalados e as patas enormes bem fincadas na areia.\n\n'Vem, Doce! A água está uma delícia!', chamavam os amigos de dentro da lagoa, rindo e espirrando água uns nos outros, formando ondinhas que iam até a margem. Mas Doce sacudia a cabeça, sentindo o coraçãozinho bater mais rápido só de pensar em entrar naquela água funda e desconhecida, que parecia escondida demais lá no fundo.",
        illustration: {
          background: "rioLagoa",
          characters: [{ characterId: "elefantinhoDoce", pose: "triste", position: "centro" }],
          props: ["sol"],
        },
      },
      {
        id: "s2",
        text: "O patinho Tom, que adorava nadar mais do que qualquer coisa no mundo, notou que Doce estava sozinho na beira, olhando os outros se divertirem de longe. Ele saiu da água, sacudindo as penas molhadas que brilhavam ao sol, e se aproximou com calma. 'Você não gosta de água, Doce?', perguntou com gentileza, sem nenhum julgamento na voz, só curiosidade mesmo.\n\n'Eu tenho medo de afundar', admitiu Doce, baixinho, olhando para as próprias patas enormes e pensando em como elas eram pesadas. 'E se a água for funda demais para mim, e eu não conseguir voltar?' Tom pensou um pouco, coçando a cabeça com a pata, e disse: 'Que acha de a gente ir bem devagarinho, só até onde você se sentir seguro, sem pressa nenhuma?'",
        illustration: {
          background: "rioLagoa",
          characters: [
            { characterId: "elefantinhoDoce", pose: "triste", position: "esquerda" },
            { characterId: "patinhoTom", pose: "neutro", position: "direita" },
          ],
          props: [],
        },
      },
      {
        id: "s2b",
        text: "Enquanto caminhavam até a beira mais calma da lagoa, Tom contou que ele também tinha sentido medo das ondas maiores quando era bem pequenino, recém-saído do ovo. 'Eu nadava só perto da margem, agarrado nas pernas da minha mãe', disse ele, rindo da lembrança. 'Levei um tempo para descobrir que meu corpo sabia flutuar, mesmo sem eu perceber.'\n\nDoce ouviu com atenção, sentindo-se um pouco menos sozinho com aquele medo. 'Você também teve medo?', perguntou, surpreso. 'Todo mundo tem medo de alguma coisa em algum momento', respondeu Tom, com um sorriso gentil. 'O importante é ter alguém por perto quando a gente decide enfrentar esse medo.'",
        illustration: {
          background: "rioLagoa",
          characters: [
            { characterId: "elefantinhoDoce", pose: "neutro", position: "esquerda" },
            { characterId: "patinhoTom", pose: "neutro", position: "direita" },
          ],
          props: ["sol"],
        },
      },
      {
        id: "s3",
        text: "Doce concordou, ainda um pouco receoso, e deu o primeiro passo na água bem rasinha, onde só as patinhas ficavam molhadas e a areia do fundo ainda dava para ver. Sentiu a água fresquinha tocar sua pele quente de sol e, para sua surpresa, aquilo não era nada assustador, era até gostoso, quase como um cafuné nas patas.\n\n'Viu? Essa parte não tem perigo nenhum', disse Tom, nadando em pequenos círculos por perto, só para mostrar que estava tudo bem. Doce deu um sorriso tímido, sentindo-se um pouquinho mais corajoso do que há poucos minutos, e molhou a tromba de leve, só para testar.",
        illustration: {
          background: "rioLagoa",
          characters: [
            { characterId: "elefantinhoDoce", pose: "surpreso", position: "esquerda" },
            { characterId: "patinhoTom", pose: "feliz", position: "direita" },
          ],
          props: [],
        },
      },
      {
        id: "s4",
        text: "Passo a passo, Tom foi guiando Doce para um pouquinho mais fundo, sempre perguntando como ele estava se sentindo antes de avançar mais um pedacinho. Quando a água chegou até a altura dos joelhos de Doce, ele sentiu uma pontinha de medo voltar, o coração acelerando de novo, e parou de andar, com as patas fincadas na lama do fundo.\n\n'Está tudo bem ficar por aqui agora, não precisamos ir mais rápido do que você quiser', disse Tom, sem pressionar nem um pouquinho. Doce respirou fundo, agradecido por não ser apressado, e aquela calma do amigo ajudou seu coraçãozinho a bater mais devagar outra vez, como se o medo estivesse derretendo junto com o calor do dia.",
        illustration: {
          background: "rioLagoa",
          characters: [
            { characterId: "elefantinhoDoce", pose: "neutro", position: "esquerda" },
            { characterId: "patinhoTom", pose: "feliz", position: "direita" },
          ],
          props: [],
        },
      },
      {
        id: "s4b",
        text: "Por um instante, uma lembrança do medo voltou: Doce imaginou a água ficando funda demais, sem fundo nenhum para suas patas tocarem, e seu coração disparou de novo. Ele fechou os olhos, respirando fundo como tinha visto os pássaros fazerem antes de um voo importante.\n\n'Você está bem?', perguntou Tom, percebendo a mudança no amigo. 'Só lembrei do medo de novo', admitiu Doce, com sinceridade. 'Está tudo bem sentir isso', disse Tom, nadando mais perto. 'O medo pode aparecer e ir embora várias vezes, e cada vez fica um pouquinho mais fácil de lidar com ele.' Doce assentiu, grato pela paciência do amigo, e sentiu o coração acalmar de novo.",
        illustration: {
          background: "rioLagoa",
          characters: [
            { characterId: "elefantinhoDoce", pose: "triste", position: "esquerda" },
            { characterId: "patinhoTom", pose: "neutro", position: "direita" },
          ],
          props: [],
        },
      },
      {
        id: "s5",
        text: "Depois de descansar um pouco naquela profundidade confortável, sentindo a água balançar de leve ao redor, Doce reparou em como ela o deixava mais leve, quase flutuando, diferente do peso que sentia em terra firme, carregando aquele corpo enorme para todo lado. Aquela descoberta o fez sorrir de verdade pela primeira vez naquela tarde.\n\n'Eu sinto que estou flutuando um pouquinho!', exclamou, surpreso e animado ao mesmo tempo, abrindo um sorriso enorme. Tom bateu as patinhas na água, comemorando com salpicos alegres. 'Isso mesmo! A água ajuda a carregar o seu peso, por isso você se sente tão leve. Quer tentar nadar só um pouquinho, bem perto de mim, sem se afastar?'",
        illustration: {
          background: "rioLagoa",
          characters: [
            { characterId: "elefantinhoDoce", pose: "animado", position: "esquerda" },
            { characterId: "patinhoTom", pose: "animado", position: "direita" },
          ],
          props: [],
        },
      },
      {
        id: "s6",
        text: "Com Tom nadando bem ao seu lado, sempre por perto, Doce esticou a tromba para fora da água como um tubo de respirar e começou a mover as patas devagar, imitando os movimentos que via os outros bichos fazerem lá na lagoa. No começo foi estranho, as patas batendo desencontradas, mas logo ele pegou o jeito e encontrou um ritmo gostoso.\n\n'Estou nadando! Estou realmente nadando!', gritou Doce, cheio de alegria, espirrando água com a tromba para todos os lados e fazendo os amigos rirem de longe. Os outros animais da lagoa aplaudiram com as patas e as asas, felizes por ver o amigo superar aquele medo que o prendia na beirinha há tanto tempo.",
        illustration: {
          background: "rioLagoa",
          characters: [
            { characterId: "elefantinhoDoce", pose: "animado", position: "esquerda" },
            { characterId: "patinhoTom", pose: "animado", position: "direita" },
          ],
          props: ["sol"],
        },
      },
      {
        id: "s6b",
        text: "Os outros bichinhos da lagoa se aproximaram para nadar perto de Doce, animados em ter mais um amigo brincando na água. A gatinha Luna, que tinha vindo só para molhar as patas na margem, assistiu encantada o elefantinho fazer ondinhas enormes com a tromba, rindo sem parar.\n\n'Você aprendeu rapidinho!', exclamou ela, aplaudindo. Doce sorriu, orgulhoso, sentindo o sol esquentar sua pele molhada. 'Foi o Tom que teve paciência comigo, passo a passinho', disse ele, olhando com carinho para o amigo pato que nadava alegremente ao seu lado, fazendo piruetas na água para comemorar.",
        illustration: {
          background: "rioLagoa",
          characters: [
            { characterId: "elefantinhoDoce", pose: "animado", position: "esquerda" },
            { characterId: "patinhoTom", pose: "feliz", position: "direita" },
          ],
          props: ["sol"],
        },
      },
      {
        id: "s7",
        text: "Depois de nadar um bom tempo, até ficarem com as patinhas enrugadas de tanta água, Doce e Tom saíram da lagoa para descansar na grama quentinha, deixando o sol secar suas peles devagarinho. Doce ainda estava com um sorriso enorme no rosto, orgulhoso de si mesmo por ter tentado algo que antes parecia tão difícil e assustador.\n\n'Obrigado por ter paciência comigo', disse ele a Tom, olhando para o amigo com gratidão. 'Foi mais fácil porque você não me apressou nem riu do meu medo.' Tom sorriu e respondeu, sacudindo as penas: 'Cada um aprende no seu próprio tempo, Doce. O importante é que você tentou, mesmo com medo.'",
        illustration: {
          background: "rioLagoa",
          characters: [
            { characterId: "elefantinhoDoce", pose: "feliz", position: "esquerda" },
            { characterId: "patinhoTom", pose: "feliz", position: "direita" },
          ],
          props: ["sol"],
        },
      },
      {
        id: "s8",
        text: "No dia seguinte, Doce foi o primeiro a correr até a lagoa, ansioso para nadar outra vez, as patas enormes levantando poeira pelo caminho. Ele ainda tinha um respeito saudável pela água funda, sem exagero, mas o medo tinha dado lugar a uma alegria nova e gostosa de sentir o corpo flutuar.\n\nDe longe, Tom o viu chegando e gritou, animado: 'Vem, Doce, a água está te esperando!' E, desta vez, Doce entrou na lagoa sorrindo, sem hesitar nem um pouquinho, lembrando que ir devagar e com um amigo por perto tinha feito toda a diferença naquele dia tão especial.",
        illustration: {
          background: "rioLagoa",
          characters: [
            { characterId: "elefantinhoDoce", pose: "animado", position: "esquerda" },
            { characterId: "patinhoTom", pose: "feliz", position: "direita" },
          ],
          props: ["sol"],
        },
      },
    ],
    familyQuestion: "Já teve algo que parecia difícil no começo, mas foi ficando mais fácil depois de tentar um pouquinho de cada vez?",
  },

  {
    id: "a4-noz-inverno-guardado",
    title: "O Inverno Guardado de Noz",
    synopsis: "A esquilinha Noz se preocupa em juntar comida suficiente para o inverno e aprende, com a ajuda do cachorrinho Bolinha, que dividir o trabalho é mais fácil e mais divertido.",
    ageGroup: 4,
    category: "Animais",
    cover: {
      background: "florestaDia",
      characters: [
        { characterId: "esquilaNoz", pose: "animado", position: "esquerda" },
        { characterId: "cachorrinhoBolinha", pose: "feliz", position: "direita" },
      ],
      props: ["flor"],
    },
    scenes: [
      {
        id: "s1",
        text: "As folhas das árvores começavam a ficar amarelas e vermelhas, caindo lentamente ao vento, sinal de que o outono estava chegando ao fim e o inverno viria em breve, trazendo frio e neve para a floresta toda. A esquilinha Noz corria de um lado para o outro entre os troncos, catando nozes e sementes com pressa, mas sentia que o tempo estava passando rápido demais para tudo que precisava fazer.\n\n'Preciso guardar comida suficiente para os dias frios, e ainda tenho tanto para catar!', disse ela, ofegante, carregando um montinho de nozes apertado contra o peito com os braços pequenos. Quanto mais ela pensava na quantidade necessária para passar o inverno inteiro, mais preocupada e cansada ficava, sentindo o peso nas costas aumentar a cada viagem.",
        illustration: {
          background: "florestaDia",
          characters: [{ characterId: "esquilaNoz", pose: "triste", position: "centro" }],
          props: [],
        },
      },
      {
        id: "s2",
        text: "O cachorrinho Bolinha, que estava passeando por ali farejando o cheiro gostoso das folhas secas, viu Noz carregando tantas nozes de uma vez só que quase tropeçava a cada passo no caminho. 'Posso te ajudar com isso?', perguntou ele, aproximando-se com o rabinho balançando animado e as orelhas caídas de curiosidade.\n\n'Eu preciso fazer isso sozinha, senão não vai dar tempo antes do frio chegar', respondeu Noz, um pouco apressada, sem nem olhar bem para o amigo, concentrada demais em não deixar cair nada. Mas, ao tentar carregar mais uma noz no topo do montinho, tudo que ela já tinha escorregou dos braços de uma vez e se espalhou pela grama, rolando para todo lado.",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "esquilaNoz", pose: "triste", position: "esquerda" },
            { characterId: "cachorrinhoBolinha", pose: "neutro", position: "direita" },
          ],
          props: [],
        },
      },
      {
        id: "s2b",
        text: "Enquanto as nozes rolavam para todo lado, algumas caindo dentro de buracos de toupeira e outras escondendo-se entre as raízes, Noz sentiu as orelhas esquentarem de vergonha. 'Viu só, eu nem consigo carregar direito', murmurou, catando as nozes mais próximas com movimentos nervosos e apressados.\n\nBolinha não disse nada sobre o tropeço, só se abaixou ao lado dela, começando a farejar as nozes escondidas nas raízes com cuidado. 'Todo mundo deixa cair coisa de vez em quando', disse ele, gentil, sem fazer pouco da situação. 'O importante agora é juntar tudo de novo, e eu posso ajudar nisso.'",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "esquilaNoz", pose: "triste", position: "esquerda" },
            { characterId: "cachorrinhoBolinha", pose: "neutro", position: "direita" },
          ],
          props: [],
        },
      },
      {
        id: "s3",
        text: "Noz suspirou, olhando desanimada para as nozes espalhadas pela grama, sentindo vontade de chorar de cansaço. Bolinha, com cuidado, começou a ajudar a recolher cada uma, sem pedir permissão de novo, apenas mostrando com as próprias patinhas que estava ali para ajudar de verdade, catando uma por uma com o focinho.\n\n'Sabe', disse ele, enquanto juntava as nozes numa pilha organizada, 'eu também já tive que preparar minha casinha para o frio, guardando cobertas e comida. E descobri que as coisas ficam bem mais fáceis quando a gente divide as tarefas com alguém de confiança.' Noz olhou para ele, pensativa, considerando aquela ideia por um momento, ainda um pouco desconfiada.",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "esquilaNoz", pose: "neutro", position: "esquerda" },
            { characterId: "cachorrinhoBolinha", pose: "feliz", position: "direita" },
          ],
          props: [],
        },
      },
      {
        id: "s4",
        text: "'Mas eu não quero incomodar ninguém com o meu trabalho', disse Noz, ainda hesitante, torcendo as patinhas nervosamente. Bolinha sacudiu a cabeça gentilmente, com um sorriso tranquilo. 'Ajudar um amigo não é incômodo, é um presente que a gente dá de coração, sem pedir nada em troca. E, além disso, catar nozes com companhia é bem mais divertido do que catar sozinha o dia inteiro.'\n\nNoz finalmente sorriu, sentindo um peso enorme saindo dos ombros pequenininhos, como se tivesse soltado uma mochila pesada demais. 'Tudo bem, então. Vamos fazer isso juntos, do começo ao fim.' Bolinha bateu o rabo no chão, animado com a resposta, já pensando em por onde começar.",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "esquilaNoz", pose: "feliz", position: "esquerda" },
            { characterId: "cachorrinhoBolinha", pose: "animado", position: "direita" },
          ],
          props: [],
        },
      },
      {
        id: "s5",
        text: "Os dois organizaram um plano direitinho: Noz subiria nas árvores mais altas para encontrar as nozes que ninguém alcançava, enquanto Bolinha procurava as que tinham caído no chão e as recolhia com cuidado numa cestinha de palha que encontraram esquecida por ali. Trabalhando em equipe, cada um fazendo sua parte, o trabalho começou a avançar muito mais rápido do que antes.\n\n'Olha quantas já conseguimos!', disse Noz, animada, olhando para a cestinha cada vez mais cheia e pesada. Bolinha latiu de felicidade, orgulhoso do progresso que estavam fazendo juntos, abanando o rabo tão rápido que levantava as folhas secas do chão.",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "esquilaNoz", pose: "animado", position: "esquerda" },
            { characterId: "cachorrinhoBolinha", pose: "animado", position: "direita" },
          ],
          props: ["cestaPiquenique"],
        },
      },
      {
        id: "s5b",
        text: "Em certo momento, Noz escorregou de um galho mais alto, assustada, mas Bolinha estava logo abaixo e latiu um aviso a tempo para ela se segurar num galho mais firme. 'Cuidado aí em cima!', gritou ele, o coração disparado de preocupação. Noz se firmou, respirando fundo, grata pelo amigo atento observando cada movimento seu.\n\n'Obrigada por ficar de olho em mim', disse ela, descendo com mais cuidado depois do susto. 'É para isso que servem os parceiros de trabalho', respondeu Bolinha, sorrindo, o rabo ainda balançando de leve pela preocupação que tinha passado.",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "esquilaNoz", pose: "surpreso", position: "esquerda" },
            { characterId: "cachorrinhoBolinha", pose: "neutro", position: "direita" },
          ],
          props: [],
        },
      },
      {
        id: "s6",
        text: "Enquanto trabalhavam, outros amigos da floresta foram se juntando, curiosos com a movimentação animada perto das árvores. O passarinho Pipo ajudou a avisar, voando de galho em galho, onde estavam as melhores árvores com nozes maduras, e logo um pequeno grupinho estava trabalhando junto, rindo e contando histórias entre uma coleta e outra, o dia inteiro passando sem ninguém perceber.\n\nNoz percebeu que aquele trabalho que antes parecia tão grande e assustador, quase impossível de terminar sozinha, tinha se transformado numa tarde agradável, cheia de risadas, boa companhia e até alguns lanchinhos de nozes partilhados no meio da tarefa.",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "esquilaNoz", pose: "feliz", position: "esquerda" },
            { characterId: "cachorrinhoBolinha", pose: "feliz", position: "centro" },
          ],
          props: ["cestaPiquenique"],
        },
      },
      {
        id: "s7",
        text: "Quando o sol começou a se pôr, pintando o céu de laranja entre os galhos, a tocaia de Noz já estava completamente abastecida, com nozes e sementes guardadas em pilhas organizadas por tamanho. Ela olhou para tudo aquilo, sentindo um orgulho enorme, não só da quantidade de comida, mas também de ter aceitado ajuda quando precisava.\n\n'Eu nunca teria conseguido terminar tudo isso sozinha hoje', disse ela a Bolinha, com gratidão sincera, quase com os olhos molhados de emoção. 'Obrigada por insistir em ajudar, mesmo quando eu disse que não precisava, lá no começo da tarde.'",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "esquilaNoz", pose: "feliz", position: "esquerda" },
            { characterId: "cachorrinhoBolinha", pose: "feliz", position: "direita" },
          ],
          props: [],
        },
      },
      {
        id: "s7b",
        text: "Pipo, que tinha ajudado avisando sobre as árvores com mais nozes, pousou ao lado dos dois para se despedir também. 'Foi um trabalho e tanto hoje', disse ele, admirando as pilhas organizadas. 'Noz vai passar o inverno inteiro bem alimentada.' Noz sorriu, orgulhosa, olhando para cada amigo que tinha ajudado naquela tarde.\n\n'Prometo que da próxima vez já vou chamar vocês desde o começo, sem demorar tanto para pedir ajuda', disse ela, rindo de si mesma e da teimosia do início do dia. Bolinha bateu a patinha de leve no ombro dela, felicitando-a pela mudança de ideia tão sincera.",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "esquilaNoz", pose: "feliz", position: "esquerda" },
            { characterId: "passarinhoPipo", pose: "feliz", position: "direita" },
          ],
          props: [],
        },
      },
      {
        id: "s7c",
        text: "Antes de voltar cada um para sua casa, Noz quis guardar um punhado pequeno de nozes separado, especial, para oferecer de presente a Bolinha como forma de agradecimento. 'Isso não é necessário', disse Bolinha, surpreso e comovido com o gesto. 'Eu sei que não é', respondeu Noz, sorrindo, 'mas eu quero mesmo assim, porque fico feliz em dividir o que conquistei com quem me ajudou a conquistar.'\n\nBolinha aceitou o presentinho com carinho, guardando as nozes especiais numa trouxinha de folhas. 'Vou guardar essas para um dia frio bem especial', prometeu ele, emocionado com a generosidade da amiga depois de um dia tão cheio de trabalho e companheirismo.",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "esquilaNoz", pose: "feliz", position: "esquerda" },
            { characterId: "cachorrinhoBolinha", pose: "feliz", position: "direita" },
          ],
          props: ["presente"],
        },
      },
      {
        id: "s8",
        text: "Bolinha sorriu, satisfeito, limpando as patinhas sujas de terra, e respondeu: 'É para isso que servem os amigos, Noz. Para carregar juntos o que seria pesado demais para carregar sozinho.' Os dois se abraçaram ali mesmo, entre as pilhas de nozes, celebrando o trabalho bem feito naquele fim de tarde.\n\nQuando o inverno finalmente chegou, trazendo neve e dias friozinhos, Noz ficou aquecida e bem alimentada dentro de sua tocaia, mastigando suas nozes guardadas e sabendo que, da próxima vez que precisasse se preparar para algo grande, não hesitaria nem um segundo em pedir ajuda aos amigos.",
        illustration: {
          background: "florestaNoite",
          characters: [
            { characterId: "esquilaNoz", pose: "feliz", position: "centro" },
          ],
          props: ["estrelas"],
        },
      },
    ],
    familyQuestion: "Tem alguma tarefa que fica mais fácil e mais gostosa quando você faz junto com outra pessoa?",
  },

  {
    id: "a4-luna-amigo-novo",
    title: "Luna e o Amigo Novo",
    synopsis: "A gatinha Luna fica insegura quando o sapinho Coco se muda para o jardim, mas descobre que ter um novo amigo pode trazer brincadeiras diferentes e divertidas.",
    ageGroup: 4,
    category: "Amizade",
    cover: {
      background: "jardim",
      characters: [
        { characterId: "gatinhaLuna", pose: "neutro", position: "esquerda" },
        { characterId: "sapinhoCoco", pose: "feliz", position: "direita" },
      ],
      props: ["flor", "borboleta"],
    },
    scenes: [
      {
        id: "s1",
        text: "Luna adorava o jardim onde morava, com seus canteiros de flores coloridas em fileiras bem cuidadas e os cantinhos cheios de sol onde ela gostava de tirar suas sonecas preferidas depois do almoço. Era o lugar dela, e ela conhecia cada pedacinho daquele espaço como a palma da própria pata, cada pedra, cada sombra, cada cheiro de flor.\n\nCerto dia, ao se aproximar do lago pequenininho no canto do jardim, ela avistou algo novo: um sapinho verde, de boné laranja, pulando animadamente entre as pedras molhadas, fazendo plof, plof a cada salto. 'Quem é esse, pulando desse jeito no meu jardim?', pensou Luna, sentindo um friozinho estranho na barriga, bem diferente do que sentia normalmente.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "gatinhaLuna", pose: "surpreso", position: "esquerda" },
            { characterId: "sapinhoCoco", pose: "feliz", position: "direita" },
          ],
          props: ["flor"],
        },
      },
      {
        id: "s2",
        text: "O sapinho, que se chamava Coco, notou Luna observando de longe e deu um salto animado em sua direção, parando a uma distância respeitosa. 'Oi! Eu sou o Coco, acabei de me mudar para esse lago! Você mora por aqui?', perguntou ele, sorrindo de orelha a orelha, bem, de bochecha a bochecha, já que sapos não têm orelhas para se ver.\n\nLuna respondeu com um simples 'oi', a voz meio seca, e se afastou um pouco, sentindo-se desconfortável com aquela energia toda. Ela não sabia explicar bem o motivo, mas a presença de alguém novo no seu jardim, usando o lago que ela também gostava de olhar, a deixava com um sentimento esquisito por dentro.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "gatinhaLuna", pose: "neutro", position: "esquerda" },
            { characterId: "sapinhoCoco", pose: "animado", position: "direita" },
          ],
          props: [],
        },
      },
      {
        id: "s2b",
        text: "Luna foi para seu lugar de sol favorito, mas percebeu que, de lá, dava para ouvir Coco cantando baixinho perto do lago, uma melodia estranha e nova que ela nunca tinha escutado naquele jardim antes. Ela tentou ignorar, fechando os olhos com força, mas a curiosidade insistia em espiar por entre as pálpebras semiabertas.\n\n'Por que ele canta desse jeito tão esquisito?', pensou ela, sem conseguir deixar de prestar atenção. Parte dela queria ir até lá perguntar, mas outra parte, maior naquele momento, preferia manter distância e proteger o jardim que já conhecia tão bem, do seu jeitinho de sempre.",
        illustration: {
          background: "jardim",
          characters: [{ characterId: "gatinhaLuna", pose: "neutro", position: "centro" }],
          props: ["flor"],
        },
      },
      {
        id: "s3",
        text: "Nos dias seguintes, Luna evitava passar perto do lago, preferindo ficar nos cantos que já conhecia bem, longe daquele sapinho barulhento. Mas, sem querer, ela sentia falta de poder brincar por todo o jardim sem se preocupar em cruzar com o novo vizinho, como se o espaço tivesse encolhido de repente.\n\n'Por que estou agindo assim?', ela se perguntou, enrolada numa bola em seu lugar de sol preferido, a cauda cobrindo o nariz. No fundo, bem no fundo, ela sabia que tinha um pouco de medo de que as coisas no jardim mudassem para sempre com a chegada de Coco, e isso a incomodava mais do que ela queria admitir.",
        illustration: {
          background: "jardim",
          characters: [{ characterId: "gatinhaLuna", pose: "triste", position: "centro" }],
          props: ["flor"],
        },
      },
      {
        id: "s4",
        text: "Um dia, Luna viu Coco tentando alcançar uma bolha de sabão colorida que flutuava alto demais para seus pulos de sapo, vindo sabe-se lá de onde. Ele saltava e saltava, esticando as patinhas traseiras com toda a força, mas a bolha sempre escapava por pouco, flutuando mais alto a cada tentativa, quase rindo dele.\n\nSem pensar muito, quase por instinto, Luna, que era ótima em pulos altos, deu um salto ágil e estourou a bolha com a patinha, fazendo-a desaparecer em uma pequena explosão de brilho e gotinhas. Coco riu, encantado, batendo as patinhas uma na outra. 'Isso foi incrível! Você pula muito bem, bem melhor que eu!'",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "gatinhaLuna", pose: "animado", position: "esquerda" },
            { characterId: "sapinhoCoco", pose: "surpreso", position: "direita" },
          ],
          props: ["borboleta"],
        },
      },
      {
        id: "s4b",
        text: "Por um segundo, depois de estourar a bolha, Luna quase se afastou de novo, seu instinto antigo pedindo para voltar ao canto sozinho de sempre. Mas algo a fez ficar: o jeito sincero e alegre com que Coco tinha sorrido para ela, sem nenhuma segunda intenção, só contentamento puro.\n\n'Talvez eu esteja exagerando um pouquinho com essa desconfiança toda', pensou ela, observando o sapinho tentar, sem sucesso, alcançar outra bolha que passava flutuando. Ele escorregou na grama molhada e caiu sentado, rindo da própria falta de jeito, e Luna não conseguiu segurar um sorriso também.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "gatinhaLuna", pose: "neutro", position: "esquerda" },
            { characterId: "sapinhoCoco", pose: "surpreso", position: "direita" },
          ],
          props: [],
        },
      },
      {
        id: "s5",
        text: "Luna sentiu as bochechas esquentarem com o elogio, surpresa por gostar tanto de ouvir aquilo, mas também sentiu algo bom crescendo por dentro: a alegria simples de ter ajudado alguém. 'Eu treino esses pulos desde pequena, lá no canto da horta', disse ela, um pouco mais à vontade do que antes, quase sem querer.\n\n'Você podia me ensinar?', perguntou Coco, com os olhos brilhando de curiosidade e esperança. 'Eu só sei pular perto da água, mas nunca tentei pular tão alto quanto você pulou agora.' Luna hesitou por um segundo, olhando para aquele sapinho tão animado, mas depois sorriu, quase sem perceber: 'Tudo bem, posso tentar te ensinar algumas coisas.'",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "gatinhaLuna", pose: "feliz", position: "esquerda" },
            { characterId: "sapinhoCoco", pose: "feliz", position: "direita" },
          ],
          props: [],
        },
      },
      {
        id: "s6",
        text: "Durante a tarde toda, Luna mostrou a Coco como se preparar antes de um salto grande, dobrando bem as pernas, olhando para o ponto onde queria chegar e tomando fôlego antes de saltar. Coco prestava atenção em cada detalhe, a língua de fora de tanta concentração, tentando imitar os movimentos da amiga passo a passo.\n\nEm troca, Coco mostrou a Luna como ele conseguia nadar debaixo da água sem precisar respirar por um tempinho bem longo, algo que deixou a gatinha impressionada e cheia de perguntas curiosas sobre a vida de um sapo, sobre como era morar dentro e fora da água ao mesmo tempo.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "gatinhaLuna", pose: "feliz", position: "esquerda" },
            { characterId: "sapinhoCoco", pose: "animado", position: "direita" },
          ],
          props: ["flor"],
        },
      },
      {
        id: "s6b",
        text: "No meio da tarde, cansados de tanto pular e nadar, os dois se deitaram lado a lado na grama quentinha, olhando para as nuvens passarem devagar no céu. 'Nunca imaginei que ia gostar tanto de ter um sapo como amigo', admitiu Luna, virando a cabeça para olhar Coco de rabo de olho, com um sorriso sincero.\n\n'E eu nunca imaginei que uma gata fosse me ensinar a pular tão alto', respondeu Coco, rindo. Os dois ficaram quietinhos por um tempo, só aproveitando a companhia um do outro, sentindo que aquele silêncio confortável já era, por si só, uma prova de que a amizade tinha se firmado de verdade.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "gatinhaLuna", pose: "feliz", position: "esquerda" },
            { characterId: "sapinhoCoco", pose: "feliz", position: "direita" },
          ],
          props: ["nuvem"],
        },
      },
      {
        id: "s7",
        text: "Enquanto brincavam, rindo cada vez que um dos dois errava um pulo e caía de bunda na grama, Luna percebeu que suas preocupações iniciais tinham desaparecido completamente, como se nunca tivessem existido. O jardim não tinha ficado menos especial com a chegada de Coco, pelo contrário, agora tinha brincadeiras novas e interessantes que ela nunca tinha experimentado antes de conhecê-lo.\n\n'Eu estava com um pouco de medo de você mudar o meu jardim', confessou Luna, um pouco envergonhada, olhando para as próprias patas. Coco sorriu gentilmente, sem fazer pouco do que ela sentiu. 'Eu entendo. Mudanças podem dar um friozinho na barriga no começo, até em mim deu. Mas estou feliz que decidimos ser amigos mesmo assim.'",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "gatinhaLuna", pose: "feliz", position: "esquerda" },
            { characterId: "sapinhoCoco", pose: "feliz", position: "direita" },
          ],
          props: ["borboleta", "flor"],
        },
      },
      {
        id: "s7c",
        text: "Antes de voltarem cada um para seu canto, Coco teve uma ideia: 'Que tal combinarmos um sinal especial, só nosso, para chamar um ao outro para brincar?' Luna gostou da ideia e os dois inventaram um miado seguido de um coaxar, uma combinação engraçada que logo virou motivo de risadas sempre que praticavam.\n\n'Agora sempre que eu fizer esse som, você vai saber que é hora de brincar', disse Luna, satisfeita com a invenção dos dois. Coco assentiu, animado, já imaginando quantas aventuras novas aquele sinalzinho secreto ia anunciar nas tardes seguintes pelo jardim inteiro.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "gatinhaLuna", pose: "animado", position: "esquerda" },
            { characterId: "sapinhoCoco", pose: "animado", position: "direita" },
          ],
          props: ["flor"],
        },
      },
      {
        id: "s8",
        text: "Daquele dia em diante, Luna e Coco se tornaram companheiros inseparáveis, dividindo o jardim inteirinho e inventando brincadeiras novas toda semana, misturando pulos altos de gato com mergulhos profundos de sapo. O lugar que antes era só de Luna agora parecia ainda mais especial, por ser compartilhado com um bom amigo que a fazia rir todos os dias.\n\nÀ noite, descansando perto do lago que antes evitava, ouvindo os grilos cantarem, Luna pensou em como ter dado uma chance para a amizade, mesmo com medo no começo, tinha valido muito, muito a pena.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "gatinhaLuna", pose: "feliz", position: "esquerda" },
            { characterId: "sapinhoCoco", pose: "feliz", position: "direita" },
          ],
          props: ["lua"],
        },
      },
    ],
    familyQuestion: "Como você se sente quando alguém novo chega na sua turma ou na sua rua?",
  },

  {
    id: "a4-torre-bento-bolinha",
    title: "A Torre de Bento e Bolinha",
    synopsis: "O ursinho Bento e o cachorrinho Bolinha constroem uma torre de blocos que cai várias vezes, até aprenderem juntos que tentar de novo com paciência vale mais do que desistir.",
    ageGroup: 4,
    category: "Amizade",
    cover: {
      background: "parquinho",
      characters: [
        { characterId: "ursoBento", pose: "feliz", position: "esquerda" },
        { characterId: "cachorrinhoBolinha", pose: "feliz", position: "direita" },
      ],
      props: ["balao"],
    },
    scenes: [
      {
        id: "s1",
        text: "No parquinho da vila, debaixo de uma tarde de sol agradável, Bento e Bolinha decidiram construir a torre de blocos mais alta que já tinham feito na vida inteira. Eles juntaram blocos de madeira coloridos, de todos os tamanhos e formatos, trazidos de dentro de uma caixa grande, e começaram a empilhar com cuidado, um em cima do outro, escolhendo as cores com atenção.\n\n'Vamos fazer ela chegar até ali!', disse Bento, apontando com a pata para um galho bem alto de uma árvore próxima, os olhos brilhando de empolgação. Bolinha latiu animado, pulando ao redor, concordando com o desafio ambicioso que o amigo tinha proposto para aquela tarde tão bonita.",
        illustration: {
          background: "parquinho",
          characters: [
            { characterId: "ursoBento", pose: "animado", position: "esquerda" },
            { characterId: "cachorrinhoBolinha", pose: "animado", position: "direita" },
          ],
          props: [],
        },
      },
      {
        id: "s2",
        text: "Eles trabalharam com cuidado, equilibrando bloco após bloco, prestando atenção em cada movimento, até que a torre alcançou uma altura impressionante, quase do tamanho de Bento em pé. Mas, ao colocar o último bloco no topo, com a pontinha da língua de fora de tanta concentração, a torre toda balançou e, num segundo, desmoronou com um estrondo, espalhando os blocos pelo chão de areia.\n\n'Ah, não!', exclamou Bolinha, decepcionado, olhando para a bagunça toda ao redor dos seus pés. Bento também ficou quieto por um momento, sentindo a frustração de ver todo aquele trabalho cuidadoso desmanchado tão rapidamente, bem na frente dos seus olhos.",
        illustration: {
          background: "parquinho",
          characters: [
            { characterId: "ursoBento", pose: "triste", position: "esquerda" },
            { characterId: "cachorrinhoBolinha", pose: "triste", position: "direita" },
          ],
          props: [],
        },
      },
      {
        id: "s2b",
        text: "Bento olhou para os blocos espalhados e sentiu vontade de chutar tudo para longe, de tão frustrado que estava. 'A gente trabalhou tanto tempo nisso', resmungou, cruzando os bracinhos. Bolinha, sentado ao lado, sentiu o mesmo desânimo, mas percebeu o amigo ficando cada vez mais nervoso.\n\n'Que tal respirarmos fundo antes de decidir qualquer coisa?', sugeriu Bolinha, lembrando de um conselho que sua mãe sempre dava. Bento parou, olhou para o amigo e, depois de um suspiro bem grande, sentiu o nervosismo diminuir um pouquinho. 'Tem razão', disse ele, relaxando os ombros. 'Vamos pensar com calma.'",
        illustration: {
          background: "parquinho",
          characters: [
            { characterId: "ursoBento", pose: "triste", position: "esquerda" },
            { characterId: "cachorrinhoBolinha", pose: "neutro", position: "direita" },
          ],
          props: [],
        },
      },
      {
        id: "s3",
        text: "'Acho que não vamos conseguir construir essa torre', disse Bolinha, sentando-se desanimado ao lado dos blocos espalhados, as orelhas caídas de tristeza. Bento olhou para a pilha caída e, depois de pensar um pouco, com a testa enrugada, respirou fundo. 'Vamos observar o que aconteceu antes de desistir de uma vez. Talvez possamos descobrir o motivo de ter caído.'\n\nOs dois examinaram os blocos com atenção, virando cada um nas patas, e notaram que os de cima eram menores e mais leves do que os de baixo, o que tinha deixado a torre desequilibrada perto do topo, como um chapéu grande demais numa cabeça pequena.",
        illustration: {
          background: "parquinho",
          characters: [
            { characterId: "ursoBento", pose: "neutro", position: "esquerda" },
            { characterId: "cachorrinhoBolinha", pose: "neutro", position: "direita" },
          ],
          props: [],
        },
      },
      {
        id: "s4",
        text: "'E se colocarmos os blocos maiores e mais pesados na base, e os mais leves só no topo, bem lá em cima?', sugeriu Bento, já reorganizando as peças pela cor e pelo tamanho na grama. Bolinha farejou os blocos, ajudando a separar os grandes dos pequenos com entusiasmo renovado, o rabo balançando sem parar.\n\n'Vamos tentar de novo, com calma desta vez, sem pressa nenhuma', disse Bolinha, abanando o rabo mais forte ainda. Começaram a empilhar outra vez, prestando atenção especial no equilíbrio de cada bloco antes de adicionar o próximo, testando com o dedo se estava firme.",
        illustration: {
          background: "parquinho",
          characters: [
            { characterId: "ursoBento", pose: "feliz", position: "esquerda" },
            { characterId: "cachorrinhoBolinha", pose: "animado", position: "direita" },
          ],
          props: [],
        },
      },
      {
        id: "s4b",
        text: "Antes de recomeçar, Bento sugeriu que testassem o equilíbrio de cada bloco antes de empilhar o próximo, balançando de leve para ver se estava firme. 'Vamos com calma, sem pressa de terminar rápido', disse ele, lembrando-se de como a pressa tinha atrapalhado da primeira vez.\n\nBolinha concordou, ajudando a escolher cada peça com cuidado redobrado, cheirando os blocos como se pudesse sentir qual era mais firme. 'Dessa vez vai dar certo', disse ele, confiante, abanando o rabo bem devagar, quase como se também estivesse se controlando para não apressar as coisas.",
        illustration: {
          background: "parquinho",
          characters: [
            { characterId: "ursoBento", pose: "neutro", position: "esquerda" },
            { characterId: "cachorrinhoBolinha", pose: "neutro", position: "direita" },
          ],
          props: [],
        },
      },
      {
        id: "s5",
        text: "A torre foi crescendo novamente, mais devagar e com muito mais cuidado do que antes, cada bloco colocado com atenção redobrada. Quando chegou na altura em que tinha caído da última vez, os dois amigos seguraram a respiração, temendo que o mesmo acontecesse outra vez bem naquele ponto.\n\nMas, desta vez, a torre se manteve firme, bem equilibrada graças à base mais pesada que tinham construído com cuidado. Bento e Bolinha se olharam, sorrindo largo, aliviados e animados para continuar construindo mais alto do que antes, sem medo de errar de novo.",
        illustration: {
          background: "parquinho",
          characters: [
            { characterId: "ursoBento", pose: "surpreso", position: "esquerda" },
            { characterId: "cachorrinhoBolinha", pose: "feliz", position: "direita" },
          ],
          props: [],
        },
      },
      {
        id: "s6",
        text: "Pouco a pouco, bloco por bloco, a torre foi ultrapassando a altura anterior, subindo mais e mais. Bento precisava ficar nas pontinhas das patas para alcançar o topo, esticando bem os braços, e Bolinha ajudava passando os blocos com cuidado, sem pressa, prestando atenção em cada movimento para não derrubar nada.\n\n'Estamos quase na altura do galho!', disse Bento, ofegante de tanta concentração, limpando o suor da testa com a pata. Um pequeno grupo de outros bichinhos do parquinho tinha se reunido ao redor para assistir, animados e sussurrando entre si com o progresso incrível da dupla.",
        illustration: {
          background: "parquinho",
          characters: [
            { characterId: "ursoBento", pose: "animado", position: "esquerda" },
            { characterId: "cachorrinhoBolinha", pose: "feliz", position: "direita" },
          ],
          props: [],
        },
      },
      {
        id: "s7",
        text: "Finalmente, com um último bloco colocado com toda a delicadeza do mundo, a torre alcançou a altura do galho que tinham imaginado no início da tarde. Todos os bichinhos que assistiam aplaudiram animados, batendo patinhas e asas, e Bento e Bolinha se abraçaram, celebrando a conquista depois de tantas tentativas e uma queda enorme.\n\n'Conseguimos porque não desistimos depois da primeira queda', disse Bolinha, orgulhoso, o peito estufado. Bento assentiu, concordando com um sorriso enorme. 'E porque paramos para entender o que podíamos fazer diferente, em vez de só tentar do mesmo jeito outra vez, esperando um resultado diferente.'",
        illustration: {
          background: "parquinho",
          characters: [
            { characterId: "ursoBento", pose: "animado", position: "esquerda" },
            { characterId: "cachorrinhoBolinha", pose: "animado", position: "direita" },
          ],
          props: ["balao"],
        },
      },
      {
        id: "s7b",
        text: "Um dos bichinhos que assistia, um coelhinho pequeno, perguntou como eles tinham conseguido reconstruir tudo depois de uma queda tão grande. Bento pensou um pouco antes de responder, orgulhoso da própria resposta. 'A gente não desistiu, e também aprendeu com o erro, em vez de só repetir o mesmo jeito que não tinha funcionado antes.'\n\nBolinha completou, balançando o rabo: 'E ter um amigo por perto para pensar junto ajuda bastante também.' Os outros bichinhos aplaudiram de novo, inspirados pela história de perseverança que acabavam de testemunhar ali no parquinho.",
        illustration: {
          background: "parquinho",
          characters: [
            { characterId: "ursoBento", pose: "feliz", position: "esquerda" },
            { characterId: "cachorrinhoBolinha", pose: "animado", position: "direita" },
          ],
          props: ["balao"],
        },
      },
      {
        id: "s7c",
        text: "Bento sugeriu que tirassem uma foto mental da torre, guardando aquele momento na memória para sempre, já que não tinham uma câmera por perto. 'Vou lembrar desse momento toda vez que fizer algo difícil', disse ele, olhando bem para a construção, gravando cada detalhe na cabeça.\n\nBolinha concordou, sentando-se ao lado da torre com orgulho, como se estivesse posando para a foto imaginária. 'Devíamos fazer uma torre ainda maior da próxima vez, agora que sabemos o segredo de deixá-la firme', sugeriu ele, já pensando em novos desafios para colocarem em prática juntos.",
        illustration: {
          background: "parquinho",
          characters: [
            { characterId: "ursoBento", pose: "feliz", position: "esquerda" },
            { characterId: "cachorrinhoBolinha", pose: "animado", position: "direita" },
          ],
          props: ["balao"],
        },
      },
      {
        id: "s7d",
        text: "Os pais de Bento vieram chamá-lo para o jantar, mas pararam, impressionados, ao ver a torre alta e firme no meio do parquinho. 'Vocês dois construíram isso sozinhos?', perguntaram, admirados. Bento contou toda a história, desde a primeira queda até a reconstrução cuidadosa, com os olhos brilhando de orgulho.\n\n'Estamos muito orgulhosos de vocês, por não terem desistido', disseram, sorrindo. Bento e Bolinha se entreolharam, sentindo o peito quentinho de tanto orgulho compartilhado, sabendo que aquele tinha sido um dos melhores dias de brincadeira que já tinham tido juntos.",
        illustration: {
          background: "parquinho",
          characters: [
            { characterId: "ursoBento", pose: "feliz", position: "esquerda" },
            { characterId: "cachorrinhoBolinha", pose: "feliz", position: "direita" },
          ],
          props: [],
        },
      },
      {
        id: "s8",
        text: "Ao entardecer, com a torre ainda de pé orgulhosamente no meio do parquinho, brilhando com as últimas luzes do sol, Bento e Bolinha se sentaram para admirar o próprio trabalho, cansados mas muito satisfeitos com o dia. Combinaram que no dia seguinte tentariam construir algo ainda mais desafiador, já pensando em pontes e castelos com torres e tudo.\n\n'Com um amigo paciente por perto, até os desafios maiores parecem possíveis', disse Bento, sorrindo para Bolinha, que respondeu com uma lambida amigável no rosto do urso, fazendo-o rir e quase cair sentado na grama de tanto rir.",
        illustration: {
          background: "parquinho",
          characters: [
            { characterId: "ursoBento", pose: "feliz", position: "esquerda" },
            { characterId: "cachorrinhoBolinha", pose: "feliz", position: "direita" },
          ],
          props: ["balao"],
        },
      },
    ],
    familyQuestion: "Já tentou fazer algo de novo, de um jeito diferente, depois que não deu certo na primeira vez?",
  },

  {
    id: "a4-mel-medo-escuro",
    title: "Mel e o Medo do Escuro",
    synopsis: "A raposinha Mel sente medo de ficar no escuro, e com a ajuda carinhosa da coruja Dadá, aprende pequenas formas de se sentir mais segura durante a noite.",
    ageGroup: 4,
    category: "Sentimentos",
    cover: {
      background: "cavernaAconchegante",
      characters: [{ characterId: "raposaMel", pose: "triste", position: "centro" }],
      props: ["lanterna"],
    },
    scenes: [
      {
        id: "s1",
        text: "Toda vez que o sol se escondia detrás das montanhas, pintando o céu de laranja e depois de roxo escuro, a raposinha Mel sentia uma sensação apertada no peito, como se algo fosse acontecer. O escuro, para ela, parecia esconder coisas desconhecidas em cada sombra e em cada canto, mesmo que ela soubesse, no fundo da cabecinha, que não havia nenhum perigo real por ali.\n\nNaquela noite, enquanto se preparava para dormir em sua toca entre as raízes de uma árvore antiga, Mel ficou olhando para os cantos escuros do quarto, sentindo o coraçãozinho acelerar a cada sombra que o vento fazia dançar na parede. 'Eu não gosto quando as sombras ficam tão grandes assim', murmurou, abraçando as próprias patinhas bem apertado contra o peito.",
        illustration: {
          background: "cavernaAconchegante",
          characters: [{ characterId: "raposaMel", pose: "triste", position: "centro" }],
          props: [],
        },
      },
      {
        id: "s1b",
        text: "Mel tentou se distrair puxando o cobertor até o nariz, mas cada barulhinho lá fora, o farfalhar de uma folha, o estalo de um graveto, fazia seu coraçãozinho pular dentro do peito. Ela pensou em chamar alguém, mas não sabia bem quem poderia ajudar com um medo que parecia tão bobo quando dito em voz alta.\n\n'Ninguém mais tem medo disso', pensou ela, encolhendo-se ainda mais embaixo das cobertas, sentindo-se sozinha com aquele sentimento grande demais para o seu corpinho pequeno. As sombras na parede pareciam crescer cada vez que o vento balançava os galhos lá fora, e Mel fechava os olhos com força, torcendo para que a noite passasse rápido.",
        illustration: {
          background: "cavernaAconchegante",
          characters: [{ characterId: "raposaMel", pose: "triste", position: "centro" }],
          props: [],
        },
      },
      {
        id: "s2",
        text: "A coruja Dadá, que estava de passagem por aquela parte da floresta numa de suas rondas noturnas, ouviu um farfalhar inquieto vindo da toca de Mel e decidiu dar uma espiada, só para garantir que estava tudo bem. 'Está tudo bem por aqui?', perguntou ela gentilmente, pousando na entrada da toca com cuidado.\n\nMel contou, com a voz tremendo um pouquinho e os olhos arregalados, sobre o medo que sentia das sombras e do silêncio da noite, que parecia engolir tudo ao redor. Dadá ouviu com atenção total, sem rir nem minimizar o que a raposinha estava sentindo, só escutando mesmo, com paciência.",
        illustration: {
          background: "cavernaAconchegante",
          characters: [
            { characterId: "raposaMel", pose: "triste", position: "esquerda" },
            { characterId: "corujaSabia", pose: "neutro", position: "direita" },
          ],
          props: [],
        },
      },
      {
        id: "s3",
        text: "'Sentir medo do escuro é bem mais comum do que você imagina, Mel', disse Dadá com gentileza, aproximando-se mais. 'Muitos bichinhos sentem isso, até alguns adultos sentem às vezes, mesmo depois de crescidos. O importante é descobrir pequenas coisas que ajudam a se sentir mais segura quando esse medo aparecer.'\n\nMel perguntou, curiosa e um pouco esperançosa, o que poderia ajudar nessas horas. Dadá pensou um pouco, olhando ao redor da toca, e respondeu: 'Que acha de começarmos com uma luzinha pequena? Não precisa ser muito forte, só o suficiente para as sombras ficarem menos grandes e menos assustadoras.'",
        illustration: {
          background: "cavernaAconchegante",
          characters: [
            { characterId: "raposaMel", pose: "neutro", position: "esquerda" },
            { characterId: "corujaSabia", pose: "feliz", position: "direita" },
          ],
          props: [],
        },
      },
      {
        id: "s4",
        text: "Dadá ajudou Mel a encontrar um pequeno vagalume que vivia perto da entrada da toca, escondido entre as folhas, e que concordou em ficar ali brilhando suavemente durante a noite. A luzinha amarela e quentinha iluminou os cantos que antes pareciam tão sombrios e assustadores, desenhando contornos suaves em vez de sombras pretas.\n\n'Viu como as sombras ficaram menores?', perguntou Dadá, com um sorriso tranquilo. Mel observou ao redor, piscando os olhinhos, e percebeu que, de fato, com aquela luzinha pequena, os cantos do quarto não pareciam mais escondidos nem misteriosos, só cantos normais mesmo, como durante o dia.",
        illustration: {
          background: "cavernaAconchegante",
          characters: [
            { characterId: "raposaMel", pose: "surpreso", position: "esquerda" },
            { characterId: "corujaSabia", pose: "feliz", position: "direita" },
          ],
          props: ["lanterna"],
        },
      },
      {
        id: "s5",
        text: "'Outra coisa que ajuda', continuou Dadá, ajeitando-se no galho de entrada, 'é pensar em algo gostoso enquanto os olhos vão se acostumando com a penumbra. Pode ser uma lembrança feliz, ou até imaginar uma aventura divertida que você queira viver.' Mel fechou os olhos e pensou num dia de brincadeiras com os amigos à beira do rio, rindo e se espirrando de água.\n\nConforme pensava naquilo, sentindo o calor da lembrança boa, a tensão em seu corpinho foi diminuindo pouco a pouco, e sua respiração ficou mais tranquila e espaçada, quase sem ela perceber a mudança.",
        illustration: {
          background: "cavernaAconchegante",
          characters: [
            { characterId: "raposaMel", pose: "neutro", position: "centro" },
          ],
          props: ["lanterna"],
        },
      },
      {
        id: "s5b",
        text: "Mel quis saber se a própria Dadá sentia medo de alguma coisa, mesmo sendo uma coruja grande e sábia. Dadá riu suavemente, sem se ofender com a pergunta curiosa. 'Claro que sim, Mel. Eu tenho um pouco de medo de voar em dias de muito vento forte, por exemplo.'\n\n'Mas você voa mesmo assim?', perguntou Mel, surpresa. 'Às vezes sim, quando é preciso, voando com mais cuidado', respondeu Dadá. 'O medo não precisa desaparecer para a gente seguir em frente, só precisa ser respeitado e levado em conta.' Mel achou aquilo reconfortante, sentindo-se menos sozinha com seus próprios medos.",
        illustration: {
          background: "cavernaAconchegante",
          characters: [
            { characterId: "raposaMel", pose: "neutro", position: "esquerda" },
            { characterId: "corujaSabia", pose: "neutro", position: "direita" },
          ],
          props: [],
        },
      },
      {
        id: "s6",
        text: "Dadá também sugeriu que Mel escutasse os sons da noite com atenção, em vez de temê-los como inimigos escondidos. 'Aquele barulhinho é só o vento nas folhas lá fora, e aquele outro é o riacho passando por perto, sempre no mesmo lugar. São sons amigos, que mostram que a floresta está viva e tranquila, não perigosa como você imagina.'\n\nMel ficou escutando com atenção, de olhos fechados, identificando cada som, um por um, e percebeu que conhecia a maioria deles de passeios durante o dia, com o sol brilhando. Reconhecer aqueles sons tornava tudo menos assustador, quase como reconhecer vozes de amigos antigos.",
        illustration: {
          background: "cavernaAconchegante",
          characters: [
            { characterId: "raposaMel", pose: "feliz", position: "centro" },
          ],
          props: ["lanterna"],
        },
      },
      {
        id: "s7",
        text: "'E se o medo voltar outra vez, em outra noite, bem quando eu menos esperar?', perguntou Mel, ainda um pouco preocupada com o futuro, encolhendo os ombros. Dadá respondeu com paciência, sem pressa nenhuma: 'Tudo bem se isso acontecer, Mel. Sentir medo de vez em quando não tem nada de errado nem de vergonhoso. O importante é que agora você sabe algumas coisas que podem ajudar.'\n\nMel sentiu-se aliviada ao saber que não precisava eliminar o medo completamente, só aprender a lidar com ele quando aparecesse, com calma e com ferramentas pequenas que já conhecia agora.",
        illustration: {
          background: "cavernaAconchegante",
          characters: [
            { characterId: "raposaMel", pose: "feliz", position: "esquerda" },
            { characterId: "corujaSabia", pose: "feliz", position: "direita" },
          ],
          props: ["lanterna"],
        },
      },
      {
        id: "s7b",
        text: "Mel decidiu também desenhar, na manhã seguinte, um pequeno mapa dos sons amigos da floresta, para lembrar sempre que precisasse: o riacho, o vento, os grilos. 'Assim, da próxima vez que eu ficar com medo, posso olhar para esse desenho e lembrar que são só sons conhecidos', explicou ela a Dadá, orgulhosa da própria ideia.\n\nDadá achou a ideia maravilhosa e sugeriu pendurar o desenho bem perto da entrada da toca, onde Mel pudesse vê-lo facilmente antes de dormir. 'Você está aprendendo a cuidar do seu próprio coração, Mel. Isso é uma coisa muito bonita de se ver.'",
        illustration: {
          background: "cavernaAconchegante",
          characters: [
            { characterId: "raposaMel", pose: "animado", position: "esquerda" },
            { characterId: "corujaSabia", pose: "feliz", position: "direita" },
          ],
          props: ["livro"],
        },
      },
      {
        id: "s7c",
        text: "Mel também decidiu deixar um potinho com água e uma folhinha fresca perto da entrada da toca, para agradecer ao vagalume que tinha aceitado ficar brilhando por ela naquela noite. 'Obrigada por me ajudar a não ficar sozinha no escuro', sussurrou ela para a pequena luzinha, que piscou de volta suavemente, como se estivesse respondendo ao carinho.\n\nDadá observou a cena com ternura, satisfeita em ver a raposinha encontrando seu próprio jeitinho de cuidar da situação, sem depender só dos conselhos que tinha recebido. 'Você está aprendendo rápido a cuidar do seu próprio coração', elogiou a coruja, orgulhosa do progresso de Mel naquela noite tão importante.",
        illustration: {
          background: "cavernaAconchegante",
          characters: [
            { characterId: "raposaMel", pose: "feliz", position: "esquerda" },
            { characterId: "corujaSabia", pose: "feliz", position: "direita" },
          ],
          props: ["lanterna"],
        },
      },
      {
        id: "s8",
        text: "Antes de ir embora, voando de volta para seu posto de vigia, Dadá prometeu passar por ali de vez em quando, para verificar como Mel estava se sentindo durante as noites seguintes. A raposinha agradeceu, com um sorriso pequeno e sincero, sentindo-se mais leve e muito menos sozinha com aquele medo que antes parecia tão grande.\n\nNaquela noite, com o vagalume brilhando suavemente na entrada e os sons familiares da floresta ao redor, cantando baixinho como sempre, Mel finalmente conseguiu fechar os olhos e dormir tranquila, sabendo que tinha ferramentas pequenas, mas poderosas, para enfrentar o escuro sempre que ele voltasse.",
        illustration: {
          background: "cavernaAconchegante",
          characters: [{ characterId: "raposaMel", pose: "sonolento", position: "centro" }],
          props: ["lanterna"],
        },
      },
    ],
    familyQuestion: "Existe algo que ajuda você a se sentir mais seguro quando sente um pouquinho de medo?",
  },

  {
    id: "a4-pipo-ninho-perdido",
    title: "O Ninho Perdido de Pipo",
    synopsis: "O passarinho Pipo fica muito triste quando uma tempestade derruba seu ninho, mas aprende, com a ajuda da esquilinha Noz, que é possível construir algo novo com apoio dos amigos.",
    ageGroup: 4,
    category: "Sentimentos",
    cover: {
      background: "florestaDia",
      characters: [{ characterId: "passarinhoPipo", pose: "triste", position: "centro" }],
      props: ["nuvem"],
    },
    scenes: [
      {
        id: "s1",
        text: "Durante a noite, uma tempestade forte passou pela floresta, com vento forte derrubando folhas e muita chuva batendo sem parar nas árvores. Quando a manhã chegou, trazendo um sol tímido entre as nuvens que ainda restavam, o passarinho Pipo voou até sua árvore de sempre, ansioso para descansar depois de se abrigar a noite inteira embaixo de uma folha grande.\n\nMas, ao chegar lá, seu coraçãozinho apertou de repente: o ninho que ele tinha construído com tanto cuidado, gravetinho por gravetinho, estava completamente destruído, espalhado pelo chão em pedacinhos de gravetos e musgo molhado, misturado com a lama.",
        illustration: {
          background: "florestaDia",
          characters: [{ characterId: "passarinhoPipo", pose: "triste", position: "centro" }],
          props: ["nuvem"],
        },
      },
      {
        id: "s2",
        text: "Pipo pousou ao lado dos destroços, sentindo uma tristeza grande crescer por dentro do peito pequeno. Aquele ninho guardava tantas boas lembranças: as primeiras penas que cresceram ali dentro, as manhãs cantando para o sol nascer, as noites tranquilas observando as estrelas por entre os galhos protetores. Entre os gravetos espalhados, ele ainda reconhecia um pedacinho de casca lisa que tinha usado para forrar o berço das primeiras penugens, e isso doía ainda mais de ver ali, caído e sem utilidade.\n\n'Eu trabalhei tanto para construir esse lugar', disse ele, baixinho, com os olhinhos cheios d'água prontos para cair. 'Agora não sei nem por onde recomeçar, nem se tenho forças para isso.' Ele ficou ali, parado, imóvel, sem energia para fazer nada além de sentir aquela tristeza enorme tomando conta de tudo.",
        illustration: {
          background: "florestaDia",
          characters: [{ characterId: "passarinhoPipo", pose: "triste", position: "centro" }],
          props: [],
        },
      },
      {
        id: "s2b",
        text: "Pipo pensou em todos os invernos que tinha passado naquele ninho, aconchegado contra o frio, e em todas as vezes que tinha ensinado filhotes a voar partindo exatamente daquele galho. Perder aquilo parecia perder um pedacinho da própria história, não só um amontoado de gravetos.\n\nUma lágrima pequena escorreu pelo seu rosto, e ele nem tentou segurá-la. 'Acho que está tudo bem chorar um pouquinho por isso', pensou, deixando a tristeza existir sem se culpar por sentir, lembrando de como o próprio ninho tinha testemunhado momentos tão importantes da sua vida ali na floresta.",
        illustration: {
          background: "florestaDia",
          characters: [{ characterId: "passarinhoPipo", pose: "triste", position: "centro" }],
          props: ["nuvem"],
        },
      },
      {
        id: "s3",
        text: "A esquilinha Noz, que também tinha saído de sua tocaia para verificar os estragos da tempestade pela floresta, encontrou Pipo sentado quietinho ao lado dos gravetos espalhados. 'Oh, Pipo, sinto muito pelo seu ninho', disse ela, aproximando-se com cuidado, a voz macia de carinho.\n\n'Eu não sei se vou conseguir construir outro tão bom quanto esse', murmurou Pipo, ainda olhando para os destroços sem conseguir desviar o olhar. Noz se sentou ao lado dele, bem pertinho, em silêncio por um momento, apenas para fazer companhia naquele momento tão difícil, sem pressa de resolver nada ainda.",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "passarinhoPipo", pose: "triste", position: "esquerda" },
            { characterId: "esquilaNoz", pose: "neutro", position: "direita" },
          ],
          props: [],
        },
      },
      {
        id: "s4",
        text: "'Sabe', disse Noz depois de um tempo, com a voz calma, 'está tudo bem sentir triste por algo que a gente perdeu, mesmo que outros possam achar que é só um ninho. Esse ninho era especial, e é normal sentir saudade dele.' Pipo assentiu, grato por não ter que fingir que estava tudo bem quando claramente não estava.\n\n'Mas eu também sei', continuou Noz, pousando a patinha no ombro do amigo, 'que você é capaz de construir coisas incríveis, Pipo. E dessa vez, você não vai estar sozinho fazendo isso, eu prometo.'",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "passarinhoPipo", pose: "triste", position: "esquerda" },
            { characterId: "esquilaNoz", pose: "feliz", position: "direita" },
          ],
          props: [],
        },
      },
      {
        id: "s5",
        text: "Noz chamou outros amigos da floresta para ajudar, correndo de toca em toca: o cachorrinho Bolinha trouxe gravetos secos encontrados pelo caminho, carregando vários na boca ao mesmo tempo, e a gatinha Luna ajudou a encontrar musgos fofinhos e macios para forrar o fundo do novo ninho. Pipo observava tudo, aos poucos sentindo um pouco de esperança voltar ao peito.\n\n'Vocês não precisavam fazer isso tudo por mim', disse ele, emocionado, quase sem voz. 'Nós queremos fazer isso', respondeu Bolinha, sorrindo com a boca cheia de gravetos. 'É isso que amigos fazem um pelo outro, sem nem precisar pensar duas vezes.'",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "passarinhoPipo", pose: "neutro", position: "esquerda" },
            { characterId: "esquilaNoz", pose: "feliz", position: "direita" },
          ],
          props: [],
        },
      },
      {
        id: "s5b",
        text: "Enquanto reuniam os materiais, Pipo parou um instante, observando os amigos trabalhando com tanto carinho por ele. 'Eu estava tão triste que quase não pedi ajuda a ninguém', confessou ele a Noz, baixinho. 'Ainda bem que você apareceu antes que eu desistisse de tentar de novo.'\n\nNoz sorriu, carregando mais um gravetinho na boca antes de responder. 'Às vezes a gente só precisa de alguém que fique por perto no começo, até lembrar que não está sozinho.' Pipo assentiu, sentindo o peito mais leve a cada graveto novo que se juntava à pilha de materiais para o ninho novo.",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "passarinhoPipo", pose: "neutro", position: "esquerda" },
            { characterId: "esquilaNoz", pose: "feliz", position: "direita" },
          ],
          props: [],
        },
      },
      {
        id: "s6",
        text: "Juntos, eles escolheram um galho mais protegido na mesma árvore, abrigado do vento forte por folhas grossas que cresciam bem ao redor, formando uma espécie de telhado natural. Pipo começou a entrelaçar os gravetos com cuidado, lembrando de cada técnica que tinha aprendido ao construir o ninho anterior, ano passado. Até o sapinho Coco apareceu de visita, trazendo fiozinhos de teia encontrados perto do lago, que ajudaram a amarrar os gravetos com mais firmeza, deixando a estrutura ainda mais resistente ao vento.\n\nCom a ajuda de todos trazendo materiais sem parar, voando e correndo de um lado para o outro, o trabalho avançou muito mais rápido do que Pipo imaginava ser possível fazer sozinho. Pouco a pouco, gravetinho por gravetinho, um novo ninho foi tomando forma diante dos olhos de todos.",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "passarinhoPipo", pose: "neutro", position: "esquerda" },
            { characterId: "esquilaNoz", pose: "animado", position: "direita" },
          ],
          props: [],
        },
      },
      {
        id: "s7",
        text: "Quando o novo ninho ficou pronto, já no fim da tarde, com a luz dourada do sol se despedindo entre as árvores, Pipo voou até ele e se instalou com cuidado, testando o conforto do musgo macio por baixo das penas. 'Está ainda melhor do que o anterior', disse ele, surpreso e feliz, quase não acreditando.\n\n'E agora você sabe que, se algo acontecer de novo, tem amigos prontos para ajudar a reconstruir, sempre', disse Noz, pousando satisfeita num galho próximo. Pipo sorriu, sentindo o coração bem mais leve do que pela manhã, quando tudo parecia perdido.",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "passarinhoPipo", pose: "feliz", position: "esquerda" },
            { characterId: "esquilaNoz", pose: "feliz", position: "direita" },
          ],
          props: [],
        },
      },
      {
        id: "s7b",
        text: "Os amigos ficaram ainda um pouco mais, decorando as bordas do novo ninho com pequenas penas coloridas que cada um tinha encontrado pelo caminho, deixando-o ainda mais bonito e acolhedor do que o anterior. Luna trouxe uma penugem macia de ganso que tinha guardado, e Bolinha contribuiu com um fiozinho de lã encontrado perto do celeiro.\n\n'Esse ninho tem um pedacinho de cada um de vocês', disse Pipo, emocionado, olhando para os detalhes especiais espalhados pela estrutura. 'Vou lembrar disso toda vez que olhar para ele.' Os amigos sorriram, satisfeitos por terem ajudado a criar algo tão especial para o companheiro.",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "passarinhoPipo", pose: "feliz", position: "esquerda" },
            { characterId: "esquilaNoz", pose: "animado", position: "direita" },
          ],
          props: ["flor"],
        },
      },
      {
        id: "s7c",
        text: "Pipo quis fazer algo especial para agradecer a todos que tinham ajudado, então cantou sua canção mais bonita bem alto, dedicando-a a cada amigo que tinha vindo em seu auxílio naquele dia difícil. Os pássaros vizinhos pararam para escutar, encantados com a melodia cheia de gratidão que ecoava pela floresta inteira.\n\n'Essa foi a canção mais bonita que já ouvi você cantar', disse Noz, emocionada, com os olhinhos brilhando. 'É porque hoje eu tenho muito mais para agradecer do que em qualquer outro dia', respondeu Pipo, sorrindo largo, sentindo o coração transbordando de gratidão por tantos amigos tão generosos.",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "passarinhoPipo", pose: "animado", position: "esquerda" },
            { characterId: "esquilaNoz", pose: "feliz", position: "direita" },
          ],
          props: [],
        },
      },
      {
        id: "s8",
        text: "Naquela noite, Pipo descansou no ninho novo, ouvindo o vento suave passar pelas folhas, bem diferente da tempestade da noite anterior que tinha destruído tudo. Ele pensou em como, mesmo depois de perder algo tão importante para ele, tinha conseguido construir algo novo, com carinho e com a ajuda de bons amigos que nem precisou pedir muito.\n\nA tristeza da manhã ainda existia um pouquinho dentro dele, guardadinha num canto, mas agora vinha acompanhada de gratidão e de esperança para os dias seguintes, sabendo que não estava mais sozinho enfrentando os imprevistos da vida na floresta.",
        illustration: {
          background: "florestaNoite",
          characters: [{ characterId: "passarinhoPipo", pose: "sonolento", position: "centro" }],
          props: ["estrelas"],
        },
      },
    ],
    familyQuestion: "Quando você fica triste com alguma coisa, o que ajuda você a se sentir melhor?",
  },

  {
    id: "a4-tesouro-fazenda",
    title: "O Tesouro da Fazenda",
    synopsis: "Tom, Bolinha e Luna seguem um mapa misterioso encontrado no celeiro e descobrem que o verdadeiro tesouro da aventura foi se divertir e se ajudar pelo caminho.",
    ageGroup: 4,
    category: "Aventuras",
    cover: {
      background: "fazenda",
      characters: [
        { characterId: "patinhoTom", pose: "animado", position: "esquerda" },
        { characterId: "cachorrinhoBolinha", pose: "feliz", position: "centro" },
        { characterId: "gatinhaLuna", pose: "feliz", position: "direita" },
      ],
      props: ["livro"],
    },
    scenes: [
      {
        id: "s1",
        text: "Dentro do velho celeiro da fazenda, cheio de cheiro de feno e madeira velha, enquanto brincavam de esconde-esconde numa tarde de folga, o patinho Tom encontrou um papel enrolado e amarelado, escondido atrás de uma pilha alta de feno empoeirado. Ao desenrolá-lo com cuidado, viu que era um mapa desenhado à mão, com um X marcado perto de uma árvore grande no fim do campo.\n\n'Olhem o que eu encontrei!', chamou Tom, animado, para Bolinha e Luna, que vieram correndo curiosos, quase tropeçando um no outro. 'Será que isso é um mapa de tesouro de verdade, escondido aqui esse tempo todo?'",
        illustration: {
          background: "fazenda",
          characters: [{ characterId: "patinhoTom", pose: "surpreso", position: "centro" }],
          props: ["livro"],
        },
      },
      {
        id: "s2",
        text: "Bolinha farejou o papel com curiosidade, o nariz quase colado no desenho, enquanto Luna examinava os desenhos com atenção, de cabeça inclinada. 'Parece que o caminho passa pelo riacho, depois pela colina das flores, e termina perto daquela árvore enorme ali no fim do campo', disse Luna, apontando para os símbolos desenhados no mapa com a patinha.\n\n'Vamos seguir o mapa até o fim, hoje mesmo!', propôs Tom, cheio de entusiasmo, batendo as patinhas uma na outra. Bolinha latiu de alegria, sempre pronto para uma boa aventura, e os três amigos partiram juntos pelo campo, decididos a descobrir o que os esperava no final do caminho.",
        illustration: {
          background: "fazenda",
          characters: [
            { characterId: "patinhoTom", pose: "animado", position: "esquerda" },
            { characterId: "cachorrinhoBolinha", pose: "animado", position: "centro" },
            { characterId: "gatinhaLuna", pose: "feliz", position: "direita" },
          ],
          props: [],
        },
      },
      {
        id: "s2b",
        text: "Antes de sair da fazenda, os três combinaram algumas regras simples para a aventura: ninguém ficaria para trás sozinho, e qualquer dificuldade seria resolvida em conjunto, sem ninguém tentando resolver tudo por conta própria. 'Juntos somos mais fortes', declarou Tom, orgulhoso da combinação que tinham feito.\n\nLuna guardou o mapa com cuidado dentro de uma bolsinha de pano amarrada no pescoço, prometendo cuidar dele como um verdadeiro tesouro. Bolinha farejou o ar, animado, sentindo o cheiro de aventura por toda parte, e os três partiram em fila, cheios de empolgação pelo que estava por vir naquela tarde ensolarada.",
        illustration: {
          background: "fazenda",
          characters: [
            { characterId: "patinhoTom", pose: "animado", position: "esquerda" },
            { characterId: "gatinhaLuna", pose: "feliz", position: "direita" },
          ],
          props: ["livro"],
        },
      },
      {
        id: "s3",
        text: "O primeiro desafio do caminho foi atravessar o riacho que cortava o campo, com a água correndo bem rápido por entre as pedras. A correnteza parecia forte demais para Luna, que não gostava muito de se molhar nem de água corrente, e ela ficou parada na margem, hesitante, olhando para o outro lado.\n\n'Eu posso te ajudar a atravessar', disse Tom, que adorava água e nadava desde pequeno. 'Suba nas minhas costas, eu nado bem rapidinho, não precisa ter medo.' Luna aceitou, um pouco insegura no início, segurando firme nas penas do amigo, mas confiando nele, e logo os três estavam do outro lado, secos e sorridentes.",
        illustration: {
          background: "rioLagoa",
          characters: [
            { characterId: "patinhoTom", pose: "feliz", position: "esquerda" },
            { characterId: "gatinhaLuna", pose: "surpreso", position: "centro" },
            { characterId: "cachorrinhoBolinha", pose: "feliz", position: "direita" },
          ],
          props: [],
        },
      },
      {
        id: "s4",
        text: "Em seguida, o mapa indicava a colina das flores, um morrinho cheio de flores coloridas de todos os tipos e tamanhos, balançando com a brisa. No meio do caminho, distraído admirando as cores, Bolinha tropeçou numa raiz escondida na grama e caiu, machucando levemente a patinha dianteira.\n\n'Ai, isso doeu um pouquinho', disse ele, fazendo uma careta e sentando-se no chão. Luna e Tom pararam imediatamente para ajudar, examinando a patinha com cuidado e carinho. 'Vamos com calma a partir de agora, sem pressa', sugeriu Luna, oferecendo o ombro para Bolinha se apoiar enquanto caminhavam mais devagar pela colina.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "cachorrinhoBolinha", pose: "triste", position: "centro" },
            { characterId: "gatinhaLuna", pose: "neutro", position: "direita" },
          ],
          props: ["flor"],
        },
      },
      {
        id: "s4b",
        text: "Luna examinou a patinha machucada de Bolinha com cuidado, pressionando de leve para ver se doía muito. 'Não parece nada grave, só um arranhão', disse ela, aliviada. 'Mas vamos com calma mesmo assim, para não piorar.' Bolinha agradeceu, sentindo-se cuidado pelos amigos, mesmo com a vergonha de ter tropeçado tão bobamente.\n\n'Obrigado por não rirem de mim', murmurou ele, um pouco encabulado. 'Por que riríamos?', perguntou Tom, surpreso. 'Todo mundo tropeça às vezes, principalmente quando está admirando flores bonitas demais para prestar atenção no chão!' Os três riram juntos daquilo, aliviando a tensão do pequeno susto.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "cachorrinhoBolinha", pose: "neutro", position: "esquerda" },
            { characterId: "gatinhaLuna", pose: "feliz", position: "direita" },
          ],
          props: ["flor"],
        },
      },
      {
        id: "s5",
        text: "Com um pouco mais de cuidado e calma, os três continuaram subindo a colina, parando sempre que Bolinha precisava descansar a patinha machucada. No topo, encontraram um campo enorme de flores amarelas e roxas, balançando suavemente com o vento, cheirando a mel e a terra molhada de orvalho.\n\n'Que lugar bonito', suspirou Tom, esquecendo por um momento até do próprio mapa que levava na pata. Luna sorriu, concordando enquanto se sentava para descansar um pouco: 'Mesmo sem chegar ao tesouro ainda, esse passeio já está sendo incrível, só de ver essa vista daqui de cima.'",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "patinhoTom", pose: "feliz", position: "esquerda" },
            { characterId: "gatinhaLuna", pose: "feliz", position: "centro" },
            { characterId: "cachorrinhoBolinha", pose: "feliz", position: "direita" },
          ],
          props: ["flor", "borboleta"],
        },
      },
      {
        id: "s6",
        text: "Finalmente, depois de atravessar a colina inteira, os três amigos avistaram a árvore grande marcada no mapa, bem no fim do campo, com os galhos enormes se espalhando para todos os lados. O coração de cada um batia rápido de expectativa enquanto se aproximavam do local marcado com o X vermelho.\n\n'O tesouro deve estar enterrado bem aqui', disse Tom, começando a cavar com as patinhas na terra macia perto do tronco, levantando pequenas montanhas de terra. Bolinha ajudou a cavar também, esquecendo a dorzinha na pata, usando seu faro apurado para guiar o local exato onde deveriam procurar.",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "patinhoTom", pose: "animado", position: "esquerda" },
            { characterId: "cachorrinhoBolinha", pose: "animado", position: "direita" },
          ],
          props: [],
        },
      },
      {
        id: "s6b",
        text: "Enquanto cavavam, Luna ficou de olho ao redor, atenta a qualquer sinal de perigo, enquanto Tom e Bolinha se revezavam escavando a terra macia. 'Quanto mais fundo a gente cava, mais nervosa e animada eu fico ao mesmo tempo', confessou Luna, sentindo o coração acelerar com a expectativa.\n\n'Eu também', admitiu Tom, limpando a testa suada com a asa. 'Será que vamos encontrar moedas de ouro? Ou joias brilhantes?' Bolinha latiu, animado com as possibilidades, imaginando todo tipo de tesouro fantástico enquanto continuava escavando com entusiasmo redobrado.",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "gatinhaLuna", pose: "surpreso", position: "esquerda" },
            { characterId: "patinhoTom", pose: "animado", position: "direita" },
          ],
          props: [],
        },
      },
      {
        id: "s7",
        text: "Depois de cavar um pouco, com as patinhas já sujas de terra, encontraram uma caixinha de madeira enferrujada pelo tempo, enterrada bem no fundo. Com as patinhas tremendo de expectativa, Tom abriu a tampa rangente, e dentro havia apenas um bilhete antigo e desbotado, escrito por algum bichinho que tinha vivido na fazenda há muito tempo atrás.\n\nO bilhete dizia: 'O verdadeiro tesouro não está aqui dentro, mas na aventura que você viveu para chegar até este lugar.' Os três se olharam, surpresos e um pouco decepcionados no início, e depois começaram a rir juntos, sentados na terra.",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "patinhoTom", pose: "surpreso", position: "esquerda" },
            { characterId: "cachorrinhoBolinha", pose: "surpreso", position: "centro" },
            { characterId: "gatinhaLuna", pose: "feliz", position: "direita" },
          ],
          props: [],
        },
      },
      {
        id: "s7c",
        text: "Bolinha sugeriu que guardassem o bilhete antigo como lembrança daquele dia, junto com a caixinha de madeira enferrujada. 'Podemos até escrever nosso próprio bilhete e escondê-lo de novo para alguém encontrar no futuro', propôs ele, animado com a ideia de continuar a tradição misteriosa.\n\n'Que ideia incrível!', exclamou Tom, batendo as patinhas. Luna pegou um pedacinho de papel que tinha sobrado no fundo da caixinha e, com a ajuda dos amigos, escreveram juntos uma nova mensagem, contando sobre a aventura que tinham vivido naquele dia, para ser descoberta por outro bichinho curioso algum dia.",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "patinhoTom", pose: "animado", position: "esquerda" },
            { characterId: "cachorrinhoBolinha", pose: "feliz", position: "direita" },
          ],
          props: ["livro"],
        },
      },
      {
        id: "s7d",
        text: "No caminho de volta para a fazenda, os três decidiram esconder a caixinha de madeira com o novo bilhete bem perto da árvore grande, exatamente onde tinham encontrado a anterior, para manter viva aquela tradição misteriosa. Tom cavou um buraquinho raso, e Bolinha ajudou a cobrir tudo com folhas secas, disfarçando bem o esconderijo.\n\n'Algum dia, outro bichinho curioso vai encontrar isso e vai sentir a mesma emoção que sentimos hoje', disse Luna, satisfeita com o plano. Os três se despediram da árvore grande com um aceno carinhoso, prometendo voltar ali de vez em quando para relembrar aquela aventura tão especial.",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "patinhoTom", pose: "feliz", position: "esquerda" },
            { characterId: "gatinhaLuna", pose: "feliz", position: "direita" },
          ],
          props: [],
        },
      },
      {
        id: "s8",
        text: "'Faz sentido', disse Luna, sorrindo enquanto limpava a terra das patas. 'Hoje a gente atravessou o riacho, cuidou um do outro na colina quando Bolinha se machucou, e viu um campo de flores lindíssimo. Isso tudo foi um tesouro, de um jeito diferente do que imaginávamos.' Tom e Bolinha concordaram, sentindo o coração quentinho com a lembrança de tudo que viveram naquele dia.\n\nOs três voltaram para a fazenda ao pôr do sol, cansados mas felizes, as patinhas doloridas mas os corações leves, já planejando qual seria a próxima grande aventura que viveriam juntos, talvez seguindo outro mapa escondido em algum canto do celeiro.",
        illustration: {
          background: "fazenda",
          characters: [
            { characterId: "patinhoTom", pose: "feliz", position: "esquerda" },
            { characterId: "cachorrinhoBolinha", pose: "feliz", position: "centro" },
            { characterId: "gatinhaLuna", pose: "feliz", position: "direita" },
          ],
          props: ["sol"],
        },
      },
    ],
    familyQuestion: "Qual foi a aventura mais divertida que você já viveu com um amigo ou com a família?",
  },

  {
    id: "a4-dada-conta-estrelas",
    title: "Dadá Ensina a Contar Estrelas",
    synopsis: "A coruja Dadá e a esquilinha Noz transformam uma noite de céu estrelado em uma brincadeira divertida de contar e agrupar estrelas, aprendendo números de um jeito leve.",
    ageGroup: 4,
    category: "Aprender Brincando",
    cover: {
      background: "florestaNoite",
      characters: [
        { characterId: "corujaSabia", pose: "feliz", position: "esquerda" },
        { characterId: "esquilaNoz", pose: "animado", position: "direita" },
      ],
      props: ["estrelas", "lua"],
    },
    scenes: [
      {
        id: "s1",
        text: "Numa noite bem clara, sem nenhuma nuvem no céu escuro, a esquilinha Noz saiu da sua tocaia para admirar as estrelas, que naquela noite pareciam brilhar mais forte do que o normal, quase como lanternas penduradas no céu. Ela se sentou numa pedra confortável, ainda morna do calor do dia, e ficou observando aquele mar de pontinhos brilhantes por um bom tempo.\n\nA coruja Dadá, pousada numa árvore próxima fazendo sua ronda noturna de sempre, notou o interesse de Noz e desceu voando baixinho para fazer companhia. 'Gosta de observar as estrelas?', perguntou ela, pousando ao lado com um sorriso gentil nos olhos grandes.",
        illustration: {
          background: "florestaNoite",
          characters: [
            { characterId: "esquilaNoz", pose: "feliz", position: "esquerda" },
            { characterId: "corujaSabia", pose: "feliz", position: "direita" },
          ],
          props: ["estrelas"],
        },
      },
      {
        id: "s2",
        text: "'Eu amo olhar para elas', respondeu Noz, sem tirar os olhos do céu, 'mas tem tantas que eu nunca consegui contar todas, nem perto disso.' Dadá riu suavemente, um som macio como vento nas folhas. 'Ninguém consegue contar todas as estrelas do céu, nem os bichos mais sábios da floresta, mas a gente pode se divertir contando grupinhos pequenos de cada vez.'\n\n'Como assim?', perguntou Noz, curiosa, inclinando a cabecinha para o lado. Dadá apontou com a asa para um pedacinho do céu, bem acima das copas das árvores. 'Vamos começar contando só as estrelas desse cantinho aqui, bem pertinho da lua cheia.'",
        illustration: {
          background: "florestaNoite",
          characters: [
            { characterId: "esquilaNoz", pose: "neutro", position: "esquerda" },
            { characterId: "corujaSabia", pose: "neutro", position: "direita" },
          ],
          props: ["lua", "estrelas"],
        },
      },
      {
        id: "s2b",
        text: "Antes de começar a contar, Dadá explicou com calma que não tinha problema nenhum errar ou se confundir durante a brincadeira. 'A ideia não é acertar tudo de primeira', disse ela, 'é se divertir enquanto aprende, no seu próprio ritmo.' Noz assentiu, sentindo-se mais tranquila para começar, sem medo de errar na frente da amiga.\n\n'Posso pedir para você repetir se eu me perder na contagem?', perguntou Noz, um pouco tímida. 'Claro que sim, quantas vezes precisar', respondeu Dadá, sorrindo com paciência. Aquela permissão deixou Noz ainda mais à vontade para começar a brincadeira sem pressa nenhuma.",
        illustration: {
          background: "florestaNoite",
          characters: [
            { characterId: "esquilaNoz", pose: "neutro", position: "esquerda" },
            { characterId: "corujaSabia", pose: "feliz", position: "direita" },
          ],
          props: ["estrelas"],
        },
      },
      {
        id: "s3",
        text: "Noz olhou com atenção para o pedacinho indicado e começou a contar, apontando com a pata pequenininha, bem concentrada: 'Uma, duas, três, quatro, cinco!' Ela sorriu, orgulhosa de ter contado um grupo inteiro de estrelas sem se confundir nem uma vez.\n\n'Muito bem, Noz!', elogiou Dadá, satisfeita. 'Agora vamos tentar outro grupinho, um pouquinho maior que esse primeiro.' Ela apontou para outra parte do céu, mais para o lado, onde havia mais estrelinhas espalhadas, formando um desenho diferente, quase como uma pipa torta.",
        illustration: {
          background: "florestaNoite",
          characters: [
            { characterId: "esquilaNoz", pose: "animado", position: "esquerda" },
            { characterId: "corujaSabia", pose: "feliz", position: "direita" },
          ],
          props: ["estrelas"],
        },
      },
      {
        id: "s4",
        text: "Noz contou novamente, desta vez chegando até o número oito, sem perder o fio da contagem nem uma vez, usando o dedinho para marcar cada estrela já contada. 'Oito estrelas nesse grupo!', ela anunciou, cheia de orgulho, batendo palma com as patinhas pequenas. Dadá assentiu, satisfeita com o progresso rápido da amiga naquela brincadeira nova.\n\n'Agora, um desafio um pouquinho maior', disse a coruja, com um brilho de ideia nos olhos. 'Vamos somar as estrelas dos dois grupinhos que já contamos. Quanto dá cinco mais oito?' Noz fechou os olhos, pensando com cuidado, usando os dedinhos das patas para ajudar a calcular, murmurando os números baixinho.",
        illustration: {
          background: "florestaNoite",
          characters: [
            { characterId: "esquilaNoz", pose: "neutro", position: "esquerda" },
            { characterId: "corujaSabia", pose: "feliz", position: "direita" },
          ],
          props: ["estrelas"],
        },
      },
      {
        id: "s4b",
        text: "No meio da soma, Noz se confundiu uma vez e teve que recomeçar a contagem desde o início, ficando um pouquinho frustrada consigo mesma. 'Vou errar de novo', resmungou, balançando a cabeça. Dadá esperou pacientemente, sem apressar nem demonstrar impaciência nenhuma.\n\n'Lembra do que combinamos? Não tem problema recomeçar quantas vezes precisar', lembrou a coruja, gentil. Noz respirou fundo e tentou outra vez, dessa vez com mais calma, contando devagarinho cada estrelinha no dedo, até finalmente sentir que o número estava certo na cabeça.",
        illustration: {
          background: "florestaNoite",
          characters: [
            { characterId: "esquilaNoz", pose: "triste", position: "esquerda" },
            { characterId: "corujaSabia", pose: "neutro", position: "direita" },
          ],
          props: ["estrelas"],
        },
      },
      {
        id: "s5",
        text: "Depois de contar nos dedinhos com cuidado, repetindo baixinho para não se perder, Noz chegou à resposta, abrindo os olhos de repente: 'Treze!' Dadá bateu as asas de leve, aplaudindo contente. 'Isso mesmo! Você somou dois grupinhos e descobriu quantas estrelas tem no total juntando os dois. Isso se chama fazer uma soma, Noz.'\n\nNoz ficou encantada ao descobrir que brincar de contar estrelas também era uma forma de aprender matemática, algo que ela achava meio chato e cansativo quando praticava sozinha em casa, sentada numa mesinha com lápis e papel.",
        illustration: {
          background: "florestaNoite",
          characters: [
            { characterId: "esquilaNoz", pose: "animado", position: "esquerda" },
            { characterId: "corujaSabia", pose: "animado", position: "direita" },
          ],
          props: ["estrelas"],
        },
      },
      {
        id: "s6",
        text: "Dadá então propôs um novo desafio, apontando para cima com entusiasmo: encontrar formas nas estrelas, como se fossem desenhos escondidos no céu inteiro. 'Olha aquele grupinho ali, parece um triângulo', disse Noz, apontando para três estrelinhas bem próximas umas das outras, formando cantos.\n\n'E aquele outro parece uma linha reta bem longa, quase uma régua', completou Dadá, indicando uma fileira de estrelas alinhadas perfeitinhas. Juntas, elas foram descobrindo formas geométricas escondidas pelo céu inteiro, rindo cada vez que encontravam um novo desenho, inventando nomes engraçados para cada uma das figuras.",
        illustration: {
          background: "florestaNoite",
          characters: [
            { characterId: "esquilaNoz", pose: "feliz", position: "esquerda" },
            { characterId: "corujaSabia", pose: "feliz", position: "direita" },
          ],
          props: ["estrelas"],
        },
      },
      {
        id: "s6b",
        text: "Noz quis tentar desenhar as formas que encontravam, pegando um gravetinho fino para rabiscar na terra macia ao lado da pedra. 'Olha, consegui desenhar o triângulo que vimos lá em cima!', disse ela, orgulhosa do próprio rabisco torto, mas reconhecível.\n\nDadá aplaudiu, encantada com a iniciativa. 'Que ideia maravilhosa, Noz! Desenhar ajuda a gente a lembrar ainda melhor do que aprendeu.' Noz continuou desenhando mais formas na terra, criando um pequeno mapa particular do céu estrelado bem ali no chão da floresta, satisfeita com sua obra de arte improvisada.",
        illustration: {
          background: "florestaNoite",
          characters: [
            { characterId: "esquilaNoz", pose: "animado", position: "esquerda" },
            { characterId: "corujaSabia", pose: "feliz", position: "direita" },
          ],
          props: ["estrelas"],
        },
      },
      {
        id: "s7",
        text: "Depois de um bom tempo brincando, já com o pescoço meio cansado de olhar para cima, Noz percebeu como tinha aprendido várias coisas sem nem perceber: contar números maiores, fazer somas simples e até reconhecer formas geométricas no céu. 'Isso foi muito mais divertido do que estudar com livros na mesinha', disse ela, rindo e se espreguiçando.\n\n'A brincadeira é uma das melhores formas de aprender, Noz', concordou Dadá, com sabedoria tranquila na voz. 'Quando a mente está se divertindo, ela absorve as coisas novas com muito mais facilidade e alegria, sem nem perceber o esforço.'",
        illustration: {
          background: "florestaNoite",
          characters: [
            { characterId: "esquilaNoz", pose: "feliz", position: "esquerda" },
            { characterId: "corujaSabia", pose: "feliz", position: "direita" },
          ],
          props: ["estrelas", "lua"],
        },
      },
      {
        id: "s7c",
        text: "Dadá sugeriu um último desafio antes de encerrarem a brincadeira: contar, juntas, quantos grupinhos de estrelas elas tinham conseguido identificar durante toda a noite. Noz contou nos dedinhos, lembrando de cada grupo com carinho: 'Um, dois, três, quatro... cinco grupinhos ao todo!'\n\n'Muito bem lembrado!', elogiou Dadá, impressionada com a memória da amiga. 'Você está ficando ótima em contar e em lembrar números.' Noz sorriu, orgulhosa de si mesma, sentindo que tinha aprendido muito mais naquela noite brincando do que imaginava ser possível aprender só observando o céu.",
        illustration: {
          background: "florestaNoite",
          characters: [
            { characterId: "esquilaNoz", pose: "animado", position: "esquerda" },
            { characterId: "corujaSabia", pose: "animado", position: "direita" },
          ],
          props: ["estrelas", "lua"],
        },
      },
      {
        id: "s7d",
        text: "'Posso te ensinar essa brincadeira para os meus amigos também?', perguntou Noz, animada com a ideia de compartilhar o que tinha aprendido. 'Claro que pode', respondeu Dadá, feliz com a vontade de ensinar da esquilinha. 'Ensinar os outros é uma ótima forma de aprender ainda mais, porque a gente precisa entender bem para conseguir explicar direitinho.'\n\nNoz já estava imaginando como ia mostrar aos amigos a brincadeira de contar e agrupar estrelas, pensando em quais formas engraçadas eles iriam descobrir juntos no céu estrelado da próxima noite clara que tivessem.",
        illustration: {
          background: "florestaNoite",
          characters: [
            { characterId: "esquilaNoz", pose: "feliz", position: "esquerda" },
            { characterId: "corujaSabia", pose: "feliz", position: "direita" },
          ],
          props: ["estrelas"],
        },
      },
      {
        id: "s8",
        text: "Antes de voltar para casa, já bocejando de sono, Noz prometeu a si mesma que observaria o céu com mais atenção todas as noites claras, sempre procurando novos grupinhos de estrelas para contar e novas formas para descobrir escondidas lá no alto. Aquela brincadeira tinha se tornado seu passatempo favorito, bem mais divertido do que imaginava no começo da noite.\n\nDadá sorriu, satisfeita com a tarde bem aproveitada, e voou para seu galho de sempre, enquanto Noz voltava para sua tocaia, carregando na memória uma noite cheia de números, formas e muitas risadas sob o céu estrelado e tranquilo.",
        illustration: {
          background: "florestaNoite",
          characters: [{ characterId: "esquilaNoz", pose: "sonolento", position: "centro" }],
          props: ["estrelas", "lua"],
        },
      },
    ],
    familyQuestion: "Quer tentar contar as estrelas ou procurar formas no céu na próxima noite clara?",
  },
];

export default stories;

import type { Story } from "../../illustrations/types";

const stories: Story[] = [
  {
    id: "a5-estrela-jardim-nino",
    title: "A Estrela que Caiu no Jardim de Nino",
    synopsis:
      "Nino encontra uma estrela caída no jardim e, com a ajuda do amigo Pipo, embarca numa jornada noturna para devolvê-la ao céu.",
    ageGroup: 5,
    category: "Aventuras",
    cover: {
      background: "ceuNuvens",
      characters: [
        { characterId: "coelhoNino", pose: "feliz", position: "esquerda" },
        { characterId: "passarinhoPipo", pose: "animado", position: "direita" },
      ],
      props: ["estrelas", "lua"],
    },
    scenes: [
      {
        id: "cena-1",
        text:
          "Nino, o coelhinho branco de lenço azul, adorava sentar no jardim nas noites quietas para olhar o céu cheio de pontinhos de luz. Ele conhecia quase todas as estrelas e tinha dado nomes para as mais brilhantes. Naquela noite, enquanto contava as estrelas pela centésima vez, viu algo estranho: uma luzinha pequena começou a cair, bem devagar, como uma pena. Não parecia um vaga-lume, nem um raio de lua. Parecia mesmo uma estrela perdida, descendo sem saber para onde ir. Nino esfregou os olhos para ter certeza do que estava vendo e, de tão curioso, levantou-se de um salto, decidido a descobrir o que era aquela luz tão especial que escolhera justamente o seu jardim para cair. Ele pensou em chamar alguém para ajudar, mas lembrou que a maioria dos animais da floresta já estava dormindo àquela hora. Respirou fundo, ajeitou o lencinho azul no pescoço e decidiu, sozinho mesmo, seguir o rastro de luz que a estrela tinha deixado no ar, uma trilha fina e brilhante que ainda cintilava por cima das copas das árvores. Cada passo que dava fazia a grama fresca fazer um barulhinho suave sob suas patas, e o silêncio da noite parecia esperar, junto com ele, para descobrir onde aquela luzinha teria ido parar.",
        illustration: {
          background: "florestaNoite",
          characters: [{ characterId: "coelhoNino", pose: "surpreso", position: "centro" }],
          props: ["lua", "estrelas"],
        },
      },
      {
        id: "cena-2",
        text:
          "Quando chegou ao canteiro de flores, Nino encontrou a estrelinha ali, pequena e fraquinha, quase sem brilho, entre as folhas. Ela parecia tão triste quanto uma estrela pode parecer. — Eu escorreguei do céu e não sei como voltar — disse ela, com uma vozinha fina. Foi então que Pipo, o passarinho azul que morava na árvore vizinha, desceu voando para ver o que estava acontecendo. — Eu posso voar bem alto — disse Pipo, estufando o peito. — Juntos, a gente consegue levar você de volta para casa. A estrelinha sorriu um pouquinho, e seu brilho ficou só um tiquinho mais forte, como se a esperança já estivesse ajudando. — Como você se chama? — perguntou Nino, curioso, se aproximando bem de pertinho. — Ainda não tenho nome — respondeu a estrelinha, baixinho. — As estrelas só recebem nome quando alguém olha para elas de verdade, lá do céu. Nino sorriu e prometeu que, assim que ela voltasse para o seu lugar, ele mesmo escolheria um nome bonito para ela, de todo o coração. A estrelinha pareceu gostar tanto da ideia que seu brilho tremeluziu de um jeito alegre, quase como uma risadinha feita de luz.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "coelhoNino", pose: "feliz", position: "esquerda" },
            { characterId: "passarinhoPipo", pose: "animado", position: "direita" },
          ],
          props: ["flor", "estrelas"],
        },
      },
      {
        id: "cena-3",
        text:
          "Os três seguiram pela floresta escura, com Nino carregando a estrelinha num embrulhinho de folhas, bem aconchegada. O caminho estava cheio de arbustos fechados e raízes torcidas, e por um momento ninguém sabia por onde passar. Pipo então voou alto, acima das árvores, para enxergar o melhor caminho. — Por aqui! — gritou ele, batendo as asas de alegria. — Tem uma trilha certinha até a montanha! Nino seguiu confiante, mesmo sem ver tudo o que Pipo via lá do alto, porque sabia que podia confiar no amigo. Devagar, cuidando de cada passo, os dois atravessaram a floresta sem se perder nem uma única vez. No meio do caminho, encontraram um riacho estreito cortando a trilha, e por um instante Nino temeu que não conseguisse atravessar sem derrubar o embrulho de folhas. Pipo teve uma ideia: voou até o outro lado e trouxe um graveto fino e resistente, que os dois usaram como uma pontezinha improvisada. Com cuidado, patinha por patinha, Nino cruzou o riacho sem derramar nem uma gotinha sobre a estrelinha, e os dois amigos continuaram a caminhada, ainda mais orgulhosos um do outro.",
        illustration: {
          background: "florestaNoite",
          characters: [
            { characterId: "coelhoNino", pose: "neutro", position: "esquerda" },
            { characterId: "passarinhoPipo", pose: "feliz", position: "fundo-direita" },
          ],
          props: ["estrelas"],
        },
      },
      {
        id: "cena-4",
        text:
          "No pé da montanha, Nino olhou para cima e sentiu as patinhas tremerem um pouco. — É muito alto — disse ele, baixinho. — E se eu não conseguir chegar lá? A estrelinha, mesmo fraquinha, brilhou de um jeito gentil. — Você não precisa chegar ao topo sozinho — disse ela. — É por isso que estamos juntos. Pipo pousou no ombro de Nino e combinaram: a cada parte difícil da subida, cantariam uma música que os três conheciam, para o caminho parecer mais curto e mais leve. E assim, cantarolando e se ajudando nas pedras mais altas, Nino foi subindo, degrau por degrau, sem nunca soltar o embrulho de folhas. No meio da subida, uma pedra solta rolou bem perto dos pés de Nino, e ele quase perdeu o equilíbrio de susto. Pipo desceu rapidamente e, batendo as asas com força, ajudou a apoiar o amigo até que ele recuperasse o passo firme outra vez. — Respira fundo — disse Pipo, pousando gentilmente no ombro dele. — A gente já está quase lá, eu posso ver o topo daqui. Com essas palavras de ânimo, Nino sentiu suas patinhas ganharem uma força nova, e continuou subindo, verso após verso da canção, até que o vento no topo da montanha começou a soprar mais forte, anunciando que estavam chegando perto do céu.",
        illustration: {
          background: "montanha",
          characters: [
            { characterId: "coelhoNino", pose: "triste", position: "esquerda" },
            { characterId: "passarinhoPipo", pose: "feliz", position: "direita" },
          ],
          props: ["estrelas"],
        },
      },
      {
        id: "cena-5",
        text:
          "Lá no alto, entre nuvens fofas e macias como algodão, Nino finalmente conseguiu ver o céu bem de pertinho. Mas havia um problema: a estrelinha ainda estava fraca demais para subir sozinha de volta ao seu lugar. — Ela precisa de um empurrãozinho de carinho — disse Pipo, pensativo. Nino abraçou a estrelinha com cuidado, como fazia com os brinquedos mais queridos, e disse tudo de bom que sentia: que tinha sido um prazer conhecê-la, que o céu ficava mais bonito com ela, que ela merecia brilhar de novo. A cada palavra gentil, a estrelinha ia ficando mais quentinha e mais brilhante, até iluminar toda a nuvem ao redor. Pipo olhou em volta e percebeu que, quanto mais Nino falava com carinho, mais as nuvens ao redor pareciam ficar douradas, como se estivessem presenciando algo mágico de verdade acontecer. — Continue assim — sussurrou Pipo. — Está funcionando. Nino sorriu e continuou, contando para a estrelinha sobre as noites em que ele mesmo se sentia pequeno e sozinho, e como olhar para o céu sempre o fazia sentir-se acompanhado. A estrelinha, tocada por aquelas palavras tão sinceras, brilhou com uma luz tão forte que, por um instante, pareceu quase do tamanho da própria lua.",
        illustration: {
          background: "ceuNuvens",
          characters: [
            { characterId: "coelhoNino", pose: "feliz", position: "centro" },
            { characterId: "passarinhoPipo", pose: "neutro", position: "fundo-direita" },
          ],
          props: ["estrelas", "nuvem"],
        },
      },
      {
        id: "cena-6",
        text:
          "Quando a estrelinha já brilhava com toda a força, Pipo bateu as asas bem rápido e voou o mais alto que conseguiu, carregando-a com cuidado entre as penas. Nino ficou olhando de baixo, o coração batendo forte de esperança. A estrelinha subiu, subiu, e com um último brilho dourado, encaixou-se exatamente no lugar de onde tinha caído, lá no meio do céu escuro. — Obrigada por não terem me deixado sozinha — disse ela, agora brilhando mais forte do que todas as outras estrelas ao redor. Pipo desceu voando, orgulhoso, e Nino deu um salto de alegria tão grande que quase rolou morro abaixo. Enquanto isso, outras estrelas vizinhas pareciam cintilar com mais força, como se estivessem aplaudindo silenciosamente a volta da amiga para o seu lugar no céu. Pipo desceu voando em círculos de pura felicidade, cantando uma musiquinha qualquer que inventou na hora, só para comemorar. Nino, ainda olhando para cima, sentiu os olhos ficarem molhadinhos de emoção, não de tristeza, mas daquele tipo de alegria tão grande que precisa sair de algum jeito, nem que seja em forma de lágrima pequena escorrendo pelo rosto peludo.",
        illustration: {
          background: "ceuNuvens",
          characters: [{ characterId: "passarinhoPipo", pose: "animado", position: "centro" }],
          props: ["estrelas", "lua"],
        },
      },
      {
        id: "cena-7",
        text:
          "A volta para casa foi bem mais fácil do que a ida, porque o caminho já era conhecido e o coração dos dois amigos estava leve e feliz. Quando chegaram ao jardim, Nino se jogou na grama macia, cansado, mas sorrindo. Pipo pousou ao lado dele, também cansado, também feliz. Os dois ficaram ali, olhando para o céu, procurando a estrelinha entre as outras. — Ali está ela — disse Nino, apontando. — Brilhando até mais do que antes. Pipo assentiu, satisfeito, e os dois ficaram quietinhos por um tempo, apenas observando o céu, sabendo que tinham feito algo muito bonito naquela noite. Antes de se despedir para dormir, Nino olhou mais uma vez para o céu e sussurrou, baixinho, o nome que tinha prometido dar à estrelinha: Esperança. Pipo achou o nome perfeito e prometeu contar a todos os pássaros da floresta sobre aquela estrela especial, para que ela nunca mais se sentisse sozinha lá no alto. Os dois amigos se despediram com um abraço apertado de asas e patinhas, e, enquanto Pipo voava de volta para seu ninho, Nino entrou em casa, pulou na cama e, pela primeira vez naquela noite, fechou os olhos sentindo um sono tranquilo e gostoso tomar conta dele.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "coelhoNino", pose: "sonolento", position: "esquerda" },
            { characterId: "passarinhoPipo", pose: "sonolento", position: "direita" },
          ],
          props: ["estrelas", "lua"],
        },
      },
    ],
    familyQuestion:
      "Você já ajudou alguém que estava precisando de carinho? Como foi?",
  },
  {
    id: "a5-grande-dia-da-horta",
    title: "O Grande Dia da Horta",
    synopsis:
      "Bento e Doce decidem plantar uma horta juntos e descobrem que paciência e trabalho em equipe fazem tudo crescer melhor.",
    ageGroup: 5,
    category: "Aprender Brincando",
    cover: {
      background: "fazenda",
      characters: [
        { characterId: "ursoBento", pose: "feliz", position: "esquerda" },
        { characterId: "elefantinhoDoce", pose: "animado", position: "direita" },
      ],
      props: ["flor", "sol"],
    },
    scenes: [
      {
        id: "cena-1",
        text:
          "Bento, o ursinho de suéter vermelho, sempre quis ter uma horta cheia de legumes coloridos, mas não sabia bem por onde começar. Um dia, enquanto olhava um pedaço de terra atrás de sua casa, Doce, o elefantinho de chapéu de palha, passou por ali carregando um regador enorme. — Eu adoro plantas! — disse Doce, animado. — Posso te ajudar a fazer essa horta? Bento ficou tão feliz que quase deu um pulo. Os dois se sentaram na terra, lado a lado, e começaram a planejar: onde ficariam as cenouras, onde ficariam os tomates, e qual seria o melhor lugar para plantar as abobrinhas que Bento tanto gostava. Doce tirou do bolso um pequeno caderninho de desenhos e começou a rabiscar um mapa da horta, marcando com cuidado cada fileira com um símbolo diferente: uma bolinha laranja para as cenouras, um quadradinho vermelho para os tomates. — Assim a gente não esquece onde plantou o quê — explicou ele, orgulhoso do próprio plano. Bento achou a ideia esperta e sugeriu guardarem o caderninho dentro de uma lata, enterrada perto da cerca, para não se perder com o vento nem com a chuva.",
        illustration: {
          background: "fazenda",
          characters: [
            { characterId: "ursoBento", pose: "feliz", position: "esquerda" },
            { characterId: "elefantinhoDoce", pose: "feliz", position: "direita" },
          ],
          props: [],
        },
      },
      {
        id: "cena-2",
        text:
          "No primeiro dia de trabalho, Bento cavou buraquinhos na terra enquanto Doce usava sua tromba forte para carregar baldes de água de um lado para o outro. Era um trabalho e tanto! As patinhas de Bento ficaram cheias de terra, e a tromba de Doce ficou toda molhada, mas os dois riam muito a cada tarefa concluída. Quando plantaram a última semente de cenoura, os dois se olharam, orgulhosos. — Agora é só esperar — disse Doce. — As plantinhas vão crescer bem rapidinho, não é? Bento riu. — Acho que vai demorar um pouquinho mais do que isso, mas vai valer a pena. Doce fez uma careta de impaciência, mas confiou no amigo e ajudou a cobrir cada buraquinho com uma fina camada de terra fofa, batendo de leve com a tromba para deixar tudo bem assentado. Antes de ir embora, os dois ainda espalharam um punhado de folhas secas por cima do canteiro, porque Bento tinha lido, numa velha revista de jardinagem encontrada no sótão, que isso ajudava a manter a terra quentinha durante as noites mais frias.",
        illustration: {
          background: "fazenda",
          characters: [
            { characterId: "ursoBento", pose: "animado", position: "esquerda" },
            { characterId: "elefantinhoDoce", pose: "feliz", position: "direita" },
          ],
          props: [],
        },
      },
      {
        id: "cena-3",
        text:
          "No dia seguinte, Doce correu até a horta cheio de esperança, mas encontrou só terra lisa, sem nenhum sinal de planta. Ele ficou com uma carinha triste e foi correndo chamar Bento. — Nada cresceu! Será que fizemos algo errado? Bento olhou a terra com calma e sorriu. — As sementes precisam de tempo para acordar debaixo da terra, assim como nós precisamos dormir a noite inteira para descansar. Elas estão trabalhando escondidinhas, mesmo que a gente não veja. Doce respirou fundo e assentiu, ainda um pouco impaciente, mas decidido a confiar no amigo e esperar o tempo necessário. Para ajudar a passar o tempo, Bento sugeriu que fizessem um calendário na parede do celeiro, marcando cada dia que passava com um risquinho de carvão. — Assim a gente vê o tempo passando de um jeito mais animado — disse ele. Doce adorou a ideia e, todos os dias ao entardecer, corria para marcar seu risquinho, sempre espiando a terra na esperança de ver algum brotinho verde surgindo entre os torrões.",
        illustration: {
          background: "fazenda",
          characters: [
            { characterId: "elefantinhoDoce", pose: "triste", position: "esquerda" },
            { characterId: "ursoBento", pose: "neutro", position: "direita" },
          ],
          props: [],
        },
      },
      {
        id: "cena-4",
        text:
          "Todos os dias, Bento e Doce visitavam a horta juntos. Regavam a terra com cuidado, tiravam as pedrinhas do caminho e contavam para as plantinhas, bem baixinho, como tinha sido o dia de cada um. Doce até cantava uma música que ele mesmo inventou, sobre cenouras crescendo fortes e tomates ficando vermelhos. Aos poucos, pequenos brotinhos verdes começaram a aparecer na terra, um aqui, outro ali. Doce quase não conseguia esperar para contar a novidade para todo mundo da vizinhança, mas Bento pediu que tivessem paciência: ainda havia um caminho inteiro de crescimento até a colheita. Doce, no entanto, não resistiu e contou para três vizinhos sobre os brotinhos novos, trazendo todos eles para ver a maravilha de perto. Os vizinhos ficaram tão encantados que ofereceram ajuda para espantar os passarinhos que de vez em quando bicavam as folhinhas mais tenras. Bento, satisfeito com o entusiasmo contagiante do amigo, só pediu que, dali para frente, deixassem as plantas crescerem em paz, sem tanta visita, para não pisarem acidentalmente nos canteiros.",
        illustration: {
          background: "fazenda",
          characters: [
            { characterId: "ursoBento", pose: "feliz", position: "esquerda" },
            { characterId: "elefantinhoDoce", pose: "animado", position: "direita" },
          ],
          props: ["flor"],
        },
      },
      {
        id: "cena-5",
        text:
          "Um dia, uma chuva forte caiu sobre a horta, e Doce ficou preocupado que as plantinhas fossem se machucar. Correu até a casa de Bento, todo encharcado. — A chuva vai destruir tudo que a gente plantou! Bento olhou pela janela, calmo. — A chuva é boa para as plantas, Doce. Ela dá água para as raízes crescerem fortes lá debaixo da terra. Quando a chuva parou, os dois foram correndo até a horta e viram que, em vez de destruída, ela parecia ainda mais viva: as folhinhas estavam verdes e brilhantes, como se tivessem tomado um banho revigorante. Doce chapinhou alegremente nas poças que tinham se formado entre os canteiros, salpicando água para todo lado, enquanto Bento ria e tentava, sem muito sucesso, desviar dos respingos. Quando finalmente se cansaram de brincar, os dois se sentaram na beira da horta, observando gotinhas escorrerem das folhas como pequenos diamantes brilhando sob o sol que voltava a aparecer entre as nuvens.",
        illustration: {
          background: "fazenda",
          characters: [
            { characterId: "elefantinhoDoce", pose: "surpreso", position: "esquerda" },
            { characterId: "ursoBento", pose: "feliz", position: "direita" },
          ],
          props: ["nuvem"],
        },
      },
      {
        id: "cena-6",
        text:
          "As semanas passaram e, pouco a pouco, a horta foi se transformando. As cenouras empurraram suas cabecinhas laranjas para fora da terra, os tomates ficaram vermelhos e redondos, e as abobrinhas cresceram tão grandes que Doce precisou usar as duas trombas, quer dizer, a tromba toda, para carregar uma só. Bento não cabia em si de felicidade. — Olha só o que a gente conseguiu fazer trabalhando junto! Doce deu um abraço apertado no amigo, cuidando de não esmagá-lo com seu tamanho, e os dois dançaram uma dancinha boba de tanta alegria no meio da horta florida. Doce correu até sua casa e voltou com uma cesta enorme, pronta para a primeira colheita de verdade. Juntos, escolheram com cuidado quais vegetais já estavam maduros e quais ainda precisavam de mais alguns dias de sol, anotando tudo no caderninho de desenhos para não se confundirem. Ao erguer a primeira cenoura gigante para fora da terra, os dois soltaram um grito de vitória tão alto que até os passarinhos vizinhos vieram ver o que tinha acontecido.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "ursoBento", pose: "animado", position: "esquerda" },
            { characterId: "elefantinhoDoce", pose: "animado", position: "direita" },
          ],
          props: ["flor", "sol"],
        },
      },
      {
        id: "cena-7",
        text:
          "Para comemorar a colheita, Bento e Doce convidaram todos os vizinhos para um grande piquenique bem no meio da horta. Levaram uma cesta enorme com sopa de legumes fresquinhos, feita com tudo o que tinham plantado. Cada amigo que chegava ficava admirado com o tamanho das verduras e com o jeito carinhoso como os dois contavam a história de cada semente. — O segredo não foi só plantar — explicou Bento. — Foi cuidar todos os dias, com calma e sem desistir. Doce completou, sorrindo: — E fazer tudo isso junto com um bom amigo também ajudou bastante. Um dos vizinhos, encantado com a história, perguntou se poderiam fazer uma horta parecida no terreno ao lado, e Bento e Doce, generosos, prometeram ajudar a ensinar tudo o que tinham aprendido. Enquanto o sol se põe e o piquenique chegava ao fim, os dois amigos, cansados e felizes, já sonhavam com a próxima estação de plantio, imaginando quais novas verduras coloridas poderiam experimentar no ano seguinte.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "ursoBento", pose: "feliz", position: "esquerda" },
            { characterId: "elefantinhoDoce", pose: "feliz", position: "direita" },
          ],
          props: ["cestaPiquenique", "flor"],
        },
      },
    ],
    familyQuestion:
      "Já esperamos alguma coisa crescer ou acontecer com paciência? Como foi essa espera?",
  },
  {
    id: "a5-mel-caverna-brilhante",
    title: "Mel e o Segredo da Caverna Brilhante",
    synopsis:
      "A raposa Mel e a coruja Dadá exploram uma caverna misteriosa em busca de uma luz encantada que pode ajudar toda a floresta.",
    ageGroup: 5,
    category: "Aventuras",
    cover: {
      background: "cavernaAconchegante",
      characters: [
        { characterId: "raposaMel", pose: "animado", position: "esquerda" },
        { characterId: "corujaSabia", pose: "feliz", position: "direita" },
      ],
      props: ["lanterna"],
    },
    scenes: [
      {
        id: "cena-1",
        text:
          "Mel, a raposinha laranja de lenço amarelo, era conhecida por toda a floresta como a mais curiosa de todos os animais. Um dia, ela ouviu os mais velhos contarem sobre uma caverna no fim da trilha que guardava uma luz mágica, capaz de deixar as noites escuras da floresta mais seguras e bonitas. Ninguém tinha visto essa luz há muito tempo, e muitos já nem acreditavam que ela existia de verdade. Decidida, Mel foi até a árvore mais alta da floresta para pedir ajuda à sábia coruja Dadá, que conhecia quase todos os segredos daquele lugar e tinha óculos que a ajudavam a ver longe, mesmo no escuro. No caminho até a árvore de Dadá, Mel repassava mentalmente tudo o que tinha escutado dos mais velhos: que a luz só aparecia para quem tinha o coração curioso e cuidadoso, e que, ao longo dos anos, muitos tinham desistido da busca na primeira curva escura da trilha. Isso só deixava Mel ainda mais determinada a tentar, pois ela sempre gostou de provar, a si mesma, que conseguia ir além do que os outros imaginavam ser possível. Antes de partir, Mel passou pela sua própria toca e pegou um lenço extra e um punhadinho de bagas secas, guardando tudo em uma pequena bolsa de folhas que amarrou no pescoço. Sua mãe, vendo-a se preparar com tanta determinação, apenas sorriu e disse que confiava em sua filha corajosa, mas pediu que tivesse cuidado e voltasse antes do amanhecer, como sempre prometia fazer em suas pequenas aventuras pela floresta.",
        illustration: {
          background: "florestaDia",
          characters: [{ characterId: "raposaMel", pose: "animado", position: "centro" }],
          props: [],
        },
      },
      {
        id: "cena-2",
        text:
          "Dadá ouviu a história com atenção e ajeitou os óculos no bico. — Eu conheço essa lenda — disse ela. — Dizem que a luz mora bem no fundo da Caverna Aconchegante, cercada de pedras que brilham fraquinho. Mas ninguém se arriscou a entrar lá dentro há muitos anos. Mel sorriu, animada. — Então está na hora de alguém se arriscar! Dadá, que adorava uma boa aventura tanto quanto gostava de um bom livro, aceitou acompanhar a amiga. Preparam uma lanterna, um pouco de comida e partiram juntas pela trilha, decididas a descobrir se a lenda era mesmo verdade. No caminho, cruzaram com Bento, que estava colhendo bagas perto da trilha, e contaram sobre a aventura que estavam prestes a viver. Bento ficou preocupado e sugeriu que esperassem até a manhã seguinte, mas Mel explicou que, segundo a lenda, a luz só podia ser vista quando a lua estava bem alta no céu, então precisavam seguir enquanto ainda havia tempo. Bento, respeitando a decisão das amigas, prometeu que ficaria de olho na entrada da caverna até que voltassem em segurança.",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "corujaSabia", pose: "neutro", position: "esquerda" },
            { characterId: "raposaMel", pose: "feliz", position: "direita" },
          ],
          props: ["lanterna"],
        },
      },
      {
        id: "cena-3",
        text:
          "A entrada da caverna era estreita e escura, e por um instante Mel sentiu um friozinho na barriga. — E se a gente se perder lá dentro? — perguntou ela, olhando para o buraco escuro na pedra. Dadá acendeu a lanterna e piscou os olhos grandes, tranquilizando a amiga. — Por isso estamos juntas. Eu vejo bem no escuro, e você tem o faro mais apurado da floresta para sentir o caminho de volta. Com a lanterna na frente, as duas entraram devagar, ouvindo o eco dos próprios passos e sentindo o ar fresco e úmido da pedra ao redor. A certa altura, o chão ficou mais inclinado, e Mel precisou usar as garras para se segurar numa saliência de pedra, enquanto Dadá iluminava o caminho com cuidado para não ofuscar os olhos da amiga. Pequenos morcegos voaram baixinho por cima das duas cabeças, assustando Mel por um segundo, mas logo ela percebeu que eles também pareciam só curiosos com as visitantes, sem nenhuma intenção de fazer mal a ninguém.",
        illustration: {
          background: "cavernaAconchegante",
          characters: [
            { characterId: "raposaMel", pose: "triste", position: "esquerda" },
            { characterId: "corujaSabia", pose: "neutro", position: "direita" },
          ],
          props: ["lanterna"],
        },
      },
      {
        id: "cena-4",
        text:
          "Quanto mais fundo iam, mais o caminho se dividia em túneis diferentes, como um grande labirinto de pedra. Em um cruzamento, as duas pararam, sem saber qual caminho seguir. Dadá olhou para cima e notou um leve brilho dourado vindo de uma das passagens. — Olha ali — disse ela, apontando com a ponta da ala. — Aquele caminho parece diferente dos outros. Mel cheirou o ar com cuidado e sentiu um perfume doce de flores que não deveria existir dentro de uma caverna. — Vamos por ali — disse ela, confiante. — Acho que estamos chegando perto. O túnel escolhido era mais estreito que os outros, forçando as duas a andarem quase coladas uma na outra, ombro a ombro. Dadá ia descrevendo em voz baixa tudo o que suas vistas apuradas conseguiam notar nas paredes: pequenos cristais incrustados na pedra, gotas de água pingando ritmadamente de um teto distante, e um brilho cada vez mais forte logo mais adiante, que fazia o coração de Mel bater mais rápido de expectativa.",
        illustration: {
          background: "cavernaAconchegante",
          characters: [
            { characterId: "corujaSabia", pose: "surpreso", position: "esquerda" },
            { characterId: "raposaMel", pose: "neutro", position: "direita" },
          ],
          props: [],
        },
      },
      {
        id: "cena-5",
        text:
          "No fim do túnel, as duas encontraram uma caverna enorme, com paredes cobertas de pedrinhas que brilhavam em várias cores, como se fossem estrelas que tivessem decidido morar debaixo da terra. No centro, havia um pequeno lago com uma luz suave saindo da água. Mel e Dadá ficaram paradas por um instante, maravilhadas com a beleza daquele lugar escondido. — A lenda era verdade — sussurrou Dadá. Mel se aproximou da água, encantada, e viu o reflexo das pedrinhas dançando na superfície, formando desenhos que pareciam contar histórias antigas da floresta. Dadá explicou, baixinho, que aquelas pedrinhas brilhantes provavelmente guardavam luz do sol que entrava por pequenas fendas durante o dia, soltando-a de volta durante a noite, como uma espécie de presente guardado para quem tivesse paciência de chegar até ali. Mel sentou-se na beira do lago, deixando a água fresca tocar a ponta de suas patinhas, enquanto observava o teto da caverna brilhar como se fosse um céu próprio, só delas, escondido debaixo da terra. Dadá, sempre curiosa, voou em círculos pela caverna, catalogando mentalmente cada formato de pedra e cada reflexo diferente, como se estivesse escrevendo um livro imaginário sobre aquela descoberta. — Precisamos lembrar de cada detalhe — disse ela, animada. — Um lugar assim merece ser guardado não só na memória, mas contado com todo o cuidado que merece.",
        illustration: {
          background: "cavernaAconchegante",
          characters: [
            { characterId: "raposaMel", pose: "surpreso", position: "esquerda" },
            { characterId: "corujaSabia", pose: "feliz", position: "direita" },
          ],
          props: ["estrelas"],
        },
      },
      {
        id: "cena-6",
        text:
          "Dadá, com sua sabedoria, entendeu o que aquele lugar precisava: não que levassem a luz embora, mas que contassem para todos que ela ainda existia, para que a floresta voltasse a cuidar e proteger aquele cantinho especial. — Se levarmos a luz, a caverna fica escura para sempre — explicou ela. — Mas se contarmos a verdade, todos vão ajudar a mantê-la segura e brilhante. Mel pensou um pouco e concordou: algumas coisas mágicas são mais bonitas quando ficam exatamente onde pertencem, cuidadas por quem as encontra. Antes de partir, as duas decidiram deixar uma pequena marca combinada na entrada do túnel certo, apenas um desenho discreto de folha riscado na pedra, para que, se um dia precisassem voltar ou guiar alguém de confiança até ali, soubessem exatamente qual caminho seguir sem revelar o segredo a qualquer um que passasse por perto.",
        illustration: {
          background: "cavernaAconchegante",
          characters: [
            { characterId: "corujaSabia", pose: "neutro", position: "esquerda" },
            { characterId: "raposaMel", pose: "feliz", position: "direita" },
          ],
          props: ["estrelas"],
        },
      },
      {
        id: "cena-7",
        text:
          "As duas voltaram para a floresta e contaram para todos os animais sobre a caverna brilhante, sem revelar o caminho exato, para que ela continuasse protegida e secreta. A partir daquele dia, toda a floresta passou a cuidar da trilha com mais carinho, sem derrubar árvores por ali nem sujar o caminho, como um jeito de agradecer àquela luz escondida. Mel se tornou famosa por sua coragem, mas sempre dizia que a verdadeira descoberta daquele dia não tinha sido a luz, e sim perceber como é bom explorar o mundo ao lado de uma boa amiga. Bento, que esperava ansioso na entrada da caverna, recebeu as duas com um abraço apertado de alívio, e os três voltaram juntos pela trilha enquanto Mel contava, com todos os detalhes, cada momento emocionante daquela aventura subterrânea. A partir daquele dia, sempre que alguém contava a lenda da luz da caverna, Mel apenas sorria, guardando seu segredo com o mesmo cuidado com que a floresta passou a proteger aquele cantinho tão especial.",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "raposaMel", pose: "feliz", position: "esquerda" },
            { characterId: "corujaSabia", pose: "feliz", position: "direita" },
          ],
          props: [],
        },
      },
    ],
    familyQuestion:
      "Você conhece algum lugar especial que você gosta de cuidar e proteger?",
  },
  {
    id: "a5-luna-nao-quer-dividir",
    title: "Luna Não Quer Dividir",
    synopsis:
      "Luna recebe um brinquedo novo e descobre, com a ajuda de Bolinha, que compartilhar pode tornar as brincadeiras ainda melhores.",
    ageGroup: 5,
    category: "Sentimentos",
    cover: {
      background: "quartoDia",
      characters: [
        { characterId: "gatinhaLuna", pose: "triste", position: "esquerda" },
        { characterId: "cachorrinhoBolinha", pose: "neutro", position: "direita" },
      ],
      props: ["bola"],
    },
    scenes: [
      {
        id: "cena-1",
        text:
          "Luna, a gatinha cinza de laço roxo, ganhou de aniversário um carrinho vermelho que corria bem rápido quando era empurrado. Era o brinquedo mais bonito que ela já tinha visto, e assim que o desembrulhou, não quis soltar das patinhas nem por um minuto. Correu para o quarto, fechou a porta e passou a tarde toda brincando sozinha, fazendo o carrinho dar voltas e mais voltas pelo tapete. Lá fora, ela podia ouvir Bolinha, seu amigo cachorrinho, brincando com uma bola no quintal, chamando-a para se juntar à brincadeira, mas Luna fingiu não escutar, com medo de que ele quisesse usar o carrinho novo. O carrinho tinha rodinhas de verdade que giravam suave, um buzinazinha que fazia um som agudo e engraçado, e um brilho vermelho tão bonito que parecia novo mesmo depois de horas de brincadeira. Luna repetia para si mesma que não estava sendo malcriada, só queria curtir seu presente um pouquinho mais antes de precisar compartilhar com qualquer outro bichinho da vizinhança. Ainda assim, de vez em quando, ela espiava pela janela, vendo Bolinha se divertir sozinho com a bola surrada, e sentia uma pontinha de culpa que tentava ignorar. Durante o jantar, sua mãe perguntou gentilmente por que ela não tinha convidado Bolinha para brincar com o carrinho novo, já que os dois sempre dividiam tudo desde pequenos. Luna só deu de ombros, murmurando que ainda estava se acostumando com o presente, mas por dentro sabia que aquela não era bem a verdade completa da história.",
        illustration: {
          background: "quartoDia",
          characters: [{ characterId: "gatinhaLuna", pose: "feliz", position: "centro" }],
          props: [],
        },
      },
      {
        id: "cena-2",
        text:
          "No dia seguinte, Bolinha apareceu na porta de Luna, com o rabo abanando de alegria. — Posso ver seu carrinho novo? Fiquei curioso o dia todo! Luna segurou o carrinho com força contra o peito. — É só meu. Se eu deixar você brincar, pode estragar. Bolinha ficou com as orelhas murchas, triste com a resposta, mas não discutiu. Apenas disse um simples está bem, então, e foi embora devagar, cabisbaixo. Luna ficou sozinha no quarto outra vez, e por algum motivo, empurrar o carrinho pelo tapete já não parecia tão divertido quanto antes. Ela tentou fazer o carrinho dar voltas mais rápidas, inventar pistas de obstáculo com os travesseiros, até imaginar que o carrinho falava e tinha aventuras próprias, mas nada daquilo enchia o quarto da mesma alegria de antes. O silêncio, que antes parecia só tranquilidade, agora parecia simplesmente vazio, e Luna não conseguia entender por que um brinquedo tão bonito de repente parecia ter perdido um pouco do brilho.",
        illustration: {
          background: "quartoDia",
          characters: [
            { characterId: "gatinhaLuna", pose: "neutro", position: "esquerda" },
            { characterId: "cachorrinhoBolinha", pose: "triste", position: "direita" },
          ],
          props: [],
        },
      },
      {
        id: "cena-3",
        text:
          "Luna passou o resto do dia brincando sozinha, mas sentia um aperto estranho no peito. Lembrou de todas as vezes em que Bolinha tinha dividido com ela a bola mais nova, o travesseiro mais fofo e até o último pedaço de biscoito que ele mais gostava. Ela nunca tinha pensado em como Bolinha se sentia quando compartilhava as coisas dele. Pela primeira vez, Luna se perguntou se guardar o carrinho só para si mesma estava realmente valendo a pena, já que brincar sozinha, no fim das contas, não era tão divertido quanto parecia no começo. Luna se levantou e foi até a janela, olhando o quintal vazio onde, normalmente, veria Bolinha correndo atrás da bola. Lembrou também de quando ela mesma tinha emprestado seu cobertor favorito para ele numa noite fria, e de como aquilo tinha feito os dois se sentirem mais próximos, não mais pobres por terem dividido algo querido. Com o coração mais pesado do que gostaria de admitir, decidiu que precisava fazer alguma coisa antes que aquele mal-estar crescesse ainda mais. Ficou ali, sentada no chão do quarto por um bom tempo, segurando o carrinho vermelho no colo e observando seu próprio reflexo embaçado na lataria brilhante. Pensou em como seria estranho pedir desculpas, já que nunca tinha feito isso antes por causa de um brinquedo, mas também sabia que guardar aquele sentimento ruim por dentro só ia deixar as coisas piores entre ela e seu melhor amigo.",
        illustration: {
          background: "quartoDia",
          characters: [{ characterId: "gatinhaLuna", pose: "triste", position: "centro" }],
          props: [],
        },
      },
      {
        id: "cena-4",
        text:
          "Decidida a conversar, Luna pegou o carrinho vermelho e foi até a casa de Bolinha, com o coração batendo um pouco mais rápido do que o normal. Encontrou o amigo sentado no quintal, brincando sozinho com sua velha bola surrada. — Desculpa por ontem — disse Luna, baixinho. — Fiquei com medo de dividir e acabei te deixando triste sem querer. Bolinha olhou para ela, surpreso com o pedido de desculpas, e seu rabo começou a abanar outra vez, devagar. — Tudo bem, Luna. Eu também fico com medo de dividir às vezes. Sentaram-se os dois na soleira da porta, e Bolinha confessou que, quando ganhou sua bolinha surrada de aniversário, também demorou um tempo até conseguir emprestá-la para outros amigos brincarem. — Acho que todo mundo sente isso de vez em quando — disse ele, dando de ombros. — A gente só precisa lembrar que um amigo de verdade não vai estragar nada de propósito. Luna sentiu um alívio enorme ao perceber que não era a única a sentir aquele medinho bobo.",
        illustration: {
          background: "parquinho",
          characters: [
            { characterId: "gatinhaLuna", pose: "triste", position: "esquerda" },
            { characterId: "cachorrinhoBolinha", pose: "surpreso", position: "direita" },
          ],
          props: ["bola"],
        },
      },
      {
        id: "cena-5",
        text:
          "Luna estendeu o carrinho para o amigo. — Quer brincar comigo agora? Prometo que não vou ficar brava se você quiser dirigir também. Bolinha aceitou na hora, com os olhinhos brilhando de alegria. Os dois passaram a tarde inteira inventando pistas de corrida no quintal, usando pedrinhas para marcar o caminho e fazendo o carrinho vermelho disputar corridas contra a velha bola surrada de Bolinha, que ele empurrava correndo ao lado. As risadas dos dois ecoavam pelo quintal, muito mais altas e felizes do que quando Luna brincava sozinha, trancada no quarto. Em um momento da brincadeira, a bola surrada de Bolinha ficou presa debaixo de um arbusto, e os dois precisaram trabalhar juntos, Luna usando as patinhas ágeis para alcançar o espaço estreito enquanto Bolinha guiava com instruções animadas de fora. Quando finalmente conseguiram resgatar a bola, caíram na grama rindo, sem nem lembrar mais qual brinquedo era de quem, porque naquele momento tudo parecia pertencer à brincadeira dos dois juntos. Em um momento da tarde, Bolinha pediu para guiar o carrinho por uma pista de obstáculos que tinha montado com gravetos e pedrinhas, e Luna, sentada ao lado, torcia animadamente, gritando instruções e aplaudindo cada curva bem-feita. Ela percebeu, maravilhada, que ver o amigo se divertir com o carrinho era quase tão gostoso quanto brincar com ele mesma, talvez até um pouquinho mais.",
        illustration: {
          background: "parquinho",
          characters: [
            { characterId: "gatinhaLuna", pose: "animado", position: "esquerda" },
            { characterId: "cachorrinhoBolinha", pose: "animado", position: "direita" },
          ],
          props: ["bola"],
        },
      },
      {
        id: "cena-6",
        text:
          "Quando o sol começou a se pôr, os dois amigos se sentaram, cansados e felizes, encostados numa árvore do quintal. — Foi muito mais divertido brincar junto — disse Luna, pensativa. — Acho que eu só não queria dividir porque tinha medo de perder alguma coisa. Bolinha sorriu e encostou a cabeça no ombro da amiga. — Dividir não é perder, Luna. É ganhar uma brincadeira duas vezes melhor. Luna riu e prometeu, de coração, que a partir daquele dia tentaria dividir mais, mesmo quando sentisse aquele friozinho de medo no começo. Nos dias seguintes, Luna passou a levar o carrinho vermelho para o quintal sempre que ia brincar, convidando não só Bolinha, mas outros amiguinhos da vizinhança para experimentar uma volta rápida. Descobriu que, ao contrário do que temia, o carrinho não quebrou, não estragou, e continuava brilhante como no primeiro dia, só que agora cheio de boas lembranças de risadas compartilhadas em cada rodinha gasta pelo uso feliz.",
        illustration: {
          background: "parquinho",
          characters: [
            { characterId: "gatinhaLuna", pose: "feliz", position: "esquerda" },
            { characterId: "cachorrinhoBolinha", pose: "feliz", position: "direita" },
          ],
          props: ["sol"],
        },
      },
    ],
    familyQuestion:
      "Tem alguma coisa sua que é difícil de dividir com outras pessoas? Por quê?",
  },
  {
    id: "a5-tom-corrida-das-nuvens",
    title: "Tom e a Corrida das Nuvens",
    synopsis:
      "Tom participa de uma corrida de barquinhos pelo rio e aprende que ajudar um amigo pode valer mais do que vencer.",
    ageGroup: 5,
    category: "Amizade",
    cover: {
      background: "rioLagoa",
      characters: [
        { characterId: "patinhoTom", pose: "animado", position: "esquerda" },
        { characterId: "passarinhoPipo", pose: "feliz", position: "direita" },
      ],
      props: ["nuvem"],
    },
    scenes: [
      {
        id: "cena-1",
        text:
          "Tom, o patinho amarelo de boina verde, era o nadador mais rápido de toda a lagoa, e todo verão participava com orgulho da Corrida das Folhas, em que os animais competiam flutuando em pequenas folhas-barco pelo riacho. Naquele ano, Tom treinou mais do que nunca, nadando todas as tardes para ficar mais forte e mais veloz. Ele sonhava em finalmente ganhar a fitinha azul de campeão, que há dois anos ficava sempre com outro competidor. Na manhã da corrida, Tom chegou cedo à beira do rio, ajeitou a boina e sentiu o coração bater forte de ansiedade e empolgação. Seus amigos da lagoa já estavam reunidos na margem, testando suas folhas-barco e apostando quem chegaria primeiro à velha pedra redonda que marcava a linha de chegada, um pouco depois da curva do riacho. Tom escolheu com cuidado a folha mais larga e firme que encontrou, testando sua flutuação na água rasa antes de se juntar aos outros competidores, ajeitando a boina verde com um gesto confiante que escondia, só um pouquinho, o nervosismo na barriga. Sua mãe, observando da margem junto com os outros patos mais velhos, gritou um último conselho antes do início: — Lembre-se de respirar e de se divertir, campeão ou não! Tom assentiu, sorrindo, mas por dentro só conseguia pensar na fitinha azul que, segundo ele, já deveria ter o seu nome escrito há muito tempo.",
        illustration: {
          background: "rioLagoa",
          characters: [{ characterId: "patinhoTom", pose: "animado", position: "centro" }],
          props: [],
        },
      },
      {
        id: "cena-2",
        text:
          "A corrida começou com um grande alvoroço, e logo Tom ficou na frente de todos, suas patinhas remando com força através da água fresca do rio. O vento soprava e as nuvens no céu pareciam acompanhar a corrida de cima. No meio do percurso, Tom ouviu um pedido de ajuda: Pipo, o passarinho azul, tinha caído da sua folha-barco e estava se esforçando para se manter boiando, sem conseguir voar porque suas penas estavam molhadas. — Socorro! — gritava Pipo, batendo as asinhas encharcadas sem conseguir decolar. A correnteza, ali naquele ponto do rio, era mais forte do que de costume, e cada segundo que passava empurrava Pipo mais para o meio da água, longe das margens onde poderia se segurar em algum galho caído. Os outros competidores, concentrados demais em vencer, nem notaram o pedido de socorro, e por um instante pareceu que ninguém mais além de Tom tinha escutado aquela vozinha assustada competindo com o som da água corrente.",
        illustration: {
          background: "rioLagoa",
          characters: [
            { characterId: "patinhoTom", pose: "animado", position: "esquerda" },
            { characterId: "passarinhoPipo", pose: "surpreso", position: "direita" },
          ],
          props: [],
        },
      },
      {
        id: "cena-3",
        text:
          "Tom olhou para frente e viu a linha de chegada não muito longe. Se continuasse nadando, tinha boas chances de vencer a corrida pela primeira vez. Mas olhando para trás, viu Pipo se debatendo na água, cada vez mais cansado. Por um segundo, Tom hesitou, pensando em seu sonho de ganhar a fitinha azul. Mas o medo nos olhinhos de Pipo falou mais alto, e Tom virou sua folha-barco, remando de volta na direção do amigo em apuros, mesmo sabendo que isso custaria todo o seu lugar na corrida. Remar contra a correnteza era muito mais difícil do que remar a favor dela, e os bracinhos de Tom começaram a cansar rapidamente, mas ele apertou os dentes e continuou, pensando apenas em chegar perto do amigo antes que a água o levasse para mais longe ainda. Cada remada parecia durar uma eternidade, e o som da torcida na linha de chegada foi ficando cada vez mais distante atrás dele. Por um instante, Tom imaginou o rosto desapontado dos outros patinhos quando descobrissem que ele tinha desistido da corrida, mas logo essa preocupação foi afogada por algo mais forte: o medo de que algo pior pudesse acontecer ao pequeno amigo caso ele não chegasse a tempo de ajudar.",
        illustration: {
          background: "rioLagoa",
          characters: [
            { characterId: "patinhoTom", pose: "triste", position: "direita" },
            { characterId: "passarinhoPipo", pose: "triste", position: "esquerda" },
          ],
          props: [],
        },
      },
      {
        id: "cena-4",
        text:
          "Com cuidado, Tom ajudou Pipo a subir em sua folha-barco, equilibrando os dois com muito jeito para não virarem na água. — Vou te levar até a margem — disse Tom, remando com o que lhe restava de força. Pipo, encharcado e agradecido, se encolheu ao lado do amigo. — Você vai perder a corrida por minha causa — disse ele, com a voz chorosa. Tom deu de ombros, sorrindo, mesmo cansado. — Tem corrida todo ano, Pipo. Amigo em apuros, só tem um. Pipo ficou calado por um instante, olhando para o amigo que remava com tanto esforço só para salvá-lo, e sentiu uma gratidão tão grande que quase esqueceu do frio que sentia por estar todo encharcado. — Prometo que, da próxima vez, vou pedir para alguém revisar minha folha-barco antes de entrar na água — disse ele, tentando soar engraçado para aliviar a tensão. Tom riu, mesmo cansado, e os dois continuaram a jornada de volta, mais lentos, mas em segurança. No caminho, Pipo insistiu em remar também, usando suas patinhas pequenas para ajudar, mesmo sabendo que não fazia muita diferença na velocidade. Tom achou graça do esforço do amigo e, para animá-lo, começou a cantar uma música boba sobre patos heróis, fazendo os dois rirem tanto que quase esqueceram do cansaço nos bracinhos. Quando finalmente a margem apareceu à vista, Pipo, já com as penas quase secas, insistiu em caminhar o resto do trajeto por conta própria, só para mostrar que estava bem. Tom ficou observando de perto, pronto para ajudar a qualquer sinal de dificuldade, mas o amigo conseguiu chegar com as próprias patinhas firmes, orgulhoso de sua pequena recuperação. Os outros patinhos da corrida, já reunidos na margem, aplaudiram a chegada dos dois, entendendo perfeitamente, sem que ninguém precisasse explicar muito, o que tinha realmente acontecido ali no meio do rio.",
        illustration: {
          background: "rioLagoa",
          characters: [
            { characterId: "patinhoTom", pose: "neutro", position: "esquerda" },
            { characterId: "passarinhoPipo", pose: "triste", position: "direita" },
          ],
          props: [],
        },
      },
      {
        id: "cena-5",
        text:
          "Quando os dois finalmente chegaram à margem, bem depois de todos os outros competidores, Tom esperava ouvir risadas ou desapontamento. Em vez disso, encontrou todos os animais da corrida reunidos, aplaudindo com entusiasmo. O juiz da competição, um sapo de óculos grandes, se aproximou sorrindo. — Nunca tínhamos visto ninguém desistir da própria vitória para salvar um amigo. Isso merece uma fitinha especial. Tom ficou tão surpreso que quase esqueceu de agradecer, enquanto Pipo, já seco e recuperado, batia palmas ao lado dele com orgulho. A mãe de Pipo, que tinha assistido tudo da margem, se aproximou e abraçou Tom com força, agradecendo por ter salvado seu filho mesmo correndo o risco de perder a corrida mais importante do ano. Alguns dos competidores que tinham cruzado a linha de chegada antes também vieram parabenizar Tom, reconhecendo que aquele gesto tinha sido mais impressionante do que qualquer recorde de velocidade.",
        illustration: {
          background: "rioLagoa",
          characters: [
            { characterId: "patinhoTom", pose: "surpreso", position: "esquerda" },
            { characterId: "passarinhoPipo", pose: "animado", position: "direita" },
          ],
          props: [],
        },
      },
      {
        id: "cena-6",
        text:
          "O juiz entregou a Tom uma fitinha dourada, ainda mais bonita que a azul de campeão, com a palavra Coragem escrita bem no meio. Tom a pendurou com orgulho no pescoço e, para sua surpresa, descobriu que se sentia mais feliz com aquela fita do que imaginava sentir-se com a de vencedor. — Você vai competir de novo no ano que vem? — perguntou Pipo, voando ao lado do amigo enquanto voltavam para casa. Tom riu. — Só se você prometer usar um colete, da próxima vez. Pipo prometeu solenemente, levantando uma ala em juramento, e os dois riram tanto que quase caíram de novo na água, dessa vez de propósito, só para refrescar as patinhas cansadas no fim daquele dia tão cheio de emoções. Quando chegaram em casa, Tom pendurou a fitinha dourada bem no centro de sua parede, ao lado de um pequeno desenho que fez de Pipo sorrindo, para lembrar sempre daquele dia em que aprendeu que a verdadeira vitória, às vezes, tem um formato bem diferente do que a gente espera.",
        illustration: {
          background: "ceuNuvens",
          characters: [
            { characterId: "patinhoTom", pose: "feliz", position: "esquerda" },
            { characterId: "passarinhoPipo", pose: "feliz", position: "direita" },
          ],
          props: ["nuvem"],
        },
      },
    ],
    familyQuestion:
      "Você acha que ajudar um amigo pode ser mais importante do que ganhar? Por quê?",
  },
  {
    id: "a5-noite-dos-sonhos-mimosa",
    title: "A Noite dos Sonhos de Mimosa",
    synopsis:
      "Mimosa não consegue dormir e, com a ajuda de Noz, descobre um jeito tranquilo de acalmar a imaginação antes da hora de dormir.",
    ageGroup: 5,
    category: "Hora de Dormir",
    cover: {
      background: "quartoNoite",
      characters: [
        { characterId: "ursinhaMimosa", pose: "sonolento", position: "esquerda" },
        { characterId: "esquilaNoz", pose: "feliz", position: "direita" },
      ],
      props: ["lua", "estrelas"],
    },
    scenes: [
      {
        id: "cena-1",
        text:
          "Mimosa, a ursinha polar branquinha de cachecol rosa, estava deitada em sua cama fofa, mas, por mais que tentasse, não conseguia fechar os olhos. Sua cabeça estava cheia de pensamentos agitados: lembrava da brincadeira do dia, pensava no que faria amanhã, e se perguntava mil coisas sobre as estrelas que brilhavam pela janela. Ela se virou de um lado, depois do outro, afundou o rosto no travesseiro e suspirou bem fundo. A casa estava silenciosa, e todos os outros animais da floresta já estavam dormindo, mas o sono de Mimosa parecia estar escondido em algum lugar bem distante. Ela tentou contar carneirinhos pulando a cerca, como a mamãe tinha ensinado, mas no décimo carneirinho já tinha perdido a conta e voltado a pensar em outra coisa qualquer. Tentou também apertar bem forte o ursinho de pelúcia contra o peito, respirar fundo três vezes, e até cantarolar baixinho a música preferida da hora de dormir, mas nada parecia convencer seus olhos a ficarem fechados por mais do que alguns segundos. Pela janela, a lua cheia iluminava o quarto com uma luz prateada suave, desenhando sombras compridas e curiosas no teto, que Mimosa ficava observando, tentando descobrir se pareciam mais com nuvens, com montanhas ou com animais adormecidos. Quanto mais ela olhava para aquelas formas, mais sua mente parecia inventar novas histórias sobre cada uma delas, o que, de certo jeito, não ajudava nada a trazer o sono.",
        illustration: {
          background: "quartoNoite",
          characters: [{ characterId: "ursinhaMimosa", pose: "triste", position: "centro" }],
          props: ["lua"],
        },
      },
      {
        id: "cena-2",
        text:
          "Cansada de rolar na cama, Mimosa decidiu ir até a janela, só para dar uma olhadinha nas estrelas. Foi quando viu, do outro lado do quintal, Noz, a esquilinha de gorro vermelho, também acordada, organizando suas nozes guardadas para o inverno. — Você também não consegue dormir? — perguntou Mimosa, baixinho, pela janela aberta. Noz sorriu e se aproximou. — De vez em quando, minha cabeça fica cheia de pensamentos correndo de um lado para o outro, como esquilos apressados numa árvore. Mimosa riu baixinho da comparação, achando graça de imaginar um bando de pensamentos pequenininhos correndo de galho em galho dentro de sua própria cabeça. — E o que você faz quando isso acontece? — perguntou ela, curiosa, se apoiando no batente da janela para ouvir melhor a resposta da amiga, que parecia ter um jeito especial de lidar com aquela sensação tão incômoda.",
        illustration: {
          background: "quartoNoite",
          characters: [
            { characterId: "ursinhaMimosa", pose: "neutro", position: "esquerda" },
            { characterId: "esquilaNoz", pose: "neutro", position: "direita" },
          ],
          props: ["lua", "estrelas"],
        },
      },
      {
        id: "cena-3",
        text:
          "Noz contou que, quando isso acontecia com ela, tinha um truque: imaginava uma cesta grande e, um por um, colocava cada pensamento apressado dentro dela, guardando para pensar com calma no dia seguinte. — É como guardar as nozes para o inverno — explicou ela. — Você não precisa usar todas agora. Pode guardar algumas para depois. Mimosa achou a ideia interessante e decidiu experimentar, imaginando uma cesta de palha bem grande esperando por seus pensamentos inquietos. Noz explicou, com paciência, que a cesta imaginária precisava ser bem grande e confortável, forrada com um paninho macio só de imaginação, e que cada pensamento devia ser colocado ali com cuidado, como se fosse mesmo um objeto de verdade sendo guardado. — O importante é confiar que ele vai estar lá esperando, exatamente como você deixou, até você decidir pensar nele de novo — completou ela, com um sorriso tranquilo. Mimosa perguntou se a cesta também podia guardar pensamentos bons, não só os que incomodavam, e Noz riu, achando a pergunta muito fofa. — Claro que pode! Mas os pensamentos bons geralmente não incomodam tanto a ponto de impedir o sono, então pode deixá-los passear livres pela sua cabeça enquanto você dorme.",
        illustration: {
          background: "quartoNoite",
          characters: [
            { characterId: "esquilaNoz", pose: "feliz", position: "esquerda" },
            { characterId: "ursinhaMimosa", pose: "neutro", position: "direita" },
          ],
          props: ["estrelas"],
        },
      },
      {
        id: "cena-4",
        text:
          "De volta à cama, Mimosa fechou os olhos e começou a imaginar a cesta. Primeiro, guardou o pensamento sobre a brincadeira do dia. Depois, guardou a curiosidade sobre as estrelas. Guardou também a pergunta sobre o que comeria no café da manhã, e o pensamento bobo sobre se as nuvens tinham gosto de algodão doce. A cada pensamento guardado, Mimosa sentia seu corpo ficar um pouquinho mais pesado e relaxado sobre o colchão, como se estivesse afundando gentilmente em uma nuvem fofinha. Alguns pensamentos eram mais difíceis de guardar do que outros, especialmente aquele sobre uma pequena discussão que tinha tido com sua amiga Luna naquela tarde, mas Mimosa respirou fundo e, com cuidado extra, colocou também esse pensamento na cesta, prometendo a si mesma que conversaria com Luna assim que amanhecesse, para resolverem tudo com calma. Cada pensamento guardado parecia deixar um espacinho vazio e leve dentro de sua cabeça, como se estivesse arrumando uma gaveta cheia de coisas espalhadas, colocando cada uma no seu devido lugar. Depois de guardar o décimo pensamento, Mimosa já sentia as pálpebras ficarem pesadas, pesando um pouquinho mais a cada vez que ela as fechava. Do lado de fora, o vento balançava gentilmente os galhos mais altos das árvores, criando um som suave e constante, quase como uma canção de ninar natural que a floresta inteira parecia cantar só para ela. Mimosa se aconchegou ainda mais embaixo do cobertor, puxando-o até o queixo, sentindo-se protegida e segura naquele cantinho quentinho do mundo. Foi assim, entre o som do vento e o peso gostoso do sono finalmente chegando, que Mimosa adormeceu profundamente, sem nem perceber o exato momento em que seus olhos se fecharam de vez até a manhã seguinte. Do outro lado do quintal, Noz também já dormia tranquila em sua própria toca, cercada por suas nozes bem guardadas, sonhando talvez com a mesma cesta imaginária que tinha ensinado à amiga a usar naquela noite tão especial, as duas descansando em paz sob o mesmo céu estrelado que cobria toda a floresta silenciosa.",
        illustration: {
          background: "quartoNoite",
          characters: [{ characterId: "ursinhaMimosa", pose: "sonolento", position: "centro" }],
          props: ["estrelas", "lua"],
        },
      },
      {
        id: "cena-5",
        text:
          "Quando a cesta imaginária já estava bem cheinha, Mimosa percebeu que sua mente tinha ficado quietinha, como a floresta depois que todos os passarinhos já tinham ido dormir. Ela respirou fundo, devagar, sentindo o cobertor quentinho contra o corpo e o cheiro gostoso de travesseiro limpo. Pela janela, viu Noz apagando a luz de sua própria casinha na árvore, provavelmente usando o mesmo truque para dormir tranquila também. A casa toda estava tão silenciosa que Mimosa conseguia ouvir apenas o som suave do vento passando pelas frestas da janela e o tique-taque distante e aconchegante do relógio da sala. Seu corpo parecia cada vez mais pesado contra o colchão, os músculos relaxando um por um, desde a ponta das orelhas até as patinhas enroladas sob o cobertor quentinho.",
        illustration: {
          background: "quartoNoite",
          characters: [{ characterId: "ursinhaMimosa", pose: "sonolento", position: "centro" }],
          props: ["lua", "estrelas"],
        },
      },
      {
        id: "cena-6",
        text:
          "Na manhã seguinte, Mimosa encontrou Noz no caminho da floresta e contou, animada, que tinha dormido a noite toda sem despertar nenhuma vez. — Funcionou de verdade! — disse ela, sorrindo. Noz riu e ajeitou seu gorro vermelho. — Eu sabia que ia funcionar. Os pensamentos sempre esperam quietinhos na cesta até você estar pronta para pensar neles de novo. Desde aquela noite, sempre que a cabeça de Mimosa ficava cheia demais de pensamentos, ela fechava os olhos e imaginava sua cesta especial, esperando pacientemente até o sono chegar. Com o tempo, Mimosa até ensinou o truque da cesta para outros filhotes da floresta que também tinham dificuldade para dormir, sentindo um orgulho enorme em poder ajudar alguém do mesmo jeito que Noz tinha ajudado ela. E assim, noite após noite, a pequena ursinha polar aprendeu que às vezes a solução para uma cabeça cheia de pensamentos não é apagá-los de uma vez, mas simplesmente dar a eles um lugar tranquilo para esperar.",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "ursinhaMimosa", pose: "feliz", position: "esquerda" },
            { characterId: "esquilaNoz", pose: "feliz", position: "direita" },
          ],
          props: [],
        },
      },
    ],
    familyQuestion:
      "Você tem algum jeito especial de deixar a cabeça mais calminha antes de dormir?",
  },
  {
    id: "a5-coco-concerto-dos-sapos",
    title: "Coco e o Concerto dos Sapos",
    synopsis:
      "Coco está nervoso para cantar no concerto da lagoa e descobre, com a ajuda de Luna, que a coragem pode crescer pouco a pouco.",
    ageGroup: 5,
    category: "Animais",
    cover: {
      background: "rioLagoa",
      characters: [
        { characterId: "sapinhoCoco", pose: "surpreso", position: "esquerda" },
        { characterId: "gatinhaLuna", pose: "feliz", position: "direita" },
      ],
      props: ["flor"],
    },
    scenes: [
      {
        id: "cena-1",
        text:
          "Coco, o sapinho verde de boné laranja, tinha o canto mais bonito de toda a lagoa, mesmo que poucos soubessem disso, porque ele só cantava quando estava completamente sozinho, escondido entre as folhas de vitória-régia. Todos os anos acontecia o Grande Concerto da Lagoa, em que os animais se apresentavam para toda a vizinhança, mas Coco nunca tinha criado coragem de participar. Naquele ano, para sua surpresa, a organizadora do concerto, uma garça elegante, ouviu Coco cantarolando escondido e o convidou, na hora, para se apresentar na noite do concerto. A garça explicou que tinha parado para beber água bem perto das vitórias-régias, atraída por uma melodia tão bonita que, no começo, pensou ser algum passarinho raro escondido entre as folhas. Quando descobriu que era apenas um sapinho comum cantando sozinho, ficou ainda mais impressionada, e insistiu, com um sorriso gentil, que talento como aquele não deveria ficar escondido para sempre. Coco ficou tão sem jeito que quase pulou direto para dentro da água da lagoa, mas a garça insistiu, explicando com calma que o concerto ainda era dentro de uma semana, tempo suficiente para ele se preparar, se quisesse mesmo tentar. — Pensa com cuidado — disse ela, antes de voar para organizar os próximos convites. — Mas eu realmente adoraria ouvir você cantar de novo, dessa vez para todo mundo.",
        illustration: {
          background: "rioLagoa",
          characters: [{ characterId: "sapinhoCoco", pose: "surpreso", position: "centro" }],
          props: ["flor"],
        },
      },
      {
        id: "cena-2",
        text:
          "Coco ficou tão nervoso que quase pulou dentro da própria lagoa de susto. — Eu, cantar na frente de todo mundo? — perguntou ele, com a voz tremendo. Foi correndo contar a novidade para Luna, sua amiga gatinha, que morava perto da margem. Luna ficou radiante com a notícia. — Isso é maravilhoso, Coco! Sua voz é linda! Mas Coco só conseguia pensar em todas as coisas que poderiam dar errado: e se ele esquecesse a letra, e se sua voz travasse, e se todo mundo risse dele? Ele passou a noite toda rolando de um lado para o outro sobre sua folha de vitória-régia, imaginando cada coisa horrível que poderia acontecer: a voz travando no meio da música, o boné caindo bem na hora errada, ou pior ainda, ninguém aplaudindo no final. Quanto mais pensava naquilo, mais seu estômago se enchia de borboletas nervosas, e ele quase decidiu, ali mesmo, desistir de participar do concerto.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "sapinhoCoco", pose: "triste", position: "esquerda" },
            { characterId: "gatinhaLuna", pose: "feliz", position: "direita" },
          ],
          props: [],
        },
      },
      {
        id: "cena-3",
        text:
          "Luna percebeu o medo do amigo e teve uma ideia. — Que tal começarmos pequeno? Você canta primeiro só para mim, aqui no jardim, onde ninguém mais está ouvindo. Coco respirou fundo e, depois de muita insistência carinhosa, concordou. Sua voz saiu baixinha e trêmula no começo, mas, aos poucos, foi ganhando força, até preencher todo o jardim com um som suave e bonito. Quando terminou, Luna estava com os olhinhos brilhando de emoção. — Isso foi incrível, Coco. De verdade. Coco sentiu o rosto esquentar de orgulho e vergonha ao mesmo tempo, sem saber bem onde colocar as patinhas de tanta emoção. — Você achou mesmo bonito, ou só está sendo gentil comigo? — perguntou ele, ainda meio inseguro. Luna riu e segurou as patinhas dele com firmeza. — Coco, eu não precisava fingir nada. Sua voz me deu até vontade de dançar. Luna ainda sugeriu que Coco experimentasse cantar com os olhos fechados, imaginando que estava sozinho entre as vitórias-régias, do jeito que ele sempre se sentia mais confortável. Coco tentou, e para sua surpresa, cantar daquele jeito, mesmo sabendo que tinha uma amiga ouvindo, pareceu quase tão natural quanto cantar completamente sozinho.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "sapinhoCoco", pose: "neutro", position: "esquerda" },
            { characterId: "gatinhaLuna", pose: "surpreso", position: "direita" },
          ],
          props: ["flor"],
        },
      },
      {
        id: "cena-4",
        text:
          "No dia seguinte, Luna convidou mais dois amigos para ouvir Coco cantar: primeiro Bolinha, depois Tom. Cada vez que Coco cantava para um grupinho maior, ficava um pouquinho menos assustado, porque percebia que ninguém ria dele, e que, pelo contrário, todos ficavam encantados com sua voz. — Viu como ficou mais fácil? — disse Luna, depois da terceira vez. — Você só precisava se acostumar, de pouquinho em pouquinho. Coco sorriu, sentindo que talvez, só talvez, conseguisse mesmo cantar no concerto. Bolinha, depois de ouvir a apresentação, sugeriu que Coco imaginasse estar cantando só para seus amigos mesmo quando estivesse na frente de toda a lagoa, fingindo que a multidão era apenas um grupo maior de pessoas queridas. Tom, por sua vez, ofereceu-se para ficar bem na frente durante o concerto, segurando uma plaquinha engraçada com a palavra Vai, Coco!, só para fazer o amigo sorrir no momento mais nervoso.",
        illustration: {
          background: "jardim",
          characters: [
            { characterId: "sapinhoCoco", pose: "feliz", position: "esquerda" },
            { characterId: "gatinhaLuna", pose: "feliz", position: "direita" },
          ],
          props: ["flor", "borboleta"],
        },
      },
      {
        id: "cena-5",
        text:
          "Na noite do Grande Concerto, a lagoa estava decorada com lanternas penduradas nos juncos, e todos os animais se reuniram para assistir às apresentações. Quando chegou a vez de Coco, suas patinhas tremeram ao subir na folha que servia de palco. Mas, olhando para a plateia, encontrou o rosto sorridente de Luna, bem na primeira fileira, fazendo um sinal de incentivo com a patinha. Ao lado dela, Bolinha erguia bem alto sua placa engraçada, e mesmo de longe Coco conseguiu ler as letrinhas tortas e sorrir, sentindo o coração ficar um pouquinho mais calmo. O ar da noite estava cheio do som de grilos e do cheiro doce das flores da margem, e por um instante Coco fechou os olhos, lembrando de todas as vezes em que tinha cantado para seus amigos no jardim.",
        illustration: {
          background: "rioLagoa",
          characters: [
            { characterId: "sapinhoCoco", pose: "surpreso", position: "centro" },
            { characterId: "gatinhaLuna", pose: "feliz", position: "fundo-direita" },
          ],
          props: ["lanterna"],
        },
      },
      {
        id: "cena-6",
        text:
          "Coco respirou fundo, exatamente como tinha treinado no jardim, e começou a cantar. No começo sua voz saiu baixinha, mas, lembrando de todas as vezes em que tinha cantado para os amigos, foi ganhando confiança até preencher toda a lagoa com uma melodia doce e envolvente. Quando terminou, houve um silêncio de um segundo, seguido por uma aplauso tão grande que fez as águas da lagoa tremularem. Coco nunca tinha se sentido tão orgulhoso. Por um instante, ele até esqueceu de respirar, olhando para todas aquelas caras sorridentes batendo palmas só para ele, um sapinho que, até poucos dias antes, só cantava escondido entre as folhas. A garça organizadora, emocionada, voou até ele e anunciou, orgulhosa, que aquele tinha sido o momento mais bonito de todos os concertos que já tinha organizado na lagoa. Alguns girinos pequeninos, que assistiam sentados na primeira fileira de folhas, pediram para Coco repetir a música mais uma vez, e ele, ainda tremendo de emoção, aceitou com um sorriso enorme, cantando como se aquela fosse a primeira e também a melhor apresentação de toda a sua vida. No caminho de volta para casa, Coco não parava de sorrir, repetindo baixinho para si mesmo cada elogio que tinha recebido naquela noite. Luna, caminhando ao seu lado, apenas observava em silêncio, feliz por ver o amigo brilhar daquele jeito, sabendo que tinha sido só uma pequena parte de uma jornada que, no fim, pertencia inteiramente a ele.",
        illustration: {
          background: "rioLagoa",
          characters: [{ characterId: "sapinhoCoco", pose: "animado", position: "centro" }],
          props: ["lanterna", "estrelas"],
        },
      },
      {
        id: "cena-7",
        text:
          "Depois do concerto, Luna correu até Coco e o abraçou com força. — Eu disse que você conseguiria! Coco riu, ainda sem acreditar completamente no que tinha acontecido. — Eu não teria conseguido sem você me ajudando a começar pequeno. Luna sorriu, orgulhosa. — Às vezes a coragem não aparece de uma vez só. Ela cresce devagarinho, como as flores do jardim. E, enquanto caminhavam de volta para casa sob o céu estrelado, Coco já pensava em qual música cantaria no próximo concerto da lagoa. Bolinha e Tom se juntaram a eles no caminho, ainda comentando animados sobre a apresentação, e os quatro amigos seguiram juntos até a casa de Coco, cantando pedacinhos bobos de música e rindo da plaquinha torta que Bolinha ainda carregava debaixo do braço. Naquela noite, antes de dormir, Coco escreveu em seu diário secreto: hoje aprendi que a coragem não precisa ser grande de uma vez, ela só precisa de amigos para ajudar a crescer.",
        illustration: {
          background: "ceuNuvens",
          characters: [
            { characterId: "sapinhoCoco", pose: "feliz", position: "esquerda" },
            { characterId: "gatinhaLuna", pose: "feliz", position: "direita" },
          ],
          props: ["estrelas"],
        },
      },
    ],
    familyQuestion:
      "Já teve alguma coisa que parecia assustadora no começo, mas ficou mais fácil com a prática?",
  },
  {
    id: "a5-noz-tesouro-de-outono",
    title: "Noz Guarda o Tesouro de Outono",
    synopsis:
      "Noz e Bento se unem para encontrar e guardar as nozes espalhadas pela floresta antes do inverno chegar.",
    ageGroup: 5,
    category: "Animais",
    cover: {
      background: "florestaDia",
      characters: [
        { characterId: "esquilaNoz", pose: "animado", position: "esquerda" },
        { characterId: "ursoBento", pose: "feliz", position: "direita" },
      ],
      props: [],
    },
    scenes: [
      {
        id: "cena-1",
        text:
          "Quando as folhas da floresta começaram a ficar douradas e o vento soprava um pouquinho mais frio, Noz, a esquilinha de gorro vermelho, sabia que era hora de começar sua tarefa mais importante do ano: guardar nozes suficientes para passar todo o inverno sem fome. Mas naquele ano, um vendaval forte tinha espalhado as nozes por toda a floresta, longe da árvore onde costumavam cair, e Noz percebeu, preocupada, que sozinha levaria semanas demais para recolher tudo antes do frio chegar de verdade. Ela subiu até o galho mais alto de sua árvore para ter uma visão melhor da floresta e, de lá, conseguiu ver pequenos montinhos de nozes espalhados por toda parte: perto do riacho, atrás de pedras grandes, e até misturados entre folhas secas de cores variadas. Contando nos dedinhos das patas, Noz calculou que precisaria de pelo menos umas trinta viagens de ida e volta para recolher tudo sozinha, e esse número só a fazia sentir ainda mais o peso da tarefa pela frente. Ela desceu devagar pelo tronco, sentindo o vento frio de outono bagunçar seu pelinho avermelhado, e ficou parada por um instante olhando para a imensidão da floresta, se perguntando por onde deveria começar uma busca tão grande. Foi exatamente nesse momento de dúvida, sentada numa pedra próxima ao caminho, que ela avistou Bento se aproximando, carregando um cesto vazio a tiracolo.",
        illustration: {
          background: "florestaDia",
          characters: [{ characterId: "esquilaNoz", pose: "triste", position: "centro" }],
          props: [],
        },
      },
      {
        id: "cena-2",
        text:
          "Sentada numa pedra, tentando pensar em um plano, Noz foi encontrada por Bento, o ursinho de suéter vermelho, que estava passeando pela floresta antes de também se preparar para seu longo sono de inverno. — Por que essa cara triste? — perguntou ele, gentil. Noz explicou o problema das nozes espalhadas, e Bento, que adorava ajudar os amigos, teve uma ideia na hora. — Eu posso carregar muito mais nozes de uma vez do que você, com esses braços grandes. Vamos procurar juntos! Noz ficou tão aliviada que quase deixou cair as poucas nozes que já tinha recolhido naquela manhã. — Mas você não tem suas próprias coisas para preparar antes do inverno? — perguntou ela, sem querer tomar tempo demais do amigo. Bento sorriu, tranquilo. — Ainda tenho um tempinho antes da minha soneca longa começar. E ajudar uma amiga é sempre um bom jeito de usar esse tempo.",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "esquilaNoz", pose: "triste", position: "esquerda" },
            { characterId: "ursoBento", pose: "feliz", position: "direita" },
          ],
          props: [],
        },
      },
      {
        id: "cena-3",
        text:
          "Os dois combinaram um plano: Noz, que era pequena e rápida, subiria nas árvores mais altas e passaria pelos espaços estreitos entre as pedras para encontrar as nozes escondidas, enquanto Bento, com seu nariz poderoso, usaria o olfato para sentir o cheirinho característico das nozes mesmo debaixo de montes de folhas secas. Juntos, formavam a dupla perfeita para aquela caça ao tesouro de outono, e passaram a manhã inteira rindo e se divertindo enquanto trabalhavam. De vez em quando, paravam para descansar à beira do riacho, Bento mergulhando as patas cansadas na água fresca enquanto Noz organizava as nozes já encontradas em pequenas pilhas, contando-as em voz alta para o amigo, orgulhosa de cada número que alcançava. Bento, entre uma pausa e outra, contava histórias engraçadas sobre invernos passados, fazendo Noz esquecer um pouco do cansaço nos bracinhos.",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "esquilaNoz", pose: "animado", position: "esquerda" },
            { characterId: "ursoBento", pose: "neutro", position: "direita" },
          ],
          props: [],
        },
      },
      {
        id: "cena-4",
        text:
          "Em um certo ponto, Bento farejou algo interessante embaixo de uma pedra grande demais para ele sozinho conseguir mover sem cuidado. — Tem nozes aqui embaixo, tenho certeza — disse ele, cheirando o ar. Juntos, com Bento empurrando e Noz usando um graveto como alavanca, conseguiram deslocar a pedra o suficiente para revelar um montinho de nozes perfeitamente escondido, suficiente para abastecer a despensa de Noz por uma semana inteira. Animados com a descoberta, os dois continuaram revirando cada pedra solta que encontravam pelo caminho, criando até um pequeno jogo entre eles: quem encontrasse o próximo montinho escondido ganhava o direito de escolher a próxima música que cantariam enquanto trabalhavam. Essa brincadeira deixou a tarefa tão mais divertida que, por um momento, Noz quase esqueceu que aquilo era, na verdade, um trabalho importante e necessário. Em um dado momento, Bento encontrou uma noz enorme, maior do que qualquer uma que Noz já tinha visto antes, e os dois riram muito tentando imaginar qual esquilo gigante teria deixado aquilo ali escondido. Guardaram a noz gigante separada das outras, decidindo que seria a peça de honra da despensa, para mostrar com orgulho a qualquer visitante curioso durante o inverno.",
        illustration: {
          background: "montanha",
          characters: [
            { characterId: "ursoBento", pose: "animado", position: "esquerda" },
            { characterId: "esquilaNoz", pose: "surpreso", position: "direita" },
          ],
          props: [],
        },
      },
      {
        id: "cena-5",
        text:
          "Durante três dias, Noz e Bento continuaram a busca, encontrando nozes nos lugares mais inesperados: dentro de troncos ocos, atrás de arbustos espinhosos e até boiando perto da margem do riacho. Cada noite, Noz guardava com cuidado tudo o que tinham recolhido naquele dia, organizando sua despensa em pilhas bem arrumadas. Bento, mesmo cansado, sempre aparecia na manhã seguinte, pronto para continuar ajudando, porque gostava de ver o sorriso de alívio crescendo no rosto da amiga a cada dia que passava. No segundo dia, encontraram um ninho de passarinhos abandonado cheio de nozes guardadas por algum esquilo distraído meses atrás, e no terceiro dia, depois de muita procura, acharam um verdadeiro tesouro escondido dentro de um tronco caído, coberto de musgo macio. Cada descoberta parecia uma pequena vitória que os dois comemoravam com um abraço apertado e muitas risadas. Em um desses dias, encontraram também uma pequena família de formigas organizando seu próprio estoque de inverno, e Bento, com cuidado para não pisar em nenhuma delas, ajudou a desviar o caminho das nozes maiores para não atrapalhar o trabalho dos vizinhos pequenininhos. Noz achou bonito ver como até os animais mais diferentes entre si podiam compartilhar a mesma floresta com tanto respeito.",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "esquilaNoz", pose: "feliz", position: "esquerda" },
            { characterId: "ursoBento", pose: "feliz", position: "direita" },
          ],
          props: [],
        },
      },
      {
        id: "cena-6",
        text:
          "No fim do terceiro dia, Noz contou todas as nozes recolhidas e descobriu, emocionada, que tinha conseguido reunir muito mais do que precisava para o inverno todo. — Nunca teria conseguido isso sozinha — disse ela a Bento, os olhinhos brilhando de gratidão. Bento, já sentindo o sono do inverno se aproximando, sorriu com carinho. — Foi divertido ajudar. E agora eu posso dormir tranquilo sabendo que minha amiga vai passar o inverno bem alimentada. Noz insistiu em organizar uma pequena festa de agradecimento antes que Bento fosse dormir, preparando um chá quentinho de flores secas e um bolinho simples feito com as poucas nozes que tinha separado só para aquela ocasião especial. Os dois se sentaram na entrada da toca de Noz, observando as últimas folhas coloridas do outono caírem lentamente ao redor, conversando sobre tudo o que tinham vivido juntos durante aqueles dias de busca.",
        illustration: {
          background: "florestaDia",
          characters: [
            { characterId: "esquilaNoz", pose: "feliz", position: "esquerda" },
            { characterId: "ursoBento", pose: "sonolento", position: "direita" },
          ],
          props: [],
        },
      },
      {
        id: "cena-7",
        text:
          "Antes de Bento se recolher para sua longa soneca de inverno, Noz separou um saquinho especial de nozes selecionadas e entregou para o amigo. — Para você comer quando acordar na primavera, como agradecimento. Bento aceitou com carinho, guardando o saquinho perto de seu coração. Enquanto a primeira neve começava a cair levemente sobre a floresta, Noz observou da janela de sua árvore, sabendo que tinha sido um outono de muito trabalho, mas também de uma amizade que ficaria guardada, assim como suas nozes, para sempre. Ela se prometeu que, na primavera, quando Bento despertasse de seu longo sono, prepararia uma recepção especial para o amigo, talvez com algumas das primeiras flores da estação ou um passeio pela parte da floresta que ele mais gostava. E assim, enquanto o frio do inverno se instalava por completo, Noz dormia tranquila em sua toca bem abastecida, sabendo que tinha, além de comida de sobra, uma amizade que valia mais do que qualquer tesouro de nozes guardadas.",
        illustration: {
          background: "florestaNoite",
          characters: [{ characterId: "esquilaNoz", pose: "feliz", position: "centro" }],
          props: ["estrelas"],
        },
      },
    ],
    familyQuestion:
      "Você já pediu ajuda para fazer algo que parecia grande demais para fazer sozinho?",
  },
  {
    id: "a5-dada-livro-que-queria-viajar",
    title: "Dadá e o Livro que Queria Viajar",
    synopsis:
      "A coruja Dadá descobre um livro misterioso na biblioteca da floresta e, com Pipo, aprende sobre o poder da imaginação.",
    ageGroup: 5,
    category: "Aprender Brincando",
    cover: {
      background: "biblioteca",
      characters: [
        { characterId: "corujaSabia", pose: "feliz", position: "esquerda" },
        { characterId: "passarinhoPipo", pose: "animado", position: "direita" },
      ],
      props: ["livro"],
    },
    scenes: [
      {
        id: "cena-1",
        text:
          "Dadá, a coruja de óculos redondos, era a guardiã da pequena biblioteca escondida dentro de um tronco oco, onde os animais da floresta guardavam os livros mais queridos que encontravam. Um dia, enquanto organizava as estantes, ela encontrou um livro muito velho, com a capa gasta, escondido no canto mais escuro da última prateleira. Ele não tinha título na capa, apenas um desenho simples de um caminho se perdendo no horizonte. Curiosa, Dadá abriu a primeira página e viu que as palavras pareciam quase dançar, como se o livro estivesse vivo e ansioso para ser lido. Ela passou os dedos das penas levemente pelas páginas amareladas, sentindo uma textura diferente de qualquer outro livro da biblioteca, quase como se fossem feitas de um papel especial, vindo de algum lugar muito distante. Um cheirinho de poeira antiga e flores secas subiu até seu bico quando ela virou a primeira página, e por algum motivo que não sabia explicar, sentiu um friozinho gostoso de expectativa percorrer suas penas. Ela se perguntou por quanto tempo aquele livro estaria escondido ali, esquecido por todos, e quantos outros segredos aquela pequena biblioteca ainda guardava em seus cantos mais empoeirados. Ajeitando os óculos no bico, Dadá decidiu que, antes de contar para qualquer outro animal da floresta, precisava ler algumas páginas sozinha, só para entender melhor o que aquele livro misterioso realmente fazia.",
        illustration: {
          background: "biblioteca",
          characters: [{ characterId: "corujaSabia", pose: "surpreso", position: "centro" }],
          props: ["livro"],
        },
      },
      {
        id: "cena-2",
        text:
          "Pipo, o passarinho azul que adorava visitar a biblioteca, chegou voando e encontrou Dadá sentada, completamente absorta na leitura. — O que você está lendo? — perguntou ele, curioso. Dadá mostrou a capa sem título. — Não sei bem o que é, mas cada página que eu leio parece me levar para um lugar diferente. Olha, nesta eu estava numa praia distante, e na página seguinte, de repente, estava no topo de uma montanha gelada. Pipo ficou fascinado e pediu para experimentar também. — Mas cuidado — avisou Dadá, brincando. — Esse livro parece levar a gente para lugares tão reais que você pode esquecer de voltar para a biblioteca por um bom tempo. Pipo riu, animado com o aviso, e se acomodou bem confortável em uma poltrona de musgo que Dadá tinha preparado especialmente para os visitantes que gostavam de ler por horas sem parar.",
        illustration: {
          background: "biblioteca",
          characters: [
            { characterId: "corujaSabia", pose: "feliz", position: "esquerda" },
            { characterId: "passarinhoPipo", pose: "surpreso", position: "direita" },
          ],
          props: ["livro"],
        },
      },
      {
        id: "cena-3",
        text:
          "Pipo pegou o livro com cuidado e leu a página onde Dadá tinha parado. Imediatamente, fechou os olhos e começou a descrever, em voz alta, uma floresta encantada cheia de árvores com folhas prateadas que ele imaginava ter visto. Dadá riu, encantada. — Esse livro não tem mágica de verdade, Pipo. A mágica está na nossa imaginação. As palavras são como uma porta, mas quem cria o lugar do outro lado é quem está lendo. Pipo ficou surpreso com aquela ideia, repetindo a frase baixinho para si mesmo, como se estivesse guardando aquele pensamento em algum lugar especial da memória. — Então, se eu ler a mesma página de novo, posso ver um lugar completamente diferente? — perguntou ele, os olhinhos brilhando de curiosidade. Dadá assentiu, satisfeita por ver o amigo entender tão rápido a mágica escondida daquelas páginas. Pipo fechou os olhos com força, concentrando-se bastante, e quando os abriu de novo, descreveu um campo enorme de flores azuis que balançavam ao vento, bem diferente da floresta cheia de árvores verdes que Dadá tinha visto na primeira leitura daquela mesma página.",
        illustration: {
          background: "biblioteca",
          characters: [
            { characterId: "passarinhoPipo", pose: "surpreso", position: "esquerda" },
            { characterId: "corujaSabia", pose: "feliz", position: "direita" },
          ],
          props: ["livro"],
        },
      },
      {
        id: "cena-4",
        text:
          "Os dois passaram a tarde inteira se revezando com o livro, cada um inventando lugares diferentes a partir das mesmas palavras simples escritas nas páginas. Dadá imaginou um castelo de nuvens, enquanto Pipo criou uma cidade inteira construída em cima de folhas gigantes. Perceberam, encantados, que mesmo lendo exatamente as mesmas frases, cada um tinha visto coisas completamente diferentes dentro da própria cabeça, e isso tornava a brincadeira ainda mais interessante. Em um momento, Dadá leu uma página sobre um mar calmo e descreveu ondas prateadas brilhando sob a luz da lua, enquanto Pipo, lendo exatamente as mesmas palavras, imaginou um oceano de folhas douradas balançando ao vento. Os dois riram muito ao perceber como suas imaginações tinham tomado caminhos tão diferentes a partir da mesma frase simples escrita no papel envelhecido.",
        illustration: {
          background: "biblioteca",
          characters: [
            { characterId: "corujaSabia", pose: "animado", position: "esquerda" },
            { characterId: "passarinhoPipo", pose: "animado", position: "direita" },
          ],
          props: ["livro"],
        },
      },
      {
        id: "cena-5",
        text:
          "Dadá teve então uma ideia: por que não convidar outros animais da floresta para experimentar o livro misterioso também? No dia seguinte, ela organizou um pequeno encontro na biblioteca, onde cada animal que visitava lia uma página em voz alta e depois contava, com suas próprias palavras, o lugar incrível que tinha imaginado. As histórias eram tão diferentes entre si que todos ficaram maravilhados com a quantidade de mundos que podiam existir dentro de um livro tão pequeno e sem nome. Tom descreveu uma corrida emocionante por entre nuvens de algodão, Luna imaginou um labirinto de fitas coloridas dentro de um castelo, e até o tímido Coco, depois de muita insistência, contou sobre um lago onde todos os sapos tinham vozes de cantores famosos. Dadá anotava, só por diversão, um pequeno resumo de cada história num caderninho especial, criando sem querer uma coleção das aventuras imaginadas por todos os visitantes daquela tarde. Quando a tarde terminou, Dadá releu em voz alta todas as anotações para o grupo reunido, e todos se surpreenderam ao perceber como, juntas, aquelas pequenas histórias formavam um mapa enorme e colorido de lugares que só existiam dentro da imaginação de cada um dos moradores da floresta. Um dos visitantes mais tímidos, um caracol que raramente falava em público, confessou que aquela tinha sido a primeira vez que se sentia confortável contando algo em voz alta para um grupo, e isso deixou Dadá especialmente emocionada com o poder silencioso daquele livro sem nome.",
        illustration: {
          background: "biblioteca",
          characters: [
            { characterId: "corujaSabia", pose: "feliz", position: "esquerda" },
            { characterId: "passarinhoPipo", pose: "feliz", position: "direita" },
          ],
          props: ["livro", "lanterna"],
        },
      },
      {
        id: "cena-6",
        text:
          "No final daquele dia especial, Dadá decidiu que o livro sem título ficaria para sempre num lugar de destaque na biblioteca, à disposição de qualquer animal que quisesse visitar um mundo novo usando apenas a própria imaginação. Pipo sugeriu um nome para ele: O Livro que Queria Viajar, já que, de certa forma, cada leitor o levava para um lugar diferente sem que ele precisasse se mover nem um centímetro da estante. Dadá fez uma pequena placa de madeira, escrevendo o novo nome com letras bonitas e cuidadosas, e pendurou-a logo acima do lugar especial reservado para o livro, entre dois vasinhos de flores secas que ajudavam a perfumar aquele canto da biblioteca. A partir daquele momento, o livro deixou de ser um mistério escondido e se tornou a atração mais querida de toda a coleção.",
        illustration: {
          background: "biblioteca",
          characters: [{ characterId: "corujaSabia", pose: "feliz", position: "centro" }],
          props: ["livro"],
        },
      },
      {
        id: "cena-7",
        text:
          "Desde então, toda semana um animal diferente da floresta visitava a biblioteca para ler uma página do livro misterioso e contar sua própria aventura imaginada. Dadá adorava ouvir cada história nova, percebendo que, embora fosse a guardiã dos livros, aprendia algo diferente a cada visita. Pipo continuou sendo seu companheiro fiel nessas tardes de leitura, sempre pronto para a próxima viagem imaginária, sem nunca precisar sair do conforto da pequena biblioteca escondida no tronco. Às vezes, quando a noite chegava e todos os visitantes já tinham ido para casa, Dadá abria o livro mais uma vez, só para si mesma, e descobria que, mesmo depois de tantas leituras, ele sempre guardava um cantinho novo de mundo para mostrar a ela. Foi assim que a sábia coruja aprendeu que a imaginação nunca se esgota, não importa quantas vezes a gente decida usá-la.",
        illustration: {
          background: "biblioteca",
          characters: [
            { characterId: "corujaSabia", pose: "feliz", position: "esquerda" },
            { characterId: "passarinhoPipo", pose: "feliz", position: "direita" },
          ],
          props: ["livro"],
        },
      },
    ],
    familyQuestion:
      "Se você pudesse imaginar um lugar mágico para visitar hoje, como ele seria?",
  },
  {
    id: "a5-bolinha-vila-das-surpresas",
    title: "Bolinha e a Vila das Surpresas",
    synopsis:
      "Bolinha organiza uma surpresa para toda a vizinhança e descobre, com a ajuda de Doce, que os melhores planos se constroem em equipe.",
    ageGroup: 5,
    category: "Amizade",
    cover: {
      background: "vilaAlegre",
      characters: [
        { characterId: "cachorrinhoBolinha", pose: "animado", position: "esquerda" },
        { characterId: "elefantinhoDoce", pose: "feliz", position: "direita" },
      ],
      props: ["balao"],
    },
    scenes: [
      {
        id: "cena-1",
        text:
          "Bolinha, o cachorrinho de lenço vermelho, notou que, havia um bom tempo, todos os vizinhos da Vila Alegre pareciam cansados e preocupados demais para brincar ou conversar nas tardes de domingo, como costumavam fazer antes. Decidido a mudar essa tristeza no ar, Bolinha teve uma ideia: organizar uma grande festa surpresa na praça da vila, cheia de música, comida boa e muita alegria, para lembrar a todos como era bom estar junto. O único problema era que uma festa daquele tamanho parecia trabalho demais para um cachorrinho só. Ele se sentou na varanda de sua casinha, rascunhando numa folha de papel tudo o que imaginava para a festa: música animada, bandeirinhas coloridas balançando no vento, mesas cheias de comidinhas gostosas e, principalmente, muitos sorrisos de volta no rosto dos vizinhos. Quanto mais desenhava, mais a lista de tarefas parecia crescer, até ficar comprida o bastante para dar várias voltas na própria folha de papel. Bolinha se lembrou de como, não muito tempo atrás, toda a vila se reunia animada para celebrar as colheitas e os aniversários, enchendo a praça principal de risadas e música. Fazia tempo que isso não acontecia, e ele sentia, no fundo do coração, que uma boa festa surpresa era exatamente o que faltava para trazer aquele espírito animado de volta para todos os vizinhos cansados.",
        illustration: {
          background: "vilaAlegre",
          characters: [{ characterId: "cachorrinhoBolinha", pose: "neutro", position: "centro" }],
          props: [],
        },
      },
      {
        id: "cena-2",
        text:
          "Bolinha foi procurar seu amigo Doce, o elefantinho de chapéu de palha, conhecido por ser ótimo em organizar coisas grandes. — Preciso de ajuda para fazer a maior festa surpresa que a vila já viu — explicou Bolinha, animado. Doce adorou a ideia na hora, mas logo apontou um detalhe importante: — Uma festa grande precisa de muitas mãos. Vamos chamar mais amigos para nos ajudar a planejar tudo com calma. Bolinha concordou, percebendo que sozinho jamais conseguiria dar conta de tudo sozinho. — Mas como vamos chamar todo mundo sem que ninguém descubra a surpresa? — perguntou Bolinha, preocupado com esse detalhe importante. Doce pensou por um momento e sugeriu que inventassem um codinome para o projeto, chamando-o apenas de Projeto Flor, para que pudessem conversar sobre os preparativos sem levantar suspeitas entre os vizinhos mais curiosos da vila.",
        illustration: {
          background: "vilaAlegre",
          characters: [
            { characterId: "cachorrinhoBolinha", pose: "animado", position: "esquerda" },
            { characterId: "elefantinhoDoce", pose: "feliz", position: "direita" },
          ],
          props: [],
        },
      },
      {
        id: "cena-3",
        text:
          "Juntos, Bolinha e Doce reuniram um grupo animado de amigos: Luna ficou encarregada da decoração, usando fitas e flores coloridas pela praça; Tom organizou jogos de água para refrescar todo mundo no calor da tarde; e Coco, com sua bela voz, prometeu preparar uma música especial para animar a festa. Cada amigo trouxe uma ideia diferente, e juntas as ideias formavam um plano muito mais bonito e completo do que Bolinha jamais teria imaginado sozinho. Cada amigo recebeu uma pequena lista de tarefas, escrita por Doce com sua caligrafia cuidadosa, e todos prometeram se encontrar escondidos no celeiro velho da vila, duas vezes por semana, só para combinar os próximos passos sem que a surpresa fosse descoberta antes da hora. No primeiro encontro secreto, cada amigo trouxe uma sugestão diferente para o cardápio da festa, e acabaram decidindo, depois de muita conversa animada, que cada um levaria um prato especial de sua própria casa, criando assim uma grande mesa compartilhada cheia de sabores variados, representando um pouquinho de cada família da vila.",
        illustration: {
          background: "vilaAlegre",
          characters: [
            { characterId: "elefantinhoDoce", pose: "feliz", position: "esquerda" },
            { characterId: "cachorrinhoBolinha", pose: "feliz", position: "direita" },
          ],
          props: ["balao", "flor"],
        },
      },
      {
        id: "cena-4",
        text:
          "Nos dias seguintes, a equipe toda trabalhou junta, cada um cuidando de sua parte: Doce usava sua força para carregar mesas e bancos até a praça, enquanto Bolinha corria de casa em casa, espalhando convites discretos sem revelar a surpresa. Houve um momento difícil, quando descobriram que faltavam balões suficientes para decorar toda a praça, mas Luna teve a ideia de pedir ajuda para as crianças da vila, que adoraram participar enchendo balões coloridos durante a tarde toda. As crianças ficaram tão animadas com a tarefa secreta que prometeram guardar segredo até o grande dia, sentindo-se parte importante de algo especial. Bolinha, vendo tantas mãozinhas pequenas ajudando com tanto entusiasmo, percebeu que, quanto mais pessoas se envolviam no projeto, mais bonito e cheio de carinho aquele plano ia se tornando. Numa tarde, enquanto ajudava a pintar uma faixa enorme de boas-vindas, Bolinha confessou a Doce que, no início, tinha ficado com medo de que ninguém quisesse ajudar com uma ideia tão grande. Doce sorriu e respondeu que bons planos sempre atraem boas companhias, principalmente quando nascem de um desejo sincero de fazer alguém feliz. Enquanto terminavam a faixa, começaram a cantar juntos uma musiquinha inventada na hora sobre surpresas e amizade, repetindo o refrão bobo tantas vezes que, no final, nem lembravam mais quem tinha inventado cada parte da letra. Doce ainda propôs que aquela musiquinha se tornasse a canção oficial de todas as futuras surpresas que organizassem juntos, e Bolinha, rindo, prometeu anotar a letra completa antes que os dois esquecessem de tudo até o dia seguinte.",
        illustration: {
          background: "vilaAlegre",
          characters: [
            { characterId: "cachorrinhoBolinha", pose: "neutro", position: "esquerda" },
            { characterId: "elefantinhoDoce", pose: "animado", position: "direita" },
          ],
          props: ["balao"],
        },
      },
      {
        id: "cena-5",
        text:
          "Na tarde do grande dia, tudo estava quase pronto quando, de repente, começou a cair uma garoa fininha, ameaçando estragar os planos de todos. Bolinha ficou desesperado, mas Doce, calmo como sempre, lembrou que tinha visto um grande toldo de lona guardado no galpão da vila. Chamando mais alguns amigos, conseguiram montar o toldo bem a tempo, cobrindo toda a praça antes que a garoa se transformasse em chuva de verdade. Enquanto amarravam as cordas do toldo, Bolinha sentiu o coração acelerar de nervosismo, imaginando por um instante que talvez a festa toda fosse um fracasso, mas Doce, sempre tranquilo, lembrou-o de que imprevistos fazem parte de qualquer bom plano, e que o importante era resolver cada um deles com calma, em equipe, como já tinham feito até ali.",
        illustration: {
          background: "vilaAlegre",
          characters: [
            { characterId: "cachorrinhoBolinha", pose: "surpreso", position: "esquerda" },
            { characterId: "elefantinhoDoce", pose: "neutro", position: "direita" },
          ],
          props: ["nuvem"],
        },
      },
      {
        id: "cena-6",
        text:
          "Quando o sol voltou a aparecer, a praça estava pronta: decorada com flores e balões, mesas cheias de comidas deliciosas e um pequeno palco onde Coco já se preparava para cantar. Um por um, os vizinhos foram chegando, surpresos e encantados com a festa inesperada. Os rostos cansados de antes se transformaram em sorrisos largos, e logo todo mundo estava dançando, conversando e rindo junto na praça, exatamente como Bolinha tinha imaginado no início. Coco subiu ao pequeno palco e começou a cantar uma música alegre que tinha composto especialmente para a ocasião, e logo todos os animais da vila estavam cantando junto, batendo palmas no ritmo e formando uma grande roda animada no centro da praça decorada.",
        illustration: {
          background: "vilaAlegre",
          characters: [
            { characterId: "cachorrinhoBolinha", pose: "animado", position: "esquerda" },
            { characterId: "elefantinhoDoce", pose: "animado", position: "direita" },
          ],
          props: ["balao", "flor"],
        },
      },
      {
        id: "cena-7",
        text:
          "No fim da festa, enquanto ajudavam a guardar as mesas, Doce comentou com Bolinha: — Essa foi uma das melhores festas que já vi nessa vila. Bolinha sorriu, olhando para os amigos que tinham ajudado a tornar tudo possível. — Eu pensei em fazer essa festa sozinho, mas percebi que ela só ficou tão boa porque cada um colocou um pedacinho de si mesmo nela. Doce assentiu, satisfeito, enquanto o som de risadas ainda ecoava pela vila, mesmo depois que a última luz da festa se apagou. No dia seguinte, vários vizinhos vieram agradecer pessoalmente a Bolinha, contando como aquela tarde tinha ajudado a aliviar as preocupações que carregavam há semanas. Alguns até sugeriram que a vila organizasse pequenas festas assim mais vezes, não apenas em ocasiões especiais, só para lembrar, de tempos em tempos, como era bom estar junto. Bolinha, orgulhoso, já começava a imaginar, com a ajuda de seus fiéis amigos, qual seria a próxima surpresa boa que poderiam preparar para a Vila Alegre.",
        illustration: {
          background: "vilaAlegre",
          characters: [
            { characterId: "cachorrinhoBolinha", pose: "feliz", position: "esquerda" },
            { characterId: "elefantinhoDoce", pose: "feliz", position: "direita" },
          ],
          props: ["balao"],
        },
      },
    ],
    familyQuestion:
      "Você já participou de um plano ou projeto em equipe? O que achou de fazer isso junto com outras pessoas?",
  },
];

export default stories;

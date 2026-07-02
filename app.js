// EMBEDDED GEMINI API KEY (Optional)
// Cole sua chave da API do Gemini aqui se quiser que ela fique ativa automaticamente para todos os usuários do site.
const EMBEDDED_API_KEY = "";

// O aplicativo detectará automaticamente se está rodando em produção (na Vercel) para ativar a rota segura
const USE_SECURE_SERVERLESS = window.location.hostname !== "localhost" && window.location.hostname !== "127.0.0.1" && window.location.protocol !== "file:";

// Arcanas Database with detailed interpretations in Portuguese
const arcanasDb = {
    1: {
        name: "O Mago",
        desc: "Líder natural, criador e canalizador de ideias pioneiras. Possui o poder da manifestação e novos começos.",
        plus: "Iniciativa, poder de comunicação, autoconfiança, capacidade de transformar sonhos em realidade material.",
        minus: "Egoísmo, manipulação de pessoas, arrogância, dispersão de energia ou medo de dar o primeiro passo.",
        comfort: "Seu centro exige que você lidere seus próprios projetos. Você se recarrega criando e agindo de forma independente.",
        talents: "Facilidade com palavras, habilidades manuais e capacidade de aprender qualquer coisa rapidamente.",
        karma: "Em outra vida, você pode ter sido orgulhoso demais ou ter usado suas habilidades intelectuais para enganar outros.",
        love: "Busca um parceiro independente e estimulante. A atração se dá pela inteligência e conversas profundas.",
        money: "Excelente para empreendedorismo, vendas, marketing e liderança. O dinheiro vem da sua inovação."
    },
    2: {
        name: "A Sacerdotisa",
        desc: "Intuição feminina profunda, mistério e sabedoria oculta. Rege a dualidade e a diplomacia silenciosa.",
        plus: "Forte intuição, diplomacia, capacidade de guardar segredos, sensibilidade e empatia profunda.",
        minus: "Duplicidade, fofoca, indecisão, segredos destrutivos, frieza emocional ou desconfiança.",
        comfort: "Você precisa de momentos de silêncio e contato com a natureza. Recarrega-se ouvindo sua voz interior.",
        talents: "Intuição aguçada, psicologia natural, habilidade para mediar conflitos e leitura do inconsciente.",
        karma: "Vidas passadas marcadas por intrigas, segredos não revelados ou omissão perante injustiças.",
        love: "Relacionamentos baseados em conexões de alma e telepatia. Ideal um parceiro compreensivo e misterioso.",
        money: "Carreiras na psicologia, consultoria, artes esotéricas ou diplomacia. O dinheiro vem do agir nos bastidores."
    },
    3: {
        name: "A Imperatriz",
        desc: "Criação, fertilidade, abundância material e amor maternal. Rege a beleza, o lar e os negócios férteis.",
        plus: "Abundância, generosidade, amor pelo belo, fertilidade nos negócios e na vida pessoal, sensualidade.",
        minus: "Controle excessivo, ciúme, futilidade, problemas com figuras maternas ou esterilidade financeira.",
        comfort: "Você se sente melhor criando um ambiente confortável para si e para os outros. Conexão com o feminino e a terra.",
        talents: "Dons de design, gestão, maternidade/paternidade ativa, estética e crescimento financeiro sustentável.",
        karma: "Pode ter abusado do controle sobre os filhos ou parceiros, ou ter sido excessivamente apegado ao luxo material.",
        love: "Busca parceiros que queiram formar família e valorizem o lar. Atração por pessoas afetuosas e estáveis.",
        money: "Sucesso no comércio de beleza, design de interiores, agricultura, eventos ou moda. O dinheiro flui pela criação."
    },
    4: {
        name: "O Imperador",
        desc: "Estrutura, autoridade, estabilidade financeira e poder paterno. Rege a ordem, a disciplina e a proteção.",
        plus: "Liderança forte, disciplina, senso de ordem, estabilidade material e capacidade de proteger os seus.",
        minus: "Tirania, inflexibilidade, agressividade, preguiça ou fraqueza perante problemas estruturais.",
        comfort: "Seu equilíbrio vem da ordem e das regras claras. Você se recarrega assumindo o controle e protegendo sua família.",
        talents: "Gestão executiva, organização governamental, engenharia e resolução prática de grandes problemas.",
        karma: "Abuso de poder em vidas passadas, tirania doméstica ou recusa em assumir responsabilidades materiais.",
        love: "Atrai parceiros estáveis, muitas vezes com forte energia provedora ou autoridade. Valoriza a fidelidade e estrutura.",
        money: "Cargos de gerência, finanças públicas, administração, construção civil ou forças armadas. O dinheiro vem da ordem."
    },
    5: {
        name: "O Hierofante",
        desc: "O mestre, as tradições, a lei moral e a busca por conhecimento espiritual. Rege o ensino e a ordem moral.",
        plus: "Capacidade de ensinar, respeito pelas tradições, espiritualidade forte, busca pela verdade e valores familiares.",
        minus: "Fanatismo, teimosia, mania de querer ter sempre razão, julgamento severo sobre os outros ou apego a dogmas.",
        comfort: "Você encontra equilíbrio quando ensina ou compartilha conhecimento. Foco na família e na moralidade justa.",
        talents: "Oratória pedagógica, mentoria espiritual, redação de leis ou transmissão de tradições ancestrais.",
        karma: "Em vidas passadas, você pode ter sido um pregador intolerante, que perseguiu quem pensava diferente.",
        love: "Busca relacionamentos formais, com casamentos tradicionais e valores familiares compartilhados.",
        money: "Educação, filosofia, direito, coaching ou aconselhamento religioso. O dinheiro flui pela sabedoria partilhada."
    },
    6: {
        name: "Os Enamorados",
        desc: "Amor, escolhas do coração, beleza física e relacionamentos. Rege o amor-próprio e as conexões sociais.",
        plus: "Amor incondicional, carisma social, facilidade em fazer escolhas harmônicas, beleza e harmonia estética.",
        minus: "Dependência emocional, indecisão crônica, idealização excessiva do outro ou superficialidade nas relações.",
        comfort: "Seu equilíbrio exige beleza ao seu redor e amor em suas relações. Você se recarrega em contato com quem ama.",
        talents: "Relações públicas, mediação amorosa, artes visuais, estética, hospitalidade e criação de conexões.",
        karma: "Karma de amor não correspondido, divórcios traumáticos ou traição aos sentimentos alheios em vidas passadas.",
        love: "Parceiro que ofereça romance e harmonia estética. O amor-próprio é a chave para não atrair dependência.",
        money: "Design de moda, decoração, relações públicas, hotelaria ou eventos. Ganhos financeiros através de parcerias."
    },
    7: {
        name: "O Carro",
        desc: "Determinação, movimento, vitória e conquista de metas. Rege viagens, liderança focada e progresso rápido.",
        plus: "Foco inabalável, determinação, espírito de vitória, capacidade de liderar rumo a metas claras e espírito viajante.",
        minus: "Agressividade, dispersão de metas, estagnação por medo, impaciência ou acidentes de percurso.",
        comfort: "Você precisa de movimento e metas. Recarrega-se viajando ou praticando esportes de velocidade/foco.",
        talents: "Direção de equipes, logística, superação de crises rápidas e atitude de liderança ativa.",
        karma: "Pode ter atropelado o direito de outros para vencer, ou ter fugido de suas batalhas por covardia.",
        love: "Busca parceiros ambiciosos e dinâmicos, que queiram crescer e viajar juntos. Relações com metas conjuntas.",
        money: "Transportes, turismo, importação/exportação, gerência de projetos inovadores. O dinheiro vem da velocidade e foco."
    },
    8: {
        name: "A Justiça",
        desc: "Equilíbrio, causa e efeito, honestidade e leis universais. Rege a verdade fria e os julgamentos justos.",
        plus: "Alto senso de justiça, honestidade, capacidade de ver os dois lados, equilíbrio kármico e organização moral.",
        minus: "Preconceito, injustiças cometidas, vitimismo crônico, busca por culpados ou burocracia excessiva.",
        comfort: "Sua paz vem de compreender o 'porquê' das coisas. Você se recarrega em ambientes de integridade absoluta.",
        talents: "Análise crítica de contratos, auditoria, assessoria jurídica, mediação justa e contabilidade.",
        karma: "Vidas passadas de desonestidade ou de ter julgado inocentes injustamente. Necessidade de agir com integridade hoje.",
        love: "Relacionamentos transparentes e equilibrados. O parceiro ideal é ético, maduro e valoriza a igualdade absoluta.",
        money: "Direito, advocacia, contabilidade, compliance ou cargos públicos de fiscalização. Ganhos pela honestidade."
    },
    9: {
        name: "O Eremita",
        desc: "Sabedoria profunda, solidão curativa, introspecção e busca pela verdade. Rege o conhecimento interior e a velhice sábia.",
        plus: "Sabedoria profunda, independência, autossuficiência mental, paciência e talento para pesquisa científica.",
        minus: "Isolamento excessivo, depressão, arrogância intelectual, mesquinhez ou medo da solidão física.",
        comfort: "Você precisa de tempo sozinho para organizar suas ideias. Recarrega-se lendo, estudando e em silêncio absoluto.",
        talents: "Pesquisa científica, filosofia, escrita profunda, análise de dados complexos e orientação espiritual lenta.",
        karma: "Pode ter se isolado do mundo por orgulho ou se recusado a ajudar outros com o conhecimento que possuía.",
        love: "Parcerias discretas e maduras. Atração por pessoas mais velhas ou com profunda bagagem intelectual.",
        money: "Ciência, pesquisa, escrita de livros, consultoria analítica ou restauro. Dinheiro vem do conhecimento especializado."
    },
    10: {
        name: "A Roda da Fortuna",
        desc: "Sincronicidade, fluxos de sorte, ciclos de vida e adaptabilidade. Rege o movimento da sorte e as oportunidades.",
        plus: "Estar no fluxo da sorte, otimismo, capacidade de se adaptar às mudanças de maré da vida, sorte financeira.",
        minus: "Sentir-se azarado, resistência às mudanças, dependência de jogos de azar ou preguiça extrema.",
        comfort: "Você precisa fluir com os eventos. Você se recarrega aceitando as voltas da vida e relaxando em vez de controlar.",
        talents: "Percepção de tendências de mercado, sorte em apostas moderadas, facilidade de comunicação e flexibilidade.",
        karma: "Recusa em aproveitar as oportunidades dadas pelo destino ou dependência financeira parasita em outras vidas.",
        love: "Parceiro otimista e alegre. Encontros marcados por grandes coincidências e sincronismos mágicos.",
        money: "Investimentos em ações, consultoria de tendências, turismo flutuante ou apostas de mercado. O dinheiro vem da intuição."
    },
    11: {
        name: "A Força",
        desc: "Poder pessoal, energia física abundante, magnetismo e controle dos instintos. Rege a vitalidade física e o trabalho duro.",
        plus: "Vitalidade física excepcional, coragem moral, magnetismo sexual, força para trabalhar incansavelmente.",
        minus: "Agressividade física/verbal, esgotamento por excesso de trabalho (workaholic), fraqueza moral ou impotência.",
        comfort: "Seu equilíbrio exige atividade física e paixão. Você se recarrega gastando energia física de forma saudável.",
        talents: "Trabalhos corporais, esportes, liderança inspiradora por energia ativa, cirurgia ou veterinária.",
        karma: "Uso da força física para oprimir fracos, ou submissão covarde à violência alheia em vidas passadas.",
        love: "Relacionamentos passionais e magnéticos. O parceiro deve possuir forte energia e vitalidade física semelhante.",
        money: "Esportes profissionais, cirurgias médicas, resgates civis, trabalhos manuais intensos. Dinheiro vem do esforço ativo."
    },
    12: {
        name: "O Enforcado",
        desc: "Serviço altruísta, nova perspectiva das coisas, sacrifício saudável e compaixão. Rege a visão fora da caixa.",
        plus: "Pensamento criativo inovador, altruísmo, empatia profunda, paciência para esperar o momento certo.",
        minus: "Complexo de vítima, sacrifício desnecessário pelos outros, estagnação, incapacidade de dizer 'não'.",
        comfort: "Você precisa ver o mundo por outros ângulos. Recarrega-se ajudando os outros sem se anular.",
        talents: "Design alternativo, terapias holísticas de cura, psicologia, artes visuais e voluntariado internacional.",
        karma: "Vidas passadas de traição ou sacrifício forçado por dogmas. Hoje, aprenda a ajudar sem se colocar em papel de vítima.",
        love: "Parceiro sensível e artístico. Evite relacionamentos onde você se sacrifica totalmente para salvar o outro.",
        money: "Artes visuais, psicologia inovadora, terapias integrativas, ONGs ou consultoria de inovação."
    },
    13: {
        name: "A Morte",
        desc: "Renascimento, transformações radicais, desapego do passado e transição. Rege a regeneração e as mudanças inevitáveis.",
        plus: "Facilidade de se reinventar, desapego material, coragem para encerrar ciclos velhos e iniciar o novo.",
        minus: "Medo crônico da morte/mudanças, apego a situações falidas, depressão por não deixar o passado ir.",
        comfort: "Você precisa aceitar a impermanência. Recarrega-se eliminando coisas velhas e iniciando novos capítulos de vida.",
        talents: "Gestão de crises, cirurgias, resgates, transições corporativas, psicologia do luto e inovação transformadora.",
        karma: "Pode ter causado mudanças destrutivas na vida de outros ou ter se agarrado ao poder até o fim em outra encarnação.",
        love: "Relacionamentos intensos que promovem profunda transformação pessoal. O parceiro deve ser adaptável e corajoso.",
        money: "Seguradoras, cirurgias, reciclagem, reestruturação de empresas falidas ou demolições. O dinheiro vem da renovação."
    },
    14: {
        name: "A Temperança",
        desc: "Moderação, equilíbrio emocional, paciência, arte e cura pela água. Rege a temperança e a paz interior.",
        plus: "Paciência, moderação nas paixões, equilíbrio de humor, talento artístico refinado e conexões harmônicas.",
        minus: "Desequilíbrio emocional, vícios em substâncias, impaciência, agressividade nos hábitos alimentares/sociais.",
        comfort: "Sua paz exige moderação e silêncio estético. Você se recarrega próximo a fontes de água ou pintando.",
        talents: "Artes plásticas, música clássica, terapias florais, química de essências ou culinária saudável e equilibrada.",
        karma: "Vidas de excessos e vícios que danificaram sua saúde física ou emocional. Busca por temperança nesta vida.",
        love: "Busca conexões de profunda paz e amizade. Relações sem dramas ou explosões emocionais desnecessárias.",
        money: "Artes plásticas, farmácia natural, diplomacia de paz, farmácia de essências. Dinheiro flui pela paciência."
    },
    15: {
        name: "O Diabo",
        desc: "Carisma irresistível, abundância financeira, atração magnética e tentações. Rege a sombra e a energia da riqueza.",
        plus: "Forte carisma, magnetismo de liderança, inteligência para grandes negócios financeiros, poder de atração.",
        minus: "Ganância destrutiva, vícios sexuais/financeiros, manipulação pesada de pessoas, ciúme obsessivo e raiva.",
        comfort: "Você precisa aceitar seus instintos de forma consciente. Recarrega-se no meio de grandes negociações materiais.",
        talents: "Grandes vendas, psicologia da persuasão, carisma de palco, gestão de grandes patrimônios e alta política.",
        karma: "Abuso de magia sexual, ganância destrutiva que escravizou outros ou manipulações obscuras em vidas passadas.",
        love: "Relações intensas, magnéticas e sexuais. Desafio de não cair em jogos de ciúme, controle ou dependência.",
        money: "Grandes investimentos, bancos, política corporativa de alto escalão, vendas de luxo e entretenimento adulto."
    },
    16: {
        name: "A Torre",
        desc: "Destruição de falsas ilusões, reconstrução espiritual rápida e despertar. Rege as grandes guinadas de vida.",
        plus: "Espírito indomável, capacidade de reconstruir a vida do zero após crises, desapego de estruturas obsoletas.",
        minus: "Agressividade destrutiva, apego ao orgulho, medo crônico de perder bens materiais ou rigidez mental.",
        comfort: "Seu equilíbrio exige aceitar a quebra de ilusões. Você se recarrega desapegando-se de posses físicas inúteis.",
        talents: "Arquitetura, engenharia civil, demolições técnicas, reestruturação corporativa radical e liderança espiritual.",
        karma: "Destruição de lares ou templos alheios em vidas passadas, ou orgulho imenso de suas posses materiais.",
        love: "Relacionamentos que quebram suas velhas estruturas de orgulho. O parceiro deve amar a verdade nua e crua.",
        money: "Construção, arquitetura de interiores, reestruturação física, gerenciamento de desastres. Dinheiro vem do tijolo."
    },
    17: {
        name: "A Estrela",
        desc: "Fama, talentos artísticos, esperança cósmica e inspiração. Rege as artes, a beleza pública e o brilho pessoal.",
        plus: "Brilho pessoal inato, esperança, talentos artísticos notáveis, capacidade de inspirar multidões pelo carisma.",
        minus: "Estrelismo, orgulho excessivo, timidez paralisante por medo de não ser bom, solidão pública por frieza.",
        comfort: "Você precisa expressar sua arte e brilhar. Recarrega-se no palco, apresentando suas ideias ou sob o luar.",
        talents: "Canto, atuação, design gráfico, artes plásticas, oratória motivacional e cura através de técnicas alternativas.",
        karma: "Pode ter desdenhado de seus próprios dons espirituais ou ter agido com vaidade insuportável em outra vida.",
        love: "Busca um parceiro que o admire e incentive seu brilho. Relações românticas inspiradoras e estéticas.",
        money: "Show business, mídias sociais, artes cênicas, joalheria, cirurgia estética. Dinheiro vem da imagem e beleza."
    },
    18: {
        name: "A Lua",
        desc: "Poder de materialização mental, imaginação fértil, medos e intuição profunda. Rege a atração e a psicologia profunda.",
        plus: "Poder imenso de manifestar pensamentos (lei da atração), imaginação rica, dons artísticos e forte intuição psicológica.",
        minus: "Medos paralisantes, mentiras, ilusões, depressão por pensamentos sombrios ou envolvimento com magia prejudicial.",
        comfort: "Você atrai o que pensa. Recarrega-se escrevendo histórias, sonhando acordado e em ambientes de água.",
        talents: "Escrita criativa, psicologia profunda, fotografia, cinema, terapias holísticas de sonhos e lei da atração.",
        karma: "Uso de mentiras, ilusões ou feitiçaria prejudicial para conseguir o que queria de outras pessoas.",
        love: "Parceiro com conexão telepática. Risco de atrair pessoas manipuladoras se você não curar seus próprios medos.",
        money: "Cinema, fotografia, marketing visual, psicologia analítica, escrita de mistério. O dinheiro flui do poder da mente."
    },
    19: {
        name: "O Sol",
        desc: "Sucesso estrondoso, riqueza material, generosidade e energia solar infantil. Rege a felicidade, a vitalidade e os filhos.",
        plus: "Grande otimismo, generosidade calorosa, sucesso financeiro natural, vitalidade física e amor por crianças.",
        minus: "Egocentrismo infantil, orgulho vaidoso, queimar a si mesmo por estresse profissional ou agressividade verbal.",
        comfort: "Você precisa aquecer e liderar os outros. Você se recarrega ao sol, com crianças ou liderando grandes equipes.",
        talents: "Liderança de projetos sociais, animação de eventos infantis, investimentos corporativos e oratória inspiradora.",
        karma: "Egoísmo solar que ignorou os necessitados, ou orgulho que humilhou os que dependiam de você em outra encarnação.",
        love: "Relações felizes, abertas e ensolaradas. Ideal um parceiro que queira brilhar ao seu lado e ame crianças.",
        money: "Indústria de brinquedos, energia solar, investimentos de grande porte, cargos públicos eletivos. O dinheiro flui."
    },
    20: {
        name: "O Julgamento",
        desc: "Cura ancestral, conexão com a linhagem familiar e despertar da alma. Rege a pátria, a família grande e o perdão.",
        plus: "Conexão forte com a ancestralidade, capacidade de perdoar os pais, dons de cura espiritual e despertar de consciência.",
        minus: "Rancor familiar eterno, problemas com a pátria/justiça, repetição cega dos erros dos pais ou medo do novo.",
        comfort: "Sua paz exige harmonia familiar. Você se recarrega em reuniões de família, perdoando ou estudando história familiar.",
        talents: "História, arqueologia, genealogia, cura espiritual ancestral, direito de família e rejuvenescimento.",
        karma: "Traição à sua própria família ou país em vidas passadas, ou ter carregado rancores familiares até o túmulo.",
        love: "Busca um parceiro maduro que respeite seus valores familiares. Conexões cármicas fortes com o parceiro.",
        money: "Genealogia, heranças civis, negócios familiares passados de geração em geração, história. O dinheiro vem da raiz."
    },
    21: {
        name: "O Mundo",
        desc: "Globalização, paz mundial, ausência de preconceitos e tolerância cósmica. Rege o estrangeiro, línguas e internet.",
        plus: "Mente aberta sem fronteiras, facilidade com línguas, sucesso com negócios na internet ou no estrangeiro, paz interior.",
        minus: "Preconceito geográfico/racial, xenofobia, medo de viajar, limitação de metas por apego ao local de nascimento.",
        comfort: "Você se sente melhor conectando o mundo. Você se recarrega viajando para o estrangeiro ou navegando na internet.",
        talents: "Relações internacionais, tradução de idiomas, comércio eletrônico global, diplomacia mundial e internet.",
        karma: "Preconceito e atos de discriminação contra estrangeiros ou limitação forçada das ideias alheias em vidas passadas.",
        love: "Atrai parceiros de outras culturas ou países. Relações expandidas por viagens e diversidade de visão de mundo.",
        money: "E-commerce global, TI, relações exteriores, aviação comercial, agências de tradução. Dinheiro do mundo."
    },
    22: {
        name: "O Louco",
        desc: "Liberdade absoluta, desapego total de posses, humor alegre e espontaneidade. Rege as viagens sem rumo e a leveza.",
        plus: "Leveza de espírito, desapego material absoluto, senso de humor contagiante, liberdade para ir e vir sem travas.",
        minus: "Irresponsabilidade infantil, comportamento anárquico autodestrutivo, dependência de drogas/álcool, falta de rumo.",
        comfort: "Você precisa se sentir livre. Recarrega-se em viagens mochileiras sem destino, rindo e quebrando rotinas chatas.",
        talents: "Comédia, atuação improvisada, turismo alternativo, esportes radicais de aventura e redação criativa.",
        karma: "Vidas passadas de escravidão material autoimposta ou irresponsabilidade que causou mortes/danos graves a outros.",
        love: "Parceiro brincalhão, leve e que ame a liberdade. Evite relações possessivas ou extremamente controladoras.",
        money: "Trabalhos freelancers, comédia stand-up, turismo mochileiro ecológico, empregos de criação livre. Dinheiro sem regras."
    }
};

// Karmic Tails Database
const karmicTailsDb = {
    "18-6-6": {
        name: "Magia do Amor / Amor Não Correspondido",
        past: "Em uma vida passada, você pode ter usado magias, rituais ou manipulações emocionais drásticas para forçar o amor de alguém, ou sofreu intensamente com um amor obsessivo não correspondido.",
        current: "Tendência crônica à dependência emocional, medo profundo de ser abandonado (o que faz você idealizar demais as pessoas ou fugir dos relacionamentos antes de ser deixado) e dificuldade de amar a si mesmo.",
        healing: "Aprenda a cultivar o amor-próprio como prioridade. Respeite totalmente o livre-arbítrio alheio nos relacionamentos e evite jogos de controle ou ciúme obsessivo."
    },
    "15-20-5": {
        name: "O Guerreiro / Rebelde Ancestral",
        past: "Você fez parte de conflitos armados violentos envolvendo sua família, ou revoltou-se radicalmente contra seu próprio clã, quebrando regras morais e sendo banido da linhagem.",
        current: "Dificuldades sérias com figuras de autoridade, brigas constantes no ambiente familiar por herança ou orgulho, e uma tendência a recusar a ajuda dos outros por orgulho ferido.",
        healing: "Pratique o perdão ativo aos seus pais e ancestrais. Tente unir a família em vez de brigar, e use sua tremenda força para construir harmonia corporativa ou de grupo."
    },
    "21-4-10": {
        name: "Alma Oprimida",
        past: "Você viveu sob o controle rígido de tiranos, governos ditatoriais ou um parceiro opressor, sendo incapaz de fazer escolhas livres ou de expressar seus desejos reais.",
        current: "Falta de autoconfiança severa, hábito de sempre esperar a aprovação ou permissão dos outros antes de agir, e a tendência a se acomodar em empregos ou relações que sufocam seu potencial.",
        healing: "Assuma as rédeas do seu próprio destino. Tome decisões independentes sem buscar validação externa e entenda que sua liberdade é seu bem mais precioso."
    },
    "default": {
        name: "Aprendizado Cármico Geral",
        past: "Em suas encarnações anteriores, sua alma enfrentou desafios relacionados às energias que formam esta base, necessitando agora de equilíbrio.",
        current: "Você pode enfrentar desafios nessas áreas de forma repetitiva (como barreiras na saúde ou testes de integridade moral) que chamam sua atenção para a evolução.",
        healing: "Estude o lado luminoso dos arcanos da sua cauda. Pratique a meditação, o desapego e busque agir de forma íntegra para destravar sua vida material."
    }
};

// Core mathematical reduction logic: sum of digits
function reduceNumber(n) {
    if (n <= 0) return 22; // Map 0 and negative to 22 (The Fool)
    while (n > 22) {
        let sum = 0;
        let s = String(n);
        for (let i = 0; i < s.length; i++) {
            sum += parseInt(s[i]);
        }
        n = sum;
    }
    return n;
}

// Calculate all 32 age points around the boundary circle
function calculateAgePoints(r) {
    const v = new Array(32);
    
    // Main 8 points representing ages 0, 10, 20, 30, 40, 50, 60, 70
    v[0] = r.A;
    v[4] = r.F;
    v[8] = r.B;
    v[12] = r.G;
    v[16] = r.C;
    v[20] = r.H;
    v[24] = r.D;
    v[28] = r.I;
    
    // Midpoints representing ages 5, 15, 25, 35, 45, 55, 65, 75
    v[2] = reduceNumber(v[0] + v[4]);
    v[6] = reduceNumber(v[4] + v[8]);
    v[10] = reduceNumber(v[8] + v[12]);
    v[14] = reduceNumber(v[12] + v[16]);
    v[18] = reduceNumber(v[16] + v[20]);
    v[22] = reduceNumber(v[20] + v[24]);
    v[26] = reduceNumber(v[24] + v[28]);
    v[30] = reduceNumber(v[28] + v[0]);
    
    // Quarter-points representing ages 2.5, 7.5, 12.5, etc.
    for (let i = 0; i < 8; i++) {
        const baseIdx = i * 4;
        const midIdx = baseIdx + 2;
        const nextIdx = (baseIdx + 4) % 32;
        
        v[baseIdx + 1] = reduceNumber(v[baseIdx] + v[midIdx]);
        v[baseIdx + 3] = reduceNumber(v[midIdx] + v[nextIdx]);
    }
    
    return v;
}

// Calculate all points of the Destiny Matrix from birth data
function calculateMatrix(day, month, year) {
    const A = reduceNumber(day);
    const B = month; // Month is naturally 1-12
    
    // Year digits sum
    const yearDigitsSum = String(year).split('').reduce((sum, d) => sum + parseInt(d), 0);
    const C = reduceNumber(yearDigitsSum);
    
    const D = reduceNumber(A + B + C);
    const E = reduceNumber(A + B + C + D);
    
    // Intermediate diagonal points (F, G, H, I) representing ages 10, 30, 50, 70
    const F = reduceNumber(A + B);
    const G = reduceNumber(B + C);
    const H = reduceNumber(C + D);
    const I = reduceNumber(D + A);
    
    // Sub-points along the lower vertical axis (Karmic Tail)
    const d2 = reduceNumber(E + D); // Solar Plexus / Muladhara bridge
    const d1 = reduceNumber(d2 + D); // Sacral / Karmic bridge
    
    // Sub-points along the left horizontal axis
    const a2 = reduceNumber(A + E);
    const a1 = reduceNumber(A + a2);
    
    // Sub-points along the upper vertical axis
    const b2 = reduceNumber(B + E);
    const b1 = reduceNumber(b2 + B);
    
    // Sub-points along the right horizontal axis
    const c2 = reduceNumber(C + E);
    const c1 = reduceNumber(c2 + C);
    
    // Balance, Love and Money lines on diagonal EH
    const bal = reduceNumber(E + H);
    const love_pt = reduceNumber(bal + D);
    const money_pt = reduceNumber(bal + C);
    
    return {
        A, B, C, D, E,
        F, G, H, I,
        d2, d1,
        a2, a1,
        b2, b1,
        c2, c1,
        bal, love_pt, money_pt
    };
}

// HTML & SVG Rendering Controller
document.addEventListener("DOMContentLoaded", () => {
    const matrixForm = document.getElementById("matrixForm");
    const instructionView = document.getElementById("instructionView");
    const resultsArea = document.getElementById("resultsArea");
    const loadingScreen = document.getElementById("loadingScreen");
    const savedList = document.getElementById("savedList");
    
    // Form fields
    const fullNameInput = document.getElementById("fullName");
    const birthDateInput = document.getElementById("birthDate");
    const birthTimeInput = document.getElementById("birthTime");
    const birthPlaceInput = document.getElementById("birthPlace");
    const genderSelect = document.getElementById("gender");
    const apiKeyInput = document.getElementById("apiKey");
    
    let activeMatrixData = null;
    let savedEntries = JSON.parse(localStorage.getItem("destinyMatrices") || "[]");

    // Load saved matrices on start
    renderSavedList();

    // Hide API key input if EMBEDDED_API_KEY is defined or USE_SECURE_SERVERLESS is enabled
    if ((typeof EMBEDDED_API_KEY !== "undefined" && EMBEDDED_API_KEY) || (typeof USE_SECURE_SERVERLESS !== "undefined" && USE_SECURE_SERVERLESS)) {
        const apiKeyInputGroup = apiKeyInput.closest(".form-group");
        if (apiKeyInputGroup) {
            apiKeyInputGroup.style.display = "none";
        }
    }

    // Form submit listener
    matrixForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const name = fullNameInput.value.trim();
        const dateStr = birthDateInput.value;
        const time = birthTimeInput.value;
        const place = birthPlaceInput.value.trim();
        const gender = genderSelect.value;
        const apiKey = apiKeyInput.value.trim() || EMBEDDED_API_KEY;
        
        if (!dateStr) return;
        
        // Show cosmic loading screen
        loadingScreen.classList.add("active");
        
        setTimeout(() => {
            const dateParts = dateStr.split("-");
            const year = parseInt(dateParts[0]);
            const month = parseInt(dateParts[1]);
            const day = parseInt(dateParts[2]);
            
            const results = calculateMatrix(day, month, year);
            activeMatrixData = { name, day, month, year, time, place, gender, results, apiKey };
            
            // Save to local storage if not already there
            saveMatrixEntry(activeMatrixData);
            
            // Render UI
            renderMatrixUI(activeMatrixData);
            
            loadingScreen.classList.remove("active");
            instructionView.style.display = "none";
            resultsArea.style.display = "flex";
        }, 1500);
    });

    // Save calculation entry
    function saveMatrixEntry(entry) {
        const id = `${entry.day}-${entry.month}-${entry.year}-${entry.name}`;
        if (!savedEntries.some(e => `${e.day}-${e.month}-${e.year}-${e.name}` === id)) {
            savedEntries.push({
                name: entry.name,
                day: entry.day,
                month: entry.month,
                year: entry.year,
                time: entry.time,
                place: entry.place,
                gender: entry.gender
            });
            localStorage.setItem("destinyMatrices", JSON.stringify(savedEntries));
            renderSavedList();
        }
    }

    // Render list of saved matrices
    function renderSavedList() {
        savedList.innerHTML = "";
        if (savedEntries.length === 0) {
            savedList.innerHTML = `<p style="font-size: 0.8rem; color: var(--text-muted); font-style: italic;">Nenhuma matriz salva ainda.</p>`;
            return;
        }
        
        savedEntries.forEach((entry, index) => {
            const item = document.createElement("div");
            item.className = "saved-item";
            item.innerHTML = `
                <div>
                    <strong>${entry.name}</strong><br>
                    <span style="font-size: 0.75rem; color: var(--text-muted);">${entry.day.toString().padStart(2, '0')}.${entry.month.toString().padStart(2, '0')}.${entry.year}</span>
                </div>
                <button class="delete-saved-btn" data-index="${index}"><i class="fa-solid fa-trash"></i></button>
            `;
            
            item.addEventListener("click", (e) => {
                if (e.target.closest(".delete-saved-btn")) return;
                loadSavedEntry(entry);
            });
            
            savedList.appendChild(item);
        });

        // Add delete listeners
        document.querySelectorAll(".delete-saved-btn").forEach(btn => {
            btn.addEventListener("click", (e) => {
                e.stopPropagation();
                const index = parseInt(btn.getAttribute("data-index"));
                savedEntries.splice(index, 1);
                localStorage.setItem("destinyMatrices", JSON.stringify(savedEntries));
                renderSavedList();
            });
        });
    }

    // Load saved matrix into UI
    function loadSavedEntry(entry) {
        fullNameInput.value = entry.name;
        // Date format: YYYY-MM-DD
        birthDateInput.value = `${entry.year}-${entry.month.toString().padStart(2, '0')}-${entry.day.toString().padStart(2, '0')}`;
        birthTimeInput.value = entry.time || "";
        birthPlaceInput.value = entry.place || "";
        genderSelect.value = entry.gender;
        
        // Trigger calculate form
        matrixForm.dispatchEvent(new Event("submit"));
    }

    // Main UI rendering function
    function renderMatrixUI(data) {
        const r = data.results;
        
        // Draw the SVG octagram star
        drawDestinyMatrixSVG(r);
        
        // Fill Text Reports
        fillReportTexts(r);
        
        // Build Chakra Health table
        buildChakraTable(r);
        
        // Reset and launch the Oracle chat
        initOracleChat(data);
    }

    // Draw Destiny Matrix SVG
    function drawDestinyMatrixSVG(r) {
        const svgContainer = document.getElementById("svgContainer");
        
        // Calculate all 32 points on outer circle dynamically
        const agePoints = calculateAgePoints(r);
        let outerNodesHtml = "";
        
        for (let i = 0; i < 32; i++) {
            const age = i * 2.5;
            const angle = 180 + i * 11.25;
            const rad = angle * Math.PI / 180;
            const x = 250 + 200 * Math.cos(rad);
            const y = 250 + 200 * Math.sin(rad);
            const val = agePoints[i];
            
            if (i % 4 === 0) {
                // Main 8 points (0, 10, 20, 30, 40, 50, 60, 70)
                let title = "";
                let desc = "";
                let strokeColor = "var(--purple-glow)";
                let size = 13;
                let strokeWidth = 1.5;
                let textY = y + 4;
                let fontSize = 10;
                let filterGlow = "";
                
                if (i === 0) {
                    title = "Ponto A (0 anos) - Retrato da Personalidade";
                    desc = "Como o mundo enxerga você. Seus talentos sociais iniciais.";
                    size = 16;
                    strokeWidth = 2.5;
                    textY = y + 5;
                    fontSize = 12;
                    filterGlow = 'filter="url(#glow)"';
                } else if (i === 8) {
                    title = "Ponto B (20 anos) - Canal de Talentos Espirituais";
                    desc = "Sua conexão com o divino, a intuição e as inspirações elevadas.";
                    size = 16;
                    strokeWidth = 2.5;
                    textY = y + 5;
                    fontSize = 12;
                    filterGlow = 'filter="url(#glow)"';
                } else if (i === 16) {
                    title = "Ponto C (40 anos) - Canal Material & Vidas Passadas";
                    desc = "A forma como você atrai riqueza e os testes materiais do passado.";
                    size = 16;
                    strokeWidth = 2.5;
                    textY = y + 5;
                    fontSize = 12;
                    filterGlow = 'filter="url(#glow)"';
                } else if (i === 24) {
                    title = "Ponto D (60 anos) - Base Cármica / Âncora da Cauda";
                    desc = "A principal lição não aprendida de vidas passadas. Exige cura ativa.";
                    size = 20;
                    strokeWidth = 3;
                    textY = y + 5;
                    fontSize = 14;
                    strokeColor = "var(--pink-glow)";
                    filterGlow = 'filter="url(#drop-shadow)"';
                } else {
                    // F, G, H, I
                    strokeColor = "var(--gold-glow)";
                    if (i === 4) {
                        title = "Ponto F (10 anos) - Energia Ancestral (Linha Paterna)";
                        desc = "Qualidades e talentos passados pela linhagem paterna/materna.";
                    } else if (i === 12) {
                        title = "Ponto G (30 anos) - Energia Ancestral (Linha Paterna)";
                        desc = "Missão espiritual e dons herdados dos antepassados.";
                    } else if (i === 20) {
                        title = "Ponto H (50 anos) - Material Ancestral (Linha Materna)";
                        desc = "Bloqueios e potenciais financeiros que vieram da sua árvore familiar.";
                    } else if (i === 28) {
                        title = "Ponto I (70 anos) - Desafio Ancestral (Linha Materna)";
                        desc = "Força de superação e testes da linhagem familiar materna.";
                    }
                }
                
                outerNodesHtml += `
                <g class="node-group" data-title="${title}" data-val="${val}" data-desc="${desc}">
                    <circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${size}" fill="var(--bg-dark)" stroke="${strokeColor}" stroke-width="${strokeWidth}" class="node-circle" style="color: ${strokeColor};" ${filterGlow} />
                    <text x="${x.toFixed(1)}" y="${textY.toFixed(1)}" text-anchor="middle" fill="#fff" class="node-text" font-size="${fontSize}" ${i === 24 ? 'font-weight="bold"' : ''}>${val}</text>
                </g>`;
            } else if (i % 2 === 0) {
                // Midpoints (5, 15, 25, 35, 45, 55, 65, 75)
                const title = `Ponto de Idade: ${age} anos`;
                const desc = `Energia de transição e foco de aprendizado para o período dos ${age} anos.`;
                const strokeColor = "var(--blue-glow)";
                
                outerNodesHtml += `
                <g class="node-group" data-title="${title}" data-val="${val}" data-desc="${desc}">
                    <circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="10" fill="var(--bg-dark)" stroke="${strokeColor}" stroke-width="1.5" class="node-circle" style="color: ${strokeColor};" />
                    <text x="${x.toFixed(1)}" y="${(y + 3.5).toFixed(1)}" text-anchor="middle" fill="#fff" class="node-text" font-size="8">${val}</text>
                </g>`;
            } else {
                // Quarter-points (2.5, 7.5, 12.5, etc.)
                const title = `Ponto de Idade: ${age} anos`;
                const desc = `Influência energética sutil de transição aos ${age} anos de idade.`;
                const strokeColor = "rgba(255, 255, 255, 0.35)";
                
                outerNodesHtml += `
                <g class="node-group" data-title="${title}" data-val="${val}" data-desc="${desc}">
                    <circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="7.5" fill="var(--bg-dark)" stroke="${strokeColor}" stroke-width="1" class="node-circle" style="color: ${strokeColor};" />
                    <text x="${x.toFixed(1)}" y="${(y + 2.5).toFixed(1)}" text-anchor="middle" fill="#aaa" class="node-text" font-size="6.5">${val}</text>
                </g>`;
            }
        }

        // SVG code template
        const svgCode = `
            <svg viewBox="0 0 500 500" class="matrix-svg" xmlns="http://www.w3.org/2000/svg">
                <!-- Glowing Filter -->
                <defs>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                    <filter id="drop-shadow" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#000" flood-opacity="0.6"/>
                    </filter>
                </defs>

                <!-- Grid Overlay Background Lines -->
                <circle cx="250" cy="250" r="200" fill="none" stroke="rgba(255, 255, 255, 0.15)" stroke-width="1" />
                <circle cx="250" cy="250" r="141" fill="none" stroke="rgba(255, 183, 3, 0.05)" stroke-width="1" />
                
                <!-- Main Cross lines -->
                <line x1="50" y1="250" x2="450" y2="250" stroke="rgba(255,255,255,0.08)" stroke-width="1.5" />
                <line x1="250" y1="50" x2="250" y2="450" stroke="rgba(255,255,255,0.08)" stroke-width="1.5" />
                <line x1="108.6" y1="108.6" x2="391.4" y2="391.4" stroke="rgba(255,255,255,0.05)" stroke-width="1" />
                <line x1="108.6" y1="391.4" x2="391.4" y2="108.6" stroke="rgba(255,255,255,0.05)" stroke-width="1" />

                <!-- Rotated Square (Personal Square - Diamond) -->
                <polygon points="250,50 450,250 250,450 50,250" fill="none" stroke="var(--purple-glow)" stroke-width="2.5" filter="url(#glow)" />
                
                <!-- Straight Square (Ancestral Square) -->
                <polygon points="108.6,108.6 391.4,108.6 391.4,391.4 108.6,391.4" fill="none" stroke="var(--gold-glow)" stroke-width="1.8" stroke-dasharray="4 2" />

                <!-- Diagonal lines for Love/Money channels inside Personal Square -->
                <line x1="250" y1="250" x2="391.4" y2="391.4" stroke="rgba(255, 255, 255, 0.2)" stroke-width="1.5" />
                <line x1="320.7" y1="320.7" x2="250" y2="450" stroke="rgba(255, 0, 84, 0.3)" stroke-width="1.5" stroke-dasharray="2 2" />
                <line x1="320.7" y1="320.7" x2="450" y2="250" stroke="rgba(6, 214, 160, 0.3)" stroke-width="1.5" stroke-dasharray="2 2" />

                <!-- 32 Outer Boundary Nodes -->
                ${outerNodesHtml}

                <!-- Inner Axis Sub-points (a1, a2, b1, b2, c1, c2, d2, d1) -->
                <!-- Left Horizontal (a1, a2) -->
                <g class="node-group" data-title="Ponto a1 - Canal do Retrato" data-val="${r.a1}" data-desc="Energia auxiliar da sua personalidade e autoexpressão.">
                    <circle cx="116.7" cy="250" r="11" fill="var(--bg-dark)" stroke="var(--purple-glow)" stroke-width="1.5" class="node-circle" style="color: var(--purple-glow);" />
                    <text x="116.7" y="253.5" text-anchor="middle" fill="#fff" class="node-text" font-size="9">${r.a1}</text>
                </g>
                <g class="node-group" data-title="Ponto a2 - Canal da Essência Lateral" data-val="${r.a2}" data-desc="Energia de ligação com o centro da alma.">
                    <circle cx="183.3" cy="250" r="11" fill="var(--bg-dark)" stroke="var(--purple-glow)" stroke-width="1.5" class="node-circle" style="color: var(--purple-glow);" />
                    <text x="183.3" y="253.5" text-anchor="middle" fill="#fff" class="node-text" font-size="9">${r.a2}</text>
                </g>

                <!-- Upper Vertical (b1, b2) -->
                <g class="node-group" data-title="Ponto b1 - Canal Espiritual Superior" data-val="${r.b1}" data-desc="Dons intelectuais e de sabedoria espiritual.">
                    <circle cx="250" cy="116.7" r="11" fill="var(--bg-dark)" stroke="var(--blue-glow)" stroke-width="1.5" class="node-circle" style="color: var(--blue-glow);" />
                    <text x="250" y="120" text-anchor="middle" fill="#fff" class="node-text" font-size="9">${r.b1}</text>
                </g>
                <g class="node-group" data-title="Ponto b2 - Canal de Comunicação Divina" data-val="${r.b2}" data-desc="Expressão criativa da verdade espiritual.">
                    <circle cx="250" cy="183.3" r="11" fill="var(--bg-dark)" stroke="var(--blue-glow)" stroke-width="1.5" class="node-circle" style="color: var(--blue-glow);" />
                    <text x="250" y="186.5" text-anchor="middle" fill="#fff" class="node-text" font-size="9">${r.b2}</text>
                </g>

                <!-- Right Horizontal (c1, c2) -->
                <g class="node-group" data-title="Ponto c1 - Canal Material Lateral" data-val="${r.c1}" data-desc="Prosperidade e talentos práticos e intelectuais de negócios.">
                    <circle cx="383.3" cy="250" r="11" fill="var(--bg-dark)" stroke="var(--teal-glow)" stroke-width="1.5" class="node-circle" style="color: var(--teal-glow);" />
                    <text x="383.3" y="253.5" text-anchor="middle" fill="#fff" class="node-text" font-size="9">${r.c1}</text>
                </g>
                <g class="node-group" data-title="Ponto c2 - Canal Material Interno" data-val="${r.c2}" data-desc="Estabilidade e fluxos financeiros.">
                    <circle cx="316.7" cy="250" r="11" fill="var(--bg-dark)" stroke="var(--teal-glow)" stroke-width="1.5" class="node-circle" style="color: var(--teal-glow);" />
                    <text x="316.7" y="253.5" text-anchor="middle" fill="#fff" class="node-text" font-size="9">${r.c2}</text>
                </g>

                <!-- Lower Vertical (d2, d1 - Karmic Tail) -->
                <g class="node-group" data-title="Ponto d2 - Entrada da Cauda Cármica (Sob o Centro)" data-val="${r.d2}" data-desc="Nexo entre seus desejos profundos e a bagagem de vidas passadas.">
                    <circle cx="250" cy="316.7" r="11" fill="var(--bg-dark)" stroke="var(--pink-glow)" stroke-width="1.5" class="node-circle" style="color: var(--pink-glow);" />
                    <text x="250" y="320" text-anchor="middle" fill="#fff" class="node-text" font-size="9">${r.d2}</text>
                </g>
                <g class="node-group" data-title="Ponto d1 - Bloqueio Cármico Central" data-val="${r.d1}" data-desc="Desafios inconscientes que impedem você de se abrir para o sucesso material e amoroso.">
                    <circle cx="250" cy="383.3" r="11" fill="var(--bg-dark)" stroke="var(--pink-glow)" stroke-width="1.5" class="node-circle" style="color: var(--pink-glow);" />
                    <text x="250" y="387" text-anchor="middle" fill="#fff" class="node-text" font-size="9">${r.d1}</text>
                </g>

                <!-- Diagonal EH sub-points: Love and Money Line nodes -->
                <g class="node-group" data-title="Ponto de Equilíbrio - Relação Amor & Finanças" data-val="${r.bal}" data-desc="A chave mágica de equilíbrio entre o amor e o dinheiro.">
                    <circle cx="320.7" cy="320.7" r="12" fill="var(--bg-dark)" stroke="var(--blue-glow)" stroke-width="2" class="node-circle" style="color: var(--blue-glow);" />
                    <text x="320.7" y="324" text-anchor="middle" fill="#fff" class="node-text" font-size="10">${r.bal}</text>
                </g>
                <g class="node-group" data-title="Canal do Amor (♥) - Entrada do Amor" data-val="${r.love_pt}" data-desc="Energia que você atrai nos relacionamentos íntimos e o parceiro ideal.">
                    <circle cx="285.3" cy="385.3" r="11" fill="var(--bg-dark)" stroke="var(--pink-glow)" stroke-width="1.5" class="node-circle" style="color: var(--pink-glow);" />
                    <text x="285.3" y="388.5" text-anchor="middle" fill="#fff" class="node-text" font-size="9">${r.love_pt}</text>
                </g>
                <g class="node-group" data-title="Canal Financeiro ($) - Entrada do Dinheiro" data-val="${r.money_pt}" data-desc="Sua atitude ideal no trabalho para atrair fluxo de caixa livre.">
                    <circle cx="385.3" cy="285.3" r="11" fill="var(--bg-dark)" stroke="var(--teal-glow)" stroke-width="1.5" class="node-circle" style="color: var(--teal-glow);" />
                    <text x="385.3" y="288.5" text-anchor="middle" fill="#fff" class="node-text" font-size="9">${r.money_pt}</text>
                </g>

                <!-- Center Point E (Soul Center / Comfort Zone) -->
                <g class="node-group" data-title="Ponto E (Centro) - Zona de Conforto da Alma" data-val="${r.E}" data-desc="Sua essência e temperamento nuclear. Onde você se sente recarregado.">
                    <circle cx="250" cy="250" r="24" fill="var(--bg-dark)" stroke="var(--gold-glow)" stroke-width="3.5" class="node-circle" style="color: var(--gold-glow);" filter="url(#glow)" />
                    <text x="250" y="256" text-anchor="middle" fill="#fff" class="node-text" font-size="16" font-weight="bold">${r.E}</text>
                </g>

                <!-- Symbols overlaid visually -->
                <!-- Heart overlay next to love_pt -->
                <text x="285.3" y="368" text-anchor="middle" fill="var(--pink-glow)" font-size="10" font-weight="bold" pointer-events="none">♥</text>
                <!-- Dollar overlay next to money_pt -->
                <text x="385.3" y="268" text-anchor="middle" fill="var(--teal-glow)" font-size="10" font-weight="bold" pointer-events="none">$</text>
            </svg>
        `;
        
        svgContainer.innerHTML = svgCode;
        
        // Add interactive tooltips
        initSVGTooltips();
    }

    // Tooltip handling
    function initSVGTooltips() {
        const tooltip = document.getElementById("svgTooltip");
        const nodeGroups = document.querySelectorAll(".node-group");
        
        nodeGroups.forEach(node => {
            node.addEventListener("mouseenter", (e) => {
                const title = node.getAttribute("data-title");
                const val = node.getAttribute("data-val");
                const desc = node.getAttribute("data-desc");
                const arcName = arcanasDb[val]?.name || "Arcano";
                
                tooltip.innerHTML = `
                    <strong style="color: var(--gold-glow); display:block; margin-bottom: 2px;">${title}</strong>
                    <span style="color: var(--purple-glow); font-weight:600; display:block; margin-bottom: 5px;">
                        Arcano ${val} - ${arcName}
                    </span>
                    <p style="margin:0; font-size:0.75rem; color:#d1d5db; line-height:1.3;">${desc}</p>
                `;
                
                tooltip.classList.add("active");
            });
            
            node.addEventListener("mousemove", (e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const containerRect = document.querySelector(".matrix-container").getBoundingClientRect();
                
                // Position tooltip above the node
                tooltip.style.left = `${rect.left - containerRect.left + (rect.width / 2) - 125}px`;
                tooltip.style.top = `${rect.top - containerRect.top - tooltip.offsetHeight - 10}px`;
            });
            
            node.addEventListener("mouseleave", () => {
                tooltip.classList.remove("active");
            });
        });
    }

    // Fill Analytical Text Reports in tabs
    function fillReportTexts(r) {
        // Comfort
        const comfort = arcanasDb[r.E];
        document.getElementById("comfortArcanaName").innerText = `Arcano ${r.E} - ${comfort.name}`;
        document.getElementById("comfortDesc").innerText = comfort.desc;
        document.getElementById("comfortPlus").innerText = comfort.plus;
        document.getElementById("comfortMinus").innerText = comfort.minus;
        
        // Portrait / Talents
        const portrait = arcanasDb[r.A];
        const talents = arcanasDb[r.B];
        document.getElementById("portraitArcanaName").innerText = `Arcano ${r.A} - ${portrait.name} (Retrato Social)`;
        document.getElementById("portraitDesc").innerText = `O Arcano do seu dia de nascimento (${r.A}) rege sua autoimagem e a forma como você se comunica socialmente. ${portrait.desc}\n\nNo fluxo positivo: ${portrait.plus}\nNo fluxo negativo: ${portrait.minus}`;
        document.getElementById("talentsArcanaName").innerText = `Arcano ${r.B} - ${talents.name} (Mês de Nascimento)`;
        document.getElementById("talentsDesc").innerText = `O Arcano do seu mês de nascimento (${r.B}) representa seus talentos e dons espirituais superiores. ${talents.desc}\n\nNo fluxo positivo: ${talents.plus}\nNo fluxo de bloqueio: ${talents.minus}`;
        
        // Karma / Past Life (Tail)
        const karmicId = `${r.d2}-${r.d1}-${r.D}`;
        const karmaData = karmicTailsDb[karmicId] || karmicTailsDb["default"];
        document.getElementById("karmicBadgeCode").innerText = `Código: ${r.d2} - ${r.d1} - ${r.D}`;
        document.getElementById("karmicTailName").innerText = karmaData.name;
        document.getElementById("karmaPastLife").innerHTML = `<strong>O que ocorreu em encarnações passadas:</strong> ${karmaData.past}`;
        document.getElementById("karmaCurrentLife").innerHTML = `<strong>Desafios na vida atual:</strong> ${karmaData.current} (Você está sobre influência dos arcanos ${r.d2}, ${r.d1} e ${r.D} na base material).`;
        document.getElementById("karmaHealing").innerHTML = `<strong>Como curar e desbloquear este Karma:</strong> ${karmaData.healing}`;
        
        // Love Line
        const love = arcanasDb[r.love_pt];
        document.getElementById("loveArcanaName").innerText = `Arcano ${r.love_pt} - ${love.name} (Canal do Amor ♥)`;
        document.getElementById("loveDesc").innerText = `O ponto de entrada do seu canal amoroso é regido pelo Arcano ${r.love_pt}. ${love.desc}`;
        document.getElementById("lovePartner").innerText = love.love;
        document.getElementById("loveBlocks").innerText = love.minus;
        
        // Money Line
        const money = arcanasDb[r.money_pt];
        document.getElementById("moneyArcanaName").innerText = `Arcano ${r.money_pt} - ${money.name} (Canal do Dinheiro $)`;
        document.getElementById("moneyDesc").innerText = `O ponto de entrada do seu canal de prosperidade material é regido pelo Arcano ${r.money_pt}. ${money.desc}`;
        document.getElementById("moneyCareers").innerText = money.money;
        document.getElementById("moneyBlocks").innerText = money.minus;
    }

    // Build Chakra Health Map table rows
    function buildChakraTable(r) {
        const body = document.getElementById("chakraTableBody");
        body.innerHTML = "";
        
        const chakras = [
            { name: "Sahasrara (Coroa)", key: "sahasrara", phys: r.B, energ: r.B, emot: reduceNumber(r.B + r.B) },
            { name: "Ajna (Terceiro Olho)", key: "ajna", phys: r.c1, energ: r.b1, emot: reduceNumber(r.c1 + r.b1) },
            { name: "Vishuddha (Garganta)", key: "vishuddha", phys: r.c2, energ: r.b2, emot: reduceNumber(r.c2 + r.b2) },
            { name: "Anahata (Coração)", key: "anahata", phys: r.E, energ: r.E, emot: reduceNumber(r.E + r.E) },
            { name: "Manipura (Plexo Solar)", key: "manipura", phys: r.a2, energ: r.d2, emot: reduceNumber(r.a2 + r.d2) },
            { name: "Svadhisthana (Sacral)", key: "svadhisthana", phys: r.a1, energ: r.d1, emot: reduceNumber(r.a1 + r.d1) },
            { name: "Muladhara (Raiz)", key: "muladhara", phys: r.A, energ: r.D, emot: reduceNumber(r.A + r.D) }
        ];

        chakras.forEach(c => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td class="chakra-name"><span class="dot dot-${c.key}"></span> ${c.name}</td>
                <td><strong>${c.phys}</strong> - ${arcanasDb[c.phys]?.name || 'Arcano'}</td>
                <td><strong>${c.energ}</strong> - ${arcanasDb[c.energ]?.name || 'Arcano'}</td>
                <td style="color: var(--gold-glow);"><strong>${c.emot}</strong> - ${arcanasDb[c.emot]?.name || 'Arcano'}</td>
            `;
            body.appendChild(tr);
        });
    }

    // Handle Tabs toggling
    document.querySelectorAll(".tab-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
            document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
            
            btn.classList.add("active");
            const targetId = btn.getAttribute("data-tab");
            document.getElementById(targetId).classList.add("active");
        });
    });

    // Oracle Chat Interface logic
    const chatBox = document.getElementById("chatBox");
    const chatInput = document.getElementById("chatInput");
    const chatSendBtn = document.getElementById("chatSendBtn");

    function initOracleChat(data) {
        chatBox.innerHTML = `
            <div class="chat-message bot">
                Olá, <strong>${data.name}</strong>! Eu sou o Oráculo Cármico. Analisei os códigos da sua Matriz de nascimento e posso responder qualquer dúvida sobre suas energias.
                <br><br>
                Sua essência é regida pela <strong>${arcanasDb[data.results.E].name}</strong> e sua cauda cármica traz a herança da <strong>${karmicTailsDb[`${data.results.d2}-${data.results.d1}-${data.results.D}`]?.name || 'aprendizado cármico geral'}</strong>.
                O que você gostaria de desvendar hoje?
            </div>
        `;
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    chatSendBtn.addEventListener("click", sendUserChatMessage);
    chatInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") sendUserChatMessage();
    });

    async function sendUserChatMessage() {
        const text = chatInput.value.trim();
        if (!text || !activeMatrixData) return;
        
        // Append user message
        appendChatMessage("user", text);
        chatInput.value = "";
        
        // Loader message
        const loader = appendChatMessage("bot", "<i class='fa-solid fa-spinner fa-spin'></i> O Oráculo está consultando as linhas do destino...");
        
        try {
            if (activeMatrixData.apiKey || USE_SECURE_SERVERLESS) {
                // Fetch Gemini API real response
                const reply = await queryGeminiAPI(activeMatrixData.apiKey, text, activeMatrixData);
                loader.innerHTML = reply;
            } else {
                // Simulated intelligent Oracle reply
                setTimeout(() => {
                    const reply = generateSimulatedReply(text, activeMatrixData);
                    loader.innerHTML = reply;
                }, 1500);
            }
        } catch (error) {
            console.warn("Fallback to simulated oracle:", error);
            setTimeout(() => {
                const reply = generateSimulatedReply(text, activeMatrixData);
                loader.innerHTML = reply;
            }, 1000);
        }
        
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function appendChatMessage(sender, html) {
        const div = document.createElement("div");
        div.className = `chat-message ${sender}`;
        div.innerHTML = html;
        chatBox.appendChild(div);
        chatBox.scrollTop = chatBox.scrollHeight;
        return div;
    }

    // Call real Gemini API
    async function queryGeminiAPI(key, question, data) {
        if (USE_SECURE_SERVERLESS) {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    question,
                    name: data.name,
                    day: data.day,
                    month: data.month,
                    year: data.year,
                    results: data.results
                })
            });

            if (!response.ok) {
                throw new Error("Erro na resposta da serverless proxy");
            }

            const resData = await response.json();
            let markdownReply = resData.candidates?.[0]?.content?.parts?.[0]?.text || "Não foi possível desvendar sua resposta.";
            return markdownReply
                .replace(/\n\n/g, '<br><br>')
                .replace(/\n/g, '<br>')
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/\*(.*?)\*/g, '<em>$1</em>');
        }

        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${key}`;
        
        const systemPrompt = `Você é o Oráculo Cármico da Matriz do Destino. O usuário é ${data.name}, nascido em ${data.day}/${data.month}/${data.year}.
Sua Matriz de nascimento calculou as seguintes chaves de arcanos (são energias baseadas no Tarô):
- Essência Central (Ponto E): ${data.results.E} (${arcanasDb[data.results.E].name})
- Retrato Social (Ponto A): ${data.results.A} (${arcanasDb[data.results.A].name})
- Talentos Espirituais (Ponto B): ${data.results.B} (${arcanasDb[data.results.B].name})
- Bloqueio Cármico (Ponto C): ${data.results.C} (${arcanasDb[data.results.C].name})
- Cauda Cármica (D): Código ${data.results.d2}-${data.results.d1}-${data.results.D} (Tema: ${karmicTailsDb[`${data.results.d2}-${data.results.d1}-${data.results.D}`]?.name || 'Geral'})
- Linha do Amor (♥): ${data.results.love_pt} (${arcanasDb[data.results.love_pt].name})
- Linha Financeira ($): ${data.results.money_pt} (${arcanasDb[data.results.money_pt].name})

Responda à pergunta do usuário de forma mística, sábia, amorosa e profunda em português. Mantenha os parágrafos fluidos e dê conselhos específicos conectando-os diretamente com os arcanos do mapa dele acima.`;

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [
                            { text: systemPrompt },
                            { text: `Pergunta do usuário: "${question}"` }
                        ]
                    }
                ]
            })
        });

        if (!response.ok) {
            throw new Error("Erro na resposta da Gemini API");
        }

        const resData = await response.json();
        let markdownReply = resData.candidates?.[0]?.content?.parts?.[0]?.text || "Não foi possível desvendar sua resposta.";
        
        // Simple markdown replacement for bold and paragraph breaks
        return markdownReply
            .replace(/\n\n/g, '<br><br>')
            .replace(/\n/g, '<br>')
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>');
    }

    // Heuristic response simulator for local oracle (without key)
    function generateSimulatedReply(question, data) {
        const qLower = question.toLowerCase();
        const r = data.results;
        
        if (qLower.includes("amor") || qLower.includes("relacionamento") || qLower.includes("casamento")) {
            const arc = arcanasDb[r.love_pt];
            return `O amor em seu destino é guiado pela força do Arcano <strong>${r.love_pt} (${arc.name})</strong>. 
            Esta energia diz que ${arc.love.toLowerCase()} 
            Contudo, tome cuidado com os bloqueios em sua linha do amor: <em>${arc.minus.toLowerCase()}</em>. 
            Busque o equilíbrio no ponto de fusão, vibrando na energia da cura.`;
        }
        
        if (qLower.includes("dinheiro") || qLower.includes("trabalho") || qLower.includes("carreira") || qLower.includes("finança") || qLower.includes("emprego")) {
            const arc = arcanasDb[r.money_pt];
            return `Sua chave de abundância reside no Arcano <strong>${r.money_pt} (${arc.name})</strong>. 
            Sua alma se alinha com caminhos voltados para: <em>${arc.money.toLowerCase()}</em>. 
            Para destravar o dinheiro em sua vida atual, evite atitudes limitantes como: <em>${arc.minus.toLowerCase()}</em>. 
            Vibre alto no propósito criador!`;
        }

        if (qLower.includes("karma") || qLower.includes("carma") || qLower.includes("passada") || qLower.includes("vida")) {
            const karmicId = `${r.d2}-${r.d1}-${r.D}`;
            const karmaData = karmicTailsDb[karmicId] || karmicTailsDb["default"];
            return `Sua cauda cármica traz o código <strong>${karmicId} (${karmaData.name})</strong>. 
            Nas vidas passadas, sua alma carregou a seguinte lição: <em>${karmaData.past.toLowerCase()}</em>. 
            Nesta vida, você enfrenta desafios como: <em>${karmaData.current.toLowerCase()}</em>. 
            Sua chave de libertação é: <strong>${karmaData.healing}</strong>. Pratique-a ativamente!`;
        }

        if (qLower.includes("chakra") || qLower.includes("saude") || qLower.includes("doença") || qLower.includes("corpo")) {
            return `Analisando seu mapa de saúde, seu centro cardíaco (Anahata) vibra na energia <strong>${r.E}</strong>. 
            Para manter a saúde física, preste atenção aos pontos de tensão no chakra raiz (Muladhara, regido por <strong>${r.A}</strong> física e <strong>${r.D}</strong> energética). 
            Busque relaxar, exercitar o corpo e meditar conectando-se com a terra e a água.`;
        }

        // Generic mistic answer
        const comfort = arcanasDb[r.E];
        return `O oráculo escuta o seu chamado. Sua essência de nascimento vibra no Arcano <strong>${r.E} (${comfort.name})</strong>. 
        Este arcano ensina que: <em>${comfort.desc}</em>. 
        Para seguir sua trilha em paz e harmonia hoje, busque expressar seu potencial criativo: <em>${comfort.plus.toLowerCase()}</em>. 
        Há alguma outra área da sua matriz que você queira analisar com profundidade?`;
    }

    // Download / Export Trigger Handlers
    document.getElementById("downloadPdfBtn").addEventListener("click", () => {
        window.print();
    });

    document.getElementById("downloadSvgBtn").addEventListener("click", () => {
        if (!activeMatrixData) return;
        const svgElement = document.querySelector(".matrix-svg");
        if (!svgElement) return;
        
        const svgString = new XMLSerializer().serializeToString(svgElement);
        const svgBlob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
        const svgUrl = URL.createObjectURL(svgBlob);
        
        const downloadLink = document.createElement("a");
        downloadLink.href = svgUrl;
        const safeName = activeMatrixData.name.toLowerCase().replace(/[^a-z0-9]/g, "_");
        downloadLink.download = `matriz_destino_${safeName}.svg`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    });
});

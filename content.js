/* ═══════════════════════════════════════════════════════════════════════
   content.js — EL TEU CONTINGUT PÚBLIC viu aquí.
   Aquest és l'ÚNIC fitxer que has d'editar per afegir o canviar entrades.
   (Les entrades XIFRADES van a secrets.js; aquí va tot el que és públic.)
   ───────────────────────────────────────────────────────────────────────

   COM AFEGIR UNA ENTRADA NOVA
   1. Copia un bloc { … } sencer d'una entrada existent (amb la coma final).
   2. Enganxa'l dins la llista que toqui (journal, projects o books).
   3. Canvia els textos. Cada camp té dos idiomes:  { ca: "català", en: "english" }
   4. Posa un "slug" únic en anglès → serà l'enllaç: tafi.cat/#journal/EL-TEU-SLUG
      (només lletres minúscules, números i guions; sense espais ni accents)
   5. Desa, puja content.js al repo. Fet.

   REGLES RÀPIDES
   · No esborris les comes ni les cometes "".
   · El text més nou va A DALT de la llista (apareix primer a la web).
   · A "body" pots fer servir línies en blanc per separar paràgrafs.
   · Si deixes "excerpt" buit, s'agafa l'inici del "body".
   ═══════════════════════════════════════════════════════════════════════ */

window.TAFI_CONTENT = {

  /* ── DIARI / JOURNAL ─────────────────────────────────────────────────
     Camps: slug · date · tag · title · excerpt (resum a la llista) · body (pàgina) */
  journal: [
    {
      slug: "risk-you-cant-see",
      date: "2026 · 06 · 28",
      tag:     { ca: "I ara què?", en: "So what now?" },
      title:   { ca: "Sobre el risc que no es veu", en: "On the risk you can't see" },
      excerpt: { ca: "El risc real poques vegades surt als gràfics. Notes sobre cues, liquiditat i paciència.",
                 en: "Real risk rarely shows on the charts. Notes on tails, liquidity, and patience." },
      body: { ca: "Durant el meu dia a dia no acostumo a pensar cap a on vaig, quin objectiu final té allò que estic fent. Ve predefinit per una decisió que es va prendre fa X temps i que, un cop marcada, l'ideal és no replantejar-la i actuar de manera automàtica. L'última decisió que vaig prendre va ser quina carrera estudiar. Un cop vaig entrar a Economia, en una universitat que no cal esmentar, he estat 4 anys on el meu objectiu final era acabar el grau. Pel camí hi ha hagut subobjectius: intentar passar-ho bé, aconseguir una universitat per anar d'Erasmus, fer pràctiques d'empresa. Però l'objectiu seguia sent el mateix: que, passats 4 anys, tingués els 240 crèdits que acrediten que he assolit una formació, que tinc cert coneixement tècnic i una capacitat per tirar les coses endavant.\n\nOficialment ja m'he graduat d'Economia, però tinc la sensació de «i ara què m'espera?». Quina és la decisió correcta, el següent step? Tinc bastantes opcions però no sé què fer. A les pràctiques m'han fet oferta, però paguen molt poc i tinc por d'acabar en una posició que no m'agrada, estancat. Trobar una alternativa tampoc és una tasca gaire senzilla: tota la part de banca d'inversió és molt competitiva i no és fàcil entrar-hi. I la part de marxar fora, que abans tenia molt clara, ara la torno a posar sobre la taula. És el moment per fer-ho, perquè els lligams amb un lloc concret són els més dèbils que tindré mai: no tinc persones que depenguin de mi, no tinc cap feina que em faci de limitant, no tinc cap propietat. A més, aquests primers anys poden ser els més crítics a nivell inicial.\n\nPer una banda em sap greu deixar el que he estat fent a l'empresa de pràctiques i deixar enrere l'equip de persones. Però és que no em compensa, i estic pensant de deixar-ho i fer-me un últim estiu tranquil, de vacances.\n\nI ara què? Suposo que aquesta vegada la decisió toca prendre-la despert, no en automàtic. He de definir quin és el següent objectiu i traçar un roadmap per arribar-hi.",
               en: "In my day-to-day life, I don't usually think about where I'm going or what the ultimate goal is of what I'm doing. It's predefined by a decision that was made a while ago, and once it's made, the ideal is not to rethink it and just act automatically. The last decision I made was which degree to study. Once I got into Economics, at a university that needs no mention, I spent 4 years whose ultimate goal was to finish the degree. Along the way there were sub-goals: trying to enjoy it, landing a university for an Erasmus exchange, doing a company internship. But the goal stayed the same: that after 4 years I'd have the 240 credits certifying I'd completed an education, that I have certain technical knowledge and the ability to get things done.\n\nI've officially graduated in Economics, but I have this feeling of «and now what awaits me?». What's the right decision, the next step? I have quite a few options but I don't know what to do. My internship made me an offer, but it pays very little and I'm afraid of ending up in a position I don't like, stuck. Finding an alternative isn't easy either: the whole investment-banking side is very competitive and hard to get into. And moving abroad, which I used to be so sure about, is back on the table. This is the moment to do it, because my ties to any one place are the weakest they'll ever be: no one depends on me, no job holds me back, I own no property. Besides, these first years may be the most critical at the start.\n\nOn one hand it pains me to leave what I've been doing at the internship and the team behind. But it just isn't worth it to me, and I'm thinking of quitting and giving myself one last quiet summer, on holiday.\n\nAnd now what? I guess this time the decision has to be made awake, not on autopilot. I have to define what the next goal is and map out a roadmap to reach it." }
    },
    {
      slug: "build-by-hand",
      date: "2026 · 05 · 28",
      tag:     { ca: "Tecnologia", en: "Tech" },
      title:   { ca: "Per què encara munto a mà", en: "Why I still build by hand" },
      excerpt: { ca: "Cada peça triada a consciència. El plaer de construir el que faràs servir cada dia.",
                 en: "Every part chosen on purpose. The joy of building the thing you'll use every day." },
      body:    { ca: "Podria comprar-ho fet i estalviar-me una tarda. Però muntar-ho a mà em fa entendre cada decisió: per què aquest switch, per què aquesta font, per què aquest cas i no un altre.\n\nLes eines que faig servir cada dia mereixen aquesta atenció. El resultat no és només una màquina; és una que entenc de cap a peus.",
                 en: "I could buy it pre-built and save an afternoon. But building by hand makes me understand every decision: why this switch, why this power supply, why this case and not another.\n\nThe tools I use every day deserve that attention. The result isn't just a machine; it's one I understand end to end." }
    },
    {
      slug: "small-bets-long-games",
      date: "2026 · 05 · 09",
      tag:     { ca: "Notes", en: "Notes" },
      title:   { ca: "Apostes petites, partides llargues", en: "Small bets, long games" },
      excerpt: { ca: "Sobre compondre en silenci i deixar que el temps faci la feina pesada.",
                 en: "On compounding quietly and letting time do the heavy lifting." },
      body:    { ca: "Les apostes grans criden l'atenció, però les petites repetides són les que componen. La gràcia no és encertar molt; és sobreviure prou temps perquè el temps treballi per tu.\n\nMenys soroll, més consistència. Aquesta és tota l'estratègia.",
                 en: "Big bets grab attention, but small repeated ones are what compound. The trick isn't to be right a lot; it's to survive long enough for time to work for you.\n\nLess noise, more consistency. That's the whole strategy." }
    }
  ],

  /* ── PROJECTES / PROJECTS ────────────────────────────────────────────
     Camps: slug · status (estat) · title · excerpt (resum a la targeta) · body (pàgina) */
  projects: [
    {
      slug: "ledger-09",
      status:  { ca: "En curs", en: "In progress" },
      title:   { ca: "Ledger-09", en: "Ledger-09" },
      excerpt: { ca: "Eina personal per seguir cartera i despeses sense fulls de càlcul.",
                 en: "A personal tool to track portfolio and spending without spreadsheets." },
      body:    { ca: "Una eina que faig servir cada dia per veure la cartera i les despeses en un sol lloc, sense dependre de fulls de càlcul fràgils.\n\nL'objectiu no és fer un altre Excel bonic, sinó respondre ràpid a una pregunta: «com estic, de veritat, ara mateix?»",
                 en: "A tool I use every day to see my portfolio and spending in one place, without depending on fragile spreadsheets.\n\nThe goal isn't another pretty Excel, but to answer one question fast: \"how am I, really, right now?\"" }
    },
    {
      slug: "forja",
      status:  { ca: "Actiu", en: "Active" },
      title:   { ca: "Forja", en: "Forja" },
      excerpt: { ca: "Banc de proves per a teclats, switches i firmware.",
                 en: "A test bench for keyboards, switches, and firmware." },
      body:    { ca: "El meu racó per experimentar amb teclats: provar switches, ajustar firmware, comparar plaques i lubricants.\n\nMig laboratori, mig taller. On les idees de hardware passen de «i si…» a «funciona».",
                 en: "My corner for experimenting with keyboards: testing switches, tuning firmware, comparing plates and lubricants.\n\nHalf lab, half workshop. Where hardware ideas go from \"what if…\" to \"it works\"." }
    },
    {
      slug: "atlas",
      status:  { ca: "Llavor", en: "Seed" },
      title:   { ca: "Atlas", en: "Atlas" },
      excerpt: { ca: "Notes connectades sobre macroeconomia i cicles.",
                 en: "Connected notes on macroeconomics and cycles." },
      body:    { ca: "Un mapa viu de com encaixen els cicles macro: tipus, crèdit, energia, demografia. Notes que s'enllacen entre si en comptes de quedar soltes.\n\nEncara és una llavor, però vull que creixi fins a ser la meva brúixola per llegir el que passa.",
                 en: "A living map of how macro cycles fit together: rates, credit, energy, demographics. Notes that link to each other instead of sitting loose.\n\nStill a seed, but I want it to grow into my compass for reading what's happening." }
    }
  ],

  /* ── LLIBRES / BOOKS ──────────────────────────────────────────────────
     Camps: slug · category · status · title · author · note (la teva opinió, opcional)
     Aquests són EXEMPLES — canvia'ls pels teus llibres reals. */
  books: [
    {
      slug: "the-intelligent-investor",
      category: { ca: "Finances", en: "Finance" },
      status:   { ca: "Llegit", en: "Read" },
      title:    { ca: "L'inversor intel·ligent", en: "The Intelligent Investor" },
      author:   { ca: "Benjamin Graham", en: "Benjamin Graham" },
      note:     { ca: "El clàssic que separa invertir d'especular. (Exemple — canvia'l pel teu.)",
                  en: "The classic that separates investing from speculating. (Example — swap for your own.)" }
    },
    {
      slug: "meditations",
      category: { ca: "Filosofia", en: "Philosophy" },
      status:   { ca: "Rellegint", en: "Re-reading" },
      title:    { ca: "Meditacions", en: "Meditations" },
      author:   { ca: "Marc Aureli", en: "Marcus Aurelius" },
      note:     { ca: "", en: "" }
    }
  ],

  /* ── ACTUALITZACIONS / UPDATES ───────────────────────────────────────
     Actualitzacions de la teva vida i del projecte. Línia de temps.
     Camps: date · title (titular curt) · body (text; línies en blanc = paràgrafs)
     El més NOU va a dalt. */
  updates: [
    {
      date: "2026 · 06",
      title: { ca: "I ara què?", en: "So what now?" },
      body:  { ca: "tafi.cat ja és oficialment casa meva a internet.",
               en: "tafi.cat is now officially my home on the internet." } 
    },
    {
      date: "2025 · 11",
      title: { ca: "Domini propi", en: "My own domain" },
      body:  { ca: "tafi.cat ja és oficialment casa meva a internet.",
               en: "tafi.cat is now officially my home on the internet." }
    },
    {
      date: "2024 · 03",
      title: { ca: "El primer diari", en: "The first journal" },
      body:  { ca: "Vaig publicar les primeres notes en obert. L'inici de tot això.",
               en: "Published my first notes in the open. The start of all this." }
    }
  ]

};

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
      date: "2026 · 06 · 12",
      tag:     { ca: "Finances", en: "Finance" },
      title:   { ca: "Sobre el risc que no es veu", en: "On the risk you can't see" },
      excerpt: { ca: "El risc real poques vegades surt als gràfics. Notes sobre cues, liquiditat i paciència.",
                 en: "Real risk rarely shows on the charts. Notes on tails, liquidity, and patience." },
      body:    { ca: "El risc que et fa mal gairebé mai és el que apareix a la volatilitat del full de càlcul. És la cua que ningú modela, la liquiditat que desapareix just quan la necessites, la correlació que es dispara a 1 el pitjor dia.\n\nEscric això per recordar-m'ho: la paciència no és passivitat. És deixar marge perquè, quan tot falli alhora, encara puguis decidir des de la calma i no des de la por.",
                 en: "The risk that hurts is almost never the one in the spreadsheet's volatility. It's the tail nobody models, the liquidity that vanishes exactly when you need it, the correlation that snaps to 1 on the worst day.\n\nI'm writing this to remember it: patience isn't passivity. It's leaving enough slack so that when everything breaks at once, you still get to decide from calm and not from fear." }
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
      title: { ca: "Web nou de trinca", en: "Brand-new site" },
      body:  { ca: "He renovat tafi.cat de dalt a baix: mode fosc per defecte, bilingüe (CA/EN) i seccions noves.",
               en: "Rebuilt tafi.cat top to bottom: dark mode by default, bilingual (CA/EN), and new sections." }
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
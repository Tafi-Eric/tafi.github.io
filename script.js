const translations = {
    ca: {
        "nav-home": "Inici", "nav-journal": "Diari", "nav-projects": "Projectes",
        "nav-updates": "Updates", "nav-belongings": "Belongings", "nav-books": "Books",
        "title-home": "Benvinguts",
        "home-text": `Benvinguts al meu diari on faré un recull d'idees, projectes i d'altres coses que em semblin interessants.<br><br>
                      La pàgina web està organitzada de la següent manera:
                      <ul>
                        <li><strong>Diari</strong> ➔ Recull d'idees soltes.</li>
                        <li><strong>Projectes</strong> ➔ Explicar i desenvolupar projectes personals que tinguin certa continuació o possible regularitat.</li>
                        <li><strong>Updates</strong> ➔ Explicar canvis principals de visió.</li>
                        <li><strong>Actualitzacions</strong> ➔ Quines són aquelles eines que més aprecio i les seves especificacions.</li>
                        <li><strong>Llibres</strong> ➔ Llibres que he llegit i m'han semblat rellevants.</li>
                      </ul>`,
        "belongings-content": `
            <p>Selecciona una màquina per veure'n les entranyes:</p>
            <ul class="pc-list">
                <li><a href="#specs-rubius" class="pc-link">PC-Rubius-02 (2026-Present)</a></li>
                <li><a href="#specs-darwin" class="pc-link"><s>PC-Darwin-01 (2020-2026)</s></a></li>
            </ul>

            <div style="height: 60vh;"></div> 

            <div id="specs-rubius" class="spec-box">
                <h3 class="box-title">ESPECIFICACIONS: PC-RUBIUS-02</h3>
                <ul>
                    <li><strong>CPU:</strong> Ryzen 7 9700X</li>
                    <li><strong>GPU:</strong> RX 9060 XT 16GB</li>
                    <li><strong>Board:</strong> B850I AsRock</li>
                    <li><strong>PSU:</strong> SF750 Corsair</li>
                    <li><strong>RAM:</strong> Corsair Pro 2*16GB 6000Mhz CL48</li>
                    <li><strong>Case:</strong> Fractal Terra Jade</li>
                    <li><strong>Storage:</strong> SN850X 2Tb</li>
                </ul>
                <a href="#content" class="back-up">↑ Torna a la llista</a>
            </div>

            <div id="specs-darwin" class="spec-box old-pc">
                <h3 class="box-title"><s>ESPECIFICACIONS: PC-DARWIN-01</s></h3>
                <ul>
                    <li><s><strong>CPU:</strong> Ryzen 7 2700X</s></li>
                    <li><s><strong>GPU:</strong> RTX 2060 6GB</s></li>
                    <li><s><strong>Board:</strong> B450 Aorus Elite V.2</s></li>
                    <li><s><strong>PSU:</strong> Corsair TX650M</s></li>
                    <li><s><strong>RAM:</strong> Team Group Delta 2*8GB 3200Mhz CL16</s></li>
                    <li><s><strong>Case:</strong> MSI MPG Gungir 110R</s></li>
                    <li><s><strong>Storage:</strong> 500GB SSD M.2</s></li>
                </ul>
                <a href="#content" class="back-up">↑ Torna a la llista</a>
            </div>`
    },
    en: {
        "nav-home": "Home", "nav-journal": "Journal", "nav-projects": "Projects",
        "nav-updates": "Updates", "nav-belongings": "Belongings", "nav-books": "Books",
        "title-home": "Welcome",
        "home-text": `Welcome to your journal where I will collect ideas, projects, and other things I find interesting.<br><br>
                      The website is organized as follows:
                      <ul>
                        <li><strong>Journal</strong> ➔ Collection of loose ideas.</li>
                        <li><strong>Projects</strong> ➔ Explaining and developing personal projects with a certain continuity or potential regularity.</li>
                        <li><strong>Updates</strong> ➔ Explaining major changes in vision.</li>
                        <li><strong>Belongings</strong> ➔ The tools I value the most and their specifications.</li>
                        <li><strong>Books</strong> ➔ Books I have read and found relevant.</li>
                      </ul>`,
        "belongings-content": `
            <p>Selecciona una màquina per veure'n les entranyes:</p>
            <ul class="pc-list">
                <li><a href="#specs-rubius" class="pc-link">PC-Rubius-02 (2026-Present)</a></li>
                <li><a href="#specs-darwin" class="pc-link"><s>PC-Darwin-01 (2020-2026)</s></a></li>
            </ul>

            <div style="height: 60vh;"></div> 

            <div id="specs-rubius" class="spec-box">
                <h3 class="box-title">ESPECIFICACIONS: PC-RUBIUS-02</h3>
                <ul>
                    <li><strong>CPU:</strong> Ryzen 7 9700X</li>
                    <li><strong>GPU:</strong> RX 9060 XT 16GB</li>
                    <li><strong>Board:</strong> B850I AsRock</li>
                    <li><strong>PSU:</strong> SF750 Corsair</li>
                    <li><strong>RAM:</strong> Corsair Pro 2*16GB 6000Mhz CL48</li>
                    <li><strong>Case:</strong> Fractal Terra Jade</li>
                    <li><strong>Storage:</strong> SN850X 2Tb</li>
                </ul>
                <a href="#content" class="back-up">↑ Torna a la llista</a>
            </div>

            <div id="specs-darwin" class="spec-box old-pc">
                <h3 class="box-title"><s>ESPECIFICACIONS: PC-DARWIN-01</s></h3>
                <ul>
                    <li><s><strong>CPU:</strong> Ryzen 7 2700X</s></li>
                    <li><s><strong>GPU:</strong> RTX 2060 6GB</s></li>
                    <li><s><strong>Board:</strong> B450 Aorus Elite V.2</s></li>
                    <li><s><strong>PSU:</strong> Corsair TX650M</s></li>
                    <li><s><strong>RAM:</strong> Team Group Delta 2*8GB 3200Mhz CL16</s></li>
                    <li><s><strong>Case:</strong> MSI MPG Gungir 110R</s></li>
                    <li><s><strong>Storage:</strong> 500GB SSD M.2</s></li>
                </ul>
                <a href="#content" class="back-up">↑ Torna a la llista</a>
            </div>`
    }
};

let currentLang = 'ca';

function showPage(pageId) {
    const titleEl = document.getElementById('page-title');
    const bodyEl = document.getElementById('page-body');

    if (pageId === 'home') {
        titleEl.innerText = translations[currentLang]["title-home"];
        bodyEl.innerHTML = translations[currentLang]["home-text"];
    } else if (pageId === 'belongings') {
        titleEl.innerText = translations[currentLang]["nav-belongings"];
        bodyEl.innerHTML = translations[currentLang]["belongings-content"];
    } else {
        titleEl.innerText = translations[currentLang]["nav-" + pageId] || pageId;
        bodyEl.innerHTML = currentLang === 'ca' ? "Contingut en preparació..." : "Content under development...";
    }
}

function toggleLang() {
    currentLang = currentLang === 'ca' ? 'en' : 'ca';
    document.getElementById('langBtn').innerText = currentLang === 'ca' ? 'EN' : 'CA';
    document.querySelectorAll('[data-key]').forEach(el => {
        el.innerText = translations[currentLang][el.getAttribute('data-key')];
    });
    // Detectamos en qué página estamos para refrescar el idioma del contenido
    const currentTitle = document.getElementById('page-title').innerText;
    if (currentTitle === "Benvinguts" || currentTitle === "Welcome") showPage('home');
    else if (currentTitle === "Belongings") showPage('belongings');
}

function toggleTheme() {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    document.getElementById('themeBtn').innerText = isLight ? (currentLang === 'ca' ? "🌙 Fosc" : "🌙 Dark") : (currentLang === 'ca' ? "☀️ Clar" : "☀️ Light");
}

window.onload = () => showPage('home');








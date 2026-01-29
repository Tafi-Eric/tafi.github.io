const translations = {
    ca: {
        "nav-home": "Inici", "nav-journal": "Diari", "nav-projects": "Projectes",
        "nav-updates": "Updates", "nav-belongings": "Belongings", "nav-books": "Books",
        "title-home": "Benvinguts",
        "home-text": `Benvinguts al meu diari on faré un recull d'idees, projectes i d'altres coses que em semblin interessants.<br><br>
                      La pàgina web està organitzada de la següent manera:
                      <ul>
                        <li><strong>Diari</strong> ➔ Recull d'idees soltes.</li>
                        <li><strong>Projectes</strong> ➔ Explicar i desenvolupar projectes personals.</li>
                        <li><strong>Updates</strong> ➔ Explicar canvis principals de visió.</li>
                        <li><strong>Belongings</strong> ➔ Les eines que més aprecio.</li>
                        <li><strong>Books</strong> ➔ Llibres rellevants.</li>
                      </ul>`,
        "belongings-content": `
            <p>Selecciona una categoria per veure'n els detalls:</p>
            
            <h4 style="color:var(--accent); margin-bottom:5px;">COMPUTING</h4>
            <ul class="pc-list">
                <li><a href="#table-rubius" class="pc-link">PC-Rubius-02 (2026-Present)</a></li>
                <li><a href="#table-darwin" class="pc-link"><s>PC-Darwin-01 (2020-2026)</s></a></li>
            </ul>

            <h4 style="color:var(--accent); margin-bottom:5px; margin-top:20px;">KEYBOARDS & ARTISANS</h4>
            <ul class="pc-list">
                <li><a href="#table-keyboard-1" class="pc-link">Cycle 7 (Void Elf)</a></li>
                <li><a href="#table-artisans" class="pc-link">Artisan Collection</a></li>
            </ul>

            <div style="height: 10vh;"></div> 

            <div id="table-rubius" class="hardware-table-container">
                <h3 class="table-caption">PC-RUBIUS-02 SPECS</h3>
                <table class="hardware-table">
                    <thead><tr><th>Component</th><th>Details</th></tr></thead>
                    <tbody>
                        <tr><td>CPU</td><td>Ryzen 7 9700X 3.8 GHz</td></tr>
                        <tr><td>GPU</td><td>RX 9060 XT 16GB Gigabyte Gaming OC</td></tr>
                        <tr><td>Motherboard</td><td>B850I AsRock Phantom Gaming</td></tr>
                        <tr><td>PSU</td><td>SF750 Corsair</td></tr>
                        <tr><td>RAM</td><td>Corsair Pro 2*16GB 6000Mhz CL48</td></tr>
                        <tr><td>Case</td><td>Fractal Terra Jade</td></tr>
                        <tr><td>Storage</td><td>WD_BLACK SN850X 2Tb</td></tr>
                    </tbody>
                </table>
                <a href="#content" class="back-up">↑ Tornar a l'inici</a>
            </div>

            <div style="height: 10vh;"></div>

            <div id="table-darwin" class="hardware-table-container old-pc">
                <h3 class="table-caption"><s>PC-DARWIN-01 SPECS (Retired)</s></h3>
                <table class="hardware-table">
                    <thead><tr><th>Component</th><th>Details</th></tr></thead>
                    <tbody>
                        <tr><td><s>CPU</s></td><td><s>Ryzen 7 2700X 3.7 GHz</s></td></tr>
                        <tr><td><s>GPU</s></td><td><s>RTX 2060 6GB Gigabyte Gaming OC</s></td></tr>
                        <tr><td><s>Motherboard</s></td><td><s>B450 Aorus Elite V.2</s></td></tr>
                        <tr><td><s>PSU</s></td><td><s>Corsair TX650M</s></td></tr>
                        <tr><td><s>RAM</s></td><td><s>Team Group Delta 2*8GB 3200Mhz CL16</s></td></tr>
                        <tr><td><s>Case</s></td><td><s>MSI MPG Gungir 110R</s></td></tr>
                        <tr><td><s>Storage</s></td><td><s>Kioxia Exceria 500GB SSD M.2</s></td></tr>
                    </tbody>
                </table>
                <a href="#content" class="back-up">↑ Tornar a l'inici</a>
            </div>

            <div style="height: 10vh;"></div>

            <div id="table-keyboard-1" class="hardware-table-container">
                <h3 class="table-caption">Teclat: CYCLE 7</h3>
                <table class="hardware-table">
                    <thead><tr><th>Spec</th><th>Build Details</th></tr></thead>
                    <tbody>
                        <tr><td>Model</td><td>TKD Cycle 7 (70%)</td></tr>
                        <tr><td>Tecles</td><td>GMK Blot</td></tr>
                        <tr><td>Switches</td><td>Vertex V1</td></tr>
                        <tr><td>Placa</td><td>Alumini</td></tr>
                    </tbody>
                </table>
                <a href="#content" class="back-up">↑ Tornar a l'inici</a>
            </div>

            <div style="height: 10vh;"></div>

            <div id="table-artisans" class="hardware-table-container">
                <h3 class="table-caption">Col·lecció d'artisans</h3>
                <table class="hardware-table">
                    <thead><tr><th>Maker / Sculpt</th><th>Colorway</th></tr></thead>
                    <tbody>
                        <tr><td>(Ex: Artkey)</td><td>(Ex: Sirius)</td></tr>
                        <tr><td>(Ex: Hello Caps)</td><td>(Ex: Bongo Cat)</td></tr>
                    </tbody>
                </table>
                <a href="#content" class="back-up">↑ Tornar a l'inici</a>
            </div>`
    },
    en: {
        "nav-home": "Home", "nav-journal": "Journal", "nav-projects": "Projects",
        "nav-updates": "Updates", "nav-belongings": "Belongings", "nav-books": "Books",
        "title-home": "Welcome",
        "home-text": `Welcome to my journal where I will collect ideas, projects, and other things I find interesting.<br><br>
                      The website is organized as follows:
                      <ul>
                        <li><strong>Journal</strong> ➔ Collection of loose ideas.</li>
                        <li><strong>Projects</strong> ➔ Explaining and developing personal projects.</li>
                        <li><strong>Updates</strong> ➔ Explaining major changes in vision.</li>
                        <li><strong>Belongings</strong> ➔ The tools I value the most.</li>
                        <li><strong>Books</strong> ➔ Books I have read and found relevant.</li>
                      </ul>`,
        "belongings-content": `
            <p>Select a category to view details:</p>
            
            <h4 style="color:var(--accent); margin-bottom:5px;">COMPUTING</h4>
            <ul class="pc-list">
                <li><a href="#table-rubius" class="pc-link">PC-Rubius-02 (2026-Present)</a></li>
                <li><a href="#table-darwin" class="pc-link"><s>PC-Darwin-01 (2020-2026)</s></a></li>
            </ul>

            <h4 style="color:var(--accent); margin-bottom:5px; margin-top:20px;">KEYBOARDS & ARTISANS</h4>
            <ul class="pc-list">
                <li><a href="#table-keyboard-1" class="pc-link">Cycle 7 (Void Elf)</a></li>
                <li><a href="#table-artisans" class="pc-link">Artisan Collection</a></li>
            </ul>

            <div style="height: 10vh;"></div> 

            <div id="table-rubius" class="hardware-table-container">
                <h3 class="table-caption">PC-RUBIUS-02 SPECS</h3>
                <table class="hardware-table">
                    <thead><tr><th>Component</th><th>Details</th></tr></thead>
                    <tbody>
                        <tr><td>CPU</td><td>Ryzen 7 9700X 3.8 GHz</td></tr>
                        <tr><td>GPU</td><td>RX 9060 XT 16GB Gigabyte Gaming OC</td></tr>
                        <tr><td>Motherboard</td><td>B850I AsRock Phantom Gaming</td></tr>
                        <tr><td>PSU</td><td>SF750 Corsair</td></tr>
                        <tr><td>RAM</td><td>Corsair Pro 2*16GB 6000Mhz CL48</td></tr>
                        <tr><td>Case</td><td>Fractal Terra Jade</td></tr>
                        <tr><td>Storage</td><td>WD_BLACK SN850X 2Tb</td></tr>
                    </tbody>
                </table>
                <a href="#content" class="back-up">↑ Back to top</a>
            </div>

            <div style="height: 10vh;"></div>

            <div id="table-darwin" class="hardware-table-container old-pc">
                <h3 class="table-caption"><s>PC-DARWIN-01 SPECS (Retired)</s></h3>
                <table class="hardware-table">
                    <thead><tr><th>Component</th><th>Details</th></tr></thead>
                    <tbody>
                        <tr><td><s>CPU</s></td><td><s>Ryzen 7 2700X 3.7 GHz</s></td></tr>
                        <tr><td><s>GPU</s></td><td><s>RTX 2060 6GB Gigabyte Gaming OC</s></td></tr>
                        <tr><td><s>Motherboard</s></td><td><s>B450 Aorus Elite V.2</s></td></tr>
                        <tr><td><s>PSU</s></td><td><s>Corsair TX650M</s></td></tr>
                        <tr><td><s>RAM</s></td><td><s>Team Group Delta 2*8GB 3200Mhz CL16</s></td></tr>
                        <tr><td><s>Case</s></td><td><s>MSI MPG Gungir 110R</s></td></tr>
                        <tr><td><s>Storage</s></td><td><s>Kioxia Exceria 500GB SSD M.2</s></td></tr>
                    </tbody>
                </table>
                <a href="#content" class="back-up">↑ Back to top</a>
            </div>

             <div style="height: 10vh;"></div>

            <div id="table-keyboard-1" class="hardware-table-container">
                <h3 class="table-caption">KEYBOARD: CYCLE 7</h3>
                <table class="hardware-table">
                    <thead><tr><th>Spec</th><th>Build Details</th></tr></thead>
                    <tbody>
                        <tr><td>Model</td><td>TKD Cycle 7 Void Elf</td></tr>
                        <tr><td>Keycaps</td><td>GMK Blot</td></tr>
                        <tr><td>Switches</td><td>Vertex V1</td></tr>
                        <tr><td>Plate</td><td>Aluminium</td></tr>
                    </tbody>
                </table>
                <a href="#content" class="back-up">↑ Back to top</a>
            </div>

            <div style="height: 10vh;"></div>

            <div id="table-artisans" class="hardware-table-container">
                <h3 class="table-caption">ARTISAN COLLECTION</h3>
                <table class="hardware-table">
                    <thead><tr><th>Maker / Sculpt</th><th>Colorway</th></tr></thead>
                    <tbody>
                        <tr><td>(Ex: Artkey)</td><td>(Ex: Sirius)</td></tr>
                        <tr><td>(Ex: Hello Caps)</td><td>(Ex: Bongo Cat)</td></tr>
                    </tbody>
                </table>
                <a href="#content" class="back-up">↑ Back to top</a>
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







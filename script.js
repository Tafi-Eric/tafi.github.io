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
                        <li><strong>Belongings</strong> ➔ Quines són aquelles eines que més aprecio i les seves especificacions.</li>
                        <li><strong>Books</strong> ➔ Llibres que he llegit i m'han semblat rellevants.</li>
                      </ul>`
    },
    en: {
        "nav-home": "Home", "nav-journal": "Journal", "nav-projects": "Projects",
        "nav-updates": "Updates", "nav-belongings": "Belongings", "nav-books": "Books",
        "title-home": "Welcome",
        "home-text": `Welcome to my journal where I will collect ideas, projects, and other things I find interesting.<br><br>
                      The website is organized as follows:
                      <ul>
                        <li><strong>Journal</strong> ➔ Collection of loose ideas.</li>
                        <li><strong>Projects</strong> ➔ Explaining and developing personal projects with a certain continuity or potential regularity.</li>
                        <li><strong>Updates</strong> ➔ Explaining major changes in vision.</li>
                        <li><strong>Belongings</strong> ➔ The tools I value the most and their specifications.</li>
                        <li><strong>Books</strong> ➔ Books I have read and found relevant.</li>
                      </ul>`
    }
};

let currentLang = 'ca';

function showPage(pageId) {
    const titleEl = document.getElementById('page-title');
    const bodyEl = document.getElementById('page-body');

    if (pageId === 'home') {
        titleEl.innerText = translations[currentLang]["title-home"];
        bodyEl.innerHTML = translations[currentLang]["home-text"];
    } else {
        // Marcador para las otras páginas
        titleEl.innerText = translations[currentLang]["nav-" + pageId] || pageId;
        bodyEl.innerHTML = "Contingut de " + pageId + " en preparació...";
    }
}

function toggleLang() {
    currentLang = currentLang === 'ca' ? 'en' : 'ca';
    document.getElementById('langBtn').innerText = currentLang === 'ca' ? 'EN' : 'CA';
    document.querySelectorAll('[data-key]').forEach(el => {
        el.innerText = translations[currentLang][el.getAttribute('data-key')];
    });
    showPage('home'); // Recarga la home para cambiar el idioma del texto largo
}

function toggleTheme() {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    document.getElementById('themeBtn').innerText = isLight ? "🌙 Fosc" : "☀️ Clar";
}

// Cargar la home al iniciar
window.onload = () => showPage('home');

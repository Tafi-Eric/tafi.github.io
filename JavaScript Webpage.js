const translations = {
    ca: {
        "nav-journal": "Diari", "nav-make": "Crear", "nav-updates": "Novetats",
        "nav-projects": "Projectes", "nav-belongings": "Pertinences", "nav-library": "Biblioteca",
        "welcome": "Benvingut al teu diari...", "theme-light": "☀️ Clar", "theme-dark": "🌙 Fosc"
    },
    en: {
        "nav-journal": "Journal", "nav-make": "Make", "nav-updates": "Updates",
        "nav-projects": "Projects", "nav-belongings": "Belongings", "nav-library": "Library",
        "welcome": "Welcome to your journal...", "theme-light": "☀️ Light", "theme-dark": "🌙 Dark"
    }
};

let currentLang = 'ca';

function toggleTheme() {
    document.body.classList.toggle('light-mode');
    const btn = document.getElementById('themeBtn');
    if(document.body.classList.contains('light-mode')) {
        btn.innerText = currentLang === 'ca' ? "🌙 Fosc" : "🌙 Dark";
    } else {
        btn.innerText = currentLang === 'ca' ? "☀️ Clar" : "☀️ Light";
    }
}

function toggleLang() {
    currentLang = currentLang === 'ca' ? 'en' : 'ca';
    document.getElementById('langBtn').innerText = currentLang === 'ca' ? 'EN' : 'CA';
    
    // Actualizar menú
    document.querySelectorAll('[data-key]').forEach(el => {
        el.innerText = translations[currentLang][el.getAttribute('data-key')];
    });
}

function showPage(pageId) {
    const title = document.getElementById('page-title');
    const body = document.getElementById('page-body');
    
    // Aquí puedes personalizar el contenido de cada página
    const content = {
        journal: { title: "Journal", text: "Espai per escriure el teu dia a dia..." },
        make: { title: "Make", text: "Projectes en creació..." },
        updates: { title: "Updates", text: "Últimes actualitzacions del sistema." },
        projects: { title: "Projects", text: "Llista de treballs finalitzats." },
        belongings: { title: "Belongings", text: "Inventari personal." },
        library: { title: "Library", text: "Recull de llibres i referències." }
    };

    title.innerText = content[pageId].title;
    body.innerText = content[pageId].text;
}
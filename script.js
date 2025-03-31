function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle('light');

    // Salvar o tema no LocalStorage
    const mode = html.classList.contains('light') ? 'light' : 'dark';
    localStorage.setItem('theme', mode);

    // Atualiza a cor do título
    updateTextColor();
}

function updateTextColor() {
    const titleElement = document.querySelector("h1"); // Seleciona o título
    if (titleElement) {
        titleElement.style.color = document.documentElement.classList.contains('light') ? 'black' : 'white';
    }
}

// Carregar tema salvo no LocalStorage ao iniciar a página
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.documentElement.classList.toggle('light', savedTheme === 'light');
    updateTextColor();
}

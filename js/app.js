/**
 * Russian Cheatsheet - Dynamic Page Loader
 * Loads page components and assembles the complete cheatsheet
 */

// Lista de páginas a serem carregadas
const pages = [
    'page1-amigas.html',
    'page2-inimigas.html',
    'page3-simbolos1.html',
    'page4-simbolos2.html',
    'page5-especiais.html',
    'page6-essenciais.html',
    'page7-numeros.html',
    'page8-dias-tempo.html',
    'page9-perguntas-cores.html',
    'page10-familia-verbos.html'
];

/**
 * Carrega uma página individual
 * @param {string} pageName - Nome do arquivo da página
 * @returns {Promise<string>} - HTML da página
 */
async function loadPage(pageName) {
    try {
        const response = await fetch(`pages/${pageName}`);
        if (!response.ok) {
            throw new Error(`Failed to load ${pageName}: ${response.statusText}`);
        }
        return await response.text();
    } catch (error) {
        console.error(`Error loading page ${pageName}:`, error);
        return `<div class="page error-page">
            <h1>Erro ao carregar ${pageName}</h1>
            <p>${error.message}</p>
        </div>`;
    }
}

/**
 * Carrega todas as páginas e as insere no DOM
 */
async function loadAllPages() {
    const container = document.getElementById('pages-container');

    if (!container) {
        console.error('Container #pages-container não encontrado');
        return;
    }

    // Mostra loading
    container.innerHTML = '<div class="loading">Carregando cheatsheet russo...</div>';

    try {
        // Carrega todas as páginas em paralelo
        const pageContents = await Promise.all(
            pages.map(page => loadPage(page))
        );

        // Insere todas as páginas no container
        container.innerHTML = pageContents.join('\n');

        console.log('Todas as páginas carregadas com sucesso!');
    } catch (error) {
        console.error('Erro ao carregar páginas:', error);
        container.innerHTML = `<div class="error">
            <h1>Erro ao carregar o cheatsheet</h1>
            <p>${error.message}</p>
        </div>`;
    }
}

/**
 * Inicializa o sistema de spoilers
 */
function initializeSpoilers() {
    document.addEventListener('click', (e) => {
        const spoiler = e.target.closest('.spoiler');
        if (spoiler) {
            spoiler.classList.toggle('revealed');
        }
    });
}

/**
 * Inicializa a aplicação quando o DOM estiver pronto
 */
document.addEventListener('DOMContentLoaded', async () => {
    await loadAllPages();
    initializeSpoilers();
});

/**
 * Função auxiliar para exportar/imprimir (opcional)
 */
function printCheatsheet() {
    window.print();
}

/**
 * Exporta funções úteis
 */
window.RussianCheatsheet = {
    loadAllPages,
    printCheatsheet,
    pages
};

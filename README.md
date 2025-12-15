# Russian Cheatsheet - Alfabeto Russo Completo

Um cheat sheet completo e visual do alfabeto russo (cirílico) com vocabulário essencial, projetado para ser impresso em A4 ou visualizado digitalmente.

## Estrutura do Projeto

```
russian-cheatsheet/
├── index.html              # Página principal que carrega todos os componentes
├── index-original.html     # Backup do arquivo original monolítico
│
├── css/
│   └── styles.css         # Todos os estilos CSS centralizados
│
├── js/
│   └── app.js             # JavaScript para carregar páginas dinamicamente
│
├── pages/                  # Componentes HTML de cada página
│   ├── page1-amigas.html
│   ├── page2-inimigas.html
│   ├── page3-simbolos1.html
│   ├── page4-simbolos2.html
│   ├── page5-especiais.html
│   ├── page6-essenciais.html
│   ├── page7-numeros.html
│   ├── page8-dias-tempo.html
│   ├── page9-perguntas-cores.html
│   └── page10-familia-verbos.html
│
├── components/            # (Diretório reservado para futuros componentes)
├── data/                  # (Diretório reservado para dados estruturados)
└── CLAUDE.md             # Guia para desenvolvimento com Claude Code
```

## Conteúdo

### Alfabeto (Páginas 1-5)

**Página 1 - Letras Amigas** (Verde)
- Letras com som semelhante ao português: А, К, М, О, Т, Е

**Página 2 - Letras Inimigas** (Vermelho)
- Falsos amigos que parecem familiares mas têm sons diferentes: В, Н, Р, С, У, Х

**Página 3 - Símbolos Parte 1** (Azul)
- Letras completamente novas: Б, Г, Д, Ё, Ж, З, И, Й, Л, П, Ф, Ц

**Página 4 - Símbolos Parte 2** (Roxo)
- Sons únicos do russo: Ч, Ш, Щ, Ы, Э, Ю, Я

**Página 5 - Sinais Especiais** (Laranja)
- Modificadores sem som próprio: Ь (sinal brando) e Ъ (sinal forte)

### Vocabulário (Páginas 6-10)

**Página 6** - Essenciais & Saudações
**Página 7** - Números (1-1000)
**Página 8** - Dias da Semana & Tempo
**Página 9** - Perguntas Essenciais & Cores
**Página 10** - Família & Verbos Essenciais

## Como Usar

### Visualizar Localmente

1. Clone ou baixe o repositório
2. Inicie um servidor HTTP local:
   ```bash
   python3 -m http.server 8000
   ```
3. Abra no navegador: `http://localhost:8000`

### Imprimir ou Exportar para PDF

1. Abra `index.html` no navegador (Chrome recomendado)
2. Use Ctrl+P (ou Cmd+P no Mac)
3. Configurações de impressão:
   - Destino: "Salvar como PDF"
   - Layout: As páginas 1-5 são landscape, 6-10 são portrait
   - Marque "Gráficos de fundo" para manter as cores
4. Salve o PDF

## Desenvolvimento

### Modificar Conteúdo

- **Editar uma página específica**: Modifique o arquivo correspondente em `pages/`
- **Alterar estilos**: Edite `css/styles.css`
- **Adicionar funcionalidades**: Modifique `js/app.js`

### Adicionar Nova Página

1. Crie um novo arquivo HTML em `pages/` (ex: `page11-nova-secao.html`)
2. Adicione apenas o conteúdo da `<div class="page">...</div>`
3. Atualize o array `pages` em `js/app.js`

### Sistema de Cores

O projeto usa CSS variables para cores temáticas:
- `--color-friend` (verde): Letras familiares
- `--color-enemy` (vermelho): Falsos amigos
- `--color-symbol` (azul): Símbolos novos
- `--color-symbol2` (roxo): Sons especiais
- `--color-special` (laranja): Sinais modificadores

## Tecnologias

- HTML5
- CSS3 (Grid, Flexbox, CSS Variables)
- JavaScript ES6+ (Fetch API, Promises, Async/Await)
- Google Fonts (Montserrat, Roboto Slab, Inter)

## Características

- Design responsivo e otimizado para impressão
- Layout A4 (landscape para alfabeto, portrait para vocabulário)
- Sistema de cores categóricas para facilitar aprendizado
- Cards interativos com hover effects (apenas na versão web)
- Carregamento dinâmico de componentes
- Código modular e manutenível

## Licença

Este projeto é de uso educacional livre.

## Autor

Criado para facilitar o aprendizado do alfabeto russo (cirílico) para falantes de português brasileiro.

---

**Удачи!** (Boa sorte!)

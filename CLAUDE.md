# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Russian language learning cheatsheet - a modular web application containing the complete Russian alphabet with pronunciation guides, word examples, and essential vocabulary. The project is designed to be viewed in a browser or printed/saved as a PDF for offline learning.

**Note**: The project was refactored from a single monolithic HTML file (now preserved as `index-original.html`) into a modular architecture for better maintainability.

## Project Structure

```
russian-cheatsheet/
├── index.html              # Main entry point - loads all components dynamically
├── index-original.html     # Backup of original monolithic file
│
├── css/
│   └── styles.css         # All CSS styles centralized
│
├── js/
│   └── app.js             # JavaScript loader for dynamic page loading
│
├── pages/                  # Individual page components (HTML fragments)
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
├── components/            # Reserved for future reusable components
├── data/                  # Reserved for structured data (JSON)
└── README.md             # Project documentation
```

## Key Architecture

### Modular Page System

The application uses a dynamic loading system:
- **index.html**: Minimal HTML shell that loads CSS and JavaScript
- **js/app.js**: Fetches all page components and inserts them into the DOM
- **pages/**: Each page is a standalone HTML fragment containing only `<div class="page">...</div>`

This architecture allows:
- Easy editing of individual pages without touching a massive file
- Better version control (clearer diffs)
- Potential for future enhancements (lazy loading, individual page exports, etc.)

### Page Layout System

The cheatsheet contains 10 pages with two orientations:
- **Pages 1-5**: Landscape orientation (297mm x 210mm) - Alphabet sections
- **Pages 6-10**: Portrait orientation (210mm x 297mm) - Vocabulary sections

CSS uses `:nth-child()` selectors to apply orientation-specific styling.

### Letter Categorization System

Russian letters are categorized by similarity to Portuguese/Latin letters:

1. **Amigas (Friends)** - Green (`--color-friend: #27ae60`)
   - Letters similar to Latin alphabet in appearance and sound: А, К, М, О, Т, Е

2. **Inimigas (Enemies)** - Red (`--color-enemy: #e74c3c`)
   - False friends that look familiar but have different sounds: В, Н, Р, С, У, Х

3. **Símbolos (Symbols)** - Blue (`--color-symbol: #3498db`) and Purple (`--color-symbol2: #9b59b6`)
   - Letters completely new to Portuguese speakers: Б, Г, Д, Ё, Ж, З, И, Й, Л, П, Ф, Ц, Ч, Ш, Щ, Ы, Э, Ю, Я

4. **Especiais (Special)** - Orange (`--color-special: #f39c12`)
   - Modifier characters with no sound: Ь (soft sign) and Ъ (hard sign)

### CSS Variable System

The project uses CSS custom properties defined in `css/styles.css`:
- Each category has color variables: base, background, light, dark
- Page-level variables (`--page-color`) control header gradient strips
- Card-level variables (`--card-bg`, `--card-color`) style individual letter cards

### Component Structure

**Letter Cards** (Alphabet pages):
- Grid-based layout (6 columns)
- Card top: Russian letter in large font + pronunciation badge
- Card bottom: Word examples (Russian word, pronunciation, Portuguese translation)

**Vocabulary Tables** (Vocabulary pages):
- Three-column layout: Portuguese | Russian (Cyrillic) | Transliteration
- Color-coded headers matching page themes
- Alternating row backgrounds for readability

## Development Workflow

### Running Locally

**IMPORTANT**: The application requires a web server due to JavaScript fetch() for loading components. You cannot open `index.html` directly in a browser.

Start a local server:
```bash
python3 -m http.server 8000
# Then visit http://localhost:8000
```

Or use any other local server (Node's http-server, PHP's built-in server, etc.)

### Viewing the Cheatsheet

Once the server is running, open `http://localhost:8000` in a browser. The JavaScript will automatically load all 10 pages.

### Printing/Exporting to PDF

The CSS is optimized for print with:
- Exact A4 page dimensions
- Print-safe colors (`print-color-adjust: exact`)
- Page break controls to prevent awkward splits
- Separate print rules for landscape and portrait pages

To export as PDF:
1. Open in Chrome/Chromium browser (recommended for best print support)
2. Press Ctrl+P (or Cmd+P on Mac)
3. Settings:
   - Destination: "Save as PDF"
   - Enable "Background graphics" to preserve colors
4. Save the PDF

### Making Content Changes

**Edit a specific page**:
- Modify the corresponding file in `pages/` (e.g., `pages/page1-amigas.html`)
- Files contain only the `<div class="page">...</div>` fragment - no need for full HTML boilerplate

**Modify styles**:
- Edit `css/styles.css`
- Changes apply globally to all pages

**Add a new page**:
1. Create `pages/page11-newsection.html` with page content
2. Add `'page11-newsection.html'` to the `pages` array in `js/app.js`
3. The new page will load automatically

**Adjust page loading logic**:
- Edit `js/app.js` - contains functions for fetching and inserting page components

### Styling Patterns

- **CSS classes**: Define the card system, page layout, and component styles
- **Inline styles**: Used sparingly in vocabulary tables for specific colors
- **Hover effects**: Enabled in browser, disabled in print CSS (see `@media print` in styles.css)

### JavaScript Architecture

**js/app.js** provides:
- `loadPage(pageName)`: Fetches a single page component
- `loadAllPages()`: Loads all pages in parallel and inserts into DOM
- `printCheatsheet()`: Utility function to trigger print dialog
- `window.RussianCheatsheet`: Global object exposing useful functions

## Important Notes

- **Requires a web server**: Cannot be opened directly as a file due to CORS restrictions on fetch()
- **Original preserved**: `index-original.html` contains the original monolithic version as backup
- **Print optimization**: Print-specific CSS ensures colors and layout remain consistent when exported to PDF
- **Language**: All content is in Brazilian Portuguese (`lang="pt-BR"`) teaching Russian
- **Dependencies**: Only external dependency is Google Fonts (Montserrat, Roboto Slab, Inter)

## Common Tasks

**Add a new letter card**:
1. Open the appropriate alphabet page (e.g., `pages/page1-amigas.html`)
2. Copy an existing `<div class="card friend">` block
3. Modify the letter, sound, and word examples

**Add vocabulary**:
1. Open the appropriate vocabulary page (e.g., `pages/page6-essenciais.html`)
2. Add a new `<tr>` row to the relevant `<table>`
3. Fill in Portuguese, Russian, and pronunciation columns

**Change color scheme**:
1. Edit CSS variables in `css/styles.css` (`:root` section, lines ~11-36)
2. Modify the `--color-*` variables for each category

**Debug loading issues**:
1. Open browser DevTools Console
2. Check for fetch errors (404s, CORS issues)
3. Verify `js/app.js` has correct page names in the `pages` array

## Future Enhancement Ideas

- Lazy loading: Load pages on scroll for better performance
- Search functionality: Filter letters or vocabulary by keyword
- Audio pronunciation: Add sound clips for each letter/word
- Flashcard mode: Interactive study mode with card flipping
- Data-driven approach: Move content to JSON files for easier editing
- Build process: Add a static site generator to compile everything into a single HTML file for offline use

# 1. internship
-Verwelkomingspagina (stel je zelf voor)<br />
-Algemene gegevens van het bedrijf (adres, logo, foto, ...) . link naar site van het bedrijf, overzicht van de activiteiten/producten van het bedrijf.<br />
-Contactformulier<br />

# 2. Technologies
- HTML5
- CSS3
- JavaScript
- Bootstrap 5
- GitHub Pages
- Vscodeedu

# 3. Projectstructuur

internship/<br />
│<br />
├── index.html<br />
├── Bedrijf.html<br />
├── contact.html<br />
│<br />
├── components/<br />
│   └── navbar.html<br />
│<br />
├── css/<br />
│   ├── style.css<br />
│   ├── style-index.css<br />
│   └── ...<br />
│<br />
├── js/<br />
│   └── ...<br />
│<br />
├── afbeeldingen/<br />
│   ├── logo.webp<br />
│   └── ...<br />
│<br />
└── README.md<br />

# 4. HTML & CSS

## Algemeen
- De navbar en header worden geïmporteerd uit een ander HTML-bestand door gebruik te maken van een ID en een JavaScript-bestand genaamd components.js.
- Er is altijd een algemeen CSS-bestand genaamd style.css. Daarin wordt alle CSS toegevoegd voor de navbar, footer en de scrollbar die over alle pagina's worden gebruikt, om alles simpel aan te passen.
- Een pagina heeft altijd een eigen CSS-bestand om bepaalde dingen aan die pagina aan te passen.
- Ook worden de Bootstrap-CSS en -JS toegevoegd om alles van Bootstrap goed te laten werken.

## index.html
### Projectstructuur:

├── Header<br />
│   └── Script (bootstrap)<br />
│   └── Css (bootstrap)<br />
│   └── Css (style)<br />
│   └── Css (style-index)<br />
└── Body<br />
    ├── div (id=navbar)<br />
    ├── Main<br />
    │   ├── Section (id=hero)<br />
    │   ├── Section (class=about)<br />
    │   ├── Section (class=interests)<br />
    │   ├── Section (class=skills)<br />
    │   ├── Section (class=projects)<br />
    │   └── Section (class=internship)<br />
    ├── div (id=footer)<br />
    └── Script (components)<br />

### Code uitleggen:

- In alle secties wordt er een 'section-label' toegevoegd in de eerste div dat later gebruikt word in het CSS-bestand. Ook in de eerste div zit er altijd paar span elementen voor de titel van de sectie.
    - 'span' is een HTML-element waarmee je een klein stukje tekst of andere inline inhoud kunt groeperen, meestal om het apart te kunnen stylen of manipuleren.

- In de div van de hero-sectie wordt padding toegevoegd door gebruik te maken van de Bootstrap-utility 'p', gevolgd door een 'x' of 'y'. Daarnaast wordt de klasse 'text-center' gebruikt; dit is de Bootstrap-variant van 'text-align: center;' in CSS. Tot slot heeft de hero-sectie een eigen ID of klasse die wordt gebruikt in het CSS-bestand. Verder word er gewoon wat tekst toegevoegd dat word aangepast in het CSS-bestand.
    - 'x' staat voor links en rechts.
    - 'y' staat voor boven en onder.

- About-sectie
    - In de tweede div wordt 'about-grid' toegevoegd. Daarin zitten er nog divs.
        - De eerste wordt 'about-text' toegevoegd. Er zit ook nog tekst in dat algemeen verteld wie ik ben en wat me interseerd.
        - In de tweede wordt 'about-image' toegevoegd. Daarin zit een img element voor een profile foto met een alt waarover de foto gaat.

- Interests-sectie
    - In de tweede div wordt 'interest-list' toegevoegd. Waar verder paar 'article' zijn dat elk de classe 'interest-item' krijgen. Waar er een span is voor de titel en dan een 'h3' met een 'p' met extra info.
        - 'article' is een semantisch HTML-element voor zelfstandige inhoud. Het wordt gebruikt wanneer een stuk content op zichzelf betekenisvol is, zoals een project, blogbericht of nieuwsartikel. Het verschilt van 'div', omdat 'article' ook de betekenis en structuur van de inhoud beschrijft.

- Skills-sectie
    - Zelfde concept als 'interests' maar i.p.v 'article' gebruik ik nu 'div'. Verder word er gewoon wat verder info gegeven.

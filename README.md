# 1. Internship

- Verwelkomingspagina (stel je zelf voor)<br />

- Algemene gegevens van het bedrijf (adres, logo, foto, ...) . link naar site van het bedrijf, overzicht van de activiteiten/producten van het bedrijf.<br />

- Contactformulier<br />

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

#### HTML:

- In alle secties wordt er een `section-label` toegevoegd in de eerste div dat later gebruikt wordt in het CSS-bestand. Ook in de eerste div zitten er altijd een paar `span`-elementen voor de titel van de sectie.

    - `span` is een HTML-element waarmee je een klein stukje tekst of andere inline inhoud kunt groeperen, meestal om het apart te kunnen stylen of manipuleren.

- In de div van de hero-sectie wordt padding toegevoegd door gebruik te maken van de Bootstrap-utility `p`, gevolgd door een `x` of `y`. Daarnaast wordt de klasse `text-center` gebruikt; dit is de Bootstrap-variant van `text-align: center;` in CSS. Tot slot heeft de hero-sectie een eigen ID of klasse die wordt gebruikt in het CSS-bestand. Verder wordt er gewoon wat tekst toegevoegd dat wordt aangepast in het CSS-bestand.

    - `x` staat voor links en rechts.

    - `y` staat voor boven en onder.

- About-sectie

    - In de tweede div wordt `about-grid` toegevoegd. Daarin zitten er nog divs.

        - Aan de eerste wordt `about-text` toegevoegd. Er zit ook nog tekst in dat algemeen vertelt wie ik ben en wat me interesseert.

        - Aan de tweede wordt `about-image` toegevoegd. Daarin zit een `img`-element voor een profielfoto met een `alt` waarin beschreven wordt waarover de foto gaat.

- Interests-sectie

    - In de tweede div wordt `interest-list` toegevoegd. Daarin zitten een paar `article`-elementen die elk de class `interest-item` krijgen. Daarin is er een `span` voor de titel en daarna een `h3` met een `p` met extra informatie.

        - `article` is een semantisch HTML-element voor zelfstandige inhoud. Het wordt gebruikt wanneer een stuk content op zichzelf betekenisvol is, zoals een project, blogbericht of nieuwsartikel. Het verschilt van `div`, omdat `article` ook de betekenis en structuur van de inhoud beschrijft.

- Skills-sectie

    - Zelfde concept als `interests`, maar in plaats van `article` gebruik ik nu `div`. Verder wordt er gewoon wat verdere informatie gegeven.

- Projects-sectie

    - Hetzelfde concept als de Interests-sectie, maar nu nog met een link naar een andere site. (Roblox-site komt niet maar misschien homelab wel).

- Internship-sectie

    - De tweede div is gewoon wat extra tekst.

    - De derde div is dan nog een keer opgesplitst in 3 andere divs die elk wat tekst bevatten.

#### CSS:

# CSS-uitleg

## CSS-selectors

In CSS wordt een selector gebruikt om aan te geven op welke HTML-elementen een stijl moet worden toegepast.<br /><br />

Er worden in het project voornamelijk drie soorten selectors gebruikt:<br /><br />

**Element selector:** selecteert een HTML-element, bijvoorbeeld `body` of `h1`.<br /><br />

**Class selector:** begint met een `.` en selecteert alle elementen met die class, bijvoorbeeld `.about`.<br /><br />

**ID selector:** begint met een `#` en selecteert een element met een specifieke ID, bijvoorbeeld `#hero`.<br /><br />

Classes worden vooral gebruikt wanneer dezelfde styling meerdere keren gebruikt kan worden. ID's worden gebruikt voor elementen die uniek zijn binnen een pagina.<br /><br />

---

## CSS-properties

Binnen een CSS-regel worden properties gebruikt om het uiterlijk of de positie van een element aan te passen.<br /><br />

Bijvoorbeeld:<br /><br />

```css
.about {
    padding: 50px;
    text-align: center;
}
```

Hierbij:<br /><br />

- `padding` bepaalt de ruimte binnen het element.<br />

- `text-align` bepaalt hoe de tekst wordt uitgelijnd.<br />

- `.about` bepaalt op welk element deze eigenschappen worden toegepast.<br /><br />

---

## Layout

Voor de layout van de website wordt voornamelijk gebruikgemaakt van **Flexbox** en **CSS Grid**.<br /><br />

### Flexbox

Flexbox wordt gebruikt wanneer elementen voornamelijk in één richting moeten worden geplaatst, bijvoorbeeld naast elkaar of onder elkaar.<br /><br />

Belangrijke properties die hiervoor gebruikt worden zijn:<br /><br />

- `display: flex`<br />

- `justify-content`<br />

- `align-items`<br />

- `flex-direction`<br />

- `gap`<br /><br />

Bijvoorbeeld:<br /><br />

```css
.top-row {
    display: flex;
    align-items: center;
}
```

Hierdoor worden de elementen binnen `.top-row` in een flex-layout geplaatst en verticaal gecentreerd.<br /><br />

### CSS Grid

CSS Grid wordt gebruikt wanneer elementen in rijen en kolommen verdeeld moeten worden.<br /><br />

Dit wordt bijvoorbeeld gebruikt bij de `.about-grid`, waarbij de tekst en afbeelding naast elkaar geplaatst worden.<br /><br />

Belangrijke properties zijn:<br /><br />

- `display: grid`<br />

- `grid-template-columns`<br />

- `gap`<br /><br />

---

## Positionering

Sommige elementen moeten op een specifieke plaats binnen een ander element staan. Hiervoor wordt `position` gebruikt.<br /><br />

In de navbar wordt bijvoorbeeld `position: absolute` gebruikt om het logo in het midden van de navigatie te plaatsen.<br /><br />

`position: relative` wordt gebruikt op het omliggende element zodat een absoluut gepositioneerd element zich ten opzichte van dat element kan positioneren.<br /><br />

---

## Spacing

Voor de afstand tussen elementen worden onder andere gebruikt:<br /><br />

- `margin` → ruimte buiten een element.<br />

- `padding` → ruimte binnen een element.<br />

- `gap` → ruimte tussen elementen binnen bijvoorbeeld Flexbox of Grid.<br /><br />

---

## Afmetingen

Met properties zoals `width`, `height`, `max-width` en `min-height` wordt bepaald hoeveel ruimte elementen mogen innemen.<br /><br />

Bij afbeeldingen wordt bijvoorbeeld `max-width` gebruikt om te voorkomen dat een afbeelding groter wordt dan het beschikbare gebied.<br /><br />

---

## Kleuren

De website gebruikt een donkere achtergrond met lichte tekst. De kleuren worden in CSS gebruikt voor onder andere:<br /><br />

- Achtergronden<br />

- Tekst<br />

- Navigatie<br />

- Secties<br />

- Randen<br />

- Hover-effecten<br /><br />

Hierdoor wordt dezelfde visuele stijl doorheen de verschillende pagina's gebruikt.<br /><br />

---

## Typography

De grootte en vorm van tekst wordt aangepast met properties zoals:<br /><br />

- `font-family`<br />

- `font-size`<br />

- `font-weight`<br />

- `line-height`<br />

- `letter-spacing`<br /><br />

Hiermee wordt onderscheid gemaakt tussen bijvoorbeeld titels, subtitels en gewone tekst.<br /><br />

---

## Pseudo-classes

Voor bepaalde interacties worden CSS-pseudo-classes gebruikt. Een voorbeeld hiervan is `:hover`.<br /><br />

```css
.nav-link:hover {
    /* styling wanneer de muis over de link gaat */
}
```

Hierdoor kan de gebruiker visuele feedback krijgen wanneer hij met de muis over een interactief element gaat.<br /><br />

---

## Responsive design

De website moet op verschillende schermformaten werken. Hiervoor worden media queries gebruikt.<br /><br />

Bijvoorbeeld:<br /><br />

```css
@media (max-width: 768px) {
    /* styling voor kleinere schermen */
}
```

Binnen een media query kunnen eigenschappen worden aangepast wanneer het scherm kleiner wordt.<br /><br />

Dit wordt bijvoorbeeld gebruikt om de navigatie en de verschillende secties geschikt te maken voor mobiele apparaten.<br /><br />

---

## Hero

De hero-sectie gebruikt een grote afbeelding als visueel startpunt van de website.<br /><br />

De CSS bepaalt onder andere:<br /><br />

- De hoogte van de hero.<br />

- De achtergrondafbeelding.<br />

- De positie van de achtergrond.<br />

- De plaats van de tekst.<br />

- De overgang van de hero naar de donkere achtergrond van de rest van de website.<br /><br />

---

## Sections

De verschillende sections hebben hun eigen classes, zoals `.about`, `.interests`, `.skills`, `.projects` en `.internship`.<br /><br />

Deze classes worden gebruikt om de layout en spacing van de verschillende onderdelen afzonderlijk te bepalen.<br /><br />

Hoewel de sections inhoudelijk verschillend zijn, wordt geprobeerd dezelfde algemene ontwerpprincipes te gebruiken zodat de website één geheel blijft.<br /><br />

---

## CSS-overerving en specificiteit

Wanneer meerdere CSS-regels op hetzelfde element van toepassing zijn, bepaalt de **specificiteit** van de selector welke regel voorrang krijgt.<br /><br />

Een ID-selector (`#hero`) heeft bijvoorbeeld een hogere specificiteit dan een class-selector (`.hero`).<br /><br />

Daarnaast kunnen sommige CSS-properties van een ouder-element worden overgenomen door de elementen daarbinnen. Dit wordt **CSS-inheritance** genoemd.<br /><br />

---

## Bootstrap

Naast de eigen CSS wordt Bootstrap gebruikt voor standaard styling en responsive functionaliteit.<br /><br />

Voorbeelden van Bootstrap classes die in het project gebruikt worden:<br /><br />

- `container`<br />

- `text-center`<br />

- `p-*`<br />

- `px-*`<br />

- `py-*`<br />

- `d-flex`<br />

- `justify-content-*`<br />

- `align-items-*`<br /><br />

Deze classes maken gebruik van CSS die al door Bootstrap geschreven is. Hierdoor hoef ik voor veel algemene layout- en spacing-aanpassingen geen eigen CSS te schrijven.<br /><br />

De eigen CSS wordt gebruikt wanneer de standaard Bootstrap styling niet voldoende is of wanneer een specifiek ontwerp voor de website nodig is.<br /><br />
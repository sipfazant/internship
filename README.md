# 1. Internship<br />

- Verwelkomingspagina (stel jezelf voor)<br />
- Algemene gegevens van het bedrijf (adres, logo, foto, ...) en een link naar de website van het bedrijf. Ook wordt een overzicht gegeven van de activiteiten en producten van het bedrijf.<br />
- Contactformulier<br />

# 2. Technologies<br />

- HTML5<br />
- CSS3<br />
- JavaScript<br />
- Bootstrap 5<br />
- GitHub Pages<br />
- VSCodeEdu<br />

# 3. Projectstructuur<br />

internship/<br />
│<br />
├── index.html<br />
├── bedrijf.html<br />
├── contact.html<br />
│<br />
├── components/<br />
│   ├── navbar.html<br />
│   └── footer.html<br />
│<br />
├── css/<br />
│   ├── style.css<br />
│   ├── style-index.css<br />
│   ├── style-bedrijf.css<br />
│   └── style-contact.css<br />
│<br />
├── js/<br />
│   ├── components.js<br />
│   └── check.js<br />
│<br />
├── afbeeldingen/<br />
│   ├── logo/<br />
│   ├── ict-worx/<br />
│   └── ...<br />
│<br />
└── README.md<br />

# 4. HTML & CSS<br />

## Algemeen<br />

- De navbar en footer worden geïmporteerd uit aparte HTML-bestanden. Dit gebeurt door gebruik te maken van een ID en het JavaScript-bestand `components.js`.<br />

- Er is een algemeen CSS-bestand genaamd `style.css`. Daarin staat de CSS die op meerdere pagina's wordt gebruikt, zoals de navbar, footer, logo's en andere algemene onderdelen.<br />

- Iedere pagina heeft daarnaast een eigen CSS-bestand om onderdelen aan te passen die alleen op die pagina gebruikt worden.<br />

- Bootstrap CSS en JavaScript worden toegevoegd om gebruik te kunnen maken van de Bootstrap-functionaliteiten en responsive utilities.<br />

## index.html<br />

### Projectstructuur<br />

├── Header<br />
│   ├── Meta-informatie<br />
│   ├── Bootstrap JavaScript<br />
│   ├── Bootstrap CSS<br />
│   ├── style.css<br />
│   └── style-index.css<br />
│<br />
└── Body<br />
    ├── div (id="navbar")<br />
    ├── Main<br />
    │   ├── Section (id="hero")<br />
    │   ├── Section (class="about")<br />
    │   ├── Section (class="interests")<br />
    │   ├── Section (class="skills")<br />
    │   ├── Section (class="projects")<br />
    │   └── Section (class="internship")<br />
    ├── div (id="footer")<br />
    └── Script (components.js)<br />

### HTML<br />

In de verschillende secties wordt een `section-label` gebruikt. Deze wordt gebruikt om het label van een sectie te stylen met CSS.<br />

Ook worden `span`-elementen gebruikt voor onderdelen van de titels.<br />

`span` is een inline HTML-element waarmee een klein gedeelte van tekst of andere inline inhoud kan worden gegroepeerd. Hierdoor kan dit gedeelte afzonderlijk gestyled worden.<br />

### Hero-sectie<br />

In de hero-sectie wordt gebruikgemaakt van Bootstrap utilities voor padding en tekstuitlijning.<br />

De classes `px-*` en `py-*` worden gebruikt om horizontale en verticale padding toe te voegen.<br />

- `x` staat voor links en rechts.<br />
- `y` staat voor boven en onder.<br />

De class `text-center` zorgt ervoor dat de tekst gecentreerd wordt. Dit is een Bootstrap utility die vergelijkbaar is met `text-align: center;` in eigen CSS.<br />

De hero heeft daarnaast een eigen ID of class zodat de specifieke styling in `style-index.css` kan worden toegepast.<br />

### About-sectie<br />

In de About-sectie wordt gebruikgemaakt van `about-grid` om de tekst en afbeelding naast elkaar te plaatsen.<br />

Binnen deze grid zijn er verschillende div-elementen.<br />

De eerste div gebruikt `about-text` en bevat tekst waarin wordt uitgelegd wie ik ben en wat mijn interesses zijn.<br />

De tweede div gebruikt `about-image` en bevat een `img`-element met een profielfoto.<br />

Het `alt`-attribuut bevat een beschrijving van de afbeelding. Dit is belangrijk voor toegankelijkheid en wanneer de afbeelding niet geladen kan worden.<br />

### Interests-sectie<br />

In de Interests-sectie wordt `interest-list` gebruikt om de verschillende interesses te groeperen.<br />

De afzonderlijke interesses worden weergegeven met `article`-elementen met de class `interest-item`.<br />

Binnen ieder artikel wordt een `span` gebruikt voor het label, een `h3` voor de titel en een `p` voor extra informatie.<br />

`article` is een semantisch HTML-element voor zelfstandige inhoud. Het kan bijvoorbeeld gebruikt worden voor een project, blogbericht, nieuwsartikel of ander zelfstandig onderdeel.<br />

Het verschil met een `div` is dat `article` ook informatie geeft over de betekenis en structuur van de inhoud.<br />

### Skills-sectie<br />

De Skills-sectie gebruikt een vergelijkbare structuur als de Interests-sectie.<br />

In plaats van `article` worden hier `div`-elementen gebruikt om de verschillende vaardigheden te groeperen.<br />

De vaardigheden bevatten een titel en extra informatie.<br />

### Projects-sectie<br />

De Projects-sectie gebruikt opnieuw een vergelijkbare structuur als de Interests-sectie.<br />

De projecten bevatten informatie over verschillende projecten en kunnen daarnaast een link naar een andere website bevatten.<br />

### Internship-sectie<br />

De Internship-sectie bevat informatie over mijn stage en de opleiding.<br />

De inhoud wordt verdeeld over verschillende div-elementen zodat de informatie overzichtelijk kan worden weergegeven.<br />

# CSS-uitleg<br />

## CSS-selectors<br />

In CSS wordt een selector gebruikt om aan te geven op welke HTML-elementen een stijl moet worden toegepast.<br />

Er worden in het project voornamelijk drie soorten selectors gebruikt:<br />

**Element selector:** selecteert een HTML-element, bijvoorbeeld `body` of `h1`.<br />

**Class selector:** begint met een `.` en selecteert alle elementen met die class, bijvoorbeeld `.about`.<br />

**ID selector:** begint met een `#` en selecteert een element met een specifieke ID, bijvoorbeeld `#hero`.<br />

Classes worden vooral gebruikt wanneer dezelfde styling meerdere keren gebruikt kan worden. ID's worden gebruikt voor elementen die uniek zijn binnen een pagina.<br />

## CSS-properties<br />

Binnen een CSS-regel worden properties gebruikt om het uiterlijk of de positie van een element aan te passen.<br />

Bijvoorbeeld:<br />

```css
.about {
    padding: 50px;
    text-align: center;
}
````

Hierbij bepaalt `padding` de ruimte binnen het element en bepaalt `text-align` hoe de tekst wordt uitgelijnd.<br />

`.about` bepaalt op welke elementen deze eigenschappen worden toegepast.<br />

## Layout<br />

Voor de layout van de website wordt voornamelijk gebruikgemaakt van Flexbox en CSS Grid.<br />

### Flexbox<br />

Flexbox wordt gebruikt wanneer elementen voornamelijk in één richting moeten worden geplaatst, bijvoorbeeld naast elkaar of onder elkaar.<br />

Belangrijke properties zijn:<br />

* `display: flex`<br />
* `justify-content`<br />
* `align-items`<br />
* `flex-direction`<br />
* `gap`<br />

Bijvoorbeeld:<br />

```css
.top-row {
    display: flex;
    align-items: center;
}
```

Hierdoor worden de elementen binnen `.top-row` in een flex-layout geplaatst en verticaal gecentreerd.<br />

### CSS Grid<br />

CSS Grid wordt gebruikt wanneer elementen in rijen en kolommen verdeeld moeten worden.<br />

Dit wordt bijvoorbeeld gebruikt bij `.about-grid`, waarbij de tekst en afbeelding naast elkaar geplaatst worden.<br />

Belangrijke properties zijn:<br />

* `display: grid`<br />
* `grid-template-columns`<br />
* `gap`<br />

## Positionering<br />

Sommige elementen moeten op een specifieke plaats binnen een ander element staan. Hiervoor wordt `position` gebruikt.<br />

In de navbar wordt bijvoorbeeld `position: absolute` gebruikt om het logo in het midden van de navigatie te plaatsen.<br />

`position: relative` wordt gebruikt op het omliggende element zodat een absoluut gepositioneerd element zich ten opzichte van dat element kan positioneren.<br />

## Spacing<br />

Voor de afstand tussen elementen worden onder andere gebruikt:<br />

* `margin` → ruimte buiten een element.<br />
* `padding` → ruimte binnen een element.<br />
* `gap` → ruimte tussen elementen binnen bijvoorbeeld Flexbox of Grid.<br />

## Afmetingen<br />

Met properties zoals `width`, `height`, `max-width` en `min-height` wordt bepaald hoeveel ruimte elementen mogen innemen.<br />

Bij afbeeldingen wordt bijvoorbeeld `max-width` gebruikt om te voorkomen dat een afbeelding groter wordt dan het beschikbare gebied.<br />

## Kleuren<br />

De website gebruikt een donkere achtergrond met lichte tekst. Kleuren worden gebruikt voor onder andere:<br />

* Achtergronden<br />
* Tekst<br />
* Navigatie<br />
* Secties<br />
* Randen<br />
* Hover-effecten<br />

Hierdoor wordt dezelfde visuele stijl doorheen de verschillende pagina's gebruikt.<br />

## Typography<br />

De grootte en vorm van tekst wordt aangepast met properties zoals:<br />

* `font-family`<br />
* `font-size`<br />
* `font-weight`<br />
* `line-height`<br />
* `letter-spacing`<br />

Hiermee wordt onderscheid gemaakt tussen bijvoorbeeld titels, subtitels en gewone tekst.<br />

## Pseudo-classes<br />

Voor bepaalde interacties worden CSS-pseudo-classes gebruikt. Een voorbeeld hiervan is `:hover`.<br />

```css
.nav-link:hover {
    /* styling wanneer de muis over de link gaat */
}
```

Hierdoor kan de gebruiker visuele feedback krijgen wanneer hij met de muis over een interactief element gaat.<br />

## Responsive design<br />

De website moet op verschillende schermformaten werken. Hiervoor worden media queries gebruikt.<br />

Bijvoorbeeld:<br />

```css
@media (max-width: 768px) {
    /* styling voor kleinere schermen */
}
```

Binnen een media query kunnen eigenschappen worden aangepast wanneer het scherm kleiner wordt.<br />

Dit wordt bijvoorbeeld gebruikt om de navigatie en verschillende secties geschikt te maken voor mobiele apparaten.<br />

## Hero<br />

De hero-sectie gebruikt een grote afbeelding als visueel startpunt van de website.<br />

De CSS bepaalt onder andere:<br />

* De hoogte van de hero.<br />
* De achtergrondafbeelding.<br />
* De positie van de achtergrond.<br />
* De plaats van de tekst.<br />
* De overgang van de hero naar de donkere achtergrond van de rest van de website.<br />

## Sections<br />

De verschillende sections hebben hun eigen classes, zoals `.about`, `.interests`, `.skills`, `.projects` en `.internship`.<br />

Deze classes worden gebruikt om de layout en spacing van de verschillende onderdelen afzonderlijk te bepalen.<br />

Hoewel de sections inhoudelijk verschillend zijn, wordt geprobeerd dezelfde algemene ontwerpprincipes te gebruiken zodat de website één geheel blijft.<br />

## CSS-overerving en specificiteit<br />

Wanneer meerdere CSS-regels op hetzelfde element van toepassing zijn, bepaalt de specificiteit van de selector welke regel voorrang krijgt.<br />

Een ID-selector (`#hero`) heeft bijvoorbeeld een hogere specificiteit dan een class-selector (`.hero`).<br />

Daarnaast kunnen sommige CSS-properties van een ouder-element worden overgenomen door de elementen daarbinnen. Dit wordt CSS-inheritance genoemd.<br />

## Bootstrap<br />

Naast de eigen CSS wordt Bootstrap gebruikt voor standaard styling en responsive functionaliteit.<br />

Voorbeelden van Bootstrap classes die in het project gebruikt worden:<br />

* `container`<br />
* `container-fluid`<br />
* `text-center`<br />
* `p-*`<br />
* `px-*`<br />
* `py-*`<br />
* `d-flex`<br />
* `justify-content-*`<br />
* `align-items-*`<br />
* `navbar`<br />
* `navbar-expand-md`<br />
* `navbar-toggler`<br />
* `collapse`<br />

Deze classes maken gebruik van CSS die al door Bootstrap geschreven is. Hierdoor hoef ik voor veel algemene layout- en spacing-aanpassingen geen eigen CSS te schrijven.<br />

De eigen CSS wordt gebruikt wanneer de standaard Bootstrap styling niet voldoende is of wanneer een specifiek ontwerp voor de website nodig is.<br />

# 5. JavaScript<br />

JavaScript wordt in het project gebruikt om onderdelen van de website dynamisch te maken en om interactie toe te voegen.<br />

Er worden twee JavaScript-bestanden gebruikt:<br />

* `components.js` → voor het laden van de navbar en footer en het gedrag van de navbar tijdens het scrollen.<br />
* `check.js` → voor de controle van het contactformulier.<br />

## components.js<br />

Het bestand `components.js` bevat functies voor onderdelen die op meerdere pagina's gebruikt worden.<br />

### Navbar laden<br />

De navbar staat in `components/navbar.html`.<br />

Met `fetch()` wordt dit bestand opgehaald.<br />

```javascript
fetch("components/navbar.html")
```

Daarna wordt gecontroleerd of het bestand succesvol geladen is.<br />

Wanneer het bestand correct geladen is, wordt de inhoud omgezet naar tekst met `response.text()`.<br />

Daarna wordt de inhoud in het element met `id="navbar"` geplaatst.<br />

```javascript
document.getElementById("navbar").innerHTML = data;
```

Hierdoor hoef ik de volledige navbar niet op iedere HTML-pagina opnieuw te schrijven.<br />

### Footer laden<br />

De footer werkt op een gelijkaardige manier als de navbar.<br />

De footer staat in `components/footer.html` en wordt met `fetch()` geladen.<br />

De inhoud wordt daarna in het element met `id="footer"` geplaatst.<br />

Hierdoor kan de footer centraal aangepast worden zonder hem op iedere pagina opnieuw te moeten aanpassen.<br />

### Navbar tijdens het scrollen<br />

De navbar verandert wanneer de gebruiker door de pagina scrollt.<br />

Eerst wordt de huidige scrollpositie opgeslagen:<br />

```javascript
let lastScrollY = window.scrollY;
```

Daarna wordt met `window.addEventListener('scroll', ...)` gecontroleerd wanneer de gebruiker scrollt.<br />

De huidige scrollpositie wordt opgeslagen in `currentScrollY`.<br />

Er wordt ook gecontroleerd of de gebruiker voldoende gescrold heeft voordat de navbar wordt aangepast.<br />

Wanneer de gebruiker naar boven scrollt of helemaal bovenaan de pagina staat, wordt de class `nav-hidden` verwijderd.<br />

Wanneer de gebruiker naar beneden scrollt, wordt `nav-hidden` toegevoegd.<br />

Hierdoor kan CSS de navbar verbergen of opnieuw tonen.<br />

### Navbar aanpassen na scrollen<br />

Wanneer de gebruiker verder naar beneden heeft gescrold, worden extra classes toegevoegd aan de navbar.<br />

Deze classes kunnen gebruikt worden om bijvoorbeeld de achtergrond of het logo van de navbar aan te passen.<br />

Hierdoor kan de navbar zich aanpassen aan de achtergrond van de website.<br />

# 6. Navbar en footer<br />

## Navbar<br />

De navbar staat in `components/navbar.html` zodat dezelfde navigatie op verschillende pagina's gebruikt kan worden.<br />

De navbar bevat onder andere:<br />

* Een hamburgerknop voor kleinere schermen.<br />
* Een gecentreerd ICT-Worx-logo.<br />
* Een link naar de contactpagina.<br />
* Een link naar de pagina "Over mij".<br />
* Een link naar de pagina "Over ICT-Worx".<br />

De navbar gebruikt verschillende Bootstrap classes zoals `navbar`, `navbar-expand-md`, `container-fluid`, `navbar-toggler`, `collapse` en `navbar-nav`.<br />

De navigatie wordt daardoor gedeeltelijk door Bootstrap geregeld en verder aangepast met eigen CSS.<br />

Het logo heeft zowel een zwarte als witte versie zodat het op verschillende achtergronden zichtbaar blijft.<br />

## Footer<br />

De footer staat in `components/footer.html` en wordt net als de navbar op iedere pagina geladen met JavaScript.<br />

De footer bevat:<br />

* Het jaartal en mijn naam.<br />
* Het ICT-Worx-logo.<br />
* Links naar "Over mij".<br />
* Een link naar "Over ICT-Worx".<br />
* Een link naar "Contact".<br />

Ook hier worden Bootstrap classes gebruikt voor de layout, zoals `d-flex`, `justify-content-between`, `align-items-center` en `border-top`.<br />

# 7. bedrijf.html<br />

De pagina `bedrijf.html` bevat informatie over mijn stagebedrijf ICT-Worx.<br />

De pagina is opgebouwd uit verschillende sections.<br />

## Hero<br />

De hero bevat een grote afbeelding van ICT-Worx, een titel en een korte introductie.<br />

De afbeelding wordt geladen vanuit de map `afbeeldingen/`.<br />

De `alt`-tekst geeft een beschrijving van de afbeelding voor toegankelijkheid en wanneer de afbeelding niet geladen kan worden.<br />

## Over het bedrijf<br />

Deze section geeft algemene informatie over ICT-Worx.<br />

Er wordt uitgelegd wat het bedrijf doet en in welke soorten omgevingen het actief is.<br />

## Network Solutions<br />

Deze section beschrijft de netwerkoplossingen van ICT-Worx.<br />

Er wordt gebruikgemaakt van tekst, tags en een afbeelding om de verschillende onderwerpen duidelijk te maken.<br />

## IT-Consulting<br />

Deze section beschrijft de consultingactiviteiten van ICT-Worx.<br />

Ook hier wordt een combinatie gebruikt van tekst, een afbeelding en verschillende tags.<br />

## Wi-Fi & Wireless<br />

Deze section gaat over draadloze netwerken en Wi-Fi-oplossingen.<br />

De afbeelding wordt over een grotere breedte weergegeven om een visueel onderdeel van de pagina te vormen.<br />

## Bijzondere omgevingen<br />

Deze section gebruikt verschillende `article`-elementen voor omgevingen waarin ICT-Worx werkt.<br />

De voorbeelden zijn:<br />

* Industrie<br />
* Maritieme omgevingen<br />
* Camping en mobiele omgevingen<br />

Voor ieder onderdeel wordt een afbeelding, titel en beschrijving gebruikt.<br />

## Maatwerk<br />

In deze section worden gespecialiseerde oplossingen weergegeven.<br />

De onderdelen kunnen een link naar de website van ICT-Worx bevatten.<br />

## Mijn stage<br />

De laatste inhoudelijke section geeft informatie over mijn stage en mijn opleiding.<br />

# 8. Contactpagina<br />

De pagina `contact.html` wordt gebruikt voor het contactformulier.<br />

De pagina bestaat uit twee belangrijke delen:<br />

* Contactinformatie<br />
* Contactformulier<br />

Het formulier bevat velden voor:<br />

* Voornaam<br />
* Achternaam<br />
* E-mailadres<br />
* Bericht<br />
* Akkoord met de voorwaarden<br />

De velden gebruiken het HTML-attribuut `required` zodat ze verplicht ingevuld moeten worden.<br />

Het e-mailadres gebruikt daarnaast `type="email"` zodat de browser controleert of het ingevoerde formaat overeenkomt met een e-mailadres.<br />

# 9. Formuliercontrole<br />

Het bestand `check.js` wordt gebruikt om het contactformulier te controleren voordat het verzonden wordt.<br />

Het script zoekt naar formulieren met de class `needs-validation`.<br />

Daarna wordt voor ieder gevonden formulier een `submit`-event toegevoegd.<br />

Wanneer het formulier niet geldig is, wordt de standaard verzending tegengehouden met `preventDefault()`.<br />

Daarna wordt de class `was-validated` toegevoegd.<br />

Bootstrap kan deze class gebruiken om de gebruiker visueel te tonen welke velden fout of correct zijn ingevuld.<br />

Het formulier gebruikt momenteel alleen client-side validatie. Er is nog geen backend of e-mailservice gekoppeld die de ingevulde gegevens daadwerkelijk verstuurt.<br />

# 10. HTML-structuur<br />

De website gebruikt semantische HTML-elementen om de structuur duidelijk te maken.<br />

Belangrijke elementen zijn:<br />

* `header` → bevat de navigatie.<br />
* `nav` → bevat de navigatielinks.<br />
* `main` → bevat de belangrijkste inhoud van een pagina.<br />
* `section` → verdeelt de pagina in inhoudelijke onderdelen.<br />
* `article` → wordt gebruikt voor zelfstandige inhoud.<br />
* `footer` → bevat de footer van de website.<br />
* `div` → wordt gebruikt als algemene container wanneer er geen specifiek semantisch element nodig is.<br />

Hierdoor is de structuur van de website duidelijker en beter leesbaar.<br />

# 11. Afbeeldingen<br />

De afbeeldingen van de website worden opgeslagen in de map `afbeeldingen/`.<br />

De afbeeldingen zijn onderverdeeld in verschillende mappen.<br />

```text
afbeeldingen/
│
├── background-image.webp
├── hero-image-bedrijf.webp
├── image.png
│
├── ict-worx/
│   ├── ict-worx-camping.webp
│   ├── ict-worx-consulting.webp
│   ├── ict-worx-industrie.webp
│   ├── ict-worx-marine.webp
│   ├── ict-worx-network.webp
│   └── ict-worx-wifi.webp
│
└── logo/
    ├── logo-black.png
    └── logo-white.png
```

Voor afbeeldingen wordt zoveel mogelijk een beschrijvende `alt`-tekst gebruikt.<br />

Bij grotere afbeeldingen wordt waar nodig `loading="lazy"` gebruikt.<br />

Hierdoor kunnen afbeeldingen pas geladen worden wanneer ze in de buurt van het zichtbare gedeelte van de pagina komen.<br />

# 12. Responsive design<br />

De website moet bruikbaar zijn op zowel desktopcomputers als kleinere schermen.<br />

Bootstrap wordt gebruikt voor een deel van de responsive functionaliteit.<br />

Daarnaast wordt eigen CSS gebruikt met media queries om specifieke onderdelen van de website aan te passen voor kleinere schermen.<br />

De navbar gebruikt bijvoorbeeld `navbar-expand-md`. Hierdoor verandert de navigatie rond het medium breakpoint van Bootstrap.<br />

Ook de verschillende Grid- en Flexbox-layouts worden aangepast wanneer er minder beschikbare schermruimte is.<br />

# 13. Bootstrap<br />

Bootstrap 5.3.8 wordt via een CDN aan de website toegevoegd.<br />

De CSS en JavaScript van Bootstrap worden in de `<head>` van de HTML-pagina's geladen.<br />

Bootstrap wordt onder andere gebruikt voor:<br />

* Responsive navigatie.<br />
* Containers.<br />
* Flexbox utilities.<br />
* Spacing utilities.<br />
* Tekstuitlijning.<br />
* Formulieronderdelen.<br />
* Responsive layout.<br />

Voorbeelden van gebruikte Bootstrap classes zijn:<br />

* `container`<br />
* `container-fluid`<br />
* `d-flex`<br />
* `flex-wrap`<br />
* `justify-content-between`<br />
* `justify-content-center`<br />
* `align-items-center`<br />
* `text-center`<br />
* `py-3`<br />
* `my-4`<br />
* `border-top`<br />
* `navbar`<br />
* `navbar-expand-md`<br />
* `navbar-toggler`<br />
* `collapse`<br />

Bootstrap zorgt voor een basis waarop de eigen CSS verder bouwt.<br />

# 14. GitHub en GitHub Pages<br />

Het project wordt opgeslagen in een GitHub repository.<br />

GitHub wordt gebruikt voor versiebeheer en om de website online beschikbaar te maken met GitHub Pages.<br />

De bestanden van het project staan in de repository en worden vanuit daar gepubliceerd.<br />

Git wordt gebruikt om wijzigingen aan het project op te slaan in commits.<br />

Een typische workflow is:<br />

1. Code aanpassen in VS Code of VSCodeEdu.<br />
2. De wijzigingen controleren.<br />
3. De wijzigingen committen.<br />
4. De wijzigingen naar GitHub pushen.<br />
5. GitHub Pages gebruikt de bestanden om de website online te tonen.<br />

# 15. VSCodeEdu<br />

VSCodeEdu wordt gebruikt als ontwikkelomgeving voor het project.<br />

Hierin wordt de HTML-, CSS- en JavaScript-code geschreven en getest.<br />

De projectstructuur wordt rechtstreeks vanuit de editor beheerd.<br />

Daarnaast kunnen wijzigingen via Git aan GitHub gekoppeld worden.<br />

# 16. Algemene werking van de website<br />

De website bestaat uit drie hoofdpagina's:<br />

* `index.html` → persoonlijke voorstelling en informatie over mijn interesses, vaardigheden, projecten en stage.<br />
* `bedrijf.html` → informatie over ICT-Worx en mijn stagebedrijf.<br />
* `contact.html` → contactinformatie en contactformulier.<br />

De navbar en footer worden niet rechtstreeks op iedere pagina geschreven, maar worden via JavaScript vanuit de `components`-map geladen.<br />

De algemene styling staat in `css/style.css`.<br />

Elke grotere pagina heeft daarnaast een eigen CSS-bestand voor specifieke styling:<br />

* `style-index.css` → styling voor `index.html`.<br />
* `style-bedrijf.css` → styling voor `bedrijf.html`.<br />
* `style-contact.css` → styling voor `contact.html`.<br />

Hierdoor blijft de algemene styling gescheiden van de styling die alleen voor één specifieke pagina nodig is.<br />

# 17. Waarom de CSS opgesplitst is<br />

`style.css` bevat de algemene styling die op meerdere pagina's gebruikt wordt.<br />

Hierin staan bijvoorbeeld onderdelen voor de algemene navbar, footer, logo's en andere gedeelde elementen.<br />

De pagina-specifieke CSS-bestanden bevatten alleen de styling die nodig is voor die bepaalde pagina.<br />

Dit maakt het eenvoudiger om een specifieke pagina aan te passen zonder onnodig andere pagina's te beïnvloeden.<br />

De structuur is daarom:<br />

```text
css/
├── style.css
├── style-index.css
├── style-bedrijf.css
└── style-contact.css
```

# 18. Problemen en oplossingen<br />

Tijdens het maken van de website kwamen verschillende problemen voor.<br />

## Navbar blijft zichtbaar tijdens scrollen<br />

De navbar moest verdwijnen wanneer er naar beneden werd gescrold en opnieuw verschijnen wanneer er naar boven werd gescrold.<br />

Dit is opgelost met JavaScript dat de huidige en vorige scrollpositie vergelijkt.<br />

Op basis daarvan wordt de class `nav-hidden` toegevoegd of verwijderd.<br />

## Navbar over de hero-afbeelding<br />

De navbar moest over de hero-afbeelding kunnen staan zonder een aparte witte achtergrond te creëren.<br />

Daarvoor worden onder andere positionering en transparante achtergronden gebruikt.<br />

De navbar verandert daarnaast wanneer de gebruiker verder naar beneden scrollt.<br />

## Zwart en wit ICT-Worx-logo<br />

Omdat de achtergrond van de website op verschillende plaatsen verandert, zijn zowel een zwarte als een witte versie van het ICT-Worx-logo aanwezig.<br />

De CSS bepaalt welke versie zichtbaar is.<br />

## Herbruikbare navbar en footer<br />

In plaats van dezelfde navbar en footer op iedere pagina te kopiëren, worden deze in aparte HTML-bestanden geplaatst.<br />

Met JavaScript worden ze vervolgens in de juiste `div` geplaatst.<br />

Dit voorkomt dat dezelfde code op meerdere plaatsen aangepast moet worden.<br />

## Contactformulier<br />

Voor het formulier was het nodig om te controleren of verplichte velden ingevuld zijn.<br />

Daarvoor wordt de standaard HTML-validatie gecombineerd met de validatiestijlen van Bootstrap en het eigen `check.js`-script.<br />

# 19. Wat ik geleerd heb<br />

Tijdens het maken van dit project heb ik geleerd hoe verschillende webtechnologieën samenwerken.<br />

## HTML<br />

Ik heb geleerd hoe een website wordt opgebouwd met HTML en hoe semantische elementen zoals `header`, `main`, `section`, `article` en `footer` gebruikt worden.<br />

## CSS<br />

Ik heb geleerd hoe CSS gebruikt wordt om de layout, kleuren, afmetingen, typografie en responsive werking van een website te bepalen.<br />

Ook heb ik geleerd om Flexbox en CSS Grid te gebruiken voor verschillende layouts.<br />

## JavaScript<br />

Ik heb geleerd hoe JavaScript gebruikt kan worden om HTML-bestanden dynamisch te laden en om het gedrag van elementen te veranderen op basis van acties van de gebruiker.<br />

## Bootstrap<br />

Ik heb geleerd hoe een CSS-framework gebruikt kan worden om sneller een responsive basislayout te maken.<br />

## GitHub<br />

Ik heb geleerd hoe GitHub gebruikt wordt voor het opslaan en beheren van een project en hoe een website met GitHub Pages online gepubliceerd kan worden.<br />

## Projectstructuur<br />

Ik heb geleerd dat het belangrijk is om code op te splitsen in verschillende bestanden en mappen zodat een project overzichtelijk en gemakkelijker te onderhouden blijft.<br />

# 20. Toekomstige verbeteringen<br />

Er zijn nog verschillende onderdelen die in de toekomst verbeterd kunnen worden.<br />

* Het contactformulier koppelen aan een echte backend of e-mailservice zodat berichten daadwerkelijk verzonden kunnen worden.<br />
* De tijdelijke projectlinks vervangen door echte projectpagina's.<br />
* Het Roblox-project eventueel vervangen door het homelab-project.<br />
* De inhoud van de stage-sectie op de bedrijfspagina verder aanvullen.<br />
* De website verder testen op verschillende schermformaten.<br />
* De toegankelijkheid van de website verder verbeteren.<br />
* De website verder optimaliseren voor snelheid en afbeeldingen.<br />
* Eventueel extra projecten toevoegen aan de portfoliosectie.<br />

# 21. Samenvatting<br />

Dit project is een persoonlijke stagewebsite waarin ik mezelf, mijn interesses, vaardigheden en projecten voorstel en informatie geef over mijn stagebedrijf ICT-Worx.<br />

De website is opgebouwd met HTML5, CSS3, JavaScript en Bootstrap 5. De bestanden zijn opgesplitst in verschillende pagina's, componenten, stylesheets, JavaScript-bestanden en afbeeldingen.<br />

JavaScript wordt gebruikt voor herbruikbare componenten zoals de navbar en footer, het gedrag van de navbar tijdens het scrollen en de validatie van het contactformulier.<br />

CSS wordt gebruikt voor het eigen ontwerp van de website, terwijl Bootstrap wordt gebruikt voor algemene layout, utilities en responsive functionaliteit.<br />

GitHub wordt gebruikt voor versiebeheer en GitHub Pages wordt gebruikt om de website online te publiceren.<br />

Het doel van het project is niet alleen om een website te maken, maar ook om ervaring op te doen met het structureren, ontwerpen, programmeren en publiceren van een volledige website.<br />
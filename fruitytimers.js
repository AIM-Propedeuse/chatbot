// Conversation tree
const conversation = {
  root: {
    message:
      'Hey! Ik ben Sarah van FruityTimers. Super dat je ons gaat helpen met een oplossing voor onze situatie. Ik heb me goed voorbereid. Doe jij dat ook met je aantekeningen? Kom maar op met je vragen!',
    options: [
      { text: '1. Wat voor oplossing zoeken jullie?', next: 'vraag-1' },
      { text: '9. Reset', next: 'reset' },
    ],
  },

  'vraag-1': {
    message: 'Welke vraag wil je stellen?',
    options: [
      {
        text: '1. Willen jullie een CLI-applicatie in plaats van een webapp of spreadsheets?',
        next: 'antwoord-1-opt1',
      },
      {
        text: '2. Waarom bouwen jullie geen website in plaats van een CLI-applicatie?',
        next: 'antwoord-1-opt2',
      },
      { text: '0. Ga terug', next: 'back' },
      { text: '9. Reset', next: 'reset' },
    ],
  },

  'antwoord-1-opt1': {
    message:
      "Ja, precies. Onze ontwikkelaars willen gewoon snel iets kunnen intypen en direct zien waar we staan. Geen tabbladen meer en zware programma's.",
    options: [
      { text: '1. Hoe zien jullie de applicatie voor je?', next: 'vraag-2' },
    ],
  },

  'antwoord-1-opt2': {
    message: 'Dat is niet de bedoeling. We willen juist géén website.',
    options: [{ text: '1. Kies een andere vraag', next: 'vraag-1' }],
  },

  'vraag-2': {
    message: 'Wat wil je aan Sarah vragen over de structuur van de applicatie?',
    options: [
      {
        text: '1. Wil je duidelijke hoofdonderdelen voor snelle navigatie?',
        next: 'antwoord-2-opt1',
      },
      {
        text: '2. Kan je niet alles in één overzicht zetten?',
        next: 'antwoord-2-opt2',
      },
      { text: '0. Ga terug', next: 'back' },
      { text: '9. Reset', next: 'reset' },
    ],
  },

  'antwoord-2-opt1': {
    message:
      'Jup, kort en overzichtelijk. Games voor projecten, Ontwikkelaars voor wie eraan werkt en Tests voor de techniekcheck.',
    options: [
      { text: '1. Meer weten over de menu-opties', next: 'menu-opties' },
    ],
  },

  'antwoord-2-opt2': {
    message:
      'Nee, echt niet. Dan wordt het weer onoverzichtelijk. Dat willen we juist vermijden.',
    options: [{ text: '1. Kies een andere vraag', next: 'vraag-2' }],
  },

  'menu-opties': {
    message: 'Van welke menu-optie wil je meer informatie?',
    options: [
      { text: '1. Games', next: 'menu-games' },
      { text: '2. Ontwikkelaars', next: 'menu-ontwikkelaars' },
      { text: '3. Tests', next: 'menu-tests' },
      { text: '0. Ga terug', next: 'back' },
      { text: '9. Reset', next: 'reset' },
    ],
  },

  'menu-games': {
    message:
      'In het gamemenu zie je gameID, titel, status en versie. Voer een gameID in voor details, inclusief status en ontwikkelaars. Toekomstbestendig.',
    options: [
      { text: '1. Terug naar menu-opties', next: 'menu-opties' },
      { text: '2. Afronding', next: 'afronding' },
    ],
  },

  'menu-ontwikkelaars': {
    message:
      'Overzicht met medewerkersID, naam, en welke games ze doen. Details: adres, taal, en alle games waar ze aan werken of hebben gewerkt. Toekomstbestendig.',
    options: [
      { text: '1. Terug naar menu-opties', next: 'menu-opties' },
      { text: '2. Afronding', next: 'afronding' },
    ],
  },

  'menu-tests': {
    message:
      'Twee testen: databaseverbinding en HTTP-server/protocol check. Simpel en snel zekerheid checken.',
    options: [
      { text: '1. Terug naar menu-opties', next: 'menu-opties' },
      { text: '2. Afronding', next: 'afronding' },
    ],
  },

  afronding: {
    message:
      'Goed dat je het vraagt! De tool moet uitbreidbaar zijn, met feedback en bugtracking, maar voorlopig alleen gegevens inzien. Klaar voor ontwikkeling!',
    options: [{ text: '9. Reset', next: 'reset' }],
  },
};

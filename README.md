# chatbot

Heel simpel chatbot systeem in JavaScript.

## Hoe te gebruiken

1. Maak een HTML bestand aan en link `chatbot.js` erin.
2. Maak een `div` aan met de id `chatbox` waar de chatbot in
3. Maak een `form` aan met de id `inputform` en een `input` met de id `inputfield` voor de input van de gebruiker.
4. Maak een JavaScript bestand aan en definieer een `conversation` object met de structuur zoals in `fruitytimers.js`.
5. Roep `startConversation()` aan om de chatbot te starten.

## Datastructuur

INn `fruitytimers.js` is een voorbeeld van een `conversation` object. Het object bestaat uit nodes, waarbij elke node een prompt en mogelijke antwoorden heeft. Elk antwoord leidt naar een andere node.
Elke node heeft de volgende structuur:

```javascript
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
  // Meer nodes hier...
};
```

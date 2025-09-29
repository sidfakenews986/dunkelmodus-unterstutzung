# Dunkelmodus Unterstutzung

## Einleitung
Dunkelmodus-Unterstützung ist ein einfach zu verwendendes JavaScript-Plugin, das es Entwicklern ermöglicht, ihren Webseiten mühelos einen Dunkelmodus hinzuzufügen. Es berücksichtigt die Systemeinstellungen des Benutzers und ermöglicht eine manuelle Umschaltung zwischen Licht- und Dunkelmodus.

## Funktionen
- Automatische Erkennung des Dunkelmodus basierend auf den Systemeinstellungen.
- Benutzerdefinierte Schaltfläche zur manuellen Umschaltung.
- Anpassbare Farben und Stile für den Dunkelmodus.
- Leichtgewichtig und einfach zu implementieren.

## Installation
```bash
npm install dunkelmodus-unterstutzung
```

## Verwendung
```javascript
import Dunkelmodus from 'dunkelmodus-unterstutzung';

const dunkelmodus = new Dunkelmodus({
    buttonSelector: '#toggle-theme',
    darkModeStyles: {
        backgroundColor: '#121212',
        color: '#ffffff'
    },
    lightModeStyles: {
        backgroundColor: '#ffffff',
        color: '#000000'
    }
});
```

## Beiträge
Beiträge sind jederzeit willkommen! Bitte öffne ein Issue oder erstelle einen Pull Request.

## Lizenz
Dieses Projekt ist unter der MIT-Lizenz lizenziert.
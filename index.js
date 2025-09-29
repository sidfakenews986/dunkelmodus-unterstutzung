import Dunkelmodus from './Dunkelmodus.js';

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
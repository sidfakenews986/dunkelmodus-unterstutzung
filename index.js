import dunkelmodus from './dunkelmodus.js';

const themeToggle = new dunkelmodus({
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
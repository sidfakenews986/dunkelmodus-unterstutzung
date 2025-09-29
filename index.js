import Dunkelmodus from './Dunkelmodus';

const themeToggle = new Dunkelmodus({
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
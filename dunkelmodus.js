class Dunkelmodus {
    constructor(options) {
        this.buttonSelector = options.buttonSelector;
        this.darkModeStyles = options.darkModeStyles;
        this.lightModeStyles = options.lightModeStyles;
        this.isDarkMode = false;
        this.initialize();
    }

    initialize() {
        this.loadUserPreference();
        this.addToggleButton();
    }

    loadUserPreference() {
        const userPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
        this.isDarkMode = userPreference;
        this.applyStyles();
    }

    applyStyles() {
        const styles = this.isDarkMode ? this.darkModeStyles : this.lightModeStyles;
        Object.keys(styles).forEach(key => {
            document.body.style[key] = styles[key];
        });
    }

    addToggleButton() {
        const button = document.querySelector(this.buttonSelector);
        button.addEventListener('click', () => this.toggleMode());
    }

    toggleMode() {
        this.isDarkMode = !this.isDarkMode;
        this.applyStyles();
    }
}

export default Dunkelmodus;

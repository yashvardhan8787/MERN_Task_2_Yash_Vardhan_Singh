import React from 'react';
import { ThemeProvider } from './context/themeContext';
import ThemeSwitcher from './ThemeSwitcher';
import './styles/light.css';
import './styles/dark.css';

function App() {
    return (
        <ThemeProvider>
            <div className="App">
                <h1>Hello, welcome to the theme switcher app!</h1>
                <ThemeSwitcher />
            </div>
        </ThemeProvider>
    );
}

export default App;

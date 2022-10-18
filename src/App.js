import logo from './logo.svg';
import './App.css';
import {useTranslation} from 'react-i18next';

function App() {
    const {t, i18n} = useTranslation();

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    {t("select_language")}
                </p>
                <button style={{
                    fontSize:"2rem"
                }} onClick={() => i18n.changeLanguage(i18n.language == 'tr-TR' ? 'en-US' : 'tr-TR')}>
                    {t("change_language")}
                </button>
            </header>
        </div>
    );
}

export default App;

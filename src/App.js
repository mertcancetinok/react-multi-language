import './App.css';
import {useTranslation} from 'react-i18next';

function App() {
    const {t, i18n} = useTranslation();

    return (
        <div className="App">
            <h1>React {t("multi_language")}</h1>
            <h3>{t("current_language")} {i18n.language || window.localStorage.i18nextLng}</h3>
            <button onClick={() => i18n.changeLanguage(i18n.language == 'tr-TR' ? 'en-US' : 'tr-TR')}>{t("change_language")}</button>
        </div>
    );
}

export default App;

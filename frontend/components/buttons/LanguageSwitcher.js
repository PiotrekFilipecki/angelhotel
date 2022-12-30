import { useContext } from "react";
import LanguageContext from "./LanguageContext";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const handleToggle = () => {
    if (language === "pl") {
      setLanguage("en");
    } else {
      setLanguage("pl");
    }
  };

  return (
    <button className="language-switcher" onClick={() => handleToggle()}>
      {language}
    </button>
  );
};

export default LanguageSwitcher;

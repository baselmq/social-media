import "./css/index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { useTranslation } from "react-i18next";
import React, { useEffect } from "react";
import cookies from "js-cookie";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";
import AddInformation from "./components/sign_up/AddInformation";
const languages = [
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
  {
    code: "ar",
    name: "العربية",
    dir: "rtl",
    country_code: "sa",
  },
];
function App() {
  // .*** --------------------language--------------------- ***
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();
  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
    document.title = t("app_title");
  }, [currentLanguage, t]);

  // .*** --------------------return--------------------- ***
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/information" element={<AddInformation />} />
      <Route path="/home" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      {/* <Route path="/profile" element={<Profile />} /> */}
    </Routes>
  );
}

export default App;

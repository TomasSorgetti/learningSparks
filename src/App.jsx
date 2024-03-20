import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { translations } from "./utils/tranlation";
import { useTranslation } from "react-i18next";
// import Blog from "./pages/Blog";
// import BlogDetail from "../src/pages/BlogDetail/BlogDetail"
import axios from "axios";

i18n.use(initReactI18next).init({
  resources: translations,
  lng: "es",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

function App() {
  const { t } = useTranslation();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const language = localStorage.getItem("lang");
    if (language && language !== i18n.language) {
      i18n.changeLanguage(language);
    }
  }, []);

  useEffect(() => {
    const data = async () => {
      try {
        await axios.get("https://ipapi.co/json/").then((res) => {
          if (res) {
            setUserData(res.data);
          }
        });
      } catch (error) {
        console.log("error fetching ip api", error);
      }
    };
    data();
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={<Home t={t} i18n={i18n} country={userData.country_name} />}
      />
      {/* <Route path="/blog" element={<Blog t={t} i18n={i18n} />} />
      <Route path="/blog/:id" element={<BlogDetail />} />       */}
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;

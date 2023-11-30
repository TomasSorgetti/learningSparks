import DashboardLogin from "./pages/Dashboard/DashboardLogin";
import DashboardHome from "./pages/Dashboard/DashboardHome";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import DashboardCreateUser from "./pages/Dashboard/DashboardCreateUser";
import DashboardNewBlog from "./pages/Dashboard/DashboardNewBlog";
import Blog from "./pages/Blog";
import { useEffect } from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { translations } from "./utils/tranlation";
import { useTranslation } from "react-i18next";

// import { ProtectedRoutes, ProtectedLoginRoute } from "./utils/ProtectedRoutes";


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
  useEffect(() => {
    const language = localStorage.getItem("lang");
    if (language && language !== i18n.language) {
      i18n.changeLanguage(language);
    }
  }, []);
  
  return (
    <Routes>
      <Route path="/" element={<Home t={t} i18n={i18n} />} />
      <Route path="/blog" element={<Blog t={t} i18n={i18n} />} />
      {/* <Route element={<ProtectedLoginRoute />}>
      </Route>
      <Route element={<ProtectedRoutes />}>
      </Route> */}
      <Route path="/dashboard" element={<DashboardLogin />} />
      <Route path="/dashboard/createUser" element={<DashboardCreateUser />} />
      <Route path="/dashboard/home" element={<DashboardHome />} />
      <Route path="/dashboard/add-new-blog" element={<DashboardNewBlog />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;

import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import Clases from "./components/Clases/Clases";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import { useEffect } from "react";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        // Navbar
        Clases: "Clases",
        Nosotros: "About",
        Contactanos: "Contact",
        // Header
        HeaderTitle1: "Expert Online Tutors for",
        HeaderTitle2: "IB and IGCSE",
        HeaderTitle3: " Exams, Essays and Assesments",
        HeaderText:
          "Access a world of learning right at your fingertips. Expert coaching for extended essays, internal assessments, and exam preparation in Mathematics, Biology, Physics, and more, no matter where you are!",
        HeaderButton: "Book now",
        // Clases
        ClaseTitle: "IB and IGCSE Lessons",
        ClaseSubTitle: "Select Your Perfect Study Plan!",
        ClaseTitleText:
          "Customized one-on-one sessions, collaborative group learning, and unbeatable discounts – Your path to exam excellence begins here!",
        // Clases Card 1
        Card1Title: "One-on-one Lessons",
        Card1Subtitle1: "Your Learning Journey, Your Way:",
        Card1Text1:
          "Shape a custom study plan and advance toward your goals at your own rhythm.",
        Card1Subtitle2: "Tailored Support:",
        Card1Text2:
          "Benefit from personalized guidance and focused feedback, designed exclusively for you.",
        // Clases Card 2
        Card2Title: "Group lessons",
        Card2TitleSpan: "(3 students or more)",
        Card2Subtitle1: "Interactive Learning Adventures:",
        Card2Text1:
          "Dive into lively discussions and engaging debates with fellow learners.",
        Card2Subtitle2: "Friends Learn Together, Save Together:",
        Card2Text2:
          "Bring along two friends, and all of you unlock an exclusive, wallet-friendly rate!",
        Card2Span: "for each student",
        //Consultar Button
        CardsButton: "Ask Now",
        // Materias
        MateriasTitle: "Choose Your IB or IGCSE Subject",
        MateriasText:
          "Our tutors specialize in both High Level (HL) and Standard Level (SL) subjects. Additionally, we provide expert coaching to enhance your Extended Essays and offer dedicated assistance for Internal Assessments. Your path to IB success begins here, with personalized guidance every step of the way.",
        // About
        AboutSpan: "¿WHO WE ARE?",
        AboutTitle1: "About ",
        AboutTitle2: "Learning Spark",
        AboutText1:
          "We get it preparing for those international exams can be seriously tough and stressful. But guess what? We're here to tell you that we've got your back, and",
        AboutSpan1: " we're all about helping you unleash your full potential.",
        AboutText2:
          "Our team of specialized tutors is dedicated to making this journey enjoyable and effortless.",
        AboutSpan2:
          "Join our tailored classes in English or Spanish, designed for IB (international baccalaureate)",
        AboutText3: "and",
        AboutSpan3: "IGCSE exam success.",
        AboutText4:
          "We provide top-notch tutoring, customized for these demanding programs, offering personalized guidance every step of the way. Let's embark on an exciting learning journey together!",
        // Contact
        ContactTitle: "Contact us",
        ContactText: "Do you have any questions or inquiries? Can't find the subject you're looking for? Feel free to reach out by sending us a message, and we'll get back to you promptly. Your academic journey is important to us, and we're here to assist you with a warm and professional touch.",
        // Footer
        FooterContactTitle:"Contact",
        FooterMenuTitle:"Menu",
      },
    },
    es: {
      translation: {
        // Navbar
        Clases: "Clases",
        Nosotros: "Nosotros",
        Contactanos: "Contactanos",
        // Header
        HeaderTitle1: "Clases de apoyo con tutores especializados para",
        HeaderTitle2: "IB y IGCSE",
        HeaderTitle3: "",
        HeaderText:
          "Un mundo de aprendizaje a tu alcance. Exploraciones guiadas y preparación para exámenes en Mathematics, Biology, Physics y más, ¡sin     importar tu ubicación!",
        HeaderButton: "Reservar ahora",
        // Clases
        ClaseTitle: "Clases IB y IGCSE",
        ClaseSubTitle: "¡Elige tu plan ideal!",
        ClaseTitleText:
          "Clases individuales, grupales, y paquetes con descuento",
        // Clases Card 1
        Card1Title: "Clases individuales",
        Card1Subtitle1: "A tu ritmo",
        Card1Text1:
          "Diseña un plan de estudio personalizado y avanza según tus metas.",
        Card1Subtitle2: "Atención individualizada",
        Card1Text2:
          "Recibe orientación y retroalimentación enfocada en tus                necesidades.",
        // Clases Card 2
        Card2Title: "Clases grupales",
        Card2TitleSpan: "(3 personas o más)",
        Card2Subtitle1: "Aprendizaje interactivo",
        Card2Text1: "Participa en dinámicas y debates con otros estudiantes.",
        Card2Subtitle2: "Descuento por amistad",
        Card2Text2: "¡Trae a dos amigos y todos obtendrán un precio especial!",
        Card2Span: "por estudiante",
        //Consultar Button
        CardsButton: "Consultar",
        // Materias
        MateriasTitle: "Elige tu materia",
        MateriasText:
          "Todas nuestras clases son impartidas tanto en Standard Level (Nivel Estándar) como en High Level (Nivel Superior), Ofrecemos clases para IB y IGCSE y coaching para tus Extended Essays e Internal Assessments",
        // About
        AboutSpan: "¿QUIÉNES SOMOS?",
        AboutTitle1: "Sobre",
        AboutTitle2: "Learning Spark",
        AboutText1:
          "Sabemos lo difícil y estresante que puede ser prepararse para los exámenes internacionales y por eso queremos darte la tranquilidad de que",
        AboutSpan1: "podemos ayudarte a alcanzar tu máximo potencial.",
        AboutText2:
          "Nuestro equipo de profesionales altamente especializados te guiará en un",
        AboutSpan2: "ambiente bilingüe",
        AboutText3: "y",
        AboutSpan3: "enfocado en los exámenes IB y IGCSE.",
        AboutText4:
          "Prepárate para el éxito con las primeras tutorías especializadas diseñadas exclusivamente para estos desafiantes programas educativos.",
        // Contact
        ContactTitle: "Contáctanos",
        ContactText: "¿Tienes dudas o consultas? ¿No ves la materia que quieres? Envía tu mensaje que te respondemos muy pronto.",
        // Footer
        FooterContactTitle:"Contacto",
        FooterMenuTitle:"Menú",
      },
    },
  },
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
    <div className="App">
      <Navigation t={t} i18n={i18n} />
      <Header t={t} />
      <Clases t={t} />
      <About t={t} />
      <Contact t={t} />
      <Footer t={t} />
    </div>
  );
}

export default App;

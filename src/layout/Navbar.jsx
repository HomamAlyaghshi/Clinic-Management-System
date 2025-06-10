import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { FaSun, FaMoon, FaGlobe } from "react-icons/fa"; // استيراد أيقونات الشمس والقمر والكرة الأرضية

const Navbar = () => {
  const { t, i18n } = useTranslation();

  // جلب الثيم الأولي من localStorage أو الافتراضي إلى 'clinicLight'
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "clinicLight";
  });

  // تطبيق الثيم عند التحميل الأولي وعند تغيير حالة الثيم
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme); // حفظ تفضيل الثيم
  }, [theme]);

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    // document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr'; // هذه الخطوة يمكن إدارتها بواسطة i18next-browser-languagedetector
  };

  const toggleTheme = () => {
    const newTheme = theme === "clinicLight" ? "clinicDark" : "clinicLight";
    setTheme(newTheme);
  };

  return (
    <nav className="bg-primary text-white shadow-lg z-10 relative">
      {" "}
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl sm:text-2xl font-bold tracking-wide">
          {t("Clinic Dashboard")}
        </h1>

        <div className="flex items-center gap-2">
          {/* Language Toggle Button */}
          <button
            onClick={toggleLanguage}
            className="px-3 py-2 rounded-full text-sm font-medium bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors duration-300 flex items-center gap-2"
          >
            <FaGlobe className="h-4 w-4" /> {/* أيقونة الكرة الأرضية */}
            <span>{i18n.language === "en" ? "العربية" : "English"}</span>
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="px-3 py-2 rounded-full text-sm font-medium bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors duration-300 flex items-center gap-2"
          >
            {theme === "clinicLight" ? (
              <FaMoon className="h-4 w-4" /> // أيقونة القمر للوضع الليلي
            ) : (
              <FaSun className="h-4 w-4" /> // أيقونة الشمس للوضع النهاري
            )}
            <span className="hidden sm:inline">{t("Theme")}</span>{" "}
            {/* إخفاء كلمة "Theme" على الشاشات الصغيرة */}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

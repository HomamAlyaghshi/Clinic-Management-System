import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaHome, FaCalendarAlt, FaUserMd, FaChartBar } from 'react-icons/fa'; 

const Sidebar = ({ activeRoute, onToggleTheme, onToggleLanguage, currentTheme, currentLanguage }) => {
  const { t, i18n } = useTranslation();


  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  const navLinks = [
    { path: '/', icon: FaHome, text: 'home' },
    { path: '/appointments', icon: FaCalendarAlt, text: 'appointments' },
    { path: '/doctors', icon: FaUserMd, text: 'doctors' },
    { path: '/calendar', icon: FaChartBar, text: 'Calendar' }, 
  ];

  return (
    <div className="w-64 min-h-screen bg-primary text-white shadow-xl p-4 flex flex-col justify-between">
      {/* Logo Section */}
      <div className="mb-10 mt-4 text-center">
        <img
          src="/logo192.png" 
          alt="Clinic Logo"
          className="h-16 mx-auto object-contain" 
        />
      </div>

      {/* Navigation Links */}
      <nav className="flex-grow space-y-4"> 
        {navLinks.map((link) => (
          <a
  key={link.path}
  href={link.path}
  className={`flex items-center gap-3 p-3 rounded-lg text-lg font-medium transition-all duration-200
    ${activeRoute === link.path
      ? 'bg-red-400 text-white shadow-lg'
      : 'hover:bg-white hover:bg-opacity-20 text-white'
    }`}
>
  <link.icon
    className={`text-xl transition-transform ${
      activeRoute === link.path
        ? 'text-yellow-300'
        : 'group-hover:scale-110'
    }`}
  />
  <span>{t(link.text)}</span>
</a>

        ))}
      </nav>

      {/* Footer/Empty Space (optional, for layout balance) */}
      <div className="text-center text-sm text-white text-opacity-70 mt-auto pt-4"> 
        © {new Date().getFullYear()} ClinicName.
      </div>
    </div>
  );
};

export default Sidebar;
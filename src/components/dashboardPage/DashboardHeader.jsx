import React from "react";
import { useTranslation } from "react-i18next";

const DashboardHeader = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{t('dashboard')}</h1>
    </div>
  );
};

export default DashboardHeader;

import React from "react";
import { useTranslation } from "react-i18next";
// Import icons
import { CurrencyDollarIcon, CalendarDaysIcon } from '@heroicons/react/24/solid';

const RevenueSummary = () => {
  const { t } = useTranslation();

  const revenueData = {
    total: 125000,
    monthly: 15000,
    weekly: 3500,
  };

  return (
    <div className="bg-base-100 p-6 rounded-2xl shadow-xl border border-base-content/10 mb-6">
      <h2 className="text-3xl font-extrabold mb-8 text-base-content text-center">{t('Revenue Overview')}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Total Revenue Card */}
        <div className="flex flex-col items-center justify-center p-6 bg-primary/10 rounded-lg shadow-md transition-transform hover:scale-105">
          <CurrencyDollarIcon className="text-primary w-12 h-12 mb-3" />
          <h3 className="text-xl font-semibold text-base-content">{t('Total Revenue')}</h3>
          <p className="text-4xl font-bold text-primary mt-2">${revenueData.total.toLocaleString()}</p>
        </div>

        {/* Monthly Revenue Card */}
        <div className="flex flex-col items-center justify-center p-6 bg-secondary/10 rounded-lg shadow-md transition-transform hover:scale-105">
          <CalendarDaysIcon className="text-secondary w-12 h-12 mb-3" />
          <h3 className="text-xl font-semibold text-base-content">{t('Monthly Revenue')}</h3>
          <p className="text-4xl font-bold text-secondary mt-2">${revenueData.monthly.toLocaleString()}</p>
        </div>

        {/* Weekly Revenue Card */}
        <div className="flex flex-col items-center justify-center p-6 bg-accent/10 rounded-lg shadow-md transition-transform hover:scale-105">
          <CalendarDaysIcon className="text-accent w-12 h-12 mb-3" />
          <h3 className="text-xl font-semibold text-base-content">{t('Weekly Revenue')}</h3>
          <p className="text-4xl font-bold text-accent mt-2">${revenueData.weekly.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default RevenueSummary;

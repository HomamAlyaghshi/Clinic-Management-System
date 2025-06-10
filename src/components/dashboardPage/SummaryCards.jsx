import React from "react";
import SummaryCard from "./SummaryCard";
import { useTranslation } from "react-i18next";
// استيراد الأيقونات من Heroicons
import { UserGroupIcon, CalendarDaysIcon, UserIcon } from '@heroicons/react/24/solid';

const SummaryCards = () => {
  const { t } = useTranslation();

  const cards = [
    {
      title: t('total Doctors'),
      count: 5,
      icon: UserGroupIcon, // تمرير مكون الأيقونة
      colorClass: "bg-primary/10", // استخدام لون أساسي فاتح من الثيم
    },
    {
      title: t('total Appointments'),
      count: 20,
      icon: CalendarDaysIcon, // تمرير مكون الأيقونة
      colorClass: "bg-secondary/10", // استخدام لون ثانوي فاتح من الثيم
    },
    {
    title: t('total Patients'),
      count: 15,
      icon: UserIcon, // تمرير مكون الأيقونة
      colorClass: "bg-accent/10", // استخدام لون مميز فاتح من الثيم
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4"> {/* زيادة الفجوة وإضافة padding */}
      {cards.map((card, index) => (
        <SummaryCard
          key={index}
          title={card.title}
          count={card.count}
          icon={card.icon}
          colorClass={card.colorClass}
        />
      ))}
    </div>
  );
};

export default SummaryCards;
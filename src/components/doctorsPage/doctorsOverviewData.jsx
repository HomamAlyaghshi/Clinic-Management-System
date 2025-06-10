// src/components/doctorsPage/DoctorsOverviewCards.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  UserGroupIcon, // عدد الأطباء الكلي
  StarIcon,       // للأطباء الأعلى تقييمًا
  BriefcaseIcon,  // للتخصصات
  ClockIcon       // للأطباء في المناوبة/المتاحين
} from '@heroicons/react/24/solid';

const doctorsOverviewData = [
  {
    id: 1,
    titleKey: 'total_doctors',
    value: 25,
    icon: UserGroupIcon,
    bgColor: 'bg-primary', // لون مميز
    descriptionKey: 'doctors_registered_in_system',
  },
  {
    id: 2,
    titleKey: 'active_doctors',
    value: 20,
    icon: ClockIcon, // قد تشير للمتاحين حاليا
    bgColor: 'bg-info', // لون معلومات
    descriptionKey: 'doctors_currently_active',
  },
  {
    id: 3,
    titleKey: 'total_specialties',
    value: 10,
    icon: BriefcaseIcon, // أيقونة للتخصصات
    bgColor: 'bg-success', // لون نجاح
    descriptionKey: 'unique_medical_specialties',
  },
  {
    id: 4,
    titleKey: 'highest_rated_doctor',
    value: 'Dr. Amina', // يمكن أن تكون قيمة نصية
    icon: StarIcon,
    bgColor: 'bg-warning', // لون تحذير/تمييز
    descriptionKey: 'doctor_with_highest_patient_rating',
  },
];

const DoctorsOverviewCards = () => {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {doctorsOverviewData.map((card) => (
        <div key={card.id} className={`card ${card.bgColor}  shadow-lg rounded-2xl`}>
          <div className="card-body">
            <div className="flex items-center justify-between mb-2">
              <h2 className="card-title text-xl font-bold">
                {t(card.titleKey)}
              </h2>
              <card.icon className="w-8 h-8 opacity-80" /> {/* عرض الأيقونة */}
            </div>
            <p className="text-2xl font-extrabold mb-2">
              {card.value}
            </p>
            <p className="text-sm opacity-90">{t(card.descriptionKey)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DoctorsOverviewCards;
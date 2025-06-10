import React from "react";
import { useTranslation } from "react-i18next";
// استيراد الأيقونات
import { StarIcon, AcademicCapIcon, UserCircleIcon } from '@heroicons/react/24/solid';

const doctors = [
  { id: 1, name: "Dr. Sami", specialty: "General Practitioner", patientsTreated: 120, rating: 4.8, imageUrl: "/doctors/doctor1.jpg" },
  { id: 2, name: "Dr. Sara", specialty: "Pediatrician", patientsTreated: 98, rating: 4.6, imageUrl: "/doctors/doctor3.jpg" },
  { id: 3, name: "Dr. Karim", specialty: "Dermatologist", patientsTreated: 110, rating: 4.7, imageUrl: "/doctors/doctor2.jpg" },
  { id: 4, name: "Dr. Laila", specialty: "Ophthalmologist", patientsTreated: 75, rating: 4.4, imageUrl: "/doctors/doctor4.jpg"},
];

const getRatingBadgeClass = (rating) => {
  if (rating >= 4.7) return "badge-success";
  if (rating >= 4.5) return "badge-warning";
  return "badge-error";
};

const DoctorsPerformance = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-base-100 p-6 rounded-2xl shadow-xl border border-base/10 mb-6">
      <div className="flex items-center gap-3 mb-8">
        <AcademicCapIcon className="w-8 h-8 text-primary" />
        <h2 className="text-3xl font-extrabold ">{t('Doctors Performance Overview')}</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {doctors.map(({ id, name, specialty, patientsTreated, rating, imageUrl }) => (
          <div key={id} className="card bg-base-200 shadow-md compact transition-transform duration-300 hover:shadow-lg hover:scale-105">
            <div className="card-body items-center text-center p-6">
              {imageUrl ? (
                <img src={imageUrl} alt={name} className="rounded-full w-20 h-20 mb-4 object-cover" />
              ) : (
                <UserCircleIcon className="w-20 h-20 text-primary mb-4" />
              )}

              <h3 className="card-title text-2xl font-bold  mb-2">{name}</h3>
              <p className="text-sm text-neutral mb-4">{t(specialty)}</p>

              <div className="flex justify-around w-full gap-4 mb-4">
                <div className="stat place-items-center p-0 min-w-0">
                  <div className="stat-title text-xs text-neutral">{t('Patients Treated')}</div>
                  <div className="stat-value text-xl text-secondary">{patientsTreated}</div>
                </div>
                <div className="stat place-items-center p-0 min-w-0">
                  <div className="stat-title text-xs text-neutral">{t('Rating')}</div>
                  <div className={`stat-value text-xl flex items-center gap-1 ${getRatingBadgeClass(rating) === 'badge-success' ? 'text-success' : getRatingBadgeClass(rating) === 'badge-warning' ? 'text-warning' : 'text-error'}`}>
                    <StarIcon className="w-5 h-5" />
                    {rating}
                  </div>
                </div>
              </div>

              <div className={`badge badge-lg font-semibold ${getRatingBadgeClass(rating)}`}>
                <StarIcon className="w-4 h-4 mr-1" />
                {rating >= 4.7 ? t('Excellent') : rating >= 4.5 ? t('Good') : t('Needs Improvement')}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorsPerformance;

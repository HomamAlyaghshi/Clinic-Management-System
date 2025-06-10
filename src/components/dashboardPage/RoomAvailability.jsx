import React from "react";
import { useTranslation } from "react-i18next";
// Import icons
import { CheckCircleIcon, XCircleIcon, InformationCircleIcon } from '@heroicons/react/24/solid';

const clinics = [
  { id: 1, specialty: "Dentistry", status: "available" },
  { id: 2, specialty: "General Surgery", status: "booked" },
  { id: 3, specialty: "Pediatrics", status: "available" },
  { id: 4, specialty: "Dermatology", status: "booked" },
  { id: 5, specialty: "Ophthalmology", status: "available" },
  { id: 6, specialty: "ENT", status: "available" },
  { id: 7, specialty: "Physical Therapy", status: "booked" },
];

const ClinicAvailability = () => {
  const { t } = useTranslation();

  const totalClinics = clinics.length;
  const availableClinics = clinics.filter(clinic => clinic.status === "available").length;
  const bookedClinics = totalClinics - availableClinics;

  return (
    <div className="bg-base-100 p-6 rounded-2xl shadow-xl border border-base-content/10 mb-6">
      <h2 className="text-3xl font-extrabold mb-8 text-base-content text-center">
        {t('Clinic Status Overview')}
      </h2>

      {/* Statistics Section */}
      <div className="flex flex-wrap justify-around gap-6 mb-8">
        {/* Available Clinics */}
        <div className="flex-1 min-w-[150px] bg-success/10 p-5 rounded-lg shadow-md flex flex-col items-center justify-center transition-transform hover:scale-105">
          <CheckCircleIcon className="text-success w-10 h-10 mb-2" />
          <p className="text-5xl font-bold text-success leading-none">{availableClinics}</p>
          <p className="text-sm font-medium text-success mt-1">{t('Available Clinics')}</p>
        </div>

        {/* Booked Clinics */}
        <div className="flex-1 min-w-[150px] bg-error/10 p-5 rounded-lg shadow-md flex flex-col items-center justify-center transition-transform hover:scale-105">
          <XCircleIcon className="text-error w-10 h-10 mb-2" />
          <p className="text-5xl font-bold text-error leading-none">{bookedClinics}</p>
          <p className="text-sm font-medium text-error mt-1">{t('Booked Clinics')}</p>
        </div>

        {/* Total Clinics */}
        <div className="flex-1 min-w-[150px] bg-primary/10 p-5 rounded-lg shadow-md flex flex-col items-center justify-center transition-transform hover:scale-105">
          <InformationCircleIcon className="text-primary w-10 h-10 mb-2" />
          <p className="text-5xl font-bold text-primary leading-none">{totalClinics}</p>
          <p className="text-sm font-medium text-primary mt-1">{t('Total Clinics')}</p>
        </div>
      </div>

      {/* Table Section */}
      <h3 className="text-xl font-bold mb-4 text-base-content">{t('Detailed Clinic List')}</h3>
      <div className="overflow-x-auto rounded-lg border border-base-content/20">
        <table className="table table-zebra w-full">
          <thead>
            <tr className="bg-base-200">
              <th>{t('Clinic ID')}</th>
              <th>{t('Specialty')}</th>
              <th>{t('Status')}</th>
            </tr>
          </thead>
          <tbody>
            {clinics.map(({ id, specialty, status }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{t(specialty)}</td> {/* Specialty is now translatable */}
                <td>
                  <span
                    className={`badge font-semibold ${status === "available" ? "badge-success" : "badge-error"}`}
                  >
                    {status === "available" ? t('Available') : t('Booked')}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClinicAvailability;

import React from "react";
import { useTranslation } from "react-i18next";

const UpcomingAppointments = () => {
  const { t } = useTranslation();

  const appointments = [
    { id: 1, patient: "Mohammed Ahmed", doctor: "Dr. Sami", time: "10:00 AM" },
    { id: 2, patient: "Layla Khalid", doctor: "Dr. Sara", time: "10:30 AM" },
    { id: 3, patient: "Ahmed Ali", doctor: "Dr. Sami", time: "11:00 AM" },
    { id: 4, patient: "Suad Mohammed", doctor: "Dr. Karim", time: "11:30 AM" },
    { id: 5, patient: "Hisham Yusuf", doctor: "Dr. Sara", time: "12:00 PM" },
  ];

  return (
    <div className="bg-base-100 p-4 rounded-2xl shadow mb-4">
      <h2 className="text-xl font-bold mb-4 text-base-content text-center">
        {t("Upcoming Appointments")}
      </h2>
      <table className="table w-full">
        <thead>
          <tr>
            <th>{t("Patient")}</th>
            <th>{t("Doctor")}</th>
            <th>{t("Time")}</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(({ id, patient, doctor, time }) => (
            <tr key={id}>
              <td>{patient}</td>
              <td>{doctor}</td>
              <td>{time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UpcomingAppointments;

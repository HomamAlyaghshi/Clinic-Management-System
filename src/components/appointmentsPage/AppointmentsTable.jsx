import React, { useState } from "react";
import {
  CalendarDaysIcon,
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/solid";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";

const initialAppointments = [
  { id: 1, patient: "Ahmad Ali", doctor: "Dr. Sami", clinic: "Cardiology", date: "2025-06-15", time: "10:00 AM", status: "Confirmed" },
  { id: 2, patient: "Lina Hassan", doctor: "Dr. Sara", clinic: "Pediatrics", date: "2025-06-16", time: "12:00 PM", status: "Pending" },
  { id: 3, patient: "Omar Youssef", doctor: "Dr. Karim", clinic: "Dermatology", date: "2025-06-17", time: "02:30 PM", status: "Cancelled" },
  { id: 4, patient: "Rana Khaled", doctor: "Dr. Laila", clinic: "Ophthalmology", date: "2025-06-18", time: "09:00 AM", status: "Confirmed" },
  { id: 5, patient: "Ziad Emad", doctor: "Dr. Hamza", clinic: "Oncology", date: "2025-06-19", time: "11:00 AM", status: "Confirmed" },
  { id: 6, patient: "Nour Walid", doctor: "Dr. Huda", clinic: "Neurology", date: "2025-06-20", time: "03:00 PM", status: "Pending" },
  { id: 7, patient: "Mona Adel", doctor: "Dr. Sami", clinic: "Cardiology", date: "2025-06-21", time: "09:30 AM", status: "Confirmed" },
  { id: 8, patient: "Khaled Essam", doctor: "Dr. Karim", clinic: "Dermatology", date: "2025-06-22", time: "01:00 PM", status: "Pending" },
];

// DaisyUI badge class based on status
const getStatusBadgeClass = (status) => {
  if (status === "Confirmed") return "badge-success";
  if (status === "Pending") return "badge-warning";
  if (status === "Cancelled") return "badge-error";
  return "badge-ghost";
};

const AppointmentsTable = () => {
  const { t } = useTranslation();

  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All"); // 'All', 'Confirmed', 'Pending', 'Cancelled'
  const [appointments, setAppointments] = useState(initialAppointments);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterStatusChange = (status) => {
    setFilterStatus(status);
  };

  const handleStatusChange = (id, newStatus) => {
    setAppointments((prevAppointments) =>
      prevAppointments.map((appointment) =>
        appointment.id === id ? { ...appointment, status: newStatus } : appointment
      )
    );
  };

  const filteredAppointments = appointments.filter((appointment) => {
    const matchesSearch =
      appointment.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.doctor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.clinic.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = filterStatus === "All" || appointment.status === filterStatus;

    return matchesSearch && matchesStatus;
  });

  const availableStatuses = ["All", "Confirmed", "Pending", "Cancelled"];

  return (
    <div className="bg-base-100 p-6 rounded-2xl shadow-xl border border-base-content/10 mb-6">
      {/* Header and Controls */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
        <div className="flex items-center gap-3">
          <CalendarDaysIcon className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-extrabold text-base-content">{t("Upcoming Appointments")}</h2>
        </div>

        {/* Search Bar and Filters */}
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto ">
          {/* Search Input */}
          <label className="input input-bordered flex items-center m-1">
            <MagnifyingGlassIcon className="h-5 w-5 opacity-70" />
            <input
              type="text"
              className="grow"
              placeholder={t("Search appointments...")}
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </label>

          {/* Status Filters */}
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-outline btn-info m-1">
              <AdjustmentsHorizontalIcon className="h-5 w-5" />
              <span>{t("Filter: ")}{t(filterStatus)}</span>
            </div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-52">
              {availableStatuses.map((status) => (
                <li key={status}>
                  <button
                    onClick={() => handleFilterStatusChange(status)}
                    className={filterStatus === status ? "active" : ""}
                  >
                    {t(status)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl">
        {filteredAppointments.length === 0 ? (
          <div className="text-center p-8 text-neutral-content">
            <p className="text-xl font-semibold mb-2">{t("No appointments found.")}</p>
            <p>{t("Try adjusting your search or filters.")}</p>
          </div>
        ) : (
          <table className="table table-md table-zebra w-full">
            <thead>
              <tr className="bg-base-300">
                <th className="text-lg font-semibold text-base-content">{t("Patient")}</th>
                <th className="text-lg font-semibold text-base-content">{t("Doctor")}</th>
                <th className="text-lg font-semibold text-base-content">{t("Clinic")}</th>
                <th className="text-lg font-semibold text-base-content">{t("Date")}</th>
                <th className="text-lg font-semibold text-base-content">{t("Time")}</th>
                <th className="text-lg font-semibold text-base-content">{t("Status")}</th>
                <th className="text-lg font-semibold text-base-content">{t("Actions")}</th>
              </tr>
            </thead>
            <tbody>
              {filteredAppointments.map(({ id, patient, doctor, clinic, date, time, status }) => (
                <tr key={id} className="hover:bg-base-300 transition-colors duration-200">
                  <td className="text-base-content">{patient}</td>
                  <td className="text-base-content">{doctor}</td>
                  <td className="text-base-content">{clinic}</td>
                  <td className="text-base-content">{date}</td>
                  <td className="text-base-content">{time}</td>
                  <td>
                    <span className={`badge badge-lg font-semibold ${getStatusBadgeClass(status)}`}>
                      {t(status)}
                    </span>
                  </td>
                  <td>
                    <div className="dropdown dropdown-end">
                      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle btn-sm">
                        <EllipsisVerticalIcon className="h-5 w-5" />
                      </div>
                      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-40">
                        {availableStatuses
                          .filter((s) => s !== "All" && s !== status)
                          .map((s) => (
                            <li key={s}>
                              <button onClick={() => handleStatusChange(id, s)}>
                                <PencilSquareIcon className="h-4 w-4" /> {t("Change to ")} {t(s)}
                              </button>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AppointmentsTable;

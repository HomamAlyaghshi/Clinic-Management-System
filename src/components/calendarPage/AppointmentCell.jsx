import React from "react";
import { Tooltip } from "react-tooltip";

const statusColors = {
  confirmed: "bg-green-500",
  pending: "bg-yellow-500",
  cancelled: "bg-red-500",
};

const AppointmentCell = ({ appointment, onAddClick, t }) => {
  if (appointment) {
    return (
      <>
        <div
          className={`text-white p-2 rounded-lg text-xs text-center shadow cursor-pointer transform transition-transform duration-200 hover:scale-105 ${statusColors[appointment.status]}`}
          data-tooltip-id={`tooltip-${appointment.id}`}
        >
          {appointment.patient}
          <br />
          <span className="text-[10px]">{appointment.doctor}</span>

          <Tooltip id={`tooltip-${appointment.id}`} place="top" effect="solid">
            <div>
              <strong>{t("Patient")}:</strong> {appointment.patient}<br />
              <strong>{t("Doctor")}:</strong> {appointment.doctor}<br />
              <strong>{t("Status")}:</strong> {t(appointment.status)}
            </div>
          </Tooltip>
        </div>
      </>
    );
  }

  return (
    <div
      className="text-gray-400 text-xl text-center cursor-pointer hover:text-gray-600 select-none"
      onClick={onAddClick}
      title={t("Add appointment")}
    >
      +
    </div>
  );
};

export default AppointmentCell;

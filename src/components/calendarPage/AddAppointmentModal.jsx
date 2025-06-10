import React from "react";

const AddAppointmentModal = ({
  t,
  isOpen,
  onClose,
  onAdd,
  patientName,
  setPatientName,
  doctors,
  selectedDoctor,
  setSelectedDoctor,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-[320px] shadow-lg">
        <h3 className="text-xl font-semibold mb-4">{t("Add Appointment")}</h3>

        <label className="block mb-4">
          {t("Patient Name")}:
          <input
            type="text"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            className="w-full border border-gray-300 rounded px-2 py-1 mt-1"
            autoFocus
          />
        </label>

        <label className="block mb-4">
          {t("Select Doctor")}:
          <select
            value={selectedDoctor}
            onChange={(e) => setSelectedDoctor(e.target.value)}
            className="w-full border border-gray-300 rounded px-2 py-1 mt-1"
          >
            <option value="">{t("Select a doctor")}</option>
            {doctors.map((doctor) => (
              <option key={doctor} value={doctor}>
                {doctor}
              </option>
            ))}
          </select>
        </label>

        <div className="flex justify-end gap-4 mt-6">
          <button
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            onClick={onClose}
          >
            {t("Cancel")}
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={onAdd}
            disabled={!patientName.trim() || !selectedDoctor}
            title={
              !patientName.trim()
                ? t("Please enter patient name")
                : !selectedDoctor
                ? t("Please select a doctor")
                : ""
            }
          >
            {t("Add")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddAppointmentModal;

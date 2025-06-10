import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import dayjs from "dayjs";
import AppointmentCell from "./../components/calendarPage/AppointmentCell";
import AddAppointmentModal from "./../components/calendarPage/AddAppointmentModal";

const clinics = [
  { id: 1, name: "General Clinic" },
  { id: 2, name: "Pediatrics Clinic" },
  { id: 3, name: "Dermatology Clinic" },
  { id: 4, name: "Ophthalmology Clinic" },
  { id: 5, name: "Dental Clinic" },
];

const initialAppointments = [
  {
    id: 1,
    clinicId: 1,
    doctor: "Dr. Sami",
    patient: "John Doe",
    time: "9:00 AM",
    status: "confirmed",
  },
  {
    id: 2,
    clinicId: 1,
    doctor: "Dr. Sami",
    patient: "Sara Ali",
    time: "9:30 AM",
    status: "pending",
  },
  {
    id: 3,
    clinicId: 1,
    doctor: "Dr. Sami",
    patient: "Mohammed Saleh",
    time: "10:00 AM",
    status: "cancelled",
  },
  {
    id: 4,
    clinicId: 2,
    doctor: "Dr. Sara",
    patient: "Jane Smith",
    time: "10:30 AM",
    status: "confirmed",
  },
  {
    id: 5,
    clinicId: 2,
    doctor: "Dr. Sara",
    patient: "Layla Omar",
    time: "11:00 AM",
    status: "confirmed",
  },
  {
    id: 6,
    clinicId: 3,
    doctor: "Dr. Karim",
    patient: "Ali Hasan",
    time: "11:00 AM",
    status: "pending",
  },
  {
    id: 7,
    clinicId: 3,
    doctor: "Dr. Karim",
    patient: "Huda Mahmoud",
    time: "11:30 AM",
    status: "confirmed",
  },
  {
    id: 8,
    clinicId: 4,
    doctor: "Dr. Laila",
    patient: "Mary Jones",
    time: "11:30 AM",
    status: "cancelled",
  },
  {
    id: 9,
    clinicId: 4,
    doctor: "Dr. Laila",
    patient: "Homam Khalid",
    time: "12:00 PM",
    status: "confirmed",
  },
  {
    id: 10,
    clinicId: 5,
    doctor: "Dr. Ahmed",
    patient: "Mohammed Khalid",
    time: "12:00 PM",
    status: "confirmed",
  },
];

const timeSlots = [
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
];

const Calendar = () => {
  const { t } = useTranslation();

  const [appointments, setAppointments] = useState(initialAppointments);
  const [modalOpen, setModalOpen] = useState(false);
  const [newPatientName, setNewPatientName] = useState("");
  const [selectedClinicId, setSelectedClinicId] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const currentTime = dayjs().format("h:mm A");

  const [selectedDoctor, setSelectedDoctor] = useState("");

  const doctorsByClinic = {
    1: ["Dr. Sami", "Dr. Ali"],
    2: ["Dr. Sara"],
    3: ["Dr. Karim"],
    4: ["Dr. Laila"],
    5: ["Dr. Ahmed"],
  };

  const openModal = (clinicId, time) => {
    setSelectedClinicId(clinicId);
    setSelectedTime(time);
    setNewPatientName("");
    setSelectedDoctor("");
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const addAppointment = () => {
    if (!newPatientName.trim() || !selectedDoctor) {
      alert(t("Please enter patient name and select a doctor."));
      return;
    }

    const newId = appointments.length
      ? Math.max(...appointments.map((a) => a.id)) + 1
      : 1;

    const newAppointment = {
      id: newId,
      clinicId: selectedClinicId,
      doctor: selectedDoctor,
      patient: newPatientName.trim(),
      time: selectedTime,
      status: "pending",
    };

    setAppointments([...appointments, newAppointment]);
    setModalOpen(false);
  };

  return (
    <div className="py-6 overflow-x-auto">
      <h2 className="text-3xl font-bold mb-6">{t("Clinics Schedule")}</h2>

      <div className="min-w-[900px] relative">
        <div className="grid grid-cols-[150px_repeat(5,minmax(150px,1fr))] border">
          {/* Header */}
          <div className="bg-base-200 p-4 font-semibold text-center border-r sticky left-0 z-20">
            {t("Time")}
          </div>
          {clinics.map((clinic) => (
            <div
              key={clinic.id}
              className="bg-base-200 p-4 font-semibold text-center border-r sticky top-0 z-10"
            >
              {t(clinic.name)}
            </div>
          ))}

          {/* Body */}
          {timeSlots.map((time) => (
            <React.Fragment key={time}>
              {/* Time column */}
              <div
                className={`p-4 text-center border-t border-r sticky left-0 z-10 ${
                  time === currentTime ? "bg-blue-100" : ""
                }`}
              >
                {time}
              </div>

              {/* Clinic columns */}
              {clinics.map((clinic) => {
                const appointment = appointments.find(
                  (a) => a.clinicId === clinic.id && a.time === time
                );

                return (
                  <div
                    key={clinic.id + time}
                    className={`p-2 border-t border-r min-h-[60px] relative group hover:bg-gray-100 transition ${
                      time === currentTime ? "bg-blue-50" : ""
                    }`}
                  >
                    <AppointmentCell
                      appointment={appointment}
                      onAddClick={() => openModal(clinic.id, time)}
                      t={t}
                    />
                  </div>
                );
              })}
            </React.Fragment>
          ))}
        </div>
      </div>

      <AddAppointmentModal
        t={t}
        isOpen={modalOpen}
        onClose={closeModal}
        onAdd={addAppointment}
        patientName={newPatientName}
        setPatientName={setNewPatientName}
        doctors={doctorsByClinic[selectedClinicId] || []}
        selectedDoctor={selectedDoctor}
        setSelectedDoctor={setSelectedDoctor}
      />
    </div>
  );
};

export default Calendar;

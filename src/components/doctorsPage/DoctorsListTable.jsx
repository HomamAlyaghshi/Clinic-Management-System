// src/components/doctorsPage/DoctorsListTable.jsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
  EllipsisVerticalIcon,
  UserGroupIcon,
  StarIcon,
} from '@heroicons/react/24/solid';
import {
  PencilSquareIcon,
  TrashIcon,
  EyeIcon,
} from '@heroicons/react/24/outline';

const initialDoctors = [
  {
    id: 1,
    name: 'Dr. Ahmad Sami',
    specialty: 'Cardiology',
    phone: '+966501234567',
    email: 'ahmad.sami@clinic.com',
    status: 'Active',
    rating: 4.8,
    avatar: '/doctors/doctor1.jpg'
  },
  {
    id: 2,
    name: 'Dr. Sara Ali',
    specialty: 'Pediatrics',
    phone: '+966509876543',
    email: 'sara.ali@clinic.com',
    status: 'On Leave',
    rating: 4.9,
    avatar: '/doctors/doctor3.jpg'
  },
  {
    id: 3,
    name: 'Dr. Karim Omar',
    specialty: 'Dermatology',
    phone: '+966501122334',
    email: 'karim.omar@clinic.com',
    status: 'Active',
    rating: 4.7,
    avatar: '/doctors/doctor1.jpg'
  },
  {
    id: 4,
    name: 'Dr. Laila Fouad',
    specialty: 'Ophthalmology',
    phone: '+966504455667',
    email: 'laila.fouad@clinic.com',
    status: 'Inactive',
    rating: 4.5,
    avatar: '/doctors/doctor4.jpg'
  },
  {
    id: 5,
    name: 'Dr. Hisham Tarek',
    specialty: 'Neurology',
    phone: '+966507788990',
    email: 'hisham.tarek@clinic.com',
    status: 'Active',
    rating: 4.6,
    avatar: '/doctors/doctor2.jpg'
  },
];

const getStatusBadgeClass = (status) => {
  if (status === "Active") return "badge-success";
  if (status === "On Leave") return "badge-warning";
  if (status === "Inactive") return "badge-error";
  return "badge-ghost";
};

const DoctorsListTable = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterSpecialty, setFilterSpecialty] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");
  const [doctors, setDoctors] = useState(initialDoctors);

  const availableSpecialties = ["All", ...new Set(initialDoctors.map(doc => doc.specialty))];
  const availableStatuses = ["All", "Active", "On Leave", "Inactive"];

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterSpecialtyChange = (specialty) => {
    setFilterSpecialty(specialty);
  };

  const handleFilterStatusChange = (status) => {
    setFilterStatus(status);
  };

  const handleDoctorAction = (id, actionType, payload = null) => {
    console.log(`Doctor ID: ${id}, Action: ${actionType}, Payload:`, payload);

    if (actionType === 'change_status' && payload) {
      setDoctors(prevDoctors =>
        prevDoctors.map(doc =>
          doc.id === id ? { ...doc, status: payload } : doc
        )
      );
    } else if (actionType === 'delete') {
      if (window.confirm(t('confirm_delete_doctor', { doctorName: doctors.find(d => d.id === id)?.name }))) {
        setDoctors(prevDoctors => prevDoctors.filter(doc => doc.id !== id));
      }
    } else if (actionType === 'edit') {
      alert(t('action_edit_doctor', { doctorName: doctors.find(d => d.id === id)?.name }));
    } else if (actionType === 'view_details') {
      alert(t('action_view_details', { doctorName: doctors.find(d => d.id === id)?.name }));
    }
  };

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch =
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.phone.includes(searchTerm);

    const matchesSpecialty =
      filterSpecialty === "All" || doctor.specialty === filterSpecialty;

    const matchesStatus =
      filterStatus === "All" || doctor.status === filterStatus;

    return matchesSearch && matchesSpecialty && matchesStatus;
  });

  return (
    <div className="bg-base-100  rounded-2xl shadow-xl border border-base-content/10 mb-6 p-6 ">
      {/* Header and Controls */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 mb-6">
        {/* العنوان */}
        <div className="flex items-center gap-3">
          <UserGroupIcon className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-extrabold text-base-content">{t('doctors_list_title')}</h2>
        </div>

        {/* شريط البحث والفلاتر */}
        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
          {/* البحث */}
          <label className="input input-bordered flex items-center gap-2 grow min-w-0">
            <MagnifyingGlassIcon className="h-5 w-5 opacity-70" />
            <input
              type="text"
              className="grow min-w-0"
              placeholder={t('search_doctors_placeholder')}
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </label>

          {/* فلتر التخصصات */}
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-outline btn-info   whitespace-nowrap">
              <AdjustmentsHorizontalIcon className="h-5 w-5" />
              <span>{t('filter_specialty')}: {filterSpecialty}</span>
            </div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-52 max-h-60 overflow-auto">
              {availableSpecialties.map((specialty) => (
                <li key={specialty}>
                  <a
                    onClick={() => handleFilterSpecialtyChange(specialty)}
                    className={filterSpecialty === specialty ? "active" : ""}
                  >
                    {specialty}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* فلتر الحالة */}
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-outline btn-info  whitespace-nowrap">
              <AdjustmentsHorizontalIcon className="h-5 w-5" />
              <span>{t('filter_status')}: {filterStatus}</span>
            </div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-52 max-h-60 overflow-auto">
              {availableStatuses.map((status) => (
                <li key={status}>
                  <a
                    onClick={() => handleFilterStatusChange(status)}
                    className={filterStatus === status ? "active" : ""}
                  >
                    {status}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl border border-base-content/10 w-full">
        {filteredDoctors.length === 0 ? (
          <div className="text-center  text-neutral">
            <p className="text-xl font-semibold mb-2">{t('no_doctors_found_title')}</p>
            <p>{t('no_doctors_found_message')}</p>
          </div>
        ) : (
          <table className="table table-md table-zebra w-full min-w-max">
            <thead>
              <tr className="bg-base-300">
                <th className="text-lg font-semibold "></th>
                <th className="text-lg font-semibold ">{t('doctor_name_col')}</th>
                <th className="text-lg font-semibold ">{t('specialty_col')}</th>
                <th className="text-lg font-semibold ">{t('phone_col')}</th>
                <th className="text-lg font-semibold ">{t('email_col')}</th>
                <th className="text-lg font-semibold ">{t('status_col')}</th>
                <th className="text-lg font-semibold ">{t('rating_col')}</th>
                <th className="text-lg font-semibold ">{t('actions_col')}</th>
              </tr>
            </thead>
            <tbody>
              {filteredDoctors.map((doctor) => (
                <tr key={doctor.id} className="hover:bg-base-300 transition-colors duration-200">
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={doctor.avatar} alt={`${doctor.name} Avatar`} />
                      </div>
                    </div>
                  </td>
                  <td className="text-base-content font-medium">{doctor.name}</td>
                  <td className="text-base-content">{doctor.specialty}</td>
                  <td className="text-base-content">{doctor.phone}</td>
                  <td className="text-base-content">{doctor.email}</td>
                  <td>
                    <span className={`badge badge-lg font-semibold ${getStatusBadgeClass(doctor.status)}`}>
                      {doctor.status}
                    </span>
                  </td>
                  <td className="text-base-content flex items-center gap-1">
                    <StarIcon className="w-5 h-5 text-warning" />
                    {doctor.rating}
                  </td>
                  <td>
                    {/* Action Dropdown */}
                    <div className="dropdown dropdown-end">
                      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle btn-sm">
                        <EllipsisVerticalIcon className="h-5 w-5" />
                      </div>
                      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-48">
                        <li>
                          <a onClick={() => handleDoctorAction(doctor.id, 'view_details')}>
                            <EyeIcon className="h-4 w-4" /> {t('view_details_action')}
                          </a>
                        </li>
                        <li>
                          <a onClick={() => handleDoctorAction(doctor.id, 'edit')}>
                            <PencilSquareIcon className="h-4 w-4" /> {t('edit_action')}
                          </a>
                        </li>
                        
                        <li>
                          <a onClick={() => handleDoctorAction(doctor.id, 'delete')} className="text-error">
                            <TrashIcon className="h-4 w-4" /> {t('delete_action')}
                          </a>
                        </li>
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

export default DoctorsListTable;
import React from 'react';
import { useTranslation } from 'react-i18next';
import { UserGroupIcon, PlusCircleIcon } from '@heroicons/react/24/solid'; 

const DoctorsHeader = () => {
  const { t } = useTranslation();


  const handleAddNewDoctor = () => {
    alert(t('add_new_doctor_action'));
  
  };

  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 ">
      {/* عنوان الصفحة مع أيقونة */}
      <div className="flex items-center gap-3">
        <UserGroupIcon className="w-10 h-10 text-primary" /> 
        <h1 className="text-xl sm:text-2xl font-extrabold ">
          {t('Doctors')}
        </h1>
      </div>

      {/* زر "إضافة طبيب جديد" */}
      <button
        onClick={handleAddNewDoctor}
        className="btn btn-md btn-primary text-white text-lg  rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
      >
        <PlusCircleIcon className="w-6 h-6" />
        {t('Add Doctor')}
      </button>
    </div>
  );
};

export default DoctorsHeader;
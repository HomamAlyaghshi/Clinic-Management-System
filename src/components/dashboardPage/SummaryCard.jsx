import React from "react";
import PropTypes from "prop-types";

const SummaryCard = ({ title, count, icon: IconComponent, description, colorClass = "bg-primary/10" }) => { // غيرنا اللون الافتراضي ليتناسق مع الهوية الجديدة
  return (
    <div className={`p-6 rounded-lg shadow-md transition-transform duration-300 hover:shadow-lg hover:scale-105 ${colorClass} flex flex-col items-center justify-center text-center`}>
      {/* الأيقونة في الأعلى، بحجم أكبر ومسافة سفلية */}
      {IconComponent && <IconComponent className="w-12 h-12 text-primary mb-3" />}

      {/* العنوان أسفل الأيقونة */}
      <h3 className="text-xl font-semibold text-base-content">{title}</h3>

      {/* الرقم بخط كبير ولون مميز */}
      <p className="text-4xl font-bold text-primary mt-2">
        {count}
      </p>

      {/* الوصف (إذا وجد) */}
      {description && <p className="text-sm text-neutral-content mt-1">{description}</p>}
    </div>
  );
};

SummaryCard.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired, // للسماح بأرقام منسقة (مثل "$125,000")
  icon: PropTypes.elementType,
  description: PropTypes.string,
  colorClass: PropTypes.string,
};

export default SummaryCard;
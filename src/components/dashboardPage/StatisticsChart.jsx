import React from "react";
import { useTranslation } from "react-i18next";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const StatisticsChart = () => {
  const { t } = useTranslation();

  const data = [
    { name: t("Jan"), visits: 40 },
    { name: t("Feb"), visits: 60 },
    { name: t("Mar"), visits: 80 },
    { name: t("Apr"), visits: 50 },
    { name: t("May"), visits: 70 },
    { name: t("Jun"), visits: 90 },
  ];

  return (
    <div className="bg-base-200 p-4 rounded-2xl shadow mb-4">
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">{t("Clinic Visits Overview")}</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="visits" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StatisticsChart;

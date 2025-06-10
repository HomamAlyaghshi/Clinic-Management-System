import { useTranslation } from "react-i18next";
import { StarIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";
import { UserCircleIcon } from '@heroicons/react/24/outline';

const customerFeedback = [
  {
    id: 1,
    customerName: "Omar Khaled",
    clinic: "Dental Clinic",
    doctor: "Dr. Ahmed",
    amountPaid: 250,
    rating: 5,
    comment: "Excellent service and very friendly staff!",
  },
  {
    id: 2,
    customerName: "Lina Hassan",
    clinic: "Dermatology Center",
    doctor: "Dr. Karim",
    amountPaid: 180,
    rating: 4,
    comment: "The doctor was very professional and helpful.",
  },
  {
    id: 3,
    customerName: "Mohammed Ali",
    clinic: "Eye Care Clinic",
    doctor: "Dr. Laila",
    amountPaid: 200,
    rating: 4,
    comment: "Quick service and clean facilities.",
  },
  {
    id: 4,
    customerName: "Sara Nabil",
    clinic: "Pediatrics Department",
    doctor: "Dr. Sara",
    amountPaid: 150,
    rating: 5,
    comment: "Great experience for my child!",
  },
  {
    id: 5,
    customerName: "Ahmed Mansour",
    clinic: "Cardiology Center",
    doctor: "Dr. Hamza",
    amountPaid: 300,
    rating: 5,
    comment: "Very thorough examination and clear explanations.",
  },
  // أضفنا المزيد من التعليقات لتجربة السكرول الطولي
  {
    id: 6,
    customerName: "Fatima Ali",
    clinic: "Pediatrics Department",
    doctor: "Dr. Mona",
    amountPaid: 120,
    rating: 5,
    comment: "Amazing with kids, highly recommend!",
  },
  {
    id: 7,
    customerName: "Youssef Saad",
    clinic: "Dental Clinic",
    doctor: "Dr. Omar",
    amountPaid: 280,
    rating: 4,
    comment: "A bit of a wait, but the treatment was top-notch.",
  },
  {
    id: 8,
    customerName: "Nour Emad",
    clinic: "Dermatology Center",
    doctor: "Dr. Amina",
    amountPaid: 210,
    rating: 5,
    comment: "My skin looks fantastic, thanks Dr. Amina!",
  },
  {
    id: 9,
    customerName: "Khaled Waleed",
    clinic: "Eye Care Clinic",
    doctor: "Dr. Youssef",
    amountPaid: 220,
    rating: 4,
    comment: "Clear vision now, very happy with the results.",
  },
  {
    id: 10,
    customerName: "Layla Murad",
    clinic: "Cardiology Center",
    doctor: "Dr. Zaki",
    amountPaid: 350,
    rating: 5,
    comment: "Felt very comfortable and well cared for.",
  },
];



const CustomerFeedback = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-base-100 p-6 rounded-2xl shadow-xl border border-base/10 mb-6">
      <div className="flex items-center gap-3 mb-8">
        <ChatBubbleLeftRightIcon className="w-8 h-8 text-primary" />
        <h2 className="text-3xl font-extrabold ">{t('Patient Feedback')}</h2>
      </div>

      <div className="space-y-4 pr-2" style={{ maxHeight: '500px', overflowY: 'auto' }}>
        {customerFeedback.map(({ id, customerName, clinic, doctor, amountPaid, rating, comment }) => (
          <div key={id} className="bg-base-200 rounded-lg shadow-md p-4">
            <div className="flex items-center justify-between mb-3 border-b border-base/10 pb-2">
              <div className="flex items-center gap-2">
                <UserCircleIcon className="w-8 h-8 text-secondary" />
                <h3 className="text-lg font-semibold text-primary">{customerName}</h3>
              </div>
              <div className="flex items-center gap-1">
                {Array.from({ length: rating }).map((_, index) => (
                  <StarIcon key={index} className="w-4 h-4 text-warning" />
                ))}
              </div>
            </div>
            <div className="text-sm text-neutral mb-2">
              <span className="font-medium">{t('Clinic:')}</span> {clinic} | <span className="font-medium">{t('Doctor:')}</span> {doctor}
            </div>
            <div className="text-sm text-neutral mb-2">
              <span className="font-medium">{t('Paid:')}</span> ${amountPaid}
            </div>
            <div className="italic text-base">"{comment}"</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerFeedback;

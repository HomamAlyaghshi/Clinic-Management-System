import DoctorsHeader from "../components/doctorsPage/DoctorsHeader";
import DoctorsListTable from "../components/doctorsPage/DoctorsListTable";
import DoctorsOverviewCards from "../components/doctorsPage/doctorsOverviewData";


const Doctors = () => {
  return (
    <div className="  space-y-6 ">
      <DoctorsHeader />
      <DoctorsOverviewCards />
      <DoctorsListTable /> {/* وضع المكون هنا */}
    </div>
  );
};

export default Doctors;
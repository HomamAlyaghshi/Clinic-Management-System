import DashboardHeader from './../components/dashboardPage/DashboardHeader';
import SummaryCards from "../components/dashboardPage/SummaryCards";
import UpcomingAppointments from '../components/dashboardPage/UpcomingAppointments';
import StatisticsChart from '../components/dashboardPage/StatisticsChart';
import RoomAvailability from '../components/dashboardPage/RoomAvailability';
import RevenueSummary from '../components/dashboardPage/RevenueSummary';
import DoctorsPerformance from '../components/dashboardPage/DoctorsPerformance';
import CustomerFeedback from '../components/dashboardPage/CustomerFeedback';

const Dashboard = () => {

  return (
    <div className="p-4 space-y-6">
      <DashboardHeader/>
      <DoctorsPerformance/>
      <SummaryCards/>
      <UpcomingAppointments/>
      <StatisticsChart/>
      <RoomAvailability/>
      <RevenueSummary/>
      <CustomerFeedback/>
    

    </div>
  );
};

export default Dashboard;

import BarChartGraph from "@/components/BarChartGraph/BarChartGraph";
import CardsGrid from "@/components/Cards/CardsGrid";
import LineChartGraph from "@/components/LineChartGraph/LineChartGraph";

const Dashboard = () => {
  return (
    <main className="mt-16">
      <CardsGrid />
      <div className="flex flex-col lg:flex-row gap-5 px-4">
        <BarChartGraph />
        <LineChartGraph />
      </div>
    </main>
  );
};

export default Dashboard;

import CardsGrid from "@/components/Cards/CardsGrid";
import EmpBarGraph from "@/components/EmpBarGraph/EmpBarGraph";
import EmpPieChart from "@/components/EmpPieChart/EmpPieChart";

const page = () => {
  return (
    <main className="flex justify-center flex-col mt-20">
      <CardsGrid />
      <div className="flex flex-col lg:flex-row gap-x-5 gap-y-5 px-8 lg:px-5">
        <EmpBarGraph />
        <EmpPieChart />
      </div>
    </main>
  );
};

export default page;

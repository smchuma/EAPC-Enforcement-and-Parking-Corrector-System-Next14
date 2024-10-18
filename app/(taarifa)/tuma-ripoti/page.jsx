import ReportList from "@/components/ReportList/ReportList";
import SalesForm from "@/components/SalesForm/SalesForm";
import React from "react";

const page = () => {
  return (
    <main className="mt-28">
      <div className="border-b-2 border-gray-300 pb-5 flex justify-between items-center">
        <h1 className="text-3xl">Ripoti</h1>
        <SalesForm />
      </div>
      <div>
        <ReportList />
      </div>
    </main>
  );
};

export default page;

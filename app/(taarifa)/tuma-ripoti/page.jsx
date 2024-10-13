import SalesForm from "@/components/SalesForm/SalesForm";
import React from "react";

const page = () => {
  return (
    <main className="flex justify-center flex-col mt-28">
      <h1 className="text-3xl border-b-2 border-gray-300 pb-2">Taarifa</h1>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <SalesForm />
      </div>
    </main>
  );
};

export default page;

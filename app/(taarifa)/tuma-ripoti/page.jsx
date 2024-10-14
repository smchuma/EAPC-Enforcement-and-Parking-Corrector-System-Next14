import SalesForm from "@/components/SalesForm/SalesForm";
import React from "react";

const page = () => {
  return (
    <main className="flex justify-center flex-col mt-28">
      <h1 className="text-3xl text-center border-b-2 border-gray-300 pb-5">
        Taarifa za kujaza
      </h1>
      <div className="flex items-center justify-center mt-8">
        <SalesForm />
      </div>
    </main>
  );
};

export default page;

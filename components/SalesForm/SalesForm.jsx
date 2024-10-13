"use client";

import { useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";

const SalesForm = () => {
  const [controlNumbers, setControlNumbers] = useState([
    { id: Date.now(), controlNumber: "", amount: "" },
  ]);

  // Handle adding a new control number
  const addControlNumber = () => {
    setControlNumbers([
      ...controlNumbers,
      { id: Date.now(), controlNumber: "", amount: "" },
    ]);
  };

  // Handle removing a control number
  const removeControlNumber = (id) => {
    setControlNumbers(controlNumbers.filter((item) => item.id !== id));
  };

  // Handle input change for control numbers
  const handleControlChange = (id, field, value) => {
    setControlNumbers(
      controlNumbers.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation: Ensure all control numbers are unique
    const controlNums = controlNumbers.map((item) => item.controlNumber);
    const uniqueControlNums = new Set(controlNums);

    if (controlNums.length !== uniqueControlNums.size) {
      alert("Control numbers must be unique.");
      return;
    }

    // Process form data
    const formData = {
      jazaMauzo: e.target.jazaMauzo.value,
      uploadPicha: e.target.uploadPicha.files[0], // File object
      controlNumbers: controlNumbers.map(({ controlNumber, amount }) => ({
        controlNumber,
        amount,
      })),
    };

    console.log("Form Data:", formData);

    // TODO: Handle form submission (e.g., send to API)

    // Reset form
    e.target.reset();
    setControlNumbers([{ id: Date.now(), controlNumber: "", amount: "" }]);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Jaza Mauzo */}
        <div className="flex flex-col">
          <label htmlFor="jazaMauzo" className="mb-2 font-semibold">
            Jaza Mauzo
          </label>
          <input
            type="text"
            id="jazaMauzo"
            name="jazaMauzo"
            required
            className="p-2 border border-gray-300 rounded"
            placeholder="Ingiza mauzo yako"
          />
        </div>

        {/* Upload Picha */}
        <div className="flex flex-col">
          <label htmlFor="uploadPicha" className="mb-2 font-semibold">
            Upload Picha Inayoonyesha Mauzo Yako ya Leo
          </label>
          <input
            type="file"
            id="uploadPicha"
            name="uploadPicha"
            accept="image/*"
            required
            className="p-2 border border-gray-300 rounded"
          />
        </div>
      </div>

      {/* Mauzo ya Control Number */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-4">Mauzo ya Control Number</h2>
        {controlNumbers.map((item, index) => (
          <div key={item.id} className="flex items-center mb-4">
            <div className="flex-1 grid grid-cols-2 gap-4">
              {/* Control Number */}
              <div className="flex flex-col">
                <label htmlFor={`controlNumber-${item.id}`} className="mb-1">
                  Control Number
                </label>
                <input
                  type="text"
                  id={`controlNumber-${item.id}`}
                  name={`controlNumber-${item.id}`}
                  value={item.controlNumber}
                  onChange={(e) =>
                    handleControlChange(
                      item.id,
                      "controlNumber",
                      e.target.value
                    )
                  }
                  required
                  className="p-2 border border-gray-300 rounded"
                  placeholder="Ingiza Control Number"
                />
              </div>

              {/* Amount */}
              <div className="flex flex-col">
                <label htmlFor={`amount-${item.id}`} className="mb-1">
                  Kiasi
                </label>
                <input
                  type="number"
                  id={`amount-${item.id}`}
                  name={`amount-${item.id}`}
                  value={item.amount}
                  onChange={(e) =>
                    handleControlChange(item.id, "amount", e.target.value)
                  }
                  required
                  className="p-2 border border-gray-300 rounded"
                  placeholder="Ingiza Kiasi"
                />
              </div>
            </div>

            {/* Delete Button */}
            {controlNumbers.length > 1 && (
              <button
                type="button"
                onClick={() => removeControlNumber(item.id)}
                className="ml-4 text-red-500 hover:text-red-700"
                aria-label="Delete Control Number"
              >
                <FaTrash size={20} />
              </button>
            )}
          </div>
        ))}

        {/* Add Button */}
        <button
          type="button"
          onClick={addControlNumber}
          className="flex items-center text-blue-500 hover:text-blue-700"
        >
          <FaPlus className="mr-2" /> Ongeza Control Number
        </button>
      </div>

      {/* Submit Button */}
      <div className="mt-6">
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
        >
          Tuma Mauzo
        </button>
      </div>
    </form>
  );
};

export default SalesForm;

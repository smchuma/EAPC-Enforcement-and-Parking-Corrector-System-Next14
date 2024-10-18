"use client";

import { useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { IoMdAddCircleOutline } from "react-icons/io";

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
    <div>
      <Dialog>
        <DialogTrigger>
          <div className="flex bg-gray-800 px-3 text-white p-2 rounded-md gap-x-2 items-center hover:scale-105 transition-all">
            <IoMdAddCircleOutline size={18} />
            Jaza Ripoti
          </div>
        </DialogTrigger>
        <DialogContent className="">
          <DialogHeader>
            <DialogTitle>Jaza Ripoti</DialogTitle>
            <DialogDescription>
              <form onSubmit={handleSubmit} className="rounded">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Jaza Mauzo */}
                  <div className="flex flex-col">
                    <Label htmlFor="jazaMauzo" className="mb-4 font-semibold">
                      Jaza Mauzo
                    </Label>
                    <Input
                      type="text"
                      id="jazaMauzo"
                      name="jazaMauzo"
                      required
                      className="p-5 border border-gray-400 rounded-xl"
                      placeholder="Ingiza mauzo yako"
                    />
                  </div>

                  {/* Upload Picha */}
                  <div className="flex flex-col">
                    <Label htmlFor="uploadPicha" className="mb-4 font-semibold">
                      Weka Picha Inayoonyesha Mauzo Yako ya Leo
                    </Label>
                    <Input
                      type="file"
                      id="uploadPicha"
                      name="uploadPicha"
                      accept="image/*"
                      required
                      className="p-2 border border-gray-400 rounded"
                    />
                  </div>
                </div>

                {/* Mauzo ya Control Number */}
                <div className="mt-6">
                  <h2 className="text-lg font-semibold mb-5">
                    Mauzo ya Control Number
                  </h2>
                  {controlNumbers.map((item, index) => (
                    <div key={item.id} className="flex items-center mb-5">
                      <div className="flex-1 grid grid-cols-2 gap-4">
                        {/* Control Number */}
                        <div className="flex flex-col">
                          <Label
                            htmlFor={`controlNumber-${item.id}`}
                            className="mb-3"
                          >
                            Control Number
                          </Label>
                          <Input
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
                            className="p-2 border border-gray-400 rounded"
                            placeholder="Ingiza Control Number"
                          />
                        </div>

                        {/* Amount */}
                        <div className="flex flex-col">
                          <Label htmlFor={`amount-${item.id}`} className="mb-3">
                            Kiasi
                          </Label>
                          <Input
                            type="number"
                            id={`amount-${item.id}`}
                            name={`amount-${item.id}`}
                            value={item.amount}
                            onChange={(e) =>
                              handleControlChange(
                                item.id,
                                "amount",
                                e.target.value
                              )
                            }
                            required
                            className="p-2 border border-gray-400 rounded"
                            placeholder="Ingiza Kiasi"
                          />
                        </div>
                      </div>

                      {/* Delete Button */}
                      {controlNumbers.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeControlNumber(item.id)}
                          className="bg-transparent ml-4 text-red-500 hover:text-red-700 mt-6"
                          aria-label="Delete Control Number"
                        >
                          <FaTrash size={15} />
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
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SalesForm;

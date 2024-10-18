"use client";

import { useState, useEffect } from "react";
import dummyReports from "./dummyData"; // Import dummy data

const ReportList = () => {
  const [reports, setReports] = useState([]);
  const [filteredReports, setFilteredReports] = useState([]);
  const [selectedReport, setSelectedReport] = useState(null); // For modal

  // State for date filter (single date)
  const [searchDate, setSearchDate] = useState("");

  useEffect(() => {
    // Set the reports from the imported dummy data
    setReports(dummyReports);
    setFilteredReports(dummyReports); // Initially show all reports
  }, []);

  // Filter reports by specific date
  const handleFilterByDate = () => {
    if (searchDate) {
      const filtered = reports.filter(
        (report) =>
          new Date(report.date).toDateString() ===
          new Date(searchDate).toDateString()
      );
      setFilteredReports(filtered);
    } else {
      setFilteredReports(reports); // Reset to all reports if no date is selected
    }
  };

  // Clear the filter and reset to all reports
  const handleClearFilter = () => {
    setSearchDate(""); // Clear the date input
    setFilteredReports(reports); // Reset to all reports
  };

  const handleViewDetails = (report) => {
    setSelectedReport(report); // Set the selected report for modal
  };

  const closeModal = () => {
    setSelectedReport(null); // Close modal
  };

  return (
    <div className="container mx-auto">
      {/* Single Date Filter Input */}
      <div className="flex space-x-4 mb-6">
        <div>
          <label className="block font-medium mb-1">Select Date</label>
          <input
            type="date"
            value={searchDate}
            onChange={(e) => setSearchDate(e.target.value)}
            className="border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="self-end flex space-x-2">
          <button
            onClick={handleFilterByDate}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Search
          </button>

          {/* Clear button */}
          <button
            onClick={handleClearFilter}
            className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400"
          >
            Clear
          </button>
        </div>
      </div>

      {/* Table */}
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="border p-2">Date</th>
            <th className="border p-2">Mauzo</th>
            <th className="border p-2">Picture</th>
            <th className="border p-2">Total Amount (Control Numbers)</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredReports.length > 0 ? (
            filteredReports.map((report) => (
              <tr key={report.id} className="text-center">
                <td className="border p-2">
                  {new Date(report.date).toLocaleDateString()}
                </td>
                <td className="border p-2">{report.jazaMauzo}</td>

                {/* Example picture column */}
                <td className="border p-2">
                  <img
                    src={report.picture}
                    alt="Report"
                    className="w-16 h-16 object-cover mx-auto"
                  />
                </td>

                {/* Total control number amount */}
                <td className="border p-2">
                  {report.controlNumbers.reduce(
                    (total, item) => total + Number(item.amount),
                    0
                  )}
                </td>

                {/* View details button */}
                <td className="border p-2">
                  <button
                    className="text-blue-500 hover:underline"
                    onClick={() => handleViewDetails(report)}
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center p-4">
                No reports found for this date
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Modal to display control numbers */}
      {selectedReport && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
            <h2 className="text-lg font-bold mb-4">
              Control Numbers for{" "}
              {new Date(selectedReport.date).toLocaleDateString()}
            </h2>
            <ul className="list-none">
              {selectedReport.controlNumbers.map((cn, index) => (
                <li key={index} className="mb-2">
                  <strong>Control Number:</strong> {cn.controlNumber},{" "}
                  <strong>Amount:</strong> {cn.amount}
                </li>
              ))}
            </ul>
            <div className="mt-4 text-right">
              <button
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReportList;

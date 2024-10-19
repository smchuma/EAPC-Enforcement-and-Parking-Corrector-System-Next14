import { FaCheck } from "react-icons/fa";

export const FormSuccess = ({ message }) => {
  if (!message) return null;

  return (
    <div className="bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald">
      <FaCheck className="w-4 h-4" />

      {message}
    </div>
  );
};

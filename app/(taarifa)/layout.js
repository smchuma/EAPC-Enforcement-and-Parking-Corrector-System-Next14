import EmpNavbar from "@/components/EmpNavbar/EmpNavbar";

export const metadata = {
  title: "EAPC",
  description: "",
};

export default function TaarifaLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-gray-200`}>
        <div className=" h-full w-[80%] mx-auto">
          <EmpNavbar />

          {children}
        </div>
      </body>
    </html>
  );
}

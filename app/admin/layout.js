import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function AdminLayout({ children }) {
  return (
    <main className="">
      <Sidebar />
      <main className="ml-0 lg:ml-80 w-full lg:w-[calc(100%-20rem)] pr-0 lg:pr-10">
        <Navbar />
        {children}
      </main>
    </main>
  );
}

export const metadata = {
  title: "EAPC",
  description: "Admin side",
};

export default function AuthLayout({ children }) {
  return (
    <main className="flex flex-col justify-center items-center mx-auto mt-12 h-auto bg-gray-50 w-[26rem] rounded-xl shadow-lg pb-10">
      <div className="text-white rounded-xl pt-20 pb-10 flex justify-center items-center mb-5 lobster text-4xl bg-gray-900 w-full">
        EAPC
      </div>
      <main className="w-full px-5">{children}</main>
    </main>
  );
}

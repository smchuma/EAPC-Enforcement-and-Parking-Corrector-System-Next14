import "./globals.css";

export const metadata = {
  title: "EAPC",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}

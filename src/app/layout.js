import "../styles/globals.css";

export const metadata = {
  title: "The Trust Scan",
  description: "Building Trust Through Transparency — web vulnerability scanning",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-true-black text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}

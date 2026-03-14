import "./globals.css";

export const metadata = {
  title: "Rutger's Car Cleaning",
  description: "Car cleaning in Keerbergen",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
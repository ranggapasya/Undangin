// app/layout.tsx
import Navbar from "@/components/miscComponents/NavbarLayout";
import "./globals.css";
import { NavbarProvider } from "@/Context/NavBarContext";

export const metadata = {
  title: "Undang.in",
  description: "Platform Undangan Digital",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavbarProvider>
          <Navbar />
          {children}
        </NavbarProvider>
      </body>
    </html>
  );
}

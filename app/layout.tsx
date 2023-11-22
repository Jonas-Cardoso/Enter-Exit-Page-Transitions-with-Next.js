import "@/styles/globals.css";
import { Manrope } from "next/font/google";
import { NavigationContextProvider } from "@/context/navigation.context";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={manrope.variable}>
      <body>
        <NavigationContextProvider>{children}</NavigationContextProvider>
      </body>
    </html>
  );
}

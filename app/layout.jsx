import "./globals.css";
import { ContextProvider } from "@contexts/ContextProvider";

export const metadata = {
  title: "Morphyy dashboard app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ContextProvider>
        <body>
          {children}
        </body>
      </ContextProvider>
    </html>
  );
}

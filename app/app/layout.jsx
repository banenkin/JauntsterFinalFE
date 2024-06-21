import { Inter } from "next/font/google";
import "./styles/globals.css";

import Header from "./components/Header/Header.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
import { AuthProvider } from "./context/authContext";
import Footer from "./components/Footer";
import { getUserSession } from "./actions/authActions";

export default async function RootLayout({ children }) {
  const session = await getUserSession();
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-neutral-50 flex flex-col items-center min-h-screen`}
      >
        <AuthProvider>
          <Header isAuthenticated={session}/>
          {children}
          <Footer/>
        </AuthProvider>
      </body>
    </html>
  );
}

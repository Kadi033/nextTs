import "./globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </UserProvider>
    </html>
  );
}

export default withPageAuthRequired(RootLayout);
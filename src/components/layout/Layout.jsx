import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import CookieConsent from "../common/CookieConsent";

/**
 * Layout Component
 * Wraps all pages with consistent Header and Footer
 * Provides main content area with proper structure
 */
function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}

export default Layout;

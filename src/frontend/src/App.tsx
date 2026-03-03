import { Toaster } from "@/components/ui/sonner";
import { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import AdminPage from "./pages/AdminPage";
import CoursesPage from "./pages/CoursesPage";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";

export type Page = "/" | "/register" | "/courses" | "/about" | "/admin";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("/");

  const navigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (currentPage) {
      case "/":
        return <HomePage navigate={navigate} />;
      case "/register":
        return <RegisterPage />;
      case "/courses":
        return <CoursesPage />;
      case "/about":
        return <AboutPage />;
      case "/admin":
        return <AdminPage />;
      default:
        return <HomePage navigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background font-body">
      <Toaster />
      <Navbar currentPage={currentPage} navigate={navigate} />
      <main className="flex-1">{renderPage()}</main>
      <Footer />
    </div>
  );
}

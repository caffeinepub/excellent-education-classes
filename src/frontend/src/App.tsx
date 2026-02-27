import { useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import CoursesPage from "./pages/CoursesPage";
import AboutPage from "./pages/AboutPage";

type Page = "/" | "/register" | "/courses" | "/about";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("/register");

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
      default:
        return <RegisterPage />;
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

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import layout components from their correct paths
import Header from "./components/Header";
import Footer from "./components/Footer";

// Import your page components
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
// Assuming you have a PrivacyPolicy page, add the import if it exists
// import PrivacyPolicy from "./pages/PrivacyPolicy";

// Create a client for React Query
const queryClient = new QueryClient();

// Main App Component
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* These are for showing notifications/toasts */}
      <Toaster />
      <Sonner />
      
      {/* BrowserRouter handles all the page routing */}
      <BrowserRouter>
        {/* This div creates the sticky footer layout */}
        <div className="flex flex-col min-h-screen bg-[#020617]">
          <Header />
          {/* The 'main' tag grows to fill available space, pushing the footer down */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              {/* Add a route for your privacy policy if the page exists */}
              {/* <Route path="/privacy-policy" element={<PrivacyPolicy />} /> */}
              
              {/* This is a catch-all route for any page not found */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

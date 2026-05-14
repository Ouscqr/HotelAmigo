
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { LanguageProvider } from "./contexts/LanguageContext";
import { BookingProvider } from "./contexts/BookingContext";
import BookingModal from "./components/BookingModal";
import { Analytics } from '@vercel/analytics/react';  // ← ADD THIS

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BookingProvider>
        <LanguageProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              {/* <Route path="/apartments" element={<Apartments />} /> */}
              {/* <Route path="/booking" element={<BookingPage />} /> */}
              {/* <Route path="/gallery" element={<Gallery />} /> */}
              <Route path="/contact" element={<Contact />} />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
          <BookingModal />
          <Analytics />
        </LanguageProvider>
      </BookingProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

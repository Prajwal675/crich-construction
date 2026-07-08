
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BOQPage from "./pages/BOQ";
import Team from "./pages/Team";
import Projects from "./pages/Projects";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import { useTrafficTracking } from "./hooks/useTrafficTracking";

const queryClient = new QueryClient();

const AppRoutes = () => {
  useTrafficTracking();

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/boq" element={<BOQPage />} />
      <Route path="/team" element={<Team />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

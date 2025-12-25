import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SoftwarePage from "./pages/SoftwarePage";
import VideoPage from "./pages/VideoPage";
import PhotographyPage from "./pages/PhotographyPage";
import GalleryPage from "./pages/GalleryPage";
import ResumePage from "./pages/ResumePage";
import NotFound from "./pages/NotFound";
import { Navigation } from "./components/Navigation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/software" element={<SoftwarePage />} />
          <Route path="/video" element={<VideoPage />} />
          <Route path="/photography" element={<PhotographyPage />} />
          <Route path="/photography/:id" element={<GalleryPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

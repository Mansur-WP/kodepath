import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Languages from "@/pages/Languages";
import LanguageDetail from "@/pages/LanguageDetail";
import Quiz from "@/pages/Quiz";
import Bookmarks from "@/pages/Bookmarks";
import Categories from "@/pages/Categories";
import Compare from "@/pages/Compare";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Navbar />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/languages" component={Languages} />
          <Route path="/languages/:id" component={LanguageDetail} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/bookmarks" component={Bookmarks} />
          <Route path="/categories" component={Categories} />
          <Route path="/compare" component={Compare} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

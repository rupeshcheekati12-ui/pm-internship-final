import { useState } from "react";
import { Button } from "@/components/ui/button";
import LandingPage from "@/components/LandingPage";
import AIMatchingDashboard from "@/components/AIMatchingDashboard";
import StudentRegistration from "@/components/StudentRegistration";
import CompanyPortal from "@/components/CompanyPortal";
import AIMatchingEngine from "@/components/AIMatchingEngine";

const App = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'dashboard' | 'register' | 'company' | 'engine'>('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page as 'home' | 'dashboard' | 'register' | 'company' | 'engine');
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <LandingPage onNavigate={handleNavigate} />;
      case 'dashboard':
        return <AIMatchingDashboard />;
      case 'register':
        return <StudentRegistration onNavigate={handleNavigate} />;
      case 'company':
        return <CompanyPortal onNavigate={handleNavigate} />;
      case 'engine':
        return (
          <div className="min-h-screen bg-background p-6">
            <div className="max-w-7xl mx-auto space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    AI Matching Engine
                  </h1>
                  <p className="text-muted-foreground text-lg">
                    Configure and monitor the intelligent allocation algorithms
                  </p>
                </div>
                <Button onClick={() => handleNavigate('dashboard')} variant="outline">
                  Back to Dashboard
                </Button>
              </div>
              <AIMatchingEngine />
            </div>
          </div>
        );
      default:
        return <LandingPage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen">
      {renderCurrentPage()}
    </div>
  );
};

export default App;
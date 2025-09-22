import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Users, MapPin, Building2, ArrowRight, CheckCircle, Target, Zap, TrendingUp, Globe } from "lucide-react";
import heroImage from "@/assets/hero-ai-matching.jpg";

interface LandingPageProps {
  onNavigate: (page: string) => void;
}

const LandingPage = ({ onNavigate }: LandingPageProps) => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Matching",
      description: "Advanced machine learning algorithms analyze skills, preferences, and qualifications for optimal matches"
    },
    {
      icon: Users,
      title: "Diversity & Inclusion",
      description: "Ensures representation from rural districts, aspirational districts, and all social categories"
    },
    {
      icon: Target,
      title: "Precision Allocation",
      description: "98.5% accuracy in matching students with the most suitable internship opportunities"
    },
    {
      icon: TrendingUp,
      title: "Real-time Analytics",
      description: "Live dashboard with comprehensive insights and performance metrics"
    }
  ];

  const stats = [
    { label: "Students Matched", value: "12,847", icon: Users },
    { label: "Partner Companies", value: "1,247", icon: Building2 },
    { label: "Success Rate", value: "96.8%", icon: CheckCircle },
    { label: "AI Accuracy", value: "98.5%", icon: Brain }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Brain className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">PM Internship AI</span>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" onClick={() => onNavigate('register')}>
                Register as Student
              </Button>
              <Button variant="ghost" onClick={() => onNavigate('company')}>
                Company Portal
              </Button>
              <Button onClick={() => onNavigate('dashboard')} className="bg-gradient-primary hover:shadow-primary">
                View Dashboard
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="AI-powered internship matching visualization"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center space-y-8">
          <Badge className="bg-gradient-accent text-accent-foreground" variant="secondary">
            <Zap className="h-3 w-3 mr-1" />
            AI-Powered Smart Allocation
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Smart Allocation Engine
            </span>
            <br />
            <span className="text-foreground">for PM Internships</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Revolutionary AI-powered system that intelligently matches thousands of students with 
            internship opportunities, ensuring optimal placements while promoting diversity and inclusion.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              variant="hero"
              onClick={() => onNavigate('register')}
              className="text-lg px-8 py-6"
            >
              Get Started as Student
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              onClick={() => onNavigate('engine')}
              className="text-lg px-8 py-6 hover:shadow-elegant"
            >
              <Zap className="mr-2 h-5 w-5" />
              AI Engine Demo
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => onNavigate('dashboard')}
              className="text-lg px-8 py-6 hover:shadow-elegant"
            >
              <Brain className="mr-2 h-5 w-5" />
              View Dashboard
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center space-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <stat.icon className="h-8 w-8 mx-auto text-primary" />
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">
              Powered by <span className="bg-gradient-primary bg-clip-text text-transparent">Advanced AI</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our intelligent system considers multiple factors to ensure the best possible matches
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                className="hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="h-12 w-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-gradient-card">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">How It Works</h2>
            <p className="text-xl text-muted-foreground">
              Simple, intelligent, and efficient
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-4 animate-fade-in">
              <div className="h-16 w-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-primary-foreground">1</span>
              </div>
              <h3 className="text-xl font-semibold">Student Registration</h3>
              <p className="text-muted-foreground">
                Students register with their skills, preferences, location, and category details
              </p>
            </div>
            
            <div className="text-center space-y-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="h-16 w-16 bg-gradient-success rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-success-foreground">2</span>
              </div>
              <h3 className="text-xl font-semibold">AI Analysis</h3>
              <p className="text-muted-foreground">
                Our AI engine analyzes profiles and matches them with suitable opportunities
              </p>
            </div>
            
            <div className="text-center space-y-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="h-16 w-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-accent-foreground">3</span>
              </div>
              <h3 className="text-xl font-semibold">Smart Allocation</h3>
              <p className="text-muted-foreground">
                Students are matched with optimal internships ensuring diversity and inclusion
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold">
            Ready to Experience the Future of Internship Allocation?
          </h2>
          <p className="text-xl text-muted-foreground">
            Join thousands of students and hundreds of companies already using our AI-powered platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => onNavigate('register')}
              className="bg-gradient-primary hover:shadow-primary text-lg px-8 py-6"
            >
              Start as Student
              <Users className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => onNavigate('company')}
              className="text-lg px-8 py-6 hover:shadow-elegant"
            >
              Join as Company
              <Building2 className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-6">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p>© 2024 PM Internship AI Engine. Empowering the future workforce through intelligent allocation.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Brain, Users, MapPin, Building2, TrendingUp, Star, Award, Target, Zap, BarChart3, CheckCircle, Clock } from "lucide-react";

interface AIFactors {
  skillMatch: number;
  locationPreference: number;
  diversityScore: number;
  companyCapacity: number;
}

interface Match {
  id: number;
  studentName: string;
  company: string;
  role: string;
  matchScore: number;
  skills: string[];
  location: string;
  category: string;
  status: string;
  aiFactors: AIFactors;
  pastParticipation: boolean;
  socialCategory: string;
}

const AIMatchingDashboard = () => {
  const mockMatches: Match[] = [
    {
      id: 1,
      studentName: "Priya Sharma",
      company: "Tech Mahindra",
      role: "Software Development Intern",
      matchScore: 94,
      skills: ["React", "Python", "Machine Learning"],
      location: "Hyderabad",
      category: "Rural District",
      status: "matched",
      aiFactors: {
        skillMatch: 92,
        locationPreference: 95,
        diversityScore: 88,
        companyCapacity: 96
      },
      pastParticipation: false,
      socialCategory: "General"
    },
    {
      id: 2,
      studentName: "Arjun Patel",
      company: "Infosys",
      role: "Data Science Intern", 
      matchScore: 89,
      skills: ["Python", "SQL", "Statistics"],
      location: "Bangalore",
      category: "OBC",
      status: "matched",
      aiFactors: {
        skillMatch: 95,
        locationPreference: 85,
        diversityScore: 92,
        companyCapacity: 84
      },
      pastParticipation: false,
      socialCategory: "OBC"
    },
    {
      id: 3,
      studentName: "Sneha Reddy",
      company: "Wipro",
      role: "UI/UX Design Intern",
      matchScore: 92,
      skills: ["Figma", "Design Thinking", "Prototyping"],
      location: "Chennai",
      category: "Aspirational District",
      status: "matched",
      aiFactors: {
        skillMatch: 88,
        locationPreference: 90,
        diversityScore: 95,
        companyCapacity: 93
      },
      pastParticipation: false,
      socialCategory: "SC"
    },
    {
      id: 4,
      studentName: "Ravi Kumar",
      company: "TCS",
      role: "Cloud Computing Intern",
      matchScore: 87,
      skills: ["AWS", "Docker", "Kubernetes"],
      location: "Mumbai",
      category: "Rural District",
      status: "processing",
      aiFactors: {
        skillMatch: 90,
        locationPreference: 82,
        diversityScore: 89,
        companyCapacity: 87
      },
      pastParticipation: false,
      socialCategory: "ST"
    }
  ];

  const diversityStats = [
    { label: "Rural Districts", percentage: 35, count: "1,240", target: 40, status: "below" },
    { label: "Aspirational Districts", percentage: 28, count: "980", target: 30, status: "below" },
    { label: "SC/ST Categories", percentage: 22, count: "770", target: 25, status: "below" },
    { label: "OBC Categories", percentage: 38, count: "1,330", target: 35, status: "above" }
  ];

  const aiProcessingStats = [
    { metric: "Processing Speed", value: "2.3s", improvement: "+15%" },
    { metric: "Accuracy Rate", value: "94.7%", improvement: "+8%" },
    { metric: "Bias Reduction", value: "89%", improvement: "+12%" },
    { metric: "Satisfaction Score", value: "4.8/5", improvement: "+0.3" }
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              AI Matching Dashboard
            </h1>
            <p className="text-muted-foreground text-lg">
              Real-time intelligent allocation for PM Internship Scheme
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="gap-2">
              <Brain className="h-4 w-4" />
              AI Analytics
            </Button>
            <Button className="gap-2 bg-gradient-primary hover:shadow-primary">
              <Target className="h-4 w-4" />
              Run Matching
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="relative overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Applications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">12,847</div>
              <div className="flex items-center gap-2 mt-2">
                <TrendingUp className="h-4 w-4 text-success" />
                <span className="text-sm text-success">+12% from last cycle</span>
              </div>
            </CardContent>
            <div className="absolute top-0 right-0 p-4">
              <Users className="h-8 w-8 text-primary/20" />
            </div>
          </Card>

          <Card className="relative overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                AI Matches Made
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-success">8,932</div>
              <div className="flex items-center gap-2 mt-2">
                <Brain className="h-4 w-4 text-success" />
                <span className="text-sm text-success">94.2% accuracy</span>
              </div>
            </CardContent>
            <div className="absolute top-0 right-0 p-4">
              <Brain className="h-8 w-8 text-success/20" />
            </div>
          </Card>

          <Card className="relative overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Partner Companies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-accent">1,247</div>
              <div className="flex items-center gap-2 mt-2">
                <Building2 className="h-4 w-4 text-accent" />
                <span className="text-sm text-accent">Active partnerships</span>
              </div>
            </CardContent>
            <div className="absolute top-0 right-0 p-4">
              <Building2 className="h-8 w-8 text-accent/20" />
            </div>
          </Card>

          <Card className="relative overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Success Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-warning">96.8%</div>
              <div className="flex items-center gap-2 mt-2">
                <Award className="h-4 w-4 text-warning" />
                <span className="text-sm text-warning">Completion rate</span>
              </div>
            </CardContent>
            <div className="absolute top-0 right-0 p-4">
              <Award className="h-8 w-8 text-warning/20" />
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent AI Matches */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary" />
                AI Matching Engine Results
              </CardTitle>
              <CardDescription>
                Real-time intelligent matching with bias mitigation and affirmative action compliance
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {mockMatches.map((match) => (
                <div
                  key={match.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:shadow-elegant transition-all duration-300 hover:border-primary/20 bg-card/50"
                >
                  <div className="space-y-3 flex-1">
                    <div className="flex items-center gap-3">
                      <div className="font-semibold">{match.studentName}</div>
                      <Badge variant={match.status === 'matched' ? 'default' : match.status === 'processing' ? 'secondary' : 'outline'}>
                        {match.status === 'processing' ? (
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3 animate-spin" />
                            Processing
                          </div>
                        ) : match.status === 'matched' ? (
                          <div className="flex items-center gap-1">
                            <CheckCircle className="h-3 w-3" />
                            Matched
                          </div>
                        ) : (
                          match.status
                        )}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {match.category}
                      </Badge>
                      <Badge variant="outline" className="text-xs bg-secondary/10">
                        {match.socialCategory}
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {match.role} at {match.company}
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {match.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Brain className="h-3 w-3" />
                        Skills: {match.aiFactors.skillMatch}%
                      </div>
                      <div className="flex items-center gap-1">
                        <Target className="h-3 w-3" />
                        Location: {match.aiFactors.locationPreference}%
                      </div>
                    </div>
                  </div>
                  <div className="text-right space-y-3">
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-warning fill-current" />
                      <span className="font-semibold text-lg">{match.matchScore}%</span>
                    </div>
                    <div className="flex gap-1 justify-end">
                      {match.skills.slice(0, 2).map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Diversity Score: {match.aiFactors.diversityScore}%
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Diversity & Inclusion Metrics */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-success" />
                Affirmative Action Compliance
              </CardTitle>
              <CardDescription>
                Real-time diversity representation tracking
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {diversityStats.map((stat) => (
                <div key={stat.label} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{stat.label}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground">{stat.count}</span>
                      <Badge 
                        variant={stat.status === 'above' ? 'default' : 'secondary'}
                        className="text-xs"
                      >
                        {stat.status === 'above' ? 'Target Met' : 'Below Target'}
                      </Badge>
                    </div>
                  </div>
                  <Progress value={stat.percentage} className="h-2" />
                  <div className="flex justify-between text-xs">
                    <span className="font-semibold text-primary">
                      {stat.percentage}%
                    </span>
                    <span className="text-muted-foreground">
                      Target: {stat.target}%
                    </span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* AI Engine Performance Metrics */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-accent" />
              AI Engine Performance Analytics
            </CardTitle>
            <CardDescription>
              Advanced machine learning metrics and bias mitigation results
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {aiProcessingStats.map((stat) => (
                <div key={stat.metric} className="text-center space-y-2">
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm font-medium text-muted-foreground">{stat.metric}</div>
                  <div className="flex items-center justify-center gap-1 text-xs text-success">
                    <TrendingUp className="h-3 w-3" />
                    {stat.improvement}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AIMatchingDashboard;
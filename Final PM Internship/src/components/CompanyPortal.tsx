import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Building2, MapPin, Users, ArrowLeft, Plus, X, Clock, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CompanyPortalProps {
  onNavigate: (page: string) => void;
}

const CompanyPortal = ({ onNavigate }: CompanyPortalProps) => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<'register' | 'post'>('register');
  const [companyData, setCompanyData] = useState({
    name: "",
    industry: "",
    size: "",
    location: "",
    description: "",
    website: "",
    contact: ""
  });
  
  const [internshipData, setInternshipData] = useState({
    title: "",
    department: "",
    duration: "",
    stipend: "",
    location: "",
    mode: "",
    requirements: [] as string[],
    description: "",
    slots: ""
  });

  const [newRequirement, setNewRequirement] = useState("");

  const industries = [
    "Information Technology",
    "Banking & Financial Services",
    "Healthcare & Pharmaceuticals",
    "Manufacturing",
    "Consulting",
    "E-commerce & Retail",
    "Media & Entertainment",
    "Education",
    "Government",
    "Non-Profit"
  ];

  const companySizes = [
    "Startup (1-50 employees)",
    "Small (51-200 employees)",
    "Medium (201-1000 employees)",
    "Large (1001-5000 employees)",
    "Enterprise (5000+ employees)"
  ];

  const addRequirement = () => {
    if (newRequirement.trim() && !internshipData.requirements.includes(newRequirement.trim())) {
      setInternshipData(prev => ({
        ...prev,
        requirements: [...prev.requirements, newRequirement.trim()]
      }));
      setNewRequirement("");
    }
  };

  const removeRequirement = (reqToRemove: string) => {
    setInternshipData(prev => ({
      ...prev,
      requirements: prev.requirements.filter(req => req !== reqToRemove)
    }));
  };

  const handleCompanySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Company Registration Successful! 🏢",
      description: "Your company profile has been created. You can now post internship opportunities.",
    });
    setActiveTab('post');
  };

  const handleInternshipSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Internship Posted Successfully! 🎉",
      description: "AI is analyzing candidate profiles for optimal matches. You'll receive updates soon.",
    });
    
    // Reset form
    setInternshipData({
      title: "",
      department: "",
      duration: "",
      stipend: "",
      location: "",
      mode: "",
      requirements: [],
      description: "",
      slots: ""
    });
  };

  const mockApplications = [
    {
      id: 1,
      studentName: "Priya Sharma",
      role: "Software Development Intern",
      matchScore: 94,
      skills: ["React", "Python", "Machine Learning"],
      category: "Rural District",
      status: "pending"
    },
    {
      id: 2,
      studentName: "Arjun Patel",
      role: "Data Science Intern",
      matchScore: 89,
      skills: ["Python", "SQL", "Statistics"],
      category: "OBC",
      status: "reviewed"
    }
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" onClick={() => onNavigate('home')} className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
          <div className="space-y-2">
            <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Company Portal
            </h1>
            <p className="text-muted-foreground text-lg">
              Connect with talented interns through AI-powered matching
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 border-b">
          <Button
            variant={activeTab === 'register' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('register')}
            className="gap-2"
          >
            <Building2 className="h-4 w-4" />
            Company Registration
          </Button>
          <Button
            variant={activeTab === 'post' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('post')}
            className="gap-2"
          >
            <Plus className="h-4 w-4" />
            Post Internship
          </Button>
        </div>

        {/* Company Registration Tab */}
        {activeTab === 'register' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <form onSubmit={handleCompanySubmit} className="space-y-8">
                <Card className="animate-fade-in">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Building2 className="h-5 w-5 text-primary" />
                      Company Information
                    </CardTitle>
                    <CardDescription>
                      Tell us about your organization
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="companyName">Company Name *</Label>
                        <Input
                          id="companyName"
                          value={companyData.name}
                          onChange={(e) => setCompanyData(prev => ({ ...prev, name: e.target.value }))}
                          placeholder="Enter company name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="industry">Industry *</Label>
                        <Select onValueChange={(value) => setCompanyData(prev => ({ ...prev, industry: value }))} required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select industry" />
                          </SelectTrigger>
                          <SelectContent>
                            {industries.map(industry => (
                              <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="size">Company Size *</Label>
                        <Select onValueChange={(value) => setCompanyData(prev => ({ ...prev, size: value }))} required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select company size" />
                          </SelectTrigger>
                          <SelectContent>
                            {companySizes.map(size => (
                              <SelectItem key={size} value={size}>{size}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="companyLocation">Headquarters Location *</Label>
                        <Input
                          id="companyLocation"
                          value={companyData.location}
                          onChange={(e) => setCompanyData(prev => ({ ...prev, location: e.target.value }))}
                          placeholder="e.g., Mumbai, India"
                          required
                        />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="website">Website</Label>
                        <Input
                          id="website"
                          value={companyData.website}
                          onChange={(e) => setCompanyData(prev => ({ ...prev, website: e.target.value }))}
                          placeholder="https://yourcompany.com"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="description">Company Description *</Label>
                      <Textarea
                        id="description"
                        value={companyData.description}
                        onChange={(e) => setCompanyData(prev => ({ ...prev, description: e.target.value }))}
                        placeholder="Describe your company, its mission, and work culture..."
                        rows={4}
                        required
                      />
                    </div>
                  </CardContent>
                </Card>

                <div className="flex justify-center">
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-gradient-primary hover:shadow-primary text-lg px-8 py-6"
                  >
                    <Building2 className="mr-2 h-5 w-5" />
                    Register Company
                  </Button>
                </div>
              </form>
            </div>

            {/* Benefits sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Why Partner with PM Internship AI?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                    <div>
                      <h4 className="font-semibold">AI-Powered Matching</h4>
                      <p className="text-sm text-muted-foreground">Get the most suitable candidates automatically</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Diverse Talent Pool</h4>
                      <p className="text-sm text-muted-foreground">Access students from all backgrounds and regions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Government Support</h4>
                      <p className="text-sm text-muted-foreground">Part of official PM Internship Scheme</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Zero Cost</h4>
                      <p className="text-sm text-muted-foreground">Free platform with government backing</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Post Internship Tab */}
        {activeTab === 'post' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <form onSubmit={handleInternshipSubmit} className="space-y-8">
                <Card className="animate-fade-in">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-success" />
                      Internship Details
                    </CardTitle>
                    <CardDescription>
                      Create an internship opportunity
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="title">Internship Title *</Label>
                        <Input
                          id="title"
                          value={internshipData.title}
                          onChange={(e) => setInternshipData(prev => ({ ...prev, title: e.target.value }))}
                          placeholder="e.g., Software Development Intern"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="department">Department *</Label>
                        <Input
                          id="department"
                          value={internshipData.department}
                          onChange={(e) => setInternshipData(prev => ({ ...prev, department: e.target.value }))}
                          placeholder="e.g., Engineering, Marketing"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="duration">Duration *</Label>
                        <Select onValueChange={(value) => setInternshipData(prev => ({ ...prev, duration: value }))} required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select duration" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 Month</SelectItem>
                            <SelectItem value="2">2 Months</SelectItem>
                            <SelectItem value="3">3 Months</SelectItem>
                            <SelectItem value="6">6 Months</SelectItem>
                            <SelectItem value="12">12 Months</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="stipend">Monthly Stipend (₹)</Label>
                        <Input
                          id="stipend"
                          value={internshipData.stipend}
                          onChange={(e) => setInternshipData(prev => ({ ...prev, stipend: e.target.value }))}
                          placeholder="e.g., 15000"
                          type="number"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="internLocation">Location *</Label>
                        <Input
                          id="internLocation"
                          value={internshipData.location}
                          onChange={(e) => setInternshipData(prev => ({ ...prev, location: e.target.value }))}
                          placeholder="e.g., Bangalore, India"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="mode">Work Mode *</Label>
                        <Select onValueChange={(value) => setInternshipData(prev => ({ ...prev, mode: value }))} required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select work mode" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="onsite">On-site</SelectItem>
                            <SelectItem value="remote">Remote</SelectItem>
                            <SelectItem value="hybrid">Hybrid</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="slots">Number of Slots *</Label>
                        <Input
                          id="slots"
                          value={internshipData.slots}
                          onChange={(e) => setInternshipData(prev => ({ ...prev, slots: e.target.value }))}
                          placeholder="e.g., 5"
                          type="number"
                          min="1"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <Label>Required Skills *</Label>
                      <div className="flex gap-2">
                        <Input
                          value={newRequirement}
                          onChange={(e) => setNewRequirement(e.target.value)}
                          placeholder="Add a required skill"
                          onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addRequirement())}
                        />
                        <Button type="button" onClick={addRequirement} size="sm" className="gap-2">
                          <Plus className="h-4 w-4" />
                          Add
                        </Button>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {internshipData.requirements.map(req => (
                          <Badge key={req} variant="secondary" className="gap-2">
                            {req}
                            <X
                              className="h-3 w-3 cursor-pointer hover:text-destructive"
                              onClick={() => removeRequirement(req)}
                            />
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="internDescription">Job Description *</Label>
                      <Textarea
                        id="internDescription"
                        value={internshipData.description}
                        onChange={(e) => setInternshipData(prev => ({ ...prev, description: e.target.value }))}
                        placeholder="Describe the internship role, responsibilities, and learning outcomes..."
                        rows={6}
                        required
                      />
                    </div>
                  </CardContent>
                </Card>

                <div className="flex justify-center">
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-gradient-success hover:shadow-success text-lg px-8 py-6"
                    disabled={!internshipData.title || !internshipData.department || internshipData.requirements.length === 0}
                  >
                    <Plus className="mr-2 h-5 w-5" />
                    Post Internship
                  </Button>
                </div>
              </form>
            </div>

            {/* Applications sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Recent Applications
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {mockApplications.map((app) => (
                    <div key={app.id} className="p-3 border rounded-lg space-y-2">
                      <div className="flex justify-between items-start">
                        <div className="font-semibold text-sm">{app.studentName}</div>
                        <Badge variant={app.status === 'pending' ? 'secondary' : 'default'} className="text-xs">
                          {app.status}
                        </Badge>
                      </div>
                      <div className="text-xs text-muted-foreground">{app.role}</div>
                      <div className="flex justify-between items-center">
                        <div className="text-xs">
                          <span className="font-semibold text-primary">{app.matchScore}%</span> match
                        </div>
                        <Badge variant="outline" className="text-xs">{app.category}</Badge>
                      </div>
                    </div>
                  ))}
                  
                  <Button variant="outline" size="sm" className="w-full">
                    View All Applications
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompanyPortal;
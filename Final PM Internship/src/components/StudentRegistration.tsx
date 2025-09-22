import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Brain, User, MapPin, GraduationCap, ArrowLeft, Plus, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface StudentRegistrationProps {
  onNavigate: (page: string) => void;
}

const StudentRegistration = ({ onNavigate }: StudentRegistrationProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    education: "",
    location: "",
    district: "",
    category: "",
    skills: [] as string[],
    interests: [] as string[],
    experience: "",
    availability: ""
  });
  
  const [newSkill, setNewSkill] = useState("");
  const [newInterest, setNewInterest] = useState("");

  const categories = [
    "General",
    "SC (Scheduled Caste)",
    "ST (Scheduled Tribe)", 
    "OBC (Other Backward Class)",
    "EWS (Economically Weaker Section)"
  ];

  const locationTypes = [
    "Rural District",
    "Aspirational District",
    "Urban Area",
    "Metropolitan City"
  ];

  const skillSuggestions = [
    "JavaScript", "Python", "React", "Node.js", "SQL", "Machine Learning",
    "Data Analysis", "Digital Marketing", "Content Writing", "Graphic Design",
    "UI/UX Design", "Project Management", "Excel", "PowerBI", "Figma"
  ];

  const interestAreas = [
    "Technology", "Finance", "Healthcare", "Education", "Manufacturing",
    "Consulting", "Retail", "Media", "Government", "Non-Profit", "Research"
  ];

  const addSkill = () => {
    if (newSkill.trim() && !formData.skills.includes(newSkill.trim())) {
      setFormData(prev => ({
        ...prev,
        skills: [...prev.skills, newSkill.trim()]
      }));
      setNewSkill("");
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove)
    }));
  };

  const addInterest = () => {
    if (newInterest.trim() && !formData.interests.includes(newInterest.trim())) {
      setFormData(prev => ({
        ...prev,
        interests: [...prev.interests, newInterest.trim()]
      }));
      setNewInterest("");
    }
  };

  const removeInterest = (interestToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.filter(interest => interest !== interestToRemove)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate AI processing
    toast({
      title: "Registration Successful! 🎉",
      description: "AI is analyzing your profile for the best matches. You'll receive notifications soon.",
    });

    // Navigate to dashboard after brief delay
    setTimeout(() => {
      onNavigate('dashboard');
    }, 2000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" onClick={() => onNavigate('home')} className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
          <div className="space-y-2">
            <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Student Registration
            </h1>
            <p className="text-muted-foreground text-lg">
              Let our AI find the perfect internship for you
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information */}
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-primary" />
                Personal Information
              </CardTitle>
              <CardDescription>
                Basic details to help us understand who you are
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="+91 9876543210"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="age">Age *</Label>
                  <Input
                    id="age"
                    type="number"
                    value={formData.age}
                    onChange={(e) => handleInputChange('age', e.target.value)}
                    placeholder="22"
                    min="18"
                    max="30"
                    required
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Education & Background */}
          <Card className="animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-success" />
                Education & Background
              </CardTitle>
              <CardDescription>
                Your educational background and category information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="education">Current Education *</Label>
                <Select onValueChange={(value) => handleInputChange('education', value)} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your education level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="btech">B.Tech/B.E.</SelectItem>
                    <SelectItem value="bca">BCA</SelectItem>
                    <SelectItem value="bcom">B.Com</SelectItem>
                    <SelectItem value="ba">B.A.</SelectItem>
                    <SelectItem value="bsc">B.Sc.</SelectItem>
                    <SelectItem value="mtech">M.Tech</SelectItem>
                    <SelectItem value="mca">MCA</SelectItem>
                    <SelectItem value="mba">MBA</SelectItem>
                    <SelectItem value="others">Others</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="category">Category *</Label>
                  <Select onValueChange={(value) => handleInputChange('category', value)} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(category => (
                        <SelectItem key={category} value={category}>{category}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="district">District Type *</Label>
                  <Select onValueChange={(value) => handleInputChange('district', value)} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your area type" />
                    </SelectTrigger>
                    <SelectContent>
                      {locationTypes.map(type => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Location Preferences */}
          <Card className="animate-scale-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-accent" />
                Location Preferences
              </CardTitle>
              <CardDescription>
                Where would you like to do your internship?
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="location">Preferred Location *</Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  placeholder="e.g., Mumbai, Bangalore, Delhi, Hyderabad"
                  required
                />
              </div>
            </CardContent>
          </Card>

          {/* Skills & Interests */}
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary" />
                Skills & Interests
              </CardTitle>
              <CardDescription>
                Help our AI understand your capabilities and interests
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Skills */}
              <div className="space-y-4">
                <Label>Technical Skills *</Label>
                <div className="flex gap-2">
                  <Input
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    placeholder="Add a skill"
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())}
                  />
                  <Button type="button" onClick={addSkill} size="sm" className="gap-2">
                    <Plus className="h-4 w-4" />
                    Add
                  </Button>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {formData.skills.map(skill => (
                    <Badge key={skill} variant="secondary" className="gap-2">
                      {skill}
                      <X
                        className="h-3 w-3 cursor-pointer hover:text-destructive"
                        onClick={() => removeSkill(skill)}
                      />
                    </Badge>
                  ))}
                </div>
                
                <div className="space-y-2">
                  <Label className="text-sm text-muted-foreground">Suggested Skills:</Label>
                  <div className="flex flex-wrap gap-2">
                    {skillSuggestions
                      .filter(skill => !formData.skills.includes(skill))
                      .slice(0, 8)
                      .map(skill => (
                        <Button
                          key={skill}
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => setFormData(prev => ({ ...prev, skills: [...prev.skills, skill] }))}
                        >
                          + {skill}
                        </Button>
                      ))}
                  </div>
                </div>
              </div>

              {/* Interests */}
              <div className="space-y-4">
                <Label>Industry Interests *</Label>
                <div className="flex gap-2">
                  <Input
                    value={newInterest}
                    onChange={(e) => setNewInterest(e.target.value)}
                    placeholder="Add an interest area"
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addInterest())}
                  />
                  <Button type="button" onClick={addInterest} size="sm" className="gap-2">
                    <Plus className="h-4 w-4" />
                    Add
                  </Button>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {formData.interests.map(interest => (
                    <Badge key={interest} variant="secondary" className="gap-2">
                      {interest}
                      <X
                        className="h-3 w-3 cursor-pointer hover:text-destructive"
                        onClick={() => removeInterest(interest)}
                      />
                    </Badge>
                  ))}
                </div>
                
                <div className="space-y-2">
                  <Label className="text-sm text-muted-foreground">Popular Industries:</Label>
                  <div className="flex flex-wrap gap-2">
                    {interestAreas
                      .filter(interest => !formData.interests.includes(interest))
                      .slice(0, 6)
                      .map(interest => (
                        <Button
                          key={interest}
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => setFormData(prev => ({ ...prev, interests: [...prev.interests, interest] }))}
                        >
                          + {interest}
                        </Button>
                      ))}
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div className="space-y-2">
                <Label htmlFor="experience">Previous Experience (Optional)</Label>
                <Textarea
                  id="experience"
                  value={formData.experience}
                  onChange={(e) => handleInputChange('experience', e.target.value)}
                  placeholder="Describe any relevant projects, internships, or work experience..."
                  rows={4}
                />
              </div>
            </CardContent>
          </Card>

          {/* Submit */}
          <div className="flex justify-center pt-6">
            <Button
              type="submit"
              size="lg"
              className="bg-gradient-primary hover:shadow-primary text-lg px-12 py-6 animate-pulse-glow"
              disabled={!formData.name || !formData.email || !formData.phone || formData.skills.length === 0}
            >
              <Brain className="mr-2 h-5 w-5" />
              Submit for AI Matching
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentRegistration;
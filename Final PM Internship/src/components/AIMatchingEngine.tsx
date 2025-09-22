import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Brain, Settings, Cpu, Target, BarChart3, CheckCircle2, AlertTriangle } from "lucide-react";
import { useState } from "react";

const AIMatchingEngine = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [matchingResults, setMatchingResults] = useState<any>(null);

  const algorithmConfig = {
    skillWeight: 35,
    locationWeight: 25,
    diversityWeight: 20,
    capacityWeight: 15,
    pastParticipationWeight: 5
  };

  const runMatching = () => {
    setIsProcessing(true);
    // Simulate AI processing
    setTimeout(() => {
      setMatchingResults({
        totalProcessed: 2847,
        successfulMatches: 2692,
        pendingReview: 155,
        biasScore: 8.2,
        diversityCompliance: 94.7
      });
      setIsProcessing(false);
    }, 3000);
  };

  return (
    <div className="space-y-6">
      {/* AI Engine Configuration */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5 text-primary" />
            AI Algorithm Configuration
          </CardTitle>
          <CardDescription>
            Machine learning model parameters for optimal matching
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Skills Matching</span>
                <span className="font-semibold">{algorithmConfig.skillWeight}%</span>
              </div>
              <Progress value={algorithmConfig.skillWeight} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Location Preference</span>
                <span className="font-semibold">{algorithmConfig.locationWeight}%</span>
              </div>
              <Progress value={algorithmConfig.locationWeight} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Diversity Factor</span>
                <span className="font-semibold">{algorithmConfig.diversityWeight}%</span>
              </div>
              <Progress value={algorithmConfig.diversityWeight} className="h-2" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* AI Processing Engine */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-accent" />
            Intelligent Matching Engine
          </CardTitle>
          <CardDescription>
            Advanced AI algorithms with bias mitigation and fairness optimization
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center gap-4">
            <Button 
              onClick={runMatching}
              disabled={isProcessing}
              className="bg-gradient-primary hover:shadow-primary gap-2"
            >
              {isProcessing ? (
                <>
                  <Cpu className="h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Target className="h-4 w-4" />
                  Run AI Matching
                </>
              )}
            </Button>
            {isProcessing && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="animate-pulse">Analyzing 2,847 applications...</div>
              </div>
            )}
          </div>

          {isProcessing && (
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Processing Applications</span>
                  <span>68%</span>
                </div>
                <Progress value={68} className="h-2" />
              </div>
              <div className="text-xs text-muted-foreground">
                Current: Analyzing skills compatibility with machine learning models...
              </div>
            </div>
          )}

          {matchingResults && (
            <div className="space-y-4 p-4 border rounded-lg bg-success/5">
              <div className="flex items-center gap-2 text-success">
                <CheckCircle2 className="h-5 w-5" />
                <span className="font-semibold">Matching Completed Successfully</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">{matchingResults.totalProcessed}</div>
                  <div className="text-xs text-muted-foreground">Total Processed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-success">{matchingResults.successfulMatches}</div>
                  <div className="text-xs text-muted-foreground">Successful Matches</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-warning">{matchingResults.pendingReview}</div>
                  <div className="text-xs text-muted-foreground">Pending Review</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">{matchingResults.biasScore}/10</div>
                  <div className="text-xs text-muted-foreground">Bias Score</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-success">{matchingResults.diversityCompliance}%</div>
                  <div className="text-xs text-muted-foreground">Diversity Compliance</div>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Algorithm Insights */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-warning" />
            Algorithm Insights & Bias Mitigation
          </CardTitle>
          <CardDescription>
            Transparency metrics for fairness and algorithmic accountability
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Fairness Metrics</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Gender Parity</span>
                  <Badge variant="default" className="bg-success">Pass</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Regional Balance</span>
                  <Badge variant="default" className="bg-success">Pass</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Social Category Representation</span>
                  <Badge variant="secondary" className="bg-warning text-warning-foreground">Monitor</Badge>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Algorithm Performance</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Prediction Accuracy</span>
                  <span className="font-semibold text-primary">94.7%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Processing Speed</span>
                  <span className="font-semibold text-accent">2.3s avg</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Model Confidence</span>
                  <span className="font-semibold text-success">92.1%</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AIMatchingEngine;
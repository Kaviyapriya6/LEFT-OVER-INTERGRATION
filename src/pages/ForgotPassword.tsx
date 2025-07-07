
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Validation Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setEmailSent(true);
      toast({
        title: "Reset Email Sent",
        description: "Check your email for password reset instructions.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send reset email. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center px-4">
      <Card className="w-full max-w-md border-green-200 bg-white/90 backdrop-blur-sm">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
              <Leaf className="h-7 w-7 text-white" />
            </div>
          </div>
          <CardTitle className="text-2xl text-green-800">Reset Password</CardTitle>
          <CardDescription>
            {emailSent 
              ? "We've sent reset instructions to your email"
              : "Enter your email to receive reset instructions"
            }
          </CardDescription>
        </CardHeader>
        <CardContent>
          {!emailSent ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-green-200 focus:border-green-400"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-green-600 hover:bg-green-700"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send Reset Instructions"}
              </Button>
            </form>
          ) : (
            <div className="text-center space-y-4">
              <p className="text-sm text-muted-foreground">
                If an account with that email exists, you'll receive password reset instructions shortly.
              </p>
              <Button 
                onClick={() => setEmailSent(false)}
                variant="outline"
                className="w-full border-green-300 text-green-700 hover:bg-green-50"
              >
                Send Another Email
              </Button>
            </div>
          )}
          
          <div className="mt-6 text-center">
            <Link 
              to="/signin" 
              className="inline-flex items-center text-sm text-green-600 hover:text-green-800 hover:underline"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Sign In
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ForgotPassword;


import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Leaf, Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "",
    phone: "",
    agreeTerms: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    const { fullName, email, password, confirmPassword, userType, agreeTerms } = formData;
    
    if (!fullName || !email || !password || !confirmPassword || !userType) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return false;
    }

    if (password.length < 8) {
      toast({
        title: "Validation Error",
        description: "Password must be at least 8 characters long",
        variant: "destructive",
      });
      return false;
    }

    if (password !== confirmPassword) {
      toast({
        title: "Validation Error",
        description: "Passwords do not match",
        variant: "destructive",
      });
      return false;
    }

    if (!agreeTerms) {
      toast({
        title: "Validation Error",
        description: "Please agree to the terms and conditions",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Store user data (in real app, this would be handled by auth service)
      localStorage.setItem("userSession", JSON.stringify({
        email: formData.email,
        fullName: formData.fullName,
        userType: formData.userType,
        signedIn: true,
        signedInAt: new Date().toISOString()
      }));

      toast({
        title: "Account Created!",
        description: "Welcome to Leftover! Your account has been created successfully.",
      });

      navigate("/");
    } catch (error) {
      toast({
        title: "Sign Up Failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center px-4 py-8">
      <Card className="w-full max-w-md border-green-200 bg-white/90 backdrop-blur-sm">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
              <Leaf className="h-7 w-7 text-white" />
            </div>
          </div>
          <CardTitle className="text-2xl text-green-800">Join Leftover</CardTitle>
          <CardDescription>Create your account to start making a difference</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name *</Label>
              <Input
                id="fullName"
                type="text"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={(e) => handleInputChange("fullName", e.target.value)}
                className="border-green-200 focus:border-green-400"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="border-green-200 focus:border-green-400"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="border-green-200 focus:border-green-400"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="userType">I am a *</Label>
              <Select value={formData.userType} onValueChange={(value) => handleInputChange("userType", value)}>
                <SelectTrigger className="border-green-200 focus:border-green-400">
                  <SelectValue placeholder="Select user type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="restaurant">Restaurant Owner</SelectItem>
                  <SelectItem value="recipient">Individual/Family</SelectItem>
                  <SelectItem value="organization">Organization/NGO</SelectItem>
                  <SelectItem value="delivery">Delivery Agent</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password *</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password (min 8 characters)"
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  className="border-green-200 focus:border-green-400 pr-10"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-green-600" />
                  ) : (
                    <Eye className="h-4 w-4 text-green-600" />
                  )}
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password *</Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                  className="border-green-200 focus:border-green-400 pr-10"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-4 w-4 text-green-600" />
                  ) : (
                    <Eye className="h-4 w-4 text-green-600" />
                  )}
                </Button>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={formData.agreeTerms}
                onCheckedChange={(checked) => handleInputChange("agreeTerms", checked as boolean)}
              />
              <Label htmlFor="terms" className="text-sm">
                I agree to the{" "}
                <Link to="/terms" className="text-green-600 hover:text-green-800 hover:underline">
                  Terms and Conditions
                </Link>{" "}
                and{" "}
                <Link to="/privacy" className="text-green-600 hover:text-green-800 hover:underline">
                  Privacy Policy
                </Link>
              </Label>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-green-600 hover:bg-green-700"
              disabled={isLoading}
            >
              {isLoading ? "Creating Account..." : "Create Account"}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link 
                to="/signin" 
                className="text-green-600 hover:text-green-800 hover:underline font-medium"
              >
                Sign in here
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;

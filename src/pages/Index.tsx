
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Leaf, Users, Truck, Shield, Heart, Globe } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { RestaurantDashboard } from "@/components/RestaurantDashboard";
import { RecipientDashboard } from "@/components/RecipientDashboard";
import { DeliveryDashboard } from "@/components/DeliveryDashboard";
import { AdminDashboard } from "@/components/AdminDashboard";

const Index = () => {
  const [activeUserType, setActiveUserType] = useState<string | null>(null);

  const userTypes = [
    {
      id: "restaurant",
      title: "Restaurant",
      description: "List your surplus food and reduce waste",
      icon: Leaf,
      color: "bg-green-100 text-green-700",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "recipient",
      title: "Recipient",
      description: "Get fresh food for your family or organization",
      icon: Heart,
      color: "bg-green-50 text-green-600",
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "delivery",
      title: "Delivery Agent",
      description: "Help connect food donors with recipients",
      icon: Truck,
      color: "bg-green-200 text-green-800",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "admin",
      title: "Admin",
      description: "Manage the platform and monitor impact",
      icon: Shield,
      color: "bg-green-300 text-green-900",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const impactStats = [
    { label: "Meals Saved", value: "25,847", icon: Heart },
    { label: "Restaurants", value: "1,234", icon: Leaf },
    { label: "Families Helped", value: "8,923", icon: Users },
    { label: "CO₂ Saved (kg)", value: "12,456", icon: Globe }
  ];

  if (activeUserType) {
    const renderDashboard = () => {
      switch (activeUserType) {
        case "restaurant":
          return <RestaurantDashboard onBack={() => setActiveUserType(null)} />;
        case "recipient":
          return <RecipientDashboard onBack={() => setActiveUserType(null)} />;
        case "delivery":
          return <DeliveryDashboard onBack={() => setActiveUserType(null)} />;
        case "admin":
          return <AdminDashboard onBack={() => setActiveUserType(null)} />;
        default:
          return null;
      }
    };

    return renderDashboard();
  }

  return (
    <div className="min-h-screen gradient-bg">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <Badge className="mb-4 bg-green-100 text-green-700 hover:bg-green-200">
              🌱 Fighting Food Waste Together
            </Badge>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
              Leftover
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Connect restaurants with surplus food to families and organizations in need. 
              Together, we can reduce food waste and fight hunger in our communities.
            </p>
          </div>

          {/* Impact Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {impactStats.map((stat, index) => (
              <Card key={index} className="border-green-200 bg-white/60 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="text-2xl font-bold text-green-700">{stat.value}</div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* User Type Selection */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {userTypes.map((type) => (
              <Card 
                key={type.id} 
                className="food-card-hover cursor-pointer border-green-200 bg-white/80 backdrop-blur-sm"
                onClick={() => setActiveUserType(type.id)}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 w-full h-48 rounded-lg overflow-hidden">
                    <img 
                      src={type.image} 
                      alt={type.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className={`w-12 h-12 rounded-full ${type.color} flex items-center justify-center mx-auto mb-4`}>
                    <type.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-green-800">{type.title}</CardTitle>
                  <CardDescription>{type.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 bg-white/40">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-800">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-green-800">1. Restaurants List Food</h3>
              <p className="text-muted-foreground">Restaurants upload surplus food with photos, quantities, and pickup times.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-green-800">2. Recipients Order</h3>
              <p className="text-muted-foreground">Families and organizations browse and request needed food items.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-green-800">3. Safe Delivery</h3>
              <p className="text-muted-foreground">Verified delivery agents ensure fresh food reaches those in need safely.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-green-50 border-t border-green-200">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-green-700 mb-2">© 2024 Leftover App. Fighting hunger, reducing waste.</p>
          <p className="text-sm text-green-600">Made with ❤️ for a sustainable future</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

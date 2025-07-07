
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Plus, Clock, Users, Leaf, Camera, MapPin, Star } from "lucide-react";
import { useState } from "react";

interface RestaurantDashboardProps {
  onBack: () => void;
}

export const RestaurantDashboard = ({ onBack }: RestaurantDashboardProps) => {
  const [activeListings] = useState([
    {
      id: 1,
      name: "Fresh Vegetable Curry",
      quantity: "15 portions",
      expiry: "2 hours",
      category: "Vegetarian",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      status: "Available"
    },
    {
      id: 2,
      name: "Grilled Chicken Meals",
      quantity: "20 portions",
      expiry: "3 hours",
      category: "Non-Vegetarian",
      image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      status: "Reserved"
    },
    {
      id: 3,
      name: "Fresh Bread & Pastries",
      quantity: "30 items",
      expiry: "1 hour",
      category: "Bakery",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      status: "Urgent"
    }
  ]);

  return (
    <div className="min-h-screen gradient-bg">
      {/* Header */}
      <div className="bg-white border-b border-green-200 px-4 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" onClick={onBack} size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-green-800">Green Garden Restaurant</h1>
              <p className="text-green-600">Managing your food donations</p>
            </div>
          </div>
          <Button className="bg-green-600 hover:bg-green-700">
            <Plus className="h-4 w-4 mr-2" />
            Add Food Item
          </Button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-green-200 bg-white/80">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Today's Donations</p>
                  <p className="text-2xl font-bold text-green-700">47</p>
                </div>
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card className="border-green-200 bg-white/80">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Meals Saved</p>
                  <p className="text-2xl font-bold text-green-700">1,234</p>
                </div>
                <Users className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card className="border-green-200 bg-white/80">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Rating</p>
                  <p className="text-2xl font-bold text-green-700">4.8</p>
                </div>
                <Star className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card className="border-green-200 bg-white/80">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Listings</p>
                  <p className="text-2xl font-bold text-green-700">12</p>
                </div>
                <Clock className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="listings" className="space-y-6">
          <TabsList className="bg-green-100">
            <TabsTrigger value="listings" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
              Active Listings
            </TabsTrigger>
            <TabsTrigger value="orders" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
              Orders
            </TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
              Analytics
            </TabsTrigger>
            <TabsTrigger value="profile" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
              Profile
            </TabsTrigger>
          </TabsList>

          <TabsContent value="listings" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-green-800">Your Active Food Listings</h2>
              <Button variant="outline" className="border-green-300 text-green-700">
                <Camera className="h-4 w-4 mr-2" />
                Quick Add
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeListings.map((item) => (
                <Card key={item.id} className="food-card-hover border-green-200 bg-white/90">
                  <div className="relative">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge 
                      className={`absolute top-2 right-2 ${
                        item.status === 'Urgent' ? 'bg-red-500' : 
                        item.status === 'Reserved' ? 'bg-yellow-500' : 'bg-green-500'
                      }`}
                    >
                      {item.status}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-green-800">{item.name}</CardTitle>
                    <CardDescription>
                      <div className="flex items-center space-x-2 text-sm">
                        <Users className="h-4 w-4" />
                        <span>{item.quantity}</span>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline" className="border-green-300 text-green-700">
                        {item.category}
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        {item.expiry} left
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        Edit
                      </Button>
                      <Button size="sm" className="flex-1 bg-green-600 hover:bg-green-700">
                        View Orders
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="orders" className="space-y-6">
            <h2 className="text-xl font-semibold text-green-800">Recent Orders</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((order) => (
                <Card key={order} className="border-green-200 bg-white/90">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                          <Users className="h-6 w-6 text-green-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-green-800">Hope Children's Home</p>
                          <p className="text-sm text-muted-foreground">Requested: Fresh Vegetable Curry (10 portions)</p>
                          <p className="text-xs text-muted-foreground flex items-center mt-1">
                            <MapPin className="h-3 w-3 mr-1" />
                            2.3 km away
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className="bg-green-500 mb-2">Confirmed</Badge>
                        <p className="text-sm text-muted-foreground">Pickup: 2:30 PM</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <h2 className="text-xl font-semibold text-green-800">Impact Analytics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-green-200 bg-white/90">
                <CardHeader>
                  <CardTitle className="text-green-800">Monthly Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Meals Donated</span>
                      <span className="font-semibold text-green-700">347</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Families Helped</span>
                      <span className="font-semibold text-green-700">89</span>
                    </div>
                    <div className="flex justify-between">
                      <span>CO₂ Saved (kg)</span>
                      <span className="font-semibold text-green-700">156</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax Benefits ($)</span>
                      <span className="font-semibold text-green-700">892</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-green-200 bg-white/90">
                <CardHeader>
                  <CardTitle className="text-green-800">Popular Items</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span>Vegetable Curry</span>
                      <Badge variant="outline">87 donations</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Rice & Dal</span>
                      <Badge variant="outline">65 donations</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Fresh Bread</span>
                      <Badge variant="outline">43 donations</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <h2 className="text-xl font-semibold text-green-800">Restaurant Profile</h2>
            <Card className="border-green-200 bg-white/90">
              <CardHeader>
                <CardTitle className="text-green-800">Business Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-green-700">Restaurant Name</label>
                    <p className="text-green-800 font-semibold">Green Garden Restaurant</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-green-700">Cuisine Type</label>
                    <p className="text-green-800">Multi-cuisine</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-green-700">Operating Hours</label>
                    <p className="text-green-800">11:00 AM - 11:00 PM</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-green-700">Phone</label>
                    <p className="text-green-800">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-green-700">Address</label>
                  <p className="text-green-800">123 Green Street, Food District, City 12345</p>
                </div>
                <Button className="bg-green-600 hover:bg-green-700">
                  Edit Profile
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

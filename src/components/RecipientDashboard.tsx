
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Search, Heart, Clock, MapPin, ShoppingCart, Filter } from "lucide-react";
import { useState } from "react";

interface RecipientDashboardProps {
  onBack: () => void;
}

export const RecipientDashboard = ({ onBack }: RecipientDashboardProps) => {
  const [availableFood] = useState([
    {
      id: 1,
      name: "Fresh Vegetable Curry",
      restaurant: "Green Garden Restaurant",
      quantity: "15 portions",
      distance: "1.2 km",
      expiry: "2 hours",
      category: "Vegetarian",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      rating: 4.8
    },
    {
      id: 2,
      name: "Grilled Chicken Meals",
      restaurant: "Spice Junction",
      quantity: "20 portions",
      distance: "2.1 km",
      expiry: "3 hours",
      category: "Non-Vegetarian",
      image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      rating: 4.6
    },
    {
      id: 3,
      name: "Fresh Bread & Pastries",
      restaurant: "Baker's Delight",
      quantity: "30 items",
      distance: "0.8 km",
      expiry: "1 hour",
      category: "Bakery",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      rating: 4.9
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
              <h1 className="text-2xl font-bold text-green-800">Hope Children's Home</h1>
              <p className="text-green-600">Finding fresh food for your community</p>
            </div>
          </div>
          <Button className="bg-green-600 hover:bg-green-700">
            <ShoppingCart className="h-4 w-4 mr-2" />
            My Cart (3)
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
                  <p className="text-sm text-muted-foreground">Meals Received</p>
                  <p className="text-2xl font-bold text-green-700">234</p>
                </div>
                <Heart className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card className="border-green-200 bg-white/80">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">This Month</p>
                  <p className="text-2xl font-bold text-green-700">47</p>
                </div>
                <Clock className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card className="border-green-200 bg-white/80">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Nearby Options</p>
                  <p className="text-2xl font-bold text-green-700">12</p>
                </div>
                <MapPin className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card className="border-green-200 bg-white/80">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Pending Orders</p>
                  <p className="text-2xl font-bold text-green-700">2</p>
                </div>
                <ShoppingCart className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="browse" className="space-y-6">
          <TabsList className="bg-green-100">
            <TabsTrigger value="browse" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
              Browse Food
            </TabsTrigger>
            <TabsTrigger value="orders" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
              My Orders
            </TabsTrigger>
            <TabsTrigger value="nutrition" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
              Nutrition Plan
            </TabsTrigger>
            <TabsTrigger value="profile" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
              Profile
            </TabsTrigger>
          </TabsList>

          <TabsContent value="browse" className="space-y-6">
            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-green-600" />
                <Input 
                  placeholder="Search for food items or restaurants..." 
                  className="pl-10 border-green-300 focus:border-green-500"
                />
              </div>
              <Button variant="outline" className="border-green-300 text-green-700">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>

            {/* Food Categories */}
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {["All", "Vegetarian", "Non-Vegetarian", "Vegan", "Bakery", "Dairy", "Fruits"].map((category) => (
                <Badge
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  className={`whitespace-nowrap cursor-pointer ${
                    category === "All" 
                      ? "bg-green-600 hover:bg-green-700" 
                      : "border-green-300 text-green-700 hover:bg-green-50"
                  }`}
                >
                  {category}
                </Badge>
              ))}
            </div>

            {/* Available Food Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {availableFood.map((item) => (
                <Card key={item.id} className="food-card-hover border-green-200 bg-white/90">
                  <div className="relative">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-2 left-2 bg-green-600">
                      {item.distance}
                    </Badge>
                    <div className="absolute top-2 right-2 flex items-center bg-white/90 px-2 py-1 rounded">
                      <span className="text-yellow-500">★</span>
                      <span className="text-sm ml-1">{item.rating}</span>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-green-800">{item.name}</CardTitle>
                    <CardDescription>
                      <p className="text-green-600 font-medium">{item.restaurant}</p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-sm">{item.quantity} available</span>
                        <div className="flex items-center text-sm text-red-600">
                          <Clock className="h-4 w-4 mr-1" />
                          {item.expiry} left
                        </div>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline" className="border-green-300 text-green-700">
                        {item.category}
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-1" />
                        {item.distance}
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        View Details
                      </Button>
                      <Button size="sm" className="flex-1 bg-green-600 hover:bg-green-700">
                        <ShoppingCart className="h-4 w-4 mr-1" />
                        Add to Cart
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="orders" className="space-y-6">
            <h2 className="text-xl font-semibold text-green-800">Order History</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((order) => (
                <Card key={order} className="border-green-200 bg-white/90">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 rounded-lg overflow-hidden">
                          <img 
                            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                            alt="Food"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-green-800">Fresh Vegetable Curry</p>
                          <p className="text-sm text-green-600">Green Garden Restaurant</p>
                          <p className="text-xs text-muted-foreground">Ordered: 2 days ago</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className="bg-green-500 mb-2">Delivered</Badge>
                        <p className="text-sm text-muted-foreground">10 portions</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="nutrition" className="space-y-6">
            <h2 className="text-xl font-semibold text-green-800">Nutrition Planning</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-green-200 bg-white/90">
                <CardHeader>
                  <CardTitle className="text-green-800">Weekly Nutrition Goals</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Protein</span>
                      <span className="font-semibold text-green-700">85% achieved</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Vegetables</span>
                      <span className="font-semibold text-green-700">92% achieved</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Grains</span>
                      <span className="font-semibold text-green-700">78% achieved</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Fruits</span>
                      <span className="font-semibold text-green-700">65% achieved</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-green-200 bg-white/90">
                <CardHeader>
                  <CardTitle className="text-green-800">Meal Suggestions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 bg-green-50 rounded-lg">
                      <p className="font-medium text-green-800">Today's Recommendation</p>
                      <p className="text-sm text-green-600">Try to get more protein-rich foods</p>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg">
                      <p className="font-medium text-green-800">Recipe Idea</p>
                      <p className="text-sm text-green-600">Mixed vegetable curry with rice</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <h2 className="text-xl font-semibold text-green-800">Organization Profile</h2>
            <Card className="border-green-200 bg-white/90">
              <CardHeader>
                <CardTitle className="text-green-800">Organization Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-green-700">Organization Name</label>
                    <p className="text-green-800 font-semibold">Hope Children's Home</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-green-700">Type</label>
                    <p className="text-green-800">Orphanage</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-green-700">Capacity</label>
                    <p className="text-green-800">45 children</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-green-700">Contact</label>
                    <p className="text-green-800">+1 (555) 987-6543</p>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-green-700">Address</label>
                  <p className="text-green-800">456 Hope Avenue, Community District, City 12345</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-green-700">Dietary Restrictions</label>
                  <div className="flex space-x-2 mt-2">
                    <Badge variant="outline" className="border-green-300">No Nuts</Badge>
                    <Badge variant="outline" className="border-green-300">Halal</Badge>
                  </div>
                </div>
                <Button className="bg-green-600 hover:bg-green-700">
                  Update Profile
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};


import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Truck, DollarSign, Clock, Star, Navigation, Phone, Camera } from "lucide-react";
import { useState } from "react";

interface DeliveryDashboardProps {
  onBack: () => void;
}

export const DeliveryDashboard = ({ onBack }: DeliveryDashboardProps) => {
  const [availableDeliveries] = useState([
    {
      id: 1,
      pickup: "Green Garden Restaurant",
      dropoff: "Hope Children's Home",
      distance: "3.2 km",
      payment: "$12",
      food: "Vegetable Curry (10 portions)",
      urgency: "High",
      pickupTime: "2:30 PM"
    },
    {
      id: 2,
      pickup: "Spice Junction",
      dropoff: "Community Food Bank",
      distance: "2.8 km",
      payment: "$10",
      food: "Rice & Dal (15 portions)",
      urgency: "Medium",
      pickupTime: "3:15 PM"
    },
    {
      id: 3,
      pickup: "Baker's Delight",
      dropoff: "Senior Care Center",
      distance: "1.5 km",
      payment: "$8",
      food: "Fresh Bread (20 items)",
      urgency: "High",
      pickupTime: "1:45 PM"
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
              <h1 className="text-2xl font-bold text-green-800">Delivery Agent Portal</h1>
              <p className="text-green-600">Alex Rodriguez - Active Delivery Agent</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Badge className="bg-green-500">Online</Badge>
            <Button className="bg-green-600 hover:bg-green-700">
              Go Offline
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-green-200 bg-white/80">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Today's Earnings</p>
                  <p className="text-2xl font-bold text-green-700">$47</p>
                </div>
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card className="border-green-200 bg-white/80">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Deliveries</p>
                  <p className="text-2xl font-bold text-green-700">8</p>
                </div>
                <Truck className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card className="border-green-200 bg-white/80">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Rating</p>
                  <p className="text-2xl font-bold text-green-700">4.9</p>
                </div>
                <Star className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card className="border-green-200 bg-white/80">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Online Time</p>
                  <p className="text-2xl font-bold text-green-700">6h</p>
                </div>
                <Clock className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="available" className="space-y-6">
          <TabsList className="bg-green-100">
            <TabsTrigger value="available" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
              Available Deliveries
            </TabsTrigger>
            <TabsTrigger value="active" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
              Active Delivery
            </TabsTrigger>
            <TabsTrigger value="history" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
              History
            </TabsTrigger>
            <TabsTrigger value="earnings" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
              Earnings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="available" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-green-800">Available Delivery Requests</h2>
              <Button variant="outline" className="border-green-300 text-green-700">
                <Navigation className="h-4 w-4 mr-2" />
                View Map
              </Button>
            </div>

            <div className="space-y-4">
              {availableDeliveries.map((delivery) => (
                <Card key={delivery.id} className="food-card-hover border-green-200 bg-white/90">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge 
                            className={
                              delivery.urgency === 'High' ? 'bg-red-500' : 
                              delivery.urgency === 'Medium' ? 'bg-yellow-500' : 'bg-green-500'
                            }
                          >
                            {delivery.urgency} Priority
                          </Badge>
                          <span className="text-sm text-muted-foreground">Pickup: {delivery.pickupTime}</span>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <p className="text-sm font-medium text-green-700">Pickup</p>
                            <p className="text-green-800 font-semibold">{delivery.pickup}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-green-700">Dropoff</p>
                            <p className="text-green-800 font-semibold">{delivery.dropoff}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-green-700">Food Items</p>
                            <p className="text-green-800">{delivery.food}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-right ml-6">
                        <div className="mb-2">
                          <p className="text-sm text-muted-foreground">Distance</p>
                          <p className="font-semibold text-green-700">{delivery.distance}</p>
                        </div>
                        <div className="mb-4">
                          <p className="text-sm text-muted-foreground">Payment</p>
                          <p className="text-xl font-bold text-green-700">{delivery.payment}</p>
                        </div>
                        <Button className="bg-green-600 hover:bg-green-700">
                          Accept Delivery
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="active" className="space-y-6">
            <h2 className="text-xl font-semibold text-green-800">Current Active Delivery</h2>
            
            <Card className="border-green-200 bg-white/90">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-green-800">Delivery in Progress</CardTitle>
                  <Badge className="bg-blue-500">Pickup Complete</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-green-700 mb-2">Delivery Details</h3>
                    <div className="space-y-2 text-sm">
                      <p><span className="font-medium">From:</span> Green Garden Restaurant</p>
                      <p><span className="font-medium">To:</span> Hope Children's Home</p>
                      <p><span className="font-medium">Food:</span> Vegetable Curry (10 portions)</p>
                      <p><span className="font-medium">Payment:</span> $12</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-700 mb-2">Contact Information</h3>
                    <div className="space-y-2">
                      <Button variant="outline" size="sm" className="w-full">
                        <Phone className="h-4 w-4 mr-2" />
                        Call Restaurant
                      </Button>
                      <Button variant="outline" size="sm" className="w-full">
                        <Phone className="h-4 w-4 mr-2" />
                        Call Recipient
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <Button className="flex-1 bg-green-600 hover:bg-green-700">
                    <Navigation className="h-4 w-4 mr-2" />
                    Get Directions
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Camera className="h-4 w-4 mr-2" />
                    Take Photo
                  </Button>
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                    Mark Delivered
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <h2 className="text-xl font-semibold text-green-800">Delivery History</h2>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((delivery) => (
                <Card key={delivery} className="border-green-200 bg-white/90">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-green-800">Green Garden → Hope Children's Home</p>
                        <p className="text-sm text-green-600">Vegetable Curry (10 portions)</p>
                        <p className="text-xs text-muted-foreground">Delivered 2 hours ago</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-green-700">$12</p>
                        <Badge className="bg-green-500">Completed</Badge>
                        <div className="flex items-center mt-1">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span className="text-sm ml-1">5.0</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="earnings" className="space-y-6">
            <h2 className="text-xl font-semibold text-green-800">Earnings Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-green-200 bg-white/90">
                <CardHeader>
                  <CardTitle className="text-green-800">This Week</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Total Earnings</span>
                      <span className="font-semibold text-green-700">$234</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Deliveries</span>
                      <span className="font-semibold text-green-700">28</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Average per Delivery</span>
                      <span className="font-semibold text-green-700">$8.36</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Online Hours</span>
                      <span className="font-semibold text-green-700">42h</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-green-200 bg-white/90">
                <CardHeader>
                  <CardTitle className="text-green-800">Performance Bonus</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span>High Rating Bonus</span>
                      <Badge className="bg-green-500">$15</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>On-time Delivery</span>
                      <Badge className="bg-green-500">$10</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Peak Hours Bonus</span>
                      <Badge className="bg-green-500">$8</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

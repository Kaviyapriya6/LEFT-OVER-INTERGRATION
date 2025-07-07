
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Users, Shield, TrendingUp, AlertTriangle, CheckCircle, XCircle, Eye } from "lucide-react";
import { useState } from "react";

interface AdminDashboardProps {
  onBack: () => void;
}

export const AdminDashboard = ({ onBack }: AdminDashboardProps) => {
  const [pendingApprovals] = useState([
    {
      id: 1,
      name: "Healthy Bites Restaurant",
      type: "Restaurant",
      location: "Downtown District",
      submitted: "2 hours ago",
      status: "Pending"
    },
    {
      id: 2,
      name: "Community Food Center",
      type: "Recipient",
      location: "North Side",
      submitted: "5 hours ago",
      status: "Under Review"
    },
    {
      id: 3,
      name: "Mike Johnson",
      type: "Delivery Agent",
      location: "City Center",
      submitted: "1 day ago",
      status: "Background Check"
    }
  ]);

  const [systemAlerts] = useState([
    {
      id: 1,
      type: "High Priority",
      message: "Unusual spike in food waste reports from Downtown area",
      time: "30 minutes ago",
      severity: "high"
    },
    {
      id: 2,
      type: "Medium Priority",
      message: "Server response time increased by 15%",
      time: "2 hours ago",
      severity: "medium"
    },
    {
      id: 3,
      type: "Info",
      message: "New partnership request from Metro Food Bank",
      time: "4 hours ago",
      severity: "low"
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
              <h1 className="text-2xl font-bold text-green-800">Admin Dashboard</h1>
              <p className="text-green-600">Platform Management & Analytics</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Badge className="bg-green-500">All Systems Normal</Badge>
            <Button className="bg-green-600 hover:bg-green-700">
              Generate Report
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-green-200 bg-white/80">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Users</p>
                  <p className="text-2xl font-bold text-green-700">12,847</p>
                  <p className="text-xs text-green-600">↑ 8.2% this month</p>
                </div>
                <Users className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card className="border-green-200 bg-white/80">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Meals Saved</p>
                  <p className="text-2xl font-bold text-green-700">45,923</p>
                  <p className="text-xs text-green-600">↑ 12.5% this month</p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card className="border-green-200 bg-white/80">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Restaurants</p>
                  <p className="text-2xl font-bold text-green-700">1,234</p>
                  <p className="text-xs text-green-600">↑ 5.1% this month</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card className="border-green-200 bg-white/80">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">System Health</p>
                  <p className="text-2xl font-bold text-green-700">99.8%</p>
                  <p className="text-xs text-green-600">Uptime</p>
                </div>
                <Shield className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="bg-green-100">
            <TabsTrigger value="overview" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
              Overview
            </TabsTrigger>
            <TabsTrigger value="users" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
              User Management
            </TabsTrigger>
            <TabsTrigger value="content" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
              Content Moderation
            </TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
              Analytics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Pending Approvals */}
              <Card className="border-green-200 bg-white/90">
                <CardHeader>
                  <CardTitle className="text-green-800">Pending Approvals</CardTitle>
                  <CardDescription>New registrations requiring review</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {pendingApprovals.map((item) => (
                      <div key={item.id} className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                        <div>
                          <p className="font-semibold text-green-800">{item.name}</p>
                          <p className="text-sm text-green-600">{item.type} • {item.location}</p>
                          <p className="text-xs text-muted-foreground">{item.submitted}</p>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">
                            <CheckCircle className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="destructive">
                            <XCircle className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* System Alerts */}
              <Card className="border-green-200 bg-white/90">
                <CardHeader>
                  <CardTitle className="text-green-800">System Alerts</CardTitle>
                  <CardDescription>Recent system notifications and alerts</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {systemAlerts.map((alert) => (
                      <div key={alert.id} className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                        <AlertTriangle className={`h-5 w-5 mt-0.5 ${
                          alert.severity === 'high' ? 'text-red-500' : 
                          alert.severity === 'medium' ? 'text-yellow-500' : 'text-blue-500'
                        }`} />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <Badge variant="outline" className={
                              alert.severity === 'high' ? 'border-red-300 text-red-700' : 
                              alert.severity === 'medium' ? 'border-yellow-300 text-yellow-700' : 'border-blue-300 text-blue-700'
                            }>
                              {alert.type}
                            </Badge>
                            <span className="text-xs text-muted-foreground">{alert.time}</span>
                          </div>
                          <p className="text-sm text-green-800 mt-1">{alert.message}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card className="border-green-200 bg-white/90">
              <CardHeader>
                <CardTitle className="text-green-800">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Button variant="outline" className="h-20 flex-col space-y-2">
                    <Users className="h-6 w-6" />
                    <span>Bulk User Actions</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col space-y-2">
                    <Shield className="h-6 w-6" />
                    <span>Security Scan</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col space-y-2">
                    <TrendingUp className="h-6 w-6" />
                    <span>Generate Analytics</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col space-y-2">
                    <AlertTriangle className="h-6 w-6" />
                    <span>System Backup</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <h2 className="text-xl font-semibold text-green-800">User Management</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <Card className="border-green-200 bg-white/90">
                <CardContent className="pt-6 text-center">
                  <p className="text-2xl font-bold text-green-700">4,234</p>
                  <p className="text-sm text-muted-foreground">Restaurants</p>
                  <Badge className="mt-2 bg-green-500">Active</Badge>
                </CardContent>
              </Card>
              <Card className="border-green-200 bg-white/90">
                <CardContent className="pt-6 text-center">
                  <p className="text-2xl font-bold text-green-700">6,789</p>
                  <p className="text-sm text-muted-foreground">Recipients</p>
                  <Badge className="mt-2 bg-green-500">Active</Badge>
                </CardContent>
              </Card>
              <Card className="border-green-200 bg-white/90">
                <CardContent className="pt-6 text-center">
                  <p className="text-2xl font-bold text-green-700">1,824</p>
                  <p className="text-sm text-muted-foreground">Delivery Agents</p>
                  <Badge className="mt-2 bg-green-500">Active</Badge>
                </CardContent>
              </Card>
            </div>

            <Card className="border-green-200 bg-white/90">
              <CardHeader>
                <CardTitle className="text-green-800">Recent User Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((user) => (
                    <div key={user} className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center">
                          <Users className="h-5 w-5 text-green-700" />
                        </div>
                        <div>
                          <p className="font-semibold text-green-800">Green Garden Restaurant</p>
                          <p className="text-sm text-green-600">Listed 3 new food items</p>
                          <p className="text-xs text-muted-foreground">2 hours ago</p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">View</Button>
                        <Button size="sm" className="bg-green-600 hover:bg-green-700">Contact</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="content" className="space-y-6">
            <h2 className="text-xl font-semibold text-green-800">Content Moderation</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-green-200 bg-white/90">
                <CardHeader>
                  <CardTitle className="text-green-800">Flagged Content</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Food listings pending review</span>
                      <Badge variant="outline">12</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Reported user reviews</span>
                      <Badge variant="outline">3</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Inappropriate photos</span>
                      <Badge variant="outline">1</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-200 bg-white/90">
                <CardHeader>
                  <CardTitle className="text-green-800">Moderation Stats</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Auto-approved today</span>
                      <span className="font-semibold text-green-700">247</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Manual reviews</span>
                      <span className="font-semibold text-green-700">15</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Content removed</span>
                      <span className="font-semibold text-green-700">3</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <h2 className="text-xl font-semibold text-green-800">Platform Analytics</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-green-200 bg-white/90">
                <CardHeader>
                  <CardTitle className="text-green-800">Impact Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Total Meals Saved</span>
                      <span className="font-semibold text-green-700">45,923</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Food Waste Reduced (kg)</span>
                      <span className="font-semibold text-green-700">23,847</span>
                    </div>
                    <div className="flex justify-between">
                      <span>CO₂ Emissions Saved (kg)</span>
                      <span className="font-semibold text-green-700">12,456</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Families Helped</span>
                      <span className="font-semibold text-green-700">8,923</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-200 bg-white/90">
                <CardHeader>
                  <CardTitle className="text-green-800">Growth Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Monthly Active Users</span>
                      <span className="font-semibold text-green-700">8,234</span>
                    </div>
                    <div className="flex justify-between">
                      <span>New Registrations</span>
                      <span className="font-semibold text-green-700">+234</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Delivery Success Rate</span>
                      <span className="font-semibold text-green-700">98.5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>User Satisfaction</span>
                      <span className="font-semibold text-green-700">4.8/5</span>
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

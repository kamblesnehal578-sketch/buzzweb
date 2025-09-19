import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  Calendar, 
  Users, 
  DollarSign, 
  TrendingUp, 
  MessageSquare,
  Settings,
  Plus,
  Bell,
  Search
} from "lucide-react";
import { Input } from "@/components/ui/input";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Revenue",
      value: "$12,847",
      change: "+12.5%",
      icon: DollarSign,
      trend: "up"
    },
    {
      title: "Active Bookings",
      value: "47",
      change: "+8.2%",
      icon: Calendar,
      trend: "up"
    },
    {
      title: "New Customers",
      value: "23",
      change: "+15.3%",
      icon: Users,
      trend: "up"
    },
    {
      title: "Chat Conversations",
      value: "156",
      change: "+24.1%",
      icon: MessageSquare,
      trend: "up"
    }
  ];

  const recentBookings = [
    { customer: "Sarah Johnson", service: "Hair Styling", time: "2:00 PM", status: "confirmed" },
    { customer: "Mike Chen", service: "Consultation", time: "3:30 PM", status: "pending" },
    { customer: "Emma Davis", service: "Color Treatment", time: "4:15 PM", status: "confirmed" },
    { customer: "John Smith", service: "Cut & Style", time: "5:00 PM", status: "confirmed" }
  ];

  return (
    <div className="min-h-screen bg-muted">
      {/* Header */}
      <header className="bg-white border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                <BarChart3 className="h-5 w-5 text-white" />
              </div>
              <h1 className="text-xl font-semibold text-foreground">Business Dashboard</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search..."
                  className="pl-10 w-64 bg-white"
                />
              </div>
              <Button variant="outline" size="sm">
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Welcome back, Sarah!</h2>
          <p className="text-muted-foreground">Here's what's happening with your business today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white border-border shadow-soft">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <p className="text-xs text-success flex items-center mt-1">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {stat.change} from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Bookings */}
          <div className="lg:col-span-2">
            <Card className="bg-white border-border shadow-soft">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-foreground">Today's Bookings</CardTitle>
                  <CardDescription>Manage your scheduled appointments</CardDescription>
                </div>
                <Button size="sm" className="bg-primary hover:bg-primary-hover">
                  <Plus className="h-4 w-4 mr-2" />
                  New Booking
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentBookings.map((booking, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <Users className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{booking.customer}</p>
                          <p className="text-sm text-muted-foreground">{booking.service}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-foreground">{booking.time}</p>
                        <span className={`inline-flex px-2 py-1 text-xs rounded-full ${
                          booking.status === 'confirmed' 
                            ? 'bg-success/10 text-success' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {booking.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            {/* AI Assistant */}
            <Card className="bg-white border-border shadow-soft">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2 text-primary" />
                  AI Assistant
                </CardTitle>
                <CardDescription>Your smart business helper</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-primary/5 rounded-lg">
                  <p className="text-sm text-foreground">
                    "Your booking conversion rate increased by 15% this week!"
                  </p>
                </div>
                <Button variant="outline" className="w-full">
                  Ask AI a Question
                </Button>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-white border-border shadow-soft">
              <CardHeader>
                <CardTitle className="text-foreground">Quick Stats</CardTitle>
                <CardDescription>This week's performance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Customer Satisfaction</span>
                  <span className="font-semibold text-foreground">98%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Response Time</span>
                  <span className="font-semibold text-foreground">2.3 min</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Bookings Completed</span>
                  <span className="font-semibold text-foreground">94%</span>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View Full Report
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
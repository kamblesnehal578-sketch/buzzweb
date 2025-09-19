import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Bot, 
  Calendar, 
  BarChart3, 
  Shield, 
  Star, 
  Check,
  ArrowRight,
  Zap,
  Users,
  Clock
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Bot,
      title: "AI-Powered Chatbot",
      description: "Automate customer queries with intelligent responses that learn from your business"
    },
    {
      icon: Calendar,
      title: "Smart Booking System",
      description: "24/7 online booking with real-time availability and automated confirmations"
    },
    {
      icon: BarChart3,
      title: "Business Analytics",
      description: "Real-time insights on revenue, customer behavior, and operational efficiency"
    },
    {
      icon: Shield,
      title: "Secure Cloud Platform",
      description: "Enterprise-grade security with reliable cloud infrastructure and data protection"
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Businesses" },
    { number: "98%", label: "Customer Satisfaction" },
    { number: "70%", label: "Time Saved" },
    { number: "24/7", label: "AI Support" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-muted to-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                <Bot className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">SmartService</span>
            </div>
            <Button 
              onClick={() => navigate('/auth')}
              className="bg-primary hover:bg-primary-hover text-primary-foreground"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Zap className="h-4 w-4" />
            <span>AI-Powered Business Management</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Transform Your Small Business with{" "}
            <span className="text-primary">Smart AI Solutions</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto">
            Automate customer interactions, streamline bookings, and grow your service business 
            with our intelligent cloud platform designed specifically for small business owners.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg"
              onClick={() => navigate('/auth')}
              className="bg-primary hover:bg-primary-hover text-primary-foreground text-lg px-8 py-3"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3"
            >
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive platform provides all the tools small businesses need 
            to automate operations and delight customers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white border-border shadow-soft hover:shadow-medium transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="h-16 w-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Why Small Businesses Choose SmartService
              </h2>
              <div className="space-y-4 mb-8">
                {[
                  "Reduce manual workload by up to 70%",
                  "Improve customer response time to under 3 minutes",
                  "Increase booking conversions by 40%",
                  "Get actionable insights to grow your business",
                  "Scale operations without adding staff"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
              <Button 
                size="lg"
                onClick={() => navigate('/auth')}
                className="bg-primary hover:bg-primary-hover text-primary-foreground"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-muted border-border p-6 text-center">
                <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Businesses Served</div>
              </Card>
              <Card className="bg-muted border-border p-6 text-center">
                <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground">2.3min</div>
                <div className="text-sm text-muted-foreground">Avg Response Time</div>
              </Card>
              <Card className="bg-muted border-border p-6 text-center">
                <Star className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground">4.9/5</div>
                <div className="text-sm text-muted-foreground">Customer Rating</div>
              </Card>
              <Card className="bg-muted border-border p-6 text-center">
                <BarChart3 className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground">98%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-primary-hover py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful small businesses using SmartService to automate 
            operations and create exceptional customer experiences.
          </p>
          <Button 
            size="lg"
            variant="secondary"
            onClick={() => navigate('/auth')}
            className="text-lg px-8 py-3"
          >
            Start Your Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-border py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="h-6 w-6 bg-primary rounded flex items-center justify-center">
                <Bot className="h-4 w-4 text-white" />
              </div>
              <span className="font-bold text-foreground">SmartService Platform</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 SmartService. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

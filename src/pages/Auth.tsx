import { useState } from "react";
import { LoginForm } from "@/components/auth/LoginForm";
import { RegisterForm } from "@/components/auth/RegisterForm";
import { Bot, Shield, BarChart3, Calendar, Star, Check } from "lucide-react";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const features = [
    {
      icon: Bot,
      title: "AI-Powered Chatbot",
      description: "Automate customer queries with intelligent responses"
    },
    {
      icon: Calendar,
      title: "Online Booking",
      description: "Let customers book services 24/7 with real-time tracking"
    },
    {
      icon: BarChart3,
      title: "Business Insights",
      description: "Get actionable analytics on revenue and customer behavior"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with cloud-based infrastructure"
    }
  ];

  const benefits = [
    "Reduce manual workload by 70%",
    "Improve customer response time",
    "Increase booking conversions",
    "Make data-driven decisions",
    "Scale your business efficiently"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-muted to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left side - Branding and Features */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 mb-6">
                <div className="h-10 w-10 bg-primary rounded-lg flex items-center justify-center">
                  <Bot className="h-6 w-6 text-white" />
                </div>
                <h1 className="text-2xl font-bold text-foreground">SmartService Platform</h1>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                AI-Powered Business Management for{" "}
                <span className="text-primary">Small Businesses</span>
              </h2>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Automate customer interactions, manage bookings, and grow your business 
                with our intelligent cloud platform designed specifically for service providers.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-soft border border-border">
                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Benefits List */}
            <div className="bg-white p-6 rounded-xl shadow-soft border border-border">
              <h3 className="font-semibold text-foreground mb-4 flex items-center">
                <Star className="h-5 w-5 text-primary mr-2" />
                What You'll Achieve
              </h3>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="h-4 w-4 text-success flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Auth Form */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md">
              {isLogin ? (
                <LoginForm onToggleMode={() => setIsLogin(false)} />
              ) : (
                <RegisterForm onToggleMode={() => setIsLogin(true)} />
              )}
              
              <div className="mt-8 text-center">
                <p className="text-sm text-muted-foreground">
                  Trusted by 500+ small businesses worldwide
                </p>
                <div className="flex justify-center items-center space-x-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">4.9 out of 5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
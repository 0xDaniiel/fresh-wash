import { FaCheck } from "react-icons/fa";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Basic",
    price: "$15",
    period: "per bag",
    description: "Perfect for individuals",
    features: [
      "Wash & Fold Service",
      "48-hour turnaround",
      "Free pickup & delivery",
      "Eco-friendly detergent",
      "Basic stain treatment",
    ],
    popular: false,
  },
  {
    name: "Premium",
    price: "$25",
    period: "per bag",
    description: "Best for families",
    features: [
      "Everything in Basic",
      "24-hour turnaround",
      "Dry cleaning included",
      "Advanced stain removal",
      "Ironing service",
      "Premium fabric care",
    ],
    popular: true,
  },
  {
    name: "Monthly",
    price: "$99",
    period: "per month",
    description: "Unlimited laundry",
    features: [
      "Everything in Premium",
      "Unlimited bags",
      "Priority pickup",
      "Dedicated support",
      "Flexible scheduling",
      "20% off dry cleaning",
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple <span className="bg-gradient-primary bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Transparent pricing with no hidden fees. Choose the plan that fits your needs.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative border-2 transition-all duration-300 hover:shadow-soft ${
                plan.popular 
                  ? "border-primary shadow-card scale-105" 
                  : "border-border hover:border-primary/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-primary text-white px-6 py-1 rounded-full text-sm font-semibold shadow-soft">
                    Most Popular
                  </span>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-muted-foreground mb-4">
                  {plan.description}
                </CardDescription>
                <div className="mt-4">
                  <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">{plan.period}</span>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <FaCheck className="text-primary mr-3 mt-1 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/booking" className="block">
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? "bg-gradient-primary hover:opacity-90" 
                        : "border-2 border-primary text-primary hover:bg-primary/5"
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Choose Plan
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            All plans include free pickup and delivery within 10 miles. 
            <a href="#" className="text-primary hover:underline ml-1">View delivery areas</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

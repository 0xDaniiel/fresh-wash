import { FaTshirt, FaSprayCan, FaStar, FaHome } from "react-icons/fa";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: FaTshirt,
    title: "Wash & Fold",
    description: "Professional washing and folding service for your everyday clothes. We handle everything with care.",
    color: "from-blue-400 to-blue-600",
  },
  {
    icon: FaSprayCan,
    title: "Dry Cleaning",
    description: "Expert dry cleaning for delicate fabrics and special garments. Your clothes in expert hands.",
    color: "from-cyan-400 to-cyan-600",
  },
  {
    icon: FaStar,
    title: "Stain Removal",
    description: "Advanced stain removal techniques for even the toughest stains. Say goodbye to stubborn marks.",
    color: "from-sky-400 to-sky-600",
  },
  {
    icon: FaHome,
    title: "Ironing Service",
    description: "Crisp and wrinkle-free clothes delivered to your doorstep. Professional pressing guaranteed.",
    color: "from-blue-500 to-blue-700",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive laundry solutions tailored to your needs. Quality service, every time.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-2 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className="text-3xl text-white" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

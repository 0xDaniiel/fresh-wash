import { FaCalendarAlt, FaTruck, FaCheckCircle } from "react-icons/fa";

const steps = [
  {
    icon: FaCalendarAlt,
    title: "Schedule Pickup",
    description: "Book online in minutes. Choose your preferred date and time slot that works best for you.",
    step: "01",
  },
  {
    icon: FaTruck,
    title: "We Collect & Clean",
    description: "Our team picks up your laundry and cleans it using eco-friendly products and methods.",
    step: "02",
  },
  {
    icon: FaCheckCircle,
    title: "Delivered Fresh",
    description: "Your clean, folded laundry is delivered back to your doorstep within 24-48 hours.",
    step: "03",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It <span className="bg-gradient-primary bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Simple, fast, and hassle-free laundry service in just three easy steps.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connection line for desktop */}
          <div className="hidden md:block absolute top-24 left-1/6 right-1/6 h-1 bg-gradient-primary opacity-20"></div>

          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative flex flex-col items-center text-center animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Step number badge */}
              <div className="absolute -top-4 -right-4 md:right-auto md:left-1/2 md:-translate-x-1/2 bg-gradient-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-soft z-10">
                {step.step}
              </div>

              {/* Icon */}
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 flex items-center justify-center mb-6 group hover:scale-110 transition-transform shadow-card relative z-10">
                <step.icon className="text-5xl text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a 
            href="/booking"
            className="inline-block bg-gradient-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-all shadow-soft hover:shadow-lg hover:-translate-y-1"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

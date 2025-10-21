import { Card, CardContent } from "@/components/ui/card";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Busy Professional",
    content: "FreshWash has been a lifesaver! The pickup and delivery service is so convenient, and my clothes always come back perfectly clean and folded.",
    rating: 5,
    image: "SJ",
  },
  {
    name: "Michael Chen",
    role: "Parent of Two",
    content: "With two kids, laundry was overwhelming. Now I just schedule a pickup and everything is taken care of. The quality is exceptional!",
    rating: 5,
    image: "MC",
  },
  {
    name: "Emily Rodriguez",
    role: "College Student",
    content: "Affordable and reliable! The 24-hour turnaround is perfect for my busy schedule. I can't imagine going back to doing my own laundry.",
    rating: 5,
    image: "ER",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="bg-gradient-primary bg-clip-text text-transparent">Customers Say</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of satisfied customers who trust us with their laundry.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border-0 shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-2"
            >
              <CardContent className="pt-6">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-semibold">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

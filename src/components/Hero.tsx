import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Lottie from "lottie-react";
import washingMachineAnimation from "@/assets/animations/washing-machine.json";
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                🚀 Fast & Reliable Service
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Fresh Laundry{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Delivered
              </span>{" "}
              To Your Door
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              Say goodbye to laundry day stress. We pick up, clean, and deliver
              your clothes with care and precision.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/booking">
                <Button
                  size="lg"
                  className="bg-gradient-primary hover:opacity-90 text-lg px-8 shadow-soft"
                >
                  Book Now
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-2 border-primary text-primary hover:bg-primary/5"
                onClick={() =>
                  document
                    .getElementById("how-it-works")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                How It Works
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <div className="text-3xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">
                  Happy Customers
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">
                  Service Available
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">4.9★</div>
                <div className="text-sm text-muted-foreground">
                  Average Rating
                </div>
              </div>
            </div>
          </div>

          {/* Right animation */}
          <div className="relative lg:h-[600px] flex items-center justify-center animate-scale-in">
            <div className="w-full max-w-lg">
              <Lottie
                animationData={washingMachineAnimation}
                loop={true}
                className="drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--secondary))"
            fillOpacity="0.5"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;

import {
  Home,
  ClipboardCheck,
  HardHat,
  ShoppingCart,
  FileCheck,
  CheckCircle,
  ArrowRight,
  ArrowDown,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const steps = [
  { id: 1, title: "Site Visit & Consultation", icon: Home },
  { id: 2, title: "Design & Approvals", icon: ClipboardCheck },
  { id: 3, title: "Construction Phase", icon: HardHat },
  { id: 4, title: "Interiors & Finishing", icon: ShoppingCart },
  { id: 5, title: "Handover & Documentation", icon: FileCheck },
  { id: 6, title: "Post-Construction Support", icon: CheckCircle },
];

const ProcessSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto container-padding max-w-7xl">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl mb-4">
            Build Your <span className="text-buildacre-orange">Dreams</span>
          </h2>
          <p className="text-muted-foreground">
            Our streamlined process ensures your construction journey is smooth,
            transparent, and delivers exceptional results.
          </p>
        </div>

        {/* Process Flow */}
        <div
          ref={ref}
          className={`process-wrapper ${active ? "is-visible" : ""}`}
        >
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={step.id} className="process-step">
                <span className="process-number">{step.id}</span>

                <div className="process-icon">
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="process-title">{step.title}</h3>

                {/* Arrow */}
                {index !== steps.length - 1 && (
                  <>
                    <ArrowRight className="process-arrow desktop-arrow" />
                    <ArrowDown className="process-arrow mobile-arrow" />
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
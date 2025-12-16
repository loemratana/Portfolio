import React from "react";
import { Star, Terminal } from "lucide-react";
import Section from "../ui/Section";
import RatanaImage from "../../assets/images/ratana.JPG";
import RatanaProfile from "../../assets/images/Ratana_Profile.jpg";
import Teacher from "../../assets/images/teacher.jpg";
import { image } from "framer-motion/client";
import phanun from '../../assets/images/phanun.jpg'
const Testimonials = () => {
  const testimonials = [
    {
      image:Teacher,
      name: "ROEURN RAKSMEY",
      role: " Web Development at SETEC Institute",
      text: "Amazing work! The attention to detail and quality was exceptional.",
      rating: 5,
    },
    {
      image:phanun,
      name: "Sorm Phanun",
      role: "Product Manager",
      text: "Professional, responsive, and delivered beyond expectations.",
      rating: 5,
    },
    // {
    //   image:Teacher,
    //   name: "Mike Johnson",
    //   role: "Startup Founder",
    //   text: "Highly recommended! Transformed our vision into reality.",
    //   rating: 5,
    // },
  ];
  return (
    <Section
      id="testimonials"
      title="What People Say"
      subtitle="Real feedback from people I've worked with"
    >
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="backdrop-blur-md bg-white/5 border border-white/20 rounded-2xl p-8 hover:bg-white/10 transition-all"
          >
            <div className="flex items-center gap-1 mb-4">
              {Array(testimonial.rating)
                .fill(0)
                .map((_, i) => (
                  <Star
                    key={i}
                    size={10}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
            </div>
            <p className="text-gray-300 mb-6 italic">{testimonial.text}</p>
            <div className="border-t border-white/10 pt-4 flex gap-3 items-center">
              <div>
                <img
                  src={testimonial.image}
                  alt=""
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-white/20 transition-all duration-300 hover:ring-white/40"
                />
              </div>
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;

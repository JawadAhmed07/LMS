// Import necessary modules and components
import Link from "next/link";
import { Button } from "@/components/ui/button";
import auth from "../../auth";
import { AnimatedSection } from "@/components/animatedsection";
import Header from "@/components/header";

// Main Page Component
export default async function Home() {
  

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Header */}
     <Header/>

      {/* Hero Section */}
      <AnimatedSection>
        <div className="container mx-auto text-center py-16 px-8">
          <h2 className="text-5xl font-extrabold text-gray-800 mb-4">Welcome to Your Learning Hub</h2>
          <p className="text-xl text-gray-600 mb-6">Discover the easiest way to learn and grow your skills with us.</p>
          <Button>Start learning Journey</Button>
        </div>
      </AnimatedSection>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-200">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold text-gray-800 mb-12">Features</h3>
          <div className="grid md:grid-cols-3 gap-12">
            <Feature
              icon="🎓"
              title="Expert Trainers"
              description="Learn from the best in the industry with years of experience."
            />
            <Feature
              icon="📚"
              title="Comprehensive Courses"
              description="Wide range of topics designed to meet your learning needs."
            />
            <Feature
              icon="📈"
              title="Progress Tracking"
              description="Track your progress and achieve your learning goals."
            />
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-white">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold text-gray-800 mb-12">Popular Courses</h3>
          <div className="grid md:grid-cols-3 gap-12">
            <Course title="Web Development" description="Learn to build modern websites using the latest technologies." />
            <Course title="Graphic Design" description="Master the art of design and create stunning visuals." />
            <Course title="Python Programming" description="Unlock the power of Python and build scalable applications." />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-200">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold text-gray-800 mb-12">What Our Students Say</h3>
          <div className="grid md:grid-cols-2 gap-12 ">
            <Testimonial name="John Doe" quote="This LMS changed my life! I learned so much in such a short time." />
            <Testimonial name="Jane Smith" quote="The best platform for learning, the courses are practical and easy to follow." />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p className="text-lg mb-4">&copy; 2024 LMS. All rights reserved.</p>
          <a href="mailto:contact@lms.com" className="text-blue-400 hover:underline">
            contact@lms.com
          </a>
        </div>
      </footer>
    </div>
  );
}

// Feature Component
function Feature({ icon, title, description }) {
  return (
    <AnimatedSection>
      <div className="bg-white p-8 shadow-lg rounded-lg">
        <div className="text-5xl text-blue-600 mb-4">{icon}</div>
        <h4 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </AnimatedSection>
  );
}

// Course Component
function Course({ title, description }) {
  return (
    <AnimatedSection>
      <div className="bg-gray-50 p-8 shadow-lg rounded-lg">
        <h4 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </AnimatedSection>
  );
}

// Testimonial Component
function Testimonial({ name, quote }) {
  return (
    <AnimatedSection>
      <div className="bg-white text-black p-8 shadow-lg rounded-lg">
        <p className="italic text-lg mb-4"> {quote}</p>
        <p className="font-semibold text-gray-800">{name}</p>
      </div>
    </AnimatedSection>
  );
}

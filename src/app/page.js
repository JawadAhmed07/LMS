export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4 py-4">
          <h1 className="text-2xl font-bold text-blue-600">LMS</h1>
          <nav className="space-x-6">
            <a href="#features" className="text-gray-700 hover:text-blue-600">Features</a>
            <a href="#courses" className="text-gray-700 hover:text-blue-600">Courses</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600">Testimonials</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-4">Welcome to Your Learning Hub</h2>
          <p className="text-lg mb-6">Discover the easiest way to learn and grow your skills.</p>
          <button className="px-6 py-3 bg-white text-blue-600 rounded-md font-semibold hover:bg-gray-200">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">Features</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Feature icon="🎓" title="Expert Trainers" description="Learn from the best in the industry." />
            <Feature icon="📚" title="Comprehensive Courses" description="Wide range of topics to suit your needs." />
            <Feature icon="📈" title="Progress Tracking" description="Track your learning and achieve goals." />
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">Popular Courses</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Course title="Web Development" description="Learn to build modern websites." />
            <Course title="Graphic Design" description="Master the art of design." />
            <Course title="Python Programming" description="Unlock the power of Python." />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">What Students Say</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Testimonial name="John Doe" quote="This LMS changed my life!" />
            <Testimonial name="Jane Smith" quote="The best platform for learning!" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p className="mb-4">&copy; 2024 LMS. All rights reserved.</p>
          <a href="mailto:contact@lms.com" className="text-blue-400 hover:underline">
            contact@lms.com
          </a>
        </div>
      </footer>
    </div>
  );
}

function Feature({ icon, title, description }) {
  return (
    <div className="bg-white p-6 shadow-md rounded-md">
      <div className="text-4xl">{icon}</div>
      <h4 className="text-xl font-bold my-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function Course({ title, description }) {
  return (
    <div className="bg-gray-50 p-6 shadow-md rounded-md">
      <h4 className="text-xl font-bold mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function Testimonial({ name, quote }) {
  return (
    <div className="bg-white p-6 shadow-md rounded-md">
      <p className="italic mb-4">{quote}</p>
      <p className="font-bold">{name}</p>
    </div>
  );
}

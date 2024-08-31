import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, GraduationCap, Award, ChevronDown, ChevronUp } from 'lucide-react';

const TeamMember = ({ name, role, image }) => (
  <motion.div 
    className="bg-white p-6 rounded-lg shadow-lg text-center"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <img src={image} alt={name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
    <h3 className="text-xl font-semibold">{name}</h3>
    <p className="text-gray-600">{role}</p>
  </motion.div>
);

const StatCard = ({ icon: Icon, value, label }) => (
  <motion.div 
    className="bg-white p-6 rounded-lg shadow-lg text-center"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Icon className="w-12 h-12 text-blue-500 mx-auto mb-4" />
    <h3 className="text-3xl font-bold text-gray-800">{value}</h3>
    <p className="text-gray-600">{label}</p>
  </motion.div>
);

const FAQ = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold">{question}</span>
        {isOpen ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
      </button>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
          className="mt-2 text-gray-600"
        >
          {answer}
        </motion.div>
      )}
    </div>
  );
};

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100">
      <header className="bg-blue-600 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About Scholarship Hub</h1>
          <p className="text-xl md:text-2xl">Empowering dreams through education</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-10">Our Mission</h2>
          <p className="text-xl text-center max-w-3xl mx-auto">
            At Scholarship Hub, we believe in the transformative power of education. 
            Our mission is to break down financial barriers and empower students worldwide 
            to pursue their academic dreams and unlock their full potential.
          </p>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-10">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatCard icon={Users} value="10,000+" label="Students Supported" />
            <StatCard icon={GraduationCap} value="95%" label="Graduation Rate" />
            <StatCard icon={Award} value="$50M+" label="Scholarships Awarded" />
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-10">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TeamMember 
              name="Jane Doe" 
              role="Founder & CEO" 
              image="/api/placeholder/200/200" 
            />
            <TeamMember 
              name="John Smith" 
              role="Head of Scholarships" 
              image="/api/placeholder/200/200" 
            />
            <TeamMember 
              name="Emily Brown" 
              role="Student Success Manager" 
              image="/api/placeholder/200/200" 
            />
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <div className="max-w-2xl mx-auto">
            <FAQ 
              question="How can I apply for a scholarship?" 
              answer="To apply for a scholarship, visit our 'Apply Now' page and follow the step-by-step application process. Make sure to review the eligibility criteria for each scholarship before applying."
            />
            <FAQ 
              question="What types of scholarships do you offer?" 
              answer="We offer a wide range of scholarships including merit-based, need-based, and field-specific scholarships. Our offerings cover various academic levels from high school to postgraduate studies."
            />
            <FAQ 
              question="How are scholarship recipients selected?" 
              answer="Recipients are selected based on a combination of factors including academic achievement, financial need, extracurricular activities, and personal essays. Each scholarship may have specific selection criteria."
            />
          </div>
        </section>
      </main>

      <footer className="bg-blue-600 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Scholarship Hub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutUsPage;
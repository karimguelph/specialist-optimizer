import React, { useState } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AnimatedSearchBar from "../components/AnimatedSearchBar";
import SpecialistCard from "../components/SpecialistCard";
import Footer from "../components/Footer";
import { FaStar, FaUserMd, FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";

// Updated specialists array with individualized details
const specialists = [
    { name: "Dr. Alice Roberts", specialty: "Cardiology", location: "Toronto", waitTime: "Available in 2 weeks", rating: "4.9/5", experience: "10+ years", procedures: "Cardiac Imaging" },
    { name: "Dr. Bob Smith", specialty: "Neurology", location: "Vancouver", waitTime: "Available in 3 weeks", rating: "4.8/5", experience: "8 years", procedures: "Stroke Treatment" },
    { name: "Dr. Carol Johnson", specialty: "Orthopedics", location: "Montreal", waitTime: "Available in 1 month", rating: "4.7/5", experience: "15+ years", procedures: "Joint Replacement" },
    { name: "Dr. Sarah Mitchell", specialty: "Dermatology", location: "Calgary", waitTime: "Available in 1 week", rating: "4.9/5", experience: "12 years", procedures: "Cosmetic Dermatology" },
    { name: "Dr. Mona Shawki", specialty: "Family Medicine", location: "Ottawa", waitTime: "Available now", rating: "5/5", experience: "20 years", procedures: "Preventative Medicine" },
    { name: "Dr. Sherif Abdelhamid", specialty: "Anesthesiology", location: "Edmonton", waitTime: "Available now", rating: "5/5", experience: "18 years", procedures: "ICU" },
    { name: "Dr. Emily Huang", specialty: "Gastroenterology", location: "Winnipeg", waitTime: "Available in 2 months", rating: "4.6/5", experience: "10 years", procedures: "Endoscopy" },
    { name: "Dr. Liam Chen", specialty: "Endocrinology", location: "Halifax", waitTime: "Available in 2 weeks", rating: "4.7/5", experience: "7 years", procedures: "Thyroid Disorders" },
    { name: "Dr. Rachel Lee", specialty: "Psychiatry", location: "Saskatoon", waitTime: "Available in 5 weeks", rating: "4.8/5", experience: "9 years", procedures: "Mental Health Counseling" },
    { name: "Dr. William Brown", specialty: "Oncology", location: "Quebec City", waitTime: "Available in 1 month", rating: "4.9/5", experience: "15+ years", procedures: "Cancer Treatment Plans" },
    { name: "Dr. Olivia Garcia", specialty: "Ophthalmology", location: "Victoria", waitTime: "Available in 3 weeks", rating: "4.7/5", experience: "10 years", procedures: "Cataract Surgery" },
    { name: "Dr. Daniel Martinez", specialty: "Urology", location: "Regina", waitTime: "Available in 1 week", rating: "4.9/5", experience: "14 years", procedures: "Kidney Stone Treatment" },
    { name: "Dr. Isabella Lopez", specialty: "Pulmonology", location: "Hamilton", waitTime: "Available in 1 month", rating: "4.8/5", experience: "11 years", procedures: "Asthma Management" },
    { name: "Dr. Ryan White", specialty: "Plastic Surgery", location: "Toronto", waitTime: "Available in 2 months", rating: "4.8/5", experience: "16 years", procedures: "Reconstructive Surgery" },
    { name: "Dr. Aisha Patel", specialty: "Nephrology", location: "Calgary", waitTime: "Available in 3 weeks", rating: "4.7/5", experience: "9 years", procedures: "Dialysis" },
    { name: "Dr. Marcus Green", specialty: "Otolaryngology", location: "Montreal", waitTime: "Available in 2 weeks", rating: "4.6/5", experience: "8 years", procedures: "Sinus Surgery" },
    { name: "Dr. Fiona Evans", specialty: "Allergy & Immunology", location: "Edmonton", waitTime: "Available in 1 month", rating: "4.9/5", experience: "12 years", procedures: "Allergy Testing" },
    { name: "Dr. Michael Turner", specialty: "Rheumatology", location: "Winnipeg", waitTime: "Available in 3 months", rating: "4.6/5", experience: "11 years", procedures: "Arthritis Treatment" },
    { name: "Dr. Jessica King", specialty: "Gynecology", location: "Ottawa", waitTime: "Available in 1 month", rating: "4.8/5", experience: "10+ years", procedures: "Routine Gynecology" },
    { name: "Dr. Thomas Scott", specialty: "Family Medicine", location: "Halifax", waitTime: "Available in 4 weeks", rating: "4.7/5", experience: "14 years", procedures: "Preventative Care" },
    { name: "Dr. Ella Hill", specialty: "Orthopedics", location: "Toronto", waitTime: "Available in 6 weeks", rating: "4.8/5", experience: "13 years", procedures: "Joint Replacement" },
    { name: "Dr. Karen Young", specialty: "Radiology", location: "Saskatoon", waitTime: "Available in 2 weeks", rating: "4.6/5", experience: "9 years", procedures: "MRI" },
    { name: "Dr. Lucas Carter", specialty: "Palliative Care", location: "Vancouver", waitTime: "Available in 1 week", rating: "4.9/5", experience: "7 years", procedures: "End-of-Life Care" },
    { name: "Dr. Hannah Wright", specialty: "Sports Medicine", location: "Victoria", waitTime: "Available in 2 weeks", rating: "4.8/5", experience: "12 years", procedures: "Injury Rehabilitation" },
    { name: "Dr. Jacob Torres", specialty: "Thoracic Surgery", location: "Quebec City", waitTime: "Available in 3 weeks", rating: "4.7/5", experience: "16 years", procedures: "Lung Surgery" },
    { name: "Dr. Sophia Bennett", specialty: "Occupational Medicine", location: "St. John's", waitTime: "Available in 1 month", rating: "4.7/5", experience: "10 years", procedures: "Work-Related Injuries" },
    { name: "Dr. Chloe Diaz", specialty: "Physical Medicine & Rehabilitation", location: "Hamilton", waitTime: "Available in 5 weeks", rating: "4.9/5", experience: "15 years", procedures: "Neurological Rehabilitation" },
    { name: "Dr. Andrew Foster", specialty: "General Surgery", location: "London", waitTime: "Available in 6 weeks", rating: "4.7/5", experience: "14 years", procedures: "Appendectomy" },
    { name: "Dr. Mia Price", specialty: "Hematology", location: "Fredericton", waitTime: "Available in 4 weeks", rating: "4.8/5", experience: "12 years", procedures: "Blood Disorder Management" },
    { name: "Dr. Aria Howard", specialty: "Infectious Disease", location: "Yellowknife", waitTime: "Available in 1 month", rating: "4.6/5", experience: "11 years", procedures: "Antibiotic Therapy" },
    { name: "Dr. Henry Perez", specialty: "Obstetrics", location: "Whitehorse", waitTime: "Available in 2 weeks", rating: "4.8/5", experience: "9 years", procedures: "Prenatal Care" },
    { name: "Dr. Claire Brooks", specialty: "Pediatrics", location: "Guelph", waitTime: "Available in 3 weeks", rating: "4.9/5", experience: "10+ years", procedures: "General Pediatric Care" },
    { name: "Dr. Nathan Bailey", specialty: "Anesthesiology", location: "Toronto", waitTime: "Available in 2 weeks", rating: "4.7/5", experience: "13 years", procedures: "Surgical Anesthesia" },
    { name: "Dr. Sophie Sanders", specialty: "Rheumatology", location: "Thunder Bay", waitTime: "Available in 4 weeks", rating: "4.6/5", experience: "8 years", procedures: "Rheumatoid Arthritis Treatment" },
    { name: "Dr. Evan Ramirez", specialty: "Endocrinology", location: "Regina", waitTime: "Available in 5 weeks", rating: "4.8/5", experience: "10 years", procedures: "Diabetes Care" },
    { name: "Dr. Victoria Hughes", specialty: "Gastroenterology", location: "Ottawa", waitTime: "Available in 2 months", rating: "4.7/5", experience: "12 years", procedures: "Digestive Health" },
    { name: "Dr. Oliver Morris", specialty: "Neurology", location: "Prince George", waitTime: "Available in 3 weeks", rating: "4.8/5", experience: "9 years", procedures: "Parkinson's Disease" }
    //can add more specialists here
];


// Testimonials array
const testimonials = [
  { name: "John Doe", feedback: "Incredible service, found my specialist instantly!", rating: 5, image: "https://via.placeholder.com/150" },
  { name: "Jane Smith", feedback: "A lifesaver! I booked an appointment in minutes.", rating: 5, image: "https://via.placeholder.com/150" },
  { name: "Robert Brown", feedback: "Highly professional and easy to use.", rating: 4, image: "https://via.placeholder.com/150" },
];

const HomePage = () => {
  const [filteredSpecialists, setFilteredSpecialists] = useState(specialists);
  const [searchPerformed, setSearchPerformed] = useState(false);

  // Handle search based on criteria from AnimatedSearchBar
  const handleSearch = ({ specialty, location }) => {
    const results = specialists.filter((specialist) => {
      const matchesSpecialty = specialty ? specialist.specialty === specialty : true;
      const matchesLocation = location ? specialist.location === location : true;
      return matchesSpecialty && matchesLocation;
    });
    setFilteredSpecialists(results);
    setSearchPerformed(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-100 to-gray-200 overflow-hidden">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Main Content */}
      <main className="flex-grow mt-10 relative z-10">
        
        {/* Animated Search Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <AnimatedSearchBar onSearch={handleSearch} />
        </motion.div>

        {/* Featured Specialist Section with Image Overlay and Icon */}
        <section className="container mx-auto px-6 py-12 bg-gradient-to-r from-blue-800 via-purple-800 to-indigo-800 text-white shadow-xl rounded-2xl transform hover:scale-105 transition-all duration-500 relative overflow-hidden">
          <div className="absolute inset-0 bg-fixed bg-[url('https://via.placeholder.com/1200')] opacity-20 bg-cover bg-center"></div>
          <div className="relative z-10 text-center space-y-6">
            <h3 className="text-4xl font-bold text-yellow-400">Featured Specialist</h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Discover our top-rated specialist who has earned exceptional patient feedback.
            </p>
            <div className="flex justify-center">
              <SpecialistCard 
                name="Dr. Sarah Mitchell" 
                specialty="Dermatology" 
                location="Calgary" 
                waitTime="Available in 1 week"
                rating="4.85/5"
                experience="12 years"
                procedures="Advanced Dermatology Treatments"
              />
            </div>
          </div>
        </section>

        {/* Search Results */}
        <section className="container mx-auto mt-20 px-6">
          <h3 className="text-3xl font-semibold mb-8 text-center text-indigo-900">Search Results</h3>
          {searchPerformed ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
              {filteredSpecialists.length > 0 ? (
                filteredSpecialists.map((specialist, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 30 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    transition={{ delay: index * 0.1, duration: 0.5 }} 
                    viewport={{ once: true }}
                  >
                    <SpecialistCard {...specialist} />
                  </motion.div>
                ))
              ) : (
                <p className="text-center text-gray-500 text-lg col-span-full">No specialists found matching your criteria.</p>
              )}
            </div>
          ) : (
            <p className="text-center text-gray-500 text-lg">Enter criteria and press "Search" to view specialists.</p>
          )}
        </section>

        {/* Testimonials Section with Background Cards and Profiles */}
        <section className="container mx-auto mt-24 px-6 py-20 bg-white shadow-lg rounded-xl relative overflow-hidden">
          <h3 className="text-4xl font-bold text-center text-purple-700 mb-12">What Our Users Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ delay: index * 0.1, duration: 0.5 }} 
                viewport={{ once: true }}
                className="p-8 bg-gradient-to-r from-purple-100 to-purple-200 text-gray-800 rounded-lg shadow-lg flex flex-col items-center"
              >
                <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-full shadow-md mb-4"/>
                <p className="text-lg font-medium italic mb-4">"{testimonial.feedback}"</p>
                <div className="flex items-center space-x-1 text-yellow-500 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <h4 className="text-xl font-bold">{testimonial.name}</h4>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="container mx-auto mt-24 px-6 py-20 bg-gradient-to-r from-pink-500 to-indigo-600 text-white rounded-2xl shadow-xl text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-fixed bg-[url('https://via.placeholder.com/1200')] opacity-10 bg-cover bg-center"></div>
          <div className="relative z-10">
            <h3 className="text-4xl font-extrabold mb-6">Ready to Book Your Appointment?</h3>
            <p className="text-xl font-light mb-8 max-w-lg mx-auto">
              Join thousands of users who trust us to connect them with world-class specialists.
            </p>
            <button className="px-8 py-4 bg-yellow-400 text-black font-bold rounded-full shadow-lg transform hover:scale-110 transition-all duration-300">
              Get Started
            </button>
          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;

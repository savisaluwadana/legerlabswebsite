import React from 'react';
import { CheckCircle, Clock, Award, Headphones } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: Award,
      title: 'Expert Team',
      description: 'Our certified professionals bring years of experience in financial consulting and data analytics.',
      color: 'from-[#11166c] to-[#1a1f7a]',
      backgroundImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock support ensures your business operations never face financial roadblocks.',
      color: 'from-[#ff3131] to-[#e62929]',
      backgroundImage: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      icon: CheckCircle,
      title: 'Proven Results',
      description: 'Track record of helping businesses achieve their financial goals and scale their operations.',
      color: 'from-green-500 to-green-600',
      backgroundImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      icon: Headphones,
      title: 'Personalized Service',
      description: 'Tailored solutions that adapt to your unique business needs and growth trajectory.',
      color: 'from-purple-500 to-purple-600',
      backgroundImage: 'https://images.unsplash.com/photo-1553484771-371a605b060b?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 relative overflow-hidden">
      {/* Background with gradient matching homepage */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#11166c] via-[#1a1f7a] to-[#141414]"></div>
      
      {/* Background image overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-16693655/pexels-photo-6693655.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")'
        }}
      ></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#ff3131]/10 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose <span className="text-[#ff3131]">LEDGERLABS & ANALYTICS?</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            We combine cutting-edge technology with personalized service to deliver exceptional 
            financial solutions that drive real business results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="group text-center p-8 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Background image for each card */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                style={{
                  backgroundImage: `url("${reason.backgroundImage}")`
                }}
              ></div>
              
              {/* Card content */}
              <div className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-r ${reason.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <reason.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">
                  {reason.title}
                </h3>
                
                <p className="text-gray-200 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#11166c] to-[#141414] rounded-2xl p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Financial Future?
          </h3>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful SMEs who trust LEDGERLABS & ANALYTICS with their financial intelligence and growth strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#ff3131] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#e62929] transition-colors duration-300 shadow-lg">
              Start Your Journey
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#11166c] transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
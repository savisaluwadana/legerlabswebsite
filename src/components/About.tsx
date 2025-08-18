import React from 'react';
import { Target, Eye } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#11166c] mb-6">
            About <span className="text-[#ff3131]">LEDGERLABS & ANALYTICS</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated to transforming how small and medium-sized businesses manage their finances 
            and leverage data for strategic decision-making.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Financial consulting team"
              className="rounded-2xl shadow-2xl"
            />
          </div>

          <div className="space-y-12">
            {/* Mission */}
            <div className="bg-gradient-to-r from-[#11166c] to-[#1a1f7a] rounded-2xl p-8 text-white">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#ff3131] rounded-lg flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-gray-200 leading-relaxed">
                To empower small and medium-sized businesses with innovative bookkeeping and data 
                analytics solutions, driving growth, efficiency, and informed decision-making, while 
                fostering long-term partnerships and success in a rapidly evolving digital landscape.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-r from-[#ff3131] to-[#e62929] rounded-2xl p-8 text-white">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-4">
                  <Eye className="w-6 h-6 text-[#ff3131]" />
                </div>
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-gray-100 leading-relaxed">
                Empowering SMEs through cutting-edge financial intelligence, transforming data into prosperity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
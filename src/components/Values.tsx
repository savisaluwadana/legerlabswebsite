import React from 'react';
import { Lightbulb, Users2, Shield, Heart, Zap } from 'lucide-react';

const Values: React.FC = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Continuously seeking new ways to improve our services and leverage data to drive better outcomes.'
    },
    {
      icon: Users2,
      title: 'Accessibility',
      description: 'Making our services affordable and easy to use for SMEs of all sizes.'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Conducting our business ethically and transparently, building trust with our clients.'
    },
    {
      icon: Heart,
      title: 'Client-Centricity',
      description: 'Putting the needs and goals of our clients at the forefront of everything we do.'
    },
    {
      icon: Zap,
      title: 'Simplification',
      description: 'Making complex accounting and data analytics processes easy to understand and implement for SMEs.'
    }
  ];

  return (
    <section id="values" className="py-20 bg-gradient-to-br from-[#11166c] to-[#141414]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#ff3131] mb-6">
            Our <span className="text-[#ff3131]">Values</span>
          </h2>
        
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="group bg-white/15 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/25 transition-all duration-300 transform hover:-translate-y-2 shadow-lg"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-[#ff3131] to-[#e62929] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#ff3131] transition-colors">
                {value.title}
              </h3>
              
              <p className="text-white/90 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
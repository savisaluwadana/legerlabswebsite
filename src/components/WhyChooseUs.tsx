import React from 'react';
import { CheckCircle, Clock, Award, Headphones, TrendingUp, Users, Shield, Zap } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: Award,
      title: 'Expert Team',
      description: 'Our certified professionals bring years of experience in financial consulting and data analytics.',
      color: 'from-[#11166c] to-[#1a1f7a]',
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock support ensures your business operations never face financial roadblocks.',
      color: 'from-[#ff3131] to-[#e62929]'
    },
    {
      icon: CheckCircle,
      title: 'Proven Results',
      description: 'Track record of helping businesses achieve their financial goals and scale their operations.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Headphones,
      title: 'Personalized Service',
      description: 'Tailored solutions that adapt to your unique business needs and growth trajectory.',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const features = [
    {
      icon: TrendingUp,
      title: 'Data-Driven Insights',
      description: 'Advanced analytics and AI-powered recommendations for optimal decision making.'
    },
    {
      icon: Users,
      title: 'Collaborative Approach',
      description: 'Work closely with your team to ensure seamless integration and maximum impact.'
    },
    {
      icon: Shield,
      title: 'Secure & Compliant',
      description: 'Bank-level security with full compliance to industry standards and regulations.'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Rapid deployment and implementation with minimal disruption to your operations.'
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

        {/* Additional Features Section */}
        <div className="mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Advanced <span className="text-[#ff3131]">Capabilities</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#ff3131] to-[#e62929] rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white">{feature.title}</h4>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        

        <div className="bg-gradient-to-r from-[#0f123f] via-[#11166c] to-[#141414] rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-[#ff3131] to-[#e62929] rounded-full mb-4">
              <Award className="w-7 h-7 text-white" />
            </div>

            <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-4">
              Ready to transform your <span className="text-[#ff3131]">financial future?</span>
            </h3>

            <p className="text-base md:text-lg text-gray-200 max-w-xl mx-auto mb-6">
              Join SMEs and enterprises who rely on LEDGERLABS & ANALYTICS for precise financial intelligence, actionable insights and measurable outcomes.
            </p>

            <blockquote className="mx-auto text-gray-200 italic max-w-2xl">
              “LedgerLabs provided the clarity and automation we needed to scale confidently — faster closes, smarter forecasting, measurable cost savings.”
            </blockquote>

            <div className="mt-6 text-xs text-gray-400">Security & Compliance: ISO 27001-aligned • GDPR-ready</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
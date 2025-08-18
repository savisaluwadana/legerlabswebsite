import React from 'react';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#11166c] via-[#1a1f7a] to-[#141414] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/6693655/pexels-photo-6693655.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")'
        }}
      ></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#ff3131]/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 animate-fade-in-up border border-white/20">
            <Sparkles className="w-5 h-5 text-[#ff3131] mr-2 animate-spin-slow" />
            <span className="text-white text-sm font-medium">Your Financial Partner</span>
            <Zap className="w-4 h-4 text-[#ff3131] ml-2 animate-pulse" />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up animation-delay-200">
            Transform Your
            <span className="text-[#ff3131] block bg-gradient-to-r from-[#ff3131] to-[#ff6b6b] bg-clip-text text-transparent animate-pulse">Financial Future</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
            Empowering SMEs with cutting-edge financial intelligence, innovative bookkeeping solutions, 
            and data-driven insights that transform complex data into sustainable prosperity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-600">
            <Link 
              to="/services"
              className="group bg-gradient-to-r from-[#ff3131] to-[#e62929] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-[#e62929] hover:to-[#d42626] transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center hover:shadow-2xl"
            >
              Explore Our Services
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              to="/about"
              className="text-white border-2 border-white/50 backdrop-blur-sm px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#11166c] transition-all duration-300 hover:border-white"
            >
              About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
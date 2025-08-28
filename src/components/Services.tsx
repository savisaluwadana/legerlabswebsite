import React from 'react';
import { 
  BarChart3, 
  Calculator, 
  FileText, 
  Users, 
  TrendingUp, 
  Search, 
  Shield, 
  Building 
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: BarChart3,
      title: 'Data Analytics & Dashboards',
      description: 'Customized data analytics and interactive dashboards that transform your business data into actionable insights.',
      features: ['Real-time reporting', 'Custom KPIs', 'Interactive visualizations']
    },
    {
      icon: Calculator,
      title: 'Bookkeeping & Accounting',
      description: 'Comprehensive bookkeeping and accounting services tailored to your business needs.',
      features: ['Monthly reconciliation', 'Financial statements', 'Cloud-based solutions']
    },
    {
      icon: FileText,
      title: 'Tax Compliance',
      description: 'Tax compliance and regulatory reporting to keep your business compliant and optimized.',
      features: ['Tax planning', 'Regulatory filing', 'Compliance monitoring']
    },
    {
      icon: Users,
      title: 'Business Consulting',
      description: 'Strategic business consulting and advisory services to drive growth and efficiency.',
      features: ['Growth strategies', 'Process optimization', 'Risk management']
    },
    {
      icon: TrendingUp,
      title: 'Financial Planning',
      description: 'Financial planning and investment analysis to secure your business future.',
      features: ['Investment analysis', 'Cash flow planning', 'Performance metrics']
    },
    {
      icon: Search,
      title: 'Market Research',
      description: 'Comprehensive market research and analysis to identify opportunities and trends.',
      features: ['Competitive analysis', 'Market trends', 'Opportunity identification']
    },
    {
      icon: Shield,
      title: 'Internal Audits',
      description: 'Internal audits focused on process improvements and operational efficiency.',
      features: ['Process review', 'Risk assessment', 'Improvement recommendations']
    },
    {
      icon: Building,
      title: 'Company Services',
      description: 'Company registration and secretarial services plus forensic accounting consulting.',
      features: ['Company registration', 'Secretarial services', 'Forensic accounting']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#ff3131]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-[#ff3131]">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive financial solutions designed to empower your business with the tools 
            and insights needed for sustainable growth and success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl hover:shadow-[#ff3131]/20 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 p-6 border border-white/20 hover:border-[#ff3131]/30 relative overflow-hidden"
            >
              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff3131]/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-[#ff3131] to-[#e62929] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#ff3131] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-200 mb-4 leading-relaxed group-hover:text-white transition-colors duration-300">
                  {service.description}
                </p>
              </div>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
                    <div className="w-2 h-2 bg-[#ff3131] rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-[#ff3131] to-[#e62929] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-[#e62929] hover:to-[#d12121] transition-all duration-300 shadow-lg hover:shadow-[#ff3131]/50 transform hover:scale-105 border border-white/20 hover:border-white/40">
            Explore All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
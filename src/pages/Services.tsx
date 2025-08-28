import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { 
  BarChart3, 
  Calculator, 
  FileText, 
  Users, 
  TrendingUp, 
  Search, 
  Shield, 
  Building,
  ArrowRight,
  CheckCircle,
  Award,
  Clock,
  Target,
  Zap
} from 'lucide-react';

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState(0);
  const navigate = useNavigate();

  const services = [
    {
      icon: BarChart3,
      title: 'Data Analytics & Dashboards',
      category: 'Analytics',
      description: 'Transform your business data into actionable insights with our customized analytics solutions and interactive dashboards.',
      features: [
        'Real-time reporting and KPI tracking',
        'Custom dashboard design and development',
        'Interactive data visualizations',
        'Automated report generation',
        'Performance benchmarking',
        'Predictive analytics modeling'
      ],
      benefits: [
        'Make data-driven decisions with confidence',
        'Identify trends and opportunities quickly',
        'Save hours on manual reporting',
        'Improve operational efficiency by 30%'
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      cta: 'Get Analytics Solution'
    },
    {
      icon: Calculator,
      title: 'Bookkeeping & Accounting',
      category: 'Core Services',
      description: 'Comprehensive bookkeeping and accounting services tailored to your business needs with cloud-based solutions.',
      features: [
        'Monthly financial reconciliation',
        'Accounts payable and receivable management',
        'Financial statement preparation',
        'Cloud-based accounting setup',
        'Expense tracking and categorization',
        'Cash flow management'
      ],
      benefits: [
        'Always up-to-date financial records',
        'Reduce bookkeeping costs by 40%',
        'Ensure compliance and accuracy',
        'Access your data anywhere, anytime'
      ],
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      cta: 'Start Bookkeeping'
    },
    {
      icon: FileText,
      title: 'Tax Compliance & Planning',
      category: 'Compliance',
      description: 'Tax compliance and regulatory reporting to keep your business compliant and optimized for maximum savings.',
      features: [
        'Strategic tax planning and optimization',
        'Regulatory filing and compliance',
        'Tax return preparation and review',
        'Compliance monitoring and alerts',
        'Tax liability minimization strategies',
        'Audit support and representation'
      ],
      benefits: [
        'Minimize tax liability legally',
        'Avoid costly compliance penalties',
        'Peace of mind during tax season',
        'Expert audit support when needed'
      ],
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      cta: 'Plan Tax Strategy'
    },
    {
      icon: Users,
      title: 'Business Consulting',
      category: 'Strategy',
      description: 'Strategic business consulting and advisory services to drive growth, efficiency, and sustainable success.',
      features: [
        'Growth strategy development',
        'Process optimization and automation',
        'Risk management and mitigation',
        'Financial modeling and forecasting',
        'Market analysis and positioning',
        'Operational efficiency improvement'
      ],
      benefits: [
        'Accelerate business growth by 25%',
        'Optimize operations for maximum efficiency',
        'Reduce operational risks',
        'Make strategic decisions with confidence'
      ],
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      cta: 'Book Consultation'
    }
  ];

  const additionalServices = [
    {
      icon: TrendingUp,
      title: 'Financial Planning',
      description: 'Investment analysis, cash flow planning, and performance metrics',
      features: ['Investment analysis', 'Cash flow planning', 'Performance metrics']
    },
    {
      icon: Search,
      title: 'Market Research',
      description: 'Competitive analysis, market trends, and opportunity identification',
      features: ['Competitive analysis', 'Market trends', 'Opportunity identification']
    },
    {
      icon: Shield,
      title: 'Internal Audits',
      description: 'Process review, risk assessment, and improvement recommendations',
      features: ['Process review', 'Risk assessment', 'Improvement recommendations']
    },
    {
      icon: Building,
      title: 'Company Services',
      description: 'Company registration, secretarial services, and forensic accounting',
      features: ['Company registration', 'Secretarial services', 'Forensic accounting']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Financial Services - Ledgerlabs Expert Solutions</title>
        <meta name="description" content="Comprehensive financial services including data analytics, bookkeeping, tax compliance, and business consulting. Transform your business with expert solutions." />
        <meta name="keywords" content="financial services, data analytics, bookkeeping, tax compliance, business consulting, financial planning" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Hero Section */}
        <section className="pt-24 pb-12 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-10 left-10 w-32 h-32 bg-[#ff3131]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Our <span className="text-[#ff3131]">Services</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Comprehensive financial solutions designed to empower your business with the tools 
                and insights needed for <span className="text-[#ff3131] font-semibold">sustainable growth</span> and success.
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-[#ff3131] to-[#e62929] text-white px-8 py-4 rounded-xl font-semibold hover:from-[#e62929] hover:to-[#d12121] transition-all duration-300 shadow-lg hover:shadow-[#ff3131]/50 transform hover:scale-105 border border-white/20 hover:border-white/40 flex items-center justify-center">
                  Schedule Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured <span className="text-[#ff3131]">Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our flagship services that have helped hundreds of businesses transform their financial operations.
              </p>
            </div>

            {/* Service Tabs */}
            <div className="mb-12">
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {services.map((service, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveService(index)}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      activeService === index
                        ? 'bg-[#ff3131] text-white shadow-lg shadow-[#ff3131]/30'
                        : 'bg-white/10 backdrop-blur-lg border border-white/20 text-white hover:bg-white/20'
                    }`}
                  >
                    {service.title}
                  </button>
                ))}
              </div>

              {/* Active Service Content */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white/20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="p-12">
                    <div className="inline-flex items-center bg-[#ff3131]/20 backdrop-blur-sm text-[#ff3131] px-4 py-2 rounded-full mb-6 border border-[#ff3131]/30">
                      {React.createElement(services[activeService].icon, { className: "w-5 h-5 mr-2" })}
                      <span className="font-semibold">{services[activeService].category}</span>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-white mb-4">
                      {services[activeService].title}
                    </h3>
                    
                    <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                      {services[activeService].description}
                    </p>

                    <div className="mb-8">
                      <h4 className="text-xl font-bold text-white mb-4">Key Features</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {services[activeService].features.map((feature, idx) => (
                          <div key={idx} className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-[#ff3131] mr-3 flex-shrink-0" />
                            <span className="text-gray-200">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-xl font-bold text-white mb-4">Key Benefits</h4>
                      <ul className="space-y-2">
                        {services[activeService].benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center">
                            <ArrowRight className="w-4 h-4 text-[#ff3131] mr-3" />
                            <span className="text-gray-200">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 items-start">
                      <div>
                        <p className="text-gray-300">Contact us for custom packages and pricing</p>
                      </div>
                      <button 
                        onClick={() => navigate('/contact')}
                        className="bg-gradient-to-r from-[#ff3131] to-[#e62929] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#e62929] hover:to-[#d12121] transition-all duration-300 shadow-lg hover:shadow-[#ff3131]/50 flex items-center"
                      >
                        {services[activeService].cta}
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="relative bg-gradient-to-br from-slate-800/50 to-blue-900/50 p-8 flex items-center justify-center">
                    <img
                      src={services[activeService].image}
                      alt={services[activeService].title}
                      className="rounded-xl shadow-2xl w-full h-auto max-w-md"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Services Grid */}
        <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 right-20 w-64 h-64 bg-[#ff3131]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Additional <span className="text-[#ff3131]">Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive support services to cover all aspects of your financial operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {additionalServices.map((service, index) => (
                <div 
                  key={index}
                  className="group bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl hover:shadow-[#ff3131]/20 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 p-6 border border-white/20 hover:border-[#ff3131]/30 relative overflow-hidden"
                >
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
                    
                    <ul className="space-y-2 mb-6">
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
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="text-[#ff3131]">Process</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven methodology that ensures successful implementation and measurable results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Discovery', description: 'We analyze your current financial processes and identify opportunities for improvement.' },
                { step: '02', title: 'Strategy', description: 'Develop a customized plan tailored to your specific business needs and goals.' },
                { step: '03', title: 'Implementation', description: 'Execute the solution with minimal disruption to your daily operations.' },
                { step: '04', title: 'Optimization', description: 'Continuously monitor and refine the system for maximum efficiency and ROI.' }
              ].map((process, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#ff3131] to-[#e62929] rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#ff3131] transition-colors duration-300">{process.title}</h3>
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Guarantees */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-16 left-16 w-56 h-56 bg-[#ff3131]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-16 right-16 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Service <span className="text-[#ff3131]">Guarantees</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We stand behind our work with concrete commitments to quality, timeliness, and results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Award,
                  title: 'Quality Assurance',
                  description: '99.9% accuracy guaranteed on all financial reports and data analysis.',
                  guarantee: 'Error-free delivery or full revision at no cost'
                },
                {
                  icon: Clock,
                  title: 'Timely Delivery',
                  description: 'All reports and analyses delivered on or before agreed deadlines.',
                  guarantee: 'On-time delivery or 20% discount on next service'
                },
                {
                  icon: Target,
                  title: 'Results-Driven',
                  description: 'Measurable improvements in financial efficiency and decision-making.',
                  guarantee: 'Documented ROI within 90 days of implementation'
                },
                {
                  icon: Zap,
                  title: 'Rapid Response',
                  description: 'Quick turnaround on urgent requests and support inquiries.',
                  guarantee: '24-hour response time for all client communications'
                }
              ].map((guarantee, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl hover:shadow-[#ff3131]/20 transition-all duration-300 border border-white/20 hover:border-[#ff3131]/30 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#ff3131] to-[#e62929] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                    <guarantee.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#ff3131] transition-colors duration-300">{guarantee.title}</h3>
                  <p className="text-gray-200 mb-4 group-hover:text-white transition-colors duration-300">{guarantee.description}</p>
                  <div className="p-4 bg-[#ff3131]/10 backdrop-blur-sm rounded-lg border border-[#ff3131]/20">
                    <p className="text-sm font-semibold text-[#ff3131]">Our Promise:</p>
                    <p className="text-sm text-gray-200">{guarantee.guarantee}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-gradient-to-r from-[#ff3131] to-[#e62929] rounded-2xl p-8 md:p-12 text-center shadow-2xl">
              <h3 className="text-3xl font-bold text-white mb-4">
                100% Satisfaction Guarantee
              </h3>
              <p className="text-red-100 text-lg mb-6 max-w-2xl mx-auto">
                If you're not completely satisfied with our service within the first 30 days, 
                we'll refund your investment and help you transition to another solution.
              </p>
              <div className="flex items-center justify-center space-x-2 text-red-100">
                <Shield className="w-6 h-6" />
                <span className="font-semibold">Risk-Free Partnership</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#ff3131] to-[#e62929] relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your <span className="text-white font-black">Financial Operations</span>?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Join hundreds of successful businesses who trust Ledgerlabs with their financial intelligence and growth strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#ff3131] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-white/20 transform hover:scale-105 flex items-center justify-center">
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#ff3131] transition-all duration-300 shadow-lg hover:shadow-white/20 transform hover:scale-105">
                Download Service Guide
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;

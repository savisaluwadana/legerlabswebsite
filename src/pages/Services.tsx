import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
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
  Play,
  Award,
  Clock,
  Target,
  Zap
} from 'lucide-react';

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState(0);

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
      cta: 'Get Analytics Demo'
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
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-24 pb-12 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-[var(--primary-blue)] mb-6">
                Our <span className="accent">Services</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Comprehensive financial solutions designed to empower your business with the tools 
                and insights needed for <span className="accent">sustainable growth</span> and success.
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary">
                  Schedule Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="btn-secondary flex items-center">
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--primary-blue)] mb-6">
                Featured <span className="accent">Solutions</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      activeService === index
                        ? 'bg-[var(--primary-blue)] text-white shadow-lg'
                        : 'bg-gray-100 text-[var(--primary-blue)] hover:bg-gray-200'
                    }`}
                  >
                    {service.title}
                  </button>
                ))}
              </div>

              {/* Active Service Content */}
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="p-12">
                    <div className="inline-flex items-center bg-blue-100 text-[var(--primary-blue)] px-4 py-2 rounded-full mb-6">
                      {React.createElement(services[activeService].icon, { className: "w-5 h-5 mr-2" })}
                      <span className="text-service-meta font-semibold">{services[activeService].category}</span>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-[var(--primary-blue)] mb-4">
                      {services[activeService].title}
                    </h3>
                    
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      {services[activeService].description}
                    </p>

                    <div className="mb-8">
                      <h4 className="text-xl font-bold text-[var(--primary-blue)] mb-4">Key Features</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {services[activeService].features.map((feature, idx) => (
                          <div key={idx} className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-xl font-bold text-[var(--primary-blue)] mb-4">Key Benefits</h4>
                      <ul className="space-y-2">
                        {services[activeService].benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center">
                            <ArrowRight className="w-4 h-4 text-[var(--accent-red)] mr-3" />
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 items-start">
                      <div>
                        <p className="text-service-meta">Contact us for custom packages and pricing</p>
                      </div>
                      <button className="btn-accent">
                        {services[activeService].cta}
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 p-8 flex items-center justify-center">
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
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--primary-blue)] mb-6">
                Additional <span className="accent">Services</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive support services to cover all aspects of your financial operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {additionalServices.map((service, index) => (
                <div 
                  key={index}
                  className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 p-6 border border-gray-100 hover:border-[var(--accent-red)]/20 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-red)]/5 to-[var(--primary-blue)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-[var(--primary-blue)] to-[var(--accent-red)] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-[var(--primary-blue)] mb-3 group-hover:text-[var(--accent-red)] transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        {service.description}
                      </p>
                    </div>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                          <div className="w-2 h-2 bg-[var(--accent-red)] rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <button className="w-full bg-gradient-to-r from-[var(--primary-blue)] to-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--primary-blue)] mb-6">
                Our <span className="accent">Process</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[var(--primary-blue)] to-[var(--accent-red)] rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold text-[var(--primary-blue)] mb-4">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Guarantees */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--primary-blue)] mb-6">
                Our Service <span className="text-[var(--accent-red)]">Guarantees</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-r from-[var(--primary-blue)] to-[var(--accent-red)] rounded-xl flex items-center justify-center mb-6">
                    <guarantee.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--primary-blue)] mb-4">{guarantee.title}</h3>
                  <p className="text-gray-600 mb-4">{guarantee.description}</p>
                  <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-[var(--accent-red)]">
                    <p className="text-sm font-semibold text-[var(--primary-blue)]">Our Promise:</p>
                    <p className="text-sm text-gray-700">{guarantee.guarantee}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-gradient-to-r from-[var(--primary-blue)] to-blue-700 rounded-2xl p-8 md:p-12 text-center">
              <h3 className="text-3xl font-bold text-white mb-4">
                100% Satisfaction Guarantee
              </h3>
              <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
                If you're not completely satisfied with our service within the first 30 days, 
                we'll refund your investment and help you transition to another solution.
              </p>
              <div className="flex items-center justify-center space-x-2 text-blue-100">
                <Shield className="w-6 h-6" />
                <span className="font-semibold">Risk-Free Partnership</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[var(--primary-blue)] to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your <span className="text-[var(--accent-red)]">Financial Operations</span>?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join hundreds of successful businesses who trust Ledgerlabs with their financial intelligence and growth strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-accent">
                Schedule Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[var(--primary-blue)] transition-all duration-300">
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

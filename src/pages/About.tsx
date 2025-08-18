import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Target, Eye, Users, Award, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Ledgerlabs - Expert Financial Services Team</title>
        <meta name="description" content="Learn about Ledgerlabs' mission, vision, and expert team. Dedicated to transforming SME financial operations with cutting-edge analytics and personalized service." />
        <meta name="keywords" content="about ledgerlabs, financial experts, company mission, vision, team" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-[#11166c] via-[#1a1f7a] to-[#141414]">
        {/* Hero Section */}
        <section className="pt-24 pb-12 relative overflow-hidden">
          {/* Background image overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1551434678-e076c223a692?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")'
            }}
          ></div>
          
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-[#ff3131]/20 rounded-full animate-pulse"
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
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                About <span className="text-[#ff3131]">Ledgerlabs</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Dedicated to transforming how small and medium-sized businesses manage their finances 
                and leverage data for strategic decision-making.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-12">
                {/* Mission */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-white hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#ff3131] to-[#e62929] rounded-lg flex items-center justify-center mr-4">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">Our Mission</h3>
                  </div>
                  <p className="text-gray-200 leading-relaxed text-lg">
                    To empower small and medium-sized businesses with innovative <span className="text-[#ff3131]">financial intelligence</span> and 
                    data analytics solutions, driving growth, efficiency, and informed decision-making, while 
                    fostering long-term partnerships and success in a rapidly evolving digital landscape.
                  </p>
                </div>

                {/* Vision */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-white hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#ff3131] to-[#e62929] rounded-lg flex items-center justify-center mr-4">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">Our Vision</h3>
                  </div>
                  <p className="text-orange-100 leading-relaxed text-lg">
                    Empowering SMEs through cutting-edge <span className="text-white font-semibold">financial intelligence</span>, 
                    transforming data into prosperity and becoming the trusted partner for sustainable business growth.
                  </p>
                </div>
              </div>

              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Professional financial consulting team meeting"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                  loading="lazy"
                />
                <div className="absolute -bottom-8 -right-8 bg-[var(--accent-red)] text-white p-6 rounded-lg shadow-lg">
                  <div className="text-3xl font-bold">5+</div>
                  <div className="text-sm">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--primary-blue)] mb-6">
                Our <span className="accent">Story</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Founded with the vision of democratizing <span className="accent">financial intelligence</span> for SMEs, 
                  Ledgerlabs emerged from the recognition that small and medium-sized businesses needed access to 
                  the same sophisticated financial tools and insights that larger corporations enjoy.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our journey began when our founders, experienced financial professionals and data scientists, 
                  witnessed countless SMEs struggling with complex financial data and inefficient bookkeeping processes. 
                  They realized that with the right technology and expertise, these challenges could be transformed into 
                  <span className="accent"> competitive advantages</span>.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Today, we continue to innovate and expand our services, always keeping our core mission at heart: 
                  to make advanced financial analytics and professional bookkeeping services accessible, 
                  affordable, and actionable for businesses of all sizes.
                </p>
              </div>
              
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1553484771-371a605b060b?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Data analytics and financial planning workspace"
                  className="rounded-2xl shadow-xl w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--primary-blue)] mb-6">
                Our <span className="accent">Values</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do and define who we are as a company.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: TrendingUp,
                  title: 'Innovation',
                  description: 'Continuously seeking new ways to improve our services and leverage data to drive better outcomes for our clients.'
                },
                {
                  icon: Users,
                  title: 'Accessibility',
                  description: 'Making our services affordable and easy to use for SMEs of all sizes, regardless of their technical expertise.'
                },
                {
                  icon: Award,
                  title: 'Integrity',
                  description: 'Conducting our business ethically and transparently, building trust with our clients through honest communication.'
                },
                {
                  icon: Target,
                  title: 'Client-Centricity',
                  description: 'Putting the needs and goals of our clients at the forefront of everything we do, ensuring their success is our success.'
                },
                {
                  icon: Eye,
                  title: 'Excellence',
                  description: 'Striving for the highest standards in service delivery, technical expertise, and customer satisfaction.'
                },
                {
                  icon: TrendingUp,
                  title: 'Simplification',
                  description: 'Making complex accounting and data analytics processes easy to understand and implement for SMEs.'
                }
              ].map((value, index) => (
                <div 
                  key={index}
                  className="group bg-white rounded-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-[var(--primary-blue)] to-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-[var(--primary-blue)] mb-4 group-hover:text-[var(--accent-red)] transition-colors">
                    {value.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--primary-blue)] mb-6">
                Meet Our <span className="accent">Expert Team</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our certified professionals bring years of experience in financial consulting, 
                data analytics, and business strategy.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                <div className="text-3xl font-bold text-[var(--primary-blue)] mb-2">50+</div>
                <div className="text-service-meta">Happy Clients</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                <div className="text-3xl font-bold text-[var(--accent-red)] mb-2">98%</div>
                <div className="text-service-meta">Client Satisfaction</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                <div className="text-3xl font-bold text-[var(--primary-blue)] mb-2">24/7</div>
                <div className="text-service-meta">Support Available</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                <div className="text-3xl font-bold text-[var(--accent-red)] mb-2">5+</div>
                <div className="text-service-meta">Years Experience</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;

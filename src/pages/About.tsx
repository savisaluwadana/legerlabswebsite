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
        <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 right-20 w-64 h-64 bg-[#ff3131]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="text-[#ff3131]">Story</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <p className="text-lg text-gray-200 leading-relaxed mb-6">
                    Founded with the vision of democratizing <span className="text-[#ff3131] font-semibold">financial intelligence</span> for SMEs, 
                    Ledgerlabs emerged from the recognition that small and medium-sized businesses needed access to 
                    the same sophisticated financial tools and insights that larger corporations enjoy.
                  </p>
                  
                  <p className="text-lg text-gray-200 leading-relaxed mb-6">
                    Our journey began when our founders, experienced financial professionals and data scientists, 
                    witnessed countless SMEs struggling with complex financial data and inefficient bookkeeping processes. 
                    They realized that with the right technology and expertise, these challenges could be transformed into 
                    <span className="text-[#ff3131] font-semibold">competitive advantages</span>.
                  </p>
                  
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Today, we continue to innovate and expand our services, always keeping our core mission at heart: 
                    to make advanced financial analytics and professional bookkeeping services accessible, 
                    affordable, and actionable for businesses of all sizes.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff3131]/20 to-blue-500/20 rounded-2xl blur-2xl transform rotate-6"></div>
                <img 
                  src="https://images.unsplash.com/photo-1553484771-371a605b060b?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Data analytics and financial planning workspace"
                  className="rounded-2xl shadow-2xl w-full h-auto relative z-10"
                  loading="lazy"
                />
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-[#ff3131] to-[#e62929] text-white p-6 rounded-xl shadow-xl z-20">
                  <div className="text-2xl font-bold">Founded 2019</div>
                  <div className="text-sm opacity-90">Pioneering Financial Intelligence</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-10 left-10 w-32 h-32 bg-[#ff3131]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="text-[#ff3131]">Values</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
                  className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 border border-white/20 shadow-2xl hover:shadow-[#ff3131]/20"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-[#ff3131] to-[#e62929] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#ff3131] transition-colors duration-300">
                    {value.title}
                  </h3>
                  
                  <p className="text-gray-200 leading-relaxed group-hover:text-white transition-colors duration-300">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-16 left-16 w-56 h-56 bg-[#ff3131]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-16 right-16 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Meet Our <span className="text-[#ff3131]">Expert Team</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our certified professionals bring years of experience in financial consulting, 
                data analytics, and business strategy.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-4xl font-bold text-[#ff3131] mb-3 group-hover:scale-110 transition-transform duration-300">50+</div>
                <div className="text-gray-200 font-medium">Happy Clients</div>
              </div>
              <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-4xl font-bold text-[#ff3131] mb-3 group-hover:scale-110 transition-transform duration-300">98%</div>
                <div className="text-gray-200 font-medium">Client Satisfaction</div>
              </div>
              <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-4xl font-bold text-[#ff3131] mb-3 group-hover:scale-110 transition-transform duration-300">24/7</div>
                <div className="text-gray-200 font-medium">Support Available</div>
              </div>
              <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-4xl font-bold text-[#ff3131] mb-3 group-hover:scale-110 transition-transform duration-300">5+</div>
                <div className="text-gray-200 font-medium">Years Experience</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;

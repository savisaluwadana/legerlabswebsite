import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, Send, Globe, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const [notification, setNotification] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setNotification({ type: null, message: '' });

    // Client-side validation
    if (!formData.name.trim()) {
      setNotification({ type: 'error', message: 'Individual/Company name is required.' });
      setIsSubmitting(false);
      return;
    }

    if (!formData.email.trim()) {
      setNotification({ type: 'error', message: 'Email address is required.' });
      setIsSubmitting(false);
      return;
    }

    if (!formData.message.trim()) {
      setNotification({ type: 'error', message: 'Message is required.' });
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In a real application, you would send the data to your server here
      console.log('Form submitted:', formData);
      
      setNotification({ 
        type: 'success', 
        message: 'Thanks — your message was sent successfully! We will get back to you within 24 hours.' 
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch {
      setNotification({ 
        type: 'error', 
        message: 'Sorry, there was an error sending your message. Please try again or contact us directly.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Pranesh',
      details: '076 772 4668',
      description: 'Financial Consultant',
      action: () => window.open('https://wa.me/94767724668?text=I%20want%20to%20schedule%20a%20consultation', '_blank')
    },
    {
      icon: Phone,
      title: 'Thomas',
      details: '0766 78 18 38',
      description: 'Business Analyst',
      action: () => window.open('https://wa.me/94766781838?text=I%20want%20to%20schedule%20a%20consultation', '_blank')
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'ledgerlabsanalytics@gmail.com',
      description: 'We reply within 24 hours',
      action: () => window.location.href = 'mailto:ledgerlabsanalytics@gmail.com'
    },
    {
      icon: Globe,
      title: 'Online',
      details: 'ledgerlabsanalytics',
      description: 'Follow our insights',
      action: () => window.open('https://ledgerlabs.com', '_blank')
    }
  ];

  const scheduleWhatsApp = () => {
    window.open('https://wa.me/94767724668?text=I%20want%20to%20schedule%20a%20consultation', '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Get In Touch - Contact Ledgerlabs</title>
        <meta name="description" content="Contact Ledgerlabs for expert financial services. Schedule a consultation or get in touch with our team for personalized solutions." />
        <meta name="keywords" content="contact ledgerlabs, financial consultation, get in touch, schedule meeting" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Hero Section */}
        <section className="pt-24 pb-12 bg-white/10 backdrop-blur-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Get In <span className="text-[#ff3131]">Touch</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Ready to take your business to the next level? Contact us today for a <span className="text-[#ff3131]">consultation</span> 
                and discover how Ledgerlabs can transform your financial operations.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
                
                {/* Notification */}
                {notification.type && (
                  <div 
                    className={`form-notification ${notification.type}`}
                    role="alert"
                    aria-live="polite"
                    id="formMessage"
                  >
                    {notification.message}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Individual / Company name <span className="text-[#ff3131]">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-[#ff3131] focus:border-transparent transition-all duration-300 text-white placeholder-gray-300 hover:border-white/30"
                        placeholder="Your name or company name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Email Address <span className="text-[#ff3131]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-[#ff3131] focus:border-transparent transition-all duration-300 text-white placeholder-gray-300 hover:border-white/30"
                        placeholder="hello@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-[#ff3131] focus:border-transparent transition-all duration-300 text-white placeholder-gray-300 hover:border-white/30"
                        placeholder="Your company (optional)"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-[#ff3131] focus:border-transparent transition-all duration-300 text-white placeholder-gray-300 hover:border-white/30"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Service Interest
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-[#ff3131] focus:border-transparent transition-all duration-300 text-white hover:border-white/30"
                    >
                      <option value="" className="bg-slate-800 text-white">Select a service</option>
                      <option value="data-analytics" className="bg-slate-800 text-white">Data Analytics & Dashboards</option>
                      <option value="bookkeeping" className="bg-slate-800 text-white">Bookkeeping & Accounting</option>
                      <option value="tax-compliance" className="bg-slate-800 text-white">Tax Compliance & Planning</option>
                      <option value="business-consulting" className="bg-slate-800 text-white">Business Consulting</option>
                      <option value="financial-planning" className="bg-slate-800 text-white">Financial Planning</option>
                      <option value="market-research" className="bg-slate-800 text-white">Market Research</option>
                      <option value="internal-audits" className="bg-slate-800 text-white">Internal Audits</option>
                      <option value="company-services" className="bg-slate-800 text-white">Company Services</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Message <span className="text-[#ff3131]">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-[#ff3131] focus:border-transparent transition-all duration-300 resize-none text-white placeholder-gray-300 hover:border-white/30"
                      placeholder="Tell us about your business needs and how we can help..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#ff3131] to-[#e62929] text-white px-6 py-4 rounded-lg font-semibold text-lg hover:from-[#e62929] hover:to-[#d12121] transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-[#ff3131]/50 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-4 cursor-pointer hover:bg-white/10 p-4 rounded-lg transition-colors border border-white/20"
                        onClick={info.action}
                      >
                        <div className="w-12 h-12 bg-[#ff3131] rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-1">{info.title}</h4>
                          <p className="text-gray-200 font-medium">{info.details}</p>
                          <p className="text-gray-300">{info.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <h4 className="text-xl font-bold text-white mb-4">
                    <span className="text-[#ff3131]">Consultation</span>
                  </h4>
                  <p className="text-gray-200 mb-6">
                    Schedule a 30-minute consultation to discuss your business needs
                    and discover how our solutions can help you achieve your financial goals.
                  </p>
                  <button
                    onClick={scheduleWhatsApp}
                    className="w-full bg-gradient-to-r from-[#ff3131] to-[#e62929] text-white px-6 py-3 rounded-lg font-semibold hover:from-[#e62929] hover:to-[#d12121] transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-[#ff3131]/50"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Schedule via WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;

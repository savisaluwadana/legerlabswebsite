import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Ledgerlabs - Expert Financial Services & Data Analytics</title>
        <meta name="description" content="Transform your business with cutting-edge financial intelligence, bookkeeping solutions, and data analytics. Trusted expert services for sustainable growth." />
        <meta name="keywords" content="financial services, bookkeeping, data analytics, business consulting, financial intelligence" />
      </Helmet>
      <div className="min-h-screen relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
        {/* Decorative background circles to match Services theme */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-[#ff3131]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10">
          <Hero />
          <WhyChooseUs />
        </div>
      </div>
    </>
  );
};

export default Home;

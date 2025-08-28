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
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <Hero />
        <WhyChooseUs />
      </div>
    </>
  );
};

export default Home;

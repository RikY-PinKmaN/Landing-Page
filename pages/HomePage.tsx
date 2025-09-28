
import React from 'react';
import { Link } from 'react-router-dom';
import { services, testimonials, blogPosts } from '../constants';

const HomePage: React.FC = () => {
  return (
    <div className="space-y-24 md:space-y-32">
      {/* Hero Section */}
      <section className="text-center min-h-[60vh] flex flex-col items-center justify-center relative -mt-16">
         <div className="absolute inset-0 bg-grid-slate/10 dark:bg-grid-slate/5 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-charcoal dark:text-lightest-slate mb-4 tracking-tight">
          Stop Drowning in Paperwork.
          <br />
          <span className="text-aqua">Start Thriving with AI.</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate dark:text-light-slate mb-8">
          We help small businesses digitize documents, automate workflows, and unlock powerful insights to save time and drive growth.
        </p>
        <Link 
          to="/contact" 
          className="text-navy bg-aqua border border-aqua hover:bg-transparent hover:text-aqua focus:ring-4 focus:outline-none focus:ring-aqua/50 font-bold rounded-lg text-lg px-8 py-4 text-center transition-all duration-300 shadow-aqua-glow-lg hover:shadow-aqua-glow"
        >
          Get Your Free Consultation
        </Link>
      </section>

      {/* How It Works Section */}
      <section>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-charcoal dark:text-white mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-slate/5 dark:bg-light-charcoal rounded-lg border border-slate/10 dark:border-charcoal/50">
            <div className="text-3xl font-bold text-aqua mb-2">1.</div>
            <h3 className="text-xl font-semibold text-charcoal dark:text-lightest-slate mb-2">Digitize Documents</h3>
            <p>We transform your physical and digital paperwork into structured, machine-readable data.</p>
          </div>
          <div className="p-6 bg-slate/5 dark:bg-light-charcoal rounded-lg border border-slate/10 dark:border-charcoal/50">
            <div className="text-3xl font-bold text-aqua mb-2">2.</div>
            <h3 className="text-xl font-semibold text-charcoal dark:text-lightest-slate mb-2">Automate Workflows</h3>
            <p>Our custom AI-powered workflows handle your most repetitive and time-consuming tasks.</p>
          </div>
          <div className="p-6 bg-slate/5 dark:bg-light-charcoal rounded-lg border border-slate/10 dark:border-charcoal/50">
            <div className="text-3xl font-bold text-aqua mb-2">3.</div>
            <h3 className="text-xl font-semibold text-charcoal dark:text-lightest-slate mb-2">Unlock Insights</h3>
            <p>Gain a competitive edge by making smarter, data-driven decisions based on your own business data.</p>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-charcoal dark:text-white mb-12">Our Core Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.title} className="p-6 bg-slate/5 dark:bg-light-charcoal rounded-lg border border-slate/10 dark:border-charcoal/50 text-center hover:shadow-aqua-glow hover:-translate-y-2 transition-all duration-300">
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold text-charcoal dark:text-lightest-slate mb-2">{service.title}</h3>
              <p className="text-sm">{service.description}</p>
            </div>
          ))}
        </div>
         <div className="text-center mt-12">
            <Link to="/services" className="text-aqua hover:underline font-semibold">
                Explore All Services &rarr;
            </Link>
        </div>
      </section>

      {/* Social Proof/Testimonials Section */}
      <section className="bg-slate/5 dark:bg-light-charcoal rounded-lg p-8 md:p-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-charcoal dark:text-white mb-12">Trusted by Small Businesses</h2>
        <div className="space-y-8">
          {testimonials.map((testimonial) => (
            <blockquote key={testimonial.company} className="max-w-3xl mx-auto text-center">
              <p className="text-lg md:text-xl italic text-charcoal dark:text-lightest-slate">"{testimonial.quote}"</p>
              <footer className="mt-4">
                <div className="font-bold text-charcoal dark:text-white">{testimonial.author}</div>
                <div className="text-slate dark:text-light-slate">{testimonial.company}</div>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* Blog Highlights Section */}
      <section>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-charcoal dark:text-white mb-12">Latest Insights</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.title} className="bg-slate/5 dark:bg-light-charcoal rounded-lg overflow-hidden border border-slate/10 dark:border-charcoal/50 hover:shadow-aqua-glow hover:-translate-y-2 transition-all duration-300">
              <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <p className="text-sm text-aqua mb-1">{post.category}</p>
                <h3 className="text-lg font-semibold text-charcoal dark:text-lightest-slate mb-2">{post.title}</h3>
                <p className="text-sm mb-4">{post.excerpt}</p>
                <Link to="/blog" className="font-semibold text-aqua hover:underline text-sm">Read More &rarr;</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;

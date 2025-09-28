
import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="space-y-20">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-charcoal dark:text-white mb-4">Get in Touch</h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate dark:text-light-slate">
          Ready to automate your business? We're here to help. Reach out for a free, no-obligation consultation.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-12">
        <div className="bg-slate/5 dark:bg-light-charcoal p-8 rounded-lg border border-slate/10 dark:border-charcoal/50">
          <h2 className="text-2xl font-bold text-charcoal dark:text-lightest-slate mb-6">Send us a Message</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-charcoal dark:text-light-slate">Your Name</label>
              <input type="text" id="name" className="bg-white dark:bg-charcoal border border-slate/20 dark:border-light-charcoal text-charcoal dark:text-white text-sm rounded-lg focus:ring-aqua focus:border-aqua block w-full p-2.5" placeholder="John Doe" required />
            </div>
             <div>
              <label htmlFor="company" className="block mb-2 text-sm font-medium text-charcoal dark:text-light-slate">Company Name</label>
              <input type="text" id="company" className="bg-white dark:bg-charcoal border border-slate/20 dark:border-light-charcoal text-charcoal dark:text-white text-sm rounded-lg focus:ring-aqua focus:border-aqua block w-full p-2.5" placeholder="Acme Inc." />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-charcoal dark:text-light-slate">Your Email</label>
              <input type="email" id="email" className="bg-white dark:bg-charcoal border border-slate/20 dark:border-light-charcoal text-charcoal dark:text-white text-sm rounded-lg focus:ring-aqua focus:border-aqua block w-full p-2.5" placeholder="name@company.com" required />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-charcoal dark:text-light-slate">Your Message</label>
              <textarea id="message" rows={4} className="bg-white dark:bg-charcoal border border-slate/20 dark:border-light-charcoal text-charcoal dark:text-white text-sm rounded-lg focus:ring-aqua focus:border-aqua block w-full p-2.5" placeholder="Tell us about your challenges..."></textarea>
            </div>
            <button type="submit" className="text-navy bg-aqua border border-aqua hover:bg-transparent hover:text-aqua focus:ring-4 focus:outline-none focus:ring-aqua/50 font-bold rounded-lg text-base px-6 py-3 text-center transition-all duration-300 shadow-aqua-glow-lg hover:shadow-aqua-glow">
              Send Message
            </button>
          </form>
        </div>
        <div className="space-y-8">
            <div className="p-6 bg-slate/5 dark:bg-light-charcoal rounded-lg border border-slate/10 dark:border-charcoal/50">
                <h3 className="text-xl font-semibold text-charcoal dark:text-lightest-slate mb-2">Direct Contact</h3>
                <p><strong>Email:</strong> <a href="mailto:contact@aetherai.com" className="text-aqua hover:underline">contact@aetherai.com</a></p>
                <p><strong>Phone:</strong> <a href="tel:+1234567890" className="text-aqua hover:underline">(123) 456-7890</a></p>
            </div>
            <div className="p-6 bg-slate/5 dark:bg-light-charcoal rounded-lg border border-slate/10 dark:border-charcoal/50">
                <h3 className="text-xl font-semibold text-charcoal dark:text-lightest-slate mb-2">Business Hours</h3>
                <p>Monday - Friday</p>
                <p>9:00 AM - 5:00 PM (EST)</p>
            </div>
             <div className="p-6 bg-slate/5 dark:bg-light-charcoal rounded-lg border border-slate/10 dark:border-charcoal/50">
                <h3 className="text-xl font-semibold text-charcoal dark:text-lightest-slate mb-2">Our Location</h3>
                <p>123 Tech Avenue, Innovation City, 12345</p>
                <div className="mt-4 h-48 bg-slate/10 dark:bg-charcoal rounded-lg flex items-center justify-center text-slate">
                    [ Map Placeholder ]
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

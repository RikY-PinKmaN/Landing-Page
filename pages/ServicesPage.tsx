
import React from 'react';
import { services } from '../constants';

const ServicesPage: React.FC = () => {
  return (
    <div className="space-y-20">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-charcoal dark:text-white mb-4">Our Services</h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate dark:text-light-slate">
          We offer a suite of AI-powered services designed to tackle the most common challenges faced by small businesses.
        </p>
      </section>

      <div className="space-y-16">
        {services.map((service, index) => (
          <section key={service.title} className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`order-1 ${index % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
              <div className="flex items-center space-x-4 mb-4">
                {service.icon}
                <h2 className="text-3xl font-bold text-charcoal dark:text-lightest-slate">{service.title}</h2>
              </div>
              <p className="mb-6">{service.description}</p>
              
              <h3 className="text-lg font-semibold text-charcoal dark:text-white mb-2">Key Features:</h3>
              <ul className="list-disc list-inside space-y-1 mb-6">
                {service.details.map(detail => <li key={detail}>{detail}</li>)}
              </ul>
              
              <h3 className="text-lg font-semibold text-charcoal dark:text-white mb-2">Your Benefits:</h3>
               <ul className="space-y-2">
                {service.benefits.map(benefit => (
                   <li key={benefit} className="flex items-start">
                     <svg className="w-5 h-5 text-aqua mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                     <span>{benefit}</span>
                   </li>
                ))}
              </ul>
            </div>
            <div className={`order-2 ${index % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}>
                <img src={`https://picsum.photos/seed/service${index}/600/400`} alt={service.title} className="rounded-lg shadow-xl" />
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;

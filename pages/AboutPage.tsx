
import React from 'react';
import { teamMembers } from '../constants';

const AboutPage: React.FC = () => {
  return (
    <div className="space-y-20">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-charcoal dark:text-white mb-4">About Aether AI</h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate dark:text-light-slate">
          We are a team of technologists and problem-solvers passionate about empowering small businesses with the transformative power of artificial intelligence.
        </p>
      </section>

      <section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-charcoal dark:text-lightest-slate mb-4">Our Mission</h2>
            <p className="mb-4">
              Our mission is to democratize AI, making sophisticated automation and data analysis tools accessible and affordable for small businesses. We believe that technology should be a great equalizer, enabling small enterprises to compete and thrive in an increasingly digital world.
            </p>
            <p>
              We are committed to building practical, results-driven solutions that eliminate tedious manual work, reduce errors, and unlock the hidden insights within our clients' data.
            </p>
          </div>
          <div>
             <img src="https://picsum.photos/seed/mission/600/400" alt="Abstract representation of mission" className="rounded-lg shadow-xl"/>
          </div>
        </div>
      </section>

       <section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
           <div className="order-last md:order-first">
             <img src="https://picsum.photos/seed/story/600/400" alt="Abstract representation of our story" className="rounded-lg shadow-xl"/>
          </div>
          <div className="order-first md:order-last">
            <h2 className="text-3xl font-bold text-charcoal dark:text-lightest-slate mb-4">Our Story</h2>
            <p className="mb-4">
              Founded in 2023, Aether AI was born from a simple observation: while large corporations were leveraging AI to gain massive efficiencies, small businesses were being left behind, still buried in paperwork and manual processes.
            </p>
            <p>
              Our founders, a blend of AI experts and small business consultants, saw an opportunity to create a company focused exclusively on the needs of this underserved market. We started with a focus on document processing and have since expanded to a full suite of automation and analytics services.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-charcoal dark:text-white mb-12">Meet the Team</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {teamMembers.map((member) => (
            <div key={member.name} className="p-6 bg-slate/5 dark:bg-light-charcoal rounded-lg border border-slate/10 dark:border-charcoal/50">
              <img src={member.imageUrl} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 border-2 border-aqua shadow-lg" />
              <h3 className="text-xl font-semibold text-charcoal dark:text-lightest-slate">{member.name}</h3>
              <p className="text-aqua font-medium mb-2">{member.role}</p>
              <p className="text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-charcoal dark:text-white mb-12">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-charcoal dark:text-lightest-slate mb-2">Innovation</h3>
                <p>We are constantly exploring new AI technologies to find practical, real-world applications for our clients.</p>
            </div>
            <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-charcoal dark:text-lightest-slate mb-2">Partnership</h3>
                <p>We work as an extension of your team, deeply understanding your business to build solutions that truly fit.</p>
            </div>
            <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-charcoal dark:text-lightest-slate mb-2">Simplicity</h3>
                <p>Powerful technology doesn't have to be complicated. We prioritize user-friendly design and clear communication.</p>
            </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

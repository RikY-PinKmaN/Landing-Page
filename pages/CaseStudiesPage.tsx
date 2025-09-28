
import React from 'react';
import { caseStudies } from '../constants';

const CaseStudiesPage: React.FC = () => {
  return (
    <div className="space-y-20">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-charcoal dark:text-white mb-4">Success Stories</h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate dark:text-light-slate">
          See how we've helped small businesses like yours overcome challenges and achieve remarkable results.
        </p>
      </section>

      <div className="space-y-16">
        {caseStudies.map((study, index) => (
          <div key={index} className="bg-slate/5 dark:bg-light-charcoal rounded-lg border border-slate/10 dark:border-charcoal/50 p-8 md:p-12">
            <h2 className="text-3xl font-bold text-charcoal dark:text-lightest-slate mb-8">
              Client: <span className="text-aqua">{study.client}</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-charcoal dark:text-white mb-3">The Problem</h3>
                <p>{study.problem}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-charcoal dark:text-white mb-3">Our Solution</h3>
                <p>{study.solution}</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-center text-charcoal dark:text-white mb-6">The Results</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                {study.results.map((result) => (
                  <div key={result.metric} className="p-4 bg-slate/10 dark:bg-charcoal rounded-lg">
                    <p className="text-3xl font-bold text-aqua">{result.value}</p>
                    <p className="text-sm font-medium text-slate dark:text-light-slate uppercase tracking-wider">{result.metric}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudiesPage;


import React from 'react';

const WhyAiPage: React.FC = () => {
  return (
    <div className="space-y-20">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-charcoal dark:text-white mb-4">Why AI for Small Business?</h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate dark:text-light-slate">
          Artificial Intelligence isn't just for tech giants. It's a powerful, accessible tool that can revolutionize how you run your business.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center text-charcoal dark:text-white mb-12">Demystifying AI</h2>
        <div className="max-w-3xl mx-auto bg-slate/5 dark:bg-light-charcoal p-8 rounded-lg border border-slate/10 dark:border-charcoal/50">
          <h3 className="text-2xl font-semibold text-charcoal dark:text-lightest-slate mb-4">It's Not as Complicated (or Expensive) as You Think</h3>
          <p className="mb-4">
            When you hear "AI," you might picture complex robots or massive data centers. For your business, AI is much simpler: it's about using smart software to handle tasks that traditionally require human intelligence, like reading documents, organizing data, and identifying patterns.
          </p>
          <p>
            You don't need a team of data scientists. We handle all the technical complexity, delivering a simple, powerful solution that integrates into your existing operations and starts delivering value from day one.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center text-charcoal dark:text-white mb-12">The Clear Benefits</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <BenefitCard title="Increase Efficiency" description="Automate repetitive tasks and free up your team to focus on growth and customer service." />
            <BenefitCard title="Reduce Costs" description="Minimize hours spent on manual labor and eliminate costly errors from manual data entry." />
            <BenefitCard title="Improve Accuracy" description="AI models process information with near-perfect accuracy, ensuring your data is reliable." />
            <BenefitCard title="Enhance Decision-Making" description="Gain clear insights from your own business data to make smarter, faster, and more strategic decisions." />
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center text-charcoal dark:text-white mb-12">Real-World Use Cases</h2>
        <div className="space-y-8">
            <UseCaseCard
                businessType="Local Accounting Firm"
                useCase="Automates the collection and data entry of client receipts during tax season, categorizing expenses and flagging missing information automatically."
            />
            <UseCaseCard
                businessType="Construction Contractor"
                useCase="Digitizes supplier invoices and creates an automated approval workflow, ensuring payments are timely and project budgets are tracked in real-time."
            />
            <UseCaseCard
                businessType="Retail Shop"
                useCase="Analyzes sales data to identify purchasing trends, optimize inventory levels, and predict demand for seasonal products."
            />
        </div>
      </section>
    </div>
  );
};

const BenefitCard: React.FC<{title: string, description: string}> = ({title, description}) => (
    <div className="p-6 bg-slate/5 dark:bg-light-charcoal rounded-lg border border-slate/10 dark:border-charcoal/50">
        <h3 className="text-xl font-semibold text-charcoal dark:text-lightest-slate text-aqua mb-2">{title}</h3>
        <p>{description}</p>
    </div>
);

const UseCaseCard: React.FC<{businessType: string, useCase: string}> = ({businessType, useCase}) => (
    <div className="p-6 bg-slate/5 dark:bg-light-charcoal rounded-lg border border-slate/10 dark:border-charcoal/50 md:flex items-center space-y-4 md:space-y-0 md:space-x-6">
        <div className="md:w-1/3">
            <h4 className="text-lg font-bold text-charcoal dark:text-lightest-slate">{businessType}</h4>
        </div>
        <div className="md:w-2/3">
            <p>{useCase}</p>
        </div>
    </div>
);

export default WhyAiPage;
